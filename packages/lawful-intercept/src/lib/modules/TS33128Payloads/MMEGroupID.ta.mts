/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMEGroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMEGroupID  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type MMEGroupID = OCTET_STRING; // OctetStringType
export const _decode_MMEGroupID: $.ASN1Decoder<MMEGroupID> = (el: _Element): MMEGroupID => {
    const value = $._decodeOctetString(el);
    if (value.length < 2 || value.length > 2) {
        throw new ASN1SizeError("MMEGroupID violates SIZE constraint");
    }
    return value;
};
export const _encode_MMEGroupID: $.ASN1Encoder<MMEGroupID> = $._encodeOctetString;


/* eslint-enable */
