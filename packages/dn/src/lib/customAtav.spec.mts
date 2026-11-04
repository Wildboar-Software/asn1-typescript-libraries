import { ObjectIdentifier } from "@wildboar/asn1";
import { BER, _encodeInteger, _encodeUTF8String } from "@wildboar/asn1/functional";
import { describe, expect, it } from "vitest";
import { AttributeTypeAndValue } from "./AttributeTypeAndValue.ta.mjs";
import type { StringifyAttributeTypeAndValue } from "./atav/tostr.mjs";
import attributeTypeAndValueToString, { attributeTypeAndValueToKey } from "./atav/tostr.mjs";
import { atavFromStringX520, type ParseAttributeTypeAndValue } from "./atav/fromstr.mjs";
import { ParsedAttributeTypeAndValue } from "./ParsedAttributeTypeAndValue.mjs";
import relativeDistinguishedNameToString from "./rdn/tostr.mjs";
import { relativeDistinguishedNameToKey } from "./RelativeDistinguishedName.ta.mjs";
import rdnSequenceToString from "./rdnseq/tostr.mjs";
import { rdnSequenceFromStringX520 } from "./rdnseq/fromstr.mjs";
import { rdnSequenceToKey } from "./RDNSequence.ta.mjs";
import nameToString from "./name/tostr.mjs";
import nameFromStringX520 from "./name/fromstr.mjs";
import { nameToKey, type Name } from "./Name.ta.mjs";
import { escapeDistinguishedValue } from "./escapeDistinguishedValue.mjs";

const id_foo = ObjectIdentifier.fromParts([1, 3, 6, 1, 4, 1, 56490, 1]);
const commonName = ObjectIdentifier.fromParts([2, 5, 4, 3]);

function utf8(type_: ObjectIdentifier, value: string): AttributeTypeAndValue {
    return new AttributeTypeAndValue(type_, _encodeUTF8String(value, BER));
}

const parseFoo: ParseAttributeTypeAndValue = (parsed) => {
    if (parsed.type.toLowerCase() !== "foo") {
        return undefined;
    }
    if (!/^\d+$/.test(parsed.value)) {
        throw new SyntaxError('attribute type "foo": value is not an integer');
    }
    return new AttributeTypeAndValue(id_foo, _encodeInteger(BigInt(parsed.value), BER));
};

const stringifyFoo: StringifyAttributeTypeAndValue = (atav, escape) => {
    if (!atav.type_.isEqualTo(id_foo)) {
        return undefined;
    }
    const value = atav.value.integer.toString();
    return `foo=${escape ? escapeDistinguishedValue(value) : value}`;
};

const keyFoo: StringifyAttributeTypeAndValue = (atav, escape) => {
    if (!atav.type_.isEqualTo(id_foo)) {
        return undefined;
    }
    const value = atav.value.integer.toString();
    return `${id_foo.toString()}=${escape ? escapeDistinguishedValue(value) : value}`;
};

describe("custom attribute type and value conversion", () => {
    it("uses a replacement when parsing and falls back to X.520 otherwise", () => {
        const foo = atavFromStringX520(new ParsedAttributeTypeAndValue("FOO", "42"), parseFoo);
        expect(foo.type_.isEqualTo(id_foo)).toBe(true);
        expect(foo.value.integer).toBe(42);

        const cn = atavFromStringX520(new ParsedAttributeTypeAndValue("cn", "Smith"), parseFoo);
        expect(cn.type_.isEqualTo(commonName)).toBe(true);
        expect(cn.value.printableString).toBe("Smith");

        expect(() => atavFromStringX520(new ParsedAttributeTypeAndValue("foo", "x"), parseFoo))
            .toThrow(new SyntaxError('attribute type "foo": value is not an integer'));
        expect(() => atavFromStringX520(new ParsedAttributeTypeAndValue("bar", "1"), parseFoo))
            .toThrow(new SyntaxError('unrecognized attribute type "bar"'));
    });

    it("uses a replacement when stringifying and falls back otherwise", () => {
        const foo = new AttributeTypeAndValue(id_foo, _encodeInteger(7n, BER));
        expect(attributeTypeAndValueToString(foo, false, false, stringifyFoo)).toBe("foo=7");
        expect(attributeTypeAndValueToString(foo)).toBe(`${id_foo.toString()}=#020107`);
        expect(utf8(commonName, "Smith, J").toString(true, stringifyFoo)).toBe("cn=Smith\\, J");
        expect(foo.toString(false, stringifyFoo)).toBe("foo=7");
        expect(foo.toLdapString(false, stringifyFoo)).toBe("foo=7");
        expect(foo.toKey(false, keyFoo)).toBe(`${id_foo.toString()}=7`);
        expect(attributeTypeAndValueToKey(foo, true, keyFoo)).toBe(`${id_foo.toString()}=7`);
    });

    it("threads replacements through RDN, RDN sequence, and Name", () => {
        const dn = rdnSequenceFromStringX520("foo=9+cn=Smith\\, J,foo=10", parseFoo);
        expect(dn).toHaveLength(2);
        expect(dn[0][0].value.integer).toBe(9);
        expect(dn[0][1].value.printableString).toBe("Smith, J");
        expect(dn[1][0].value.integer).toBe(10);

        expect(relativeDistinguishedNameToString(dn[0], stringifyFoo))
            .toBe("foo=9+cn=Smith\\, J");
        expect(rdnSequenceToString(dn, stringifyFoo)).toBe("foo=9+cn=Smith\\, J,foo=10");

        const name: Name = { rdnSequence: dn };
        expect(nameToString(name, stringifyFoo)).toBe("rdnSequence:foo=9+cn=Smith\\, J,foo=10");
        expect(nameFromStringX520("rdnSequence:foo=11,c=US", parseFoo).rdnSequence[0][0].value.integer)
            .toBe(11);

        expect(relativeDistinguishedNameToKey(dn[0], keyFoo))
            .toBe("1.3.6.1.4.1.56490.1=9+2.5.4.3=smith\\, j");
        expect(rdnSequenceToKey(dn, keyFoo))
            .toBe("1.3.6.1.4.1.56490.1=9+2.5.4.3=smith\\, j,1.3.6.1.4.1.56490.1=10");
        expect(nameToKey(name, keyFoo))
            .toBe("rdnSequence:1.3.6.1.4.1.56490.1=9+2.5.4.3=smith\\, j,1.3.6.1.4.1.56490.1=10");
    });

    it("is used by AttributeTypeAndValue.fromStringX520 and fromParsedX520", () => {
        const parsed = AttributeTypeAndValue.parseString("foo=3");
        expect(AttributeTypeAndValue.fromParsedX520(parsed, parseFoo).value.integer).toBe(3);
        expect(AttributeTypeAndValue.fromStringX520("foo=4", parseFoo).value.integer).toBe(4);
        expect(AttributeTypeAndValue.fromStringX520("cn=Bob", parseFoo).value.printableString).toBe("Bob");
    });
});
