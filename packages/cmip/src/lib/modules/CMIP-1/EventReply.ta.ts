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
import { CMIP_EVENT } from '../CMIP-1/CMIP-EVENT.oca';
export { CMIP_EVENT } from '../CMIP-1/CMIP-EVENT.oca';
import { EventSet } from '../CMIP-1/EventSet.osa';
export { EventSet } from '../CMIP-1/EventSet.osa';
import {
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '../CMIP-1/EventTypeId.ta';

/* START_OF_SYMBOL_DEFINITION EventReply */
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
 * @class
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
/* END_OF_SYMBOL_DEFINITION EventReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EventReply */
/**
 * @summary The Leading Root Component Types of EventReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EventReply: $.ComponentSpec[] = [
  new $.ComponentSpec('eventType', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'eventReplyInfo',
    true,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EventReply */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EventReply */
/**
 * @summary The Trailing Root Component Types of EventReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EventReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EventReply */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EventReply */
/**
 * @summary The Extension Addition Component Types of EventReply
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EventReply: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EventReply */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EventReply */
let _cached_decoder_for_EventReply: $.ASN1Decoder<EventReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EventReply */

/* START_OF_SYMBOL_DEFINITION _decode_EventReply */
/**
 * @summary Decodes an ASN.1 element into a(n) EventReply
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EventReply} The decoded data structure.
 */
export function _decode_EventReply(el: _Element) {
  if (!_cached_decoder_for_EventReply) {
    _cached_decoder_for_EventReply = function (el: _Element): EventReply {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let eventType!: EventTypeId;
      let eventReplyInfo: OPTIONAL<_Element>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
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
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_EventReply,
        _extension_additions_list_spec_for_EventReply,
        _root_component_type_list_2_spec_for_EventReply,
        undefined
      );
      return new EventReply /* SEQUENCE_CONSTRUCTOR_CALL */(
        eventType,
        eventReplyInfo
      );
    };
  }
  return _cached_decoder_for_EventReply(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EventReply */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EventReply */
let _cached_encoder_for_EventReply: $.ASN1Encoder<EventReply> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EventReply */

/* START_OF_SYMBOL_DEFINITION _encode_EventReply */
/**
 * @summary Encodes a(n) EventReply into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventReply, encoded as an ASN.1 Element.
 */
export function _encode_EventReply(
  value: EventReply,
  elGetter: $.ASN1Encoder<EventReply>
) {
  if (!_cached_encoder_for_EventReply) {
    _cached_encoder_for_EventReply = function (
      value: EventReply,
      elGetter: $.ASN1Encoder<EventReply>
    ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_EventReply */

/* eslint-enable */
