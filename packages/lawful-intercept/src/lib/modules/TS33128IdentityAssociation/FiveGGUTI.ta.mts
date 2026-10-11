/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGGUTI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGGUTI  ::=  OCTET STRING (SIZE(10))
 * ```
 */
export
type FiveGGUTI = OCTET_STRING; // OctetStringType

export function _decode_FiveGGUTI (el: _Element): FiveGGUTI {
    const value = $._decodeOctetString(el);
    if (value.length < 10 || value.length > 10) {
        throw new ASN1SizeError("FiveGGUTI violates the SIZE constraint");
    }
    return value;
}

export const _encode_FiveGGUTI: $.ASN1Encoder<FiveGGUTI> = $._encodeOctetString;


/* eslint-enable */
