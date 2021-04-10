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
import {
  AddrTariffType,
  _enum_for_AddrTariffType,
  AddrTariffType_normal /* IMPORTED_LONG_ENUMERATION_ITEM */,
  normal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrTariffType_premium /* IMPORTED_LONG_ENUMERATION_ITEM */,
  premium /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrTariffType_toll_free /* IMPORTED_LONG_ENUMERATION_ITEM */,
  toll_free /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrTariffType,
  _encode_AddrTariffType,
} from '../Uds/AddrTariffType.ta';
export {
  AddrTariffType,
  _enum_for_AddrTariffType,
  AddrTariffType_normal /* IMPORTED_LONG_ENUMERATION_ITEM */,
  normal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrTariffType_premium /* IMPORTED_LONG_ENUMERATION_ITEM */,
  premium /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrTariffType_toll_free /* IMPORTED_LONG_ENUMERATION_ITEM */,
  toll_free /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrTariffType,
  _encode_AddrTariffType,
} from '../Uds/AddrTariffType.ta';
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

/* START_OF_SYMBOL_DEFINITION AddrTariffAs */
/**
 * @summary AddrTariffAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrTariffAs ::= SEQUENCE {COMPONENTS OF AssertionAttr,
 *                            base  AddrTariffType
 * }
 * ```
 *
 * @class
 */
export class AddrTariffAs {
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
    readonly base: AddrTariffType
  ) {}

  /**
   * @summary Restructures an object into a AddrTariffAs
   * @description
   *
   * This takes an `object` and converts it to a `AddrTariffAs`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AddrTariffAs`.
   * @returns {AddrTariffAs}
   */
  public static _from_object(
    _o: { [_K in keyof AddrTariffAs]: AddrTariffAs[_K] }
  ): AddrTariffAs {
    return new AddrTariffAs(_o.weight, _o.base);
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
  /**
   * @summary The enum used as the type of the component `base`
   * @public
   * @static
   */

  public static _enum_for_base = _enum_for_AddrTariffType;
}
/* END_OF_SYMBOL_DEFINITION AddrTariffAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddrTariffAs */
/**
 * @summary The Leading Root Component Types of AddrTariffAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddrTariffAs: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddrTariffAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddrTariffAs */
/**
 * @summary The Trailing Root Component Types of AddrTariffAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddrTariffAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddrTariffAs */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddrTariffAs */
/**
 * @summary The Extension Addition Component Types of AddrTariffAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddrTariffAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddrTariffAs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrTariffAs */
let _cached_decoder_for_AddrTariffAs: $.ASN1Decoder<AddrTariffAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrTariffAs */

/* START_OF_SYMBOL_DEFINITION _decode_AddrTariffAs */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrTariffAs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrTariffAs} The decoded data structure.
 */
export function _decode_AddrTariffAs(el: _Element) {
  if (!_cached_decoder_for_AddrTariffAs) {
    _cached_decoder_for_AddrTariffAs = function (el: _Element): AddrTariffAs {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let weight: OPTIONAL<AssertionAttr_weight> =
        AddrTariffAs._default_value_for_weight;
      let base!: AddrTariffType;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        weight: (_el: _Element): void => {
          weight = _decode_AssertionAttr_weight(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_AddrTariffType(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AddrTariffAs,
        _extension_additions_list_spec_for_AddrTariffAs,
        _root_component_type_list_2_spec_for_AddrTariffAs,
        undefined
      );
      return new AddrTariffAs /* SEQUENCE_CONSTRUCTOR_CALL */(weight, base);
    };
  }
  return _cached_decoder_for_AddrTariffAs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrTariffAs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrTariffAs */
let _cached_encoder_for_AddrTariffAs: $.ASN1Encoder<AddrTariffAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrTariffAs */

/* START_OF_SYMBOL_DEFINITION _encode_AddrTariffAs */
/**
 * @summary Encodes a(n) AddrTariffAs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrTariffAs, encoded as an ASN.1 Element.
 */
export function _encode_AddrTariffAs(
  value: AddrTariffAs,
  elGetter: $.ASN1Encoder<AddrTariffAs>
) {
  if (!_cached_encoder_for_AddrTariffAs) {
    _cached_encoder_for_AddrTariffAs = function (
      value: AddrTariffAs,
      elGetter: $.ASN1Encoder<AddrTariffAs>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.weight === undefined ||
            $.deepEq(value.weight, AddrTariffAs._default_value_for_weight)
              ? undefined
              : _encode_AssertionAttr_weight(value.weight, $.BER),
            /* REQUIRED   */ _encode_AddrTariffType(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AddrTariffAs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrTariffAs */

/* eslint-enable */
