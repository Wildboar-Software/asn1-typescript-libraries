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
    String,
    _decode_String,
    _encode_String,
} from '../XSD/String.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ResponseType */
/**
 * @summary ResponseType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseType ::= SEQUENCE {
 *     algorithmIdentifier    String
 *     }
 * ```
 *
 * @class
 */
export class ResponseType {
  constructor(
    /**
     * @summary `algorithmIdentifier`.
     * @public
     * @readonly
     */
    readonly algorithmIdentifier: String
  ) {}

  /**
   * @summary Restructures an object into a ResponseType
   * @description
   *
   * This takes an `object` and converts it to a `ResponseType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ResponseType`.
   * @returns {ResponseType}
   */
  public static _from_object(
    _o: { [_K in keyof ResponseType]: ResponseType[_K] }
  ): ResponseType {
    return new ResponseType(_o.algorithmIdentifier);
  }
}
/* END_OF_SYMBOL_DEFINITION ResponseType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResponseType */
/**
 * @summary The Leading Root Component Types of ResponseType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResponseType: $.ComponentSpec[] = [
  /* FIXME: algorithmIdentifier COULD_NOT_RESOLVE_TYPE_DEF */
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResponseType */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResponseType */
/**
 * @summary The Trailing Root Component Types of ResponseType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResponseType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResponseType */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResponseType */
/**
 * @summary The Extension Addition Component Types of ResponseType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResponseType: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResponseType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseType */
let _cached_decoder_for_ResponseType: $.ASN1Decoder<ResponseType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseType */

/* START_OF_SYMBOL_DEFINITION _decode_ResponseType */
/**
 * @summary Decodes an ASN.1 element into a(n) ResponseType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseType} The decoded data structure.
 */
export function _decode_ResponseType(el: _Element) {
  if (!_cached_decoder_for_ResponseType) {
    _cached_decoder_for_ResponseType = function (el: _Element): ResponseType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'ResponseType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'algorithmIdentifier';
      let algorithmIdentifier!: String;
      algorithmIdentifier = _decode_String(sequence[0]);
      return new ResponseType(algorithmIdentifier);
    };
  }
  return _cached_decoder_for_ResponseType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResponseType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseType */
let _cached_encoder_for_ResponseType: $.ASN1Encoder<ResponseType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseType */

/* START_OF_SYMBOL_DEFINITION _encode_ResponseType */
/**
 * @summary Encodes a(n) ResponseType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseType, encoded as an ASN.1 Element.
 */
export function _encode_ResponseType(
  value: ResponseType,
  elGetter: $.ASN1Encoder<ResponseType>
) {
  if (!_cached_encoder_for_ResponseType) {
    _cached_encoder_for_ResponseType = function (
      value: ResponseType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_String(value.algorithmIdentifier, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ResponseType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResponseType */

/* eslint-enable */
