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
import { CMIP_ACTION } from '../CMIP-1/CMIP-ACTION.oca.mjs';
import {
    _decode_ActionTypeId,
    _encode_ActionTypeId,
} from '../CMIP-1/ActionTypeId.ta.mjs';


/**
 * @summary ActionReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActionReply ::= SEQUENCE {
 *   actionType       CMIP-ACTION.&id({ActionSet}),
 *   actionReplyInfo  [4]  CMIP-ACTION.&Value({ActionSet}{@.actionType})
 * }
 * ```
 *
 * @class
 */
export class ActionReply {
  constructor(
    /**
     * @summary `actionType`.
     * @public
     * @readonly
     */
    readonly actionType: CMIP_ACTION["&id"],
    /**
     * @summary `actionReplyInfo`.
     * @public
     * @readonly
     */
    readonly actionReplyInfo: _Element
  ) {}

  /**
   * @summary Restructures an object into a ActionReply
   * @description
   *
   * This takes an `object` and converts it to a `ActionReply`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ActionReply`.
   * @returns {ActionReply}
   */
  public static _from_object(
    _o: { [_K in keyof ActionReply]: ActionReply[_K] }
  ): ActionReply {
    return new ActionReply(_o.actionType, _o.actionReplyInfo);
  }
}


/**
 * @summary The Leading Root Component Types of ActionReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ActionReply: $.ComponentSpec[] = [
  new $.ComponentSpec('actionType', false, $.hasAnyTag),
  new $.ComponentSpec(
    'actionReplyInfo',
    false,
    $.hasTag(_TagClass.context, 4)
  ),
];


/**
 * @summary The Trailing Root Component Types of ActionReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ActionReply: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ActionReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ActionReply: $.ComponentSpec[] = [];


let _cached_decoder_for_ActionReply: $.ASN1Decoder<ActionReply> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ActionReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActionReply} The decoded data structure.
 */
export function _decode_ActionReply(el: _Element) {
  if (!_cached_decoder_for_ActionReply) {
    _cached_decoder_for_ActionReply = function (el: _Element): ActionReply {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'ActionReply contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'actionType';
      sequence[1].name = 'actionReplyInfo';
      let actionType!: CMIP_ACTION["&id"];
      let actionReplyInfo!: _Element;
      actionType = _decode_ActionTypeId(sequence[0]);
      actionReplyInfo = $._decode_explicit<_Element>(() => $._decodeAny)(
        sequence[1]
      );
      return new ActionReply(actionType, actionReplyInfo);
    };
  }
  return _cached_decoder_for_ActionReply(el);
}


let _cached_encoder_for_ActionReply: $.ASN1Encoder<ActionReply> | null = null;


/**
 * @summary Encodes a(n) ActionReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActionReply, encoded as an ASN.1 Element.
 */
export function _encode_ActionReply(
  value: ActionReply,
  elGetter: $.ASN1Encoder<ActionReply>
) {
  if (!_cached_encoder_for_ActionReply) {
    _cached_encoder_for_ActionReply = function (
      value: ActionReply    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_ActionTypeId(value.actionType, $.BER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              4,
              () => $._encodeAny,
              $.BER
            )(value.actionReplyInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ActionReply(value, elGetter);
}


/* eslint-enable */
