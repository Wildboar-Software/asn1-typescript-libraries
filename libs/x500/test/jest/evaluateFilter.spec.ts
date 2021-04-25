import * as asn1 from "asn1-ts";
import type {
    Filter,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/Filter.ta";
import type {
    FilterItem,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/FilterItem.ta";
import {
    AttributeValueAssertion,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeValueAssertion.ta";
import {
    Context,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Context.ta";
import {
    ContextAssertion,
} from "@wildboar/x500/src/lib/modules/InformationFramework/ContextAssertion.ta";
import type {
    AttributeType,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeType.ta";
import {
    AttributeTypeAssertion,
} from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeTypeAssertion.ta";
import {
    MatchingRuleAssertion,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/MatchingRuleAssertion.ta";
import {
    Attribute,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Attribute.ta";
import {
    Attribute_valuesWithContext_Item,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Attribute-valuesWithContext-Item.ta";
import {
    ATTRIBUTE,
} from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca";
import {
    EntryInformation,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/EntryInformation.ta";
import {
    FilterItem_substrings,
} from "@wildboar/x500/src/lib/modules/DirectoryAbstractService/FilterItem-substrings.ta";
import type {
    Name,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Name.ta";
import { evaluateFilter, FilterEntryOptions, MatcherFunction, OrderingFunction, SubstringsFunction, SubstringSelection } from "@wildboar/x500/src/lib/evaluateFilter";
import { FALSE, TRUE } from "asn1-ts";

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

const FILLER_ATTRIBUTE_TYPE_1 = new asn1.ObjectIdentifier([1, 1, 1, 1]);
const FILLER_ATTRIBUTE_TYPE_2 = new asn1.ObjectIdentifier([1, 2, 2, 2]);
const FILLER_ATTRIBUTE_TYPE_3 = new asn1.ObjectIdentifier([1, 3, 3, 3]);

const FILLER_CONTEXT_TYPE_1 = new asn1.ObjectIdentifier([2, 1, 1, 1]);
const FILLER_CONTEXT_TYPE_2 = new asn1.ObjectIdentifier([2, 2, 2, 2]);
const FILLER_CONTEXT_TYPE_3 = new asn1.ObjectIdentifier([2, 3, 3, 3]);

const FILLER_MATCHING_RULE_TYPE_1 = new asn1.ObjectIdentifier([0, 1, 1, 1]);
const FILLER_MATCHING_RULE_TYPE_2 = new asn1.ObjectIdentifier([0, 2, 2, 2]);
const FILLER_MATCHING_RULE_TYPE_3 = new asn1.ObjectIdentifier([0, 3, 3, 3]);

const BOOLEAN_EQUALITY_MATCHING_RULE: MatcherFunction = (assertion, value) => (assertion.value[0] === value.value[0]);

// This will only work for INTEGERs within [0,127].
const INTEGER_ORDERING_RULE: OrderingFunction = (assertion, value) => (assertion.value[0] - value.value[0]);

const UTF8_SUBSTRING_RULE: SubstringsFunction = (assertion, value, selection) => {
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

        const options: FilterEntryOptions = {
            recognizedAttributes: [],
            equalityMatchingRuleMatchers: {
                [FILLER_ATTRIBUTE_TYPE_1.toString()]: BOOLEAN_EQUALITY_MATCHING_RULE,
            },
            orderingMatchingRuleMatchers: {},
            substringsMatchingRuleMatchers: {},
            contextMatchers: {},
        };

        expect(evaluateFilter(filter, entry, options)).toBeTruthy();
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

        const options: FilterEntryOptions = {
            recognizedAttributes: [],
            equalityMatchingRuleMatchers: {
                [FILLER_ATTRIBUTE_TYPE_1.toString()]: BOOLEAN_EQUALITY_MATCHING_RULE,
            },
            orderingMatchingRuleMatchers: {},
            substringsMatchingRuleMatchers: {},
            contextMatchers: {},
        };

        expect(evaluateFilter(filter, entry, options)).toBeFalsy();
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

        const options: FilterEntryOptions = {
            recognizedAttributes: [],
            equalityMatchingRuleMatchers: {
                [FILLER_ATTRIBUTE_TYPE_1.toString()]: BOOLEAN_EQUALITY_MATCHING_RULE,
                [FILLER_ATTRIBUTE_TYPE_2.toString()]: BOOLEAN_EQUALITY_MATCHING_RULE,
            },
            orderingMatchingRuleMatchers: {},
            substringsMatchingRuleMatchers: {},
            contextMatchers: {},
        };

        expect(evaluateFilter(filter, entry, options)).toBeTruthy();
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

        const options: FilterEntryOptions = {
            recognizedAttributes: [],
            equalityMatchingRuleMatchers: {
                [FILLER_ATTRIBUTE_TYPE_1.toString()]: BOOLEAN_EQUALITY_MATCHING_RULE,
                [FILLER_ATTRIBUTE_TYPE_2.toString()]: BOOLEAN_EQUALITY_MATCHING_RULE,
            },
            orderingMatchingRuleMatchers: {},
            substringsMatchingRuleMatchers: {},
            contextMatchers: {},
        };

        expect(evaluateFilter(filter, entry, options)).toBeTruthy();
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

        const options: FilterEntryOptions = {
            recognizedAttributes: [],
            equalityMatchingRuleMatchers: {},
            orderingMatchingRuleMatchers: {},
            substringsMatchingRuleMatchers: {
                [FILLER_ATTRIBUTE_TYPE_1.toString()]: UTF8_SUBSTRING_RULE,
            },
            contextMatchers: {},
        };

        expect(evaluateFilter(filter, entry, options)).toBeTruthy();
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

        const options: FilterEntryOptions = {
            recognizedAttributes: [],
            equalityMatchingRuleMatchers: {},
            orderingMatchingRuleMatchers: {
                [FILLER_ATTRIBUTE_TYPE_1.toString()]: INTEGER_ORDERING_RULE,
            },
            substringsMatchingRuleMatchers: {},
            contextMatchers: {},
        };

        expect(evaluateFilter(filter, entry, options)).toBeTruthy();
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

        const options: FilterEntryOptions = {
            recognizedAttributes: [],
            equalityMatchingRuleMatchers: {},
            orderingMatchingRuleMatchers: {
                [FILLER_ATTRIBUTE_TYPE_1.toString()]: INTEGER_ORDERING_RULE,
            },
            substringsMatchingRuleMatchers: {},
            contextMatchers: {},
        };

        expect(evaluateFilter(filter, entry, options)).toBeFalsy();
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

        const options: FilterEntryOptions = {
            recognizedAttributes: [],
            equalityMatchingRuleMatchers: {},
            orderingMatchingRuleMatchers: {},
            substringsMatchingRuleMatchers: {},
            contextMatchers: {},
        };

        expect(evaluateFilter(filter, entry, options)).toBeTruthy();
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

        const options: FilterEntryOptions = {
            recognizedAttributes: [],
            equalityMatchingRuleMatchers: {
                [FILLER_MATCHING_RULE_TYPE_1.toString()]: BOOLEAN_EQUALITY_MATCHING_RULE,
            },
            orderingMatchingRuleMatchers: {},
            substringsMatchingRuleMatchers: {},
            contextMatchers: {},
        };

        expect(evaluateFilter(filter, entry, options)).toBeTruthy();
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

        const options: FilterEntryOptions = {
            recognizedAttributes: [],
            equalityMatchingRuleMatchers: {},
            orderingMatchingRuleMatchers: {},
            substringsMatchingRuleMatchers: {},
            contextMatchers: {
                [FILLER_CONTEXT_TYPE_1.toString()]: BOOLEAN_EQUALITY_MATCHING_RULE,
            },
        };

        expect(evaluateFilter(filter, entry, options)).toBeTruthy();
    });
});
