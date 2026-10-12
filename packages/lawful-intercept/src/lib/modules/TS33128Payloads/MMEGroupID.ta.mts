/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
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
export const _decode_MMEGroupID: $.ASN1Decoder<MMEGroupID> = $._decodeOctetString;
export const _encode_MMEGroupID: $.ASN1Encoder<MMEGroupID> = $._encodeOctetString;


/* eslint-enable */
