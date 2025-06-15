/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION MgtOID */
/**
 * @summary MgtOID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MgtOID  ::=  OBJECT IDENTIFIER
 * ```
 */
export type MgtOID = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION MgtOID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtOID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MgtOID */

/* START_OF_SYMBOL_DEFINITION _decode_MgtOID */
export const _decode_MgtOID = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_MgtOID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtOID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MgtOID */

/* START_OF_SYMBOL_DEFINITION _encode_MgtOID */
export const _encode_MgtOID = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_MgtOID */

/* eslint-enable */
