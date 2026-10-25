/* eslint-disable */
import { ASN1Element as _Element, type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary EncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedData  ::=  OCTET STRING
 * ```
 */
export type EncryptedData = OCTET_STRING; // OctetStringType




export const _decode_EncryptedData: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;




export const _encode_EncryptedData: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
