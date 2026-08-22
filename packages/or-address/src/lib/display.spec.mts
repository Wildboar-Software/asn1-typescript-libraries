import { describe, expect, it } from "vitest";
import { orAddressFromString } from "./parse.mjs";
import {
    encodeTeletexString,
    formatTeletexAndOrPs,
} from "./display.mjs";
import { escapeRFC2156StdPrintable } from "./utils.mjs";
import { TeletexPersonalName } from "./modules/PkiPmiExternalDataTypes/TeletexPersonalName.ta.mjs";
import { UniversalPersonalName } from "./modules/PkiPmiExternalDataTypes/UniversalPersonalName.ta.mjs";
import { UniversalOrBMPString } from "./modules/PkiPmiExternalDataTypes/UniversalOrBMPString.ta.mjs";

const rfc2156 = { rfc: 2156 as const };

describe("ORAddress.toRFC2156String", () => {
    it("should round-trip a mnemonic std-or-address", () => {
        const input = "/G=Andy/S=Wharol/O=MMNY/ADMD=ATT/C=US/";
        const addr = orAddressFromString(input, rfc2156);
        expect(addr).not.toBeNull();
        expect(addr!.toRFC2156String()).toBe(input);
    });

    it("should display built-in standard attributes without extensions", () => {
        const addr = orAddressFromString(
            "/G=Jonathan/I=M/S=Wilbur/O=Wildboar Software/ADMD=123/C=US/",
            rfc2156,
        );
        expect(addr).not.toBeNull();
        expect(addr!.built_in_standard_attributes.toRFC2156String()).toBe(
            "/G=Jonathan/I=M/S=Wilbur/O=Wildboar Software/ADMD=123/C=US/",
        );
    });

    it("should dollar-quote a slash in a value", () => {
        const addr = orAddressFromString("/O=a$/b/C=US/", rfc2156);
        expect(addr).not.toBeNull();
        expect(addr!.toRFC2156String()).toContain("O=a$/b");
    });

    it("should dollar-quote equals in a value", () => {
        const addr = orAddressFromString("/O=a$=b/C=US/", rfc2156);
        expect(addr).not.toBeNull();
        expect(addr!.built_in_standard_attributes.organization_name).toBe("a=b");
        expect(addr!.toRFC2156String()).toContain("O=a$=b");
    });

    it("should dollar-quote a dollar sign in a printable value", () => {
        expect(escapeRFC2156StdPrintable("a$c")).toBe("a$$c");
    });

    it("should dollar-quote equals in a domain-defined attribute type", () => {
        const addr = orAddressFromString("/DD.a$=b=c/C=US/", rfc2156);
        expect(addr).not.toBeNull();
        expect(addr!.toRFC2156String()).toContain("DD.a$=b=c");
    });

    it("should display a structured postal address as PD-ADDRESS", () => {
        const addr = orAddressFromString(
            "/PD-ADDRESS=The Dome|The Square|Richmond|England/C=GB/",
            rfc2156,
        );
        expect(addr).not.toBeNull();
        expect(addr!.toRFC2156String())
            .toContain("PD-ADDRESS=The Dome|The Square|Richmond|England");
        expect(addr!.toRFC2156String()).not.toContain("PD-A1=");
    });

    it("should display an ISDN number as NET-NUM and NET-SUB", () => {
        const addr = orAddressFromString(
            "/NET-NUM=441234567890/NET-SUB=1234/C=GB/",
            rfc2156,
        );
        expect(addr).not.toBeNull();
        const displayed = addr!.toRFC2156String();
        expect(displayed).toContain("NET-NUM=441234567890");
        expect(displayed).toContain("NET-SUB=1234");
        expect(displayed).not.toContain("ISDN=");
    });

    it("should display a presentation address as NET-PSAP with quoted slashes", () => {
        const psap = '"1234"/"1234"/"1234"/URL+0001+https://example.com';
        const addr = orAddressFromString(
            `/NET-PSAP=${psap.replaceAll("/", "$/")}/C=US/`,
            rfc2156,
        );
        expect(addr).not.toBeNull();
        expect(addr!.toRFC2156String()).toContain(
            'NET-PSAP="1234"$/"1234"$/"1234"$/URL+0001+https:$/$/example.com',
        );
    });

    it("should reverse organizational units so the rightmost is most significant", () => {
        const addr = orAddressFromString("/OU=low/OU=high/O=org/C=US/", rfc2156);
        expect(addr).not.toBeNull();
        expect(addr!.built_in_standard_attributes.organizational_unit_names)
            .toEqual(["high", "low"]);
        expect(addr!.toRFC2156String()).toContain("/OU=low/OU=high/");
    });
});

describe("encodeTeletexString", () => {
    it("should emit non-control ASCII as itself", () => {
        expect(encodeTeletexString(Uint8Array.from([0x79, 0x65, 0x6e]))).toBe("yen");
    });

    it("should encode a yen octet as a three-digit brace sequence", () => {
        expect(encodeTeletexString(Uint8Array.from([0xa5]))).toBe("{165}");
    });

    it("should combine adjacent unprintable octets in one brace pair", () => {
        expect(encodeTeletexString(Uint8Array.from([12, 13]))).toBe("{012013}");
    });

    it("should pad a single-digit octet to three digits", () => {
        expect(encodeTeletexString(Uint8Array.from([7]))).toBe("{007}");
    });
});

describe("formatTeletexAndOrPs", () => {
    it("should emit printable-only values without a star", () => {
        expect(formatTeletexAndOrPs("yen", undefined)).toBe("yen");
    });

    it("should prefix a non-printable teletex-only value with a star", () => {
        expect(formatTeletexAndOrPs(undefined, Uint8Array.from([0xa5])))
            .toBe("*{165}");
    });
});

describe("TeletexPersonalName.toRFC2156String", () => {
    it("should use encoded-pn when every component is printable", () => {
        const name = new TeletexPersonalName(
            Uint8Array.from(Buffer.from("Rose")),
            Uint8Array.from(Buffer.from("Marshall")),
        );
        expect(name.toRFC2156String()).toBe("Marshall.Rose");
    });

    it("should display a yen octet in the surname as {165}", () => {
        const name = new TeletexPersonalName(Uint8Array.from([0xa5]));
        const displayed = name.toRFC2156String();
        expect(displayed).toContain("{165}");
        expect(displayed).toBe("S=*{165}");
    });
});

describe("UniversalPersonalName.toRFC2156String", () => {
    it("should convert unicode code points and use encoded-pn when printable", () => {
        const name = new UniversalPersonalName(
            new UniversalOrBMPString({ four_octets: "Rose" }),
            new UniversalOrBMPString({ four_octets: "Marshall" }),
        );
        expect(name.toRFC2156String()).toBe("Marshall.Rose");
    });

    it("should emit G and S pairs when the name is not PrintableString", () => {
        const name = new UniversalPersonalName(
            new UniversalOrBMPString({ four_octets: "Rosé" }),
        );
        expect(name.toRFC2156String()).toBe("S=Rosé");
    });
});
