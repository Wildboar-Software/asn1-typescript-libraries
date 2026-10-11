/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RemoteUEIPInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEIPInformation  ::=  OCTET STRING
 * ```
 */
export
type RemoteUEIPInformation = OCTET_STRING; // OctetStringType

export const _decode_RemoteUEIPInformation: $.ASN1Decoder<RemoteUEIPInformation> = $._decodeOctetString;

export const _encode_RemoteUEIPInformation: $.ASN1Encoder<RemoteUEIPInformation> = $._encodeOctetString;


/* eslint-enable */
