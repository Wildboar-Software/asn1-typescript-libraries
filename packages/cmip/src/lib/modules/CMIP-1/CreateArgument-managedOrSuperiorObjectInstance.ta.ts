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
import {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta';
export {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta';

/* START_OF_SYMBOL_DEFINITION CreateArgument_managedOrSuperiorObjectInstance */
/**
 * @summary CreateArgument_managedOrSuperiorObjectInstance
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateArgument-managedOrSuperiorObjectInstance ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type CreateArgument_managedOrSuperiorObjectInstance =
  | { managedObjectInstance: ObjectInstance } /* CHOICE_ALT_ROOT */
  | { superiorObjectInstance: ObjectInstance } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION CreateArgument_managedOrSuperiorObjectInstance */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateArgument_managedOrSuperiorObjectInstance */
let _cached_decoder_for_CreateArgument_managedOrSuperiorObjectInstance: $.ASN1Decoder<CreateArgument_managedOrSuperiorObjectInstance> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CreateArgument_managedOrSuperiorObjectInstance */

/* START_OF_SYMBOL_DEFINITION _decode_CreateArgument_managedOrSuperiorObjectInstance */
/**
 * @summary Decodes an ASN.1 element into a(n) CreateArgument_managedOrSuperiorObjectInstance
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateArgument_managedOrSuperiorObjectInstance} The decoded data structure.
 */
export function _decode_CreateArgument_managedOrSuperiorObjectInstance(
  el: _Element
) {
  if (!_cached_decoder_for_CreateArgument_managedOrSuperiorObjectInstance) {
    _cached_decoder_for_CreateArgument_managedOrSuperiorObjectInstance = $._decode_inextensible_choice<CreateArgument_managedOrSuperiorObjectInstance>(
      {
        'CONTEXT 2': ['managedObjectInstance', _decode_ObjectInstance],
        'CONTEXT 3': ['managedObjectInstance', _decode_ObjectInstance],
        'CONTEXT 4': ['managedObjectInstance', _decode_ObjectInstance],
        'CONTEXT 8': [
          'superiorObjectInstance',
          $._decode_explicit<ObjectInstance>(() => _decode_ObjectInstance),
        ],
      }
    );
  }
  return _cached_decoder_for_CreateArgument_managedOrSuperiorObjectInstance(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CreateArgument_managedOrSuperiorObjectInstance */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateArgument_managedOrSuperiorObjectInstance */
let _cached_encoder_for_CreateArgument_managedOrSuperiorObjectInstance: $.ASN1Encoder<CreateArgument_managedOrSuperiorObjectInstance> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CreateArgument_managedOrSuperiorObjectInstance */

/* START_OF_SYMBOL_DEFINITION _encode_CreateArgument_managedOrSuperiorObjectInstance */
/**
 * @summary Encodes a(n) CreateArgument_managedOrSuperiorObjectInstance into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateArgument_managedOrSuperiorObjectInstance, encoded as an ASN.1 Element.
 */
export function _encode_CreateArgument_managedOrSuperiorObjectInstance(
  value: CreateArgument_managedOrSuperiorObjectInstance,
  elGetter: $.ASN1Encoder<CreateArgument_managedOrSuperiorObjectInstance>
) {
  if (!_cached_encoder_for_CreateArgument_managedOrSuperiorObjectInstance) {
    _cached_encoder_for_CreateArgument_managedOrSuperiorObjectInstance = $._encode_choice<CreateArgument_managedOrSuperiorObjectInstance>(
      {
        managedObjectInstance: _encode_ObjectInstance,
        superiorObjectInstance: $._encode_explicit(
          _TagClass.context,
          8,
          () => _encode_ObjectInstance,
          $.BER
        ),
      },
      $.BER
    );
  }
  return _cached_encoder_for_CreateArgument_managedOrSuperiorObjectInstance(
    value,
    elGetter
  );
}

/* END_OF_SYMBOL_DEFINITION _encode_CreateArgument_managedOrSuperiorObjectInstance */

/* eslint-enable */
