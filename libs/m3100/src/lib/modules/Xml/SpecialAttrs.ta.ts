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
import { Base, _decode_Base, _encode_Base } from '../Xml/Base.ta';
export { Base, _decode_Base, _encode_Base } from '../Xml/Base.ta';
import { Lang, _decode_Lang, _encode_Lang } from '../Xml/Lang.ta';
export { Lang, _decode_Lang, _encode_Lang } from '../Xml/Lang.ta';
import {
  Space,
  _enum_for_Space,
  Space_default /* IMPORTED_LONG_ENUMERATION_ITEM */,
  default_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Space_preserve /* IMPORTED_LONG_ENUMERATION_ITEM */,
  preserve /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Space,
  _encode_Space,
} from '../Xml/Space.ta';
export {
  Space,
  _enum_for_Space,
  Space_default /* IMPORTED_LONG_ENUMERATION_ITEM */,
  default_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  Space_preserve /* IMPORTED_LONG_ENUMERATION_ITEM */,
  preserve /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_Space,
  _encode_Space,
} from '../Xml/Space.ta';

/* START_OF_SYMBOL_DEFINITION SpecialAttrs */
/**
 * @summary SpecialAttrs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpecialAttrs ::= SEQUENCE {
 *   base   Base OPTIONAL,
 *   lang   Lang OPTIONAL,
 *   space  Space OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class SpecialAttrs {
  constructor(
    /**
     * @summary `base`.
     * @public
     * @readonly
     */
    readonly base: OPTIONAL<Base>,
    /**
     * @summary `lang`.
     * @public
     * @readonly
     */
    readonly lang: OPTIONAL<Lang>,
    /**
     * @summary `space`.
     * @public
     * @readonly
     */
    readonly space: OPTIONAL<Space>
  ) {}

  /**
   * @summary Restructures an object into a SpecialAttrs
   * @description
   *
   * This takes an `object` and converts it to a `SpecialAttrs`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SpecialAttrs`.
   * @returns {SpecialAttrs}
   */
  public static _from_object(
    _o: { [_K in keyof SpecialAttrs]: SpecialAttrs[_K] }
  ): SpecialAttrs {
    return new SpecialAttrs(_o.base, _o.lang, _o.space);
  }

  /**
   * @summary The enum used as the type of the component `space`
   * @public
   * @static
   */

  public static _enum_for_space = _enum_for_Space;
}
/* END_OF_SYMBOL_DEFINITION SpecialAttrs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecialAttrs */
/**
 * @summary The Leading Root Component Types of SpecialAttrs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SpecialAttrs: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'base',
    true,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'lang',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'space',
    true,
    $.hasTag(_TagClass.context, 2),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SpecialAttrs */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecialAttrs */
/**
 * @summary The Trailing Root Component Types of SpecialAttrs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SpecialAttrs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SpecialAttrs */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecialAttrs */
/**
 * @summary The Extension Addition Component Types of SpecialAttrs
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SpecialAttrs: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SpecialAttrs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecialAttrs */
let _cached_decoder_for_SpecialAttrs: $.ASN1Decoder<SpecialAttrs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SpecialAttrs */

/* START_OF_SYMBOL_DEFINITION _decode_SpecialAttrs */
/**
 * @summary Decodes an ASN.1 element into a(n) SpecialAttrs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecialAttrs} The decoded data structure.
 */
export function _decode_SpecialAttrs(el: _Element) {
  if (!_cached_decoder_for_SpecialAttrs) {
    _cached_decoder_for_SpecialAttrs = function (el: _Element): SpecialAttrs {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let base: OPTIONAL<Base>;
      let lang: OPTIONAL<Lang>;
      let space: OPTIONAL<Space>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        base: (_el: _Element): void => {
          base = _decode_Base(_el);
        },
        lang: (_el: _Element): void => {
          lang = _decode_Lang(_el);
        },
        space: (_el: _Element): void => {
          space = _decode_Space(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SpecialAttrs,
        _extension_additions_list_spec_for_SpecialAttrs,
        _root_component_type_list_2_spec_for_SpecialAttrs,
        undefined
      );
      return new SpecialAttrs /* SEQUENCE_CONSTRUCTOR_CALL */(
        base,
        lang,
        space
      );
    };
  }
  return _cached_decoder_for_SpecialAttrs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SpecialAttrs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecialAttrs */
let _cached_encoder_for_SpecialAttrs: $.ASN1Encoder<SpecialAttrs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SpecialAttrs */

/* START_OF_SYMBOL_DEFINITION _encode_SpecialAttrs */
/**
 * @summary Encodes a(n) SpecialAttrs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecialAttrs, encoded as an ASN.1 Element.
 */
export function _encode_SpecialAttrs(
  value: SpecialAttrs,
  elGetter: $.ASN1Encoder<SpecialAttrs>
) {
  if (!_cached_encoder_for_SpecialAttrs) {
    _cached_encoder_for_SpecialAttrs = function (
      value: SpecialAttrs,
      elGetter: $.ASN1Encoder<SpecialAttrs>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.base === undefined
              ? undefined
              : _encode_Base(value.base, $.BER),
            /* IF_ABSENT  */ value.lang === undefined
              ? undefined
              : _encode_Lang(value.lang, $.BER),
            /* IF_ABSENT  */ value.space === undefined
              ? undefined
              : _encode_Space(value.space, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SpecialAttrs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SpecialAttrs */

/* eslint-enable */
