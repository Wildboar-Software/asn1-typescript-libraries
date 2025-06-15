/* eslint-disable */
import {
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
import {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta.mjs';

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


let _cached_decoder_for_CreateArgument_managedOrSuperiorObjectInstance: $.ASN1Decoder<CreateArgument_managedOrSuperiorObjectInstance> | null = null;


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


let _cached_encoder_for_CreateArgument_managedOrSuperiorObjectInstance: $.ASN1Encoder<CreateArgument_managedOrSuperiorObjectInstance> | null = null;


/**
 * @summary Encodes a(n) CreateArgument_managedOrSuperiorObjectInstance into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
