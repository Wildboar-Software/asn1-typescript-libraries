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
  SubscrType,
  _enum_for_SubscrType,
  SubscrType_residential /* IMPORTED_LONG_ENUMERATION_ITEM */,
  residential /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubscrType_organization /* IMPORTED_LONG_ENUMERATION_ITEM */,
  organization /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubscrType_government /* IMPORTED_LONG_ENUMERATION_ITEM */,
  government /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubscrType,
  _encode_SubscrType,
} from '../Uds/SubscrType.ta';
export {
  SubscrType,
  _enum_for_SubscrType,
  SubscrType_residential /* IMPORTED_LONG_ENUMERATION_ITEM */,
  residential /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubscrType_organization /* IMPORTED_LONG_ENUMERATION_ITEM */,
  organization /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubscrType_government /* IMPORTED_LONG_ENUMERATION_ITEM */,
  government /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubscrType,
  _encode_SubscrType,
} from '../Uds/SubscrType.ta';
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

/* START_OF_SYMBOL_DEFINITION SubscriberTypeAs */
/**
 * @summary SubscriberTypeAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscriberTypeAs ::= SEQUENCE {COMPONENTS OF AssertionAttr,
 *                                base  SubscrType
 * }
 * ```
 *
 * @class
 */
export class SubscriberTypeAs {
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
    readonly base: SubscrType
  ) {}

  /**
   * @summary Restructures an object into a SubscriberTypeAs
   * @description
   *
   * This takes an `object` and converts it to a `SubscriberTypeAs`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SubscriberTypeAs`.
   * @returns {SubscriberTypeAs}
   */
  public static _from_object(
    _o: { [_K in keyof SubscriberTypeAs]: SubscriberTypeAs[_K] }
  ): SubscriberTypeAs {
    return new SubscriberTypeAs(_o.weight, _o.base);
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

  public static _enum_for_base = _enum_for_SubscrType;
}
/* END_OF_SYMBOL_DEFINITION SubscriberTypeAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubscriberTypeAs */
/**
 * @summary The Leading Root Component Types of SubscriberTypeAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubscriberTypeAs: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubscriberTypeAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubscriberTypeAs */
/**
 * @summary The Trailing Root Component Types of SubscriberTypeAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubscriberTypeAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubscriberTypeAs */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubscriberTypeAs */
/**
 * @summary The Extension Addition Component Types of SubscriberTypeAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubscriberTypeAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubscriberTypeAs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscriberTypeAs */
let _cached_decoder_for_SubscriberTypeAs: $.ASN1Decoder<SubscriberTypeAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscriberTypeAs */

/* START_OF_SYMBOL_DEFINITION _decode_SubscriberTypeAs */
/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberTypeAs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubscriberTypeAs} The decoded data structure.
 */
export function _decode_SubscriberTypeAs(el: _Element) {
  if (!_cached_decoder_for_SubscriberTypeAs) {
    _cached_decoder_for_SubscriberTypeAs = function (
      el: _Element
    ): SubscriberTypeAs {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let weight: OPTIONAL<AssertionAttr_weight> =
        SubscriberTypeAs._default_value_for_weight;
      let base!: SubscrType;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        weight: (_el: _Element): void => {
          weight = _decode_AssertionAttr_weight(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_SubscrType(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SubscriberTypeAs,
        _extension_additions_list_spec_for_SubscriberTypeAs,
        _root_component_type_list_2_spec_for_SubscriberTypeAs,
        undefined
      );
      return new SubscriberTypeAs /* SEQUENCE_CONSTRUCTOR_CALL */(weight, base);
    };
  }
  return _cached_decoder_for_SubscriberTypeAs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubscriberTypeAs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscriberTypeAs */
let _cached_encoder_for_SubscriberTypeAs: $.ASN1Encoder<SubscriberTypeAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscriberTypeAs */

/* START_OF_SYMBOL_DEFINITION _encode_SubscriberTypeAs */
/**
 * @summary Encodes a(n) SubscriberTypeAs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberTypeAs, encoded as an ASN.1 Element.
 */
export function _encode_SubscriberTypeAs(
  value: SubscriberTypeAs,
  elGetter: $.ASN1Encoder<SubscriberTypeAs>
) {
  if (!_cached_encoder_for_SubscriberTypeAs) {
    _cached_encoder_for_SubscriberTypeAs = function (
      value: SubscriberTypeAs,
      elGetter: $.ASN1Encoder<SubscriberTypeAs>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.weight === undefined ||
            $.deepEq(value.weight, SubscriberTypeAs._default_value_for_weight)
              ? undefined
              : _encode_AssertionAttr_weight(value.weight, $.BER),
            /* REQUIRED   */ _encode_SubscrType(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SubscriberTypeAs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubscriberTypeAs */

/* eslint-enable */
