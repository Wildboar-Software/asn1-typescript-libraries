/* eslint-disable */
import {
  OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION BioAPI_DATA */
/**
 * @summary BioAPI_DATA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DATA  ::=  OCTET STRING(SIZE (0..max-unsigned-int))
 * ```
 */
export type BioAPI_DATA = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION BioAPI_DATA */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DATA */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_DATA */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_DATA */
export const _decode_BioAPI_DATA = $._decodeOctetString;
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_DATA */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DATA */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_DATA */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_DATA */
export const _encode_BioAPI_DATA = $._encodeOctetString;

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_DATA */

/* eslint-enable */
