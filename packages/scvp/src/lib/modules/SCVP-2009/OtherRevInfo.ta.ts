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
import { REV_INFO } from '../SCVP-2009/REV-INFO.oca';
export { REV_INFO } from '../SCVP-2009/REV-INFO.oca';

/* START_OF_SYMBOL_DEFINITION OtherRevInfo */
/**
 * @summary OtherRevInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherRevInfo ::= SEQUENCE {
 *     riType                     REV-INFO.&id,
 *     riValue                    REV-INFO.&Type
 * }
 * ```
 *
 * @class
 */
export class OtherRevInfo {
  constructor(
    /**
     * @summary `riType`.
     * @public
     * @readonly
     */
    readonly riType: OBJECT_IDENTIFIER,
    /**
     * @summary `riValue`.
     * @public
     * @readonly
     */
    readonly riValue: _Element
  ) {}

  /**
   * @summary Restructures an object into a OtherRevInfo
   * @description
   *
   * This takes an `object` and converts it to a `OtherRevInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `OtherRevInfo`.
   * @returns {OtherRevInfo}
   */
  public static _from_object(
    _o: { [_K in keyof OtherRevInfo]: OtherRevInfo[_K] }
  ): OtherRevInfo {
    return new OtherRevInfo(_o.riType, _o.riValue);
  }
}
/* END_OF_SYMBOL_DEFINITION OtherRevInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherRevInfo */
/**
 * @summary The Leading Root Component Types of OtherRevInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OtherRevInfo: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'riType',
    false,
    $.hasTag(_TagClass.universal, 6),
    undefined,
    undefined
  ),
  new $.ComponentSpec('riValue', false, $.hasAnyTag, undefined, undefined),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherRevInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherRevInfo */
/**
 * @summary The Trailing Root Component Types of OtherRevInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OtherRevInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherRevInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherRevInfo */
/**
 * @summary The Extension Addition Component Types of OtherRevInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OtherRevInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherRevInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRevInfo */
let _cached_decoder_for_OtherRevInfo: $.ASN1Decoder<OtherRevInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRevInfo */

/* START_OF_SYMBOL_DEFINITION _decode_OtherRevInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherRevInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherRevInfo} The decoded data structure.
 */
export function _decode_OtherRevInfo(el: _Element) {
  if (!_cached_decoder_for_OtherRevInfo) {
    _cached_decoder_for_OtherRevInfo = function (el: _Element): OtherRevInfo {
      const sequence: _Element[] = el.sequence;
      if (sequence.length < 2) {
        throw new _ConstructionError(
          'OtherRevInfo contained only ' +
            sequence.length.toString() +
            ' elements.'
        );
      }
      sequence[0].name = 'riType';
      sequence[1].name = 'riValue';
      let riType!: OBJECT_IDENTIFIER;
      let riValue!: _Element;
      riType = $._decodeObjectIdentifier(sequence[0]);
      riValue = $._decodeAny(sequence[1]);
      return new OtherRevInfo(riType, riValue);
    };
  }
  return _cached_decoder_for_OtherRevInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherRevInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRevInfo */
let _cached_encoder_for_OtherRevInfo: $.ASN1Encoder<OtherRevInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRevInfo */

/* START_OF_SYMBOL_DEFINITION _encode_OtherRevInfo */
/**
 * @summary Encodes a(n) OtherRevInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRevInfo, encoded as an ASN.1 Element.
 */
export function _encode_OtherRevInfo(
  value: OtherRevInfo,
  elGetter: $.ASN1Encoder<OtherRevInfo>
) {
  if (!_cached_encoder_for_OtherRevInfo) {
    _cached_encoder_for_OtherRevInfo = function (
      value: OtherRevInfo,
      elGetter: $.ASN1Encoder<OtherRevInfo>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encodeObjectIdentifier(value.riType, $.BER),
            /* REQUIRED   */ $._encodeAny(value.riValue, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_OtherRevInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherRevInfo */

/* eslint-enable */
