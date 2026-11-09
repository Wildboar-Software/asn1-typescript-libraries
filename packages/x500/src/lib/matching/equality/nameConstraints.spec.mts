import { ASN1Construction, ASN1TagClass, BERElement, External, ObjectIdentifier } from "@wildboar/asn1";
import { DER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { namesWithinNameConstraints } from "./nameConstraints.mjs";
import { GeneralSubtree } from "../../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import { NameConstraintsSyntax } from "../../modules/CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import type { GeneralName } from "../../modules/CertificateExtensions/GeneralName.ta.mjs";

describe("name-constraint failure handling (H7)", () => {
    it("checks IPv6 address masks", () => {
        const prefix = new Uint8Array(32);
        prefix.set([0x20, 0x01, 0x0d, 0xb8]);
        prefix.fill(0xff, 16, 20);
        const inside = new Uint8Array(16);
        inside.set([0x20, 0x01, 0x0d, 0xb8]);
        const outside = inside.slice();
        outside[3] = 0xb9;
        const constraints = new NameConstraintsSyntax([new GeneralSubtree({ iPAddress: prefix })]);
        expect(namesWithinNameConstraints([{ iPAddress: inside }], constraints)).toBe(true);
        expect(namesWithinNameConstraints([{ iPAddress: outside }], constraints)).toBe(false);
    });

    it("keeps SRVName OTHER-NAME constraints separate from other OTHER-NAME types", () => {
        const srv = ObjectIdentifier.fromString("1.3.6.1.5.5.7.8.7");
        const other = ObjectIdentifier.fromString("1.2.3.4");
        const makeName = (type: ObjectIdentifier, text: string): GeneralName => ({
            otherName: new External(
                type,
                undefined,
                undefined,
                _encodeUTF8String(text, DER)
            ),
        });
        const constraints = new NameConstraintsSyntax([new GeneralSubtree(makeName(srv, "_mail.example.com"))]);
        expect(namesWithinNameConstraints([makeName(srv, "_mail.a.example.com")], constraints)).toBe(true);
        expect(namesWithinNameConstraints([makeName(srv, "_ntp.example.com")], constraints)).toBe(false);
        expect(namesWithinNameConstraints([makeName(other, "unconstrained")], constraints)).toBe(true);
        const unsupported = new NameConstraintsSyntax(undefined, [new GeneralSubtree(makeName(other, "constraint"))]);
        expect(namesWithinNameConstraints([makeName(other, "different")], unsupported)).toBe(false);
    });

    it("fails closed on unknown constrained name forms", () => {
        const unknown = new BERElement(ASN1TagClass.context, ASN1Construction.primitive, 9, new Uint8Array([1]));
        const constraints = new NameConstraintsSyntax(undefined, [new GeneralSubtree(unknown)]);
        expect(namesWithinNameConstraints([{ dNSName: "example.com" }], constraints)).toBe(false);
    });

    it("fails closed on invalid constrained URI names and bases", () => {
        const excluded = new NameConstraintsSyntax(undefined, [new GeneralSubtree({ uniformResourceIdentifier: "example.com" })]);
        for (const uri of ["not a URI", "https://192.0.2.1/", "https://[::1]/"]) {
            expect(namesWithinNameConstraints([{ uniformResourceIdentifier: uri }], excluded)).toBe(false);
        }
        const invalidBase = new NameConstraintsSyntax(undefined, [new GeneralSubtree({ uniformResourceIdentifier: "example.com/path" })]);
        expect(namesWithinNameConstraints([{ uniformResourceIdentifier: "https://other.net/" }], invalidBase)).toBe(false);
    });

    it("interprets URI hosts as exact hosts or strict subdomains", () => {
        const exact = new NameConstraintsSyntax([new GeneralSubtree({ uniformResourceIdentifier: "example.com" })]);
        const domain = new NameConstraintsSyntax([new GeneralSubtree({ uniformResourceIdentifier: ".example.com" })]);
        expect(namesWithinNameConstraints([{ uniformResourceIdentifier: "https://example.com/path" }], exact)).toBe(true);
        expect(namesWithinNameConstraints([{ uniformResourceIdentifier: "https://sub.example.com/" }], exact)).toBe(false);
        expect(namesWithinNameConstraints([{ uniformResourceIdentifier: "https://example.com/" }], domain)).toBe(false);
        expect(namesWithinNameConstraints([{ uniformResourceIdentifier: "https://sub.example.com/" }], domain)).toBe(true);
    });

    it("reuses per-form subtrees for every name in one call", () => {
        const constraints = new NameConstraintsSyntax(
            [
                new GeneralSubtree({ dNSName: "example.com" }),
                new GeneralSubtree({ uniformResourceIdentifier: ".example.com" }),
            ],
            [ new GeneralSubtree({ dNSName: "blocked.example.com" }) ],
        );
        expect(namesWithinNameConstraints([
            { dNSName: "good.example.com" },
            { uniformResourceIdentifier: "https://a.example.com/x" },
            { rfc822Name: "alice@other.net" },
        ], constraints)).toBe(true);
        expect(namesWithinNameConstraints([
            { dNSName: "good.example.com" },
            { dNSName: "blocked.example.com" },
            { rfc822Name: "alice@other.net" },
        ], constraints)).toBe(false);
        expect(namesWithinNameConstraints([
            { uniformResourceIdentifier: "https://a.example.com/x" },
            { uniformResourceIdentifier: "https://example.com/x" },
        ], constraints)).toBe(false);
        expect(namesWithinNameConstraints([], constraints)).toBe(true);
    });

    it("applies a cached URI base to each name's own distance", () => {
        const constraints = new NameConstraintsSyntax([
            new GeneralSubtree({ uniformResourceIdentifier: ".example.com" }, 2),
        ], [
            new GeneralSubtree({ uniformResourceIdentifier: "blocked.example.com" }),
        ]);
        expect(namesWithinNameConstraints([
            { uniformResourceIdentifier: "https://a.b.example.com/" },
            { uniformResourceIdentifier: "https://c.d.example.com/path" },
        ], constraints)).toBe(true);
        expect(namesWithinNameConstraints([
            { uniformResourceIdentifier: "https://a.b.example.com/" },
            { uniformResourceIdentifier: "https://a.example.com/" },
        ], constraints)).toBe(false);
        expect(namesWithinNameConstraints([
            { uniformResourceIdentifier: "https://ok.example.com/" },
            { uniformResourceIdentifier: "https://blocked.example.com/" },
        ], new NameConstraintsSyntax(
            [ new GeneralSubtree({ uniformResourceIdentifier: ".example.com" }) ],
            [ new GeneralSubtree({ uniformResourceIdentifier: "blocked.example.com" }) ],
        ))).toBe(false);
    });

    it("accepts a URI that matches an earlier base when a later base is invalid", () => {
        const constraints = new NameConstraintsSyntax([
            new GeneralSubtree({ uniformResourceIdentifier: "example.com" }),
            new GeneralSubtree({ uniformResourceIdentifier: "has space" }),
        ]);
        const eitherHost = new NameConstraintsSyntax([
            new GeneralSubtree({ uniformResourceIdentifier: "other.net" }),
            new GeneralSubtree({ uniformResourceIdentifier: "example.com" }),
        ]);
        expect(namesWithinNameConstraints([
            { uniformResourceIdentifier: "https://example.com/a" },
        ], eitherHost)).toBe(true);
        expect(namesWithinNameConstraints([
            { uniformResourceIdentifier: "https://example.com/a" },
            { uniformResourceIdentifier: "https://example.com/b" },
        ], constraints)).toBe(true);
        const invalidFirst = new NameConstraintsSyntax([
            new GeneralSubtree({ uniformResourceIdentifier: "has space" }),
            new GeneralSubtree({ uniformResourceIdentifier: "example.com" }),
        ]);
        expect(namesWithinNameConstraints([
            { uniformResourceIdentifier: "https://example.com/a" },
        ], invalidFirst)).toBe(false);
    });

    it("fails closed when one base or one name has no name form", () => {
        const unknown = new BERElement(ASN1TagClass.context, ASN1Construction.primitive, 9, new Uint8Array([1]));
        const constraints = new NameConstraintsSyntax([
            new GeneralSubtree({ dNSName: "example.com" }),
            new GeneralSubtree(unknown),
        ]);
        expect(namesWithinNameConstraints([{ dNSName: "a.example.com" }], constraints)).toBe(false);
        expect(namesWithinNameConstraints([], constraints)).toBe(false);
        const dnsOnly = new NameConstraintsSyntax([new GeneralSubtree({ dNSName: "example.com" })]);
        expect(namesWithinNameConstraints([
            { dNSName: "a.example.com" },
            unknown,
        ], dnsOnly)).toBe(false);
    });
});
