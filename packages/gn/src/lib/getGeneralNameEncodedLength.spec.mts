import { External, ObjectIdentifier } from "@wildboar/asn1";
import {
    BER,
    DER,
    _encodePrintableString,
    _encodeUTF8String,
} from "@wildboar/asn1/functional";
import { AttributeTypeAndValue } from "@wildboar/dn";
import { BuiltInStandardAttributes, ORAddress } from "@wildboar/or-address";
import { describe, expect, it } from "vitest";
import { EDIPartyName } from "./EDIPartyName.ta.mjs";
import { _encode_GeneralName, type GeneralName } from "./GeneralName.ta.mjs";
import { getGeneralNameEncodedLength } from "./getGeneralNameEncodedLength.mjs";
import { hexToBytes } from "./hex.mjs";

function expectLength(gn: GeneralName): void {
    const encoded = _encode_GeneralName(gn, DER).toBytes().length;
    expect(getGeneralNameEncodedLength(gn)).toBe(encoded);
}

describe("getGeneralNameEncodedLength", () => {
    it("matches the real encoding of every alternative", () => {
        expectLength({ rfc822Name: "user@example.com" });
        expectLength({ dNSName: "example.com" });
        expectLength({ uniformResourceIdentifier: "https://example.com/a" });
        expectLength({ iPAddress: new Uint8Array([192, 0, 2, 1]) });
        expectLength({ iPAddress: hexToBytes("c0000200ffffff00") });
        expectLength({ registeredID: ObjectIdentifier.fromString("1.2.3.4") });
        expectLength({
            directoryName: {
                rdnSequence: [[
                    new AttributeTypeAndValue(
                        ObjectIdentifier.fromString("2.5.4.3"),
                        _encodePrintableString("Bob", BER),
                    ),
                ]],
            },
        });
        expectLength({
            ediPartyName: new EDIPartyName(
                { uTF8String: "Assigner" },
                { printableString: "Acme" },
            ),
        });
        expectLength({
            otherName: new External(
                ObjectIdentifier.fromString("1.2.3"),
                undefined,
                undefined,
                _encodeUTF8String("hi", BER),
            ),
        });
        expectLength({
            x400Address: new ORAddress(new BuiltInStandardAttributes(
                { iso_3166_alpha2_code: "US" },
                undefined,
                undefined,
                undefined,
                undefined,
                "Wildboar",
            )),
        });
    });
});
