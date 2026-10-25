/* eslint-disable */
import { ASN1Element as _Element, type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Data  ::=  OCTET STRING
 * ```
 */
export type Data = OCTET_STRING; // OctetStringType




export const _decode_Data: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;




export const _encode_Data: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
