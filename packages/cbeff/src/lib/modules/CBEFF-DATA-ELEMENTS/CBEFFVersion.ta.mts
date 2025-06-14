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
  CBEFFVersion_cbeff_major,
  _decode_CBEFFVersion_cbeff_major,
  _encode_CBEFFVersion_cbeff_major,
} from '../CBEFF-DATA-ELEMENTS/CBEFFVersion-cbeff-major.ta.mjs';
import {
  CBEFFVersion_cbeff_minor,
  _decode_CBEFFVersion_cbeff_minor,
  _encode_CBEFFVersion_cbeff_minor,
} from '../CBEFF-DATA-ELEMENTS/CBEFFVersion-cbeff-minor.ta.mjs';
/* START_OF_SYMBOL_DEFINITION CBEFFVersion */
/**
 * @summary CBEFFVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CBEFFVersion ::= SEQUENCE {
 *   cbeff-major  INTEGER {version2(2)}(0..15),
 *   cbeff-minor  INTEGER {version0(0)}(0..15)
 * }
 * ```
 *
 * @class
 */
export class CBEFFVersion {
  constructor(
    /**
     * @summary `cbeff_major`.
     * @public
     * @readonly
     */
    readonly cbeff_major: CBEFFVersion_cbeff_major,
    /**
     * @summary `cbeff_minor`.
     * @public
     * @readonly
     */
    readonly cbeff_minor: CBEFFVersion_cbeff_minor
  ) {}

  /**
   * @summary Restructures an object into a CBEFFVersion
   * @description
   *
   * This takes an `object` and converts it to a `CBEFFVersion`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CBEFFVersion`.
   * @returns {CBEFFVersion}
   */
  public static _from_object(
    _o: { [_K in keyof CBEFFVersion]: CBEFFVersion[_K] }
  ): CBEFFVersion {
    return new CBEFFVersion(_o.cbeff_major, _o.cbeff_minor);
  }
}
/* END_OF_SYMBOL_DEFINITION CBEFFVersion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CBEFFVersion */
/**
 * @summary The Leading Root Component Types of CBEFFVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CBEFFVersion: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'cbeff-major',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'cbeff-minor',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CBEFFVersion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CBEFFVersion */
/**
 * @summary The Trailing Root Component Types of CBEFFVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CBEFFVersion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CBEFFVersion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CBEFFVersion */
/**
 * @summary The Extension Addition Component Types of CBEFFVersion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CBEFFVersion: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CBEFFVersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CBEFFVersion */
let _cached_decoder_for_CBEFFVersion: $.ASN1Decoder<CBEFFVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CBEFFVersion */

/* START_OF_SYMBOL_DEFINITION _decode_CBEFFVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) CBEFFVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CBEFFVersion} The decoded data structure.
 */
export function _decode_CBEFFVersion(el: _Element) {
  if (!_cached_decoder_for_CBEFFVersion) {
    _cached_decoder_for_CBEFFVersion = function (el: _Element): CBEFFVersion {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'CBEFFVersion contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'cbeff-major';
      sequence[1].name = 'cbeff-minor';
      let cbeff_major!: CBEFFVersion_cbeff_major;
      let cbeff_minor!: CBEFFVersion_cbeff_minor;
      cbeff_major = _decode_CBEFFVersion_cbeff_major(sequence[0]);
      cbeff_minor = _decode_CBEFFVersion_cbeff_minor(sequence[1]);
      return new CBEFFVersion(cbeff_major, cbeff_minor);
    };
  }
  return _cached_decoder_for_CBEFFVersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CBEFFVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CBEFFVersion */
let _cached_encoder_for_CBEFFVersion: $.ASN1Encoder<CBEFFVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CBEFFVersion */

/* START_OF_SYMBOL_DEFINITION _encode_CBEFFVersion */
/**
 * @summary Encodes a(n) CBEFFVersion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CBEFFVersion, encoded as an ASN.1 Element.
 */
export function _encode_CBEFFVersion(
  value: CBEFFVersion,
  elGetter: $.ASN1Encoder<CBEFFVersion>
) {
  if (!_cached_encoder_for_CBEFFVersion) {
    _cached_encoder_for_CBEFFVersion = function (
      value: CBEFFVersion    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_CBEFFVersion_cbeff_major(
              value.cbeff_major,
              $.BER
            ),
            /* REQUIRED   */ _encode_CBEFFVersion_cbeff_minor(
              value.cbeff_minor,
              $.BER
            ),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CBEFFVersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CBEFFVersion */

/* eslint-enable */
