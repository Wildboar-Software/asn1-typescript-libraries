/* eslint-disable */
import {
    ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SORTransparentContainer
 * @description
 * 
 * Given as a SoR Transparent container encoded per TS 24.501 [13] clause
 * 9.11.3.51 omitting the first three octets.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SORTransparentContainer  ::=  OCTET STRING (SIZE (17..65535))
 * ```
 */
export
type SORTransparentContainer = OCTET_STRING; // OctetStringType
export const _decode_SORTransparentContainer: $.ASN1Decoder<SORTransparentContainer> = (el: _Element): SORTransparentContainer => {
    const value = $._decodeOctetString(el);
    if (value.length < 17 || value.length > 65535) {
        throw new ASN1SizeError("SORTransparentContainer violates SIZE constraint");
    }
    return value;
};
export const _encode_SORTransparentContainer: $.ASN1Encoder<SORTransparentContainer> = $._encodeOctetString;


/* eslint-enable */
