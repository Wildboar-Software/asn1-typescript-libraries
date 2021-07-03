import selectFromEntry from "../../src/lib/utils/selectFromEntry";
import {
    ASN1Element,
    ObjectIdentifier,
    OBJECT_IDENTIFIER,
    DERElement,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
} from "asn1-ts";
import { EntryInformationSelection } from "../../src/lib/modules/DirectoryAbstractService/EntryInformationSelection.ta";
import { EntryInformation } from "../../src/lib/modules/DirectoryAbstractService/EntryInformation.ta";
import { Context } from "../../src/lib/modules/InformationFramework/Context.ta";
import {
    TypeAndContextAssertion,
} from "../../src/lib/modules/DirectoryAbstractService/TypeAndContextAssertion.ta";
import {
    ContextAssertion,
} from "../../src/lib/modules/InformationFramework/ContextAssertion.ta";
import type {
    Name,
} from "../../src/lib/modules/InformationFramework/Name.ta";
import type {
    EntryInformation_information_Item,
} from "../../src/lib/modules/DirectoryAbstractService/EntryInformation-information-Item.ta";
import {
    EntryInformationSelection_infoTypes_attributeTypesAndValues,
    EntryInformationSelection_infoTypes_attributeTypesOnly,
} from "../../src/lib/modules/DirectoryAbstractService/EntryInformationSelection-infoTypes.ta";
import {
    Attribute,
} from "../../src/lib/modules/InformationFramework/Attribute.ta";
import {
    Attribute_valuesWithContext_Item,
} from "../../src/lib/modules/InformationFramework/Attribute-valuesWithContext-Item.ta";
import type ContextMatcher from "../../src/lib/types/ContextMatcher";
import {
    id_oa_allAttributeTypes,
} from "../../src/lib/modules/InformationFramework/id-oa-allAttributeTypes.va";

const EMPTY_NAME: Name = {
    rdnSequence: [],
};

const ID_ALL_ATTRIBUTE_TYPES: OBJECT_IDENTIFIER = id_oa_allAttributeTypes;
const ID_NAME: OBJECT_IDENTIFIER = new ObjectIdentifier([ 2, 5, 4, 41 ]);
const ID_COMMON_NAME: OBJECT_IDENTIFIER = new ObjectIdentifier([ 2, 5, 4, 3 ]);
const ID_ORG_NAME: OBJECT_IDENTIFIER = new ObjectIdentifier([ 2, 5, 4, 10 ]);
const ID_DSE_TYPE: OBJECT_IDENTIFIER = new ObjectIdentifier([ 2, 5, 12, 0 ]);
const ID_MY_ACCESS_POINT: OBJECT_IDENTIFIER = new ObjectIdentifier([ 2, 5, 12, 1 ]);
const ID_LANGUAGE: OBJECT_IDENTIFIER = new ObjectIdentifier([ 2, 5, 31, 0 ]);
const NEVER_OPERATIONAL: Parameters<typeof selectFromEntry>[2] = () => false;
const ALWAYS_OPERATIONAL: Parameters<typeof selectFromEntry>[2] = () => true;
const NO_SUPERTYPES: Parameters<typeof selectFromEntry>[3] = () => [];
const NAME_SUPERTYPE: Parameters<typeof selectFromEntry>[3] = () => [ ID_NAME ];
const ALWAYS_MATCHES: Parameters<typeof selectFromEntry>[4] = () => () => true;
const NEVER_MATCHES: Parameters<typeof selectFromEntry>[4] = () => () => false;
const STRING_MATCHES: Parameters<typeof selectFromEntry>[4] = () => (assertion: ASN1Element, value: ASN1Element) => (assertion.utf8String === value.utf8String);

const COMMON_NAME: Attribute = new Attribute(
    ID_COMMON_NAME,
    [
        new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.utf8String,
            "jwilbur",
        ),
    ],
    undefined,
);

const ENGLISH: DERElement = new DERElement(
    ASN1TagClass.universal,
    ASN1Construction.primitive,
    ASN1UniversalType.printableString,
    "en",
);

const FRENCH: DERElement = new DERElement(
    ASN1TagClass.universal,
    ASN1Construction.primitive,
    ASN1UniversalType.printableString,
    "fr",
);

const GERMAN: DERElement = new DERElement(
    ASN1TagClass.universal,
    ASN1Construction.primitive,
    ASN1UniversalType.printableString,
    "de",
);

const ENGLISH_CONTEXT: Context = new Context(
    ID_LANGUAGE,
    [ENGLISH],
    false,
);

const FRENCH_CONTEXT: Context = new Context(
    ID_LANGUAGE,
    [FRENCH],
    false,
);

const GERMAN_CONTEXT: Context = new Context(
    ID_LANGUAGE,
    [GERMAN],
    false,
);

const ENGLISH_COMMON_NAME: Attribute = new Attribute(
    ID_COMMON_NAME,
    [],
    [
        new Attribute_valuesWithContext_Item(
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.utf8String,
                "jwilbur",
            ),
            [
                ENGLISH_CONTEXT,
            ],
        ),
    ],
);

const FRENCH_COMMON_NAME: Attribute = new Attribute(
    ID_COMMON_NAME,
    [],
    [
        new Attribute_valuesWithContext_Item(
            new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.utf8String,
                "jwilbur",
            ),
            [
                ENGLISH_CONTEXT,
            ],
        ),
    ],
);

function createTestEntry (
    infos: EntryInformation_information_Item[],
): EntryInformation {
    return new EntryInformation(
        EMPTY_NAME,
        true,
        infos,
        false,
        false,
        false,
    );
}

describe("selectFromEntry()", () => {
    it("does not remove attributes when there are no selection criteria", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attributeType: ID_COMMON_NAME,
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            undefined,
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            NEVER_OPERATIONAL,
            NO_SUPERTYPES,
            ALWAYS_MATCHES,
        );
        expect(entryAfter.information.length).toBe(entryBefore.information.length);
    });

    // TODO: Recurse into family-information
    // TODO: Document noSubtypeSelection
    // TODO: Document dontSelectFriends
    it("only returns attribute types when they are requested", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attribute: COMMON_NAME,
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            undefined,
            EntryInformationSelection_infoTypes_attributeTypesOnly,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            NEVER_OPERATIONAL,
            NO_SUPERTYPES,
            ALWAYS_MATCHES,
        );
        expect(entryAfter.information.length).toBe(entryBefore.information.length);
        expect(entryAfter.information.every((info) => ("attributeType" in info))).toBeTruthy();
    });

    it("can filter out selected attributes", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attribute: COMMON_NAME,
            },
            {
                attributeType: ID_ORG_NAME,
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            {
                select: [ ID_COMMON_NAME ],
            },
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            NEVER_OPERATIONAL,
            NO_SUPERTYPES,
            ALWAYS_MATCHES,
        );
        expect(entryAfter.information.length).toBe(1);
        expect(entryAfter.information.every((info) => (
            ("attribute" in info)
            && (info.attribute.type_.toString() === ID_COMMON_NAME.toString())
        ))).toBeTruthy();
    });

    it("filters out operational attributes unless they are requested", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attributeType: ID_DSE_TYPE,
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            {
                select: [ ID_COMMON_NAME ],
            },
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            ALWAYS_OPERATIONAL,
            NO_SUPERTYPES,
            ALWAYS_MATCHES,
        );
        expect(entryAfter.information.length).toBe(0);
    });

    it("does not filter out operational attributes when they are requested", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attributeType: ID_DSE_TYPE,
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            undefined,
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            {
                allOperationalAttributes: null,
            },
            undefined,
            undefined,
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            ALWAYS_OPERATIONAL,
            NO_SUPERTYPES,
            ALWAYS_MATCHES,
        );
        expect(entryAfter.information.length).toBe(1);
    });

    it("can select for specific operational attributes", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attributeType: ID_DSE_TYPE,
            },
            {
                attributeType: ID_MY_ACCESS_POINT,
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            undefined,
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            {
                select: [ ID_MY_ACCESS_POINT ],
            },
            undefined,
            undefined,
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            ALWAYS_OPERATIONAL,
            NO_SUPERTYPES,
            ALWAYS_MATCHES,
        );
        expect(entryAfter.information.length).toBe(1);
        expect(
            ("attribute" in entryAfter.information[0])
            && entryAfter.information[0].attribute.type_.toString()
        ).toBe(ID_MY_ACCESS_POINT.toString());
    });

    it("select only attributes matching the contextSelection", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attribute: ENGLISH_COMMON_NAME,
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            undefined,
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            undefined,
            {
                selectedContexts: [
                    new TypeAndContextAssertion(
                        ID_COMMON_NAME,
                        {
                            all: [
                                new ContextAssertion(
                                    ID_LANGUAGE,
                                    [ENGLISH],
                                ),
                            ],
                        },
                    ),
                ],
            },
            undefined,
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            NEVER_OPERATIONAL,
            NO_SUPERTYPES,
            STRING_MATCHES,
        );
        expect(entryAfter.information.length).toBe(1);
    });

    it("does not select attributes that do not match the contextSelection", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attribute: ENGLISH_COMMON_NAME,
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            undefined,
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            undefined,
            {
                selectedContexts: [
                    new TypeAndContextAssertion(
                        ID_COMMON_NAME,
                        {
                            all: [
                                new ContextAssertion(
                                    ID_LANGUAGE,
                                    [FRENCH],
                                ),
                            ],
                        },
                    ),
                ],
            },
            undefined,
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            NEVER_OPERATIONAL,
            NO_SUPERTYPES,
            STRING_MATCHES,
        );
        expect(entryAfter.information.length).toBe(0);
    });

    it("select attributes according to the preferences in contextSelection when returning contexts", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attribute: new Attribute(
                    ID_COMMON_NAME,
                    [
                        new DERElement(
                            ASN1TagClass.universal,
                            ASN1Construction.primitive,
                            ASN1UniversalType.utf8String,
                            "jwilbur",
                        ),
                    ],
                    [
                        new Attribute_valuesWithContext_Item(
                            new DERElement(
                                ASN1TagClass.universal,
                                ASN1Construction.primitive,
                                ASN1UniversalType.utf8String,
                                "ye olde jwilbur",
                            ),
                            [
                                ENGLISH_CONTEXT,
                            ],
                        ),
                        new Attribute_valuesWithContext_Item(
                            new DERElement(
                                ASN1TagClass.universal,
                                ASN1Construction.primitive,
                                ASN1UniversalType.utf8String,
                                "le jwilbur",
                            ),
                            [
                                FRENCH_CONTEXT,
                            ],
                        ),
                    ],
                ),
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            undefined,
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            undefined,
            {
                selectedContexts: [
                    new TypeAndContextAssertion(
                        ID_COMMON_NAME,
                        {
                            preference: [
                                new ContextAssertion( // Not present in the attributes, so French should be used.
                                    ID_LANGUAGE,
                                    [GERMAN],
                                ),
                                new ContextAssertion(
                                    ID_LANGUAGE,
                                    [FRENCH],
                                ),
                                new ContextAssertion(
                                    ID_LANGUAGE,
                                    [ENGLISH],
                                ),
                            ],
                        },
                    ),
                ],
            },
            true, // Return contexts
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            NEVER_OPERATIONAL,
            NO_SUPERTYPES,
            STRING_MATCHES,
        );
        expect(entryAfter.information.length).toBe(1);
        if (!("attribute" in entryAfter.information[0])) {
            expect(false).toBeTruthy();
            return;
        }
        const attr = entryAfter.information[0].attribute;
        expect(attr.values.length).toBe(1); // It should have selected the one attribute value with no contexts.
        expect(attr.valuesWithContext.length).toBe(1); // It also should have selected the french value.
        expect(attr.valuesWithContext[0].value.utf8String).toBe("le jwilbur");
    });

    it("select attributes according to the preferences in contextSelection when omitting contexts", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attribute: new Attribute(
                    ID_COMMON_NAME,
                    [
                        new DERElement(
                            ASN1TagClass.universal,
                            ASN1Construction.primitive,
                            ASN1UniversalType.utf8String,
                            "jwilbur",
                        ),
                    ],
                    [
                        new Attribute_valuesWithContext_Item(
                            new DERElement(
                                ASN1TagClass.universal,
                                ASN1Construction.primitive,
                                ASN1UniversalType.utf8String,
                                "ye olde jwilbur",
                            ),
                            [
                                ENGLISH_CONTEXT,
                            ],
                        ),
                        new Attribute_valuesWithContext_Item(
                            new DERElement(
                                ASN1TagClass.universal,
                                ASN1Construction.primitive,
                                ASN1UniversalType.utf8String,
                                "le jwilbur",
                            ),
                            [
                                FRENCH_CONTEXT,
                            ],
                        ),
                    ],
                ),
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            undefined,
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            undefined,
            {
                selectedContexts: [
                    new TypeAndContextAssertion(
                        ID_COMMON_NAME,
                        {
                            preference: [
                                new ContextAssertion( // Not present in the attributes, so French should be used.
                                    ID_LANGUAGE,
                                    [GERMAN],
                                ),
                                new ContextAssertion(
                                    ID_LANGUAGE,
                                    [FRENCH],
                                ),
                                new ContextAssertion(
                                    ID_LANGUAGE,
                                    [ENGLISH],
                                ),
                            ],
                        },
                    ),
                ],
            },
            false, // Omit contexts
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            NEVER_OPERATIONAL,
            NO_SUPERTYPES,
            STRING_MATCHES,
        );
        expect(entryAfter.information.length).toBe(1);
        if (!("attribute" in entryAfter.information[0])) {
            expect(false).toBeTruthy();
            return;
        }
        const attr = entryAfter.information[0].attribute;
        expect(attr.values.length).toBe(2); // Two values total should have matched.
        expect(attr.values[0].utf8String).toBe("jwilbur");
        expect(attr.values[1].utf8String).toBe("le jwilbur");
    });

    it("selects subtypes of an attribute", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attribute: new Attribute(
                    ID_COMMON_NAME,
                    [
                        new DERElement(
                            ASN1TagClass.universal,
                            ASN1Construction.primitive,
                            ASN1UniversalType.utf8String,
                            "jwilbur",
                        ),
                    ],
                    undefined,
                ),
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            undefined,
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            undefined,
            undefined,
            undefined,
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            NEVER_OPERATIONAL,
            NAME_SUPERTYPE,
            STRING_MATCHES,
        );
        expect(entryAfter.information.length).toBe(1);
    });

    it("applies context assertions to attribute subtypes", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attribute: new Attribute(
                    ID_COMMON_NAME,
                    [
                        new DERElement(
                            ASN1TagClass.universal,
                            ASN1Construction.primitive,
                            ASN1UniversalType.utf8String,
                            "jwilbur",
                        ),
                    ],
                    [
                        new Attribute_valuesWithContext_Item(
                            new DERElement(
                                ASN1TagClass.universal,
                                ASN1Construction.primitive,
                                ASN1UniversalType.utf8String,
                                "ye olde jwilbur",
                            ),
                            [
                                ENGLISH_CONTEXT,
                            ],
                        ),
                        new Attribute_valuesWithContext_Item(
                            new DERElement(
                                ASN1TagClass.universal,
                                ASN1Construction.primitive,
                                ASN1UniversalType.utf8String,
                                "le jwilbur",
                            ),
                            [
                                FRENCH_CONTEXT,
                            ],
                        ),
                    ],
                ),
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            undefined,
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            undefined,
            {
                selectedContexts: [
                    new TypeAndContextAssertion(
                        ID_NAME,
                        {
                            preference: [
                                new ContextAssertion( // Not present in the attributes, so French should be used.
                                    ID_LANGUAGE,
                                    [GERMAN],
                                ),
                                new ContextAssertion(
                                    ID_LANGUAGE,
                                    [FRENCH],
                                ),
                                new ContextAssertion(
                                    ID_LANGUAGE,
                                    [ENGLISH],
                                ),
                            ],
                        },
                    ),
                ],
            },
            false, // Omit contexts
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            NEVER_OPERATIONAL,
            NAME_SUPERTYPE,
            STRING_MATCHES,
        );
        expect(entryAfter.information.length).toBe(1);
        if (!("attribute" in entryAfter.information[0])) {
            expect(false).toBeTruthy();
            return;
        }
        const attr = entryAfter.information[0].attribute;
        expect(attr.values.length).toBe(2); // Two values total should have matched.
        expect(attr.values[0].utf8String).toBe("jwilbur");
        expect(attr.values[1].utf8String).toBe("le jwilbur");
    });

    it("applies context assertions to all attributes if the type and context assertion uses the special type id-oa-allAttributeTypes", () => {
        const entryBefore: EntryInformation = createTestEntry([
            {
                attribute: new Attribute(
                    ID_COMMON_NAME,
                    [
                        new DERElement(
                            ASN1TagClass.universal,
                            ASN1Construction.primitive,
                            ASN1UniversalType.utf8String,
                            "jwilbur",
                        ),
                    ],
                    [
                        new Attribute_valuesWithContext_Item(
                            new DERElement(
                                ASN1TagClass.universal,
                                ASN1Construction.primitive,
                                ASN1UniversalType.utf8String,
                                "ye olde jwilbur",
                            ),
                            [
                                ENGLISH_CONTEXT,
                            ],
                        ),
                        new Attribute_valuesWithContext_Item(
                            new DERElement(
                                ASN1TagClass.universal,
                                ASN1Construction.primitive,
                                ASN1UniversalType.utf8String,
                                "le jwilbur",
                            ),
                            [
                                FRENCH_CONTEXT,
                            ],
                        ),
                    ],
                ),
            },
        ]);
        const selection: EntryInformationSelection = new EntryInformationSelection(
            undefined,
            EntryInformationSelection_infoTypes_attributeTypesAndValues,
            undefined,
            {
                selectedContexts: [
                    new TypeAndContextAssertion(
                        ID_ALL_ATTRIBUTE_TYPES,
                        {
                            preference: [
                                new ContextAssertion( // Not present in the attributes, so French should be used.
                                    ID_LANGUAGE,
                                    [GERMAN],
                                ),
                                new ContextAssertion(
                                    ID_LANGUAGE,
                                    [FRENCH],
                                ),
                                new ContextAssertion(
                                    ID_LANGUAGE,
                                    [ENGLISH],
                                ),
                            ],
                        },
                    ),
                ],
            },
            false, // Omit contexts
            undefined,
        );
        const entryAfter = selectFromEntry(
            selection,
            entryBefore,
            NEVER_OPERATIONAL,
            NO_SUPERTYPES,
            STRING_MATCHES,
        );
        expect(entryAfter.information.length).toBe(1);
        if (!("attribute" in entryAfter.information[0])) {
            expect(false).toBeTruthy();
            return;
        }
        const attr = entryAfter.information[0].attribute;
        expect(attr.values.length).toBe(2); // Two values total should have matched.
        expect(attr.values[0].utf8String).toBe("jwilbur");
        expect(attr.values[1].utf8String).toBe("le jwilbur");
    });
});
