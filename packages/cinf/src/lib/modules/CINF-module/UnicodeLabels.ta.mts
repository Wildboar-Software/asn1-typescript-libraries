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
import {
  Non_numericUnicodeLabel,
  _decode_Non_numericUnicodeLabel,
  _encode_Non_numericUnicodeLabel,
} from '../CINF-module/Non-numericUnicodeLabel.ta.mjs';
/* START_OF_SYMBOL_DEFINITION UnicodeLabels */
/**
 * @summary UnicodeLabels
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnicodeLabels ::= SEQUENCE {
 *     numericLabel    INTEGER,
 *     non-numeric    SEQUENCE OF labels Non-numericUnicodeLabel
 * }
 * ```
 *
 * @class
 */
export class UnicodeLabels {
  constructor(
    /**
     * @summary `numericLabel`.
     * @public
     * @readonly
     */
    readonly numericLabel: INTEGER,
    /**
     * @summary `non_numeric`.
     * @public
     * @readonly
     */
    readonly non_numeric: Non_numericUnicodeLabel[]
  ) {}

  /**
   * @summary Restructures an object into a UnicodeLabels
   * @description
   *
   * This takes an `object` and converts it to a `UnicodeLabels`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UnicodeLabels`.
   * @returns {UnicodeLabels}
   */
  public static _from_object(
    _o: { [_K in keyof UnicodeLabels]: UnicodeLabels[_K] }
  ): UnicodeLabels {
    return new UnicodeLabels(_o.numericLabel, _o.non_numeric);
  }
}
/* END_OF_SYMBOL_DEFINITION UnicodeLabels */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnicodeLabels */
/**
 * @summary The Leading Root Component Types of UnicodeLabels
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UnicodeLabels: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'numericLabel',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'non-numeric',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UnicodeLabels */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnicodeLabels */
/**
 * @summary The Trailing Root Component Types of UnicodeLabels
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UnicodeLabels: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UnicodeLabels */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnicodeLabels */
/**
 * @summary The Extension Addition Component Types of UnicodeLabels
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UnicodeLabels: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UnicodeLabels */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UnicodeLabels */
let _cached_decoder_for_UnicodeLabels: $.ASN1Decoder<UnicodeLabels> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UnicodeLabels */

/* START_OF_SYMBOL_DEFINITION _decode_UnicodeLabels */
/**
 * @summary Decodes an ASN.1 element into a(n) UnicodeLabels
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UnicodeLabels} The decoded data structure.
 */
export function _decode_UnicodeLabels(el: _Element) {
  if (!_cached_decoder_for_UnicodeLabels) {
    _cached_decoder_for_UnicodeLabels = function (el: _Element): UnicodeLabels {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'UnicodeLabels contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'numericLabel';
      sequence[1].name = 'non-numeric';
      let numericLabel!: INTEGER;
      let non_numeric!: Non_numericUnicodeLabel[];
      numericLabel = $._decodeInteger(sequence[0]);
      non_numeric = $._decodeSequenceOf<Non_numericUnicodeLabel>(
        () => _decode_Non_numericUnicodeLabel
      )(sequence[1]);
      return new UnicodeLabels(numericLabel, non_numeric);
    };
  }
  return _cached_decoder_for_UnicodeLabels(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UnicodeLabels */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UnicodeLabels */
let _cached_encoder_for_UnicodeLabels: $.ASN1Encoder<UnicodeLabels> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UnicodeLabels */

/* START_OF_SYMBOL_DEFINITION _encode_UnicodeLabels */
/**
 * @summary Encodes a(n) UnicodeLabels into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnicodeLabels, encoded as an ASN.1 Element.
 */
export function _encode_UnicodeLabels(
  value: UnicodeLabels,
  elGetter: $.ASN1Encoder<UnicodeLabels>
) {
  if (!_cached_encoder_for_UnicodeLabels) {
    _cached_encoder_for_UnicodeLabels = function (
      value: UnicodeLabels    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeInteger(value.numericLabel, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<Non_numericUnicodeLabel>(
              () => _encode_Non_numericUnicodeLabel,
              $.BER
            )(value.non_numeric, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UnicodeLabels(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UnicodeLabels */

/* eslint-enable */
