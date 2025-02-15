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

/* START_OF_SYMBOL_DEFINITION Scope_Item_retrieval_scope */
/**
 * @summary Scope_Item_retrieval_scope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Scope-Item-retrieval-scope ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type Scope_Item_retrieval_scope = INTEGER;
/* END_OF_SYMBOL_DEFINITION Scope_Item_retrieval_scope */

/* START_OF_SYMBOL_DEFINITION Scope_Item_retrieval_scope_child */
/**
 * @summary Scope_Item_retrieval_scope_child
 * @constant
 * @type {number}
 */
export const Scope_Item_retrieval_scope_child: Scope_Item_retrieval_scope = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Scope_Item_retrieval_scope_child */

/* START_OF_SYMBOL_DEFINITION child */
/**
 * @summary Scope_Item_retrieval_scope_child
 * @constant
 * @type {number}
 */
export const child: Scope_Item_retrieval_scope = Scope_Item_retrieval_scope_child; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION child */

/* START_OF_SYMBOL_DEFINITION Scope_Item_retrieval_scope_all */
/**
 * @summary Scope_Item_retrieval_scope_all
 * @constant
 * @type {number}
 */
export const Scope_Item_retrieval_scope_all: Scope_Item_retrieval_scope = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Scope_Item_retrieval_scope_all */

/* START_OF_SYMBOL_DEFINITION all */
/**
 * @summary Scope_Item_retrieval_scope_all
 * @constant
 * @type {number}
 */
export const all: Scope_Item_retrieval_scope = Scope_Item_retrieval_scope_all; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION all */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Scope_Item_retrieval_scope */
let _cached_decoder_for_Scope_Item_retrieval_scope: $.ASN1Decoder<Scope_Item_retrieval_scope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Scope_Item_retrieval_scope */

/* START_OF_SYMBOL_DEFINITION _decode_Scope_Item_retrieval_scope */
/**
 * @summary Decodes an ASN.1 element into a(n) Scope_Item_retrieval_scope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Scope_Item_retrieval_scope} The decoded data structure.
 */
export function _decode_Scope_Item_retrieval_scope(el: _Element) {
  if (!_cached_decoder_for_Scope_Item_retrieval_scope) {
    _cached_decoder_for_Scope_Item_retrieval_scope = $._decodeInteger;
  }
  return _cached_decoder_for_Scope_Item_retrieval_scope(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Scope_Item_retrieval_scope */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Scope_Item_retrieval_scope */
let _cached_encoder_for_Scope_Item_retrieval_scope: $.ASN1Encoder<Scope_Item_retrieval_scope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Scope_Item_retrieval_scope */

/* START_OF_SYMBOL_DEFINITION _encode_Scope_Item_retrieval_scope */
/**
 * @summary Encodes a(n) Scope_Item_retrieval_scope into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Scope_Item_retrieval_scope, encoded as an ASN.1 Element.
 */
export function _encode_Scope_Item_retrieval_scope(
  value: Scope_Item_retrieval_scope,
  elGetter: $.ASN1Encoder<Scope_Item_retrieval_scope>
) {
  if (!_cached_encoder_for_Scope_Item_retrieval_scope) {
    _cached_encoder_for_Scope_Item_retrieval_scope = $._encodeInteger;
  }
  return _cached_encoder_for_Scope_Item_retrieval_scope(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Scope_Item_retrieval_scope */

/* eslint-enable */
