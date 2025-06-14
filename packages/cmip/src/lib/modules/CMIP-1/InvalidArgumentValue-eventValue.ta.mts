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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '../CMIP-1/EventTypeId.ta.mjs';

/* START_OF_SYMBOL_DEFINITION InvalidArgumentValue_eventValue */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION InvalidArgumentValue_eventValue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InvalidArgumentValue_eventValue */
/**
 * @summary The Leading Root Component Types of InvalidArgumentValue_eventValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_InvalidArgumentValue_eventValue: $.ComponentSpec[] = [
  new $.ComponentSpec('eventType', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'eventInfo',
    true,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_InvalidArgumentValue_eventValue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InvalidArgumentValue_eventValue */
/**
 * @summary The Trailing Root Component Types of InvalidArgumentValue_eventValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_InvalidArgumentValue_eventValue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_InvalidArgumentValue_eventValue */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InvalidArgumentValue_eventValue */
/**
 * @summary The Extension Addition Component Types of InvalidArgumentValue_eventValue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_InvalidArgumentValue_eventValue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_InvalidArgumentValue_eventValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InvalidArgumentValue_eventValue */
let _cached_decoder_for_InvalidArgumentValue_eventValue: $.ASN1Decoder<InvalidArgumentValue_eventValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InvalidArgumentValue_eventValue */

/* START_OF_SYMBOL_DEFINITION _decode_InvalidArgumentValue_eventValue */
/**
 * @summary Decodes an ASN.1 element into a(n) InvalidArgumentValue_eventValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InvalidArgumentValue_eventValue} The decoded data structure.
 */
export function _decode_InvalidArgumentValue_eventValue(el: _Element) {
  if (!_cached_decoder_for_InvalidArgumentValue_eventValue) {
    _cached_decoder_for_InvalidArgumentValue_eventValue = function (
      el: _Element
    ): InvalidArgumentValue_eventValue {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let eventType!: EventTypeId;
      let eventInfo: OPTIONAL<_Element>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        eventType: (_el: _Element): void => {
          eventType = _decode_EventTypeId(_el);
        },
        eventInfo: (_el: _Element): void => {
          eventInfo = $._decode_explicit<_Element>(() => $._decodeAny)(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_InvalidArgumentValue_eventValue,
        _extension_additions_list_spec_for_InvalidArgumentValue_eventValue,
        _root_component_type_list_2_spec_for_InvalidArgumentValue_eventValue,
        undefined
      );
      return new InvalidArgumentValue_eventValue /* SEQUENCE_CONSTRUCTOR_CALL */(
        eventType,
        eventInfo
      );
    };
  }
  return _cached_decoder_for_InvalidArgumentValue_eventValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InvalidArgumentValue_eventValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InvalidArgumentValue_eventValue */
let _cached_encoder_for_InvalidArgumentValue_eventValue: $.ASN1Encoder<InvalidArgumentValue_eventValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InvalidArgumentValue_eventValue */

/* START_OF_SYMBOL_DEFINITION _encode_InvalidArgumentValue_eventValue */
/**
 * @summary Encodes a(n) InvalidArgumentValue_eventValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvalidArgumentValue_eventValue, encoded as an ASN.1 Element.
 */
export function _encode_InvalidArgumentValue_eventValue(
  value: InvalidArgumentValue_eventValue,
  elGetter: $.ASN1Encoder<InvalidArgumentValue_eventValue>
) {
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

/* END_OF_SYMBOL_DEFINITION _encode_InvalidArgumentValue_eventValue */

/* eslint-enable */
