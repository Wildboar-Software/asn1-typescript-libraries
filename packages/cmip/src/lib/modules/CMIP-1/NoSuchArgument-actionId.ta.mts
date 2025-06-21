/* eslint-disable */
import {
  OPTIONAL,
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
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta.mjs';
import {
    ActionTypeId,
    _decode_ActionTypeId,
    _encode_ActionTypeId,
} from '../CMIP-1/ActionTypeId.ta.mjs';


/**
 * @summary NoSuchArgument_actionId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchArgument-actionId ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class NoSuchArgument_actionId {
  constructor(
    /**
     * @summary `managedObjectClass`.
     * @public
     * @readonly
     */
    readonly managedObjectClass: OPTIONAL<ObjectClass>,
    /**
     * @summary `actionType`.
     * @public
     * @readonly
     */
    readonly actionType: ActionTypeId
  ) {}

  /**
   * @summary Restructures an object into a NoSuchArgument_actionId
   * @description
   *
   * This takes an `object` and converts it to a `NoSuchArgument_actionId`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NoSuchArgument_actionId`.
   * @returns {NoSuchArgument_actionId}
   */
  public static _from_object(
    _o: { [_K in keyof NoSuchArgument_actionId]: NoSuchArgument_actionId[_K] }
  ): NoSuchArgument_actionId {
    return new NoSuchArgument_actionId(_o.managedObjectClass, _o.actionType);
  }
}


/**
 * @summary The Leading Root Component Types of NoSuchArgument_actionId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NoSuchArgument_actionId: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    true,
    $.hasAnyTag
  ),
  new $.ComponentSpec('actionType', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of NoSuchArgument_actionId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoSuchArgument_actionId: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of NoSuchArgument_actionId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoSuchArgument_actionId: $.ComponentSpec[] = [];


let _cached_decoder_for_NoSuchArgument_actionId: $.ASN1Decoder<NoSuchArgument_actionId> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchArgument_actionId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchArgument_actionId} The decoded data structure.
 */
export function _decode_NoSuchArgument_actionId(el: _Element) {
  if (!_cached_decoder_for_NoSuchArgument_actionId) {
    _cached_decoder_for_NoSuchArgument_actionId = function (
      el: _Element
    ): NoSuchArgument_actionId {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let actionType!: ActionTypeId;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        managedObjectClass: (_el: _Element): void => {
          managedObjectClass = _decode_ObjectClass(_el);
        },
        actionType: (_el: _Element): void => {
          actionType = _decode_ActionTypeId(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_NoSuchArgument_actionId,
        _extension_additions_list_spec_for_NoSuchArgument_actionId,
        _root_component_type_list_2_spec_for_NoSuchArgument_actionId,
        undefined
      );
      return new NoSuchArgument_actionId /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedObjectClass,
        actionType
      );
    };
  }
  return _cached_decoder_for_NoSuchArgument_actionId(el);
}


let _cached_encoder_for_NoSuchArgument_actionId: $.ASN1Encoder<NoSuchArgument_actionId> | null = null;


/**
 * @summary Encodes a(n) NoSuchArgument_actionId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchArgument_actionId, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchArgument_actionId(
  value: NoSuchArgument_actionId,
  elGetter: $.ASN1Encoder<NoSuchArgument_actionId>
) {
  if (!_cached_encoder_for_NoSuchArgument_actionId) {
    _cached_encoder_for_NoSuchArgument_actionId = function (
      value: NoSuchArgument_actionId    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.managedObjectClass === undefined
              ? undefined
              : _encode_ObjectClass(value.managedObjectClass, $.BER),
            /* REQUIRED   */ _encode_ActionTypeId(value.actionType, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NoSuchArgument_actionId(value, elGetter);
}


/* eslint-enable */
