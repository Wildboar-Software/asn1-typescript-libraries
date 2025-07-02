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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary F_CHECK_request
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * F-CHECK-request ::= SEQUENCE {
 *   checkpoint-identifier  [0] IMPLICIT INTEGER,
 *   transfer-number        [1] IMPLICIT INTEGER
 * }
 * ```
 *
 */
export class F_CHECK_request {
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
   * @summary Restructures an object into a F_CHECK_request
   * @description
   *
   * This takes an `object` and converts it to a `F_CHECK_request`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `F_CHECK_request`.
   * @returns {F_CHECK_request}
   */
  public static _from_object(
    _o: { [_K in keyof F_CHECK_request]: F_CHECK_request[_K] }
  ): F_CHECK_request {
    return new F_CHECK_request(_o.checkpoint_identifier, _o.transfer_number);
  }
}


/**
 * @summary The Leading Root Component Types of F_CHECK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_F_CHECK_request: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'checkpoint-identifier',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'transfer-number',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of F_CHECK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_F_CHECK_request: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of F_CHECK_request
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_F_CHECK_request: $.ComponentSpec[] = [];


let _cached_decoder_for_F_CHECK_request: $.ASN1Decoder<F_CHECK_request> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) F_CHECK_request
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {F_CHECK_request} The decoded data structure.
 */
export function _decode_F_CHECK_request(el: _Element): F_CHECK_request {
  if (!_cached_decoder_for_F_CHECK_request) {
    _cached_decoder_for_F_CHECK_request = function (
      el: _Element
    ): F_CHECK_request {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'F-CHECK-request contained only ' +
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
      return new F_CHECK_request(checkpoint_identifier, transfer_number);
    };
  }
  return _cached_decoder_for_F_CHECK_request(el);
}


let _cached_encoder_for_F_CHECK_request: $.ASN1Encoder<F_CHECK_request> | null = null;


/**
 * @summary Encodes a(n) F_CHECK_request into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The F_CHECK_request, encoded as an ASN.1 Element.
 */
export function _encode_F_CHECK_request(
  value: F_CHECK_request,
  elGetter: $.ASN1Encoder<F_CHECK_request>
): _Element {
  if (!_cached_encoder_for_F_CHECK_request) {
    _cached_encoder_for_F_CHECK_request = function (
      value: F_CHECK_request    ): _Element {
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
  return _cached_encoder_for_F_CHECK_request(value, elGetter);
}


/* eslint-enable */
