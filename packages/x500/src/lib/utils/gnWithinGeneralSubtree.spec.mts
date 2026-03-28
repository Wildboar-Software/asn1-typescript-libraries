import { evaluateSRVNameConstraints, gnWithinGeneralSubtree } from "./gnWithinGeneralSubtree.mjs";
import type { GeneralName } from "../modules/CertificateExtensions/GeneralName.ta.mjs";
import { GeneralSubtree } from "../modules/CertificateExtensions/GeneralSubtree.ta.mjs";
import { ObjectIdentifier } from "@wildboar/asn1";
import { commonName } from "../modules/SelectedAttributeTypes/commonName.oa.mjs";
import { AttributeTypeAndValue } from "../modules/InformationFramework/AttributeTypeAndValue.ta.mjs";
import { DER } from "@wildboar/asn1/functional";

//   Name Constraints
//   SRVName restriction   Matching SRVName      non-matching SRVName
//   ===================   ================      ====================
//   example.com           _mail.example.com     _mail.1example.com
//                         _ntp.example.com
//                         _mail.1.example.com

//   _mail                 _mail.example.com     _ntp.example.com
//                         _mail.1example.com

//   _mail.example.com     _mail.example.com     _mail.1example.com
//                         _mail.1.example.com   _ntp.example.com

describe("evaluateSRVNameConstraints", () => {
    it("behaves according to all examples given in IETF RFC 4985", () => {
        const restriction1 = "example.com";
        const restriction2 = "_mail";
        const restriction3 = "_mail.example.com";

        expect(evaluateSRVNameConstraints(restriction1, "_mail.example.com")).toBe(true);
        expect(evaluateSRVNameConstraints(restriction1, "_ntp.example.com")).toBe(true);
        expect(evaluateSRVNameConstraints(restriction1, "_mail.1.example.com")).toBe(true);
        expect(evaluateSRVNameConstraints(restriction1, "_mail.1example.com")).toBe(false);

        expect(evaluateSRVNameConstraints(restriction2, "_mail.example.com")).toBe(true);
        expect(evaluateSRVNameConstraints(restriction2, "_mail.1example.com")).toBe(true);
        expect(evaluateSRVNameConstraints(restriction2, "_ntp.example.com")).toBe(false);

        expect(evaluateSRVNameConstraints(restriction3, "_mail.example.com")).toBe(true);
        expect(evaluateSRVNameConstraints(restriction3, "_mail.1.example.com")).toBe(true);
        expect(evaluateSRVNameConstraints(restriction3, "_mail.1example.com")).toBe(false);
        expect(evaluateSRVNameConstraints(restriction3, "_ntp.example.com")).toBe(false);
    });

    it("normalizes domains to ASCII for comparison", () => {
        const a = "_mail.點看.com";
        const b = "_mail.xn--c1yn36f.com";
        expect(evaluateSRVNameConstraints(a, b)).toBe(true);
        expect(evaluateSRVNameConstraints(b, a)).toBe(true);
    });

    it("normalizes domains to lowercase for comparison", () => {
        const a = "_mail.lübinger.com";
        const b = "_mail.Lübinger.com";
        expect(evaluateSRVNameConstraints(a, b)).toBe(true);
        expect(evaluateSRVNameConstraints(b, a)).toBe(true);
    });
});

describe("gnWithinGeneralSubtree", () => {
    it("evaluates dNSName general names within a dNSName subtree", () => {
        const asserted1a: GeneralName = {
            dNSName: "www.example.com",
        };
        const asserted1b: GeneralName = {
            dNSName: "com",
        };
        const asserted1c: GeneralName = {
            dNSName: "1example.com",
        };
        const asserted1d: GeneralName = {
            dNSName: "example.com",
        };
        const asserted1e: GeneralName = {
            dNSName: "a.b.c.d.example.com",
        };
        const subtree1 = new GeneralSubtree(
            {
                dNSName: "example.com",
            },
            1,
            3,
        );
        expect(gnWithinGeneralSubtree(asserted1a, subtree1)).toBe(true);
        expect(gnWithinGeneralSubtree(asserted1b, subtree1)).toBe(false); // Too short
        expect(gnWithinGeneralSubtree(asserted1c, subtree1)).toBe(false); // Outside subtree
        expect(gnWithinGeneralSubtree(asserted1d, subtree1)).toBe(false); // Minimum not met
        expect(gnWithinGeneralSubtree(asserted1e, subtree1)).toBe(false); // Maximum exceeded
    });

    it("evaluates dNSName general names after normalizing to ASCII", () => {
        const a = "點看.com";
        const b = "xn--c1yn36f.com";
        const asserted1: GeneralName = {
            dNSName: a,
        };
        const subtree1 = new GeneralSubtree(
            {
                dNSName: b,
            },
        );
        const asserted2: GeneralName = {
            dNSName: b,
        };
        const subtree2 = new GeneralSubtree(
            {
                dNSName: a,
            },
        );
        expect(gnWithinGeneralSubtree(asserted1, subtree1)).toBe(true);
        expect(gnWithinGeneralSubtree(asserted2, subtree2)).toBe(true);
    });

    it("evaluates dNSName general names after normalizing to lowercase", () => {
        const a = "lübinger.com";
        const b = "Lübinger.com";
        const asserted1: GeneralName = {
            dNSName: a,
        };
        const subtree1 = new GeneralSubtree(
            {
                dNSName: b,
            },
        );
        const asserted2: GeneralName = {
            dNSName: b,
        };
        const subtree2 = new GeneralSubtree(
            {
                dNSName: a,
            },
        );
        expect(gnWithinGeneralSubtree(asserted1, subtree1)).toBe(true);
        expect(gnWithinGeneralSubtree(asserted2, subtree2)).toBe(true);
    });

    it("evaluates directoryName general names within a directoryName subtree", () => {
        const asserted1a: GeneralName = {
            directoryName: {
                rdnSequence: [
                    [
                        new AttributeTypeAndValue(
                            ObjectIdentifier.fromParts([2, 5, 4, 3]),
                            commonName.encoderFor["&Type"]!({
                                printableString: "foo",
                            }, DER),
                        ),
                    ],
                    [
                        new AttributeTypeAndValue(
                            ObjectIdentifier.fromParts([2, 5, 4, 3]),
                            commonName.encoderFor["&Type"]!({
                                printableString: "bar",
                            }, DER),
                        ),
                    ],
                ],
            },
        };
        const asserted1b: GeneralName = {
            directoryName: {
                rdnSequence: [
                    [
                        new AttributeTypeAndValue(
                            ObjectIdentifier.fromParts([2, 5, 4, 3]),
                            commonName.encoderFor["&Type"]!({
                                printableString: "foo",
                            }, DER),
                        ),
                    ],
                ],
            },
        };
        const asserted1c: GeneralName = {
            directoryName: {
                rdnSequence: [
                    [
                        new AttributeTypeAndValue(
                            ObjectIdentifier.fromParts([2, 5, 4, 3]),
                            commonName.encoderFor["&Type"]!({
                                printableString: "foo",
                            }, DER),
                        ),
                    ],
                    [
                        new AttributeTypeAndValue(
                            ObjectIdentifier.fromParts([2, 5, 4, 3]),
                            commonName.encoderFor["&Type"]!({
                                printableString: "bar",
                            }, DER),
                        ),
                    ],
                    [
                        new AttributeTypeAndValue(
                            ObjectIdentifier.fromParts([2, 5, 4, 3]),
                            commonName.encoderFor["&Type"]!({
                                printableString: "baz",
                            }, DER),
                        ),
                    ],
                    [
                        new AttributeTypeAndValue(
                            ObjectIdentifier.fromParts([2, 5, 4, 3]),
                            commonName.encoderFor["&Type"]!({
                                printableString: "quux",
                            }, DER),
                        ),
                    ],
                ],
            },
        };
        const asserted1d: GeneralName = {
            directoryName: {
                rdnSequence: [],
            },
        };
        const asserted1e: GeneralName = {
            directoryName: {
                rdnSequence: [
                    [
                        new AttributeTypeAndValue(
                            ObjectIdentifier.fromParts([2, 5, 4, 3]),
                            commonName.encoderFor["&Type"]!({
                                printableString: "zip",
                            }, DER),
                        ),
                    ],
                    [
                        new AttributeTypeAndValue(
                            ObjectIdentifier.fromParts([2, 5, 4, 3]),
                            commonName.encoderFor["&Type"]!({
                                printableString: "bar",
                            }, DER),
                        ),
                    ],
                ],
            },
        };
        const subtree1 = new GeneralSubtree(
            {
                directoryName: {
                    rdnSequence: [
                        [
                            new AttributeTypeAndValue(
                                ObjectIdentifier.fromParts([2, 5, 4, 3]),
                                commonName.encoderFor["&Type"]!({
                                    printableString: "foo",
                                }, DER),
                            ),
                        ],
                    ],
                },
            },
            1,
            2,
        );
        expect(gnWithinGeneralSubtree(asserted1a, subtree1)).toBe(true);
        expect(gnWithinGeneralSubtree(asserted1b, subtree1)).toBe(false); // Too short
        expect(gnWithinGeneralSubtree(asserted1c, subtree1)).toBe(false); // Too long
        expect(gnWithinGeneralSubtree(asserted1d, subtree1)).toBe(false); // Empty
        expect(gnWithinGeneralSubtree(asserted1e, subtree1)).toBe(false); // Not in subtree
    });

    it("evaluates registeredID general names within a registeredID subtree", () => {
        const asserted1a: GeneralName = {
            registeredID: ObjectIdentifier.fromString("1.2.3.4"),
        };
        const asserted1b: GeneralName = {
            registeredID: ObjectIdentifier.fromString("1.2.3.4.5"),
        };
        const asserted1c: GeneralName = {
            registeredID: ObjectIdentifier.fromString("1.2.3"),
        };
        const asserted1d: GeneralName = {
            registeredID: ObjectIdentifier.fromString("1.2.3.4.5.6.7.8"),
        };
        const asserted1e: GeneralName = {
            registeredID: ObjectIdentifier.fromString("2.2.3.4.5"),
        };
        const subtree1 = new GeneralSubtree(
            {
                registeredID: ObjectIdentifier.fromString("1.2.3.4"),
            },
            1,
            3,
        );
        expect(gnWithinGeneralSubtree(asserted1a, subtree1)).toBe(false); // Minimum not met
        expect(gnWithinGeneralSubtree(asserted1b, subtree1)).toBe(true);
        expect(gnWithinGeneralSubtree(asserted1c, subtree1)).toBe(false); // Not beneath subtree
        expect(gnWithinGeneralSubtree(asserted1d, subtree1)).toBe(false); // Maximum exceeded
        expect(gnWithinGeneralSubtree(asserted1e, subtree1)).toBe(false); // Totally outside subtree
    });
});
