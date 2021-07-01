import bacACDF, {
    PERMISSION_CATEGORY_ADD,
    PERMISSION_CATEGORY_DISCLOSE_ON_ERROR,
    PERMISSION_CATEGORY_READ,
    PERMISSION_CATEGORY_REMOVE,
    PERMISSION_CATEGORY_BROWSE,
    PERMISSION_CATEGORY_EXPORT,
    PERMISSION_CATEGORY_IMPORT,
    PERMISSION_CATEGORY_MODIFY,
    PERMISSION_CATEGORY_RENAME,
    PERMISSION_CATEGORY_RETURN_DN,
    PERMISSION_CATEGORY_COMPARE,
    PERMISSION_CATEGORY_FILTER_MATCH,
    PERMISSION_CATEGORY_INVOKE,
} from "../../../src/lib/bac/bacACDF";
import { TRUE_BIT, OBJECT_IDENTIFIER, FALSE_BIT, ObjectIdentifier, DERElement, ASN1TagClass, ASN1ConstructionError, ASN1Construction, ASN1UniversalType } from "asn1-ts";
// import discardNonRelevantACDFTuples from "./discardNonRelevantACDFTuples";
import type ACDFTuple from "../../../src/lib/types/ACDFTuple";
import type ProtectedItem from "../../../src/lib/types/ProtectedItem";
import {
    ProtectedItems,
} from "../../../src/lib/modules/BasicAccessControl/ProtectedItems.ta";
import type {
    AuthenticationLevel,
} from "../../../src/lib/modules/BasicAccessControl/AuthenticationLevel.ta";
import {
    AuthenticationLevel_basicLevels,
} from "../../../src/lib/modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta";
import {
    AuthenticationLevel_basicLevels_level,
    AuthenticationLevel_basicLevels_level_none,
    AuthenticationLevel_basicLevels_level_simple,
    AuthenticationLevel_basicLevels_level_strong,
} from "../../../src/lib/modules/BasicAccessControl/AuthenticationLevel-basicLevels-level.ta";
import type EqualityMatcher from "../../../src/lib/types/EqualityMatcher";
import type {
    DistinguishedName,
} from "../../../src/lib/modules/InformationFramework/DistinguishedName.ta";
import {
    NameAndOptionalUID,
} from "../../../src/lib/modules/SelectedAttributeTypes/NameAndOptionalUID.ta";
import {
    ACIItem, ACIItem_itemOrUserFirst, UnboundedDirectoryString, _encode_UnboundedDirectoryString,
} from "../../../src/lib/modules/BasicAccessControl/ACIItem.ta";
import {
    ACIItem_itemOrUserFirst_itemFirst,
} from "../../../src/lib/modules/BasicAccessControl/ACIItem-itemOrUserFirst-itemFirst.ta";
import {
    ItemPermission,
} from "../../../src/lib/modules/BasicAccessControl/ItemPermission.ta";
import {
    UserClasses,
} from "../../../src/lib/modules/BasicAccessControl/UserClasses.ta";
import type { GrantsAndDenials } from "../../../src/lib/modules/BasicAccessControl/GrantsAndDenials.ta";
import {
    AttributeTypeAndValue,
} from "../../../src/lib/modules/InformationFramework/AttributeTypeAndValue.ta";

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

const NEITHER_GRANTS_NOR_DENIALS: GrantsAndDenials = new Uint8ClampedArray([
    // Add
    FALSE_BIT,
    FALSE_BIT,
    // Disclose on Error
    FALSE_BIT,
    FALSE_BIT,
    // Read
    FALSE_BIT,
    FALSE_BIT,
    // Remove
    FALSE_BIT,
    FALSE_BIT,
    // Browse
    FALSE_BIT,
    FALSE_BIT,
    // Export
    FALSE_BIT,
    FALSE_BIT,
    // Import
    FALSE_BIT,
    FALSE_BIT,
    // Modify
    FALSE_BIT,
    FALSE_BIT,
    // Rename
    FALSE_BIT,
    FALSE_BIT,
    // Return DN
    FALSE_BIT,
    FALSE_BIT,
    // Compare
    FALSE_BIT,
    FALSE_BIT,
    // Filter Match
    FALSE_BIT,
    FALSE_BIT,
    // Invoke
    FALSE_BIT,
    FALSE_BIT,
]);

const WHATEVER_LABEL: UnboundedDirectoryString = {
    uTF8String: "Whatever",
};

const MOCK_USER: NameAndOptionalUID = new NameAndOptionalUID(
    [
        [
            new AttributeTypeAndValue(
                new ObjectIdentifier([ 2, 5, 4, 3 ]),
                _encode_UnboundedDirectoryString({
                    uTF8String: "Joe Schmoe",
                }, () => new DERElement()),
            ),
        ]
    ],
    undefined,
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
type MembershipChecker = (userGroup: NameAndOptionalUID, user: NameAndOptionalUID) => boolean | undefined;

const ALWAYS_EQUAL: EqualityMatcherGetter = () => () => true;
const ALWAYS_UNEQUAL: EqualityMatcherGetter = () => () => false;
const ALWAYS_MEMBER: MembershipChecker = () => true;
const ALWAYS_NON_MEMBER: MembershipChecker = () => false;

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

const ID_COMMON_NAME: OBJECT_IDENTIFIER = new ObjectIdentifier([ 2, 5, 4, 3 ]);
const ID_ORG_NAME: OBJECT_IDENTIFIER = new ObjectIdentifier([ 2, 5, 4, 10 ]);

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

describe("bacACDF()", () => {
    it("prohibits access when there are no applicable ACIItems", () => {
        const acis: ACIItem[] = [];
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        const {
            authorized,
        } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
        expect(authorized).toBeFalsy();
    });

    it("permits access when there is one applicable ACIItem that permits access", () => {
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
            )
        ];
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        const {
            authorized,
        } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
        expect(authorized).toBeTruthy();
    });

    //#region AuthenticationLevel tests

    test.each([
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        const {
            authorized,
        } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
        expect(authorized).toBeFalsy();
    });

    it("denies access when the applicable ACIItems match the authentication level of the user, but not the local qualifier", () => {
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        const {
            authorized,
        } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
        expect(authorized).toBeFalsy();
    });

    it("denies access when the applicable ACIItems require user signing, but the request is not signed", () => {
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            entry: [],
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        const {
            authorized,
        } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
        expect(authorized).toBeFalsy();
    });

    //#endregion

    //#region ProtectedItems testing

    it("ProtectedItems.allUserAttributeTypes can be determine authorization", () => {
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            attributeType: new ObjectIdentifier([ 2, 5, 4, 3 ]),
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.attributeType can be determine authorization", () => {
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            attributeType: ID_COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.allAttributeValues can be determine authorization to access all attribute types", () => {
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            attributeType: ID_COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.allUserAttributeTypesAndValues can be determine authorization to access all attribute types", () => {
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            attributeType: ID_COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.attributeValue can be determine authorization to access an attribute types", () => {
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            attributeType: ID_COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.allAttributeValues can be determine authorization to access an attribute values", () => {
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            value: COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.allUserAttributeTypes can be determine authorization to access an attribute values", () => {
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            value: COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.attributeValue can be determine authorization to access an attribute values", () => {
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            value: COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeTruthy();
        }
        itemOrUserFirst.itemFirst.itemPermissions[0] = ALL_DENY_ALL_USERS;
        {
            const {
                authorized,
            } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
            expect(authorized).toBeFalsy();
        }
    });

    it("ProtectedItems.attributeValue can be determine authorization to access an attribute values", () => {
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
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            value: COMMON_NAME,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        const {
            authorized,
        } = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
        expect(authorized).toBeFalsy();
    });

    //#endregion
});
