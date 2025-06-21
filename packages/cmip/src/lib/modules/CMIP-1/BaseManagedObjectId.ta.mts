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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
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

/**
 * @summary BaseManagedObjectId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BaseManagedObjectId ::= SEQUENCE {
 *   baseManagedObjectClass     ObjectClass,
 *   baseManagedObjectInstance  ObjectInstance
 * }
 * ```
 *
 * @class
 */
export class BaseManagedObjectId {
  constructor(
    /**
     * @summary `baseManagedObjectClass`.
     * @public
     * @readonly
     */
    readonly baseManagedObjectClass: ObjectClass,
    /**
     * @summary `baseManagedObjectInstance`.
     * @public
     * @readonly
     */
    readonly baseManagedObjectInstance: ObjectInstance
  ) {}

  /**
   * @summary Restructures an object into a BaseManagedObjectId
   * @description
   *
   * This takes an `object` and converts it to a `BaseManagedObjectId`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BaseManagedObjectId`.
   * @returns {BaseManagedObjectId}
   */
  public static _from_object(
    _o: { [_K in keyof BaseManagedObjectId]: BaseManagedObjectId[_K] }
  ): BaseManagedObjectId {
    return new BaseManagedObjectId(
      _o.baseManagedObjectClass,
      _o.baseManagedObjectInstance
    );
  }
}


/**
 * @summary The Leading Root Component Types of BaseManagedObjectId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BaseManagedObjectId: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'baseManagedObjectClass',
    false,
    $.hasAnyTag
  ),
  new $.ComponentSpec(
    'baseManagedObjectInstance',
    false,
    $.hasAnyTag
  ),
];


/**
 * @summary The Trailing Root Component Types of BaseManagedObjectId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BaseManagedObjectId: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BaseManagedObjectId
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BaseManagedObjectId: $.ComponentSpec[] = [];


let _cached_decoder_for_BaseManagedObjectId: $.ASN1Decoder<BaseManagedObjectId> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BaseManagedObjectId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BaseManagedObjectId} The decoded data structure.
 */
export function _decode_BaseManagedObjectId(el: _Element) {
  if (!_cached_decoder_for_BaseManagedObjectId) {
    _cached_decoder_for_BaseManagedObjectId = function (
      el: _Element
    ): BaseManagedObjectId {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BaseManagedObjectId contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'baseManagedObjectClass';
      sequence[1].name = 'baseManagedObjectInstance';
      let baseManagedObjectClass!: ObjectClass;
      let baseManagedObjectInstance!: ObjectInstance;
      baseManagedObjectClass = _decode_ObjectClass(sequence[0]);
      baseManagedObjectInstance = _decode_ObjectInstance(sequence[1]);
      return new BaseManagedObjectId(
        baseManagedObjectClass,
        baseManagedObjectInstance
      );
    };
  }
  return _cached_decoder_for_BaseManagedObjectId(el);
}


let _cached_encoder_for_BaseManagedObjectId: $.ASN1Encoder<BaseManagedObjectId> | null = null;


/**
 * @summary Encodes a(n) BaseManagedObjectId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseManagedObjectId, encoded as an ASN.1 Element.
 */
export function _encode_BaseManagedObjectId(
  value: BaseManagedObjectId,
  elGetter: $.ASN1Encoder<BaseManagedObjectId>
) {
  if (!_cached_encoder_for_BaseManagedObjectId) {
    _cached_encoder_for_BaseManagedObjectId = function (
      value: BaseManagedObjectId    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_ObjectClass(
              value.baseManagedObjectClass,
              $.BER
            ),
            /* REQUIRED   */ _encode_ObjectInstance(
              value.baseManagedObjectInstance,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BaseManagedObjectId(value, elGetter);
}


/* eslint-enable */
