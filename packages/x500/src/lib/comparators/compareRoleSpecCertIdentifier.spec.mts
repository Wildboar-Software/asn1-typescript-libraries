import { RoleSpecCertIdentifier } from "../modules/AttributeCertificateDefinitions/RoleSpecCertIdentifier.ta.mjs";
import compareRoleSpecCertIdentifier from "./compareRoleSpecCertIdentifier.mjs";

function identifier (
    roleName: string,
    issuer: string,
    serial?: Uint8Array,
    locator?: string,
): RoleSpecCertIdentifier {
    return new RoleSpecCertIdentifier(
        { dNSName: roleName },
        { dNSName: issuer },
        serial,
        locator === undefined ? undefined : [{ dNSName: locator }],
    );
}

/**
 * Exact equality is symmetric, so both argument orders must agree.
 */
function expectSymmetric (a: RoleSpecCertIdentifier, b: RoleSpecCertIdentifier, equal: boolean): void {
    expect(compareRoleSpecCertIdentifier(a, b)).toBe(equal);
    expect(compareRoleSpecCertIdentifier(b, a)).toBe(equal);
}

describe("compareRoleSpecCertIdentifier()", () => {
    const full = identifier("role.example", "issuer.example", new Uint8Array([1]), "locator.example");

    it("matches identical values, including when both omit the optional components", () => {
        expectSymmetric(
            full,
            identifier("role.example", "issuer.example", new Uint8Array([1]), "locator.example"),
            true,
        );
        expectSymmetric(
            identifier("role.example", "issuer.example"),
            identifier("role.example", "issuer.example"),
            true,
        );
    });

    it("requires the serial number to be present on both sides", () => {
        expectSymmetric(
            full,
            identifier("role.example", "issuer.example", undefined, "locator.example"),
            false,
        );
    });

    it("requires the locator to be present on both sides", () => {
        expectSymmetric(
            full,
            identifier("role.example", "issuer.example", new Uint8Array([1])),
            false,
        );
    });

    it("does not match a different role name, issuer, serial, or locator", () => {
        expectSymmetric(full, identifier("other.example", "issuer.example", new Uint8Array([1]), "locator.example"), false);
        expectSymmetric(full, identifier("role.example", "other.example", new Uint8Array([1]), "locator.example"), false);
        expectSymmetric(full, identifier("role.example", "issuer.example", new Uint8Array([2]), "locator.example"), false);
        expectSymmetric(full, identifier("role.example", "issuer.example", new Uint8Array([1]), "other.example"), false);
    });
});
