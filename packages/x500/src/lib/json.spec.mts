import {
    ASN1Construction,
    ASN1TagClass,
    ASN1UniversalType,
    DERElement,
    ObjectIdentifier,
    TRUE_BIT,
    type BIT_STRING,
} from "@wildboar/asn1";
import { AttributeTypeAndValue } from "@wildboar/dn";
import { DSS_Parms } from "./modules/AlgorithmObjectIdentifiers/DSS-Parms.ta.mjs";
import { DualStringSyntax } from "./modules/AttributeCertificateDefinitions/DualStringSyntax.ta.mjs";
import { NoticeReference } from "./modules/AttributeCertificateDefinitions/NoticeReference.ta.mjs";
import { UserNotice } from "./modules/AttributeCertificateDefinitions/UserNotice.ta.mjs";
import {
    authenticationLevelToJSON,
    authenticationLevelToString,
    type AuthenticationLevel,
} from "./modules/BasicAccessControl/AuthenticationLevel.ta.mjs";
import { AuthenticationLevel_basicLevels } from "./modules/BasicAccessControl/AuthenticationLevel-basicLevels.ta.mjs";
import { AuthenticationLevel_basicLevels_level_strong } from "./modules/BasicAccessControl/AuthenticationLevel-basicLevels-level.ta.mjs";
import {
    denyRead,
    grantAdd,
    grantRead,
    grantsAndDenialsToJSON,
    grantsAndDenialsToString,
} from "./modules/BasicAccessControl/GrantsAndDenials.ta.mjs";
import { MaxValueCount } from "./modules/BasicAccessControl/MaxValueCount.ta.mjs";
import { ProtectedItems } from "./modules/BasicAccessControl/ProtectedItems.ta.mjs";
import { RestrictedValue } from "./modules/BasicAccessControl/RestrictedValue.ta.mjs";
import { ContextAssertion } from "./modules/InformationFramework/ContextAssertion.ta.mjs";
import { BasicConstraintsSyntax } from "./modules/CertificateExtensions/BasicConstraintsSyntax.ta.mjs";
import { CertificateGroupNumberRange } from "./modules/CertificateExtensions/CertificateGroupNumberRange.ta.mjs";
import { NumberRange } from "./modules/CertificateExtensions/NumberRange.ta.mjs";
import { PolicyConstraintsSyntax } from "./modules/CertificateExtensions/PolicyConstraintsSyntax.ta.mjs";
import { PolicyMappingsSyntax_Item } from "./modules/CertificateExtensions/PolicyMappingsSyntax-Item.ta.mjs";
import { PrivateKeyUsagePeriod } from "./modules/CertificateExtensions/PrivateKeyUsagePeriod.ta.mjs";
import { UpdateWindow } from "./modules/DirectoryShadowAbstractService/UpdateWindow.ta.mjs";
import { DayTime } from "./modules/SelectedAttributeTypes/DayTime.ta.mjs";
import { DayTimeBand } from "./modules/SelectedAttributeTypes/DayTimeBand.ta.mjs";
import { FacsimileTelephoneNumber } from "./modules/SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import { NameAndOptionalUID } from "./modules/SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import { ProtocolInformation } from "./modules/SelectedAttributeTypes/ProtocolInformation.ta.mjs";
import { TelexNumber } from "./modules/SelectedAttributeTypes/TelexNumber.ta.mjs";
import { TimeAssertion_between } from "./modules/SelectedAttributeTypes/TimeAssertion-between.ta.mjs";
import { TimeSpecification_time_absolute } from "./modules/SelectedAttributeTypes/TimeSpecification-time-absolute.ta.mjs";
import { boundToIntegerBytes } from "./utils/rangeAlgebra.mjs";

const commonName = ObjectIdentifier.fromString("2.5.4.3");
const anyPolicy = ObjectIdentifier.fromString("2.5.29.32.0");
const jan = new Date("2020-01-01T00:00:00.000Z");
const dec = new Date("2020-12-31T00:00:00.000Z");

function n(value: number | bigint): Uint8Array {
    const bytes = boundToIntegerBytes(BigInt(value));
    if (bytes === undefined) {
        throw new Error("expected INTEGER bytes");
    }
    return bytes;
}

function utf8Element(s: string): DERElement {
    const el = new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.utf8String,
    );
    el.utf8String = s;
    return el;
}

describe("DayTime toString / toJSON", () => {
    it("prints ISO 8601 TIME-OF-DAY and omits default minute/second in JSON", () => {
        expect(new DayTime(9).toString()).toBe("09:00:00");
        expect(new DayTime(14, 30, 5).toString()).toBe("14:30:05");
        expect(new DayTime(9).toJSON()).toEqual({ hour: 9 });
        expect(new DayTime(14, 30, 5).toJSON()).toEqual({
            hour: 14,
            minute: 30,
            second: 5,
        });
    });
});

describe("DayTimeBand toString / toJSON", () => {
    it("prints an ISO 8601 time-of-day interval using DEFAULTs", () => {
        expect(new DayTimeBand().toString()).toBe("00:00:00/23:59:59");
        expect(new DayTimeBand(new DayTime(9), new DayTime(17)).toString())
            .toBe("09:00:00/17:00:00");
        expect(new DayTimeBand().toJSON()).toEqual({});
        expect(new DayTimeBand(new DayTime(9)).toJSON()).toEqual({
            startDayTime: { hour: 9 },
        });
    });
});

describe("PrivateKeyUsagePeriod toString / toJSON", () => {
    it("prints an ISO 8601 interval with empty missing bounds", () => {
        expect(new PrivateKeyUsagePeriod(jan, dec).toString()).toBe(
            "2020-01-01T00:00:00.000Z/2020-12-31T00:00:00.000Z",
        );
        expect(new PrivateKeyUsagePeriod(jan).toString()).toBe(
            "2020-01-01T00:00:00.000Z/",
        );
        expect(new PrivateKeyUsagePeriod(undefined, dec).toJSON()).toEqual({
            notAfter: "2020-12-31T00:00:00.000Z",
        });
    });
});

describe("TimeSpecification_time_absolute toString / toJSON", () => {
    it("prints an ISO 8601 interval", () => {
        expect(new TimeSpecification_time_absolute(jan, dec).toString()).toBe(
            "2020-01-01T00:00:00.000Z/2020-12-31T00:00:00.000Z",
        );
        expect(new TimeSpecification_time_absolute(jan).toJSON()).toEqual({
            startTime: "2020-01-01T00:00:00.000Z",
        });
    });
});

describe("TimeAssertion_between toString / toJSON", () => {
    it("prints an ISO 8601 interval and tags entirely TRUE", () => {
        expect(new TimeAssertion_between(jan, dec).toString()).toBe(
            "2020-01-01T00:00:00.000Z/2020-12-31T00:00:00.000Z",
        );
        expect(new TimeAssertion_between(jan, dec, true).toString()).toBe(
            "2020-01-01T00:00:00.000Z/2020-12-31T00:00:00.000Z entirely",
        );
        expect(new TimeAssertion_between(jan, undefined, true).toJSON()).toEqual({
            startTime: "2020-01-01T00:00:00.000Z",
            entirely: true,
        });
    });
});

describe("UpdateWindow toString / toJSON", () => {
    it("prints an ISO 8601 interval of start and stop", () => {
        expect(new UpdateWindow(jan, dec).toString()).toBe(
            "2020-01-01T00:00:00.000Z/2020-12-31T00:00:00.000Z",
        );
        expect(new UpdateWindow(jan, dec).toJSON()).toEqual({
            start: "2020-01-01T00:00:00.000Z",
            stop: "2020-12-31T00:00:00.000Z",
        });
    });
});

describe("NumberRange toString / toJSON", () => {
    it("prints a half-open interval and optional modulus", () => {
        expect(new NumberRange(n(1), n(10)).toString()).toBe("[1,10)");
        expect(new NumberRange(n(0), n(2), n(5)).toString()).toBe("[0,2) mod 5");
        expect(new NumberRange(undefined, n(10)).toString()).toBe("[,10)");
        expect(new NumberRange(n(1), n(10), n(5)).toJSON()).toEqual({
            startingNumber: 1,
            endingNumber: 10,
            modulus: 5,
        });
    });
});

describe("CertificateGroupNumberRange toString / toJSON", () => {
    it("prints a closed interval", () => {
        expect(new CertificateGroupNumberRange(1, 10).toString()).toBe("[1,10]");
        expect(new CertificateGroupNumberRange(1n, 10n).toJSON()).toEqual({
            startingNumber: "1",
            endingNumber: "10",
        });
    });
});

describe("TelexNumber toString / toJSON", () => {
    it("prints RFC 4517 $ separated fields", () => {
        const value = new TelexNumber("12345", "US", "ACME");
        expect(value.toString()).toBe("12345$US$ACME");
        expect(value.toJSON()).toEqual({
            telexNumber: "12345",
            countryCode: "US",
            answerback: "ACME",
        });
    });
});

describe("FacsimileTelephoneNumber toString / toJSON", () => {
    it("prints RFC 4517 telephone number and fax parameters", () => {
        expect(new FacsimileTelephoneNumber("+17035551212").toString())
            .toBe("+17035551212");
        const parameters = new Uint8ClampedArray(31);
        parameters[8] = 1;
        parameters[9] = 1;
        const value = new FacsimileTelephoneNumber("+17035551212", parameters);
        expect(value.toString()).toBe("+17035551212$twoDimensional$fineResolution");
        expect(value.toJSON().telephoneNumber).toBe("+17035551212");
        expect(value.toJSON().parameters?.length).toBe(31);
    });
});

describe("NameAndOptionalUID toString / toJSON", () => {
    it("prints the DN and an optional RFC 4517 bitstring uid", () => {
        const dn = [[ new AttributeTypeAndValue(commonName, utf8Element("Alice")) ]];
        expect(new NameAndOptionalUID(dn).toString()).toBe("cn=Alice");
        const uid = new Uint8ClampedArray([ 1, 0, 1 ]);
        expect(new NameAndOptionalUID(dn, uid).toString()).toBe("cn=Alice#'101'B");
        expect(new NameAndOptionalUID(dn).toJSON()).toEqual({
            dn: [[{ type: "2.5.4.3", value: "#0c05416c696365" }]],
        });
    });
});

describe("ProtocolInformation toString / toJSON", () => {
    it("prints profile OID $ hexadecimal NSAP", () => {
        const nAddress = Uint8Array.from([ 0xab, 0xcd ]);
        const profile = ObjectIdentifier.fromString("1.2.3");
        expect(new ProtocolInformation(nAddress, [ profile ]).toString())
            .toBe("1.2.3$abcd");
        expect(new ProtocolInformation(nAddress, []).toJSON()).toEqual({
            nAddress: "abcd",
            profiles: [],
        });
    });
});

describe("DualStringSyntax toJSON", () => {
    it("encodes operation and object as character strings", () => {
        const value = new DualStringSyntax(
            { uTF8String: "sign" },
            { printableString: "check" },
        );
        expect(value.toJSON()).toEqual({
            operation: "sign",
            object: "check",
        });
    });
});

describe("BasicConstraintsSyntax toString / toJSON", () => {
    it("omits default cA FALSE", () => {
        expect(new BasicConstraintsSyntax().toString()).toBe("{}");
        expect(new BasicConstraintsSyntax(true, 0).toString())
            .toBe("{ cA TRUE, pathLenConstraint 0 }");
        expect(new BasicConstraintsSyntax(true, 0).toJSON()).toEqual({
            cA: true,
            pathLenConstraint: 0,
        });
    });
});

describe("PolicyConstraintsSyntax toString / toJSON", () => {
    it("prints present SkipCerts components", () => {
        const value = new PolicyConstraintsSyntax(0, 1);
        expect(value.toString()).toBe(
            "{ requireExplicitPolicy 0, inhibitPolicyMapping 1 }",
        );
        expect(value.toJSON()).toEqual({
            requireExplicitPolicy: 0,
            inhibitPolicyMapping: 1,
        });
    });
});

describe("PolicyMappingsSyntax_Item toString / toJSON", () => {
    it("prints issuer->subject object identifiers", () => {
        const value = new PolicyMappingsSyntax_Item(commonName, anyPolicy);
        expect(value.toString()).toBe("2.5.4.3->2.5.29.32.0");
        expect(value.toJSON()).toEqual({
            issuerDomainPolicy: "2.5.4.3",
            subjectDomainPolicy: "2.5.29.32.0",
        });
    });
});

describe("DSS_Parms toString / toJSON", () => {
    it("prints p, q, and g", () => {
        const value = new DSS_Parms(1, 2, 3);
        expect(value.toString()).toBe("{ p 1, q 2, g 3 }");
        expect(value.toJSON()).toEqual({ p: 1, q: 2, g: 3 });
    });
});

describe("NoticeReference / UserNotice toJSON", () => {
    it("encodes organization, notice numbers, and explicit text", () => {
        const notice = new NoticeReference({ utf8String: "Acme" }, [ 1, 2 ]);
        expect(notice.toJSON()).toEqual({
            organization: "Acme",
            noticeNumbers: [ 1, 2 ],
        });
        const user = new UserNotice(notice, { utf8String: "See 1" });
        expect(user.toJSON().explicitText).toBe("See 1");
        expect(user.toJSON().noticeRef).toEqual(notice.toJSON());
    });
});

describe("AuthenticationLevel_basicLevels toString / toJSON", () => {
    it("prints known level identifiers and omits default signed FALSE", () => {
        const value = new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_strong,
            3,
            true,
        );
        expect(value.toString()).toBe(
            "{ level strong, localQualifier 3, signed TRUE }",
        );
        expect(value.toJSON()).toEqual({
            level: "strong",
            localQualifier: 3,
            signed: true,
        });
        expect(new AuthenticationLevel_basicLevels(
            AuthenticationLevel_basicLevels_level_strong,
        ).toJSON()).toEqual({ level: "strong" });
    });
});

function permissions (...bits: number[]): BIT_STRING {
    const result = new Uint8ClampedArray(Math.max(26, ...bits.map((bit) => bit + 1)));
    for (const bit of bits) {
        result[bit] = TRUE_BIT;
    }
    return result;
}

describe("GrantsAndDenials toString / toJSON", () => {
    it("prints named bits that are set, in bit-position order", () => {
        const bits = permissions(grantAdd, grantRead, denyRead);
        expect(grantsAndDenialsToString(bits)).toBe(
            "{ grantAdd, grantRead, denyRead }",
        );
        expect(grantsAndDenialsToJSON(bits)).toEqual([
            "grantAdd",
            "grantRead",
            "denyRead",
        ]);
    });

    it("prints an empty bit string as {} and unnamed bits as integers", () => {
        expect(grantsAndDenialsToString(new Uint8ClampedArray(0))).toBe("{}");
        expect(grantsAndDenialsToJSON(new Uint8ClampedArray(0))).toEqual([]);
        const unnamed = permissions(26);
        expect(grantsAndDenialsToString(unnamed)).toBe("{ 26 }");
        expect(grantsAndDenialsToJSON(unnamed)).toEqual([ 26 ]);
    });
});

describe("AuthenticationLevel CHOICE toString / toJSON", () => {
    it("prefixes basicLevels with the CHOICE identifier", () => {
        const value: AuthenticationLevel = {
            basicLevels: new AuthenticationLevel_basicLevels(
                AuthenticationLevel_basicLevels_level_strong,
                3,
                true,
            ),
        };
        expect(authenticationLevelToString(value)).toBe(
            "basicLevels:{ level strong, localQualifier 3, signed TRUE }",
        );
        expect(authenticationLevelToJSON(value)).toEqual({
            basicLevels: {
                level: "strong",
                localQualifier: 3,
                signed: true,
            },
        });
    });
});

describe("ProtectedItems toString / toJSON", () => {
    it("prints present axes and quotes attribute values", () => {
        const description = ObjectIdentifier.fromString("2.5.4.13");
        const person = ObjectIdentifier.fromParts([ 2, 5, 6, 6 ]);
        const languageContext = ObjectIdentifier.fromString("1.2.3.4");
        const items = Object.assign(new ProtectedItems(), {
            entry: null,
            attributeType: [ commonName ],
            attributeValue: [
                new AttributeTypeAndValue(commonName, utf8Element("Alice")),
            ],
            maxValueCount: [ new MaxValueCount(commonName, 2) ],
            restrictedBy: [ new RestrictedValue(commonName, description) ],
            contexts: [ new ContextAssertion(languageContext, [ utf8Element("en") ]) ],
            classes: { item: person },
            _unrecognizedExtensionsList: [],
        });
        expect(items.toString()).toBe(
            "{ entry NULL, attributeType { 2.5.4.3 },"
            + " attributeValue { \"cn=Alice\" },"
            + " maxValueCount { { type 2.5.4.3, maxCount 2 } },"
            + " restrictedBy { { type 2.5.4.3, valuesIn 2.5.4.13 } },"
            + " contexts { { contextType 1.2.3.4, contextValues { \"en\" } } },"
            + " classes item:2.5.6.6 }",
        );
        expect(items.toJSON()).toEqual({
            entry: null,
            attributeType: [ "2.5.4.3" ],
            attributeValue: [{ type: "2.5.4.3", value: "#0c05416c696365" }],
            maxValueCount: [{ type: "2.5.4.3", maxCount: 2 }],
            restrictedBy: [{ type: "2.5.4.3", valuesIn: "2.5.4.13" }],
            contexts: [{ contextType: "1.2.3.4", contextValues: [ "en" ] }],
            classes: { item: "2.5.6.6" },
        });
    });

    it("prints an empty ProtectedItems as {}", () => {
        expect(new ProtectedItems().toString()).toBe("{}");
        expect(new ProtectedItems().toJSON()).toEqual({});
    });
});
