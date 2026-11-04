import { AuthenticationLevel_basicLevels } from "./AuthenticationLevel-basicLevels.ta.mjs";
import {
    AuthenticationLevel_basicLevels_level_simple,
    AuthenticationLevel_basicLevels_level_strong,
} from "./AuthenticationLevel-basicLevels-level.ta.mjs";

describe("AuthenticationLevel_basicLevels.isEqualTo()", () => {
    it("matches the same level, qualifier, and signed", () => {
        const a = new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_strong,
            3,
            true,
        );
        const b = new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_strong,
            3,
            true,
        );
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("applies DEFAULT signed FALSE", () => {
        const omitted = new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_simple,
        );
        const explicit = new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_simple,
            undefined,
            false,
        );
        expect(omitted.isEqualTo(explicit)).toBe(true);
        expect(explicit.isEqualTo(omitted)).toBe(true);
    });

    it("does not match a different level, qualifier, or signed", () => {
        const a = new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_strong,
            3,
            true,
        );
        expect(a.isEqualTo(new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_simple,
            3,
            true,
        ))).toBe(false);
        expect(a.isEqualTo(new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_strong,
            4,
            true,
        ))).toBe(false);
        expect(a.isEqualTo(new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_strong,
            3,
        ))).toBe(false);
        expect(a.isEqualTo(new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_strong,
        ))).toBe(false);
    });
});
