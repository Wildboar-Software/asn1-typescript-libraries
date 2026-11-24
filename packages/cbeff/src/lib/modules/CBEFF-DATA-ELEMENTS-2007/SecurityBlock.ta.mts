/* eslint-disable */
import {
  type OCTET_STRING,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary SecurityBlock
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityBlock  ::=  OCTET STRING
 * ```
 */
export type SecurityBlock = OCTET_STRING; // OctetStringType

export const _decode_SecurityBlock: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;

export const _encode_SecurityBlock: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;

/* eslint-enable */
