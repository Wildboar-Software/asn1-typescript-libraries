/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceLevelAAContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceLevelAAContainer  ::=  OCTET STRING (SIZE(4..65538))
 * ```
 */
export
type ServiceLevelAAContainer = OCTET_STRING; // OctetStringType
export const _decode_ServiceLevelAAContainer: $.ASN1Decoder<ServiceLevelAAContainer> = $._decodeOctetString;
export const _encode_ServiceLevelAAContainer: $.ASN1Encoder<ServiceLevelAAContainer> = $._encodeOctetString;


/* eslint-enable */
