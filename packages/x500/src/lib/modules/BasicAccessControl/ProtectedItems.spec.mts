import { ProtectedItems } from "./ProtectedItems.ta.mjs";
import { UserClasses } from "./UserClasses.ta.mjs";

describe("ProtectedItems and UserClasses isEmpty", () => {
    it("is true with no selectors", () => {
        expect(new ProtectedItems().isEmpty()).toBe(true);
        expect(new ProtectedItems(null).isEmpty()).toBe(false);
        expect(new UserClasses().isEmpty()).toBe(true);
        expect(new UserClasses(null).isEmpty()).toBe(false);
        expect(new UserClasses(undefined, undefined, []).isEmpty()).toBe(true);
    });
});
