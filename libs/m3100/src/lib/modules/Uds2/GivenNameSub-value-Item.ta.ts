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
  SubstringValueAttr,
  _decode_SubstringValueAttr,
  _encode_SubstringValueAttr,
} from '../Uds2/SubstringValueAttr.ta';
export {
  SubstringValueAttr,
  _decode_SubstringValueAttr,
  _encode_SubstringValueAttr,
} from '../Uds2/SubstringValueAttr.ta';
import { Ub64, _decode_Ub64, _encode_Ub64 } from '../Uds2/Ub64.ta';
export { Ub64, _decode_Ub64, _encode_Ub64 } from '../Uds2/Ub64.ta';
import {
  SubstringValueAttr_wordMatch,
  _enum_for_SubstringValueAttr_wordMatch,
  SubstringValueAttr_wordMatch_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  SubstringValueAttr_wordMatch_truncated /* IMPORTED_LONG_ENUMERATION_ITEM */,
  truncated /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringValueAttr_wordMatch_phonetic /* IMPORTED_LONG_ENUMERATION_ITEM */,
  phonetic /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubstringValueAttr_wordMatch,
  _encode_SubstringValueAttr_wordMatch,
} from '../Uds2/SubstringValueAttr-wordMatch.ta';
export {
  SubstringValueAttr_wordMatch,
  _enum_for_SubstringValueAttr_wordMatch,
  SubstringValueAttr_wordMatch_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  SubstringValueAttr_wordMatch_truncated /* IMPORTED_LONG_ENUMERATION_ITEM */,
  truncated /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringValueAttr_wordMatch_phonetic /* IMPORTED_LONG_ENUMERATION_ITEM */,
  phonetic /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubstringValueAttr_wordMatch,
  _encode_SubstringValueAttr_wordMatch,
} from '../Uds2/SubstringValueAttr-wordMatch.ta';
import {
  SubstringValueAttr_characterMatch,
  _enum_for_SubstringValueAttr_characterMatch,
  SubstringValueAttr_characterMatch_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  SubstringValueAttr_characterMatch_caseIgnore /* IMPORTED_LONG_ENUMERATION_ITEM */,
  caseIgnore /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringValueAttr_characterMatch_mapped /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mapped /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubstringValueAttr_characterMatch,
  _encode_SubstringValueAttr_characterMatch,
} from '../Uds2/SubstringValueAttr-characterMatch.ta';
export {
  SubstringValueAttr_characterMatch,
  _enum_for_SubstringValueAttr_characterMatch,
  SubstringValueAttr_characterMatch_exact /* IMPORTED_LONG_ENUMERATION_ITEM */,
  SubstringValueAttr_characterMatch_caseIgnore /* IMPORTED_LONG_ENUMERATION_ITEM */,
  caseIgnore /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  SubstringValueAttr_characterMatch_mapped /* IMPORTED_LONG_ENUMERATION_ITEM */,
  mapped /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_SubstringValueAttr_characterMatch,
  _encode_SubstringValueAttr_characterMatch,
} from '../Uds2/SubstringValueAttr-characterMatch.ta';

/* START_OF_SYMBOL_DEFINITION GivenNameSub_value_Item */
/**
 * @summary GivenNameSub_value_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GivenNameSub-value-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class GivenNameSub_value_Item {
  constructor(
    /**
     * @summary `wordMatch`.
     * @public
     * @readonly
     */
    readonly wordMatch: OPTIONAL<SubstringValueAttr_wordMatch> /* REPLICATED_COMPONENT */,
    /**
     * @summary `characterMatch`.
     * @public
     * @readonly
     */
    readonly characterMatch: OPTIONAL<SubstringValueAttr_characterMatch> /* REPLICATED_COMPONENT */,
    /**
     * @summary `base`.
     * @public
     * @readonly
     */
    readonly base: Ub64
  ) {}

  /**
   * @summary Restructures an object into a GivenNameSub_value_Item
   * @description
   *
   * This takes an `object` and converts it to a `GivenNameSub_value_Item`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `GivenNameSub_value_Item`.
   * @returns {GivenNameSub_value_Item}
   */
  public static _from_object(
    _o: { [_K in keyof GivenNameSub_value_Item]: GivenNameSub_value_Item[_K] }
  ): GivenNameSub_value_Item {
    return new GivenNameSub_value_Item(
      _o.wordMatch,
      _o.characterMatch,
      _o.base
    );
  }

  /**
   * @summary Getter that returns the default value for `wordMatch`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_wordMatch() {
    return SubstringValueAttr_wordMatch_exact;
  }
  /**
   * @summary Getter that returns the default value for `characterMatch`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_characterMatch() {
    return SubstringValueAttr_characterMatch_caseIgnore;
  }
  /**
   * @summary The enum used as the type of the component `wordMatch`
   * @public
   * @static
   */

  public static _enum_for_wordMatch = _enum_for_SubstringValueAttr_wordMatch;
  /**
   * @summary The enum used as the type of the component `characterMatch`
   * @public
   * @static
   */

  public static _enum_for_characterMatch = _enum_for_SubstringValueAttr_characterMatch;
}
/* END_OF_SYMBOL_DEFINITION GivenNameSub_value_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GivenNameSub_value_Item */
/**
 * @summary The Leading Root Component Types of GivenNameSub_value_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_GivenNameSub_value_Item: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'wordMatch',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'characterMatch',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'base',
    false,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_GivenNameSub_value_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GivenNameSub_value_Item */
/**
 * @summary The Trailing Root Component Types of GivenNameSub_value_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_GivenNameSub_value_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_GivenNameSub_value_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GivenNameSub_value_Item */
/**
 * @summary The Extension Addition Component Types of GivenNameSub_value_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_GivenNameSub_value_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_GivenNameSub_value_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GivenNameSub_value_Item */
let _cached_decoder_for_GivenNameSub_value_Item: $.ASN1Decoder<GivenNameSub_value_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GivenNameSub_value_Item */

/* START_OF_SYMBOL_DEFINITION _decode_GivenNameSub_value_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) GivenNameSub_value_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GivenNameSub_value_Item} The decoded data structure.
 */
export function _decode_GivenNameSub_value_Item(el: _Element) {
  if (!_cached_decoder_for_GivenNameSub_value_Item) {
    _cached_decoder_for_GivenNameSub_value_Item = function (
      el: _Element
    ): GivenNameSub_value_Item {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let wordMatch: OPTIONAL<SubstringValueAttr_wordMatch> =
        GivenNameSub_value_Item._default_value_for_wordMatch;
      let characterMatch: OPTIONAL<SubstringValueAttr_characterMatch> =
        GivenNameSub_value_Item._default_value_for_characterMatch;
      let base!: Ub64;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        wordMatch: (_el: _Element): void => {
          wordMatch = _decode_SubstringValueAttr_wordMatch(_el);
        },
        characterMatch: (_el: _Element): void => {
          characterMatch = _decode_SubstringValueAttr_characterMatch(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_Ub64(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_GivenNameSub_value_Item,
        _extension_additions_list_spec_for_GivenNameSub_value_Item,
        _root_component_type_list_2_spec_for_GivenNameSub_value_Item,
        undefined
      );
      return new GivenNameSub_value_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
        wordMatch,
        characterMatch,
        base
      );
    };
  }
  return _cached_decoder_for_GivenNameSub_value_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GivenNameSub_value_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GivenNameSub_value_Item */
let _cached_encoder_for_GivenNameSub_value_Item: $.ASN1Encoder<GivenNameSub_value_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GivenNameSub_value_Item */

/* START_OF_SYMBOL_DEFINITION _encode_GivenNameSub_value_Item */
/**
 * @summary Encodes a(n) GivenNameSub_value_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GivenNameSub_value_Item, encoded as an ASN.1 Element.
 */
export function _encode_GivenNameSub_value_Item(
  value: GivenNameSub_value_Item,
  elGetter: $.ASN1Encoder<GivenNameSub_value_Item>
) {
  if (!_cached_encoder_for_GivenNameSub_value_Item) {
    _cached_encoder_for_GivenNameSub_value_Item = function (
      value: GivenNameSub_value_Item,
      elGetter: $.ASN1Encoder<GivenNameSub_value_Item>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.wordMatch === undefined ||
            $.deepEq(
              value.wordMatch,
              GivenNameSub_value_Item._default_value_for_wordMatch
            )
              ? undefined
              : _encode_SubstringValueAttr_wordMatch(value.wordMatch, $.BER),
            /* IF_DEFAULT */ value.characterMatch === undefined ||
            $.deepEq(
              value.characterMatch,
              GivenNameSub_value_Item._default_value_for_characterMatch
            )
              ? undefined
              : _encode_SubstringValueAttr_characterMatch(
                  value.characterMatch,
                  $.BER
                ),
            /* REQUIRED   */ _encode_Ub64(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_GivenNameSub_value_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GivenNameSub_value_Item */

/* eslint-enable */
