/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RemoteUserID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUserID  ::=  OCTET STRING
 * ```
 */
export
type RemoteUserID = OCTET_STRING; // OctetStringType

export const _decode_RemoteUserID: $.ASN1Decoder<RemoteUserID> = $._decodeOctetString;

export const _encode_RemoteUserID: $.ASN1Encoder<RemoteUserID> = $._encodeOctetString;


/* eslint-enable */
