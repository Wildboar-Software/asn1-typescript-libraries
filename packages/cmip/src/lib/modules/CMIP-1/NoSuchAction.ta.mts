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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
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
 * @summary NoSuchAction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchAction ::= SEQUENCE {
 *   managedObjectClass  ObjectClass,
 *   actionType          CMIP-ACTION.&id({ActionSet}),
 *   ...
 * }
 * ```
 *
 * @class
 */
export class NoSuchAction {
  constructor(
    /**
     * @summary `managedObjectClass`.
     * @public
     * @readonly
     */
    readonly managedObjectClass: ObjectClass,
    /**
     * @summary `actionType`.
     * @public
     * @readonly
     */
    readonly actionType: ActionTypeId,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a NoSuchAction
   * @description
   *
   * This takes an `object` and converts it to a `NoSuchAction`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NoSuchAction`.
   * @returns {NoSuchAction}
   */
  public static _from_object(
    _o: { [_K in keyof NoSuchAction]: NoSuchAction[_K] }
  ): NoSuchAction {
    return new NoSuchAction(
      _o.managedObjectClass,
      _o.actionType,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of NoSuchAction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NoSuchAction: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    false,
    $.hasAnyTag
  ),
  new $.ComponentSpec('actionType', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of NoSuchAction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoSuchAction: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of NoSuchAction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoSuchAction: $.ComponentSpec[] = [];


let _cached_decoder_for_NoSuchAction: $.ASN1Decoder<NoSuchAction> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchAction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchAction} The decoded data structure.
 */
export function _decode_NoSuchAction(el: _Element) {
  if (!_cached_decoder_for_NoSuchAction) {
    _cached_decoder_for_NoSuchAction = function (el: _Element): NoSuchAction {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'NoSuchAction contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'managedObjectClass';
      sequence[1].name = 'actionType';
      let managedObjectClass!: ObjectClass;
      let actionType!: ActionTypeId;
      managedObjectClass = _decode_ObjectClass(sequence[0]);
      actionType = _decode_ActionTypeId(sequence[1]);
      return new NoSuchAction(
        managedObjectClass,
        actionType,
        sequence.slice(2)
      );
    };
  }
  return _cached_decoder_for_NoSuchAction(el);
}


let _cached_encoder_for_NoSuchAction: $.ASN1Encoder<NoSuchAction> | null = null;


/**
 * @summary Encodes a(n) NoSuchAction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchAction, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchAction(
  value: NoSuchAction,
  elGetter: $.ASN1Encoder<NoSuchAction>
) {
  if (!_cached_encoder_for_NoSuchAction) {
    _cached_encoder_for_NoSuchAction = function (
      value: NoSuchAction    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ _encode_ObjectClass(
                value.managedObjectClass,
                $.BER
              ),
              /* REQUIRED   */ _encode_ActionTypeId(value.actionType, $.BER),
            ],
            value._unrecognizedExtensionsList
              ? value._unrecognizedExtensionsList
              : []
          )
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NoSuchAction(value, elGetter);
}


/* eslint-enable */
