import { findLabelValueSeparator } from "./utils.mjs";

describe("findLabelValueSeparator", () => {
    it("should return the index of the first equals sign", () => {
        expect(findLabelValueSeparator("name=value")).toBe(4);
    });

    it("should return the index of the first equals sign when the label includes an escaped equals sign", () => {
        expect(findLabelValueSeparator("deadb==f=value")).toBe(8);
    });

    it("should return the index of the first equals sign when the label and value includes an escaped equals sign", () => {
        expect(findLabelValueSeparator("b==fb==f=b==f")).toBe(8);
    });
});
