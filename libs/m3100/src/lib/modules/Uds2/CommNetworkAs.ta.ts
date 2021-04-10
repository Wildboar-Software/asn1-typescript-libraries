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
  NetworkType,
  _enum_for_NetworkType,
  NetworkType_pstn /* IMPORTED_LONG_ENUMERATION_ITEM */,
  pstn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */,
  isdn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_gsm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  gsm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_umts /* IMPORTED_LONG_ENUMERATION_ITEM */,
  umts /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_internet /* IMPORTED_LONG_ENUMERATION_ITEM */,
  internet /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_NetworkType,
  _encode_NetworkType,
} from '../Uds2/NetworkType.ta';
export {
  NetworkType,
  _enum_for_NetworkType,
  NetworkType_pstn /* IMPORTED_LONG_ENUMERATION_ITEM */,
  pstn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_isdn /* IMPORTED_LONG_ENUMERATION_ITEM */,
  isdn /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_gsm /* IMPORTED_LONG_ENUMERATION_ITEM */,
  gsm /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_umts /* IMPORTED_LONG_ENUMERATION_ITEM */,
  umts /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  NetworkType_internet /* IMPORTED_LONG_ENUMERATION_ITEM */,
  internet /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_NetworkType,
  _encode_NetworkType,
} from '../Uds2/NetworkType.ta';
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

/* START_OF_SYMBOL_DEFINITION CommNetworkAs */
/**
 * @summary CommNetworkAs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommNetworkAs ::= SEQUENCE {COMPONENTS OF AssertionAttr,
 *                             base  NetworkType
 * }
 * ```
 *
 * @class
 */
export class CommNetworkAs {
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
    readonly base: NetworkType
  ) {}

  /**
   * @summary Restructures an object into a CommNetworkAs
   * @description
   *
   * This takes an `object` and converts it to a `CommNetworkAs`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CommNetworkAs`.
   * @returns {CommNetworkAs}
   */
  public static _from_object(
    _o: { [_K in keyof CommNetworkAs]: CommNetworkAs[_K] }
  ): CommNetworkAs {
    return new CommNetworkAs(_o.weight, _o.base);
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

  public static _enum_for_base = _enum_for_NetworkType;
}
/* END_OF_SYMBOL_DEFINITION CommNetworkAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommNetworkAs */
/**
 * @summary The Leading Root Component Types of CommNetworkAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CommNetworkAs: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CommNetworkAs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommNetworkAs */
/**
 * @summary The Trailing Root Component Types of CommNetworkAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CommNetworkAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CommNetworkAs */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommNetworkAs */
/**
 * @summary The Extension Addition Component Types of CommNetworkAs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CommNetworkAs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CommNetworkAs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CommNetworkAs */
let _cached_decoder_for_CommNetworkAs: $.ASN1Decoder<CommNetworkAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CommNetworkAs */

/* START_OF_SYMBOL_DEFINITION _decode_CommNetworkAs */
/**
 * @summary Decodes an ASN.1 element into a(n) CommNetworkAs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CommNetworkAs} The decoded data structure.
 */
export function _decode_CommNetworkAs(el: _Element) {
  if (!_cached_decoder_for_CommNetworkAs) {
    _cached_decoder_for_CommNetworkAs = function (el: _Element): CommNetworkAs {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let weight: OPTIONAL<AssertionAttr_weight> =
        CommNetworkAs._default_value_for_weight;
      let base!: NetworkType;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        weight: (_el: _Element): void => {
          weight = _decode_AssertionAttr_weight(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_NetworkType(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CommNetworkAs,
        _extension_additions_list_spec_for_CommNetworkAs,
        _root_component_type_list_2_spec_for_CommNetworkAs,
        undefined
      );
      return new CommNetworkAs /* SEQUENCE_CONSTRUCTOR_CALL */(weight, base);
    };
  }
  return _cached_decoder_for_CommNetworkAs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CommNetworkAs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CommNetworkAs */
let _cached_encoder_for_CommNetworkAs: $.ASN1Encoder<CommNetworkAs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CommNetworkAs */

/* START_OF_SYMBOL_DEFINITION _encode_CommNetworkAs */
/**
 * @summary Encodes a(n) CommNetworkAs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommNetworkAs, encoded as an ASN.1 Element.
 */
export function _encode_CommNetworkAs(
  value: CommNetworkAs,
  elGetter: $.ASN1Encoder<CommNetworkAs>
) {
  if (!_cached_encoder_for_CommNetworkAs) {
    _cached_encoder_for_CommNetworkAs = function (
      value: CommNetworkAs,
      elGetter: $.ASN1Encoder<CommNetworkAs>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.weight === undefined ||
            $.deepEq(value.weight, CommNetworkAs._default_value_for_weight)
              ? undefined
              : _encode_AssertionAttr_weight(value.weight, $.BER),
            /* REQUIRED   */ _encode_NetworkType(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CommNetworkAs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CommNetworkAs */

/* eslint-enable */
