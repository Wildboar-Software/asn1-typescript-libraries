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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ActionTypeId,
    _decode_ActionTypeId,
    _encode_ActionTypeId,
} from '../CMIP-1/ActionTypeId.ta.mjs';


/**
 * @summary ActionInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionInfo ::= SEQUENCE {
 *   actionType     CMIP-ACTION.&id({ActionSet}),
 *   actionInfoArg
 *     [4]  CMIP-ACTION.&Value({ActionSet}{@.actionType}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ActionInfo {
  constructor(
    /**
     * @summary `actionType`.
     * @public
     * @readonly
     */
    readonly actionType: ActionTypeId,
    /**
     * @summary `actionInfoArg`.
     * @public
     * @readonly
     */
    readonly actionInfoArg: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a ActionInfo
   * @description
   *
   * This takes an `object` and converts it to a `ActionInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ActionInfo`.
   * @returns {ActionInfo}
   */
  public static _from_object(
    _o: { [_K in keyof ActionInfo]: ActionInfo[_K] }
  ): ActionInfo {
    return new ActionInfo(_o.actionType, _o.actionInfoArg);
  }
}


/**
 * @summary The Leading Root Component Types of ActionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActionInfo: $.ComponentSpec[] = [
  new $.ComponentSpec('actionType', false, $.hasAnyTag),
  new $.ComponentSpec(
    'actionInfoArg',
    true,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of ActionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActionInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ActionInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActionInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_ActionInfo: $.ASN1Decoder<ActionInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActionInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionInfo} The decoded data structure.
 */
export function _decode_ActionInfo(el: _Element) {
  if (!_cached_decoder_for_ActionInfo) {
    _cached_decoder_for_ActionInfo = function (el: _Element): ActionInfo {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let actionType!: ActionTypeId;
      let actionInfoArg: OPTIONAL<_Element>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        actionType: (_el: _Element): void => {
          actionType = _decode_ActionTypeId(_el);
        },
        actionInfoArg: (_el: _Element): void => {
          actionInfoArg = $._decode_explicit<_Element>(() => $._decodeAny)(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ActionInfo,
        _extension_additions_list_spec_for_ActionInfo,
        _root_component_type_list_2_spec_for_ActionInfo,
        undefined
      );
      return new ActionInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        actionType,
        actionInfoArg
      );
    };
  }
  return _cached_decoder_for_ActionInfo(el);
}


let _cached_encoder_for_ActionInfo: $.ASN1Encoder<ActionInfo> | null = null;


/**
 * @summary Encodes a(n) ActionInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionInfo, encoded as an ASN.1 Element.
 */
export function _encode_ActionInfo(
  value: ActionInfo,
  elGetter: $.ASN1Encoder<ActionInfo>
) {
  if (!_cached_encoder_for_ActionInfo) {
    _cached_encoder_for_ActionInfo = function (
      value: ActionInfo    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_ActionTypeId(value.actionType, $.BER),
            /* IF_ABSENT  */ value.actionInfoArg === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  4,
                  () => $._encodeAny,
                  $.BER
                )(value.actionInfoArg, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ActionInfo(value, elGetter);
}


/* eslint-enable */
