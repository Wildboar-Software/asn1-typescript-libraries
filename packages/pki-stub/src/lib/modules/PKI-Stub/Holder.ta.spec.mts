import { ObjectIdentifier } from "@wildboar/asn1";
import { AlgorithmIdentifier } from "./AlgorithmIdentifier.ta.mjs";
import { Holder } from "./Holder.ta.mjs";
import { IssuerSerial } from "./IssuerSerial.ta.mjs";
import { ObjectDigestInfo } from "./ObjectDigestInfo.ta.mjs";
import { ObjectDigestInfo_digestedObjectType } from "./ObjectDigestInfo-digestedObjectType.ta.mjs";

const sha256 = ObjectIdentifier.fromString("2.16.840.1.101.3.4.2.1");
const bits = new Uint8ClampedArray([1, 0, 1, 1]);

function digest (
    type: ObjectDigestInfo["digestedObjectType"] = ObjectDigestInfo_digestedObjectType.publicKey,
): ObjectDigestInfo {
    return new ObjectDigestInfo(type, undefined, new AlgorithmIdentifier(sha256), bits);
}

function issuer (name: string = "ca.example"): IssuerSerial {
    return new IssuerSerial([{ dNSName: name }], new Uint8Array([1]));
}

describe("Holder.isEqualTo()", () => {
    it("matches the same entity name", () => {
        const a = new Holder(undefined, [{ dNSName: "holder.example" }]);
        const b = new Holder(undefined, [{ dNSName: "holder.example" }]);
        expect(a.isEqualTo(b)).toBe(true);
    });

    it("matches the same base certificate id and object digest", () => {
        const a = new Holder(issuer(), undefined, digest());
        const b = new Holder(issuer(), undefined, digest());
        expect(a.isEqualTo(b)).toBe(true);
        expect(digest().isEqualTo(digest())).toBe(true);
    });

    it("does not match a missing component or a different name", () => {
        const named = new Holder(undefined, [{ dNSName: "holder.example" }]);
        expect(named.isEqualTo(new Holder(issuer()))).toBe(false);
        expect(named.isEqualTo(new Holder(undefined, [{ dNSName: "other.example" }])))
            .toBe(false);
        expect(digest().isEqualTo(digest(ObjectDigestInfo_digestedObjectType.publicKeyCert)))
            .toBe(false);
    });
});
