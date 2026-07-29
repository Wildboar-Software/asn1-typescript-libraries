import { compareTarget } from "./compareTarget.mjs";
import type {
    Target,
} from "../modules/AttributeCertificateDefinitions/Target.ta.mjs";

describe("compareTarget()", () => {
    it("evaluates targetGroup as a prefix when matching against a targetName", () => {
        const a: Target = { targetGroup: { dNSName: "alpha.example.com" } };
        const b: Target = { targetName: { dNSName: "server01.alpha.example.com" } };
        const result = compareTarget(a, b, () => () => false);
        expect(result).toBe(true);
    });
});
