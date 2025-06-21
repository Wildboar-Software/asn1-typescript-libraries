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

/**
 * @summary BDBFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BDBFormat ::= SEQUENCE {
 *   format-owner  INTEGER(1..65535),
 *   format-type   INTEGER(1..65535)
 * }
 * ```
 *
 * @class
 */
export class BDBFormat {
  constructor(
    /**
     * @summary `format_owner`.
     * @public
     * @readonly
     */
    readonly format_owner: INTEGER,
    /**
     * @summary `format_type`.
     * @public
     * @readonly
     */
    readonly format_type: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a BDBFormat
   * @description
   *
   * This takes an `object` and converts it to a `BDBFormat`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BDBFormat`.
   * @returns {BDBFormat}
   */
  public static _from_object(
    _o: { [_K in keyof BDBFormat]: BDBFormat[_K] }
  ): BDBFormat {
    return new BDBFormat(_o.format_owner, _o.format_type);
  }
}

/**
 * @summary The Leading Root Component Types of BDBFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BDBFormat: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'format-owner',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'format-type',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
];

/**
 * @summary The Trailing Root Component Types of BDBFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BDBFormat: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BDBFormat
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BDBFormat: $.ComponentSpec[] = [];

let _cached_decoder_for_BDBFormat: $.ASN1Decoder<BDBFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDBFormat
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BDBFormat} The decoded data structure.
 */
export function _decode_BDBFormat(el: _Element) {
  if (!_cached_decoder_for_BDBFormat) {
    _cached_decoder_for_BDBFormat = function (el: _Element): BDBFormat {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'BDBFormat contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'format-owner';
      sequence[1].name = 'format-type';
      let format_owner!: INTEGER;
      let format_type!: INTEGER;
      format_owner = $._decodeInteger(sequence[0]);
      format_type = $._decodeInteger(sequence[1]);
      return new BDBFormat(format_owner, format_type);
    };
  }
  return _cached_decoder_for_BDBFormat(el);
}

let _cached_encoder_for_BDBFormat: $.ASN1Encoder<BDBFormat> | null = null;

/**
 * @summary Encodes a(n) BDBFormat into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDBFormat, encoded as an ASN.1 Element.
 */
export function _encode_BDBFormat(
  value: BDBFormat,
  elGetter: $.ASN1Encoder<BDBFormat>
) {
  if (!_cached_encoder_for_BDBFormat) {
    _cached_encoder_for_BDBFormat = function (
      value: BDBFormat    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.format_owner, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.format_type, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BDBFormat(value, elGetter);
}


/* eslint-enable */
