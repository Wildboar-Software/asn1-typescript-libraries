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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta.js';
export {
  ObjectClass,
  _decode_ObjectClass,
  _encode_ObjectClass,
} from '../CMIP-1/ObjectClass.ta.js';
import {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta.js';
export {
  ObjectInstance,
  _decode_ObjectInstance,
  _encode_ObjectInstance,
} from '../CMIP-1/ObjectInstance.ta.js';
import { CMIP_EVENT } from '../CMIP-1/CMIP-EVENT.oca.js';
export { CMIP_EVENT } from '../CMIP-1/CMIP-EVENT.oca.js';
import { EventSet } from '../CMIP-1/EventSet.osa.js';
export { EventSet } from '../CMIP-1/EventSet.osa.js';
import {
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '../CMIP-1/EventTypeId.ta.js';

/* START_OF_SYMBOL_DEFINITION EventReportArgument */
/**
 * @summary EventReportArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EventReportArgument ::= SEQUENCE {
 *   managedObjectClass     ObjectClass,
 *   managedObjectInstance  ObjectInstance,
 *   eventTime              [5] IMPLICIT GeneralizedTime OPTIONAL,
 *   eventType              CMIP-EVENT.&id({EventSet}),
 *   eventInfo
 *     [8]  CMIP-EVENT.&Value({EventSet}{@.eventType}) OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class EventReportArgument {
  constructor(
    /**
     * @summary `managedObjectClass`.
     * @public
     * @readonly
     */
    readonly managedObjectClass: ObjectClass,
    /**
     * @summary `managedObjectInstance`.
     * @public
     * @readonly
     */
    readonly managedObjectInstance: ObjectInstance,
    /**
     * @summary `eventTime`.
     * @public
     * @readonly
     */
    readonly eventTime: OPTIONAL<GeneralizedTime>,
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
    readonly eventInfo: OPTIONAL<_Element>,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a EventReportArgument
   * @description
   *
   * This takes an `object` and converts it to a `EventReportArgument`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `EventReportArgument`.
   * @returns {EventReportArgument}
   */
  public static _from_object(
    _o: { [_K in keyof EventReportArgument]: EventReportArgument[_K] }
  ): EventReportArgument {
    return new EventReportArgument(
      _o.managedObjectClass,
      _o.managedObjectInstance,
      _o.eventTime,
      _o.eventType,
      _o.eventInfo,
      _o._unrecognizedExtensionsList
    );
  }
}
/* END_OF_SYMBOL_DEFINITION EventReportArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EventReportArgument */
/**
 * @summary The Leading Root Component Types of EventReportArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EventReportArgument: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'managedObjectInstance',
    false,
    $.hasAnyTag,
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'eventTime',
    true,
    $.hasTag(_TagClass.context, 5),
    undefined,
    undefined
  ),
  new $.ComponentSpec('eventType', false, $.hasAnyTag, undefined, undefined),
  new $.ComponentSpec(
    'eventInfo',
    true,
    $.hasTag(_TagClass.context, 8),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EventReportArgument */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EventReportArgument */
/**
 * @summary The Trailing Root Component Types of EventReportArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EventReportArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EventReportArgument */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EventReportArgument */
/**
 * @summary The Extension Addition Component Types of EventReportArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EventReportArgument: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EventReportArgument */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EventReportArgument */
let _cached_decoder_for_EventReportArgument: $.ASN1Decoder<EventReportArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EventReportArgument */

/* START_OF_SYMBOL_DEFINITION _decode_EventReportArgument */
/**
 * @summary Decodes an ASN.1 element into a(n) EventReportArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EventReportArgument} The decoded data structure.
 */
export function _decode_EventReportArgument(el: _Element) {
  if (!_cached_decoder_for_EventReportArgument) {
    _cached_decoder_for_EventReportArgument = function (
      el: _Element
    ): EventReportArgument {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let managedObjectClass!: ObjectClass;
      let managedObjectInstance!: ObjectInstance;
      let eventTime: OPTIONAL<GeneralizedTime>;
      let eventType!: EventTypeId;
      let eventInfo: OPTIONAL<_Element>;
      let _unrecognizedExtensionsList: _Element[] = [];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        managedObjectClass: (_el: _Element): void => {
          managedObjectClass = _decode_ObjectClass(_el);
        },
        managedObjectInstance: (_el: _Element): void => {
          managedObjectInstance = _decode_ObjectInstance(_el);
        },
        eventTime: (_el: _Element): void => {
          eventTime = $._decode_implicit<GeneralizedTime>(
            () => $._decodeGeneralizedTime
          )(_el);
        },
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
        _root_component_type_list_1_spec_for_EventReportArgument,
        _extension_additions_list_spec_for_EventReportArgument,
        _root_component_type_list_2_spec_for_EventReportArgument,
        (ext: _Element): void => {
          _unrecognizedExtensionsList.push(ext);
        }
      );
      return new EventReportArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
        managedObjectClass,
        managedObjectInstance,
        eventTime,
        eventType,
        eventInfo,
        _unrecognizedExtensionsList
      );
    };
  }
  return _cached_decoder_for_EventReportArgument(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EventReportArgument */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EventReportArgument */
let _cached_encoder_for_EventReportArgument: $.ASN1Encoder<EventReportArgument> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EventReportArgument */

/* START_OF_SYMBOL_DEFINITION _encode_EventReportArgument */
/**
 * @summary Encodes a(n) EventReportArgument into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventReportArgument, encoded as an ASN.1 Element.
 */
export function _encode_EventReportArgument(
  value: EventReportArgument,
  elGetter: $.ASN1Encoder<EventReportArgument>
) {
  if (!_cached_encoder_for_EventReportArgument) {
    _cached_encoder_for_EventReportArgument = function (
      value: EventReportArgument,
      elGetter: $.ASN1Encoder<EventReportArgument>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ _encode_ObjectClass(
                value.managedObjectClass,
                $.BER
              ),
              /* REQUIRED   */ _encode_ObjectInstance(
                value.managedObjectInstance,
                $.BER
              ),
              /* IF_ABSENT  */ value.eventTime === undefined
                ? undefined
                : $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => $._encodeGeneralizedTime,
                    $.BER
                  )(value.eventTime, $.BER),
              /* REQUIRED   */ _encode_EventTypeId(value.eventType, $.BER),
              /* IF_ABSENT  */ value.eventInfo === undefined
                ? undefined
                : $._encode_explicit(
                    _TagClass.context,
                    8,
                    () => $._encodeAny,
                    $.BER
                  )(value.eventInfo, $.BER),
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
  return _cached_encoder_for_EventReportArgument(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EventReportArgument */

/* eslint-enable */
