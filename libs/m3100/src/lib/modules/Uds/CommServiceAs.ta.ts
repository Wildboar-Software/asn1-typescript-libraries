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
  ComServiceType,
  _enum_for_ComServiceType,
  ComServiceType_voice /* IMPORTED_LONG_ENUMERATION_ITEM */,
  voice /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_fax /* IMPORTED_LONG_ENUMERATION_ITEM */,
  fax /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_textPhone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  textPhone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_videoPhone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  videoPhone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_publicPhoneBox /* IMPORTED_LONG_ENUMERATION_ITEM */,
  publicPhoneBox /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_switchBoard /* IMPORTED_LONG_ENUMERATION_ITEM */,
  switchBoard /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_pager /* IMPORTED_LONG_ENUMERATION_ITEM */,
  pager /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
  data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_e_mail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  e_mail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_web /* IMPORTED_LONG_ENUMERATION_ITEM */,
  web /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ComServiceType,
  _encode_ComServiceType,
} from '../Uds/ComServiceType.ta';
export {
  ComServiceType,
  _enum_for_ComServiceType,
  ComServiceType_voice /* IMPORTED_LONG_ENUMERATION_ITEM */,
  voice /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_fax /* IMPORTED_LONG_ENUMERATION_ITEM */,
  fax /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_textPhone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  textPhone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_videoPhone /* IMPORTED_LONG_ENUMERATION_ITEM */,
  videoPhone /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_publicPhoneBox /* IMPORTED_LONG_ENUMERATION_ITEM */,
  publicPhoneBox /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_switchBoard /* IMPORTED_LONG_ENUMERATION_ITEM */,
  switchBoard /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_pager /* IMPORTED_LONG_ENUMERATION_ITEM */,
  pager /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_data /* IMPORTED_LONG_ENUMERATION_ITEM */,
  data /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_e_mail /* IMPORTED_LONG_ENUMERATION_ITEM */,
  e_mail /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  ComServiceType_web /* IMPORTED_LONG_ENUMERATION_ITEM */,
  web /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_ComServiceType,
  _encode_ComServiceType,
} from '../Uds/ComServiceType.ta';
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

/* START_OF_SYMBOL_DEFINITION CommServiceAs */
/**
 * @summary CommServiceAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommServiceAs ::= SEQUENCE {COMPONENTS OF AssertionAttr,
 *                             base  ComServiceType
 * }
 * ```
 *
 * @class
 */
export class CommServiceAs {
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
    readonly base: ComServiceType
  ) {}

  /**
   * @summary Restructures an object into a CommServiceAs
   * @description
   *
   * This takes an `object` and converts it to a `CommServiceAs`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CommServiceAs`.
   * @returns {CommServiceAs}
   */
  public static _from_object(
    _o: { [_K in keyof CommServiceAs]: CommServiceAs[_K] }
  ): CommServiceAs {
    return new CommServiceAs(_o.weight, _o.base);
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

  public static _enum_for_base = _enum_for_ComServiceType;
}
/* END_OF_SYMBOL_DEFINITION CommServiceAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommServiceAs */
/**
 * @summary The Leading Root Component Types of CommServiceAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommServiceAs: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommServiceAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommServiceAs */
/**
 * @summary The Trailing Root Component Types of CommServiceAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommServiceAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommServiceAs */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommServiceAs */
/**
 * @summary The Extension Addition Component Types of CommServiceAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommServiceAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommServiceAs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommServiceAs */
let _cached_decoder_for_CommServiceAs: $.ASN1Decoder<CommServiceAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommServiceAs */

/* START_OF_SYMBOL_DEFINITION _decode_CommServiceAs */
/**
 * @summary Decodes an ASN.1 element into a(n) CommServiceAs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommServiceAs} The decoded data structure.
 */
export function _decode_CommServiceAs(el: _Element) {
  if (!_cached_decoder_for_CommServiceAs) {
    _cached_decoder_for_CommServiceAs = function (el: _Element): CommServiceAs {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let weight: OPTIONAL<AssertionAttr_weight> =
        CommServiceAs._default_value_for_weight;
      let base!: ComServiceType;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        weight: (_el: _Element): void => {
          weight = _decode_AssertionAttr_weight(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_ComServiceType(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CommServiceAs,
        _extension_additions_list_spec_for_CommServiceAs,
        _root_component_type_list_2_spec_for_CommServiceAs,
        undefined
      );
      return new CommServiceAs /* SEQUENCE_CONSTRUCTOR_CALL */(weight, base);
    };
  }
  return _cached_decoder_for_CommServiceAs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommServiceAs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommServiceAs */
let _cached_encoder_for_CommServiceAs: $.ASN1Encoder<CommServiceAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommServiceAs */

/* START_OF_SYMBOL_DEFINITION _encode_CommServiceAs */
/**
 * @summary Encodes a(n) CommServiceAs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommServiceAs, encoded as an ASN.1 Element.
 */
export function _encode_CommServiceAs(
  value: CommServiceAs,
  elGetter: $.ASN1Encoder<CommServiceAs>
) {
  if (!_cached_encoder_for_CommServiceAs) {
    _cached_encoder_for_CommServiceAs = function (
      value: CommServiceAs,
      elGetter: $.ASN1Encoder<CommServiceAs>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.weight === undefined ||
            $.deepEq(value.weight, CommServiceAs._default_value_for_weight)
              ? undefined
              : _encode_AssertionAttr_weight(value.weight, $.BER),
            /* REQUIRED   */ _encode_ComServiceType(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CommServiceAs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommServiceAs */

/* eslint-enable */
