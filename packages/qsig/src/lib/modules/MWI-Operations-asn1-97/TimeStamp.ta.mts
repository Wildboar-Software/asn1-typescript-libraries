/* eslint-disable */
import {
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TimeStamp
 * @description
 *
 * Local date and time when a message was left, as a GeneralizedTime of 12 to 19
 * characters following ISO 8601 (ECMA-242 §6.3.1, ECMA-241 §7.2.1.1 note 7).
 * Eight digits YYYYMMDD, then the time of day as HHMM or HHMMSS, then
 * optionally Z or a differential +HHMM or -HHMM. Examples in §6.3.1:
 * 19970621194530 is 21 June 1997, 19:45:30; the same instant with Z is UTC;
 * 19970621194530-0500 is that instant, five hours behind UTC.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeStamp  ::=  GeneralizedTime (SIZE(12..19))
 * ```
 */
export
type TimeStamp = GeneralizedTime; // GeneralizedTime

export
const _decode_TimeStamp = (el: _Element): TimeStamp => {
    if (el.value.length < 12 || el.value.length > 19) {
        throw new ASN1SizeError("TimeStamp violates SIZE constraint");
    }
    return $._decodeGeneralizedTime(el);
};

export
const _encode_TimeStamp: $.ASN1Encoder<TimeStamp> = $._encodeGeneralizedTime;

/* eslint-enable */
