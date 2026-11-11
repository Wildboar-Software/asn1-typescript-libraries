import { deniesAccess } from "./deniesAccess.mjs";
import { grantsAccess } from "./grantsAccess.mjs";
import ACDFTupleExtended from "../types/ACDFTupleExtended.mjs";
import { UserClasses } from "../modules/BasicAccessControl/UserClasses.ta.mjs";
import { ProtectedItems } from "../modules/BasicAccessControl/ProtectedItems.ta.mjs";
import { AuthenticationLevel_basicLevels } from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta.mjs";
import {
    AuthenticationLevel_basicLevels_level_none,
} from "../modules/BasicAccessControl/AuthenticationLevel-basicLevels-level.ta.mjs";
import type { AuthenticationLevel } from "../modules/BasicAccessControl/AuthenticationLevel.ta.mjs";

const AUTH_NONE: AuthenticationLevel = {
    basicLevels: new AuthenticationLevel_basicLevels(AuthenticationLevel_basicLevels_level_none),
};

function tuple (bits: readonly number[]): ACDFTupleExtended {
    return new ACDFTupleExtended(
        new UserClasses(null),
        AUTH_NONE,
        new ProtectedItems(null),
        new Uint8ClampedArray(bits),
        0,
        1,
    );
}

describe("grant and deny bit walks", () => {
    it.each([
        [ [], false, false ],
        [ [ 1 ], true, false ],
        [ [ 0, 1 ], false, true ],
        [ [ 1, 1 ], true, true ],
        [ [ 0, 0, 0, 0, 0, 1 ], false, true ],
        [ [ 0, 0, 0, 0, 1 ], true, false ],
    ] as const)("bits %j grant %s deny %s", (bits, grants, denies) => {
        const permissions = tuple(bits);
        expect(grantsAccess(permissions)).toBe(grants);
        expect(deniesAccess(permissions.grantsAndDenials)).toBe(denies);
    });
});
