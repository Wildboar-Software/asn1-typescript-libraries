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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '../CMIP-1/EventTypeId.ta.mjs';

/* START_OF_SYMBOL_DEFINITION NoSuchArgument_eventId */
/**
 * @summary NoSuchArgument_eventId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchArgument-eventId ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class NoSuchArgument_eventId {
  constructor(
    /**
     * @summary `managedObjectClass`.
     * @public
     * @readonly
     */
    readonly managedObjectClass: OPTIONAL<ObjectClass>,
    /**
     * @summary `eventType`.
     * @public
     * @readonly
     */
    readonly eventType: EventTypeId
  ) {}

  /**
   * @summary Restructures an object into a NoSuchArgument_eventId
   * @description
   *
   * This takes an `object` and converts it to a `NoSuchArgument_eventId`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NoSuchArgument_eventId`.
   * @returns {NoSuchArgument_eventId}
   */
  public static _from_object(
    _o: { [_K in keyof NoSuchArgument_eventId]: NoSuchArgument_eventId[_K] }
  ): NoSuchArgument_eventId {
    return new NoSuchArgument_eventId(_o.managedObjectClass, _o.eventType);
  }
}
/* END_OF_SYMBOL_DEFINITION NoSuchArgument_eventId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoSuchArgument_eventId */
/**
 * @summary The Leading Root Component Types of NoSuchArgument_eventId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NoSuchArgument_eventId: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    true,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec('eventType', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_NoSuchArgument_eventId */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoSuchArgument_eventId */
/**
 * @summary The Trailing Root Component Types of NoSuchArgument_eventId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoSuchArgument_eventId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_NoSuchArgument_eventId */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoSuchArgument_eventId */
/**
 * @summary The Extension Addition Component Types of NoSuchArgument_eventId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoSuchArgument_eventId: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_NoSuchArgument_eventId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchArgument_eventId */
let _cached_decoder_for_NoSuchArgument_eventId: $.ASN1Decoder<NoSuchArgument_eventId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NoSuchArgument_eventId */

/* START_OF_SYMBOL_DEFINITION _decode_NoSuchArgument_eventId */
/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchArgument_eventId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchArgument_eventId} The decoded data structure.
 */
export function _decode_NoSuchArgument_eventId(el: _Element) {
  if (!_cached_decoder_for_NoSuchArgument_eventId) {
    _cached_decoder_for_NoSuchArgument_eventId = function (
      el: _Element
    ): NoSuchArgument_eventId {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let eventType!: EventTypeId;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        managedObjectClass: (_el: _Element): void => {
          managedObjectClass = _decode_ObjectClass(_el);
        },
        eventType: (_el: _Element): void => {
          eventType = _decode_EventTypeId(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_NoSuchArgument_eventId,
        _extension_additions_list_spec_for_NoSuchArgument_eventId,
        _root_component_type_list_2_spec_for_NoSuchArgument_eventId,
        undefined
      );
      return new NoSuchArgument_eventId /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedObjectClass,
        eventType
      );
    };
  }
  return _cached_decoder_for_NoSuchArgument_eventId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NoSuchArgument_eventId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchArgument_eventId */
let _cached_encoder_for_NoSuchArgument_eventId: $.ASN1Encoder<NoSuchArgument_eventId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NoSuchArgument_eventId */

/* START_OF_SYMBOL_DEFINITION _encode_NoSuchArgument_eventId */
/**
 * @summary Encodes a(n) NoSuchArgument_eventId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchArgument_eventId, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchArgument_eventId(
  value: NoSuchArgument_eventId,
  elGetter: $.ASN1Encoder<NoSuchArgument_eventId>
) {
  if (!_cached_encoder_for_NoSuchArgument_eventId) {
    _cached_encoder_for_NoSuchArgument_eventId = function (
      value: NoSuchArgument_eventId    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.managedObjectClass === undefined
              ? undefined
              : _encode_ObjectClass(value.managedObjectClass, $.BER),
            /* REQUIRED   */ _encode_EventTypeId(value.eventType, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_NoSuchArgument_eventId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NoSuchArgument_eventId */

/* eslint-enable */
