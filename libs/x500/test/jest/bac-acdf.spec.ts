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
} from "../../src/lib/bac/bacACDF";
import { TRUE_BIT, OBJECT_IDENTIFIER, FALSE_BIT, ObjectIdentifier, DERElement } from "asn1-ts";
// import discardNonRelevantACDFTuples from "./discardNonRelevantACDFTuples";
import type ACDFTuple from "../../src/lib/types/ACDFTuple";
import type ProtectedItem from "../../src/lib/types/ProtectedItem";
import {
    ProtectedItems,
} from "../../src/lib/modules/BasicAccessControl/ProtectedItems.ta";
import type {
    AuthenticationLevel,
} from "../../src/lib/modules/BasicAccessControl/AuthenticationLevel.ta";
import {
    AuthenticationLevel_basicLevels,
} from "../../src/lib/modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta";
import {
    AuthenticationLevel_basicLevels_level,
    AuthenticationLevel_basicLevels_level_none,
} from "../../src/lib/modules/BasicAccessControl/AuthenticationLevel-basicLevels-level.ta";
import type EqualityMatcher from "../../src/lib/types/EqualityMatcher";
import type {
    DistinguishedName,
} from "../../src/lib/modules/InformationFramework/DistinguishedName.ta";
import {
    NameAndOptionalUID,
} from "../../src/lib/modules/SelectedAttributeTypes/NameAndOptionalUID.ta";
import {
    ACIItem, UnboundedDirectoryString, _encode_UnboundedDirectoryString,
} from "../../src/lib/modules/BasicAccessControl/ACIItem.ta";
import {
    ACIItem_itemOrUserFirst_itemFirst,
} from "../../src/lib/modules/BasicAccessControl/ACIItem-itemOrUserFirst-itemFirst.ta";
import {
    ItemPermission,
} from "../../src/lib/modules/BasicAccessControl/ItemPermission.ta";
import {
    UserClasses,
} from "../../src/lib/modules/BasicAccessControl/UserClasses.ta";
import type { GrantsAndDenials } from "../../src/lib/modules/BasicAccessControl/GrantsAndDenials.ta";
import {
    AttributeTypeAndValue,
} from "../../src/lib/modules/InformationFramework/AttributeTypeAndValue.ta";

// function bacACDF (
//     acis: ACIItem[],
//     authLevel: AuthenticationLevel,
//     user: NameAndOptionalUID,
//     entry: DistinguishedName,
//     request: ProtectedItem,
//     operations: number[], // Index of bits in GrantsAndDenials / 2.
//     getEqualityMatcher: (attributeType: OBJECT_IDENTIFIER) => EqualityMatcher | undefined,
//     isMemberOfGroup: (userGroup: NameAndOptionalUID, user: NameAndOptionalUID) => boolean | undefined,
// ): boolean {

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

describe("bacACDF()", () => {
    it("prohibits access when there are no applicable ACIItems", () => {
        const acis: ACIItem[] = [];
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            entry: null,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        const permitted = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
        expect(permitted).toBeFalsy();
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
                        new ProtectedItems(
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
                        ),
                        [
                            new ItemPermission(
                                253,
                                new UserClasses(
                                    null,
                                    undefined,
                                    undefined,
                                    undefined,
                                    undefined,
                                    undefined,
                                ),
                                ALL_GRANTS,
                            ),
                        ],
                        [],
                    ),
                },
            )
        ];
        const authLevel: AuthenticationLevel = AUTH_LEVEL_NONE;
        const user: NameAndOptionalUID = MOCK_USER;
        const entry: DistinguishedName = [];
        const request: ProtectedItem = {
            entry: null,
        };
        const operations: number[] = [
            PERMISSION_CATEGORY_ADD,
        ];
        const getEqualityMatcher: EqualityMatcherGetter = ALWAYS_EQUAL;
        const isMemberOfGroup: MembershipChecker = ALWAYS_MEMBER;
        const permitted = bacACDF(acis, authLevel, user, entry, request, operations, getEqualityMatcher, isMemberOfGroup);
        expect(permitted).toBeFalsy();
    });
});
