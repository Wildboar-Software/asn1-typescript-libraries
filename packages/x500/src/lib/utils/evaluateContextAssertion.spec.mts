import { ObjectIdentifier, DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "@wildboar/asn1";
import {
    evaluateContextAssertion,
    evaluateContextAssertionAmongValues,
} from "./evaluateContextAssertion.mjs";
import { Context } from "../modules/InformationFramework/Context.ta.mjs";
import { ContextAssertion } from "../modules/InformationFramework/ContextAssertion.ta.mjs";
import {
    evaluateFilter,
    type EvaluateFilterSettings,
} from "./evaluateFilter.mjs";
import { Attribute } from "../modules/InformationFramework/Attribute.ta.mjs";
import { Attribute_valuesWithContext_Item } from "../modules/InformationFramework/Attribute-valuesWithContext-Item.ta.mjs";
import { EntryInformation } from "../modules/DirectoryAbstractService/EntryInformation.ta.mjs";
import { AttributeValueAssertion } from "../modules/InformationFramework/AttributeValueAssertion.ta.mjs";
import type { Filter } from "../modules/DirectoryAbstractService/Filter.ta.mjs";
import type { Name } from "../modules/InformationFramework/Name.ta.mjs";

const CONTEXT_TYPE = ObjectIdentifier.fromString("1.2.3.4.5");
const ATTR_TYPE = ObjectIdentifier.fromString("2.5.4.3");

const EN = new DERElement(
    ASN1TagClass.universal,
    ASN1Construction.primitive,
    ASN1UniversalType.utf8String,
    "en",
);
const FR = new DERElement(
    ASN1TagClass.universal,
    ASN1Construction.primitive,
    ASN1UniversalType.utf8String,
    "fr",
);
const HELLO = new DERElement(
    ASN1TagClass.universal,
    ASN1Construction.primitive,
    ASN1UniversalType.utf8String,
    "hello",
);

const stringMatch = (a: DERElement, b: DERElement) => a.utf8String === b.utf8String;

function assertion (value: DERElement): ContextAssertion {
    return new ContextAssertion(CONTEXT_TYPE, [ value ]);
}

describe("evaluateContextAssertion", () => {
    it("matches stored context values of the asserted type", () => {
        const contexts = [ new Context(CONTEXT_TYPE, [ EN ], false) ];
        expect(evaluateContextAssertion(
            assertion(EN),
            contexts,
            () => stringMatch,
            () => true,
        )).toBe(true);
        expect(evaluateContextAssertion(
            assertion(FR),
            contexts,
            () => stringMatch,
            () => true,
        )).toBe(false);
    });

    it("does not match a fallback value by itself", () => {
        const contexts = [ new Context(CONTEXT_TYPE, [ FR ], true) ];
        expect(evaluateContextAssertion(
            assertion(EN),
            contexts,
            () => stringMatch,
            () => true,
        )).toBe(false);
    });

    it("matches via absentMatch when the value has no context of that type", () => {
        expect(evaluateContextAssertion(
            assertion(EN),
            [],
            () => stringMatch,
            () => true,
        )).toBe(true);
        expect(evaluateContextAssertion(
            assertion(EN),
            [],
            () => stringMatch,
            () => false,
        )).toBe(false);
    });
});

describe("evaluateContextAssertionAmongValues", () => {
    it("applies fallback only when no sibling value satisfies the assertion", () => {
        const matching = [ new Context(CONTEXT_TYPE, [ EN ], false) ];
        const fallback = [ new Context(CONTEXT_TYPE, [ FR ], true) ];
        const whenSiblingMatches = evaluateContextAssertionAmongValues(
            assertion(EN),
            [ matching, fallback ],
            () => stringMatch,
            () => true,
        );
        expect(whenSiblingMatches).toEqual([ true, false ]);

        const other = [ new Context(CONTEXT_TYPE, [ FR ], false) ];
        const whenNoneMatch = evaluateContextAssertionAmongValues(
            assertion(EN),
            [ other, fallback ],
            () => stringMatch,
            () => true,
        );
        expect(whenNoneMatch).toEqual([ false, true ]);
    });
});

describe("evaluateFilter context fallback", () => {
    const name: Name = { rdnSequence: [] };
    const options: EvaluateFilterSettings = {
        getEqualityMatcher: () => stringMatch,
        getOrderingMatcher: () => undefined,
        getSubstringsMatcher: () => undefined,
        getContextMatcher: () => stringMatch,
        determineAbsentMatch: () => true,
        getApproximateMatcher: () => undefined,
        isMatchingRuleCompatibleWithAttributeType: () => true,
        isAttributeSubtype: (a, b) => a.isEqualTo(b),
        permittedToMatch: () => true,
        matchedValuesOnly: true,
    };

    const filter: Filter = {
        item: {
            equality: new AttributeValueAssertion(
                ATTR_TYPE,
                HELLO,
                {
                    selectedContexts: [ assertion(EN) ],
                },
            ),
        },
    };

    it("hides a fallback value when another value of the attribute matches the context", () => {
        const entry = new EntryInformation(
            name,
            true,
            [
                {
                    attribute: new Attribute(
                        ATTR_TYPE,
                        [],
                        [
                            new Attribute_valuesWithContext_Item(
                                HELLO,
                                [ new Context(CONTEXT_TYPE, [ EN ], false) ],
                            ),
                            new Attribute_valuesWithContext_Item(
                                HELLO,
                                [ new Context(CONTEXT_TYPE, [ FR ], true) ],
                            ),
                        ],
                    ),
                },
            ],
        );
        const result = evaluateFilter(filter, [ entry ], options);
        expect(result.matched).toBe(true);
        expect(result.matchedValues).toHaveLength(1);
        expect(result.matchedValues![0].contexts![0].fallback).toBeFalsy();
    });

    it("selects a fallback value when no other value satisfies the context assertion", () => {
        const entry = new EntryInformation(
            name,
            true,
            [
                {
                    attribute: new Attribute(
                        ATTR_TYPE,
                        [],
                        [
                            new Attribute_valuesWithContext_Item(
                                HELLO,
                                [ new Context(CONTEXT_TYPE, [ FR ], true) ],
                            ),
                        ],
                    ),
                },
            ],
        );
        const result = evaluateFilter(filter, [ entry ], options);
        expect(result.matched).toBe(true);
        expect(result.matchedValues).toHaveLength(1);
        expect(result.matchedValues![0].contexts![0].fallback).toBe(true);
    });
});
