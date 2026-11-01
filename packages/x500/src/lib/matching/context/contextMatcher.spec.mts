import {
    DERElement,
    ASN1TagClass,
    ASN1Construction,
    ASN1UniversalType,
    ObjectIdentifier,
    type ASN1Element,
} from "@wildboar/asn1";
import { DER, _encodeInteger, _encodePrintableString } from "@wildboar/asn1/functional";
import { _encode_AttributeOptionList } from "../../modules/SelectedAttributeTypes/AttributeOptionList.ta.mjs";
import {
    TimeSpecification,
    _encode_TimeSpecification,
} from "../../modules/SelectedAttributeTypes/TimeSpecification.ta.mjs";
import { _encode_TimeAssertion } from "../../modules/SelectedAttributeTypes/TimeAssertion.ta.mjs";
import { TimeSpecification_time_absolute } from "../../modules/SelectedAttributeTypes/TimeSpecification-time-absolute.ta.mjs";
import { languageContext } from "./languageContext.mjs";
import { ldapAttributeOptionContext } from "./ldapAttributeOptionContext.mjs";
import { localeContext } from "./localeContext.mjs";
import { temporalContext } from "./temporalContext.mjs";

function oid (notation: string): DERElement {
    return new DERElement(
        ASN1TagClass.universal,
        ASN1Construction.primitive,
        ASN1UniversalType.objectIdentifier,
        ObjectIdentifier.fromString(notation),
    );
}

function absolute (start: Date, end: Date): ASN1Element {
    return _encode_TimeSpecification(new TimeSpecification(
        {
            absolute: new TimeSpecification_time_absolute(start, end),
        },
    ), DER);
}

describe("context matchers", () => {
    it("matches a language code against any stored value", () => {
        const en = _encodePrintableString("en", DER);
        const fr = _encodePrintableString("fr", DER);
        expect(languageContext(en, [fr, en].values())).toBe(true);
        expect(languageContext(en, [fr].values())).toBe(false);
        expect(languageContext(en, [].values())).toBe(false);
        expect(() => languageContext(_encodeInteger(1, DER), [en].values())).toThrow();
    });

    it("matches an LDAP option list that is a subset of any stored list", () => {
        const assertion = _encode_AttributeOptionList([ "LANG-fr" ], DER);
        const en = _encode_AttributeOptionList([ "lang-en" ], DER);
        const fr = _encode_AttributeOptionList([ "lang-fr", "x" ], DER);
        expect(ldapAttributeOptionContext(assertion, [en, fr].values())).toBe(true);
        expect(ldapAttributeOptionContext(assertion, [en].values())).toBe(false);
    });

    it("matches a locale against any stored value, including an unrecognized alternative", () => {
        const a = oid("1.2.3");
        const b = oid("1.2.4");
        const c = oid("1.2.5");
        expect(localeContext(a, [b, a].values())).toBe(true);
        expect(localeContext(a, [b, c].values())).toBe(false);

        const ext = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            3,
            new Uint8Array([ 1, 2, 3 ]),
        );
        const other = new DERElement(
            ASN1TagClass.context,
            ASN1Construction.primitive,
            3,
            new Uint8Array([ 4, 5, 6 ]),
        );
        expect(localeContext(ext, [other, ext].values())).toBe(true);
        expect(localeContext(ext, [other].values())).toBe(false);
    });

    it("matches a time assertion against any stored specification", () => {
        const at = _encode_TimeAssertion({
            at: new Date(2026, 0, 1, 12, 13, 14),
        }, DER);
        const miss = absolute(
            new Date(2026, 0, 1, 12, 13, 15),
            new Date(2026, 0, 1, 12, 13, 16),
        );
        const hit = absolute(
            new Date(2026, 0, 1, 12, 13, 13),
            new Date(2026, 0, 1, 12, 13, 15),
        );
        expect(temporalContext(at, [miss, hit].values())).toBe(true);
        expect(temporalContext(at, [miss].values())).toBe(false);
        expect(temporalContext(at, [].values())).toBe(false);
    });
});
