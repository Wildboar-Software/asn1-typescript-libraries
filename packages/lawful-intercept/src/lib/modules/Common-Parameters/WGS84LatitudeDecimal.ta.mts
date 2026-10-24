/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LatitudeDecimal
 * @description
 *
 * Geographical latitude on the WGS84 reference ellipsoid, in decimal
 * notation. Two digits before the decimal point, left-padded with
 * zero, and six digits after, right-padded with zero.
 *
 * Character form `[NS][0-9]{2}\.[0-9]{6}`. Example: `N43.616000`.
 * The value is an octet string of that length (10). The specification
 * does not state the character encoding of those octets.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.34. NIMA Technical
 * Report 8350.2 is cited for the WGS84 definition, not for this
 * syntax.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LatitudeDecimal  ::=  OCTET STRING (SIZE (10))
 * ```
 */
export
type WGS84LatitudeDecimal = OCTET_STRING; // OctetStringType
export const _decode_WGS84LatitudeDecimal: $.ASN1Decoder<WGS84LatitudeDecimal> = (el: _Element): WGS84LatitudeDecimal => {
    const value = $._decodeOctetString(el);
    if (value.length < 10 || value.length > 10) {
        throw new ASN1SizeError("WGS84LatitudeDecimal violates SIZE constraint");
    }
    return value;
};
export const _encode_WGS84LatitudeDecimal: $.ASN1Encoder<WGS84LatitudeDecimal> = $._encodeOctetString;


/* eslint-enable */
