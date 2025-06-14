/* eslint-disable */
import {
  INTEGER,
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

/* START_OF_SYMBOL_DEFINITION F_CHECK_response */
/**
 * @summary F_CHECK_response
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-CHECK-response ::= SEQUENCE {
 *   checkpoint-identifier  [0] IMPLICIT INTEGER,
 *   transfer-number        [1] IMPLICIT INTEGER
 * }
 * ```
 *
 * @class
 */
export class F_CHECK_response {
  constructor(
    /**
     * @summary `checkpoint_identifier`.
     * @public
     * @readonly
     */
    readonly checkpoint_identifier: INTEGER,
    /**
     * @summary `transfer_number`.
     * @public
     * @readonly
     */
    readonly transfer_number: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a F_CHECK_response
   * @description
   *
   * This takes an `object` and converts it to a `F_CHECK_response`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_CHECK_response`.
   * @returns {F_CHECK_response}
   */
  public static _from_object(
    _o: { [_K in keyof F_CHECK_response]: F_CHECK_response[_K] }
  ): F_CHECK_response {
    return new F_CHECK_response(_o.checkpoint_identifier, _o.transfer_number);
  }
}
/* END_OF_SYMBOL_DEFINITION F_CHECK_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_CHECK_response */
/**
 * @summary The Leading Root Component Types of F_CHECK_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_CHECK_response: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'checkpoint-identifier',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'transfer-number',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_F_CHECK_response */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_CHECK_response */
/**
 * @summary The Trailing Root Component Types of F_CHECK_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_CHECK_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_F_CHECK_response */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_CHECK_response */
/**
 * @summary The Extension Addition Component Types of F_CHECK_response
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_CHECK_response: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_F_CHECK_response */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_F_CHECK_response */
let _cached_decoder_for_F_CHECK_response: $.ASN1Decoder<F_CHECK_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_F_CHECK_response */

/* START_OF_SYMBOL_DEFINITION _decode_F_CHECK_response */
/**
 * @summary Decodes an ASN.1 element into a(n) F_CHECK_response
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_CHECK_response} The decoded data structure.
 */
export function _decode_F_CHECK_response(el: _Element) {
  if (!_cached_decoder_for_F_CHECK_response) {
    _cached_decoder_for_F_CHECK_response = function (
      el: _Element
    ): F_CHECK_response {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'F-CHECK-response contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'checkpoint-identifier';
      sequence[1].name = 'transfer-number';
      let checkpoint_identifier!: INTEGER;
      let transfer_number!: INTEGER;
      checkpoint_identifier = $._decode_implicit<INTEGER>(
        () => $._decodeInteger
      )(sequence[0]);
      transfer_number = $._decode_implicit<INTEGER>(() => $._decodeInteger)(
        sequence[1]
      );
      return new F_CHECK_response(checkpoint_identifier, transfer_number);
    };
  }
  return _cached_decoder_for_F_CHECK_response(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_F_CHECK_response */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_F_CHECK_response */
let _cached_encoder_for_F_CHECK_response: $.ASN1Encoder<F_CHECK_response> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_F_CHECK_response */

/* START_OF_SYMBOL_DEFINITION _encode_F_CHECK_response */
/**
 * @summary Encodes a(n) F_CHECK_response into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_CHECK_response, encoded as an ASN.1 Element.
 */
export function _encode_F_CHECK_response(
  value: F_CHECK_response,
  elGetter: $.ASN1Encoder<F_CHECK_response>
) {
  if (!_cached_encoder_for_F_CHECK_response) {
    _cached_encoder_for_F_CHECK_response = function (
      value: F_CHECK_response    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => $._encodeInteger,
              $.BER
            )(value.checkpoint_identifier, $.BER),
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              1,
              () => $._encodeInteger,
              $.BER
            )(value.transfer_number, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_F_CHECK_response(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_F_CHECK_response */

/* eslint-enable */
