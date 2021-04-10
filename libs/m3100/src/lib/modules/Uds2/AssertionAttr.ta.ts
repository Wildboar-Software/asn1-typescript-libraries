/* eslint-disable */
import {
  itu_t,
  itu_r,
  ccitt,
  iso,
  joint_iso_itu_t,
  joint_iso_ccitt,
  OPTIONAL,
  BOOLEAN,
  INTEGER,
  BIT_STRING,
  OCTET_STRING,
  NULL,
  OBJECT_IDENTIFIER,
  ObjectDescriptor,
  EXTERNAL,
  REAL,
  INSTANCE_OF,
  ENUMERATED,
  EMBEDDED_PDV,
  UTF8String,
  RELATIVE_OID,
  SEQUENCE,
  SEQUENCE_OF,
  SET,
  SET_OF,
  GraphicString,
  NumericString,
  VisibleString,
  PrintableString,
  ISO646String,
  TeletexString,
  GeneralString,
  T61String,
  UniversalString,
  VideotexString,
  BMPString,
  IA5String,
  CharacterString,
  UTCTime,
  GeneralizedTime,
  TIME,
  DATE,
  TIME_OF_DAY,
  DATE_TIME,
  DURATION,
  OID_IRI,
  RELATIVE_OID_IRI,
  TRUE,
  FALSE,
  TRUE_BIT,
  FALSE_BIT,
  PLUS_INFINITY,
  MINUS_INFINITY,
  NOT_A_NUMBER,
  TYPE_IDENTIFIER,
  ABSTRACT_SYNTAX,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
  AssertionAttr_weight,
  _enum_for_AssertionAttr_weight,
  AssertionAttr_weight_low /* IMPORTED_LONG_ENUMERATION_ITEM */,
  low /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AssertionAttr_weight_high /* IMPORTED_LONG_ENUMERATION_ITEM */,
  high /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AssertionAttr_weight,
  _encode_AssertionAttr_weight,
} from '../Uds2/AssertionAttr-weight.ta';
export {
  AssertionAttr_weight,
  _enum_for_AssertionAttr_weight,
  AssertionAttr_weight_low /* IMPORTED_LONG_ENUMERATION_ITEM */,
  low /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AssertionAttr_weight_high /* IMPORTED_LONG_ENUMERATION_ITEM */,
  high /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AssertionAttr_weight,
  _encode_AssertionAttr_weight,
} from '../Uds2/AssertionAttr-weight.ta';

/* START_OF_SYMBOL_DEFINITION AssertionAttr */
/**
 * @summary AssertionAttr
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AssertionAttr ::= SEQUENCE {weight  ENUMERATED {low, high} DEFAULT high
 * }
 * ```
 *
 * @class
 */
export class AssertionAttr {
  constructor(
    /**
     * @summary `weight`.
     * @public
     * @readonly
     */
    readonly weight: OPTIONAL<AssertionAttr_weight>
  ) {}

  /**
   * @summary Restructures an object into a AssertionAttr
   * @description
   *
   * This takes an `object` and converts it to a `AssertionAttr`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AssertionAttr`.
   * @returns {AssertionAttr}
   */
  public static _from_object(
    _o: { [_K in keyof AssertionAttr]: AssertionAttr[_K] }
  ): AssertionAttr {
    return new AssertionAttr(_o.weight);
  }

  /**
   * @summary Getter that returns the default value for `weight`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_weight() {
    return AssertionAttr_weight_high;
  }
  /**
   * @summary The enum used as the type of the component `weight`
   * @public
   * @static
   */

  public static _enum_for_weight = _enum_for_AssertionAttr_weight;
}
/* END_OF_SYMBOL_DEFINITION AssertionAttr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AssertionAttr */
/**
 * @summary The Leading Root Component Types of AssertionAttr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AssertionAttr: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'weight',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AssertionAttr */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AssertionAttr */
/**
 * @summary The Trailing Root Component Types of AssertionAttr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AssertionAttr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AssertionAttr */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AssertionAttr */
/**
 * @summary The Extension Addition Component Types of AssertionAttr
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AssertionAttr: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AssertionAttr */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AssertionAttr */
let _cached_decoder_for_AssertionAttr: $.ASN1Decoder<AssertionAttr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AssertionAttr */

/* START_OF_SYMBOL_DEFINITION _decode_AssertionAttr */
/**
 * @summary Decodes an ASN.1 element into a(n) AssertionAttr
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AssertionAttr} The decoded data structure.
 */
export function _decode_AssertionAttr(el: _Element) {
  if (!_cached_decoder_for_AssertionAttr) {
    _cached_decoder_for_AssertionAttr = function (el: _Element): AssertionAttr {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let weight: OPTIONAL<AssertionAttr_weight> =
        AssertionAttr._default_value_for_weight;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        weight: (_el: _Element): void => {
          weight = _decode_AssertionAttr_weight(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AssertionAttr,
        _extension_additions_list_spec_for_AssertionAttr,
        _root_component_type_list_2_spec_for_AssertionAttr,
        undefined
      );
      return new AssertionAttr /* SEQUENCE_CONSTRUCTOR_CALL */(weight);
    };
  }
  return _cached_decoder_for_AssertionAttr(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AssertionAttr */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AssertionAttr */
let _cached_encoder_for_AssertionAttr: $.ASN1Encoder<AssertionAttr> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AssertionAttr */

/* START_OF_SYMBOL_DEFINITION _encode_AssertionAttr */
/**
 * @summary Encodes a(n) AssertionAttr into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AssertionAttr, encoded as an ASN.1 Element.
 */
export function _encode_AssertionAttr(
  value: AssertionAttr,
  elGetter: $.ASN1Encoder<AssertionAttr>
) {
  if (!_cached_encoder_for_AssertionAttr) {
    _cached_encoder_for_AssertionAttr = function (
      value: AssertionAttr,
      elGetter: $.ASN1Encoder<AssertionAttr>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.weight === undefined ||
            $.deepEq(value.weight, AssertionAttr._default_value_for_weight)
              ? undefined
              : _encode_AssertionAttr_weight(value.weight, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AssertionAttr(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AssertionAttr */

/* eslint-enable */
