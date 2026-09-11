/* eslint-disable */
import { OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary EncryptedPsid
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedPsid  ::=  OCTET STRING
 * ```
 */
export type EncryptedPsid = OCTET_STRING; // OctetStringType
export const _decode_EncryptedPsid: $.ASN1Decoder<EncryptedPsid> = $._decodeOctetString;
export const _encode_EncryptedPsid: $.ASN1Encoder<EncryptedPsid> = $._encodeOctetString;

/* eslint-enable */
