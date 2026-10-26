import * as asn1 from "@wildboar/asn1";
import type {
    Filter,
} from "../../src/lib/modules/DirectoryAbstractService/Filter.ta.mjs";
import type {
    FilterItem,
} from "../../src/lib/modules/DirectoryAbstractService/FilterItem.ta.mjs";
import {
    AttributeValueAssertion,
} from "../../src/lib/modules/InformationFramework/AttributeValueAssertion.ta.mjs";
import {
    Context,
} from "../../src/lib/modules/InformationFramework/Context.ta.mjs";
import {
    ContextAssertion,
} from "../../src/lib/modules/InformationFramework/ContextAssertion.ta.mjs";
import {
    AttributeTypeAssertion,
} from "../../src/lib/modules/InformationFramework/AttributeTypeAssertion.ta.mjs";
import {
    MatchingRuleAssertion,
} from "../../src/lib/modules/DirectoryAbstractService/MatchingRuleAssertion.ta.mjs";
import {
    Attribute,
} from "../../src/lib/modules/InformationFramework/Attribute.ta.mjs";
import {
    Attribute_valuesWithContext_Item,
} from "../../src/lib/modules/InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import {
    EntryInformation,
} from "../../src/lib/modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import {
    FilterItem_substrings,
} from "../../src/lib/modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type {
    Name,
} from "../../src/lib/modules/InformationFramework/Name.ta.mjs";
import { evaluateFilter, type EvaluateFilterSettings } from "../../src/lib/utils/evaluateFilter.mjs";
import type EqualityMatcher from "../../src/lib/types/EqualityMatcher.mjs";
import type OrderingMatcher from "../../src/lib/types/OrderingMatcher.mjs";
import type SubstringsMatcher from "../../src/lib/types/SubstringsMatcher.mjs";
import { type OBJECT_IDENTIFIER } from "@wildboar/asn1";

const TRUE_ELEMENT = new asn1.DERElement(
    asn1.ASN1TagClass.universal,
    asn1.ASN1Construction.primitive,
    asn1.ASN1UniversalType.boolean,
    true,
);

const FALSE_ELEMENT = new asn1.DERElement(
    asn1.ASN1TagClass.universal,
    asn1.ASN1Construction.primitive,
    asn1.ASN1UniversalType.boolean,
    false,
);

const INT_5 = new asn1.DERElement(
    asn1.ASN1TagClass.universal,
    asn1.ASN1Construction.primitive,
    asn1.ASN1UniversalType.integer,
    5,
);

const INT_7 = new asn1.DERElement(
    asn1.ASN1TagClass.universal,
    asn1.ASN1Construction.primitive,
    asn1.ASN1UniversalType.integer,
    7,
);

const HELLO_WORLD_STRING = new asn1.DERElement(
    asn1.ASN1TagClass.universal,
    asn1.ASN1Construction.primitive,
    asn1.ASN1UniversalType.utf8String,
    "Hello World",
);

const FILLER_NAME: Name = {
    rdnSequence: [],
};

const FILLER_ATTRIBUTE_TYPE_1 = asn1.ObjectIdentifier.fromParts([1, 1, 1, 1]);
const FILLER_ATTRIBUTE_TYPE_2 = asn1.ObjectIdentifier.fromParts([1, 2, 2, 2]);

const FILLER_CONTEXT_TYPE_1 = asn1.ObjectIdentifier.fromParts([2, 1, 1, 1]);

const FILLER_MATCHING_RULE_TYPE_1 = asn1.ObjectIdentifier.fromParts([0, 1, 1, 1]);

const BOOLEAN_EQUALITY_MATCHING_RULE: EqualityMatcher = (assertion, value) => (assertion.value[0] === value.value[0]);

// This will only work for INTEGERs within [0,127].
const INTEGER_ORDERING_RULE: OrderingMatcher = (assertion, value) => (assertion.value[0] - value.value[0]);

type Utf8SubstringPiece =
    | { readonly initial: asn1.ASN1Element }
    | { readonly any_: asn1.ASN1Element }
    | { readonly final: asn1.ASN1Element };

/**
 * Ordered, non-overlapping UTF-8 substring hook. `fromFilter` keeps the
 * filter components; `evaluateSubstring` passes that array back in.
 */
const UTF8_SUBSTRING_RULE: SubstringsMatcher = Object.assign(
    (assertion: asn1.ASN1Element, value: asn1.ASN1Element): boolean => {
        const pieces = assertion as unknown as readonly Utf8SubstringPiece[];
        const stored = value.utf8String;
        if (pieces.length === 0) {
            return false;
        }
        let cursor = 0;
        let index = 0;
        const first = pieces[0];
        if ("initial" in first) {
            const needle = first.initial.utf8String;
            if (needle.length === 0 || !stored.startsWith(needle)) {
                return false;
            }
            cursor = needle.length;
            index = 1;
        }
        let end = pieces.length;
        const last = pieces[pieces.length - 1];
        const hasFinal = "final" in last;
        if (hasFinal) {
            end--;
        }
        for (; index < end; index++) {
            const piece = pieces[index];
            if (!("any_" in piece)) {
                return false;
            }
            const needle = piece.any_.utf8String;
            const found = stored.indexOf(needle, cursor);
            if (found < 0) {
                return false;
            }
            cursor = found + needle.length;
        }
        if (hasFinal && "final" in last) {
            const needle = last.final.utf8String;
            if (
                needle.length === 0
                || !stored.endsWith(needle)
                || stored.length - needle.length < cursor
            ) {
                return false;
            }
        }
        return true;
    },
    {
        fromFilter (item: FilterItem_substrings) {
            if (item.strings.length === 0) {
                return undefined;
            }
            for (let i = 0; i < item.strings.length; i++) {
                const component = item.strings[i];
                if (asn1.ASN1Element.isElement(component)) {
                    return undefined;
                }
                if ("initial" in component && i !== 0) {
                    return undefined;
                }
                if ("final" in component && i !== item.strings.length - 1) {
                    return undefined;
                }
            }
            return item.strings as unknown as ReturnType<SubstringsMatcher["fromFilter"]>;
        },
    },
);

const ALWAYS_COMPATIBLE: EvaluateFilterSettings["isMatchingRuleCompatibleWithAttributeType"] = () => true;
const NO_SUBTYPING: EvaluateFilterSettings["isAttributeSubtype"] = (
    at: OBJECT_IDENTIFIER,
    parent: OBJECT_IDENTIFIER,
) => (at.toString() === parent.toString());
const ALWAYS_PERMITTED: EvaluateFilterSettings["permittedToMatch"] = () => true;

const BASIC_BOOLEAN_FILTER_ITEM: FilterItem = {
    equality: new AttributeValueAssertion(
        FILLER_ATTRIBUTE_TYPE_1,
        TRUE_ELEMENT,
        undefined,
        [],
    ),
};

const BASIC_PRESENCE_FILTER_ITEM: FilterItem = {
    present: FILLER_ATTRIBUTE_TYPE_1,
};

describe("evaluateFilter", () => {
    it("evaluates a basic equality filter", () => {
        const filter: Filter = {
            item: BASIC_BOOLEAN_FILTER_ITEM,
        };

        const entry: EntryInformation = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [ TRUE_ELEMENT ],
                        undefined,
                    ),
                },
            ],
            false,
            false,
            false,
        );

        const options: EvaluateFilterSettings = {
            getEqualityMatcher: () => BOOLEAN_EQUALITY_MATCHING_RULE,
            getOrderingMatcher: () => undefined,
            getSubstringsMatcher: () => undefined,
            getContextMatcher: () => undefined,
            determineAbsentMatch: () => true, // TRUE is the default for &absentMatch.
            getApproximateMatcher: () => undefined,
            isMatchingRuleCompatibleWithAttributeType: ALWAYS_COMPATIBLE,
            isAttributeSubtype: NO_SUBTYPING,
            permittedToMatch: ALWAYS_PERMITTED,
        };

        expect(evaluateFilter(filter, [entry], options).matched).toBeTruthy();
    });

    it("evaluates a basic NOT equality filter", () => {
        const filter: Filter = {
            not: {
                item: BASIC_BOOLEAN_FILTER_ITEM,
            },
        };

        const entry: EntryInformation = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [ TRUE_ELEMENT ],
                        undefined,
                    ),
                },
            ],
            false,
            false,
            false,
        );

        const options: EvaluateFilterSettings = {
            getEqualityMatcher: () => BOOLEAN_EQUALITY_MATCHING_RULE,
            getOrderingMatcher: () => undefined,
            getSubstringsMatcher: () => undefined,
            getContextMatcher: () => undefined,
            determineAbsentMatch: () => true, // TRUE is the default for &absentMatch.
            getApproximateMatcher: () => undefined,
            isMatchingRuleCompatibleWithAttributeType: ALWAYS_COMPATIBLE,
            isAttributeSubtype: NO_SUBTYPING,
            permittedToMatch: ALWAYS_PERMITTED,
        };

        expect(evaluateFilter(filter, [entry], options).matched).toBeFalsy();
    });

    it("evaluates a basic AND filter", () => {

        const additionalFilterItem: FilterItem = {
            equality: new AttributeValueAssertion(
                FILLER_ATTRIBUTE_TYPE_2,
                FALSE_ELEMENT,
                undefined,
                [],
            ),
        };

        const filter: Filter = {
            and: [
                {
                    item: BASIC_BOOLEAN_FILTER_ITEM,
                },
                {
                    item: additionalFilterItem,
                },
            ],
        };

        const entry: EntryInformation = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [ TRUE_ELEMENT ],
                        undefined,
                    ),
                },
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_2,
                        [ FALSE_ELEMENT ],
                        undefined,
                    ),
                }
            ],
            false,
            false,
            false,
        );

        const options: EvaluateFilterSettings = {
            getEqualityMatcher: () => BOOLEAN_EQUALITY_MATCHING_RULE,
            getOrderingMatcher: () => undefined,
            getSubstringsMatcher: () => undefined,
            getContextMatcher: () => undefined,
            determineAbsentMatch: () => true, // TRUE is the default for &absentMatch.
            getApproximateMatcher: () => undefined,
            isMatchingRuleCompatibleWithAttributeType: ALWAYS_COMPATIBLE,
            isAttributeSubtype: NO_SUBTYPING,
            permittedToMatch: ALWAYS_PERMITTED,
        };

        expect(evaluateFilter(filter, [entry], options).matched).toBeTruthy();
    });

    it("evaluates a basic OR filter", () => {

        const filterItemThatShouldNotMatch: FilterItem = {
            equality: new AttributeValueAssertion(
                FILLER_ATTRIBUTE_TYPE_2,
                TRUE_ELEMENT,
                undefined,
                [],
            ),
        };

        const filter: Filter = {
            or: [
                {
                    item: BASIC_BOOLEAN_FILTER_ITEM,
                },
                {
                    item: filterItemThatShouldNotMatch,
                },
            ],
        };

        const entry: EntryInformation = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [ TRUE_ELEMENT ],
                        undefined,
                    ),
                },
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_2,
                        [ FALSE_ELEMENT ],
                        undefined,
                    ),
                }
            ],
            false,
            false,
            false,
        );

        const options: EvaluateFilterSettings = {
            getEqualityMatcher: () => BOOLEAN_EQUALITY_MATCHING_RULE,
            getOrderingMatcher: () => undefined,
            getSubstringsMatcher: () => undefined,
            getContextMatcher: () => undefined,
            determineAbsentMatch: () => true, // TRUE is the default for &absentMatch.
            getApproximateMatcher: () => undefined,
            isMatchingRuleCompatibleWithAttributeType: ALWAYS_COMPATIBLE,
            isAttributeSubtype: NO_SUBTYPING,
            permittedToMatch: ALWAYS_PERMITTED,
        };

        expect(evaluateFilter(filter, [entry], options).matched).toBeTruthy();
    });

    it("evaluates a basic substrings filter item", () => {
        const hellString = new asn1.DERElement(
            asn1.ASN1TagClass.universal,
            asn1.ASN1Construction.primitive,
            asn1.ASN1UniversalType.utf8String,
            "Hell",
        );

        const filter: Filter = {
            item: {
                substrings: new FilterItem_substrings(
                    FILLER_ATTRIBUTE_TYPE_1,
                    [
                        {
                            initial: hellString,
                        },
                    ],
                ),
            },
        };

        const entry: EntryInformation = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [ HELLO_WORLD_STRING ],
                        undefined,
                    ),
                },
            ],
            false,
            false,
            false,
        );

        const options: EvaluateFilterSettings = {
            getEqualityMatcher: () => BOOLEAN_EQUALITY_MATCHING_RULE,
            getOrderingMatcher: () => undefined,
            getSubstringsMatcher: () => UTF8_SUBSTRING_RULE,
            getContextMatcher: () => undefined,
            determineAbsentMatch: () => true, // TRUE is the default for &absentMatch.
            getApproximateMatcher: () => undefined,
            isMatchingRuleCompatibleWithAttributeType: ALWAYS_COMPATIBLE,
            isAttributeSubtype: NO_SUBTYPING,
            permittedToMatch: ALWAYS_PERMITTED,
        };

        expect(evaluateFilter(filter, [entry], options).matched).toBeTruthy();
    });

    it("evaluates a greaterOrEqual filter item", () => {
        const filter: Filter = {
            item: {
                greaterOrEqual: new AttributeValueAssertion(
                    FILLER_ATTRIBUTE_TYPE_1,
                    INT_5,
                    undefined,
                ),
            },
        };

        const entry: EntryInformation = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [ INT_7 ],
                        undefined,
                    ),
                },
            ],
            false,
            false,
            false,
        );

        const options: EvaluateFilterSettings = {
            getEqualityMatcher: () => BOOLEAN_EQUALITY_MATCHING_RULE,
            getOrderingMatcher: () => INTEGER_ORDERING_RULE,
            getSubstringsMatcher: () => undefined,
            getContextMatcher: () => undefined,
            determineAbsentMatch: () => true, // TRUE is the default for &absentMatch.
            getApproximateMatcher: () => undefined,
            isMatchingRuleCompatibleWithAttributeType: ALWAYS_COMPATIBLE,
            isAttributeSubtype: NO_SUBTYPING,
            permittedToMatch: ALWAYS_PERMITTED,
        };

        expect(evaluateFilter(filter, [entry], options).matched).toBeTruthy();
    });

    it("evaluates a lessOrEqual filter item", () => {
        const filter: Filter = {
            item: {
                lessOrEqual: new AttributeValueAssertion(
                    FILLER_ATTRIBUTE_TYPE_1,
                    INT_5,
                    undefined,
                ),
            },
        };

        const entry: EntryInformation = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [ INT_7 ],
                        undefined,
                    ),
                },
            ],
            false,
            false,
            false,
        );

        const options: EvaluateFilterSettings = {
            getEqualityMatcher: () => BOOLEAN_EQUALITY_MATCHING_RULE,
            getOrderingMatcher: () => INTEGER_ORDERING_RULE,
            getSubstringsMatcher: () => undefined,
            getContextMatcher: () => undefined,
            determineAbsentMatch: () => true, // TRUE is the default for &absentMatch.
            getApproximateMatcher: () => undefined,
            isMatchingRuleCompatibleWithAttributeType: ALWAYS_COMPATIBLE,
            isAttributeSubtype: NO_SUBTYPING,
            permittedToMatch: ALWAYS_PERMITTED,
        };

        expect(evaluateFilter(filter, [entry], options).matched).toBeFalsy();
    });

    test("evaluates a present filter item", () => {
        const filter: Filter = {
            item: BASIC_PRESENCE_FILTER_ITEM,
        };

        const entry: EntryInformation = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [ TRUE_ELEMENT ],
                        undefined,
                    ),
                },
            ],
            false,
            false,
            false,
        );

        const options: EvaluateFilterSettings = {
            getEqualityMatcher: () => BOOLEAN_EQUALITY_MATCHING_RULE,
            getOrderingMatcher: () => undefined,
            getSubstringsMatcher: () => undefined,
            getContextMatcher: () => undefined,
            determineAbsentMatch: () => true, // TRUE is the default for &absentMatch.
            getApproximateMatcher: () => undefined,
            isMatchingRuleCompatibleWithAttributeType: ALWAYS_COMPATIBLE,
            isAttributeSubtype: NO_SUBTYPING,
            permittedToMatch: ALWAYS_PERMITTED,
        };

        expect(evaluateFilter(filter, [entry], options).matched).toBeTruthy();
    });

    // approximateMatch is currently the same as equality.
    test("evaluates a extensibleMatch filter item", () => {
        const filter: Filter = {
            item: {
                extensibleMatch: new MatchingRuleAssertion(
                    [ FILLER_MATCHING_RULE_TYPE_1 ],
                    FILLER_ATTRIBUTE_TYPE_1,
                    TRUE_ELEMENT,
                    false,
                    undefined,
                ),
            },
        };

        const entry: EntryInformation = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [ TRUE_ELEMENT ],
                        undefined,
                    ),
                },
            ],
            false,
            false,
            false,
        );

        const options: EvaluateFilterSettings = {
            getEqualityMatcher: () => BOOLEAN_EQUALITY_MATCHING_RULE,
            getOrderingMatcher: () => undefined,
            getSubstringsMatcher: () => undefined,
            getContextMatcher: () => undefined,
            determineAbsentMatch: () => true, // TRUE is the default for &absentMatch.
            getApproximateMatcher: () => undefined,
            isMatchingRuleCompatibleWithAttributeType: ALWAYS_COMPATIBLE,
            isAttributeSubtype: NO_SUBTYPING,
            permittedToMatch: ALWAYS_PERMITTED,
        };

        expect(evaluateFilter(filter, [entry], options).matched).toBeTruthy();
    });

    test("evaluates a contextPresent filter item", () => {
        const filter: Filter = {
            item: {
                contextPresent: new AttributeTypeAssertion(
                    FILLER_ATTRIBUTE_TYPE_1,
                    [
                        new ContextAssertion(
                            FILLER_CONTEXT_TYPE_1,
                            [
                                TRUE_ELEMENT,
                            ],
                        ),
                    ],
                ),
            },
        };

        const entry: EntryInformation = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [],
                        [
                            new Attribute_valuesWithContext_Item(
                                TRUE_ELEMENT,
                                [
                                    new Context(
                                        FILLER_CONTEXT_TYPE_1,
                                        [
                                            TRUE_ELEMENT,
                                        ],
                                        false,
                                    ),
                                ],
                            ),
                        ],
                    ),
                },
            ],
            false,
            false,
            false,
        );

        const options: EvaluateFilterSettings = {
            getEqualityMatcher: () => BOOLEAN_EQUALITY_MATCHING_RULE,
            getOrderingMatcher: () => undefined,
            getSubstringsMatcher: () => undefined,
            getContextMatcher: () => BOOLEAN_EQUALITY_MATCHING_RULE,
            determineAbsentMatch: () => true, // TRUE is the default for &absentMatch.
            getApproximateMatcher: () => undefined,
            isMatchingRuleCompatibleWithAttributeType: ALWAYS_COMPATIBLE,
            isAttributeSubtype: NO_SUBTYPING,
            permittedToMatch: ALWAYS_PERMITTED,
        };

        expect(evaluateFilter(filter, [entry], options).matched).toBeTruthy();
    });

    it("matches unrecognized attribute types by comparing encodings", () => {
        const filter: Filter = {
            item: BASIC_BOOLEAN_FILTER_ITEM,
        };
        const matchingEntry = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [ TRUE_ELEMENT ],
                        undefined,
                    ),
                },
            ],
            false,
            false,
            false,
        );
        const nonMatchingEntry = new EntryInformation(
            FILLER_NAME,
            true,
            [
                {
                    attribute: new Attribute(
                        FILLER_ATTRIBUTE_TYPE_1,
                        [ FALSE_ELEMENT ],
                        undefined,
                    ),
                },
            ],
            false,
            false,
            false,
        );
        const options: EvaluateFilterSettings = {
            getEqualityMatcher: () => undefined,
            getOrderingMatcher: () => undefined,
            getSubstringsMatcher: () => undefined,
            getContextMatcher: () => undefined,
            determineAbsentMatch: () => true,
            getApproximateMatcher: () => undefined,
            isMatchingRuleCompatibleWithAttributeType: ALWAYS_COMPATIBLE,
            isAttributeSubtype: NO_SUBTYPING,
            permittedToMatch: ALWAYS_PERMITTED,
        };
        expect(evaluateFilter(filter, [matchingEntry], options).matched).toBe(true);
        expect(evaluateFilter(filter, [nonMatchingEntry], options).matched).toBe(false);
    });
});
