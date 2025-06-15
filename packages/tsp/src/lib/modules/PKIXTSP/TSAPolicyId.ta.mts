/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION TSAPolicyId */
/**
 * @summary TSAPolicyId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TSAPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type TSAPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION TSAPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TSAPolicyId */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TSAPolicyId */

/* START_OF_SYMBOL_DEFINITION _decode_TSAPolicyId */
export const _decode_TSAPolicyId = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_TSAPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TSAPolicyId */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TSAPolicyId */

/* START_OF_SYMBOL_DEFINITION _encode_TSAPolicyId */
export const _encode_TSAPolicyId = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_TSAPolicyId */

/* eslint-enable */
