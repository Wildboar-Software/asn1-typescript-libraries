/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Sai
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Sai                 ::=     OCTET STRING (SIZE (7))
 * ```
 */
export
type Sai = OCTET_STRING; // OctetStringType

export function _decode_Sai (el: _Element): Sai {
    const value = $._decodeOctetString(el);
    if (value.length < 7 || value.length > 7) {
        throw new ASN1SizeError("Sai violates the SIZE constraint");
    }
    return value;
}

export const _encode_Sai: $.ASN1Encoder<Sai> = $._encodeOctetString;


/* eslint-enable */
