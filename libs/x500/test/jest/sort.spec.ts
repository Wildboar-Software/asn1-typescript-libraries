import {
    ASN1Element,
    ObjectIdentifier,
    OBJECT_IDENTIFIER,
    DERElement,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
} from "asn1-ts";
import sort from "../../src/lib/dap/sort";
import type OrderingMatcher from "../../src/lib/types/OrderingMatcher";
import {
    SortKey,
} from "../../src/lib/modules/DirectoryAbstractService/SortKey.ta";
import {
    EntryInformation,
} from "../../src/lib/modules/DirectoryAbstractService/EntryInformation.ta";
import type {
    EntryInformation_information_Item,
} from "../../src/lib/modules/DirectoryAbstractService/EntryInformation-information-Item.ta";
import type {
    Name,
} from "../../src/lib/modules/InformationFramework/Name.ta";
import {
    Attribute,
} from "../../src/lib/modules/InformationFramework/Attribute.ta";
import type ATVAC from "../../src/lib/types/AttributeTypeValueAndContextsTuple";
import getValueTuplesFromAttribute from "../../src/lib/utils/getValueTuplesFromAttribute";

const EMPTY_NAME: Name = {
    rdnSequence: [],
};

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

const ID_NAME: OBJECT_IDENTIFIER = new ObjectIdentifier([ 2, 5, 4, 41 ]);
const ID_COMMON_NAME: OBJECT_IDENTIFIER = new ObjectIdentifier([ 2, 5, 4, 3 ]);
const ID_ORG_NAME: OBJECT_IDENTIFIER = new ObjectIdentifier([ 2, 5, 4, 10 ]);

const COMMON_NAME_1: Attribute = new Attribute(
    ID_COMMON_NAME,
    [
        new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.utf8String,
            "aaron the aardvark",
        ),
    ],
    undefined,
);

const COMMON_NAME_2: Attribute = new Attribute(
    ID_COMMON_NAME,
    [
        new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.utf8String,
            "zyzzy",
        ),
    ],
    undefined,
);

const ALPHABETICAL_ORDERER: Parameters<typeof sort>[3] = () => (assertion: ASN1Element, value: ASN1Element): number => {
    const a = assertion.utf8String.toLowerCase().charCodeAt(0);
    const v = value.utf8String.toLowerCase().charCodeAt(0);
    return (a - v);
};

describe("sort()", () => {
    it("works", () => {
        const a = createTestEntry([
            {
                attribute: COMMON_NAME_2,
            },
        ]);
        const b = createTestEntry([
            {
                attribute: COMMON_NAME_1,
            },
        ]);
        const sortKeys: SortKey[] = [
            new SortKey(
                ID_COMMON_NAME,
                undefined,
            ),
        ];
        const sorted = [ a, b ].sort((a, b) => sort(sortKeys, a, b, ALPHABETICAL_ORDERER, false));
        expect(sorted.length).toBe(2);
        if (!("attribute" in sorted[0].information[0]) || !(("attribute" in sorted[1].information[0]))) {
            expect(false).toBeTruthy();
            return;
        }
        const value1 = sorted[0].information[0].attribute.values[0];
        const value2 = sorted[1].information[0].attribute.values[0];
        expect(value1.utf8String).toBe(COMMON_NAME_1.values[0].utf8String);
        expect(value2.utf8String).toBe(COMMON_NAME_2.values[0].utf8String);
    });
});
