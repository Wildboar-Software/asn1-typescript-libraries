import { ObjectIdentifier } from "@wildboar/asn1";
import { AlgorithmIdentifier } from "./AlgorithmIdentifier.ta.mjs";
import { AttCertIssuer } from "./AttCertIssuer.ta.mjs";
import { IssuerSerial } from "./IssuerSerial.ta.mjs";
import { ObjectDigestInfo } from "./ObjectDigestInfo.ta.mjs";
import { ObjectDigestInfo_digestedObjectType } from "./ObjectDigestInfo-digestedObjectType.ta.mjs";

const sha256 = ObjectIdentifier.fromString("2.16.840.1.101.3.4.2.1");

function issuer (name: string = "aa.example"): IssuerSerial {
    return new IssuerSerial([{ dNSName: name }], new Uint8Array([9]));
}

function digest (): ObjectDigestInfo {
    return new ObjectDigestInfo(
        ObjectDigestInfo_digestedObjectType.publicKeyCert,
        undefined,
        new AlgorithmIdentifier(sha256),
        new Uint8ClampedArray([1, 1, 0, 0]),
    );
}

describe("AttCertIssuer.isEqualTo()", () => {
    it("matches the same issuer name", () => {
        const a = new AttCertIssuer([{ dNSName: "aa.example" }]);
        const b = new AttCertIssuer([{ dNSName: "aa.example" }]);
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("matches the same base certificate id and object digest", () => {
        const a = new AttCertIssuer(undefined, issuer(), digest());
        const b = new AttCertIssuer(undefined, issuer(), digest());
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("does not match a missing component or a different issuer", () => {
        const named = new AttCertIssuer([{ dNSName: "aa.example" }]);
        expect(named.isEqualTo(new AttCertIssuer(undefined, issuer()))).toBe(false);
        expect(named.isEqualTo(new AttCertIssuer([{ dNSName: "other.example" }])))
            .toBe(false);
    });
});
