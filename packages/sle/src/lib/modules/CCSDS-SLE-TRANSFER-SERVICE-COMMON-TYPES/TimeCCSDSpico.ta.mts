/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TimeCCSDSpico
 * @description
 * 
 * Ten-octet CCSDS day-segmented time code with picosecond resolution. The
 * P-field is implicit and defaulted to 42 hex. The T-field is two octets of
 * days since 1958-01-01 00:00:00, four octets of milliseconds of the day, and
 * four octets of picoseconds of the millisecond, set to 0 when unused.
 * 
 * CCSDS 911.1-B-5, annex A2.1 and section 3.1.7.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TimeCCSDSpico            ::=    OCTET STRING (SIZE(10))
 * ```
 */
export
type TimeCCSDSpico = OCTET_STRING; // OctetStringType
export function _decode_TimeCCSDSpico (el: _Element): TimeCCSDSpico {
    const _decoded = $._decodeOctetString(el);
    if (_decoded.length < 10 || _decoded.length > 10) {
        throw new ASN1SizeError("TimeCCSDSpico violates SIZE (10)");
    }
    return _decoded;
}
export const _encode_TimeCCSDSpico: $.ASN1Encoder<TimeCCSDSpico> = $._encodeOctetString;


/* eslint-enable */
