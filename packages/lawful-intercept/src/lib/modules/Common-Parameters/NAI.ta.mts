/* eslint-disable */
import {
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NAI
 * @description
 *
 * Network Access Identifier, in the format of IETF RFC 7542. In general
 * `username@realm`. Example: `user@homerealm.example.net`. Clause 6.47
 * gives no regular expression.
 *
 * ETSI TS 103 280 V2.7.1 (2021-11), clause 6.47, citing IETF RFC 7542.
 *
 * https://www.etsi.org/deliver/etsi_ts/103200_103299/103280/02.07.01_60/ts_103280v020701p.pdf
 *
 * https://www.rfc-editor.org/rfc/rfc7542
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NAI  ::=  UTF8String
 * ```
 */
export
type NAI = UTF8String; // UTF8String
export const _decode_NAI: $.ASN1Decoder<NAI> = $._decodeUTF8String;
export const _encode_NAI: $.ASN1Encoder<NAI> = $._encodeUTF8String;


/* eslint-enable */
