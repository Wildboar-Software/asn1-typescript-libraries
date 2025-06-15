/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION OID */
/**
 * @summary OID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OID  ::=  OBJECT IDENTIFIER
 * ```
 */
export type OID = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION OID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OID */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OID */

/* START_OF_SYMBOL_DEFINITION _decode_OID */
export const _decode_OID = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_OID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OID */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OID */

/* START_OF_SYMBOL_DEFINITION _encode_OID */
export const _encode_OID = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_OID */

/* eslint-enable */
