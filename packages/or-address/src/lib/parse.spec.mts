import { describe, expect, it } from "vitest";
import { orAddressFromString } from "./parse.mjs";
import { orAddressToAttributes } from "./attrs.mjs";

const rfc2156 = { rfc: 2156 as const };

describe("orAddressFromString RFC 1685", () => {
    it("should parse a mnemonic address", () => {
        const addr = orAddressFromString(
            "G=Jonathan;I=M;S=Wilbur;O=Wildboar Software;A=123;C=US",
        );
        expect(addr).not.toBeNull();
        const bisa = addr!.built_in_standard_attributes;
        expect(bisa.personal_name?.given_name).toBe("Jonathan");
        expect(bisa.personal_name?.initials).toBe("M");
        expect(bisa.personal_name?.surname).toBe("Wilbur");
        expect(bisa.organization_name).toBe("Wildboar Software");
        expect(bisa.administration_domain_name).toEqual({ numeric: "123" });
        expect(bisa.country_name).toEqual({ iso_3166_alpha2_code: "US" });
    });

    it("should default to RFC 1685 when options are omitted", () => {
        const addr = orAddressFromString("S=Wilbur;C=US");
        expect(addr?.built_in_standard_attributes.personal_name?.surname).toBe("Wilbur");
    });

    it("should unescape a doubled semicolon in a value", () => {
        const addr = orAddressFromString("O=a;;bank;S=b;C=US");
        expect(addr).not.toBeNull();
        const attrs = orAddressToAttributes(addr!);
        expect(attrs.organization_name).toContain("a;bank");
        expect(addr?.built_in_standard_attributes.personal_name?.surname).toBe("b");
    });

    it("should unescape == only in a DDA type", () => {
        const addr = orAddressFromString("DDA:foo==bar=value;C=US");
        expect(addr?.built_in_domain_defined_attributes).toEqual([
            expect.objectContaining({ type_: "foo=bar", value: "value" }),
        ]);
    });

    it("should leave a literal equals in a value", () => {
        const addr = orAddressFromString("O=foo=bar;C=US");
        expect(addr?.built_in_standard_attributes.organization_name).toBe("foo=bar");
    });

    it("should unescape doubled slashes in slash form", () => {
        const addr = orAddressFromString("/O=a//b/C=US/");
        expect(addr?.built_in_standard_attributes.organization_name).toBe("a/b");
    });

    it("should treat a third semicolon as a separator", () => {
        const addr = orAddressFromString("O=a;;;S=b;C=US");
        expect(addr).not.toBeNull();
        const attrs = orAddressToAttributes(addr!);
        expect(attrs.organization_name).toContain("a;");
        expect(addr?.built_in_standard_attributes.personal_name?.surname).toBe("b");
    });

    it("should keep DDA appearance order", () => {
        const addr = orAddressFromString("DDA:a=1;DDA:b=2;C=US");
        expect(addr?.built_in_domain_defined_attributes?.map((d) => d.type_))
            .toEqual(["a", "b"]);
    });

    it("should assemble OU1 through OU4 in numeric order", () => {
        const addr = orAddressFromString("OU1=one;OU2=two;C=US");
        expect(addr?.built_in_standard_attributes.organizational_unit_names)
            .toEqual(["one", "two"]);
    });

    it("should use PD-PC for the postal code rather than PD-PN", () => {
        const addr = orAddressFromString("PD-PC=12345;PD-PN=Smith;PD-C=US");
        expect(addr).not.toBeNull();
        const attrs = orAddressToAttributes(addr!);
        expect(attrs.postal_codes).toContain("12345");
        expect(attrs.pd_personal_names).toContain("Smith");
    });

    it("should fail when an earlier OU is missing", () => {
        expect(orAddressFromString("OU2=two;C=US")).toBeNull();
    });

    it("should not treat a mixed slash and semicolon as two pairs", () => {
        const addr = orAddressFromString("/G=Andy;S=Wharol/C=US/");
        expect(addr?.built_in_standard_attributes.personal_name).toBeUndefined();
    });

    it("should not unescape RFC 2156 $ quoting", () => {
        const addr = orAddressFromString("/O=a$/b/C=US/");
        expect(addr).toBeNull();
    });
});

describe("orAddressFromString RFC 2156", () => {
    it("should parse a canonical std-or-address", () => {
        const addr = orAddressFromString(
            "/G=Andy/S=Wharol/O=MMNY/ADMD=ATT/C=us/",
            rfc2156,
        );
        expect(addr).not.toBeNull();
        const bisa = addr!.built_in_standard_attributes;
        expect(bisa.personal_name?.given_name).toBe("Andy");
        expect(bisa.personal_name?.surname).toBe("Wharol");
        expect(bisa.organization_name).toBe("MMNY");
        expect(bisa.administration_domain_name).toEqual({ printable: "ATT" });
        expect(bisa.country_name).toEqual({ iso_3166_alpha2_code: "US" });
    });

    it("should accept mixed delimiters", () => {
        const addr = orAddressFromString(
            "/G=Andy;S=Wharol/O=MMNY;ADMD=ATT/C=us/",
            rfc2156,
        );
        expect(addr?.built_in_standard_attributes.personal_name?.surname).toBe("Wharol");
        expect(addr?.built_in_standard_attributes.organization_name).toBe("MMNY");
    });

    it("should unescape $ quoting", () => {
        const addr = orAddressFromString("/O=a$/b/C=US/", rfc2156);
        expect(addr?.built_in_standard_attributes.organization_name).toBe("a/b");
    });

    it("should parse PN as encoded-pn", () => {
        const addr = orAddressFromString("/PN=Marshall.M.T.Rose/C=US/", rfc2156);
        const pn = addr?.built_in_standard_attributes.personal_name;
        expect(pn?.given_name).toBe("Marshall");
        expect(pn?.initials).toBe("MT");
        expect(pn?.surname).toBe("Rose");
    });

    it("should accept UA-ID as the numeric user identifier", () => {
        const addr = orAddressFromString("/UA-ID=12345/C=US/", rfc2156);
        expect(addr?.built_in_standard_attributes.numeric_user_identifier).toBe("12345");
    });

    it("should parse PD-ADDRESS pipe-separated lines", () => {
        const addr = orAddressFromString(
            "/PD-ADDRESS=The Dome|The Square|Richmond|England/PD-C=GB/",
            rfc2156,
        );
        expect(addr).not.toBeNull();
        const attrs = orAddressToAttributes(addr!);
        expect(attrs.unformatted_postal_addresses[0]).toEqual([
            "The Dome",
            "The Square",
            "Richmond",
            "England",
        ]);
    });

    it("should parse DD.Title as a domain-defined attribute", () => {
        const addr = orAddressFromString("/DD.Title=Manager/C=US/", rfc2156);
        expect(addr?.built_in_domain_defined_attributes).toEqual([
            expect.objectContaining({ type_: "Title", value: "Manager" }),
        ]);
    });

    it("should match keywords case-insensitively and keep DDA type case", () => {
        const addr = orAddressFromString("/admd=ATT/pn=Rose/dd.Title=Manager/c=us/", rfc2156);
        expect(addr?.built_in_standard_attributes.administration_domain_name)
            .toEqual({ printable: "ATT" });
        expect(addr?.built_in_standard_attributes.personal_name?.surname).toBe("Rose");
        expect(addr?.built_in_domain_defined_attributes?.[0]?.type_).toBe("Title");
    });

    it("should inject a blank ADMD when C is present", () => {
        const addr = orAddressFromString("/S=Rose/C=US/", rfc2156);
        expect(addr?.built_in_standard_attributes.administration_domain_name)
            .toEqual({ numeric: " " });
    });

    it("should not inject a blank ADMD for RFC 1685", () => {
        const addr = orAddressFromString("S=Rose;C=US");
        expect(addr?.built_in_standard_attributes.administration_domain_name)
            .toBeUndefined();
    });

    it("should reverse repeated OU so the rightmost is most significant", () => {
        const addr = orAddressFromString("/OU=low/OU=high/O=org/C=US/", rfc2156);
        expect(addr?.built_in_standard_attributes.organizational_unit_names)
            .toEqual(["high", "low"]);
    });

    it("should reverse RFC 2156 DD attributes so the rightmost is most significant", () => {
        const addr = orAddressFromString("/DD.a=1/DD.b=2/C=US/", rfc2156);
        expect(addr?.built_in_domain_defined_attributes?.map((d) => d.type_))
            .toEqual(["b", "a"]);
    });

    it("should fail when bare OU is mixed with OU1", () => {
        expect(orAddressFromString("/OU=low/OU1=one/C=US/", rfc2156)).toBeNull();
    });

    it("should fail when PD-ADDRESS is mixed with PD-A1", () => {
        expect(orAddressFromString(
            "/PD-ADDRESS=The Dome/PD-A1=Other/PD-C=GB/",
            rfc2156,
        )).toBeNull();
    });

    it("should fail when PN is mixed with G, I, or S", () => {
        expect(orAddressFromString("/PN=Rose/G=Marshall/C=US/", rfc2156)).toBeNull();
        expect(orAddressFromString("/G=Marshall/PN=Rose/C=US/", rfc2156)).toBeNull();
    });

    it("should allow PN with a separate GQ", () => {
        const addr = orAddressFromString("/PN=Rose/GQ=Jr/C=US/", rfc2156);
        expect(addr?.built_in_standard_attributes.personal_name?.surname).toBe("Rose");
        expect(addr?.built_in_standard_attributes.personal_name?.generation_qualifier)
            .toBe("Jr");
    });

    it("should fail when NET-NUM is mixed with ISDN", () => {
        expect(orAddressFromString("/NET-NUM=123/ISDN=456/C=US/", rfc2156)).toBeNull();
    });

    it("should decode teletex-and-or-ps {ddd} sequences", () => {
        const addr = orAddressFromString("/CN=yen*{165}/C=US/", rfc2156);
        expect(addr).not.toBeNull();
        const attrs = orAddressToAttributes(addr!);
        expect(attrs.common_names[0]).not.toBe("yen*{165}");
        expect(attrs.common_names[0]).not.toContain("{165}");
    });

    it("should not interpret teletex-and-or-ps in RFC 1685 values", () => {
        const addr = orAddressFromString("CN=yen*{165};C=US");
        expect(addr).not.toBeNull();
        const attrs = orAddressToAttributes(addr!);
        expect(attrs.common_names[0]).toBe("yen*{165}");
    });

    it("should not unescape doubled RFC 1685 delimiters as quoting", () => {
        const addr = orAddressFromString("/O=a//b/C=US/", rfc2156);
        expect(addr).toBeNull();
    });
});

describe("orAddressFromString whitespace", () => {
    it("should allow a space after a delimiter before a label", () => {
        const addr = orAddressFromString("G=Andy; S=Wharol; C=US");
        expect(addr?.built_in_standard_attributes.personal_name?.given_name).toBe("Andy");
        expect(addr?.built_in_standard_attributes.personal_name?.surname).toBe("Wharol");
    });

    it("should trim leading and trailing spaces on the whole string", () => {
        const addr = orAddressFromString("  S=Rose;C=US  ");
        expect(addr?.built_in_standard_attributes.personal_name?.surname).toBe("Rose");
    });

    it("should not treat a space before equals as the G keyword", () => {
        expect(orAddressFromString("G =John;C=US")).toBeNull();
    });

    it("should keep interior spaces in values", () => {
        const addr = orAddressFromString("O=a bank ltd;C=US");
        expect(addr?.built_in_standard_attributes.organization_name).toBe("a bank ltd");
    });
});

describe("orAddressFromString empty and malformed", () => {
    it.each([
        "",
        "/",
        "///",
        ";;;",
        "   ",
    ])("should reject %j", (s) => {
        expect(orAddressFromString(s)).toBeNull();
        expect(orAddressFromString(s, rfc2156)).toBeNull();
    });

    it("should reject a zero-length label", () => {
        expect(orAddressFromString("=value;C=US")).toBeNull();
        expect(orAddressFromString("/=US/", rfc2156)).toBeNull();
    });

    it("should reject a zero-length value", () => {
        expect(orAddressFromString("G=;S=Smith;C=US")).toBeNull();
        expect(orAddressFromString("/G=/S=Smith/C=US/", rfc2156)).toBeNull();
    });

    it("should reject a component with no equals", () => {
        expect(orAddressFromString("/G=John/Smith/C=US/", rfc2156)).toBeNull();
    });

    it("should reject a trailing $ in RFC 2156", () => {
        expect(orAddressFromString("/O=a$", rfc2156)).toBeNull();
    });

    it("should reject a malformed PN", () => {
        expect(orAddressFromString("/PN=/C=US/", rfc2156)).toBeNull();
        expect(orAddressFromString("/PN=Rose./C=US/", rfc2156)).toBeNull();
        expect(orAddressFromString("/PN=..Rose/C=US/", rfc2156)).toBeNull();
        expect(orAddressFromString("/PN=Marshall.Rosé/C=US/", rfc2156)).toBeNull();
    });

    it("should parse J.Smith as initials plus surname", () => {
        const addr = orAddressFromString("/PN=J.Smith/C=US/", rfc2156);
        expect(addr?.built_in_standard_attributes.personal_name?.given_name)
            .toBeUndefined();
        expect(addr?.built_in_standard_attributes.personal_name?.initials).toBe("J");
        expect(addr?.built_in_standard_attributes.personal_name?.surname).toBe("Smith");
    });

    it("should reject PD-ADDRESS with more than six lines", () => {
        expect(orAddressFromString(
            "/PD-ADDRESS=a|b|c|d|e|f|g/PD-C=GB/",
            rfc2156,
        )).toBeNull();
    });

    it("should reject an invalid country", () => {
        expect(orAddressFromString("C=USA")).toBeNull();
    });

    it("should reject a non-numeric UA-ID", () => {
        expect(orAddressFromString("/UA-ID=abc/C=US/", rfc2156)).toBeNull();
    });

    it("should reject an unknown T-TY", () => {
        expect(orAddressFromString("/T-TY=modem/C=US/", rfc2156)).toBeNull();
    });

    it("should reject an unknown keyword", () => {
        expect(orAddressFromString("FOO=bar;C=US")).toBeNull();
    });

    it("should reject a duplicate singleton keyword", () => {
        expect(orAddressFromString("/C=US/C=GB/", rfc2156)).toBeNull();
    });
});
