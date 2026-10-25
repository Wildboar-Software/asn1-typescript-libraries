/* eslint-disable */
import { ASN1Element as _Element, type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary EncryptedContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedContent  ::=  OCTET STRING
 * ```
 */
export type EncryptedContent = OCTET_STRING; // OctetStringType




export const _decode_EncryptedContent: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;




export const _encode_EncryptedContent: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
