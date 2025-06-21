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
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta.mjs';
import {
  AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta.mjs';

/**
 * @summary AD_AND_OR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AD-AND-OR ::= SEQUENCE {
 *         condition-count [0] Int32,
 *         elements        [1] AuthorizationData
 * }
 * ```
 *
 * @class
 */
export class AD_AND_OR {
  constructor(
    /**
     * @summary `condition_count`.
     * @public
     * @readonly
     */
    readonly condition_count: Int32,
    /**
     * @summary `elements`.
     * @public
     * @readonly
     */
    readonly elements: AuthorizationData
  ) {}

  /**
   * @summary Restructures an object into a AD_AND_OR
   * @description
   *
   * This takes an `object` and converts it to a `AD_AND_OR`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AD_AND_OR`.
   * @returns {AD_AND_OR}
   */
  public static _from_object(
    _o: { [_K in keyof AD_AND_OR]: AD_AND_OR[_K] }
  ): AD_AND_OR {
    return new AD_AND_OR(_o.condition_count, _o.elements);
  }
}


/**
 * @summary The Leading Root Component Types of AD_AND_OR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AD_AND_OR: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'condition-count',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'elements',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of AD_AND_OR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AD_AND_OR: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AD_AND_OR
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AD_AND_OR: $.ComponentSpec[] = [];


let _cached_decoder_for_AD_AND_OR: $.ASN1Decoder<AD_AND_OR> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AD_AND_OR
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AD_AND_OR} The decoded data structure.
 */
export function _decode_AD_AND_OR(el: _Element) {
  if (!_cached_decoder_for_AD_AND_OR) {
    _cached_decoder_for_AD_AND_OR = function (el: _Element): AD_AND_OR {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'AD-AND-OR contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'condition-count';
      sequence[1].name = 'elements';
      let condition_count!: Int32;
      let elements!: AuthorizationData;
      condition_count = $._decode_explicit<Int32>(() => _decode_Int32)(
        sequence[0]
      );
      elements = $._decode_explicit<AuthorizationData>(
        () => _decode_AuthorizationData
      )(sequence[1]);
      return new AD_AND_OR(condition_count, elements);
    };
  }
  return _cached_decoder_for_AD_AND_OR(el);
}


let _cached_encoder_for_AD_AND_OR: $.ASN1Encoder<AD_AND_OR> | null = null;


/**
 * @summary Encodes a(n) AD_AND_OR into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AD_AND_OR, encoded as an ASN.1 Element.
 */
export function _encode_AD_AND_OR(
  value: AD_AND_OR,
  elGetter: $.ASN1Encoder<AD_AND_OR>
) {
  if (!_cached_encoder_for_AD_AND_OR) {
    _cached_encoder_for_AD_AND_OR = function (
      value: AD_AND_OR    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Int32,
              $.DER
            )(value.condition_count, $.DER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => _encode_AuthorizationData,
              $.DER
            )(value.elements, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_AD_AND_OR(value, elGetter);
}


/* eslint-enable */
