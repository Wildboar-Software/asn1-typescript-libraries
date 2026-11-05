import { SecurityLabel } from "./SecurityLabel.ta.mjs";

describe("SecurityLabel.isEmpty", () => {
    it("is true when every component is absent", () => {
        expect(new SecurityLabel().isEmpty()).toBe(true);
        expect(new SecurityLabel(undefined, 3).isEmpty()).toBe(false);
    });
});
