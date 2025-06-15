/* eslint-disable */
import {
  VisibleString,
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

/* START_OF_SYMBOL_DEFINITION EndpointIRI */
/**
 * @summary EndpointIRI
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EndpointIRI  ::=
 *   VisibleString
 *     (CONSTRAINED BY {
 *         --The string shall conform to the "absolute-IRI" grammar
 *         --defined in IETF RFC 3987--
 *        })
 * ```
 */
export type EndpointIRI = VisibleString; // VisibleString
/* END_OF_SYMBOL_DEFINITION EndpointIRI */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EndpointIRI */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EndpointIRI */

/* START_OF_SYMBOL_DEFINITION _decode_EndpointIRI */
export const _decode_EndpointIRI = $._decodeVisibleString;
/* END_OF_SYMBOL_DEFINITION _decode_EndpointIRI */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EndpointIRI */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EndpointIRI */

/* START_OF_SYMBOL_DEFINITION _encode_EndpointIRI */
export const _encode_EndpointIRI = $._encodeVisibleString;

/* END_OF_SYMBOL_DEFINITION _encode_EndpointIRI */

/* eslint-enable */
