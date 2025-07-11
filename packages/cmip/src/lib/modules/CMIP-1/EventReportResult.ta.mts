/* eslint-disable */
import {
  OPTIONAL,
  GeneralizedTime,
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
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta.mjs';
import {
  EventReply,
  _decode_EventReply,
  _encode_EventReply,
} from '../CMIP-1/EventReply.ta.mjs';

/**
 * @summary EventReportResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventReportResult ::= SEQUENCE {
 *   managedObjectClass     ObjectClass OPTIONAL,
 *   managedObjectInstance  ObjectInstance OPTIONAL,
 *   currentTime            [5] IMPLICIT GeneralizedTime OPTIONAL,
 *   eventReply             EventReply OPTIONAL,
 *   ...
 * }
 * ```
 *
 */
export class EventReportResult {
  constructor(
    /**
     * @summary `managedObjectClass`.
     * @public
     * @readonly
     */
    readonly managedObjectClass: OPTIONAL<ObjectClass>,
    /**
     * @summary `managedObjectInstance`.
     * @public
     * @readonly
     */
    readonly managedObjectInstance: OPTIONAL<ObjectInstance>,
    /**
     * @summary `currentTime`.
     * @public
     * @readonly
     */
    readonly currentTime: OPTIONAL<GeneralizedTime>,
    /**
     * @summary `eventReply`.
     * @public
     * @readonly
     */
    readonly eventReply: OPTIONAL<EventReply>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a EventReportResult
   * @description
   *
   * This takes an `object` and converts it to a `EventReportResult`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EventReportResult`.
   * @returns {EventReportResult}
   */
  public static _from_object(
    _o: { [_K in keyof EventReportResult]: EventReportResult[_K] }
  ): EventReportResult {
    return new EventReportResult(
      _o.managedObjectClass,
      _o.managedObjectInstance,
      _o.currentTime,
      _o.eventReply,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of EventReportResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EventReportResult: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    true,
    $.hasAnyTag
  ),
  new $.ComponentSpec(
    'managedObjectInstance',
    true,
    $.hasAnyTag
  ),
  new $.ComponentSpec(
    'currentTime',
    true,
    $.hasTag(_TagClass.context, 5)
  ),
  new $.ComponentSpec(
    'eventReply',
    true,
    $.hasTag(_TagClass.universal, 16)
  ),
];


/**
 * @summary The Trailing Root Component Types of EventReportResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EventReportResult: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EventReportResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EventReportResult: $.ComponentSpec[] = [];


let _cached_decoder_for_EventReportResult: $.ASN1Decoder<EventReportResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EventReportResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EventReportResult} The decoded data structure.
 */
export function _decode_EventReportResult(el: _Element): EventReportResult {
  if (!_cached_decoder_for_EventReportResult) {
    _cached_decoder_for_EventReportResult = function (
      el: _Element
    ): EventReportResult {
      let managedObjectClass: OPTIONAL<ObjectClass>;
      let managedObjectInstance: OPTIONAL<ObjectInstance>;
      let currentTime: OPTIONAL<GeneralizedTime>;
      let eventReply: OPTIONAL<EventReply>;
      let _unrecognizedExtensionsList: _Element[] = [];
      const callbacks: $.DecodingMap = {
        managedObjectClass: (_el: _Element): void => {
          managedObjectClass = _decode_ObjectClass(_el);
        },
        managedObjectInstance: (_el: _Element): void => {
          managedObjectInstance = _decode_ObjectInstance(_el);
        },
        currentTime: (_el: _Element): void => {
          currentTime = $._decode_implicit<GeneralizedTime>(
            () => $._decodeGeneralizedTime
          )(_el);
        },
        eventReply: (_el: _Element): void => {
          eventReply = _decode_EventReply(_el);
        },
      };
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_EventReportResult,
        _extension_additions_list_spec_for_EventReportResult,
        _root_component_type_list_2_spec_for_EventReportResult,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new EventReportResult (
        managedObjectClass,
        managedObjectInstance,
        currentTime,
        eventReply,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_EventReportResult(el);
}


let _cached_encoder_for_EventReportResult: $.ASN1Encoder<EventReportResult> | null = null;


/**
 * @summary Encodes a(n) EventReportResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventReportResult, encoded as an ASN.1 Element.
 */
export function _encode_EventReportResult(
  value: EventReportResult,
  elGetter: $.ASN1Encoder<EventReportResult>
): _Element {
  if (!_cached_encoder_for_EventReportResult) {
    _cached_encoder_for_EventReportResult = function (
      value: EventReportResult    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* IF_ABSENT  */ value.managedObjectClass === undefined
                ? undefined
                : _encode_ObjectClass(value.managedObjectClass, $.BER),
              /* IF_ABSENT  */ value.managedObjectInstance === undefined
                ? undefined
                : _encode_ObjectInstance(value.managedObjectInstance, $.BER),
              /* IF_ABSENT  */ value.currentTime === undefined
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => $._encodeGeneralizedTime,
                    $.BER
                  )(value.currentTime, $.BER),
              /* IF_ABSENT  */ value.eventReply === undefined
                ? undefined
                : _encode_EventReply(value.eventReply, $.BER),
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
  return _cached_encoder_for_EventReportResult(value, elGetter);
}


/* eslint-enable */
