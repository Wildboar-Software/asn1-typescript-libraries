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
import { Ub64, _decode_Ub64, _encode_Ub64 } from '../Uds/Ub64.ta';
export { Ub64, _decode_Ub64, _encode_Ub64 } from '../Uds/Ub64.ta';

/* START_OF_SYMBOL_DEFINITION SubscriberName */
/**
 * @summary SubscriberName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubscriberName ::= SEQUENCE {lang  Lang OPTIONAL,
 *                              base  Ub64
 * }
 * ```
 *
 * @class
 */
export class SubscriberName {
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
    readonly base: Ub64
  ) {}

  /**
   * @summary Restructures an object into a SubscriberName
   * @description
   *
   * This takes an `object` and converts it to a `SubscriberName`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `SubscriberName`.
   * @returns {SubscriberName}
   */
  public static _from_object(
    _o: { [_K in keyof SubscriberName]: SubscriberName[_K] }
  ): SubscriberName {
    return new SubscriberName(_o.lang, _o.base);
  }
}
/* END_OF_SYMBOL_DEFINITION SubscriberName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubscriberName */
/**
 * @summary The Leading Root Component Types of SubscriberName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubscriberName: $.ComponentSpec[] = [
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SubscriberName */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubscriberName */
/**
 * @summary The Trailing Root Component Types of SubscriberName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubscriberName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SubscriberName */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubscriberName */
/**
 * @summary The Extension Addition Component Types of SubscriberName
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubscriberName: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SubscriberName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscriberName */
let _cached_decoder_for_SubscriberName: $.ASN1Decoder<SubscriberName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubscriberName */

/* START_OF_SYMBOL_DEFINITION _decode_SubscriberName */
/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubscriberName} The decoded data structure.
 */
export function _decode_SubscriberName(el: _Element) {
  if (!_cached_decoder_for_SubscriberName) {
    _cached_decoder_for_SubscriberName = function (
      el: _Element
    ): SubscriberName {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let lang: OPTIONAL<Lang>;
      let base!: Ub64;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        lang: (_el: _Element): void => {
          lang = _decode_Lang(_el);
        },
        base: (_el: _Element): void => {
          base = _decode_Ub64(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_SubscriberName,
        _extension_additions_list_spec_for_SubscriberName,
        _root_component_type_list_2_spec_for_SubscriberName,
        undefined
      );
      return new SubscriberName /* SEQUENCE_CONSTRUCTOR_CALL */(lang, base);
    };
  }
  return _cached_decoder_for_SubscriberName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubscriberName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscriberName */
let _cached_encoder_for_SubscriberName: $.ASN1Encoder<SubscriberName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubscriberName */

/* START_OF_SYMBOL_DEFINITION _encode_SubscriberName */
/**
 * @summary Encodes a(n) SubscriberName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberName, encoded as an ASN.1 Element.
 */
export function _encode_SubscriberName(
  value: SubscriberName,
  elGetter: $.ASN1Encoder<SubscriberName>
) {
  if (!_cached_encoder_for_SubscriberName) {
    _cached_encoder_for_SubscriberName = function (
      value: SubscriberName,
      elGetter: $.ASN1Encoder<SubscriberName>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_ABSENT  */ value.lang === undefined
              ? undefined
              : _encode_Lang(value.lang, $.BER),
            /* REQUIRED   */ _encode_Ub64(value.base, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_SubscriberName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubscriberName */

/* eslint-enable */
