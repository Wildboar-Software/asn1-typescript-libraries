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
  AssertionAttr,
  _decode_AssertionAttr,
  _encode_AssertionAttr,
} from '../Uds2/AssertionAttr.ta';
export {
  AssertionAttr,
  _decode_AssertionAttr,
  _encode_AssertionAttr,
} from '../Uds2/AssertionAttr.ta';
import {
  Language,
  _decode_Language,
  _encode_Language,
} from '../XSD/Language.ta';
export {
  Language,
  _decode_Language,
  _encode_Language,
} from '../XSD/Language.ta';
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

/* START_OF_SYMBOL_DEFINITION LanguageAs */
/**
 * @summary LanguageAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LanguageAs ::= SEQUENCE {COMPONENTS OF AssertionAttr,
 *                          base  Language
 * }
 * ```
 *
 * @class
 */
export class LanguageAs {
  constructor(
    /**
     * @summary `weight`.
     * @public
     * @readonly
     */
    readonly weight: OPTIONAL<AssertionAttr_weight> /* REPLICATED_COMPONENT */,
    /**
     * @summary `base`.
     * @public
     * @readonly
     */
    readonly base: Language
  ) {}

  /**
   * @summary Restructures an object into a LanguageAs
   * @description
   *
   * This takes an `object` and converts it to a `LanguageAs`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `LanguageAs`.
   * @returns {LanguageAs}
   */
  public static _from_object(
    _o: { [_K in keyof LanguageAs]: LanguageAs[_K] }
  ): LanguageAs {
    return new LanguageAs(_o.weight, _o.base);
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
/* END_OF_SYMBOL_DEFINITION LanguageAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LanguageAs */
/**
 * @summary The Leading Root Component Types of LanguageAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_LanguageAs: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'weight',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'base',
    false,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_LanguageAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LanguageAs */
/**
 * @summary The Trailing Root Component Types of LanguageAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_LanguageAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_LanguageAs */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LanguageAs */
/**
 * @summary The Extension Addition Component Types of LanguageAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_LanguageAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_LanguageAs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LanguageAs */
let _cached_decoder_for_LanguageAs: $.ASN1Decoder<LanguageAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LanguageAs */

/* START_OF_SYMBOL_DEFINITION _decode_LanguageAs */
/**
 * @summary Decodes an ASN.1 element into a(n) LanguageAs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LanguageAs} The decoded data structure.
 */
export function _decode_LanguageAs(el: _Element) {
  if (!_cached_decoder_for_LanguageAs) {
    _cached_decoder_for_LanguageAs = function (el: _Element): LanguageAs {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let weight: OPTIONAL<AssertionAttr_weight> =
        LanguageAs._default_value_for_weight;
      let base!: Language;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        weight: (_el: _Element): void => {
          weight = _decode_AssertionAttr_weight(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_Language(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_LanguageAs,
        _extension_additions_list_spec_for_LanguageAs,
        _root_component_type_list_2_spec_for_LanguageAs,
        undefined
      );
      return new LanguageAs /* SEQUENCE_CONSTRUCTOR_CALL */(weight, base);
    };
  }
  return _cached_decoder_for_LanguageAs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LanguageAs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LanguageAs */
let _cached_encoder_for_LanguageAs: $.ASN1Encoder<LanguageAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LanguageAs */

/* START_OF_SYMBOL_DEFINITION _encode_LanguageAs */
/**
 * @summary Encodes a(n) LanguageAs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LanguageAs, encoded as an ASN.1 Element.
 */
export function _encode_LanguageAs(
  value: LanguageAs,
  elGetter: $.ASN1Encoder<LanguageAs>
) {
  if (!_cached_encoder_for_LanguageAs) {
    _cached_encoder_for_LanguageAs = function (
      value: LanguageAs,
      elGetter: $.ASN1Encoder<LanguageAs>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.weight === undefined ||
            $.deepEq(value.weight, LanguageAs._default_value_for_weight)
              ? undefined
              : _encode_AssertionAttr_weight(value.weight, $.BER),
            /* REQUIRED   */ _encode_Language(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_LanguageAs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LanguageAs */

/* eslint-enable */
