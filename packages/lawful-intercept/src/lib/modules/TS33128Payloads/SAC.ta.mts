/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SAC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SAC  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type SAC = OCTET_STRING; // OctetStringType

export function _decode_SAC (el: _Element): SAC {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("SAC violates the SIZE constraint");
    }
    return value;
}

export const _encode_SAC: $.ASN1Encoder<SAC> = $._encodeOctetString;


/* eslint-enable */
