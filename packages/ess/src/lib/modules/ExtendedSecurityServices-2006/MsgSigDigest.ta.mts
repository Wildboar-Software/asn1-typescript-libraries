/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary MsgSigDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MsgSigDigest  ::=  OCTET STRING
 * ```
 */
export type MsgSigDigest = OCTET_STRING; // OctetStringType




export const _decode_MsgSigDigest = $._decodeOctetString;




export const _encode_MsgSigDigest = $._encodeOctetString;


/* eslint-enable */
