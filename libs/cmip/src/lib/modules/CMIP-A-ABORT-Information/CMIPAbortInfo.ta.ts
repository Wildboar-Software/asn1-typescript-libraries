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
  CMIPAbortSource,
  _enum_for_CMIPAbortSource,
  CMIPAbortSource_cmiseServiceUser /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cmiseServiceUser /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CMIPAbortSource_cmiseServiceProvider /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cmiseServiceProvider /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_CMIPAbortSource,
  _encode_CMIPAbortSource,
} from '../CMIP-A-ABORT-Information/CMIPAbortSource.ta';
export {
  CMIPAbortSource,
  _enum_for_CMIPAbortSource,
  CMIPAbortSource_cmiseServiceUser /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cmiseServiceUser /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CMIPAbortSource_cmiseServiceProvider /* IMPORTED_LONG_ENUMERATION_ITEM */,
  cmiseServiceProvider /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_CMIPAbortSource,
  _encode_CMIPAbortSource,
} from '../CMIP-A-ABORT-Information/CMIPAbortSource.ta';

/* START_OF_SYMBOL_DEFINITION CMIPAbortInfo */
/**
 * @summary CMIPAbortInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CMIPAbortInfo ::= SEQUENCE {
 *   abortSource  [0] IMPLICIT CMIPAbortSource,
 *   userInfo     [1]  EXTERNAL OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class CMIPAbortInfo {
  constructor(
    /**
     * @summary `abortSource`.
     * @public
     * @readonly
     */
    readonly abortSource: CMIPAbortSource,
    /**
     * @summary `userInfo`.
     * @public
     * @readonly
     */
    readonly userInfo: OPTIONAL<EXTERNAL>
  ) {}

  /**
   * @summary Restructures an object into a CMIPAbortInfo
   * @description
   *
   * This takes an `object` and converts it to a `CMIPAbortInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `CMIPAbortInfo`.
   * @returns {CMIPAbortInfo}
   */
  public static _from_object(
    _o: { [_K in keyof CMIPAbortInfo]: CMIPAbortInfo[_K] }
  ): CMIPAbortInfo {
    return new CMIPAbortInfo(_o.abortSource, _o.userInfo);
  }

  /**
   * @summary The enum used as the type of the component `abortSource`
   * @public
   * @static
   */

  public static _enum_for_abortSource = _enum_for_CMIPAbortSource;
}
/* END_OF_SYMBOL_DEFINITION CMIPAbortInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CMIPAbortInfo */
/**
 * @summary The Leading Root Component Types of CMIPAbortInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CMIPAbortInfo: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'abortSource',
    false,
    $.hasTag(_TagClass.context, 0),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'userInfo',
    true,
    $.hasTag(_TagClass.context, 1),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CMIPAbortInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CMIPAbortInfo */
/**
 * @summary The Trailing Root Component Types of CMIPAbortInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CMIPAbortInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CMIPAbortInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CMIPAbortInfo */
/**
 * @summary The Extension Addition Component Types of CMIPAbortInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CMIPAbortInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CMIPAbortInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CMIPAbortInfo */
let _cached_decoder_for_CMIPAbortInfo: $.ASN1Decoder<CMIPAbortInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CMIPAbortInfo */

/* START_OF_SYMBOL_DEFINITION _decode_CMIPAbortInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) CMIPAbortInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CMIPAbortInfo} The decoded data structure.
 */
export function _decode_CMIPAbortInfo(el: _Element) {
  if (!_cached_decoder_for_CMIPAbortInfo) {
    _cached_decoder_for_CMIPAbortInfo = function (el: _Element): CMIPAbortInfo {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let abortSource!: CMIPAbortSource;
      let userInfo: OPTIONAL<EXTERNAL>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        abortSource: (_el: _Element): void => {
          abortSource = $._decode_implicit<CMIPAbortSource>(
            () => _decode_CMIPAbortSource
          )(_el);
        },
        userInfo: (_el: _Element): void => {
          userInfo = $._decode_explicit<EXTERNAL>(() => $._decodeExternal)(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_CMIPAbortInfo,
        _extension_additions_list_spec_for_CMIPAbortInfo,
        _root_component_type_list_2_spec_for_CMIPAbortInfo,
        undefined
      );
      return new CMIPAbortInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        abortSource,
        userInfo
      );
    };
  }
  return _cached_decoder_for_CMIPAbortInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CMIPAbortInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CMIPAbortInfo */
let _cached_encoder_for_CMIPAbortInfo: $.ASN1Encoder<CMIPAbortInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CMIPAbortInfo */

/* START_OF_SYMBOL_DEFINITION _encode_CMIPAbortInfo */
/**
 * @summary Encodes a(n) CMIPAbortInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CMIPAbortInfo, encoded as an ASN.1 Element.
 */
export function _encode_CMIPAbortInfo(
  value: CMIPAbortInfo,
  elGetter: $.ASN1Encoder<CMIPAbortInfo>
) {
  if (!_cached_encoder_for_CMIPAbortInfo) {
    _cached_encoder_for_CMIPAbortInfo = function (
      value: CMIPAbortInfo,
      elGetter: $.ASN1Encoder<CMIPAbortInfo>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ $._encode_implicit(
              _TagClass.context,
              0,
              () => _encode_CMIPAbortSource,
              $.BER
            )(value.abortSource, $.BER),
            /* IF_ABSENT  */ value.userInfo === undefined
              ? undefined
              : $._encode_explicit(
                  _TagClass.context,
                  1,
                  () => $._encodeExternal,
                  $.BER
                )(value.userInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_CMIPAbortInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CMIPAbortInfo */

/* eslint-enable */
