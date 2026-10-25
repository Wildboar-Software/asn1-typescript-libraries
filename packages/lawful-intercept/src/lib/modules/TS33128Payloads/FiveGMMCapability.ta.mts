/* eslint-disable */
import {
    type ASN1Element as _Element,
    type OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGMMCapability
 * @description
 * 
 * The purpose of the FiveGMMCapability type is to provide information
 * concerning aspects of the UE related to the 5GCN or interworking with the
 * EPS. Encoded per TS 24.501 [13] clause 9.11.3.1 omitting the first two
 * octets.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.1A.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGMMCapability  ::=  OCTET STRING (SIZE(1..13))
 * ```
 */
export
type FiveGMMCapability = OCTET_STRING; // OctetStringType
export const _decode_FiveGMMCapability: $.ASN1Decoder<FiveGMMCapability> = (el: _Element): FiveGMMCapability => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 13) {
        throw new ASN1SizeError("FiveGMMCapability violates SIZE constraint");
    }
    return value;
};
export const _encode_FiveGMMCapability: $.ASN1Encoder<FiveGMMCapability> = $._encodeOctetString;


/* eslint-enable */
