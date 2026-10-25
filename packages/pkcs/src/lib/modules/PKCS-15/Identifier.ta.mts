/* eslint-disable */
import { ASN1Element as _Element, type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Identifier  ::=  OCTET STRING (SIZE (0..pkcs15-ub-identifier))
 * ```
 */
export type Identifier = OCTET_STRING; // OctetStringType




export const _decode_Identifier: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;




export const _encode_Identifier: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
