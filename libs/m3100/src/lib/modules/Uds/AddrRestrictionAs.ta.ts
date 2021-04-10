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
  AddrRestrictionType,
  _enum_for_AddrRestrictionType,
  AddrRestrictionType_public /* IMPORTED_LONG_ENUMERATION_ITEM */,
  public_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_secret /* IMPORTED_LONG_ENUMERATION_ITEM */,
  secret /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_call_screen /* IMPORTED_LONG_ENUMERATION_ITEM */,
  call_screen /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_no_marketing /* IMPORTED_LONG_ENUMERATION_ITEM */,
  no_marketing /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_complete_only /* IMPORTED_LONG_ENUMERATION_ITEM */,
  complete_only /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrRestrictionType,
  _encode_AddrRestrictionType,
} from '../Uds/AddrRestrictionType.ta';
export {
  AddrRestrictionType,
  _enum_for_AddrRestrictionType,
  AddrRestrictionType_public /* IMPORTED_LONG_ENUMERATION_ITEM */,
  public_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_secret /* IMPORTED_LONG_ENUMERATION_ITEM */,
  secret /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_call_screen /* IMPORTED_LONG_ENUMERATION_ITEM */,
  call_screen /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_no_marketing /* IMPORTED_LONG_ENUMERATION_ITEM */,
  no_marketing /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  AddrRestrictionType_complete_only /* IMPORTED_LONG_ENUMERATION_ITEM */,
  complete_only /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_AddrRestrictionType,
  _encode_AddrRestrictionType,
} from '../Uds/AddrRestrictionType.ta';
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

/* START_OF_SYMBOL_DEFINITION AddrRestrictionAs */
/**
 * @summary AddrRestrictionAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddrRestrictionAs ::= SEQUENCE {
 *   COMPONENTS OF AssertionAttr,
 *   base  AddrRestrictionType
 * }
 * ```
 *
 * @class
 */
export class AddrRestrictionAs {
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
    readonly base: AddrRestrictionType
  ) {}

  /**
   * @summary Restructures an object into a AddrRestrictionAs
   * @description
   *
   * This takes an `object` and converts it to a `AddrRestrictionAs`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `AddrRestrictionAs`.
   * @returns {AddrRestrictionAs}
   */
  public static _from_object(
    _o: { [_K in keyof AddrRestrictionAs]: AddrRestrictionAs[_K] }
  ): AddrRestrictionAs {
    return new AddrRestrictionAs(_o.weight, _o.base);
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

  public static _enum_for_base = _enum_for_AddrRestrictionType;
}
/* END_OF_SYMBOL_DEFINITION AddrRestrictionAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddrRestrictionAs */
/**
 * @summary The Leading Root Component Types of AddrRestrictionAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AddrRestrictionAs: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_AddrRestrictionAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddrRestrictionAs */
/**
 * @summary The Trailing Root Component Types of AddrRestrictionAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AddrRestrictionAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_AddrRestrictionAs */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddrRestrictionAs */
/**
 * @summary The Extension Addition Component Types of AddrRestrictionAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AddrRestrictionAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_AddrRestrictionAs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrRestrictionAs */
let _cached_decoder_for_AddrRestrictionAs: $.ASN1Decoder<AddrRestrictionAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddrRestrictionAs */

/* START_OF_SYMBOL_DEFINITION _decode_AddrRestrictionAs */
/**
 * @summary Decodes an ASN.1 element into a(n) AddrRestrictionAs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddrRestrictionAs} The decoded data structure.
 */
export function _decode_AddrRestrictionAs(el: _Element) {
  if (!_cached_decoder_for_AddrRestrictionAs) {
    _cached_decoder_for_AddrRestrictionAs = function (
      el: _Element
    ): AddrRestrictionAs {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let weight: OPTIONAL<AssertionAttr_weight> =
        AddrRestrictionAs._default_value_for_weight;
      let base!: AddrRestrictionType;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        weight: (_el: _Element): void => {
          weight = _decode_AssertionAttr_weight(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_AddrRestrictionType(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_AddrRestrictionAs,
        _extension_additions_list_spec_for_AddrRestrictionAs,
        _root_component_type_list_2_spec_for_AddrRestrictionAs,
        undefined
      );
      return new AddrRestrictionAs /* SEQUENCE_CONSTRUCTOR_CALL */(
        weight,
        base
      );
    };
  }
  return _cached_decoder_for_AddrRestrictionAs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddrRestrictionAs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrRestrictionAs */
let _cached_encoder_for_AddrRestrictionAs: $.ASN1Encoder<AddrRestrictionAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddrRestrictionAs */

/* START_OF_SYMBOL_DEFINITION _encode_AddrRestrictionAs */
/**
 * @summary Encodes a(n) AddrRestrictionAs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddrRestrictionAs, encoded as an ASN.1 Element.
 */
export function _encode_AddrRestrictionAs(
  value: AddrRestrictionAs,
  elGetter: $.ASN1Encoder<AddrRestrictionAs>
) {
  if (!_cached_encoder_for_AddrRestrictionAs) {
    _cached_encoder_for_AddrRestrictionAs = function (
      value: AddrRestrictionAs,
      elGetter: $.ASN1Encoder<AddrRestrictionAs>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.weight === undefined ||
            $.deepEq(value.weight, AddrRestrictionAs._default_value_for_weight)
              ? undefined
              : _encode_AssertionAttr_weight(value.weight, $.BER),
            /* REQUIRED   */ _encode_AddrRestrictionType(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_AddrRestrictionAs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddrRestrictionAs */

/* eslint-enable */
