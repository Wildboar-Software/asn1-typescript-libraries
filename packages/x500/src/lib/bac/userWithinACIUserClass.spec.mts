import { TRUE_BIT, FALSE_BIT } from "@wildboar/asn1";
import userWithinACIUserClass from "./userWithinACIUserClass.mjs";
import type ACDFTuple from "../types/ACDFTuple.mjs";
import {
    UserClasses,
} from "../modules/BasicAccessControl/UserClasses.ta.mjs";
import {
    ProtectedItems,
} from "../modules/BasicAccessControl/ProtectedItems.ta.mjs";
import type {
    AuthenticationLevel,
} from "../modules/BasicAccessControl/AuthenticationLevel.ta.mjs";
import {
    AuthenticationLevel_basicLevels,
} from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta.mjs";
import {
    AuthenticationLevel_basicLevels_level_none,
    AuthenticationLevel_basicLevels_level_simple,
} from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels-level.ta.mjs";
import type { GrantsAndDenials } from "../modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import {
    NameAndOptionalUID,
} from "../modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import {
    AttributeTypeAndValue,
} from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { commonName } from "../modules/SelectedAttributeTypes/commonName.oa.mjs";
import { DER } from "@wildboar/asn1/functional";

const ALL_GRANTS: GrantsAndDenials = new Uint8ClampedArray(Array.from({ length: 26 }, (_, i) => (
    (i % 2 === 0) ? TRUE_BIT : FALSE_BIT
)));

const ALL_DENIALS: GrantsAndDenials = new Uint8ClampedArray(Array.from({ length: 26 }, (_, i) => (
    (i % 2 === 1) ? TRUE_BIT : FALSE_BIT
)));

const AUTH_NONE: AuthenticationLevel = {
    basicLevels: new AuthenticationLevel_basicLevels(AuthenticationLevel_basicLevels_level_none),
};

const AUTH_SIMPLE: AuthenticationLevel = {
    basicLevels: new AuthenticationLevel_basicLevels(AuthenticationLevel_basicLevels_level_simple),
};

const ENTRY_DN = [
    [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ printableString: "entry" }, DER),
        ),
    ],
];

const NAMED_USER = new NameAndOptionalUID([
    [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ printableString: "alice" }, DER),
        ),
    ],
]);

const GROUP_NAME = new NameAndOptionalUID([
    [
        new AttributeTypeAndValue(
            commonName["&id"],
            commonName.encoderFor["&Type"]!({ printableString: "admins" }, DER),
        ),
    ],
]);

const PROTECTED_ENTRY = new ProtectedItems(null);

function tuple (
    userClass: UserClasses,
    authLevel: AuthenticationLevel,
    grantsAndDenials: GrantsAndDenials,
): ACDFTuple {
    return [ userClass, authLevel, PROTECTED_ENTRY, grantsAndDenials, 100 ];
}

const noMatcher = (): undefined => undefined;
const neverMember = async () => false;

describe("userWithinACIUserClass", () => {
    it.each([
        { membership: true, specificity: 3 },
        { membership: false, specificity: 0 },
        { membership: undefined, specificity: 0.5 },
    ])("awaits one group lookup for membership $membership (M26)", async ({ membership, specificity }) => {
        const groupTuple: ACDFTuple = [
            new UserClasses(undefined, undefined, undefined, [GROUP_NAME]),
            AUTH_NONE, PROTECTED_ENTRY, ALL_GRANTS, 100,
        ];
        const lookup = vi.fn(async () => membership);
        expect(await userWithinACIUserClass(groupTuple, NAMED_USER, AUTH_NONE, ENTRY_DN, noMatcher, lookup))
            .toBe(specificity);
        expect(lookup).toHaveBeenCalledExactlyOnceWith(GROUP_NAME, NAMED_USER);
    });

    it("looks up each necessary group once and stops at the first confirmed membership (M26)", async () => {
        const secondGroup = new NameAndOptionalUID([]);
        const groupTuple: ACDFTuple = [
            new UserClasses(undefined, undefined, undefined, [GROUP_NAME, secondGroup, GROUP_NAME]),
            AUTH_NONE, PROTECTED_ENTRY, ALL_GRANTS, 100,
        ];
        const lookup = vi.fn().mockResolvedValueOnce(false).mockResolvedValueOnce(true);
        expect(await userWithinACIUserClass(groupTuple, NAMED_USER, AUTH_NONE, ENTRY_DN, noMatcher, lookup)).toBe(3);
        expect(lookup).toHaveBeenCalledTimes(2);
        expect(lookup).toHaveBeenNthCalledWith(1, GROUP_NAME, NAMED_USER);
        expect(lookup).toHaveBeenNthCalledWith(2, secondGroup, NAMED_USER);
    });

    it("propagates the single awaited membership rejection without a discarded Promise (M26)", async () => {
        const groupTuple: ACDFTuple = [
            new UserClasses(undefined, undefined, undefined, [GROUP_NAME]),
            AUTH_NONE, PROTECTED_ENTRY, ALL_GRANTS, 100,
        ];
        const failure = new Error("Group service unavailable");
        const lookup = vi.fn(async () => { throw failure; });
        await expect(userWithinACIUserClass(groupTuple, NAMED_USER, AUTH_NONE, ENTRY_DN, noMatcher, lookup)).rejects.toBe(failure);
        expect(lookup).toHaveBeenCalledExactlyOnceWith(GROUP_NAME, NAMED_USER);
    });

    it("matches allUsers for an anonymous requestor", async () => {
        const specificity = await userWithinACIUserClass(
            tuple(new UserClasses(null), AUTH_NONE, ALL_GRANTS),
            undefined,
            AUTH_NONE,
            ENTRY_DN,
            noMatcher,
            neverMember,
        );
        expect(specificity).toBe(1);
    });

    it("does not treat a missing name as membership in name/userGroup/subtree", async () => {
        const nameDeny = await userWithinACIUserClass(
            tuple(new UserClasses(undefined, undefined, [ NAMED_USER ]), AUTH_NONE, ALL_DENIALS),
            null,
            AUTH_NONE,
            ENTRY_DN,
            noMatcher,
            neverMember,
        );
        const groupDeny = await userWithinACIUserClass(
            tuple(new UserClasses(undefined, undefined, undefined, [ GROUP_NAME ]), AUTH_NONE, ALL_DENIALS),
            undefined,
            AUTH_NONE,
            ENTRY_DN,
            noMatcher,
            neverMember,
        );
        expect(nameDeny).toBe(0);
        expect(groupDeny).toBe(0);
    });

    it("retains name/userGroup denials for anonymous requestors when ACI auth exceeds the requestor's", async () => {
        const nameDeny = await userWithinACIUserClass(
            tuple(new UserClasses(undefined, undefined, [ NAMED_USER ]), AUTH_SIMPLE, ALL_DENIALS),
            undefined,
            AUTH_NONE,
            ENTRY_DN,
            noMatcher,
            neverMember,
        );
        const groupDeny = await userWithinACIUserClass(
            tuple(new UserClasses(undefined, undefined, undefined, [ GROUP_NAME ]), AUTH_SIMPLE, ALL_DENIALS),
            null,
            AUTH_NONE,
            ENTRY_DN,
            noMatcher,
            neverMember,
        );
        expect(nameDeny).toBe(5);
        expect(groupDeny).toBe(5);
    });

    it("does not retain grants for anonymous requestors just because ACI auth is higher", async () => {
        const specificity = await userWithinACIUserClass(
            tuple(new UserClasses(undefined, undefined, [ NAMED_USER ]), AUTH_SIMPLE, ALL_GRANTS),
            undefined,
            AUTH_NONE,
            ENTRY_DN,
            noMatcher,
            neverMember,
        );
        expect(specificity).toBe(0);
    });

    it("still applies the higher-auth denial rule to an identified user", async () => {
        const specificity = await userWithinACIUserClass(
            tuple(new UserClasses(undefined, undefined, [ NAMED_USER ]), AUTH_SIMPLE, ALL_DENIALS),
            NAMED_USER,
            AUTH_NONE,
            ENTRY_DN,
            noMatcher,
            neverMember,
        );
        expect(specificity).toBe(5);
    });

    it("does not treat an empty DN as a missing user", async () => {
        const emptyDnUser = new NameAndOptionalUID([]);
        const specificity = await userWithinACIUserClass(
            tuple(new UserClasses(undefined, undefined, [ NAMED_USER ]), AUTH_SIMPLE, ALL_DENIALS),
            emptyDnUser,
            AUTH_NONE,
            ENTRY_DN,
            noMatcher,
            neverMember,
        );
        // Empty DN is still a bound name, so the higher-auth denial rule applies
        // the same way as for any identified user.
        expect(specificity).toBe(5);
    });
});
