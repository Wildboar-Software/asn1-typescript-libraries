/* eslint-disable */
import {
  OBJECT_IDENTIFIER,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION Mechanism_name */
/**
 * @summary Mechanism_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Mechanism-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Mechanism_name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Mechanism_name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Mechanism_name */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Mechanism_name */

/* START_OF_SYMBOL_DEFINITION _decode_Mechanism_name */
export const _decode_Mechanism_name = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_Mechanism_name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Mechanism_name */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Mechanism_name */

/* START_OF_SYMBOL_DEFINITION _encode_Mechanism_name */
export const _encode_Mechanism_name = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_Mechanism_name */

/* eslint-enable */
