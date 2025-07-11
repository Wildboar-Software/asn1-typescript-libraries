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
    EventTypeId,
    _decode_EventTypeId,
    _encode_EventTypeId,
} from '../CMIP-1/EventTypeId.ta.mjs';


/**
 * @summary NoSuchEventType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NoSuchEventType ::= SEQUENCE {
 *   managedObjectClass  ObjectClass,
 *   eventType           CMIP-EVENT.&id({EventSet}),
 *   ...
 * }
 * ```
 *
 */
export class NoSuchEventType {
  constructor(
    /**
     * @summary `managedObjectClass`.
     * @public
     * @readonly
     */
    readonly managedObjectClass: ObjectClass,
    /**
     * @summary `eventType`.
     * @public
     * @readonly
     */
    readonly eventType: EventTypeId,
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[] = []
  ) {}

  /**
   * @summary Restructures an object into a NoSuchEventType
   * @description
   *
   * This takes an `object` and converts it to a `NoSuchEventType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `NoSuchEventType`.
   * @returns {NoSuchEventType}
   */
  public static _from_object(
    _o: { [_K in keyof NoSuchEventType]: NoSuchEventType[_K] }
  ): NoSuchEventType {
    return new NoSuchEventType(
      _o.managedObjectClass,
      _o.eventType,
      _o._unrecognizedExtensionsList
    );
  }
}


/**
 * @summary The Leading Root Component Types of NoSuchEventType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NoSuchEventType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'managedObjectClass',
    false,
    $.hasAnyTag
  ),
  new $.ComponentSpec('eventType', false, $.hasAnyTag),
];


/**
 * @summary The Trailing Root Component Types of NoSuchEventType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NoSuchEventType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of NoSuchEventType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NoSuchEventType: $.ComponentSpec[] = [];


let _cached_decoder_for_NoSuchEventType: $.ASN1Decoder<NoSuchEventType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NoSuchEventType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NoSuchEventType} The decoded data structure.
 */
export function _decode_NoSuchEventType(el: _Element): NoSuchEventType {
  if (!_cached_decoder_for_NoSuchEventType) {
    _cached_decoder_for_NoSuchEventType = function (
      el: _Element
    ): NoSuchEventType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'NoSuchEventType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'managedObjectClass';
      sequence[1].name = 'eventType';
      let managedObjectClass!: ObjectClass;
      let eventType!: EventTypeId;
      managedObjectClass = _decode_ObjectClass(sequence[0]);
      eventType = _decode_EventTypeId(sequence[1]);
      return new NoSuchEventType(
        managedObjectClass,
        eventType,
        sequence.slice(2)
      );
    };
  }
  return _cached_decoder_for_NoSuchEventType(el);
}


let _cached_encoder_for_NoSuchEventType: $.ASN1Encoder<NoSuchEventType> | null = null;


/**
 * @summary Encodes a(n) NoSuchEventType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoSuchEventType, encoded as an ASN.1 Element.
 */
export function _encode_NoSuchEventType(
  value: NoSuchEventType,
  elGetter: $.ASN1Encoder<NoSuchEventType>
): _Element {
  if (!_cached_encoder_for_NoSuchEventType) {
    _cached_encoder_for_NoSuchEventType = function (
      value: NoSuchEventType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat(
            [
              /* REQUIRED   */ _encode_ObjectClass(
                value.managedObjectClass,
                $.BER
              ),
              /* REQUIRED   */ _encode_EventTypeId(value.eventType, $.BER),
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
  return _cached_encoder_for_NoSuchEventType(value, elGetter);
}


/* eslint-enable */
