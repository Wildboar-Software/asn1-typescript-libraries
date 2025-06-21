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
  HeaderVersion_header_major,
  _decode_HeaderVersion_header_major,
  _encode_HeaderVersion_header_major,
} from '../CBEFF-DATA-ELEMENTS/HeaderVersion-header-major.ta.mjs';
import {
  HeaderVersion_header_minor,
  _decode_HeaderVersion_header_minor,
  _encode_HeaderVersion_header_minor,
} from '../CBEFF-DATA-ELEMENTS/HeaderVersion-header-minor.ta.mjs';
/**
 * @summary HeaderVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HeaderVersion ::= SEQUENCE {
 *   header-major  INTEGER {version1(1)}(0..15),
 *   header-minor  INTEGER {version0(0)}(0..15)
 * }
 * ```
 *
 * @class
 */
export class HeaderVersion {
  constructor(
    /**
     * @summary `header_major`.
     * @public
     * @readonly
     */
    readonly header_major: HeaderVersion_header_major,
    /**
     * @summary `header_minor`.
     * @public
     * @readonly
     */
    readonly header_minor: HeaderVersion_header_minor
  ) {}

  /**
   * @summary Restructures an object into a HeaderVersion
   * @description
   *
   * This takes an `object` and converts it to a `HeaderVersion`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `HeaderVersion`.
   * @returns {HeaderVersion}
   */
  public static _from_object(
    _o: { [_K in keyof HeaderVersion]: HeaderVersion[_K] }
  ): HeaderVersion {
    return new HeaderVersion(_o.header_major, _o.header_minor);
  }
}

/**
 * @summary The Leading Root Component Types of HeaderVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_HeaderVersion: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'header-major',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'header-minor',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];

/**
 * @summary The Trailing Root Component Types of HeaderVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_HeaderVersion: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of HeaderVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_HeaderVersion: $.ComponentSpec[] = [];

let _cached_decoder_for_HeaderVersion: $.ASN1Decoder<HeaderVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HeaderVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {HeaderVersion} The decoded data structure.
 */
export function _decode_HeaderVersion(el: _Element) {
  if (!_cached_decoder_for_HeaderVersion) {
    _cached_decoder_for_HeaderVersion = function (el: _Element): HeaderVersion {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'HeaderVersion contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'header-major';
      sequence[1].name = 'header-minor';
      let header_major!: HeaderVersion_header_major;
      let header_minor!: HeaderVersion_header_minor;
      header_major = _decode_HeaderVersion_header_major(sequence[0]);
      header_minor = _decode_HeaderVersion_header_minor(sequence[1]);
      return new HeaderVersion(header_major, header_minor);
    };
  }
  return _cached_decoder_for_HeaderVersion(el);
}

let _cached_encoder_for_HeaderVersion: $.ASN1Encoder<HeaderVersion> | null = null;

/**
 * @summary Encodes a(n) HeaderVersion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeaderVersion, encoded as an ASN.1 Element.
 */
export function _encode_HeaderVersion(
  value: HeaderVersion,
  elGetter: $.ASN1Encoder<HeaderVersion>
) {
  if (!_cached_encoder_for_HeaderVersion) {
    _cached_encoder_for_HeaderVersion = function (
      value: HeaderVersion    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_HeaderVersion_header_major(
              value.header_major,
              $.BER
            ),
            /* REQUIRED   */ _encode_HeaderVersion_header_minor(
              value.header_minor,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_HeaderVersion(value, elGetter);
}


/* eslint-enable */
