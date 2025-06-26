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
    String,
    _decode_String,
    _encode_String,
} from '../XSD/String.ta.mjs';


/**
 * @summary RequestType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RequestType ::= SEQUENCE {
 *     randomNumer    String
 *     }
 * ```
 *
 * @class
 */
export class RequestType {
  constructor(
    /**
     * @summary `randomNumer`.
     * @public
     * @readonly
     */
    readonly randomNumer: String
  ) {}

  /**
   * @summary Restructures an object into a RequestType
   * @description
   *
   * This takes an `object` and converts it to a `RequestType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `RequestType`.
   * @returns {RequestType}
   */
  public static _from_object(
    _o: { [_K in keyof RequestType]: RequestType[_K] }
  ): RequestType {
    return new RequestType(_o.randomNumer);
  }
}


/**
 * @summary The Leading Root Component Types of RequestType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RequestType: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'randomNumer',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
];


/**
 * @summary The Trailing Root Component Types of RequestType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RequestType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RequestType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RequestType: $.ComponentSpec[] = [];


let _cached_decoder_for_RequestType: $.ASN1Decoder<RequestType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RequestType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RequestType} The decoded data structure.
 */
export function _decode_RequestType(el: _Element): RequestType {
  if (!_cached_decoder_for_RequestType) {
    _cached_decoder_for_RequestType = function (el: _Element): RequestType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'RequestType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'randomNumer';
      let randomNumer!: String;
      randomNumer = _decode_String(sequence[0]);
      return new RequestType(randomNumer);
    };
  }
  return _cached_decoder_for_RequestType(el);
}


let _cached_encoder_for_RequestType: $.ASN1Encoder<RequestType> | null = null;


/**
 * @summary Encodes a(n) RequestType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestType, encoded as an ASN.1 Element.
 */
export function _encode_RequestType(
  value: RequestType,
  elGetter: $.ASN1Encoder<RequestType>
): _Element {
  if (!_cached_encoder_for_RequestType) {
    _cached_encoder_for_RequestType = function (
      value: RequestType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([/* REQUIRED   */ _encode_String(value.randomNumer, $.BER)])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_RequestType(value, elGetter);
}


/* eslint-enable */
