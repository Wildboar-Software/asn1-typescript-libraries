/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UEPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UEPolicy  ::=  OCTET STRING (SIZE(16..65540))
 * ```
 */
export
type UEPolicy = OCTET_STRING; // OctetStringType

export function _decode_UEPolicy (el: _Element): UEPolicy {
    const value = $._decodeOctetString(el);
    if (value.length < 16 || value.length > 65540) {
        throw new ASN1SizeError("UEPolicy violates the SIZE constraint");
    }
    return value;
}

export const _encode_UEPolicy: $.ASN1Encoder<UEPolicy> = $._encodeOctetString;


/* eslint-enable */
