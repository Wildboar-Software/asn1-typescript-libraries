/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LongitudeAngular
 * @description
 *
 * Geographical longitude on the WGS84 reference ellipsoid, in angular
 * notation. Values are `XDDDMMSS.ss`: hemisphere `E` or `W`, three
 * digits of degrees, two digits of arc-minutes, two digits of whole
 * arc-seconds, a decimal point, and two digits of fractional
 * arc-seconds. Each part is padded with zeroes.
 *
 * Character form `[EW][0-9]{7}\.[0-9]{2}`. Example: `E0070310.42`.
 * The value is an octet string of that length (11). The specification
 * does not state the character encoding of those octets.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.38. NIMA Technical
 * Report 8350.2 is cited for the WGS84 definition, not for this
 * syntax.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LongitudeAngular  ::=  OCTET STRING (SIZE (11))
 * ```
 */
export
type WGS84LongitudeAngular = OCTET_STRING; // OctetStringType
export const _decode_WGS84LongitudeAngular: $.ASN1Decoder<WGS84LongitudeAngular> = (el: _Element): WGS84LongitudeAngular => {
    const value = $._decodeOctetString(el);
    if (value.length < 11 || value.length > 11) {
        throw new ASN1SizeError("WGS84LongitudeAngular violates SIZE constraint");
    }
    return value;
};
export const _encode_WGS84LongitudeAngular: $.ASN1Encoder<WGS84LongitudeAngular> = $._encodeOctetString;


/* eslint-enable */
