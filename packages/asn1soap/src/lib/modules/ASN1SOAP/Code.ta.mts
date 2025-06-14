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
  Value,
  _enum_for_Value,
  _decode_Value,
  _encode_Value,
} from '../ASN1SOAP/Value.ta.mjs';
import { QName, _decode_QName, _encode_QName } from '../XSD/QName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION Code */
/**
 * @summary Code
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Code ::= SEQUENCE {value     Value,
 *                    subcodes  SEQUENCE OF QName
 * }
 * ```
 *
 * @class
 */
export class Code {
  constructor(
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: Value,
    /**
     * @summary `subcodes`.
     * @public
     * @readonly
     */
    readonly subcodes: QName[]
  ) {}

  /**
   * @summary Restructures an object into a Code
   * @description
   *
   * This takes an `object` and converts it to a `Code`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Code`.
   * @returns {Code}
   */
  public static _from_object(_o: { [_K in keyof Code]: Code[_K] }): Code {
    return new Code(_o.value, _o.subcodes);
  }

  /**
   * @summary The enum used as the type of the component `value`
   * @public
   * @static
   */

  public static _enum_for_value = _enum_for_Value;
}
/* END_OF_SYMBOL_DEFINITION Code */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Code */
/**
 * @summary The Leading Root Component Types of Code
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Code: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'value',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'subcodes',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Code */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Code */
/**
 * @summary The Trailing Root Component Types of Code
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Code: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Code */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Code */
/**
 * @summary The Extension Addition Component Types of Code
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Code: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Code */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Code */
let _cached_decoder_for_Code: $.ASN1Decoder<Code> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Code */

/* START_OF_SYMBOL_DEFINITION _decode_Code */
/**
 * @summary Decodes an ASN.1 element into a(n) Code
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Code} The decoded data structure.
 */
export function _decode_Code(el: _Element) {
  if (!_cached_decoder_for_Code) {
    _cached_decoder_for_Code = function (el: _Element): Code {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'Code contained only ' + sequence.length.toString() + ' elements.'
        );
      }
      sequence[0].name = 'value';
      sequence[1].name = 'subcodes';
      let value!: Value;
      let subcodes!: QName[];
      value = _decode_Value(sequence[0]);
      subcodes = $._decodeSequenceOf<QName>(() => _decode_QName)(
        sequence[1]
      );
      return new Code(value, subcodes);
    };
  }
  return _cached_decoder_for_Code(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Code */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Code */
let _cached_encoder_for_Code: $.ASN1Encoder<Code> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Code */

/* START_OF_SYMBOL_DEFINITION _encode_Code */
/**
 * @summary Encodes a(n) Code into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Code, encoded as an ASN.1 Element.
 */
export function _encode_Code(value: Code, elGetter: $.ASN1Encoder<Code>) {
  if (!_cached_encoder_for_Code) {
    _cached_encoder_for_Code = function (
      value: Code    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_Value(value.value, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<QName>(
              () => _encode_QName,
              $.BER
            )(value.subcodes, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Code(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Code */

/* eslint-enable */
