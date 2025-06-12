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
import * as $ from 'asn1-ts/dist/functional.mjs';
import { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';
export { WANT_BACK } from '../SCVP-2009/WANT-BACK.oca.mjs';
import { AllWantBacks } from '../SCVP-2009/AllWantBacks.osa.mjs';
export { AllWantBacks } from '../SCVP-2009/AllWantBacks.osa.mjs';

/* START_OF_SYMBOL_DEFINITION ReplyWantBack */
/**
 * @summary ReplyWantBack
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReplyWantBack ::= SEQUENCE {
 *     wb     WANT-BACK.&id({AllWantBacks}),
 *     value  OCTET STRING
 *                 (CONTAINING WANT-BACK.&Type({AllWantBacks}{@wb}))
 * }
 * ```
 *
 * @class
 */
export class ReplyWantBack {
  constructor(
    /**
     * @summary `wb`.
     * @public
     * @readonly
     */
    readonly wb: OBJECT_IDENTIFIER,
    /**
     * @summary `value`.
     * @public
     * @readonly
     */
    readonly value: OCTET_STRING
  ) {}

  /**
   * @summary Restructures an object into a ReplyWantBack
   * @description
   *
   * This takes an `object` and converts it to a `ReplyWantBack`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ReplyWantBack`.
   * @returns {ReplyWantBack}
   */
  public static _from_object(
    _o: { [_K in keyof ReplyWantBack]: ReplyWantBack[_K] }
  ): ReplyWantBack {
    return new ReplyWantBack(_o.wb, _o.value);
  }
}
/* END_OF_SYMBOL_DEFINITION ReplyWantBack */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReplyWantBack */
/**
 * @summary The Leading Root Component Types of ReplyWantBack
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ReplyWantBack: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'wb',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'value',
    false,
    $.hasTag(_TagClass.universal, 4),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ReplyWantBack */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReplyWantBack */
/**
 * @summary The Trailing Root Component Types of ReplyWantBack
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ReplyWantBack: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ReplyWantBack */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReplyWantBack */
/**
 * @summary The Extension Addition Component Types of ReplyWantBack
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ReplyWantBack: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ReplyWantBack */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyWantBack */
let _cached_decoder_for_ReplyWantBack: $.ASN1Decoder<ReplyWantBack> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ReplyWantBack */

/* START_OF_SYMBOL_DEFINITION _decode_ReplyWantBack */
/**
 * @summary Decodes an ASN.1 element into a(n) ReplyWantBack
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReplyWantBack} The decoded data structure.
 */
export function _decode_ReplyWantBack(el: _Element) {
  if (!_cached_decoder_for_ReplyWantBack) {
    _cached_decoder_for_ReplyWantBack = function (el: _Element): ReplyWantBack {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'ReplyWantBack contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'wb';
      sequence[1].name = 'value';
      let wb!: OBJECT_IDENTIFIER;
      let value!: OCTET_STRING;
      wb = $._decodeObjectIdentifier(sequence[0]);
      value = $._decodeOctetString(sequence[1]);
      return new ReplyWantBack(wb, value);
    };
  }
  return _cached_decoder_for_ReplyWantBack(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ReplyWantBack */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyWantBack */
let _cached_encoder_for_ReplyWantBack: $.ASN1Encoder<ReplyWantBack> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ReplyWantBack */

/* START_OF_SYMBOL_DEFINITION _encode_ReplyWantBack */
/**
 * @summary Encodes a(n) ReplyWantBack into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReplyWantBack, encoded as an ASN.1 Element.
 */
export function _encode_ReplyWantBack(
  value: ReplyWantBack,
  elGetter: $.ASN1Encoder<ReplyWantBack>
) {
  if (!_cached_encoder_for_ReplyWantBack) {
    _cached_encoder_for_ReplyWantBack = function (
      value: ReplyWantBack,
      elGetter: $.ASN1Encoder<ReplyWantBack>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.wb, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.value, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ReplyWantBack(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ReplyWantBack */

/* eslint-enable */
