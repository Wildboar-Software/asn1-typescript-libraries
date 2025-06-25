/* eslint-disable */
import {
  OCTET_STRING,
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
  Int32,
  _decode_Int32,
  _encode_Int32,
} from '../KerberosV5Spec2/Int32.ta.mjs';

/**
 * @summary TransitedEncoding
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TransitedEncoding ::= SEQUENCE {
 *         tr-type         [0] Int32 -- must be registered --,
 *         contents        [1] OCTET STRING
 * }
 * ```
 *
 * @class
 */
export class TransitedEncoding {
  constructor(
    /**
     * @summary `tr_type`.
     * @public
     * @readonly
     */
    readonly tr_type: Int32,
    /**
     * @summary `contents`.
     * @public
     * @readonly
     */
    readonly contents: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a TransitedEncoding
   * @description
   *
   * This takes an `object` and converts it to a `TransitedEncoding`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `TransitedEncoding`.
   * @returns {TransitedEncoding}
   */
  public static _from_object(
    _o: { [_K in keyof TransitedEncoding]: TransitedEncoding[_K] }
  ): TransitedEncoding {
    return new TransitedEncoding(_o.tr_type, _o.contents);
  }
}


/**
 * @summary The Leading Root Component Types of TransitedEncoding
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TransitedEncoding: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'tr-type',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'contents',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];


/**
 * @summary The Trailing Root Component Types of TransitedEncoding
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TransitedEncoding: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of TransitedEncoding
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TransitedEncoding: $.ComponentSpec[] = [];


let _cached_decoder_for_TransitedEncoding: $.ASN1Decoder<TransitedEncoding> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) TransitedEncoding
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TransitedEncoding} The decoded data structure.
 */
export function _decode_TransitedEncoding(el: _Element): TransitedEncoding {
  if (!_cached_decoder_for_TransitedEncoding) {
    _cached_decoder_for_TransitedEncoding = function (
      el: _Element
    ): TransitedEncoding {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'TransitedEncoding contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'tr-type';
      sequence[1].name = 'contents';
      let tr_type!: Int32;
      let contents!: OCTET_STRING;
      tr_type = $._decode_explicit<Int32>(() => _decode_Int32)(sequence[0]);
      contents = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(
        sequence[1]
      );
      return new TransitedEncoding(tr_type, contents);
    };
  }
  return _cached_decoder_for_TransitedEncoding(el);
}


let _cached_encoder_for_TransitedEncoding: $.ASN1Encoder<TransitedEncoding> | null = null;


/**
 * @summary Encodes a(n) TransitedEncoding into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransitedEncoding, encoded as an ASN.1 Element.
 */
export function _encode_TransitedEncoding(
  value: TransitedEncoding,
  elGetter: $.ASN1Encoder<TransitedEncoding>
): _Element {
  if (!_cached_encoder_for_TransitedEncoding) {
    _cached_encoder_for_TransitedEncoding = function (
      value: TransitedEncoding    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              0,
              () => _encode_Int32,
              $.DER
            )(value.tr_type, $.DER),
            /* REQUIRED   */ $._encode_explicit(
              _TagClass.context,
              1,
              () => $._encodeOctetString,
              $.DER
            )(value.contents, $.DER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.DER
      );
    };
  }
  return _cached_encoder_for_TransitedEncoding(value, elGetter);
}


/* eslint-enable */
