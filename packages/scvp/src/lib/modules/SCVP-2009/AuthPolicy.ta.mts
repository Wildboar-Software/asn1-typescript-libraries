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

/* START_OF_SYMBOL_DEFINITION AuthPolicy */
/**
 * @summary AuthPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthPolicy  ::=  OBJECT IDENTIFIER
 * ```
 */
export type AuthPolicy = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION AuthPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthPolicy */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AuthPolicy */

/* START_OF_SYMBOL_DEFINITION _decode_AuthPolicy */
export const _decode_AuthPolicy = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_AuthPolicy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthPolicy */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AuthPolicy */

/* START_OF_SYMBOL_DEFINITION _encode_AuthPolicy */
export const _encode_AuthPolicy = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_AuthPolicy */

/* eslint-enable */
