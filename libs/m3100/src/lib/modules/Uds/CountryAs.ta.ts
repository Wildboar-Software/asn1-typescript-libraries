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
} from '../Uds/AssertionAttr.ta';
export {
  AssertionAttr,
  _decode_AssertionAttr,
  _encode_AssertionAttr,
} from '../Uds/AssertionAttr.ta';
import { NMTOKEN, _decode_NMTOKEN, _encode_NMTOKEN } from '../XSD/NMTOKEN.ta';
export { NMTOKEN, _decode_NMTOKEN, _encode_NMTOKEN } from '../XSD/NMTOKEN.ta';
import {
  AssertionAttr_weight,
  _enum_for_AssertionAttr_weight,
  AssertionAttr_weight_low /* IMPORTED_LONG_ENUMERATION_ITEM */,
  low /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AssertionAttr_weight_high /* IMPORTED_LONG_ENUMERATION_ITEM */,
  high /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AssertionAttr_weight,
  _encode_AssertionAttr_weight,
} from '../Uds/AssertionAttr-weight.ta';
export {
  AssertionAttr_weight,
  _enum_for_AssertionAttr_weight,
  AssertionAttr_weight_low /* IMPORTED_LONG_ENUMERATION_ITEM */,
  low /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AssertionAttr_weight_high /* IMPORTED_LONG_ENUMERATION_ITEM */,
  high /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AssertionAttr_weight,
  _encode_AssertionAttr_weight,
} from '../Uds/AssertionAttr-weight.ta';

/* START_OF_SYMBOL_DEFINITION CountryAs */
/**
 * @summary CountryAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CountryAs ::= SEQUENCE {COMPONENTS OF AssertionAttr,
 *                         base  NMTOKEN
 * }
 * ```
 *
 * @class
 */
export class CountryAs {
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
    readonly base: NMTOKEN
  ) {}

  /**
   * @summary Restructures an object into a CountryAs
   * @description
   *
   * This takes an `object` and converts it to a `CountryAs`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CountryAs`.
   * @returns {CountryAs}
   */
  public static _from_object(
    _o: { [_K in keyof CountryAs]: CountryAs[_K] }
  ): CountryAs {
    return new CountryAs(_o.weight, _o.base);
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
/* END_OF_SYMBOL_DEFINITION CountryAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CountryAs */
/**
 * @summary The Leading Root Component Types of CountryAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CountryAs: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CountryAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CountryAs */
/**
 * @summary The Trailing Root Component Types of CountryAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CountryAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CountryAs */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CountryAs */
/**
 * @summary The Extension Addition Component Types of CountryAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CountryAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CountryAs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryAs */
let _cached_decoder_for_CountryAs: $.ASN1Decoder<CountryAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CountryAs */

/* START_OF_SYMBOL_DEFINITION _decode_CountryAs */
/**
 * @summary Decodes an ASN.1 element into a(n) CountryAs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CountryAs} The decoded data structure.
 */
export function _decode_CountryAs(el: _Element) {
  if (!_cached_decoder_for_CountryAs) {
    _cached_decoder_for_CountryAs = function (el: _Element): CountryAs {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let weight: OPTIONAL<AssertionAttr_weight> =
        CountryAs._default_value_for_weight;
      let base!: NMTOKEN;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        weight: (_el: _Element): void => {
          weight = _decode_AssertionAttr_weight(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_NMTOKEN(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CountryAs,
        _extension_additions_list_spec_for_CountryAs,
        _root_component_type_list_2_spec_for_CountryAs,
        undefined
      );
      return new CountryAs /* SEQUENCE_CONSTRUCTOR_CALL */(weight, base);
    };
  }
  return _cached_decoder_for_CountryAs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CountryAs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryAs */
let _cached_encoder_for_CountryAs: $.ASN1Encoder<CountryAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CountryAs */

/* START_OF_SYMBOL_DEFINITION _encode_CountryAs */
/**
 * @summary Encodes a(n) CountryAs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CountryAs, encoded as an ASN.1 Element.
 */
export function _encode_CountryAs(
  value: CountryAs,
  elGetter: $.ASN1Encoder<CountryAs>
) {
  if (!_cached_encoder_for_CountryAs) {
    _cached_encoder_for_CountryAs = function (
      value: CountryAs,
      elGetter: $.ASN1Encoder<CountryAs>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.weight === undefined ||
            $.deepEq(value.weight, CountryAs._default_value_for_weight)
              ? undefined
              : _encode_AssertionAttr_weight(value.weight, $.BER),
            /* REQUIRED   */ _encode_NMTOKEN(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CountryAs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CountryAs */

/* eslint-enable */
