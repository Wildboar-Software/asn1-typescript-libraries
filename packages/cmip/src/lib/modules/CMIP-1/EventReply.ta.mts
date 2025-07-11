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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '../CMIP-1/EventTypeId.ta.mjs';


/**
 * @summary EventReply
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventReply ::= SEQUENCE {
 *   eventType       CMIP-EVENT.&id({EventSet}),
 *   eventReplyInfo  [8]  CMIP-EVENT.&Value({EventSet}{@.eventType}) OPTIONAL
 * }
 * ```
 *
 */
export class EventReply {
  constructor(
    /**
     * @summary `eventType`.
     * @public
     * @readonly
     */
    readonly eventType: EventTypeId,
    /**
     * @summary `eventReplyInfo`.
     * @public
     * @readonly
     */
    readonly eventReplyInfo: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a EventReply
   * @description
   *
   * This takes an `object` and converts it to a `EventReply`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EventReply`.
   * @returns {EventReply}
   */
  public static _from_object(
    _o: { [_K in keyof EventReply]: EventReply[_K] }
  ): EventReply {
    return new EventReply(_o.eventType, _o.eventReplyInfo);
  }
}


/**
 * @summary The Leading Root Component Types of EventReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EventReply: $.ComponentSpec[] = [
  new $.ComponentSpec('eventType', false, $.hasAnyTag),
  new $.ComponentSpec(
    'eventReplyInfo',
    true,
    $.hasTag(_TagClass.context, 8)
  ),
];


/**
 * @summary The Trailing Root Component Types of EventReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EventReply: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EventReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EventReply: $.ComponentSpec[] = [];


let _cached_decoder_for_EventReply: $.ASN1Decoder<EventReply> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EventReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EventReply} The decoded data structure.
 */
export function _decode_EventReply(el: _Element): EventReply {
  if (!_cached_decoder_for_EventReply) {
    _cached_decoder_for_EventReply = function (el: _Element): EventReply {
      let eventType!: EventTypeId;
      let eventReplyInfo: OPTIONAL<_Element>;
      const callbacks: $.DecodingMap = {
        eventType: (_el: _Element): void => {
          eventType = _decode_EventTypeId(_el);
        },
        eventReplyInfo: (_el: _Element): void => {
          eventReplyInfo = $._decode_explicit<_Element>(() => $._decodeAny)(
            _el
          );
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_EventReply,
        _extension_additions_list_spec_for_EventReply,
        _root_component_type_list_2_spec_for_EventReply,
        undefined
      );
      return new EventReply (
        eventType,
        eventReplyInfo
      );
    };
  }
  return _cached_decoder_for_EventReply(el);
}


let _cached_encoder_for_EventReply: $.ASN1Encoder<EventReply> | null = null;


/**
 * @summary Encodes a(n) EventReply into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventReply, encoded as an ASN.1 Element.
 */
export function _encode_EventReply(
  value: EventReply,
  elGetter: $.ASN1Encoder<EventReply>
): _Element {
  if (!_cached_encoder_for_EventReply) {
    _cached_encoder_for_EventReply = function (
      value: EventReply    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EventTypeId(value.eventType, $.BER),
            /* IF_ABSENT  */ value.eventReplyInfo === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  8,
                  () => $._encodeAny,
                  $.BER
                )(value.eventReplyInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_EventReply(value, elGetter);
}


/* eslint-enable */
