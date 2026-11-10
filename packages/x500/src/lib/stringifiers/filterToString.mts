import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type { Filter } from "../modules/DirectoryAbstractService/Filter.ta.mjs";
import type { FilterItem } from "../modules/DirectoryAbstractService/FilterItem.ta.mjs";
import type { FilterItem_substrings } from "../modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type { FilterItem_substrings_strings_Item } from "../modules/DirectoryAbstractService/FilterItem-substrings-strings-Item.ta.mjs";
import type { MatchingRuleAssertion } from "../modules/DirectoryAbstractService/MatchingRuleAssertion.ta.mjs";
import type { Attribute } from "../modules/InformationFramework/Attribute.ta.mjs";
import type { AttributeTypeAssertion } from "../modules/InformationFramework/AttributeTypeAssertion.ta.mjs";
import type { AttributeValueAssertion } from "../modules/InformationFramework/AttributeValueAssertion.ta.mjs";
import type { AttributeValueAssertion_assertedContexts } from "../modules/InformationFramework/AttributeValueAssertion-assertedContexts.ta.mjs";
import type { ContextAssertionJSON } from "../modules/InformationFramework/ContextAssertion.ta.mjs";
import { gserSequence } from "../json.mjs";

/**
 * JSON of an {@link AttributeValueAssertion}. `assertion` is the JSON of
 * the open-type element.
 */
export type AttributeValueAssertionJSON = {
    type: string;
    assertion: unknown;
    assertedContexts?:
        | { allContexts: null }
        | { selectedContexts: ContextAssertionJSON[] };
};

/**
 * JSON of an {@link AttributeTypeAssertion}.
 */
export type AttributeTypeAssertionJSON = {
    type: string;
    assertedContexts?: ContextAssertionJSON[];
};

/**
 * JSON of a {@link MatchingRuleAssertion}.
 */
export type MatchingRuleAssertionJSON = {
    matchingRule: string[];
    type?: string;
    matchValue: unknown;
    dnAttributes?: boolean;
};

/**
 * JSON of one `FilterItem.substrings.strings` alternative.
 */
export type FilterItemSubstringsStringJSON =
    | { initial: unknown }
    | { any: unknown }
    | { final: unknown }
    | { control: { type: string; values: unknown[] } };

/**
 * JSON of a `FilterItem.substrings` SEQUENCE.
 */
export type FilterItemSubstringsJSON = {
    type: string;
    strings: FilterItemSubstringsStringJSON[];
};

/**
 * JSON Encoding Rules encoding of a {@link FilterItem}.
 */
export type FilterItemJSON =
    | { equality: AttributeValueAssertionJSON }
    | { substrings: FilterItemSubstringsJSON }
    | { greaterOrEqual: AttributeValueAssertionJSON }
    | { lessOrEqual: AttributeValueAssertionJSON }
    | { present: string }
    | { approximateMatch: AttributeValueAssertionJSON }
    | { extensibleMatch: MatchingRuleAssertionJSON }
    | { contextPresent: AttributeTypeAssertionJSON };

/**
 * JSON Encoding Rules encoding of a {@link Filter}.
 */
export type FilterJSON =
    | { item: FilterItemJSON }
    | { and: FilterJSON[] }
    | { or: FilterJSON[] }
    | { not: FilterJSON };

function oidSetToGser(oids: OBJECT_IDENTIFIER[]): string {
    return gserSequence(oids.map((oid) => oid.toString()));
}

function attributeToString(attr: Attribute): string {
    const parts: string[] = [ `type ${attr.type_.toString()}` ];
    if (attr.values.length > 0) {
        parts.push(`values ${gserSequence(attr.values.map((el) => el.toString()))}`);
    }
    return gserSequence(parts);
}

function assertedContextsToString(
    asserted: AttributeValueAssertion_assertedContexts,
): string | undefined {
    if ("allContexts" in asserted) {
        return "allContexts:NULL";
    }
    if ("selectedContexts" in asserted) {
        return `selectedContexts:${gserSequence(asserted.selectedContexts.map((ctx) => ctx.toString()))}`;
    }
    return undefined;
}

function attributeValueAssertionToString(
    ava: AttributeValueAssertion,
): string {
    const parts: string[] = [
        `type ${ava.type_.toString()}`,
        `assertion ${ava.assertion.toString()}`,
    ];
    if (ava.assertedContexts !== undefined) {
        const contexts = assertedContextsToString(ava.assertedContexts);
        if (contexts !== undefined) {
            parts.push(`assertedContexts ${contexts}`);
        }
    }
    return gserSequence(parts);
}

function attributeValueAssertionToJSON(
    ava: AttributeValueAssertion,
): AttributeValueAssertionJSON {
    const json: AttributeValueAssertionJSON = {
        type: ava.type_.toString(),
        assertion: ava.assertion.toJSON(),
    };
    if (ava.assertedContexts !== undefined) {
        if ("allContexts" in ava.assertedContexts) {
            json.assertedContexts = { allContexts: null };
        } else if ("selectedContexts" in ava.assertedContexts) {
            json.assertedContexts = {
                selectedContexts: ava.assertedContexts.selectedContexts.map(
                    (ctx) => ctx.toJSON(),
                ),
            };
        }
    }
    return json;
}

function attributeTypeAssertionToString(
    ata: AttributeTypeAssertion,
): string {
    const parts: string[] = [ `type ${ata.type_.toString()}` ];
    if (ata.assertedContexts !== undefined && ata.assertedContexts.length > 0) {
        parts.push(
            `assertedContexts ${gserSequence(ata.assertedContexts.map((ctx) => ctx.toString()))}`,
        );
    }
    return gserSequence(parts);
}

function attributeTypeAssertionToJSON(
    ata: AttributeTypeAssertion,
): AttributeTypeAssertionJSON {
    const json: AttributeTypeAssertionJSON = { type: ata.type_.toString() };
    if (ata.assertedContexts !== undefined && ata.assertedContexts.length > 0) {
        json.assertedContexts = ata.assertedContexts.map((ctx) => ctx.toJSON());
    }
    return json;
}

function matchingRuleAssertionToString(
    mra: MatchingRuleAssertion,
): string {
    const parts: string[] = [
        `matchingRule ${oidSetToGser(mra.matchingRule)}`,
    ];
    if (mra.type_ !== undefined) {
        parts.push(`type ${mra.type_.toString()}`);
    }
    parts.push(`matchValue ${mra.matchValue.toString()}`);
    if (mra.dnAttributes === true) {
        parts.push("dnAttributes TRUE");
    }
    return gserSequence(parts);
}

function matchingRuleAssertionToJSON(
    mra: MatchingRuleAssertion,
): MatchingRuleAssertionJSON {
    const json: MatchingRuleAssertionJSON = {
        matchingRule: mra.matchingRule.map((oid) => oid.toString()),
        matchValue: mra.matchValue.toJSON(),
    };
    if (mra.type_ !== undefined) {
        json.type = mra.type_.toString();
    }
    if (mra.dnAttributes === true) {
        json.dnAttributes = true;
    }
    return json;
}

function substringItemToString(
    item: FilterItem_substrings_strings_Item,
): string | undefined {
    if ("initial" in item) {
        return `initial:${item.initial.toString()}`;
    }
    if ("any_" in item) {
        return `any:${item.any_.toString()}`;
    }
    if ("final" in item) {
        return `final:${item.final.toString()}`;
    }
    if ("control" in item) {
        return `control:${attributeToString(item.control)}`;
    }
    return undefined;
}

function substringItemToJSON(
    item: FilterItem_substrings_strings_Item,
): FilterItemSubstringsStringJSON | undefined {
    if ("initial" in item) {
        return { initial: item.initial.toJSON() };
    }
    if ("any_" in item) {
        return { any: item.any_.toJSON() };
    }
    if ("final" in item) {
        return { final: item.final.toJSON() };
    }
    if ("control" in item) {
        return {
            control: {
                type: item.control.type_.toString(),
                values: item.control.values.map((el) => el.toJSON()),
            },
        };
    }
    return undefined;
}

function substringsToString(substrings: FilterItem_substrings): string {
    const strings: string[] = [];
    for (const item of substrings.strings) {
        const text = substringItemToString(item);
        if (text !== undefined) {
            strings.push(text);
        }
    }
    return gserSequence([
        `type ${substrings.type_.toString()}`,
        `strings ${gserSequence(strings)}`,
    ]);
}

function substringsToJSON(
    substrings: FilterItem_substrings,
): FilterItemSubstringsJSON {
    const strings: FilterItemSubstringsStringJSON[] = [];
    for (const item of substrings.strings) {
        const json = substringItemToJSON(item);
        if (json !== undefined) {
            strings.push(json);
        }
    }
    return {
        type: substrings.type_.toString(),
        strings,
    };
}

/**
 * @summary GSER of a `FilterItem`, or `undefined` if unrecognized
 * @function
 */
export function filterItemToString(item: FilterItem): string | undefined {
    if ("equality" in item) {
        return `equality:${attributeValueAssertionToString(item.equality)}`;
    }
    if ("substrings" in item) {
        return `substrings:${substringsToString(item.substrings)}`;
    }
    if ("greaterOrEqual" in item) {
        return `greaterOrEqual:${attributeValueAssertionToString(item.greaterOrEqual)}`;
    }
    if ("lessOrEqual" in item) {
        return `lessOrEqual:${attributeValueAssertionToString(item.lessOrEqual)}`;
    }
    if ("present" in item) {
        return `present:${item.present.toString()}`;
    }
    if ("approximateMatch" in item) {
        return `approximateMatch:${attributeValueAssertionToString(item.approximateMatch)}`;
    }
    if ("extensibleMatch" in item) {
        return `extensibleMatch:${matchingRuleAssertionToString(item.extensibleMatch)}`;
    }
    if ("contextPresent" in item) {
        return `contextPresent:${attributeTypeAssertionToString(item.contextPresent)}`;
    }
    return undefined;
}

/**
 * @summary JSON of a `FilterItem`, or `undefined` if unrecognized
 * @function
 */
export function filterItemToJSON(item: FilterItem): FilterItemJSON | undefined {
    if ("equality" in item) {
        return { equality: attributeValueAssertionToJSON(item.equality) };
    }
    if ("substrings" in item) {
        return { substrings: substringsToJSON(item.substrings) };
    }
    if ("greaterOrEqual" in item) {
        return { greaterOrEqual: attributeValueAssertionToJSON(item.greaterOrEqual) };
    }
    if ("lessOrEqual" in item) {
        return { lessOrEqual: attributeValueAssertionToJSON(item.lessOrEqual) };
    }
    if ("present" in item) {
        return { present: item.present.toString() };
    }
    if ("approximateMatch" in item) {
        return { approximateMatch: attributeValueAssertionToJSON(item.approximateMatch) };
    }
    if ("extensibleMatch" in item) {
        return { extensibleMatch: matchingRuleAssertionToJSON(item.extensibleMatch) };
    }
    if ("contextPresent" in item) {
        return { contextPresent: attributeTypeAssertionToJSON(item.contextPresent) };
    }
    return undefined;
}

/**
 * @summary GSER of a `Filter`, or `undefined` if unrecognized
 * @description
 *
 * Nested CHOICE identifiers use a colon, as in
 * `item:present:2.5.4.3` and `and:{ item:present:2.5.4.3 }`.
 * Empty `and` / `or` sets are printed (`and:{}` is TRUE).
 * Open-type assertion values use the element's value notation.
 * Unrecognized alternatives are omitted.
 *
 * @param filter The filter
 * @returns The GSER string, or `undefined` if unrecognized
 * @function
 * @public
 */
export function filterToString(filter: Filter): string | undefined {
    if ("item" in filter) {
        const item = filterItemToString(filter.item);
        return (item === undefined) ? undefined : `item:${item}`;
    }
    if ("and" in filter) {
        const parts: string[] = [];
        for (const inner of filter.and) {
            const text = filterToString(inner);
            if (text !== undefined) {
                parts.push(text);
            }
        }
        return `and:${gserSequence(parts)}`;
    }
    if ("or" in filter) {
        const parts: string[] = [];
        for (const inner of filter.or) {
            const text = filterToString(inner);
            if (text !== undefined) {
                parts.push(text);
            }
        }
        return `or:${gserSequence(parts)}`;
    }
    if ("not" in filter) {
        const inner = filterToString(filter.not);
        return (inner === undefined) ? undefined : `not:${inner}`;
    }
    return undefined;
}

/**
 * @summary JSON of a `Filter`, or `undefined` if unrecognized
 * @description
 *
 * A one-member object whose key is the CHOICE alternative. Open-type
 * assertion values are the JSON of each element. Unrecognized
 * alternatives are omitted.
 *
 * @param filter The filter
 * @returns The JSON Encoding Rules encoding, or `undefined`
 * @function
 * @public
 */
export function filterToJSON(filter: Filter): FilterJSON | undefined {
    if ("item" in filter) {
        const item = filterItemToJSON(filter.item);
        return (item === undefined) ? undefined : { item };
    }
    if ("and" in filter) {
        const and: FilterJSON[] = [];
        for (const inner of filter.and) {
            const json = filterToJSON(inner);
            if (json !== undefined) {
                and.push(json);
            }
        }
        return { and };
    }
    if ("or" in filter) {
        const or: FilterJSON[] = [];
        for (const inner of filter.or) {
            const json = filterToJSON(inner);
            if (json !== undefined) {
                or.push(json);
            }
        }
        return { or };
    }
    if ("not" in filter) {
        const not = filterToJSON(filter.not);
        return (not === undefined) ? undefined : { not };
    }
    return undefined;
}

export default filterToString;
