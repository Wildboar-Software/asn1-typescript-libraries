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
  HashValueType_algorithmOID,
  _enum_for_HashValueType_algorithmOID,
  _decode_HashValueType_algorithmOID,
  _encode_HashValueType_algorithmOID,
} from '../CMAIL/HashValueType-algorithmOID.ta.mjs';

/**
 * @summary HashValueType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashValueType ::= SEQUENCE {
 *     algorithmOID    ENUMERATED {
 *         sha-1,
 *         sha-256
 *         }
 *     }
 * ```
 *
 */
export class HashValueType {
  constructor(
    /**
     * @summary `algorithmOID`.
     * @public
     * @readonly
     */
    readonly algorithmOID: HashValueType_algorithmOID
  ) {}

  /**
   * @summary Restructures an object into a HashValueType
   * @description
   *
   * This takes an `object` and converts it to a `HashValueType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `HashValueType`.
   * @returns {HashValueType}
   */
  public static _from_object(
    _o: { [_K in keyof HashValueType]: HashValueType[_K] }
  ): HashValueType {
    return new HashValueType(_o.algorithmOID);
  }

  /**
   * @summary The enum used as the type of the component `algorithmOID`
   * @public
   * @static
   */

  public static _enum_for_algorithmOID = _enum_for_HashValueType_algorithmOID;
}


/**
 * @summary The Leading Root Component Types of HashValueType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HashValueType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'algorithmOID',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of HashValueType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HashValueType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of HashValueType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HashValueType: $.ComponentSpec[] = [];


let _cached_decoder_for_HashValueType: $.ASN1Decoder<HashValueType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) HashValueType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HashValueType} The decoded data structure.
 */
export function _decode_HashValueType(el: _Element): HashValueType {
  if (!_cached_decoder_for_HashValueType) {
    _cached_decoder_for_HashValueType = function (el: _Element): HashValueType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'HashValueType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'algorithmOID';
      let algorithmOID!: HashValueType_algorithmOID;
      algorithmOID = _decode_HashValueType_algorithmOID(sequence[0]);
      return new HashValueType(algorithmOID);
    };
  }
  return _cached_decoder_for_HashValueType(el);
}


let _cached_encoder_for_HashValueType: $.ASN1Encoder<HashValueType> | null = null;


/**
 * @summary Encodes a(n) HashValueType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashValueType, encoded as an ASN.1 Element.
 */
export function _encode_HashValueType(
  value: HashValueType,
  elGetter: $.ASN1Encoder<HashValueType>
): _Element {
  if (!_cached_encoder_for_HashValueType) {
    _cached_encoder_for_HashValueType = function (
      value: HashValueType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_HashValueType_algorithmOID(
              value.algorithmOID,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_HashValueType(value, elGetter);
}


/* eslint-enable */
