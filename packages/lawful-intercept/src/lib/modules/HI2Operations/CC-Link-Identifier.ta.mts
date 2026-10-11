/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CC_Link_Identifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CC-Link-Identifier  ::=  OCTET STRING (SIZE (1..8))
 * ```
 */
export
type CC_Link_Identifier = OCTET_STRING; // OctetStringType

export function _decode_CC_Link_Identifier (el: _Element): CC_Link_Identifier {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 8) {
        throw new ASN1SizeError("CC_Link_Identifier violates the SIZE constraint");
    }
    return value;
}

export const _encode_CC_Link_Identifier: $.ASN1Encoder<CC_Link_Identifier> = $._encodeOctetString;


/* eslint-enable */
