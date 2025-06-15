/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION ArchiveCutoff */
/**
 * @summary ArchiveCutoff
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ArchiveCutoff  ::=  GeneralizedTime
 * ```
 */
export type ArchiveCutoff = GeneralizedTime; // GeneralizedTime
/* END_OF_SYMBOL_DEFINITION ArchiveCutoff */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ArchiveCutoff */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ArchiveCutoff */

/* START_OF_SYMBOL_DEFINITION _decode_ArchiveCutoff */
export const _decode_ArchiveCutoff = $._decodeGeneralizedTime;
/* END_OF_SYMBOL_DEFINITION _decode_ArchiveCutoff */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ArchiveCutoff */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ArchiveCutoff */

/* START_OF_SYMBOL_DEFINITION _encode_ArchiveCutoff */
export const _encode_ArchiveCutoff = $._encodeGeneralizedTime;

/* END_OF_SYMBOL_DEFINITION _encode_ArchiveCutoff */

/* eslint-enable */
