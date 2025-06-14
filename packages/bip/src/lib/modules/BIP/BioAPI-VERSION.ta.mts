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

/* START_OF_SYMBOL_DEFINITION BioAPI_VERSION */
/**
 * @summary BioAPI_VERSION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-VERSION ::= SEQUENCE {major  INTEGER(0..15),
 *                              minor  INTEGER(0..15)
 * }
 * ```
 *
 * @class
 */
export class BioAPI_VERSION {
  constructor(
    /**
     * @summary `major`.
     * @public
     * @readonly
     */
    readonly major: INTEGER,
    /**
     * @summary `minor`.
     * @public
     * @readonly
     */
    readonly minor: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_VERSION
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_VERSION`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_VERSION`.
   * @returns {BioAPI_VERSION}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_VERSION]: BioAPI_VERSION[_K] }
  ): BioAPI_VERSION {
    return new BioAPI_VERSION(_o.major, _o.minor);
  }
}
/* END_OF_SYMBOL_DEFINITION BioAPI_VERSION */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_VERSION */
/**
 * @summary The Leading Root Component Types of BioAPI_VERSION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_VERSION: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'major',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'minor',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_BioAPI_VERSION */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_VERSION */
/**
 * @summary The Trailing Root Component Types of BioAPI_VERSION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_VERSION: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_BioAPI_VERSION */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_VERSION */
/**
 * @summary The Extension Addition Component Types of BioAPI_VERSION
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_VERSION: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_BioAPI_VERSION */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_VERSION */
let _cached_decoder_for_BioAPI_VERSION: $.ASN1Decoder<BioAPI_VERSION> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BioAPI_VERSION */

/* START_OF_SYMBOL_DEFINITION _decode_BioAPI_VERSION */
/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_VERSION
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_VERSION} The decoded data structure.
 */
export function _decode_BioAPI_VERSION(el: _Element) {
  if (!_cached_decoder_for_BioAPI_VERSION) {
    _cached_decoder_for_BioAPI_VERSION = function (
      el: _Element
    ): BioAPI_VERSION {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BioAPI-VERSION contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'major';
      sequence[1].name = 'minor';
      let major!: INTEGER;
      let minor!: INTEGER;
      major = $._decodeInteger(sequence[0]);
      minor = $._decodeInteger(sequence[1]);
      return new BioAPI_VERSION(major, minor);
    };
  }
  return _cached_decoder_for_BioAPI_VERSION(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BioAPI_VERSION */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_VERSION */
let _cached_encoder_for_BioAPI_VERSION: $.ASN1Encoder<BioAPI_VERSION> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BioAPI_VERSION */

/* START_OF_SYMBOL_DEFINITION _encode_BioAPI_VERSION */
/**
 * @summary Encodes a(n) BioAPI_VERSION into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_VERSION, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_VERSION(
  value: BioAPI_VERSION,
  elGetter: $.ASN1Encoder<BioAPI_VERSION>
) {
  if (!_cached_encoder_for_BioAPI_VERSION) {
    _cached_encoder_for_BioAPI_VERSION = function (
      value: BioAPI_VERSION    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.major, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.minor, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_VERSION(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BioAPI_VERSION */

/* eslint-enable */
