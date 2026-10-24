/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LatitudeAngular
 * @description
 *
 * Geographical latitude on the WGS84 reference ellipsoid, in angular
 * notation. Values are `XDDMMSS.ss`: hemisphere `N` or `S`, two digits
 * of degrees, two digits of arc-minutes, two digits of whole
 * arc-seconds, a decimal point, and two digits of fractional
 * arc-seconds. Each part is padded with zeroes.
 *
 * Character form `[NS][0-9]{6}\.[0-9]{2}`. Example: `N433700.62`.
 * The value is an octet string of that length (10). The specification
 * does not state the character encoding of those octets.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.37. NIMA Technical
 * Report 8350.2 is cited for the WGS84 definition, not for this
 * syntax.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LatitudeAngular  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type WGS84LatitudeAngular = OCTET_STRING; // OctetStringType
export const _decode_WGS84LatitudeAngular: $.ASN1Decoder<WGS84LatitudeAngular> = (el: _Element): WGS84LatitudeAngular => {
    const value = $._decodeOctetString(el);
    if (value.length < 10 || value.length > 10) {
        throw new ASN1SizeError("WGS84LatitudeAngular violates SIZE constraint");
    }
    return value;
};
export const _encode_WGS84LatitudeAngular: $.ASN1Encoder<WGS84LatitudeAngular> = $._encodeOctetString;


/* eslint-enable */
