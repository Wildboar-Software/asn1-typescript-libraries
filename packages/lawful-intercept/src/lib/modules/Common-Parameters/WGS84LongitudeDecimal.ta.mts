/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary WGS84LongitudeDecimal
 * @description
 *
 * Geographical longitude on the WGS84 reference ellipsoid, in decimal
 * notation. Three digits before the decimal point, left-padded with
 * zero, and six digits after, right-padded with zero.
 *
 * Character form `[EW][0-9]{3}\.[0-9]{6}`. Example: `E007.053000`.
 * The value is an octet string of that length (11). The specification
 * does not state the character encoding of those octets.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.35. NIMA Technical
 * Report 8350.2 is cited for the WGS84 definition, not for this
 * syntax.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WGS84LongitudeDecimal  ::=  OCTET STRING (SIZE (11))
 * ```
 */
export
type WGS84LongitudeDecimal = OCTET_STRING; // OctetStringType
export const _decode_WGS84LongitudeDecimal: $.ASN1Decoder<WGS84LongitudeDecimal> = (el: _Element): WGS84LongitudeDecimal => {
    const value = $._decodeOctetString(el);
    if (value.length < 11 || value.length > 11) {
        throw new ASN1SizeError("WGS84LongitudeDecimal violates SIZE constraint");
    }
    return value;
};
export const _encode_WGS84LongitudeDecimal: $.ASN1Encoder<WGS84LongitudeDecimal> = $._encodeOctetString;


/* eslint-enable */
