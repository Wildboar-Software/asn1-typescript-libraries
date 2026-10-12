/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
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
export const _decode_FiveGSUpdateType: $.ASN1Decoder<FiveGSUpdateType> = $._decodeOctetString;
export const _encode_FiveGSUpdateType: $.ASN1Encoder<FiveGSUpdateType> = $._encodeOctetString;


/* eslint-enable */
