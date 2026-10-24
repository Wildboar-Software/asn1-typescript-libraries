/* eslint-disable */
import {
    type GeneralizedTime,
    ASN1Element as _Element,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TimeStamp
 * @description
 *
 * Local date and time (ECMA-347 §6.3.1). A
 * `GeneralizedTime` of 12 to 19 characters, following
 * ISO 8601: `YYYYMMDD`, then `HHMM` or `HHMMSS`, then
 * optionally `Z` or a differential `+HHMM` or `-HHMM`.
 *
 * Examples in §6.3.1: `19970621194530` is 21 June 1997,
 * 19:45:30 local; a `Z` suffix is that instant as UTC;
 * `-0500` means that local time is five hours behind UTC.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
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
