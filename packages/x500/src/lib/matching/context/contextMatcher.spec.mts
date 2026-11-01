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
import { id_avc_language } from "../../modules/SelectedAttributeTypes/id-avc-language.va.mjs";
import {
    MATCH_FLAG_CONSTANT_TIME,
    MATCH_FLAG_DEBUG,
} from "../../types/matching.mjs";
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

        const bad = _encodeInteger(1, DER);
        expect(languageContext(en, [bad, en].values())).toBe(true);
        expect(languageContext(en, [bad].values())).toBe(false);
    });

    it("logs an invalid context value, and still reads every value in constant time", () => {
        const en = _encodePrintableString("en", DER);
        const fr = _encodePrintableString("fr", DER);
        const bad = _encodeInteger(1, DER);
        const spy = vi.spyOn(console, "error").mockImplementation(() => {});
        try {
            expect(languageContext(en, [bad, bad].values(), undefined, MATCH_FLAG_DEBUG)).toBe(false);
            expect(spy).toHaveBeenCalledTimes(2);
            const contextType = id_avc_language.dotDelimitedNotation;
            expect(String(spy.mock.calls[0][0])).toContain("index 0");
            expect(String(spy.mock.calls[0][0])).toContain(contextType);
            expect(String(spy.mock.calls[1][0])).toContain("index 1");
            expect(String(spy.mock.calls[1][0])).toContain(contextType);

            spy.mockClear();
            let earlyPulls = 0;
            const earlySource = [fr, en, bad].values();
            const earlyValues: IterableIterator<ASN1Element> = {
                next () {
                    earlyPulls += 1;
                    return earlySource.next();
                },
                [Symbol.iterator] () {
                    return this;
                },
            };
            expect(languageContext(en, earlyValues)).toBe(true);
            expect(earlyPulls).toBe(2);

            let pulls = 0;
            const source = [fr, en, bad].values();
            const values: IterableIterator<ASN1Element> = {
                next () {
                    pulls += 1;
                    return source.next();
                },
                [Symbol.iterator] () {
                    return this;
                },
            };
            expect(languageContext(
                en,
                values,
                undefined,
                MATCH_FLAG_DEBUG | MATCH_FLAG_CONSTANT_TIME,
            )).toBe(true);
            // Three values, then the iterator reports that it is done.
            expect(pulls).toBe(4);
            expect(spy).toHaveBeenCalledTimes(1);
            expect(String(spy.mock.calls[0][0])).toContain("index 2");
            expect(String(spy.mock.calls[0][0])).toContain(id_avc_language.dotDelimitedNotation);
        } finally {
            spy.mockRestore();
        }
    });

    it("matches an LDAP option list that is a subset of any stored list", () => {
        const assertion = _encode_AttributeOptionList([ "LANG-fr" ], DER);
        const en = _encode_AttributeOptionList([ "lang-en" ], DER);
        const fr = _encode_AttributeOptionList([ "lang-fr", "x" ], DER);
        expect(ldapAttributeOptionContext(assertion, [en, fr].values())).toBe(true);
        expect(ldapAttributeOptionContext(assertion, [en].values())).toBe(false);
        expect(ldapAttributeOptionContext(
            assertion,
            [_encodeInteger(1, DER), fr].values(),
        )).toBe(true);
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
