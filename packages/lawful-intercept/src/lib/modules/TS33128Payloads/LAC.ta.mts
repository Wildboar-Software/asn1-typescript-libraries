/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LAC
 * @description
 * 
 * The Location Area Code of the service area being reported.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.73.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type LAC = OCTET_STRING; // OctetStringType
export const _decode_LAC: $.ASN1Decoder<LAC> = (el: _Element): LAC => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("LAC violates SIZE constraint");
    }
    return value;
};
export const _encode_LAC: $.ASN1Encoder<LAC> = $._encodeOctetString;


/* eslint-enable */
