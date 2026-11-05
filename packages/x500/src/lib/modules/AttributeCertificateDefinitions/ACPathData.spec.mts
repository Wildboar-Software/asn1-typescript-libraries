import { ACPathData } from "./ACPathData.ta.mjs";

describe("ACPathData.isEmpty", () => {
    it("is true when both certificates are absent", () => {
        expect(new ACPathData().isEmpty()).toBe(true);
    });
});
