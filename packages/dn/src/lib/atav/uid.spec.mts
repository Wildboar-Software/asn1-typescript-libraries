import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeUTF8String } from "@wildboar/asn1/functional";
import { describe, expect, it } from "vitest";
import { AttributeTypeAndValue } from "../AttributeTypeAndValue.ta.mjs";
import { ParsedAttributeTypeAndValue } from "../ParsedAttributeTypeAndValue.mjs";
import { isAttributeTypeAndValueOf } from "./brand.mjs";
import { attributeTypeAndValueToKey, default as attributeTypeAndValueToString } from "./tostr.mjs";
import { atavFromStringX520 } from "./fromstr.mjs";
import { uidOID } from "../attributeTypes.mjs";
import { rdnSequenceFromStringX520 } from "../rdnseq/fromstr.mjs";
import rdnSequenceToString from "../rdnseq/tostr.mjs";

const uid = ObjectIdentifier.fromParts([0, 9, 2342, 19200300, 100, 1, 1]);

describe("uid / userId (0.9.2342.19200300.100.1.1)", () => {
    it("is printed as uid, including in strict LDAP mode", () => {
        const atav = new AttributeTypeAndValue(uid, _encodeUTF8String("jsmith", BER));
        expect(attributeTypeAndValueToString(atav)).toBe("uid=jsmith");
        expect(attributeTypeAndValueToString(atav, false, true)).toBe("uid=jsmith");
    });

    it("escapes special characters when requested", () => {
        const atav = new AttributeTypeAndValue(uid, _encodeUTF8String("a,b+c", BER));
        expect(attributeTypeAndValueToString(atav, true)).toBe("uid=a\\,b\\+c");
    });

    it.each(["uid", "UID", "userId", "USERID"])("parses %s", (name) => {
        const atav = atavFromStringX520(new ParsedAttributeTypeAndValue(name, "jsmith"));
        expect(atav.type_.isEqualTo(uid)).toBe(true);
        expect(atav.value.printableString).toBe("jsmith");
        expect(isAttributeTypeAndValueOf(atav, uidOID)).toBe(true);
    });

    it("round-trips through a distinguished name", () => {
        const str = "uid=jsmith,dc=example,dc=net";
        expect(rdnSequenceToString(rdnSequenceFromStringX520(str))).toBe(str);
        expect(rdnSequenceToString(rdnSequenceFromStringX520("userid=jsmith+cn=John,dc=example")))
            .toBe("uid=jsmith+cn=John,dc=example");
    });

    it("round-trips non-ASCII values", () => {
        const str = "uid=jón";
        const dn = rdnSequenceFromStringX520(str);
        expect(rdnSequenceToString(dn)).toBe(str);
    });

    it("does not treat an email-like uid as an email address when comparing", () => {
        const a = new AttributeTypeAndValue(uid, _encodeUTF8String("Bob@Example.COM", BER));
        const b = new AttributeTypeAndValue(uid, _encodeUTF8String("bob@example.com", BER));
        expect(attributeTypeAndValueToKey(a)).toBe(attributeTypeAndValueToKey(b));
        expect(attributeTypeAndValueToKey(a)).toBe("0.9.2342.19200300.100.1.1=bob@example.com");
    });
});
