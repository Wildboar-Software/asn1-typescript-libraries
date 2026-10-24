/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TAC
 * @description
 * 
 * The tracking area code being reported. Given in the format specified in TS
 * 38.413 [23] clause 9.3.3.10.
 *
 * 3GPP TS 33.128, clause 8.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TAC  ::=  OCTET STRING (SIZE(2..3))
 * ```
 */
export
type TAC = OCTET_STRING; // OctetStringType
export const _decode_TAC: $.ASN1Decoder<TAC> = (el: _Element): TAC => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 3) {
        throw new ASN1SizeError("TAC violates SIZE constraint");
    }
    return value;
};
export const _encode_TAC: $.ASN1Encoder<TAC> = $._encodeOctetString;


/* eslint-enable */
