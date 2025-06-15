/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/* START_OF_SYMBOL_DEFINITION KeyDerivationMethod */
/**
 * @summary KeyDerivationMethod
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyDerivationMethod  ::=  OBJECT IDENTIFIER
 * ```
 */
export type KeyDerivationMethod = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION KeyDerivationMethod */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyDerivationMethod */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_KeyDerivationMethod */

/* START_OF_SYMBOL_DEFINITION _decode_KeyDerivationMethod */
export const _decode_KeyDerivationMethod = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_KeyDerivationMethod */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyDerivationMethod */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_KeyDerivationMethod */

/* START_OF_SYMBOL_DEFINITION _encode_KeyDerivationMethod */
export const _encode_KeyDerivationMethod = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_KeyDerivationMethod */

/* eslint-enable */
