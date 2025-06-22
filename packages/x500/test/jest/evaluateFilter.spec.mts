import * as asn1 from "asn1-ts";
import type {
    Filter,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/Filter.ta.mjs";
import type {
    FilterItem,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/FilterItem.ta.mjs";
import {
    AttributeValueAssertion,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeValueAssertion.ta.mjs";
import {
    Context,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Context.ta.mjs";
import {
    ContextAssertion,
} from "@wildboar/x500/src/lib/modules/InformationFramework/ContextAssertion.ta.mjs";
import {
    AttributeTypeAssertion,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeTypeAssertion.ta.mjs";
import {
    MatchingRuleAssertion,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/MatchingRuleAssertion.ta.mjs";
import {
    Attribute,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Attribute.ta.mjs";
import {
    Attribute_valuesWithContext_Item,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import {
    EntryInformation,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import {
    FilterItem_substrings,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/FilterItem-substrings.ta.mjs";
import type {
    Name,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs";
import { evaluateFilter, EvaluateFilterSettings } from "../../src/lib/utils/evaluateFilter.mjs";
import type EqualityMatcher from "@wildboar/x500/src/lib/types/EqualityMatcher.mjs";
import type OrderingMatcher from "@wildboar/x500/src/lib/types/OrderingMatcher.mjs";
import type SubstringsMatcher from "@wildboar/x500/src/lib/types/SubstringsMatcher.mjs";
import SubstringSelection from "@wildboar/x500/src/lib/types/SubstringSelection.mjs";
import { OBJECT_IDENTIFIER } from "asn1-ts";

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

const UTF8_SUBSTRING_RULE: SubstringsMatcher = (assertion, value, selection) => {
    switch (selection) {
    case (SubstringSelection.initial): {
        return (value.utf8String.startsWith(assertion.utf8String));
    }
    case (SubstringSelection.any_): {
        return (value.utf8String.indexOf(assertion.utf8String) > -1);
    }
    case (SubstringSelection.final): {
        const val = value.utf8String;
        const ass = assertion.utf8String;
        return (val.indexOf(ass) === (val.length - ass.length - 1));
    }
    default: {
        throw new Error();
    }
    }
};

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
});
