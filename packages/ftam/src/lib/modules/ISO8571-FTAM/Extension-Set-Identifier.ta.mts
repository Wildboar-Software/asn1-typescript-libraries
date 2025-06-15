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

/* START_OF_SYMBOL_DEFINITION Extension_Set_Identifier */
/**
 * @summary Extension_Set_Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Extension-Set-Identifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Extension_Set_Identifier = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Extension_Set_Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Extension_Set_Identifier */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Extension_Set_Identifier */

/* START_OF_SYMBOL_DEFINITION _decode_Extension_Set_Identifier */
export const _decode_Extension_Set_Identifier = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_Extension_Set_Identifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Extension_Set_Identifier */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Extension_Set_Identifier */

/* START_OF_SYMBOL_DEFINITION _encode_Extension_Set_Identifier */
export const _encode_Extension_Set_Identifier = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_Extension_Set_Identifier */

/* eslint-enable */
