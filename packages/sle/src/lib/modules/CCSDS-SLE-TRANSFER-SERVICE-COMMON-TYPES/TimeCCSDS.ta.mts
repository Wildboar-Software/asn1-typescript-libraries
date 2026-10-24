/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeCCSDS
 * @description
 * 
 * Eight-octet CCSDS day-segmented time code with microsecond resolution. The
 * P-field is implicit and defaulted to 41 hex. The T-field is two octets of
 * days since 1958-01-01 00:00:00, four octets of milliseconds of the day, and
 * two octets of microseconds of the millisecond, set to 0 when unused. This is
 * the time-tag format used in space link data units (reference [7] of this
 * book).
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.1.7.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeCCSDS                ::=    OCTET STRING (SIZE(8))
 * ```
 */
export
type TimeCCSDS = OCTET_STRING; // OctetStringType
export function _decode_TimeCCSDS (el: _Element): TimeCCSDS {
    const _decoded = $._decodeOctetString(el);
    if (_decoded.length < 8 || _decoded.length > 8) {
        throw new ASN1SizeError("TimeCCSDS violates SIZE (8)");
    }
    return _decoded;
}
export const _encode_TimeCCSDS: $.ASN1Encoder<TimeCCSDS> = $._encodeOctetString;


/* eslint-enable */
