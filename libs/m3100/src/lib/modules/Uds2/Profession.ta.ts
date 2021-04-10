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
import { Lang, _decode_Lang, _encode_Lang } from '../Xml/Lang.ta';
export { Lang, _decode_Lang, _encode_Lang } from '../Xml/Lang.ta';
import { Ub128, _decode_Ub128, _encode_Ub128 } from '../Uds2/Ub128.ta';
export { Ub128, _decode_Ub128, _encode_Ub128 } from '../Uds2/Ub128.ta';

/* START_OF_SYMBOL_DEFINITION Profession */
/**
 * @summary Profession
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Profession ::= SEQUENCE {lang  Lang OPTIONAL,
 *                          base  Ub128
 * }
 * ```
 *
 * @class
 */
export class Profession {
  constructor(
    /**
     * @summary `lang`.
     * @public
     * @readonly
     */
    readonly lang: OPTIONAL<Lang>,
    /**
     * @summary `base`.
     * @public
     * @readonly
     */
    readonly base: Ub128
  ) {}

  /**
   * @summary Restructures an object into a Profession
   * @description
   *
   * This takes an `object` and converts it to a `Profession`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `Profession`.
   * @returns {Profession}
   */
  public static _from_object(
    _o: { [_K in keyof Profession]: Profession[_K] }
  ): Profession {
    return new Profession(_o.lang, _o.base);
  }
}
/* END_OF_SYMBOL_DEFINITION Profession */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Profession */
/**
 * @summary The Leading Root Component Types of Profession
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Profession: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'lang',
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Profession */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Profession */
/**
 * @summary The Trailing Root Component Types of Profession
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Profession: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Profession */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Profession */
/**
 * @summary The Extension Addition Component Types of Profession
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Profession: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Profession */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Profession */
let _cached_decoder_for_Profession: $.ASN1Decoder<Profession> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Profession */

/* START_OF_SYMBOL_DEFINITION _decode_Profession */
/**
 * @summary Decodes an ASN.1 element into a(n) Profession
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Profession} The decoded data structure.
 */
export function _decode_Profession(el: _Element) {
  if (!_cached_decoder_for_Profession) {
    _cached_decoder_for_Profession = function (el: _Element): Profession {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let lang: OPTIONAL<Lang>;
      let base!: Ub128;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        lang: (_el: _Element): void => {
          lang = _decode_Lang(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_Ub128(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_Profession,
        _extension_additions_list_spec_for_Profession,
        _root_component_type_list_2_spec_for_Profession,
        undefined
      );
      return new Profession /* SEQUENCE_CONSTRUCTOR_CALL */(lang, base);
    };
  }
  return _cached_decoder_for_Profession(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Profession */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Profession */
let _cached_encoder_for_Profession: $.ASN1Encoder<Profession> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Profession */

/* START_OF_SYMBOL_DEFINITION _encode_Profession */
/**
 * @summary Encodes a(n) Profession into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Profession, encoded as an ASN.1 Element.
 */
export function _encode_Profession(
  value: Profession,
  elGetter: $.ASN1Encoder<Profession>
) {
  if (!_cached_encoder_for_Profession) {
    _cached_encoder_for_Profession = function (
      value: Profession,
      elGetter: $.ASN1Encoder<Profession>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.lang === undefined
              ? undefined
              : _encode_Lang(value.lang, $.BER),
            /* REQUIRED   */ _encode_Ub128(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_Profession(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Profession */

/* eslint-enable */
