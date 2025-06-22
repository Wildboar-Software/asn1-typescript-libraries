import bacACDF, {
    PERMISSION_CATEGORY_ADD,
} from "../../../src/lib/bac/bacACDF";
import {
    TRUE_BIT,
    OBJECT_IDENTIFIER,
    FALSE_BIT,
    ObjectIdentifier,
    DERElement,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    ASN1Element,
    External,
} from "asn1-ts";
import type ACDFTupleExtended from "../../../src/lib/types/ACDFTupleExtended";
import type ProtectedItem from "../../../src/lib/types/ProtectedItem";
import {
    ProtectedItems,
} from "../../../src/lib/modules/BasicAccessControl/ProtectedItems.ta.mjs";
import type {
    AuthenticationLevel,
} from "../../../src/lib/modules/BasicAccessControl/AuthenticationLevel.ta.mjs";
import {
    AuthenticationLevel_basicLevels,
} from "../../../src/lib/modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta.mjs";
import {
    AuthenticationLevel_basicLevels_level_none,
    AuthenticationLevel_basicLevels_level_simple,
    AuthenticationLevel_basicLevels_level_strong,
} from "../../../src/lib/modules/BasicAccessControl/AuthenticationLevel-basicLevels-level.ta.mjs";
import type EqualityMatcher from "../../../src/lib/types/EqualityMatcher.mjs";
import {
    ACIItem, ACIItem_itemOrUserFirst
} from "../../../src/lib/modules/BasicAccessControl/ACIItem.ta.mjs";
import {
    UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../../../src/lib/modules/SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import {
    ACIItem_itemOrUserFirst_itemFirst,
} from "../../../src/lib/modules/BasicAccessControl/ACIItem-itemOrUserFirst-itemFirst.ta.mjs";
import {
    ACIItem_itemOrUserFirst_userFirst,
} from "../../../src/lib/modules/BasicAccessControl/ACIItem-itemOrUserFirst-userFirst.ta.mjs";
import {
    ItemPermission,
} from "../../../src/lib/modules/BasicAccessControl/ItemPermission.ta.mjs";
import {
    UserPermission,
} from "../../../src/lib/modules/BasicAccessControl/UserPermission.ta.mjs";
import {
    UserClasses,
} from "../../../src/lib/modules/BasicAccessControl/UserClasses.ta.mjs";
import type { GrantsAndDenials } from "../../../src/lib/modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import {
    AttributeTypeAndValue,
} from "../../../src/lib/modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import splitGrantsAndDenials from "../../../src/lib/bac/splitGrantsAndDenials";
import getACDFTuplesFromACIItem from "../../../src/lib/bac/getACDFTuplesFromACIItem";
import itemIsProtected from "../../../src/lib/bac/itemIsProtected";
import type { EvaluateFilterSettings } from "../../../src/lib/utils/evaluateFilter";
import {
    NameAndOptionalUID,
} from "../../../src/lib/modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";

const ALL_GRANTS: GrantsAndDenials = new Uint8ClampedArray([
    // Add
    TRUE_BIT,
    FALSE_BIT,
    // Disclose on Error
    TRUE_BIT,
    FALSE_BIT,
    // Read
    TRUE_BIT,
    FALSE_BIT,
    // Remove
    TRUE_BIT,
    FALSE_BIT,
    // Browse
    TRUE_BIT,
    FALSE_BIT,
    // Export
    TRUE_BIT,
    FALSE_BIT,
    // Import
    TRUE_BIT,
    FALSE_BIT,
    // Modify
    TRUE_BIT,
    FALSE_BIT,
    // Rename
    TRUE_BIT,
    FALSE_BIT,
    // Return DN
    TRUE_BIT,
    FALSE_BIT,
    // Compare
    TRUE_BIT,
    FALSE_BIT,
    // Filter Match
    TRUE_BIT,
    FALSE_BIT,
    // Invoke
    TRUE_BIT,
    FALSE_BIT,
]);

const ALL_DENIALS: GrantsAndDenials = new Uint8ClampedArray([
    // Add
    FALSE_BIT,
    TRUE_BIT,
    // Disclose on Error
    FALSE_BIT,
    TRUE_BIT,
    // Read
    FALSE_BIT,
    TRUE_BIT,
    // Remove
    FALSE_BIT,
    TRUE_BIT,
    // Browse
    FALSE_BIT,
    TRUE_BIT,
    // Export
    FALSE_BIT,
    TRUE_BIT,
    // Import
    FALSE_BIT,
    TRUE_BIT,
    // Modify
    FALSE_BIT,
    TRUE_BIT,
    // Rename
    FALSE_BIT,
    TRUE_BIT,
    // Return DN
    FALSE_BIT,
    TRUE_BIT,
    // Compare
    FALSE_BIT,
    TRUE_BIT,
    // Filter Match
    FALSE_BIT,
    TRUE_BIT,
    // Invoke
    FALSE_BIT,
    TRUE_BIT,
]);

const ALL_GRANTS_AND_DENIALS: GrantsAndDenials = new Uint8ClampedArray([
    // Add
    TRUE_BIT,
    TRUE_BIT,
    // Disclose on Error
    TRUE_BIT,
    TRUE_BIT,
    // Read
    TRUE_BIT,
    TRUE_BIT,
    // Remove
    TRUE_BIT,
    TRUE_BIT,
    // Browse
    TRUE_BIT,
    TRUE_BIT,
    // Export
    TRUE_BIT,
    TRUE_BIT,
    // Import
    TRUE_BIT,
    TRUE_BIT,
    // Modify
    TRUE_BIT,
    TRUE_BIT,
    // Rename
    TRUE_BIT,
    TRUE_BIT,
    // Return DN
    TRUE_BIT,
    TRUE_BIT,
    // Compare
    TRUE_BIT,
    TRUE_BIT,
    // Filter Match
    TRUE_BIT,
    TRUE_BIT,
    // Invoke
    TRUE_BIT,
    TRUE_BIT,
]);

const WHATEVER_LABEL: UnboundedDirectoryString = {
    uTF8String: "Whatever",
};

const ID_COMMON_NAME: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]);
const ID_ORG_NAME: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 2, 5, 4, 10 ]);

const COMMON_NAME = new AttributeTypeAndValue(
    ID_COMMON_NAME,
    new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        "jwilbur",
    ),
);

const COMMON_NAME_2 = new AttributeTypeAndValue(
    ID_COMMON_NAME,
    new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        "not jwilbur",
    ),
);

const ORG_NAME = new AttributeTypeAndValue(
    ID_ORG_NAME,
    new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
        "Wildboar",
    ),
);

const AUTH_LEVEL_NONE: AuthenticationLevel = {
    basicLevels: new AuthenticationLevel_basicLevels(
        AuthenticationLevel_basicLevels_level_none,
        0,
        false,
        [],
    ),
};

type EqualityMatcherGetter = (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined;

const ALWAYS_EQUAL: EqualityMatcherGetter = () => () => true;
const ALWAYS_UNEQUAL: EqualityMatcherGetter = () => () => false;
const UTF8_EQUAL: EqualityMatcherGetter = () => (
    assertion: ASN1Element,
    value: ASN1Element,
) => (assertion.utf8String.toLowerCase() === value.utf8String.toLowerCase());
const ALWAYS_UNRECOGNIZED: EqualityMatcherGetter = () => undefined;

const PROTECTED_ITEMS_ENTRY: ProtectedItems = new ProtectedItems(
    null,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
);

const ALL_USERS: UserClasses = new UserClasses(
    null,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
);

const ALL_GRANT_ALL_USERS = new ItemPermission(
    255,
    ALL_USERS,
    ALL_GRANTS,
);

const ALL_DENY_ALL_USERS = new ItemPermission(
    255,
    ALL_USERS,
    ALL_DENIALS,
);

function getSettings (
    matcherGetter: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
): EvaluateFilterSettings {
    return {
        getEqualityMatcher: matcherGetter,
        getOrderingMatcher: () => () => 1,
        getSubstringsMatcher: () => () => true,
        getApproximateMatcher: () => () => true,
        getContextMatcher: () => () => true,
        determineAbsentMatch: () => true,
        isMatchingRuleCompatibleWithAttributeType: () => true,
        isAttributeSubtype: () => true,
        permittedToMatch: () => true,
    };
}

const requester = new NameAndOptionalUID(
    [],
    undefined,
);

describe("splitGrantsAndDenials()", () => {
    it("works", () => {
        const gad: GrantsAndDenials = new Uint8ClampedArray([
            TRUE_BIT,
            TRUE_BIT,
            FALSE_BIT,
            FALSE_BIT,
            TRUE_BIT,
            TRUE_BIT,
        ]);
        const split = splitGrantsAndDenials(gad);
        expect(split.length).toBe(2);
        if (split.length === 2) {
            // These get padded to 24 bits.
            expect(split[0].toString().indexOf("1,0,0,0,1,0")).toBe(0);
            expect(split[1].toString().indexOf("0,1,0,0,0,1")).toBe(0);
        }
    });
});

describe("getACDFTuplesFromACIItem()", () => {
    it("returns an empty array when the type of ACIItem.itemOrUserFirst is unrecognized", () => {
        const aci = new ACIItem(
            WHATEVER_LABEL,
            255,
            AUTH_LEVEL_NONE,
            new DERElement(),
        )
        expect(getACDFTuplesFromACIItem(aci)).toHaveLength(0);
    });
});

describe("itemIsProtected()", () => {
    it("works with the 'classes' alternative", () => {
        const pi = new ProtectedItems(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
            {
                item: ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]),
            },
        );
        const protected_ = itemIsProtected({
            entry: [ ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]) ],
        }, pi, requester, getSettings(ALWAYS_EQUAL));
        expect(protected_).toBe(true);
    });

    it("does not return true for an unrecognized request type", () => {
        const pi = PROTECTED_ITEMS_ENTRY;
        const protected_ = itemIsProtected({} as ProtectedItem, pi, requester, getSettings(ALWAYS_EQUAL));
        expect(protected_).toBe(false);
    });
});

describe("bacACDF()", () => {
    it("prohibits access when there are no applicable ACIItems", () => {
        const acis: ACIItem[] = [];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const {
            authorized,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeFalsy();
    });

    // This test is no longer valid.
    it.skip("prohibits access when the user's authorization level uses the 'other' option", () => {
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                {
                    other: new External(
                        undefined,
                        undefined,
                        undefined,
                        new Uint8Array(),
                    ),
                },
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        PROTECTED_ITEMS_ENTRY,
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const {
            authorized,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeFalsy();
    });

    it("permits access when there is one applicable ACIItem (itemFirst) that permits access", () => {
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                {
                    basicLevels: new AuthenticationLevel_basicLevels(
                        AuthenticationLevel_basicLevels_level_none,
                        0,
                        false,
                    ),
                },
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        PROTECTED_ITEMS_ENTRY,
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const {
            authorized,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeTruthy();
    });

    it("permits access when there is one applicable ACIItem (userFirst) that permits access", () => {
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                {
                    basicLevels: new AuthenticationLevel_basicLevels(
                        AuthenticationLevel_basicLevels_level_none,
                        0,
                        false,
                    ),
                },
                {
                    userFirst: new ACIItem_itemOrUserFirst_userFirst(
                        ALL_USERS,
                        [
                            new UserPermission(
                                255,
                                PROTECTED_ITEMS_ENTRY,
                                ALL_GRANTS,
                            ),
                        ],
                    ),
                },
            )
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const {
            authorized,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeTruthy();
    });

    //#region AuthenticationLevel tests

    // These tests are no longer valid.
    test.skip.each([
        [ AuthenticationLevel_basicLevels_level_simple ],
        [ AuthenticationLevel_basicLevels_level_strong ],
    ])("denies access when there are only ACIItems above the user's authentication level's basic level", (req_auth) => {
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                {
                    basicLevels: new AuthenticationLevel_basicLevels(
                        req_auth,
                        0,
                        false,
                    ),
                },
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        PROTECTED_ITEMS_ENTRY,
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            )
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const {
            authorized,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeFalsy();
    });

    // This test is no longer valid.
    it.skip("denies access when the applicable ACIItems match the authentication level of the user, but not the local qualifier", () => {
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                {
                    basicLevels: new AuthenticationLevel_basicLevels(
                        AuthenticationLevel_basicLevels_level_none,
                        3,
                        false,
                    ),
                },
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        PROTECTED_ITEMS_ENTRY,
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            )
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const {
            authorized,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeFalsy();
    });

    // This test is no longer valid.
    it.skip("denies access when the applicable ACIItems require user signing, but the request is not signed", () => {
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                {
                    basicLevels: new AuthenticationLevel_basicLevels(
                        AuthenticationLevel_basicLevels_level_none,
                        0,
                        true,
                    ),
                },
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        PROTECTED_ITEMS_ENTRY,
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            )
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const {
            authorized,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeFalsy();
    });

    //#endregion

    //#region ProtectedItems testing

    it("ProtectedItems.allUserAttributeTypes can be used to determine authorization", () => {
        const itemOrUserFirst: ACIItem_itemOrUserFirst = {
            itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                new ProtectedItems(
                    undefined, // entry
                    null, // allUserAttributeTypes
                    undefined, // attributeType
                    undefined, // allAttributeValues
                    undefined, // allUserAttributeTypesAndValues
                    undefined, // attributeValue
                    undefined, // selfValue
                    undefined, // rangeOfValues
                    undefined, // maxValueCount
                    undefined, // maxImmSub
                    undefined, // restrictedBy
                    undefined, // contexts
                    undefined, // classes
                ),
                [ALL_GRANT_ALL_USERS],
                [],
            ),
        };
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                itemOrUserFirst,
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            attributeType: ObjectIdentifier.fromParts([ 2, 5, 4, 3 ]),
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        {
            const {
                authorized,
            } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        const tuples2: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        {
            const {
                authorized,
            } = bacACDF(tuples2, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.attributeType can be used to determine authorization", () => {
        const itemOrUserFirst: ACIItem_itemOrUserFirst = {
            itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                new ProtectedItems(
                    undefined, // entry
                    undefined, // allUserAttributeTypes
                    [ID_COMMON_NAME], // attributeType
                    undefined, // allAttributeValues
                    undefined, // allUserAttributeTypesAndValues
                    undefined, // attributeValue
                    undefined, // selfValue
                    undefined, // rangeOfValues
                    undefined, // maxValueCount
                    undefined, // maxImmSub
                    undefined, // restrictedBy
                    undefined, // contexts
                    undefined, // classes
                ),
                [ALL_GRANT_ALL_USERS],
                [],
            ),
        };
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                itemOrUserFirst,
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            attributeType: ID_COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        {
            const {
                authorized,
            } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        const tuples2: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        {
            const {
                authorized,
            } = bacACDF(tuples2, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.allAttributeValues can be used to determine authorization to access all attribute types", () => {
        const itemOrUserFirst: ACIItem_itemOrUserFirst = {
            itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                new ProtectedItems(
                    undefined, // entry
                    undefined, // allUserAttributeTypes
                    undefined, // attributeType
                    [ID_COMMON_NAME], // allAttributeValues
                    undefined, // allUserAttributeTypesAndValues
                    undefined, // attributeValue
                    undefined, // selfValue
                    undefined, // rangeOfValues
                    undefined, // maxValueCount
                    undefined, // maxImmSub
                    undefined, // restrictedBy
                    undefined, // contexts
                    undefined, // classes
                ),
                [ALL_GRANT_ALL_USERS],
                [],
            ),
        };
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                itemOrUserFirst,
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            attributeType: ID_COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        {
            const {
                authorized,
            } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeFalsy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        const tuples2: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        {
            const {
                authorized,
            } = bacACDF(tuples2, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.allUserAttributeTypesAndValues can be used to determine authorization to access all attribute types", () => {
        const itemOrUserFirst: ACIItem_itemOrUserFirst = {
            itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                new ProtectedItems(
                    undefined, // entry
                    undefined, // allUserAttributeTypes
                    undefined, // attributeType
                    undefined, // allAttributeValues
                    null, // allUserAttributeTypesAndValues
                    undefined, // attributeValue
                    undefined, // selfValue
                    undefined, // rangeOfValues
                    undefined, // maxValueCount
                    undefined, // maxImmSub
                    undefined, // restrictedBy
                    undefined, // contexts
                    undefined, // classes
                ),
                [ALL_GRANT_ALL_USERS],
                [],
            ),
        };
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                itemOrUserFirst,
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            attributeType: ID_COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        {
            const {
                authorized,
            } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        const tuples2: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        {
            const {
                authorized,
            } = bacACDF(tuples2, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.attributeValue can be used to determine authorization to access an attribute type", () => {
        const itemOrUserFirst: ACIItem_itemOrUserFirst = {
            itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                new ProtectedItems(
                    undefined, // entry
                    undefined, // allUserAttributeTypes
                    undefined, // attributeType
                    undefined, // allAttributeValues
                    undefined, // allUserAttributeTypesAndValues
                    [COMMON_NAME], // attributeValue
                    undefined, // selfValue
                    undefined, // rangeOfValues
                    undefined, // maxValueCount
                    undefined, // maxImmSub
                    undefined, // restrictedBy
                    undefined, // contexts
                    undefined, // classes
                ),
                [ALL_GRANT_ALL_USERS],
                [],
            ),
        };
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                itemOrUserFirst,
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            attributeType: ID_COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        {
            const {
                authorized,
            } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeFalsy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        const tuples2: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        {
            const {
                authorized,
            } = bacACDF(tuples2, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.attributeValue can be used to reject access to an attribute value", () => {
        const itemOrUserFirst: ACIItem_itemOrUserFirst = {
            itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                new ProtectedItems(
                    undefined, // entry
                    undefined, // allUserAttributeTypes
                    undefined, // attributeType
                    undefined, // allAttributeValues
                    undefined, // allUserAttributeTypesAndValues
                    [COMMON_NAME], // attributeValue
                    undefined, // selfValue
                    undefined, // rangeOfValues
                    undefined, // maxValueCount
                    undefined, // maxImmSub
                    undefined, // restrictedBy
                    undefined, // contexts
                    undefined, // classes
                ),
                [ALL_GRANT_ALL_USERS],
                [],
            ),
        };
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                itemOrUserFirst,
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            value: ORG_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = UTF8_EQUAL;
        const {
            authorized,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBe(false);
    });

    it("ProtectedItems.attributeValue rejects access when the equality matcher is not understood", () => {
        const itemOrUserFirst: ACIItem_itemOrUserFirst = {
            itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                new ProtectedItems(
                    undefined, // entry
                    undefined, // allUserAttributeTypes
                    undefined, // attributeType
                    undefined, // allAttributeValues
                    undefined, // allUserAttributeTypesAndValues
                    [COMMON_NAME], // attributeValue
                    undefined, // selfValue
                    undefined, // rangeOfValues
                    undefined, // maxValueCount
                    undefined, // maxImmSub
                    undefined, // restrictedBy
                    undefined, // contexts
                    undefined, // classes
                ),
                [ALL_GRANT_ALL_USERS],
                [],
            ),
        };
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                itemOrUserFirst,
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            value: COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_UNRECOGNIZED;
        const {
            authorized,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBe(false);
    });

    it("ProtectedItems.allAttributeValues can be used to determine authorization to access an attribute's values", () => {
        const itemOrUserFirst: ACIItem_itemOrUserFirst = {
            itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                new ProtectedItems(
                    undefined, // entry
                    undefined, // allUserAttributeTypes
                    undefined, // attributeType
                    [ID_COMMON_NAME], // allAttributeValues
                    undefined, // allUserAttributeTypesAndValues
                    undefined, // attributeValue
                    undefined, // selfValue
                    undefined, // rangeOfValues
                    undefined, // maxValueCount
                    undefined, // maxImmSub
                    undefined, // restrictedBy
                    undefined, // contexts
                    undefined, // classes
                ),
                [ALL_GRANT_ALL_USERS],
                [],
            ),
        };
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                itemOrUserFirst,
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            value: COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        {
            const {
                authorized,
            } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        const tuples2: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        {
            const {
                authorized,
            } = bacACDF(tuples2, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.allUserAttributeTypes can be used to determine authorization to access an attribute's values", () => {
        const itemOrUserFirst: ACIItem_itemOrUserFirst = {
            itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                new ProtectedItems(
                    undefined, // entry
                    undefined, // allUserAttributeTypes
                    undefined, // attributeType
                    undefined, // allAttributeValues
                    null, // allUserAttributeTypesAndValues
                    undefined, // attributeValue
                    undefined, // selfValue
                    undefined, // rangeOfValues
                    undefined, // maxValueCount
                    undefined, // maxImmSub
                    undefined, // restrictedBy
                    undefined, // contexts
                    undefined, // classes
                ),
                [ALL_GRANT_ALL_USERS],
                [],
            ),
        };
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                itemOrUserFirst,
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            value: COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        {
            const {
                authorized,
            } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        const tuples2: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        {
            const {
                authorized,
            } = bacACDF(tuples2, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.attributeValue can be used to determine authorization to access an attribute's values", () => {
        const itemOrUserFirst: ACIItem_itemOrUserFirst = {
            itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                new ProtectedItems(
                    undefined, // entry
                    undefined, // allUserAttributeTypes
                    undefined, // attributeType
                    undefined, // allAttributeValues
                    undefined, // allUserAttributeTypesAndValues
                    [COMMON_NAME], // attributeValue
                    undefined, // selfValue
                    undefined, // rangeOfValues
                    undefined, // maxValueCount
                    undefined, // maxImmSub
                    undefined, // restrictedBy
                    undefined, // contexts
                    undefined, // classes
                ),
                [ALL_GRANT_ALL_USERS],
                [],
            ),
        };
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                itemOrUserFirst,
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            value: COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        {
            const {
                authorized,
            } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        const tuples2: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        {
            const {
                authorized,
            } = bacACDF(tuples2, requester, request, operations, getSettings(getEqualityMatcher));
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.attributeValue can be used to determine authorization to access an attribute's values", () => {
        const itemOrUserFirst: ACIItem_itemOrUserFirst = {
            itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                new ProtectedItems(
                    undefined, // entry
                    undefined, // allUserAttributeTypes
                    undefined, // attributeType
                    undefined, // allAttributeValues
                    undefined, // allUserAttributeTypesAndValues
                    [COMMON_NAME_2], // attributeValue
                    undefined, // selfValue
                    undefined, // rangeOfValues
                    undefined, // maxValueCount
                    undefined, // maxImmSub
                    undefined, // restrictedBy
                    undefined, // contexts
                    undefined, // classes
                ),
                [ALL_GRANT_ALL_USERS],
                [],
            ),
        };
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                itemOrUserFirst,
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            value: COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_UNEQUAL;
        const {
            authorized,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeFalsy();
    });

    //#endregion

    //#region Multiple ACIItem tests

    it("prefers ACI items of higher precedence", () => {
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                251,
                AUTH_LEVEL_NONE,
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        PROTECTED_ITEMS_ENTRY,
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            ),
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        PROTECTED_ITEMS_ENTRY,
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const {
            authorized,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeTruthy();
    });

    it("prefers ACI items of higher user class specificity", () => {
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        PROTECTED_ITEMS_ENTRY,
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            ),
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        PROTECTED_ITEMS_ENTRY,
                        [
                            new ItemPermission(
                                255,
                                new UserClasses(
                                    undefined,
                                    null,
                                    undefined,
                                    undefined,
                                    undefined,
                                ),
                                ALL_GRANTS,
                            )
                        ],
                        [],
                    ),
                },
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const {
            authorized,
            mostUserSpecificTuples,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeTruthy();
        expect(mostUserSpecificTuples).toBeDefined();
    });

    it("prefers ACI items of higher protected item specificity when an attribute type is requested", () => {
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        new ProtectedItems(
                            undefined,
                            null,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                        ),
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            ),
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        new ProtectedItems(
                            undefined,
                            undefined,
                            [ID_COMMON_NAME],
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                        ),
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            attributeType: ID_COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const {
            authorized,
            mostItemSpecificTuples,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeTruthy();
        expect(mostItemSpecificTuples).toBeDefined();
    });

    it("prefers ACI items of higher protected item specificity when a value is requested", () => {
        const acis: ACIItem[] = [
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        new ProtectedItems(
                            undefined,
                            undefined,
                            undefined,
                            [ID_COMMON_NAME],
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                        ),
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            ),
            new ACIItem(
                WHATEVER_LABEL,
                255,
                AUTH_LEVEL_NONE,
                {
                    itemFirst: new ACIItem_itemOrUserFirst_itemFirst(
                        new ProtectedItems(
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            [COMMON_NAME],
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                        ),
                        [ALL_GRANT_ALL_USERS],
                        [],
                    ),
                },
            ),
        ];
        const tuples: ACDFTupleExtended[] = acis
            .flatMap((aci) => getACDFTuplesFromACIItem(aci))
            .map((tuple): ACDFTupleExtended => [ ...tuple, 3 ])
            .filter((tuple): boolean => (tuple[5] > 0));
        const request: ProtectedItem = {
            value: COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const {
            authorized,
            mostItemSpecificTuples,
        } = bacACDF(tuples, requester, request, operations, getSettings(getEqualityMatcher));
        expect(authorized).toBeTruthy();
        expect(mostItemSpecificTuples).toBeDefined();
    });

    //#endregion

});
