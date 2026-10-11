/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSUpdateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSUpdateType  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type FiveGSUpdateType = OCTET_STRING; // OctetStringType

export function _decode_FiveGSUpdateType (el: _Element): FiveGSUpdateType {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 1) {
        throw new ASN1SizeError("FiveGSUpdateType violates the SIZE constraint");
    }
    return value;
}

export const _encode_FiveGSUpdateType: $.ASN1Encoder<FiveGSUpdateType> = $._encodeOctetString;


/* eslint-enable */
