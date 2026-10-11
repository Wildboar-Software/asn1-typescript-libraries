/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceAreaList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceAreaList  ::=  OCTET STRING (SIZE(4..112))
 * ```
 */
export
type ServiceAreaList = OCTET_STRING; // OctetStringType

export const _decode_ServiceAreaList: $.ASN1Decoder<ServiceAreaList> = $._decodeOctetString;

export const _encode_ServiceAreaList: $.ASN1Encoder<ServiceAreaList> = $._encodeOctetString;


/* eslint-enable */
