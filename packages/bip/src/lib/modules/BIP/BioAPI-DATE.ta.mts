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
 * @summary BioAPI_DATE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DATE ::= SEQUENCE {
 *   year   INTEGER(0 | 1900..9999),
 *   month  INTEGER(0..12),
 *   day    INTEGER(0..31)
 * }
 * ```
 *
 * @class
 */
export class BioAPI_DATE {
  constructor(
    /**
     * @summary `year`.
     * @public
     * @readonly
     */
    readonly year: INTEGER,
    /**
     * @summary `month`.
     * @public
     * @readonly
     */
    readonly month: INTEGER,
    /**
     * @summary `day`.
     * @public
     * @readonly
     */
    readonly day: INTEGER
  ) {}

  /**
   * @summary Restructures an object into a BioAPI_DATE
   * @description
   *
   * This takes an `object` and converts it to a `BioAPI_DATE`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `BioAPI_DATE`.
   * @returns {BioAPI_DATE}
   */
  public static _from_object(
    _o: { [_K in keyof BioAPI_DATE]: BioAPI_DATE[_K] }
  ): BioAPI_DATE {
    return new BioAPI_DATE(_o.year, _o.month, _o.day);
  }
}


/**
 * @summary The Leading Root Component Types of BioAPI_DATE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BioAPI_DATE: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'year',
    false,
    $.hasTag(_TagClass.context, 0)
  ),
  new $.ComponentSpec(
    'month',
    false,
    $.hasTag(_TagClass.context, 1)
  ),
  new $.ComponentSpec(
    'day',
    false,
    $.hasTag(_TagClass.context, 2)
  ),
];


/**
 * @summary The Trailing Root Component Types of BioAPI_DATE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BioAPI_DATE: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BioAPI_DATE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BioAPI_DATE: $.ComponentSpec[] = [];


let _cached_decoder_for_BioAPI_DATE: $.ASN1Decoder<BioAPI_DATE> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_DATE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_DATE} The decoded data structure.
 */
export function _decode_BioAPI_DATE(el: _Element) {
  if (!_cached_decoder_for_BioAPI_DATE) {
    _cached_decoder_for_BioAPI_DATE = function (el: _Element): BioAPI_DATE {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 3) {
        throw new _ConstructionError(
          'BioAPI-DATE contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'year';
      sequence[1].name = 'month';
      sequence[2].name = 'day';
      let year!: INTEGER;
      let month!: INTEGER;
      let day!: INTEGER;
      year = $._decodeInteger(sequence[0]);
      month = $._decodeInteger(sequence[1]);
      day = $._decodeInteger(sequence[2]);
      return new BioAPI_DATE(year, month, day);
    };
  }
  return _cached_decoder_for_BioAPI_DATE(el);
}


let _cached_encoder_for_BioAPI_DATE: $.ASN1Encoder<BioAPI_DATE> | null = null;


/**
 * @summary Encodes a(n) BioAPI_DATE into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_DATE, encoded as an ASN.1 Element.
 */
export function _encode_BioAPI_DATE(
  value: BioAPI_DATE,
  elGetter: $.ASN1Encoder<BioAPI_DATE>
) {
  if (!_cached_encoder_for_BioAPI_DATE) {
    _cached_encoder_for_BioAPI_DATE = function (
      value: BioAPI_DATE    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.year, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.month, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.day, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_BioAPI_DATE(value, elGetter);
}


/* eslint-enable */
