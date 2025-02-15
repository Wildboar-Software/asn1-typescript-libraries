/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION _enum_for_EntityType_type */
/**
 * @summary EntityType_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntityType-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export enum _enum_for_EntityType_type {
  from_ = 0,
  to = 1,
  cc = 2,
  transit = 3,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_EntityType_type */

/* START_OF_SYMBOL_DEFINITION EntityType_type */
/**
 * @summary EntityType_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntityType-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type EntityType_type = _enum_for_EntityType_type;
/* END_OF_SYMBOL_DEFINITION EntityType_type */

/* START_OF_SYMBOL_DEFINITION EntityType_type */
/**
 * @summary EntityType_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntityType-type ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export const EntityType_type = _enum_for_EntityType_type;
/* END_OF_SYMBOL_DEFINITION EntityType_type */

/* START_OF_SYMBOL_DEFINITION EntityType_type_from_ */
/**
 * @summary EntityType_type_from_
 * @constant
 * @type {number}
 */
export const EntityType_type_from_: EntityType_type =
  EntityType_type.from_; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EntityType_type_from_ */

/* START_OF_SYMBOL_DEFINITION from_ */
/**
 * @summary from_
 * @constant
 * @type {number}
 */
export const from_: EntityType_type =
  EntityType_type.from_; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION from_ */

/* START_OF_SYMBOL_DEFINITION EntityType_type_to */
/**
 * @summary EntityType_type_to
 * @constant
 * @type {number}
 */
export const EntityType_type_to: EntityType_type =
  EntityType_type.to; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EntityType_type_to */

/* START_OF_SYMBOL_DEFINITION to */
/**
 * @summary to
 * @constant
 * @type {number}
 */
export const to: EntityType_type =
  EntityType_type.to; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION to */

/* START_OF_SYMBOL_DEFINITION EntityType_type_cc */
/**
 * @summary EntityType_type_cc
 * @constant
 * @type {number}
 */
export const EntityType_type_cc: EntityType_type =
  EntityType_type.cc; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EntityType_type_cc */

/* START_OF_SYMBOL_DEFINITION cc */
/**
 * @summary cc
 * @constant
 * @type {number}
 */
export const cc: EntityType_type =
  EntityType_type.cc; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION cc */

/* START_OF_SYMBOL_DEFINITION EntityType_type_transit */
/**
 * @summary EntityType_type_transit
 * @constant
 * @type {number}
 */
export const EntityType_type_transit: EntityType_type =
  EntityType_type.transit; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION EntityType_type_transit */

/* START_OF_SYMBOL_DEFINITION transit */
/**
 * @summary transit
 * @constant
 * @type {number}
 */
export const transit: EntityType_type =
  EntityType_type.transit; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION transit */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntityType_type */
let _cached_decoder_for_EntityType_type: $.ASN1Decoder<EntityType_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntityType_type */

/* START_OF_SYMBOL_DEFINITION _decode_EntityType_type */
/**
 * @summary Decodes an ASN.1 element into a(n) EntityType_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntityType_type} The decoded data structure.
 */
export function _decode_EntityType_type(el: _Element) {
  if (!_cached_decoder_for_EntityType_type) {
    _cached_decoder_for_EntityType_type = $._decodeEnumerated;
  }
  return _cached_decoder_for_EntityType_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntityType_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntityType_type */
let _cached_encoder_for_EntityType_type: $.ASN1Encoder<EntityType_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntityType_type */

/* START_OF_SYMBOL_DEFINITION _encode_EntityType_type */
/**
 * @summary Encodes a(n) EntityType_type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityType_type, encoded as an ASN.1 Element.
 */
export function _encode_EntityType_type(
  value: EntityType_type,
  elGetter: $.ASN1Encoder<EntityType_type>
) {
  if (!_cached_encoder_for_EntityType_type) {
    _cached_encoder_for_EntityType_type = $._encodeEnumerated;
  }
  return _cached_encoder_for_EntityType_type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntityType_type */

/* eslint-enable */
