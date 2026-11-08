import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { evaluateFilter, type EvaluateFilterSettings } from "./evaluateFilter.mjs";
import { CannotPerformExactly } from "../errors.mjs";
import type EqualityMatcher from "../types/EqualityMatcher.mjs";
import type SubstringsMatcher from "../types/SubstringsMatcher.mjs";
import type { Filter } from "../modules/DirectoryAbstractService/Filter.ta.mjs";
import { AttributeValueAssertion } from "../modules/InformationFramework/AttributeValueAssertion.ta.mjs";
import { AttributeTypeAssertion } from "../modules/InformationFramework/AttributeTypeAssertion.ta.mjs";
import { Attribute } from "../modules/InformationFramework/Attribute.ta.mjs";
import { Attribute_valuesWithContext_Item } from "../modules/InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import { Context } from "../modules/InformationFramework/Context.ta.mjs";
import { ContextAssertion } from "../modules/InformationFramework/ContextAssertion.ta.mjs";
import { EntryInformation } from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import { FilterItem_substrings } from "../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import { MatchingRuleAssertion } from "../modules/DirectoryAbstractService/MatchingRuleAssertion.ta.mjs";
import { RequestAttribute } from "../modules/ServiceAdministration/RequestAttribute.ta.mjs";
import { RequestAttribute_defaultValues_Item } from "../modules/ServiceAdministration/RequestAttribute-defaultValues-Item.ta.mjs";

const TYPE = ObjectIdentifier.fromString("2.5.4.3");
const RULE = ObjectIdentifier.fromString("1.2.3.4");
const value = (text: string) => _encodeUTF8String(text, DER);
type Kind = "equality" | "approximateMatch" | "greaterOrEqual" | "lessOrEqual" | "substrings" | "extensibleMatch";

function leaf (kind: Kind = "equality", assertedContexts?: AttributeValueAssertion["assertedContexts"]): Filter {
    const ava = new AttributeValueAssertion(TYPE, value("assertion"), assertedContexts);
    switch (kind) {
        case "equality": return { item: { equality: ava } };
        case "approximateMatch": return { item: { approximateMatch: ava } };
        case "greaterOrEqual": return { item: { greaterOrEqual: ava } };
        case "lessOrEqual": return { item: { lessOrEqual: ava } };
        case "substrings": return { item: { substrings: new FilterItem_substrings(TYPE, [{ any_: value("assertion") }]) } };
        case "extensibleMatch": return { item: { extensibleMatch: new MatchingRuleAssertion([RULE], TYPE, value("assertion")) } };
    }
}

function family (values: string[], contextual: string[] = []): EntryInformation[] {
    return [new EntryInformation({ rdnSequence: [] }, true, [{
        attribute: new Attribute(TYPE, values.map(value), contextual.map((text) => (
            new Attribute_valuesWithContext_Item(value(text), [new Context(RULE, [value("context")])])
        ))),
    }])];
}

function compare (_assertion: ASN1Element, stored: ASN1Element): boolean | undefined {
    if (stored.utf8String === "throw") {
        throw new Error("Cannot decode or evaluate this value");
    }
    return stored.utf8String === "unknown" ? undefined : stored.utf8String === "true";
}

function settings (kind: Kind = "equality", matchedValuesOnly: boolean = false): EvaluateFilterSettings {
    // The legacy callback types omit UNDEFINED, but runtime matchers return it.
    const matcher = compare as EqualityMatcher;
    return {
        getEqualityMatcher: () => matcher,
        getApproximateMatcher: () => matcher,
        getOrderingMatcher: () => (assertion, stored) => {
            const result = compare(assertion, stored);
            return result === undefined ? NaN : result ? 0 : kind === "lessOrEqual" ? -1 : 1;
        },
        getSubstringsMatcher: () => compare as SubstringsMatcher,
        getContextMatcher: () => () => true,
        determineAbsentMatch: () => true,
        isMatchingRuleCompatibleWithAttributeType: () => true,
        isAttributeSubtype: (a, b) => a.isEqualTo(b),
        permittedToMatch: () => true,
        matchedValuesOnly,
    };
}

describe("indeterminate filter evaluation (H8)", () => {
    describe.each<Kind>(["equality", "approximateMatch", "greaterOrEqual", "lessOrEqual", "substrings", "extensibleMatch"])("%s", (kind) => {
        it.each([false, true])("preserves unknown and thrown results with matchedValuesOnly=%s", (matchedValuesOnly) => {
            const options = settings(kind, matchedValuesOnly);
            for (const values of [["unknown"], ["throw"], ["false", "unknown"], ["throw", "false"]]) {
                for (const [plain, contextual] of [[values, []], [[], values]]) {
                    const entries = family(plain, contextual);
                    const filter = leaf(kind);
                    expect(evaluateFilter(filter, entries, options).matched).toBeUndefined();
                    expect(evaluateFilter({ not: filter }, entries, options).matched).toBeUndefined();
                    expect(evaluateFilter({ not: { not: filter } }, entries, options).matched).toBeUndefined();
                }
            }
        });

        it.each([false, true])("lets a definite match dominate indeterminate sibling values with matchedValuesOnly=%s", (matchedValuesOnly) => {
            const options = settings(kind, matchedValuesOnly);
            for (const values of [["unknown", "true"], ["true", "throw"], ["false", "unknown", "true"]]) {
                expect(evaluateFilter(leaf(kind), family(values), options).matched).toBe(true);
                expect(evaluateFilter(leaf(kind), family([], values), options).matched).toBe(true);
            }
            expect(evaluateFilter(leaf(kind), family(["false"]), options).matched).toBe(false);
        });

        it("preserves indeterminate matches on default attribute values", () => {
            const defaults = new RequestAttribute(TYPE, undefined, undefined, [
                new RequestAttribute_defaultValues_Item(undefined, [value("unknown")]),
            ]);
            const options = { ...settings(kind), requestAttributes: new Map([[TYPE.toString(), defaults]]) };
            const entries = [new EntryInformation({ rdnSequence: [] })];
            expect(evaluateFilter(leaf(kind), entries, options).matched).toBeUndefined();
            expect(evaluateFilter({ not: leaf(kind) }, entries, options).matched).toBeUndefined();
        });
    });

    it("preserves X.511 three-valued AND, OR, and NOT truth tables", () => {
        const filters: Filter[] = [{ and: [] }, { or: [] }, leaf()];
        const truth = [true, false, undefined];
        const entries = family(["unknown"]);
        for (let a = 0; a < filters.length; a++) {
            expect(evaluateFilter({ not: filters[a] }, entries, settings()).matched).toBe(
                truth[a] === undefined ? undefined : !truth[a],
            );
            for (let b = 0; b < filters.length; b++) {
                const and = truth[a] === false || truth[b] === false
                    ? false : truth[a] === undefined || truth[b] === undefined ? undefined : true;
                const or = truth[a] === true || truth[b] === true
                    ? true : truth[a] === undefined || truth[b] === undefined ? undefined : false;
                expect(evaluateFilter({ and: [filters[a], filters[b]] }, entries, settings()).matched).toBe(and);
                expect(evaluateFilter({ or: [filters[a], filters[b]] }, entries, settings()).matched).toBe(or);
            }
        }
    });

    it("retains indeterminate results across family members", () => {
        const entries = [...family(["false"]), ...family(["unknown"])];
        expect(evaluateFilter(leaf(), entries, settings()).matched).toBeUndefined();
        expect(evaluateFilter({ not: leaf() }, entries, settings()).matched).toBeUndefined();
        entries.push(...family(["true"]));
        expect(evaluateFilter(leaf(), entries, settings()).matched).toBe(true);
    });

    it("lets a false substring piece dominate an unknown piece for that value", () => {
        const filter: Filter = { item: { substrings: new FilterItem_substrings(TYPE, [
            { any_: value("unknown") }, { any_: value("false") },
        ]) } };
        const options: EvaluateFilterSettings = {
            ...settings(),
            getSubstringsMatcher: () => ((assertion) => assertion.utf8String === "unknown" ? undefined : false) as SubstringsMatcher,
        };
        expect(evaluateFilter(filter, family(["value"]), options).matched).toBe(false);
    });

    it("does not negate a context-matcher exception into an authorization", () => {
        const filter: Filter = { item: { contextPresent: new AttributeTypeAssertion(TYPE, [new ContextAssertion(RULE, [value("context")])]) } };
        const options: EvaluateFilterSettings = {
            ...settings(), getContextMatcher: () => () => { throw new Error("unavailable"); },
        };
        expect(evaluateFilter({ not: filter }, family([], ["value"]), options).matched).toBeUndefined();
    });

    it.each(["equality", "approximateMatch", "greaterOrEqual", "lessOrEqual", "contextPresent"] as const)("lets a definite %s context match dominate an indeterminate sibling", (kind) => {
        const assertion = new ContextAssertion(RULE, [value("context")]);
        const filter: Filter = kind === "contextPresent"
            ? { item: { contextPresent: new AttributeTypeAssertion(TYPE, [assertion]) } }
            : leaf(kind, { selectedContexts: [assertion] });
        const options: EvaluateFilterSettings = {
            ...settings(kind === "contextPresent" ? "equality" : kind, true),
            getContextMatcher: () => (_assertion, stored) => {
                if (stored.utf8String === "bad") {
                    throw new Error("invalid context");
                }
                return true;
            },
        };
        const contextual = (text: string) => new Attribute_valuesWithContext_Item(value("true"), [new Context(RULE, [value(text)])]);
        for (const contexts of [["bad", "good"], ["good", "bad"]]) {
            const entries = [new EntryInformation({ rdnSequence: [] }, true, [{ attribute: new Attribute(TYPE, [], contexts.map(contextual)) }])];
            expect(evaluateFilter(filter, entries, options).matched).toBe(true);
        }
    });

    it("still raises CannotPerformExactly when explicitly requested", () => {
        const options: EvaluateFilterSettings = {
            ...settings(),
            getEqualityMatcher: () => undefined,
            getSubstringsMatcher: () => undefined,
            performExactly: true,
        };
        expect(() => evaluateFilter(leaf("extensibleMatch"), family(["value"]), options)).toThrow(CannotPerformExactly);
    });
});

describe("bounded filter evaluation (M5)", () => {
    function nested(kind: "and" | "or" | "not", depth: number): Filter {
        let filter = leaf();
        for (let i = 0; i < depth; i++) {
            filter = kind === "not" ? { not: filter }
                : kind === "and" ? { and: [filter] } : { or: [filter] };
        }
        return filter;
    }

    it.each(["and", "or", "not"] as const)("bounds 10,000 nested %s nodes without overflowing", (kind) => {
        const entries = family(["true"]);
        const filter = nested(kind, 10_000);
        for (const candidate of [filter, { not: filter }, { not: { not: filter } }]) {
            const result = evaluateFilter(candidate, entries, settings());
            expect(result.matched).toBeUndefined();
            expect(result.contributingEntries.size).toBe(0);
            expect(result.matchedValues ?? []).toEqual([]);
        }
    });

    it("evaluates all 128 allowed nodes, but not a 129th node", () => {
        // 127 AND wrappers plus the equality leaf exactly fill the budget.
        const entries = family(["true"]);
        const withinBudget = evaluateFilter(nested("and", 127), entries, settings());
        expect(withinBudget.matched).toBe(true);
        expect([...withinBudget.contributingEntries]).toEqual([0]);
        expect(withinBudget.matchedValues).toHaveLength(1);
        expect(evaluateFilter(nested("and", 128), entries, settings()).matched).toBeUndefined();
    });

    it.each(["and", "or", "not"] as const)("honors a lower recursionTTL through %s nodes", (kind) => {
        const filter = nested(kind, 2); // Two wrappers plus the equality leaf.
        const entries = family(["true"]);
        expect(evaluateFilter(filter, entries, settings(), undefined, 2).matched).toBeUndefined();
        expect(evaluateFilter(filter, entries, settings(), undefined, 3).matched).toBe(true);
    });

    it.each(["and", "or", "not"] as const)("allows recursionTTL above the default through %s nodes", (kind) => {
        const filter = nested(kind, 128); // 129 nodes, including the leaf.
        const entries = family(["true"]);
        expect(evaluateFilter(filter, entries, settings(), undefined, undefined).matched).toBeUndefined();
        expect(evaluateFilter(filter, entries, settings(), undefined, 129).matched).toBe(true);
    });

    it.each([0, -1, NaN, Infinity, -Infinity, 1.5])("returns UNDEFINED for unusable recursionTTL %s", (recursionTTL) => {
        const entries = family(["true"]);
        for (const filter of [leaf(), { not: leaf() }, { not: { not: leaf() } }]) {
            const result = evaluateFilter(filter, entries, settings(), undefined, recursionTTL);
            expect(result.matched).toBeUndefined();
            expect(result.contributingEntries.size).toBe(0);
            expect(result.matchedValues ?? []).toEqual([]);
        }
    });

    it("preserves three-valued AND/OR semantics around exhausted branches", () => {
        const exhausted = nested("not", 10_000);
        const trueFilter: Filter = { and: [] };
        const falseFilter: Filter = { or: [] };
        for (const reversed of [false, true]) {
            const children = (other: Filter): Filter[] => reversed ? [other, exhausted] : [exhausted, other];
            expect(evaluateFilter({ and: children(trueFilter) }, [], settings()).matched).toBeUndefined();
            expect(evaluateFilter({ or: children(falseFilter) }, [], settings()).matched).toBeUndefined();
            expect(evaluateFilter({ and: children(falseFilter) }, [], settings()).matched).toBe(false);
            expect(evaluateFilter({ or: children(trueFilter) }, [], settings()).matched).toBe(true);
            expect(evaluateFilter({ not: { and: children(trueFilter) } }, [], settings()).matched).toBeUndefined();
            expect(evaluateFilter({ not: { or: children(falseFilter) } }, [], settings()).matched).toBeUndefined();
        }
    });

    it("also bounds cyclic decoded filters", () => {
        const cyclic: { not: Filter } = { not: leaf() };
        cyclic.not = cyclic;
        expect(evaluateFilter(cyclic, [], settings()).matched).toBeUndefined();
    });
});
