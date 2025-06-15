/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION CRLStreamIdentifier */
/**
 * @summary CRLStreamIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CRLStreamIdentifier  ::=  INTEGER (0..MAX)
 * ```
 */
export type CRLStreamIdentifier = INTEGER;
/* END_OF_SYMBOL_DEFINITION CRLStreamIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLStreamIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CRLStreamIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_CRLStreamIdentifier */
export const _decode_CRLStreamIdentifier = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_CRLStreamIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLStreamIdentifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CRLStreamIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_CRLStreamIdentifier */
export const _encode_CRLStreamIdentifier = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_CRLStreamIdentifier */

/* eslint-enable */
