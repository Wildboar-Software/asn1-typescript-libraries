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
 * @summary CertificateType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateType ::= SEQUENCE {
 *     encoding    String
 *     }
 * ```
 *
 * @class
 */
export class CertificateType {
  constructor(
    /**
     * @summary `encoding`.
     * @public
     * @readonly
     */
    readonly encoding: String
  ) {}

  /**
   * @summary Restructures an object into a CertificateType
   * @description
   *
   * This takes an `object` and converts it to a `CertificateType`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CertificateType`.
   * @returns {CertificateType}
   */
  public static _from_object(
    _o: { [_K in keyof CertificateType]: CertificateType[_K] }
  ): CertificateType {
    return new CertificateType(_o.encoding);
  }
}


/**
 * @summary The Leading Root Component Types of CertificateType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateType: $.ComponentSpec[] = [
  new $.ComponentSpec("encoding", false, $.hasTag(_TagClass.context, 0)),
];


/**
 * @summary The Trailing Root Component Types of CertificateType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateType: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CertificateType
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateType: $.ComponentSpec[] = [];


let _cached_decoder_for_CertificateType: $.ASN1Decoder<CertificateType> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertificateType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateType} The decoded data structure.
 */
export function _decode_CertificateType(el: _Element): CertificateType {
  if (!_cached_decoder_for_CertificateType) {
    _cached_decoder_for_CertificateType = function (
      el: _Element
    ): CertificateType {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 1) {
        throw new _ConstructionError(
          'CertificateType contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'encoding';
      let encoding!: String;
      encoding = _decode_String(sequence[0]);
      return new CertificateType(encoding);
    };
  }
  return _cached_decoder_for_CertificateType(el);
}


let _cached_encoder_for_CertificateType: $.ASN1Encoder<CertificateType> | null = null;


/**
 * @summary Encodes a(n) CertificateType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateType, encoded as an ASN.1 Element.
 */
export function _encode_CertificateType(
  value: CertificateType,
  elGetter: $.ASN1Encoder<CertificateType>
): _Element {
  if (!_cached_encoder_for_CertificateType) {
    _cached_encoder_for_CertificateType = function (
      value: CertificateType    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([/* REQUIRED   */ _encode_String(value.encoding, $.BER)])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CertificateType(value, elGetter);
}


/* eslint-enable */
