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
 * @summary InvalidArgumentValue_eventValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InvalidArgumentValue-eventValue ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class InvalidArgumentValue_eventValue {
  constructor(
    /**
     * @summary `eventType`.
     * @public
     * @readonly
     */
    readonly eventType: EventTypeId,
    /**
     * @summary `eventInfo`.
     * @public
     * @readonly
     */
    readonly eventInfo: OPTIONAL<_Element>
  ) {}

  /**
   * @summary Restructures an object into a InvalidArgumentValue_eventValue
   * @description
   *
   * This takes an `object` and converts it to a `InvalidArgumentValue_eventValue`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `InvalidArgumentValue_eventValue`.
   * @returns {InvalidArgumentValue_eventValue}
   */
  public static _from_object(
    _o: {
      [_K in keyof InvalidArgumentValue_eventValue]: InvalidArgumentValue_eventValue[_K];
    }
  ): InvalidArgumentValue_eventValue {
    return new InvalidArgumentValue_eventValue(_o.eventType, _o.eventInfo);
  }
}


/**
 * @summary The Leading Root Component Types of InvalidArgumentValue_eventValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InvalidArgumentValue_eventValue: $.ComponentSpec[] = [
  new $.ComponentSpec('eventType', false, $.hasAnyTag),
  new $.ComponentSpec(
    'eventInfo',
    true,
    $.hasTag(_TagClass.context, 8)
  ),
];


/**
 * @summary The Trailing Root Component Types of InvalidArgumentValue_eventValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InvalidArgumentValue_eventValue: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of InvalidArgumentValue_eventValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InvalidArgumentValue_eventValue: $.ComponentSpec[] = [];


let _cached_decoder_for_InvalidArgumentValue_eventValue: $.ASN1Decoder<InvalidArgumentValue_eventValue> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) InvalidArgumentValue_eventValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvalidArgumentValue_eventValue} The decoded data structure.
 */
export function _decode_InvalidArgumentValue_eventValue(el: _Element): InvalidArgumentValue_eventValue {
  if (!_cached_decoder_for_InvalidArgumentValue_eventValue) {
    _cached_decoder_for_InvalidArgumentValue_eventValue = function (
      el: _Element
    ): InvalidArgumentValue_eventValue {
      let eventType!: EventTypeId;
      let eventInfo: OPTIONAL<_Element>;
      const callbacks: $.DecodingMap = {
        eventType: (_el: _Element): void => {
          eventType = _decode_EventTypeId(_el);
        },
        eventInfo: (_el: _Element): void => {
          eventInfo = $._decode_explicit<_Element>(() => $._decodeAny)(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_InvalidArgumentValue_eventValue,
        _extension_additions_list_spec_for_InvalidArgumentValue_eventValue,
        _root_component_type_list_2_spec_for_InvalidArgumentValue_eventValue,
        undefined
      );
      return new InvalidArgumentValue_eventValue (
        eventType,
        eventInfo
      );
    };
  }
  return _cached_decoder_for_InvalidArgumentValue_eventValue(el);
}


let _cached_encoder_for_InvalidArgumentValue_eventValue: $.ASN1Encoder<InvalidArgumentValue_eventValue> | null = null;


/**
 * @summary Encodes a(n) InvalidArgumentValue_eventValue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidArgumentValue_eventValue, encoded as an ASN.1 Element.
 */
export function _encode_InvalidArgumentValue_eventValue(
  value: InvalidArgumentValue_eventValue,
  elGetter: $.ASN1Encoder<InvalidArgumentValue_eventValue>
): _Element {
  if (!_cached_encoder_for_InvalidArgumentValue_eventValue) {
    _cached_encoder_for_InvalidArgumentValue_eventValue = function (
      value: InvalidArgumentValue_eventValue    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_EventTypeId(value.eventType, $.BER),
            /* IF_ABSENT  */ value.eventInfo === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  8,
                  () => $._encodeAny,
                  $.BER
                )(value.eventInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_InvalidArgumentValue_eventValue(value, elGetter);
}


/* eslint-enable */
