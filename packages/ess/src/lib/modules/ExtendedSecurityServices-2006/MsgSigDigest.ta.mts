/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION MsgSigDigest */
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
/* END_OF_SYMBOL_DEFINITION MsgSigDigest */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MsgSigDigest */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MsgSigDigest */

/* START_OF_SYMBOL_DEFINITION _decode_MsgSigDigest */
export const _decode_MsgSigDigest = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_MsgSigDigest */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MsgSigDigest */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MsgSigDigest */

/* START_OF_SYMBOL_DEFINITION _encode_MsgSigDigest */
export const _encode_MsgSigDigest = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_MsgSigDigest */

/* eslint-enable */
