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
  SubstringAttr,
  _decode_SubstringAttr,
  _encode_SubstringAttr,
} from '../Uds/SubstringAttr.ta';
export {
  SubstringAttr,
  _decode_SubstringAttr,
  _encode_SubstringAttr,
} from '../Uds/SubstringAttr.ta';
import {
  UrlSub_value_Item,
  _decode_UrlSub_value_Item,
  _encode_UrlSub_value_Item,
} from '../Uds/UrlSub-value-Item.ta';
export {
  UrlSub_value_Item,
  _decode_UrlSub_value_Item,
  _encode_UrlSub_value_Item,
} from '../Uds/UrlSub-value-Item.ta';
import {
  SubstringAttr_string,
  _enum_for_SubstringAttr_string,
  SubstringAttr_string_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  exact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_string_deletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  deletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_string_restrDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  restrDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_string_permutation /* IMPORTED_LONG_ENUMERATION_ITEM */,
  permutation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_string_permutationAndDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  permutationAndDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_string_providerDefined /* IMPORTED_LONG_ENUMERATION_ITEM */,
  providerDefined /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubstringAttr_string,
  _encode_SubstringAttr_string,
} from '../Uds/SubstringAttr-string.ta';
export {
  SubstringAttr_string,
  _enum_for_SubstringAttr_string,
  SubstringAttr_string_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  exact /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_string_deletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  deletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_string_restrDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  restrDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_string_permutation /* IMPORTED_LONG_ENUMERATION_ITEM */,
  permutation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_string_permutationAndDeletion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  permutationAndDeletion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_string_providerDefined /* IMPORTED_LONG_ENUMERATION_ITEM */,
  providerDefined /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubstringAttr_string,
  _encode_SubstringAttr_string,
} from '../Uds/SubstringAttr-string.ta';
import {
  SubstringAttr_weight,
  _enum_for_SubstringAttr_weight,
  SubstringAttr_weight_low /* IMPORTED_LONG_ENUMERATION_ITEM */,
  low /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_weight_high /* IMPORTED_LONG_ENUMERATION_ITEM */,
  high /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubstringAttr_weight,
  _encode_SubstringAttr_weight,
} from '../Uds/SubstringAttr-weight.ta';
export {
  SubstringAttr_weight,
  _enum_for_SubstringAttr_weight,
  SubstringAttr_weight_low /* IMPORTED_LONG_ENUMERATION_ITEM */,
  low /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringAttr_weight_high /* IMPORTED_LONG_ENUMERATION_ITEM */,
  high /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubstringAttr_weight,
  _encode_SubstringAttr_weight,
} from '../Uds/SubstringAttr-weight.ta';

/* START_OF_SYMBOL_DEFINITION UrlSub */
/**
 * @summary UrlSub
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UrlSub ::= SEQUENCE {
 *   COMPONENTS OF SubstringAttr,
 *   value
 *     SEQUENCE (SIZE (1..MAX)) OF
 *       SEQUENCE {COMPONENTS OF SubstringValueAttr,
 *                 base  Ub1024}
 * }
 * ```
 *
 * @class
 */
export class UrlSub {
  constructor(
    /**
     * @summary `string_`.
     * @public
     * @readonly
     */
    readonly string_: OPTIONAL<SubstringAttr_string> /* REPLICATED_COMPONENT */,
    /**
     * @summary `weight`.
     * @public
     * @readonly
     */
    readonly weight: OPTIONAL<SubstringAttr_weight> /* REPLICATED_COMPONENT */,
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: UrlSub_value_Item[]
  ) {}

  /**
   * @summary Restructures an object into a UrlSub
   * @description
   *
   * This takes an `object` and converts it to a `UrlSub`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `UrlSub`.
   * @returns {UrlSub}
   */
  public static _from_object(_o: { [_K in keyof UrlSub]: UrlSub[_K] }): UrlSub {
    return new UrlSub(_o.string_, _o.weight, _o.value);
  }

  /**
   * @summary Getter that returns the default value for `string_`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_string_() {
    return SubstringAttr_string_exact;
  }
  /**
   * @summary Getter that returns the default value for `weight`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_weight() {
    return SubstringAttr_weight_high;
  }
  /**
   * @summary The enum used as the type of the component `string_`
   * @public
   * @static
   */

  public static _enum_for_string_ = _enum_for_SubstringAttr_string;
  /**
   * @summary The enum used as the type of the component `weight`
   * @public
   * @static
   */

  public static _enum_for_weight = _enum_for_SubstringAttr_weight;
}
/* END_OF_SYMBOL_DEFINITION UrlSub */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UrlSub */
/**
 * @summary The Leading Root Component Types of UrlSub
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UrlSub: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'string',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'weight',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'value',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_UrlSub */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UrlSub */
/**
 * @summary The Trailing Root Component Types of UrlSub
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UrlSub: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_UrlSub */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UrlSub */
/**
 * @summary The Extension Addition Component Types of UrlSub
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UrlSub: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_UrlSub */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UrlSub */
let _cached_decoder_for_UrlSub: $.ASN1Decoder<UrlSub> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UrlSub */

/* START_OF_SYMBOL_DEFINITION _decode_UrlSub */
/**
 * @summary Decodes an ASN.1 element into a(n) UrlSub
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UrlSub} The decoded data structure.
 */
export function _decode_UrlSub(el: _Element) {
  if (!_cached_decoder_for_UrlSub) {
    _cached_decoder_for_UrlSub = function (el: _Element): UrlSub {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let string_: OPTIONAL<SubstringAttr_string> =
        UrlSub._default_value_for_string_;
      let weight: OPTIONAL<SubstringAttr_weight> =
        UrlSub._default_value_for_weight;
      let value!: UrlSub_value_Item[];
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        string: (_el: _Element): void => {
          string_ = _decode_SubstringAttr_string(_el);
        },
        weight: (_el: _Element): void => {
          weight = _decode_SubstringAttr_weight(_el);
        },
        value: (_el: _Element): void => {
          value = $._decodeSequenceOf<UrlSub_value_Item>(
            () => _decode_UrlSub_value_Item
          )(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_UrlSub,
        _extension_additions_list_spec_for_UrlSub,
        _root_component_type_list_2_spec_for_UrlSub,
        undefined
      );
      return new UrlSub /* SEQUENCE_CONSTRUCTOR_CALL */(string_, weight, value);
    };
  }
  return _cached_decoder_for_UrlSub(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UrlSub */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UrlSub */
let _cached_encoder_for_UrlSub: $.ASN1Encoder<UrlSub> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UrlSub */

/* START_OF_SYMBOL_DEFINITION _encode_UrlSub */
/**
 * @summary Encodes a(n) UrlSub into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UrlSub, encoded as an ASN.1 Element.
 */
export function _encode_UrlSub(value: UrlSub, elGetter: $.ASN1Encoder<UrlSub>) {
  if (!_cached_encoder_for_UrlSub) {
    _cached_encoder_for_UrlSub = function (
      value: UrlSub,
      elGetter: $.ASN1Encoder<UrlSub>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.string_ === undefined ||
            $.deepEq(value.string_, UrlSub._default_value_for_string_)
              ? undefined
              : _encode_SubstringAttr_string(value.string_, $.BER),
            /* IF_DEFAULT */ value.weight === undefined ||
            $.deepEq(value.weight, UrlSub._default_value_for_weight)
              ? undefined
              : _encode_SubstringAttr_weight(value.weight, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<UrlSub_value_Item>(
              () => _encode_UrlSub_value_Item,
              $.BER
            )(value.value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_UrlSub(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UrlSub */

/* eslint-enable */
