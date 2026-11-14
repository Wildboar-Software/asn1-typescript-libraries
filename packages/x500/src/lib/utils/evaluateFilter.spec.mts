import { ObjectIdentifier, type ASN1Element } from "@wildboar/asn1";
import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { evaluateEquality, evaluateApprox, evaluateMatchingRuleAssertion, evaluateFilter, type EvaluateFilterSettings } from "./evaluateFilter.mjs";
import { CannotPerformExactly } from "../errors.mjs";
import {
    MATCH_FLAG_APPROXIMATE,
    MATCH_FLAG_ORDERING_GREATER,
    MATCH_FLAG_ORDERING_OR_EQUAL,
    createEqualityMatcher,
    type ContextMatcher,
    type Matcher,
} from "../types/matching.mjs";
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
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";

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

function family (values: string[], contextual: string[] = []): [EntryInformation] {
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

const compareStored = createEqualityMatcher((el) => el, compare, () => value("unused"));
const alwaysTrueContext: ContextMatcher = () => true;

function settings (_kind: Kind = "equality", matchedValuesOnly: boolean = false): EvaluateFilterSettings {
    return {
        getEqualityMatcher: () => compareStored,
        getApproximateMatcher: () => compareStored,
        getOrderingMatcher: () => compareStored,
        getSubstringsMatcher: () => compareStored,
        getContextMatcher: () => alwaysTrueContext,
        determineAbsentMatch: () => true,
        isMatchingRuleCompatibleWithAttributeType: () => true,
        isAttributeSubtype: (a, b) => a.isEqualTo(b),
        permittedToMatch: () => true,
        matchedValuesOnly,
    };
}

describe("attribute-level filter matching", () => {
    function instrumented (kind: Kind, matchedValuesOnly: boolean) {
        const decode = vi.fn((el: ASN1Element) => el);
        const convert = vi.fn(() => value("unused"));
        const normalize = vi.fn((el: ASN1Element) => el);
        const compareValue = vi.fn(compare);
        const matcher = vi.fn(createEqualityMatcher(decode, compareValue, convert, false, normalize));
        const options: EvaluateFilterSettings = {
            ...settings(kind, matchedValuesOnly),
            getEqualityMatcher: () => matcher,
            getOrderingMatcher: () => matcher,
            getApproximateMatcher: () => matcher,
            getSubstringsMatcher: () => matcher,
        };
        return { decode, convert, normalize, compareValue, matcher, options };
    }

    describe.each<Kind>(["equality", "approximateMatch", "greaterOrEqual", "lessOrEqual", "substrings", "extensibleMatch"])("%s", (kind) => {
        it.each([false, true])("decodes/prepares once for mixed plain and contextual values, matchedValuesOnly=%s", (matchedValuesOnly) => {
            const { decode, convert, normalize, compareValue, matcher, options } = instrumented(kind, matchedValuesOnly);
            const entries = family(["false", "unknown", "true"], ["false", "true", "throw"]);
            const result = evaluateFilter(leaf(kind), entries, options);
            expect(result.matched).toBe(true);
            expect(result.matchedValues).toHaveLength(matchedValuesOnly ? 2 : 0);
            expect(result.matchedValues!.map((match) => match.value.utf8String)).toEqual(matchedValuesOnly ? ["true", "true"] : []);
            expect([...result.contributingEntries]).toEqual([0]);
            expect(matcher).toHaveBeenCalledTimes(1);
            const attribute = matcher.mock.calls[0][1];
            expect(attribute).toBeInstanceOf(Attribute);
            expect((attribute as Attribute).values).toHaveLength(3);
            expect((attribute as Attribute).valuesWithContext).toHaveLength(3);
            expect(matcher.mock.calls[0][2]).toBe(options.getEqualityMatcher);
            expect(decode).toHaveBeenCalledTimes(kind === "substrings" ? 0 : 1);
            expect(convert).toHaveBeenCalledTimes(kind === "substrings" ? 1 : 0);
            expect(normalize).toHaveBeenCalledTimes(1);
            expect(compareValue).toHaveBeenCalledTimes(matchedValuesOnly ? 6 : 3);
            if (matchedValuesOnly) {
                expect(matcher.mock.calls[0][4]).toBeInstanceOf(Attribute);
                const original = (entries[0].information![0] as { attribute: Attribute }).attribute;
                expect(result.matchedValues![1].contexts).toBe(original.valuesWithContext![1].contextList);
            } else {
                expect(matcher.mock.calls[0]).toHaveLength(4);
            }
        });

        it.each([false, true])("stops comparing at the first match without an output attribute, contextual=%s", (contextual) => {
            const { matcher, compareValue, normalize, options } = instrumented(kind, false);
            const texts = ["true", ...Array.from({ length: 100 }, () => "throw")];
            const entries = contextual ? family([], texts) : family(texts, ["throw"]);
            // Empty selectedContexts does not require identifying matched values.
            const filter = leaf(kind, { selectedContexts: [] });
            const result = evaluateFilter(filter, entries, { ...options, matchedValuesOnly: undefined });
            expect(result.matched).toBe(true);
            expect(result.matchedValues).toEqual([]);
            expect([...result.contributingEntries]).toEqual([0]);
            expect(matcher).toHaveBeenCalledTimes(1);
            expect(matcher.mock.calls[0]).toHaveLength(4);
            expect(compareValue).toHaveBeenCalledTimes(1);
            expect(normalize).toHaveBeenCalledTimes(1);
        });

        it.each([false, true])("excludes denied values before matching without modifying the entry, matchedValuesOnly=%s", (matchedValuesOnly) => {
            const { matcher, compareValue, options } = instrumented(kind, matchedValuesOnly);
            const entries = family(["true", "unknown", "false"], ["throw", "true"]);
            const result = evaluateFilter(leaf(kind), entries, {
                ...options,
                permittedToMatch: (_type, stored) => !stored || stored.utf8String === "false",
            });
            expect(result.matched).toBe(false);
            expect(result.matchedValues).toEqual([]);
            expect(matcher).toHaveBeenCalledTimes(1);
            expect(compareValue).toHaveBeenCalledTimes(1);
            const original = (entries[0].information![0] as { attribute: Attribute }).attribute;
            expect(original.values).toHaveLength(3);
            expect(original.valuesWithContext).toHaveLength(2);
        });

        it("does not turn empty or entirely denied attributes into UNDEFINED", () => {
            const { matcher, options } = instrumented(kind, true);
            expect(evaluateFilter(leaf(kind), family([]), options).matched).toBe(false);
            const denied = { ...options, permittedToMatch: (_type: typeof TYPE, stored?: ASN1Element) => !stored };
            expect(evaluateFilter(leaf(kind), family(["unknown"], ["throw"]), denied).matched).toBe(false);
            expect(evaluateFilter({ not: leaf(kind) }, family(["unknown"], ["throw"]), denied).matched).toBe(true);
            expect(matcher).not.toHaveBeenCalled();
        });

        it.each([false, true])("batches absent-attribute defaults, matchedValuesOnly=%s", (matchedValuesOnly) => {
            const { matcher, normalize, compareValue, options } = instrumented(kind, matchedValuesOnly);
            const profile = new RequestAttribute(TYPE, undefined, undefined, [
                new RequestAttribute_defaultValues_Item(undefined, [value("false"), value("unknown")]),
                new RequestAttribute_defaultValues_Item(undefined, [value("true"), value("throw")]),
            ]);
            const result = evaluateFilter(leaf(kind), [new EntryInformation({ rdnSequence: [] })], {
                ...options,
                requestAttributes: new Map([[TYPE.toString(), profile]]),
            });
            expect(result.matched).toBe(true);
            expect(result.matchedValues).toEqual([]);
            expect([...result.contributingEntries]).toEqual([0]);
            expect(matcher).toHaveBeenCalledTimes(1);
            expect(matcher.mock.calls[0]).toHaveLength(4);
            expect(compareValue).toHaveBeenCalledTimes(3);
            expect(normalize).toHaveBeenCalledTimes(1);
            expect((matcher.mock.calls[0][1] as Attribute).values).toHaveLength(4);
        });

        it.each([false, true])("preserves ternary results for absent-attribute defaults without returning them, matchedValuesOnly=%s", (matchedValuesOnly) => {
            for (const [defaultText, expected] of [["false", false], ["unknown", undefined], ["throw", undefined], ["true", true]] as const) {
                const { matcher, compareValue, options } = instrumented(kind, matchedValuesOnly);
                const profile = new RequestAttribute(TYPE, undefined, undefined, [
                    new RequestAttribute_defaultValues_Item(undefined, [value(defaultText)]),
                ]);
                const withDefaults = { ...options, requestAttributes: new Map([[TYPE.toString(), profile]]) };
                const entries = [new EntryInformation({ rdnSequence: [] })];
                const result = evaluateFilter(leaf(kind), entries, withDefaults);
                expect(result.matched).toBe(expected);
                expect(result.matchedValues).toEqual([]);
                expect([...result.contributingEntries]).toEqual(expected === true ? [0] : []);
                expect(matcher).toHaveBeenCalledTimes(1);
                expect(matcher.mock.calls[0]).toHaveLength(4);
                expect(compareValue).toHaveBeenCalledTimes(1);
                expect(evaluateFilter({ not: leaf(kind) }, entries, withDefaults).matched).toBe(expected === undefined ? undefined : !expected);
            }
        });

        it("keeps UNDEFINED when the assertion decoder throws", () => {
            const { decode, options } = instrumented(kind, true);
            const matcher = createEqualityMatcher(
                (el) => { decode(el); throw new Error("invalid assertion"); },
                compare,
                () => { throw new Error("invalid substrings"); },
            );
            const broken = {
                ...options,
                getEqualityMatcher: () => matcher,
                getOrderingMatcher: () => matcher,
                getApproximateMatcher: () => matcher,
                getSubstringsMatcher: () => matcher,
            };
            expect(evaluateFilter({ not: leaf(kind) }, family(["true", "true"], ["true"]), broken).matched).toBeUndefined();
            expect(decode).toHaveBeenCalledTimes(kind === "substrings" ? 0 : 1);
        });
    });

    describe.each<Kind>(["equality", "approximateMatch", "greaterOrEqual", "lessOrEqual", "substrings", "extensibleMatch"])("%s present-attribute defaults", (kind) => {
        it.each([false, true])("ignores defaults when the attribute is present, matchedValuesOnly=%s", (matchedValuesOnly) => {
            const { matcher, compareValue, normalize, options } = instrumented(kind, matchedValuesOnly);
            const defaults = [value("false"), value("unknown"), value("true"), value("throw")];
            const profile = new RequestAttribute(TYPE, undefined, undefined, [
                new RequestAttribute_defaultValues_Item(undefined, defaults),
            ]);
            const result = evaluateFilter(leaf(kind), family(["false"]), {
                ...options,
                requestAttributes: new Map([[TYPE.toString(), profile]]),
            });
            expect(result.matched).toBe(false);
            expect(result.matchedValues).toEqual([]);
            expect(result.contributingEntries.size).toBe(0);
            expect(matcher).toHaveBeenCalledTimes(1);
            expect(compareValue).toHaveBeenCalledTimes(1);
            expect(normalize).toHaveBeenCalledTimes(1);
            expect((matcher.mock.calls[0][1] as Attribute).values.map((el) => el.utf8String)).toEqual(["false"]);
        });

        it.each([false, true])("preserves stored-value results regardless of defaults, matchedValuesOnly=%s", (matchedValuesOnly) => {
            for (const [stored, defaultText, expected] of [
                ["false", "true", false],
                ["false", "unknown", false],
                ["false", "throw", false],
                ["unknown", "false", undefined],
                ["unknown", "true", undefined],
                ["throw", "true", undefined],
                ["true", "false", true],
                ["true", "throw", true],
                ["false", undefined, false],
                ["unknown", undefined, undefined],
                ["throw", undefined, undefined],
                ["true", undefined, true],
            ] as const) {
                for (const contextual of [false, true]) {
                    const { matcher, compareValue, options } = instrumented(kind, matchedValuesOnly);
                    // An empty default set is also inapplicable to a present attribute.
                    const defaults = defaultText === undefined ? [] : [new RequestAttribute_defaultValues_Item(undefined, [value(defaultText)])];
                    const profile = new RequestAttribute(TYPE, undefined, undefined, defaults);
                    const withDefaults = { ...options, requestAttributes: new Map([[TYPE.toString(), profile]]) };
                    const entries = contextual ? family([], [stored]) : family([stored]);
                    const result = evaluateFilter(leaf(kind), entries, withDefaults);
                    expect(result.matched).toBe(expected);
                    expect(result.matchedValues).toHaveLength(expected === true && matchedValuesOnly ? 1 : 0);
                    if (result.matchedValues!.length > 0) {
                        const original = (entries[0].information![0] as { attribute: Attribute }).attribute;
                        expect(result.matchedValues![0].value).toBe(contextual ? original.valuesWithContext![0].value : original.values[0]);
                    }
                    expect([...result.contributingEntries]).toEqual(expected === true ? [0] : []);
                    expect(matcher).toHaveBeenCalledTimes(1);
                    expect(compareValue).toHaveBeenCalledTimes(1);
                    expect(evaluateFilter({ not: leaf(kind) }, entries, withDefaults).matched).toBe(expected === undefined ? undefined : !expected);
                }
            }
        });

        it.each([false, true])("does not use defaults for an empty or entirely denied present attribute, matchedValuesOnly=%s", (matchedValuesOnly) => {
            for (const defaults of [[], [new RequestAttribute_defaultValues_Item(undefined, [value("true")])]]) {
                const { matcher, options } = instrumented(kind, matchedValuesOnly);
                const profile = new RequestAttribute(TYPE, undefined, undefined, defaults);
                for (const entries of [family([]), family(["unknown"], ["throw"])]) {
                    const result = evaluateFilter(leaf(kind), entries, {
                        ...options,
                        permittedToMatch: (_type, stored) => !stored,
                        requestAttributes: new Map([[TYPE.toString(), profile]]),
                    });
                    expect(result.matched).toBe(false);
                    expect(result.matchedValues).toEqual([]);
                    expect(result.contributingEntries.size).toBe(0);
                }
                expect(matcher).not.toHaveBeenCalled();
            }
        });

        it("reports only genuine stored matches when defaults are configured", () => {
            const { matcher, options } = instrumented(kind, true);
            const friend = ObjectIdentifier.fromString("1.2.3.11");
            const defaultValue = value("true");
            const storedValue = value("true");
            const profile = new RequestAttribute(TYPE, undefined, undefined, [
                new RequestAttribute_defaultValues_Item(undefined, [defaultValue]),
            ]);
            const entry = new EntryInformation({ rdnSequence: [] }, true, [
                { attribute: new Attribute(TYPE, [value("false")]) },
                { attribute: new Attribute(friend, [storedValue]) },
            ]);
            const result = evaluateFilter(leaf(kind), [entry], {
                ...options,
                getFriends: () => [friend],
                requestAttributes: new Map([[TYPE.toString(), profile]]),
            });
            expect(result.matched).toBe(true);
            expect(result.matchedValues).toHaveLength(1);
            expect(result.matchedValues![0].value).toBe(storedValue);
            expect(result.matchedValues![0].type).toBe(friend);
            expect(result.matchedValues![0].entryIndex).toBe(0);
            expect([...result.contributingEntries]).toEqual([0]);
            expect(matcher).toHaveBeenCalledTimes(2);
            expect(matcher.mock.calls[1][4]).toBeInstanceOf(Attribute);
        });
    });

    describe.each(["equality", "approximateMatch", "greaterOrEqual", "lessOrEqual"] as const)("%s contexts", (kind) => {
        const filter = leaf(kind, { selectedContexts: [new ContextAssertion(RULE, [value("context")])] });
        const contextMatcher: ContextMatcher = (_assertion, values) => {
            for (const stored of values) {
                if (stored.utf8String === "error") {
                    throw new Error("invalid context");
                }
                if (stored.utf8String === "accept") {
                    return true;
                }
            }
            return false;
        };

        function contextualFamily (items: [string, string][], plain: string[] = []): EntryInformation[] {
            return [new EntryInformation({ rdnSequence: [] }, true, [{ attribute: new Attribute(TYPE, plain.map(value), items.map(([text, context]) => (
                new Attribute_valuesWithContext_Item(value(text), [new Context(RULE, [value(context)])])
            ))) }])];
        }

        it.each([false, true])("matches one context-filtered attribute, including both value arrays, matchedValuesOnly=%s", (matchedValuesOnly) => {
            const { matcher, compareValue, normalize, options } = instrumented(kind, matchedValuesOnly);
            const matchContext = vi.fn(contextMatcher);
            const entries = contextualFamily([["throw", "reject"], ["true", "accept"], ["false", "accept"]], ["true", "false"]);
            const original = (entries[0].information![0] as { attribute: Attribute }).attribute;
            const result = evaluateFilter(filter, entries, { ...options, getContextMatcher: () => matchContext });
            expect(result.matched).toBe(true);
            expect(result.matchedValues).toHaveLength(matchedValuesOnly ? 2 : 0);
            expect(matcher).toHaveBeenCalledTimes(1);
            expect(normalize).toHaveBeenCalledTimes(1);
            expect(compareValue).toHaveBeenCalledTimes(matchedValuesOnly ? 4 : 1);
            expect(matchContext.mock.invocationCallOrder.at(-1)).toBeLessThan(matcher.mock.invocationCallOrder[0]);
            const selected = matcher.mock.calls[0][1] as Attribute;
            expect(selected.values).toEqual(original.values);
            expect(selected.valuesWithContext).toEqual(original.valuesWithContext!.slice(1));
            expect(compareValue.mock.calls.some((call) => call[1] === original.valuesWithContext![0].value)).toBe(false);
            expect(matcher.mock.calls[0]).toHaveLength(matchedValuesOnly ? 5 : 4);
            if (matchedValuesOnly) {
                expect(result.matchedValues![1].contexts).toBe(original.valuesWithContext![1].contextList);
            }
            expect(original.valuesWithContext).toHaveLength(3);
        });

        it.each([false, true])("never evaluates values rejected by contexts, matchedValuesOnly=%s", (matchedValuesOnly) => {
            const { matcher, compareValue, normalize, options } = instrumented(kind, matchedValuesOnly);
            const rejected = { ...options, getContextMatcher: () => () => false, determineAbsentMatch: () => false };
            for (const unknown of ["unknown", "throw"]) {
                for (const entries of [family([unknown], ["true"]), family([], ["true", unknown]), family([], [unknown, "true"])]) {
                    expect(evaluateFilter(filter, entries, rejected).matched).toBe(false);
                    expect(evaluateFilter({ not: filter }, entries, rejected).matched).toBe(true);
                }
            }
            expect(matcher).not.toHaveBeenCalled();
            expect(compareValue).not.toHaveBeenCalled();
            expect(normalize).not.toHaveBeenCalled();
        });

        it.each([false, true])("does not activate defaults when contexts reject a present attribute's values, matchedValuesOnly=%s", (matchedValuesOnly) => {
            for (const defaults of [[], [new RequestAttribute_defaultValues_Item(undefined, [value("true")])]]) {
                const { matcher, options } = instrumented(kind, matchedValuesOnly);
                const profile = new RequestAttribute(TYPE, undefined, undefined, defaults);
                const result = evaluateFilter(filter, contextualFamily([["unknown", "reject"]]), {
                    ...options,
                    getContextMatcher: () => contextMatcher,
                    requestAttributes: new Map([[TYPE.toString(), profile]]),
                });
                expect(result.matched).toBe(false);
                expect(result.matchedValues).toEqual([]);
                expect(matcher).not.toHaveBeenCalled();
            }
        });

        it.each([false, true])("preserves UNDEFINED for eligible values without a second pass, matchedValuesOnly=%s", (matchedValuesOnly) => {
            for (const unknown of ["unknown", "throw"]) {
                const { matcher, normalize, options } = instrumented(kind, matchedValuesOnly);
                const entries = contextualFamily([["true", "reject"], [unknown, "accept"]]);
                expect(evaluateFilter(filter, entries, { ...options, getContextMatcher: () => contextMatcher }).matched).toBeUndefined();
                expect(matcher).toHaveBeenCalledTimes(1);
                expect(normalize).toHaveBeenCalledTimes(1);
            }
        });

        it("stops at the first context-selected value match without collecting output", () => {
            const { matcher, compareValue, normalize, options } = instrumented(kind, false);
            const items: [string, string][] = [["throw", "reject"], ["true", "accept"], ...Array.from({ length: 100 }, (): [string, string] => ["throw", "accept"])];
            const result = evaluateFilter(filter, contextualFamily(items), { ...options, getContextMatcher: () => contextMatcher });
            expect(result.matched).toBe(true);
            expect(matcher).toHaveBeenCalledTimes(1);
            expect(matcher.mock.calls[0]).toHaveLength(4);
            expect(compareValue).toHaveBeenCalledTimes(1);
            expect(normalize).toHaveBeenCalledTimes(1);
        });

        it.each([false, true])("checks contexts once for all plain values, matchedValuesOnly=%s", (matchedValuesOnly) => {
            const { matcher, compareValue, options } = instrumented(kind, matchedValuesOnly);
            const absentMatch = vi.fn(() => true);
            const result = evaluateFilter(filter, family(Array.from({ length: 100 }, () => "true")), {
                ...options, determineAbsentMatch: absentMatch,
            });
            expect(result.matched).toBe(true);
            expect(absentMatch).toHaveBeenCalledTimes(1);
            expect(matcher).toHaveBeenCalledTimes(1);
            expect(compareValue).toHaveBeenCalledTimes(matchedValuesOnly ? 100 : 1);
        });

        it.each([false, true])("handles context errors with ternary logic, matchedValuesOnly=%s", (matchedValuesOnly) => {
            for (const [text, expected] of [["false", false], ["true", undefined], ["unknown", undefined], ["throw", undefined]] as const) {
                const { matcher, options } = instrumented(kind, matchedValuesOnly);
                const entries = contextualFamily([[text, "error"]]);
                const result = evaluateFilter(filter, entries, { ...options, getContextMatcher: () => contextMatcher });
                expect(result.matched).toBe(expected);
                expect(result.matchedValues).toEqual([]);
                expect(result.contributingEntries.size).toBe(0);
                expect(matcher).toHaveBeenCalledTimes(1);
                expect(matcher.mock.calls[0]).toHaveLength(4);
                expect(evaluateFilter({ not: filter }, entries, { ...options, getContextMatcher: () => contextMatcher }).matched).toBe(expected === false ? true : undefined);
            }
        });

        it.each([false, true])("checks uncertain plain contexts once without collecting matches, matchedValuesOnly=%s", (matchedValuesOnly) => {
            for (const [text, expected] of [["false", false], ["true", undefined], ["unknown", undefined]] as const) {
                const { matcher, options } = instrumented(kind, matchedValuesOnly);
                const absentMatch = vi.fn(() => { throw new Error("unknown absentMatch"); });
                const entries = family([text, ...Array.from({ length: 100 }, () => "false")]);
                const result = evaluateFilter(filter, entries, { ...options, determineAbsentMatch: absentMatch });
                expect(result.matched).toBe(expected);
                expect(absentMatch).toHaveBeenCalledTimes(1);
                expect(matcher).toHaveBeenCalledTimes(1);
                expect(matcher.mock.calls[0]).toHaveLength(4);
            }
        });

        it("does not allow fallback when a known direct match follows an uncertain sibling", () => {
            const { options } = instrumented(kind, true);
            for (const items of [
                [["false", "error"], ["false", "accept"], ["true", "reject"]],
                [["false", "accept"], ["false", "error"], ["true", "reject"]],
            ]) {
                const entries = contextualFamily(items as [string, string][]);
                const attribute = (entries[0].information![0] as { attribute: Attribute }).attribute;
                attribute.valuesWithContext![2].contextList[0] = new Context(RULE, [value("reject")], true);
                expect(evaluateFilter(filter, entries, { ...options, getContextMatcher: () => contextMatcher }).matched).toBe(false);
            }
        });

        it("does not assume fallback is available when a sibling context cannot be evaluated", () => {
            for (const [text, expected] of [["true", undefined], ["false", false]] as const) {
                const { options } = instrumented(kind, true);
                const entries = contextualFamily([["false", "error"], [text, "reject"]]);
                const attribute = (entries[0].information![0] as { attribute: Attribute }).attribute;
                attribute.valuesWithContext![1].contextList[0] = new Context(RULE, [value("reject")], true);
                expect(evaluateFilter(filter, entries, { ...options, getContextMatcher: () => contextMatcher }).matched).toBe(expected);
            }
        });

        it("caches uncertain sibling scans instead of repeating them for each fallback value", () => {
            const { options } = instrumented(kind, false);
            const items: [string, string][] = [["false", "error"], ...Array.from({ length: 50 }, (): [string, string] => ["false", "reject"])];
            const entries = contextualFamily(items);
            const attribute = (entries[0].information![0] as { attribute: Attribute }).attribute;
            for (const vwc of attribute.valuesWithContext!.slice(1)) {
                vwc.contextList[0] = new Context(RULE, [value("reject")], true);
            }
            const matchContext = vi.fn(contextMatcher);
            const result = evaluateFilter(filter, entries, { ...options, getContextMatcher: () => matchContext });
            expect(result.matched).toBe(false);
            // One direct evaluation per value and one shared sibling scan.
            expect(matchContext).toHaveBeenCalledTimes(2 * items.length);
        });
    });

    it("does not require matcher output to establish a context-constrained match", () => {
        const filter = leaf("equality", { selectedContexts: [new ContextAssertion(RULE, [value("context")])] });
        const options = { ...settings(), getEqualityMatcher: () => () => true };
        expect(evaluateFilter(filter, family(["true"]), options).matched).toBe(true);
        expect(evaluateFilter({ not: filter }, family(["true"]), options).matched).toBe(false);
    });

    it("retains ternary precedence and actual types across attributes, friends, DN values, and family members", () => {
        const friend = ObjectIdentifier.fromString("1.2.3.11");
        const subtype = ObjectIdentifier.fromString("1.2.3.12");
        const options = {
            ...settings("equality", true),
            getFriends: () => [friend],
            isAttributeSubtype: (a: typeof TYPE, b: typeof TYPE) => a.isEqualTo(b) || (a.isEqualTo(subtype) && b.isEqualTo(TYPE)),
            dnAttribute: true,
        };
        const entry = new EntryInformation({ rdnSequence: [[new AttributeTypeAndValue(subtype, value("true"))]] }, true, [
            { attribute: new Attribute(TYPE, [value("false"), value("false")]) },
            { attribute: new Attribute(friend, [value("unknown"), value("false")]) },
        ]);
        expect(evaluateFilter(leaf(), [entry], { ...options, dnAttribute: false }).matched).toBeUndefined();
        const result = evaluateFilter(leaf(), [...family(["unknown"]), entry], options);
        expect(result.matched).toBe(true);
        expect([...result.contributingEntries]).toEqual([1]);
        expect(result.matchedValues).toHaveLength(1);
        expect(result.matchedValues![0].type).toBe(subtype);
        expect(result.matchedValues![0].entryIndex).toBe(1);
    });
});

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
            getSubstringsMatcher: () => (assertion) => {
                const items = Array.isArray(assertion) ? assertion : [];
                let indeterminate = false;
                for (const item of items) {
                    const el = "any_" in item
                        ? item.any_
                        : "initial" in item
                            ? item.initial
                            : "final" in item
                                ? item.final
                                : undefined;
                    if (!el) {
                        continue;
                    }
                    if (el.utf8String === "unknown") {
                        indeterminate = true;
                        continue;
                    }
                    return false;
                }
                return indeterminate ? undefined : true;
            },
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
            getContextMatcher: () => (_assertion, values) => {
                for (const stored of values) {
                    if (stored.utf8String === "bad") {
                        throw new Error("invalid context");
                    }
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
        const withinBudget = evaluateFilter(nested("and", 127), entries, settings("equality", true));
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

describe("unavailable filter matching rules (M2)", () => {
    describe.each<Kind>(["equality", "approximateMatch", "extensibleMatch"])("%s", (kind) => {
        it.each([false, true])("does not compare raw encodings, matchedValuesOnly=%s", (matchedValuesOnly) => {
            const options: EvaluateFilterSettings = {
                ...settings(kind, matchedValuesOnly),
                getEqualityMatcher: () => undefined,
                getApproximateMatcher: () => undefined,
                getSubstringsMatcher: () => undefined,
            };
            // Both identical and different encodings are UNDEFINED without
            // the required rule. In particular, NOT must not grant a match.
            for (const text of ["assertion", "different"]) {
                for (const entries of [family([text]), family([], [text])]) {
                    const filter = leaf(kind);
                    const result = evaluateFilter(filter, entries, options);
                    expect(result.matched).toBeUndefined();
                    expect(result.matchedValues).toEqual([]);
                    expect(result.contributingEntries.size).toBe(0);
                    expect(evaluateFilter({ not: filter }, entries, options).matched).toBeUndefined();
                }
            }
        });

        it("does not let default values bypass an unavailable rule", () => {
            for (const defaultValues of [[], [new RequestAttribute_defaultValues_Item(undefined, [value("assertion")])]]) {
                const profile = new RequestAttribute(TYPE, undefined, undefined, defaultValues);
                const options: EvaluateFilterSettings = {
                    ...settings(kind),
                    getEqualityMatcher: () => undefined,
                    getApproximateMatcher: () => undefined,
                    getSubstringsMatcher: () => undefined,
                    requestAttributes: new Map([[TYPE.toString(), profile]]),
                };
                const entries = [new EntryInformation({ rdnSequence: [] })];
                expect(evaluateFilter(leaf(kind), entries, options).matched).toBeUndefined();
                expect(evaluateFilter({ not: leaf(kind) }, entries, options).matched).toBeUndefined();
            }
        });
    });

    it("returns UNDEFINED directly, rather than relying on the outer evaluator to catch an error", () => {
        const assertion = new AttributeValueAssertion(TYPE, value("assertion"));
        const extensible = new MatchingRuleAssertion([RULE], TYPE, value("assertion"));
        const options: EvaluateFilterSettings = {
            ...settings(),
            getEqualityMatcher: () => undefined,
            getApproximateMatcher: () => undefined,
            getSubstringsMatcher: () => undefined,
        };
        const entry = family(["assertion"])[0];
        expect(evaluateEquality(assertion, entry, options)).toBeUndefined();
        expect(evaluateApprox(assertion, entry, options)).toBeUndefined();
        expect(evaluateMatchingRuleAssertion(extensible, entry, options)).toBeUndefined();
        expect(() => evaluateMatchingRuleAssertion(extensible, entry, { ...options, performExactly: true })).toThrow(CannotPerformExactly);
    });

    it("selects each value-filter item with matching flags", () => {
        const seen: { kind: string, flags: number, array: boolean }[] = [];
        const record = (kind: string): Matcher => (assertion, _value, _get, flags = 0) => {
            seen.push({ kind, flags, array: Array.isArray(assertion) });
            return true;
        };
        const options: EvaluateFilterSettings = {
            ...settings(),
            getEqualityMatcher: () => record("equality"),
            getOrderingMatcher: () => record("ordering"),
            getApproximateMatcher: () => record("approximate"),
            getSubstringsMatcher: () => record("substrings"),
        };
        for (const kind of ["equality", "lessOrEqual", "greaterOrEqual", "approximateMatch", "substrings"] as const) {
            expect(evaluateFilter(leaf(kind), family(["true"]), options).matched).toBe(true);
        }
        expect(seen).toEqual([
            { kind: "equality", flags: 0, array: false },
            { kind: "ordering", flags: MATCH_FLAG_ORDERING_OR_EQUAL, array: false },
            {
                kind: "ordering",
                flags: MATCH_FLAG_ORDERING_GREATER | MATCH_FLAG_ORDERING_OR_EQUAL,
                array: false,
            },
            { kind: "approximate", flags: MATCH_FLAG_APPROXIMATE, array: false },
            { kind: "substrings", flags: 0, array: true },
        ]);
    });

    it("passes MATCH_FLAG_APPROXIMATE when approximate matching falls back to equality", () => {
        let flags = -1;
        const options: EvaluateFilterSettings = {
            ...settings(),
            getApproximateMatcher: () => undefined,
            getEqualityMatcher: () => (_assertion, _value, _get, seen = 0) => {
                flags = seen;
                return true;
            },
        };
        expect(evaluateFilter(leaf("approximateMatch"), family(["true"]), options).matched).toBe(true);
        expect(flags).toBe(MATCH_FLAG_APPROXIMATE);
    });

    it.each([false, true])("falls back from unsupported approximate matching to the equality rule, matchedValuesOnly=%s", (matchedValuesOnly) => {
        // X.511 7.8.2(f) permits equality fallback, not byte equality.
        const options: EvaluateFilterSettings = { ...settings("approximateMatch", matchedValuesOnly), getApproximateMatcher: () => undefined };
        expect(evaluateFilter(leaf("approximateMatch"), family(["true"]), options).matched).toBe(true);
        expect(evaluateFilter(leaf("approximateMatch"), family([], ["true"]), options).matched).toBe(true);
        expect(evaluateFilter(leaf("approximateMatch"), family(["assertion"]), options).matched).toBe(false);
    });

    it("still supports an explicitly resolved extensible rule from the substrings-rule lookup", () => {
        const options: EvaluateFilterSettings = { ...settings(), getEqualityMatcher: () => undefined };
        expect(evaluateFilter(leaf("extensibleMatch"), family(["true"]), options).matched).toBe(true);
    });
});

describe("extensible matching-rule applicability (M4)", () => {
    const subtype = ObjectIdentifier.fromString("1.2.3.10");
    const friend = ObjectIdentifier.fromString("1.2.3.11");
    const selectedTypes = [TYPE, subtype, friend];

    function extensible(dnAttributes = false): Filter {
        return { item: { extensibleMatch: new MatchingRuleAssertion([RULE], TYPE, value("assertion"), dnAttributes) } };
    }

    function applicabilitySettings(compatible: typeof TYPE[], performExactly = false, matchedValuesOnly = false): EvaluateFilterSettings {
        return {
            ...settings("extensibleMatch", matchedValuesOnly),
            getFriends: () => [friend],
            isAttributeSubtype: (a, b) => a.isEqualTo(b) || (a.isEqualTo(subtype) && b.isEqualTo(TYPE)),
            isMatchingRuleCompatibleWithAttributeType: (rule, type) => rule.isEqualTo(RULE) && compatible.some((allowed) => allowed.isEqualTo(type)),
            performExactly,
        };
    }

    function entry(type: typeof TYPE, text = "true", contextual = false): EntryInformation {
        return new EntryInformation({ rdnSequence: [] }, true, [{ attribute: new Attribute(
            type,
            contextual ? [] : [value(text)],
            contextual ? [new Attribute_valuesWithContext_Item(value(text), [new Context(RULE, [value("context")])])] : undefined,
        ) }]);
    }

    it.each([false, true])("rejects an incompatible explicitly asserted type even with no stored attribute, performExactly=%s", (performExactly) => {
        const options = applicabilitySettings([subtype, friend], performExactly);
        for (const entries of [[entry(TYPE)], [entry(subtype)], [new EntryInformation({ rdnSequence: [] })]]) {
            if (performExactly) {
                expect(() => evaluateFilter(extensible(), entries, options)).toThrow(CannotPerformExactly);
            } else {
                expect(evaluateFilter(extensible(), entries, options).matched).toBeUndefined();
                expect(evaluateFilter({ not: extensible() }, entries, options).matched).toBeUndefined();
            }
        }
    });

    describe.each([false, true])("performExactly=%s", (performExactly) => {
        it.each([subtype, friend])("checks the actual selected attribute type %s", (selected) => {
            const matcher = vi.fn(() => true);
            const options = { ...applicabilitySettings([TYPE], performExactly), getEqualityMatcher: () => matcher };
            for (const contextual of [false, true]) {
                const entries = [entry(selected, "true", contextual)];
                if (performExactly) {
                    expect(() => evaluateFilter(extensible(), entries, options)).toThrow(CannotPerformExactly);
                } else {
                    expect(evaluateFilter(extensible(), entries, options).matched).toBeUndefined();
                    expect(evaluateFilter({ not: extensible() }, entries, options).matched).toBeUndefined();
                }
            }
            expect(matcher).not.toHaveBeenCalled();
        });

        it("rejects an untyped assertion with no compatible attribute", () => {
            const filter: Filter = { item: { extensibleMatch: new MatchingRuleAssertion([RULE], undefined, value("assertion")) } };
            const options = applicabilitySettings([], performExactly);
            if (performExactly) {
                expect(() => evaluateFilter(filter, [entry(TYPE)], options)).toThrow(CannotPerformExactly);
            } else {
                expect(evaluateFilter(filter, [entry(TYPE)], options).matched).toBeUndefined();
                expect(evaluateFilter({ not: filter }, [entry(TYPE)], options).matched).toBeUndefined();
            }
        });

        it("checks default-profile compatibility, including empty default-value sets", () => {
            for (const defaultValues of [[], [new RequestAttribute_defaultValues_Item(undefined, [value("true")])]]) {
                const options = {
                    ...applicabilitySettings([TYPE], performExactly),
                    requestAttributes: new Map([[friend.toString(), new RequestAttribute(friend, undefined, undefined, defaultValues)]]),
                };
                const entries = [new EntryInformation({ rdnSequence: [] })];
                if (performExactly) {
                    expect(() => evaluateFilter(extensible(), entries, options)).toThrow(CannotPerformExactly);
                } else {
                    expect(evaluateFilter(extensible(), entries, options).matched).toBeUndefined();
                }
            }
        });

        it("checks selected distinguished-name attributes too", () => {
            const namedEntry = new EntryInformation({ rdnSequence: [[new AttributeTypeAndValue(subtype, value("true"))]] });
            const options = applicabilitySettings([TYPE], performExactly);
            if (performExactly) {
                expect(() => evaluateFilter(extensible(true), [namedEntry], options)).toThrow(CannotPerformExactly);
            } else {
                expect(evaluateFilter(extensible(true), [namedEntry], options).matched).toBeUndefined();
            }
        });
    });

    it.each([false, true])("does not invoke the matcher on incompatible siblings, matchedValuesOnly=%s", (matchedValuesOnly) => {
        for (const performExactly of [false, true]) {
            const options = applicabilitySettings([TYPE], performExactly, matchedValuesOnly);
            for (const reverse of [false, true]) {
                const attributes = [entry(TYPE, "false").information![0], entry(friend, "true").information![0]];
                const mixedEntry = new EntryInformation({ rdnSequence: [] }, true, reverse ? attributes.reverse() : attributes);
                expect(evaluateFilter(extensible(), [mixedEntry], options).matched).toBe(false);
            }
        }
    });

    it.each(selectedTypes)("still matches compatible selected type %s and reports its actual type", (selected) => {
        const result = evaluateFilter(extensible(), [entry(selected)], applicabilitySettings(selectedTypes, true, true));
        expect(result.matched).toBe(true);
        expect(result.matchedValues).toHaveLength(1);
        expect(result.matchedValues![0].type.isEqualTo(selected)).toBe(true);
        expect([...result.contributingEntries]).toEqual([0]);
    });

    it("still permits compatible default profiles", () => {
        const options = {
            ...applicabilitySettings(selectedTypes, true),
            requestAttributes: new Map([[friend.toString(), new RequestAttribute(friend, undefined, undefined, [
                new RequestAttribute_defaultValues_Item(undefined, [value("true")]),
            ])]]),
        };
        expect(evaluateFilter(extensible(), [new EntryInformation({ rdnSequence: [] })], options).matched).toBe(true);
    });

    it.each([false, true])("can use a compatible default profile after skipping an incompatible friend, performExactly=%s", (performExactly) => {
        const options = {
            ...applicabilitySettings([TYPE, subtype], performExactly),
            getFriends: () => [friend, subtype],
            requestAttributes: new Map([
                [friend.toString(), new RequestAttribute(friend, undefined, undefined, [
                    new RequestAttribute_defaultValues_Item(undefined, [value("false")]),
                ])],
                [subtype.toString(), new RequestAttribute(subtype, undefined, undefined, [
                    new RequestAttribute_defaultValues_Item(undefined, [value("true")]),
                ])],
            ]),
        };
        expect(evaluateFilter(extensible(), [new EntryInformation({ rdnSequence: [] })], options).matched).toBe(true);
    });
});
