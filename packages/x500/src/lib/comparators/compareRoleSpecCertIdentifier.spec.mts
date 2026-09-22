import { RoleSpecCertIdentifier } from "../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta.mjs";
import compareRoleSpecCertIdentifier from "./compareRoleSpecCertIdentifier.mjs";

function id (serial?: Uint8Array, locator?: { dNSName: string }[]) {
    return new RoleSpecCertIdentifier(
        { dNSName: "role.example" },
        { dNSName: "issuer.example" },
        serial,
        locator,
    );
}

describe("compareRoleSpecCertIdentifier()", () => {
    it("matches when optional serial and locator are absent on both sides", () => {
        expect(compareRoleSpecCertIdentifier(id(), id())).toBe(true);
    });

    it("returns false when only one side has a serial number", () => {
        expect(compareRoleSpecCertIdentifier(id(new Uint8Array([1])), id())).toBe(false);
    });

    it("compares locators when both are present", () => {
        const loc = [ { dNSName: "ldap.example" } ];
        expect(compareRoleSpecCertIdentifier(id(undefined, loc), id(undefined, loc))).toBe(true);
        expect(compareRoleSpecCertIdentifier(
            id(undefined, loc),
            id(undefined, [ { dNSName: "other.example" } ]),
        )).toBe(false);
    });
});
