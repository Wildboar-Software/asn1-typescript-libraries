/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUCI
 * @description
 * 
 * Encoded as per TS 24.501 [13] clause 9.11.3.4, omitting the first 3 octets.
 *
 * 3GPP TS 33.128, clause 6.2.2A.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUCI  ::=  OCTET STRING (SIZE(8..3008))
 * ```
 */
export
type SUCI = OCTET_STRING; // OctetStringType
export const _decode_SUCI: $.ASN1Decoder<SUCI> = (el: _Element): SUCI => {
    const value = $._decodeOctetString(el);
    if (value.length < 8 || value.length > 3008) {
        throw new ASN1SizeError("SUCI violates SIZE constraint");
    }
    return value;
};
export const _encode_SUCI: $.ASN1Encoder<SUCI> = $._encodeOctetString;


/* eslint-enable */
