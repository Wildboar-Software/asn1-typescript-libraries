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
import {
  PKIStatusInfo,
  _decode_PKIStatusInfo,
  _encode_PKIStatusInfo,
} from '../PKIXCMP-2009/PKIStatusInfo.ta.js';
export {
  PKIStatusInfo,
  _decode_PKIStatusInfo,
  _encode_PKIStatusInfo,
} from '../PKIXCMP-2009/PKIStatusInfo.ta.js';
import {
  PKIFreeText,
  _decode_PKIFreeText,
  _encode_PKIFreeText,
} from '../PKIXCMP-2009/PKIFreeText.ta.js';
export {
  PKIFreeText,
  _decode_PKIFreeText,
  _encode_PKIFreeText,
} from '../PKIXCMP-2009/PKIFreeText.ta.js';

/* START_OF_SYMBOL_DEFINITION ErrorMsgContent */
/**
 * @summary ErrorMsgContent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorMsgContent ::= SEQUENCE {
 *     pKIStatusInfo          PKIStatusInfo,
 *     errorCode              INTEGER           OPTIONAL,
 *     -- implementation-specific error codes
 *     errorDetails           PKIFreeText       OPTIONAL
 *     -- implementation-specific error details
 * }
 * ```
 *
 * @class
 */
export class ErrorMsgContent {
  constructor(
    /**
     * @summary `pKIStatusInfo`.
     * @public
     * @readonly
     */
    readonly pKIStatusInfo: PKIStatusInfo,
    /**
     * @summary `errorCode`.
     * @public
     * @readonly
     */
    readonly errorCode: OPTIONAL<INTEGER>,
    /**
     * @summary `errorDetails`.
     * @public
     * @readonly
     */
    readonly errorDetails: OPTIONAL<PKIFreeText>
  ) {}

  /**
   * @summary Restructures an object into a ErrorMsgContent
   * @description
   *
   * This takes an `object` and converts it to a `ErrorMsgContent`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ErrorMsgContent`.
   * @returns {ErrorMsgContent}
   */
  public static _from_object(
    _o: { [_K in keyof ErrorMsgContent]: ErrorMsgContent[_K] }
  ): ErrorMsgContent {
    return new ErrorMsgContent(_o.pKIStatusInfo, _o.errorCode, _o.errorDetails);
  }
}
/* END_OF_SYMBOL_DEFINITION ErrorMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ErrorMsgContent */
/**
 * @summary The Leading Root Component Types of ErrorMsgContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ErrorMsgContent: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'pKIStatusInfo',
    false,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'errorCode',
    true,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'errorDetails',
    true,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ErrorMsgContent */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ErrorMsgContent */
/**
 * @summary The Trailing Root Component Types of ErrorMsgContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ErrorMsgContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ErrorMsgContent */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ErrorMsgContent */
/**
 * @summary The Extension Addition Component Types of ErrorMsgContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ErrorMsgContent: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ErrorMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorMsgContent */
let _cached_decoder_for_ErrorMsgContent: $.ASN1Decoder<ErrorMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ErrorMsgContent */

/* START_OF_SYMBOL_DEFINITION _decode_ErrorMsgContent */
/**
 * @summary Decodes an ASN.1 element into a(n) ErrorMsgContent
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ErrorMsgContent} The decoded data structure.
 */
export function _decode_ErrorMsgContent(el: _Element) {
  if (!_cached_decoder_for_ErrorMsgContent) {
    _cached_decoder_for_ErrorMsgContent = function (
      el: _Element
    ): ErrorMsgContent {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let pKIStatusInfo!: PKIStatusInfo;
      let errorCode: OPTIONAL<INTEGER>;
      let errorDetails: OPTIONAL<PKIFreeText>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        pKIStatusInfo: (_el: _Element): void => {
          pKIStatusInfo = _decode_PKIStatusInfo(_el);
        },
        errorCode: (_el: _Element): void => {
          errorCode = $._decodeInteger(_el);
        },
        errorDetails: (_el: _Element): void => {
          errorDetails = _decode_PKIFreeText(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ErrorMsgContent,
        _extension_additions_list_spec_for_ErrorMsgContent,
        _root_component_type_list_2_spec_for_ErrorMsgContent,
        undefined
      );
      return new ErrorMsgContent /* SEQUENCE_CONSTRUCTOR_CALL */(
        pKIStatusInfo,
        errorCode,
        errorDetails
      );
    };
  }
  return _cached_decoder_for_ErrorMsgContent(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ErrorMsgContent */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorMsgContent */
let _cached_encoder_for_ErrorMsgContent: $.ASN1Encoder<ErrorMsgContent> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ErrorMsgContent */

/* START_OF_SYMBOL_DEFINITION _encode_ErrorMsgContent */
/**
 * @summary Encodes a(n) ErrorMsgContent into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorMsgContent, encoded as an ASN.1 Element.
 */
export function _encode_ErrorMsgContent(
  value: ErrorMsgContent,
  elGetter: $.ASN1Encoder<ErrorMsgContent>
) {
  if (!_cached_encoder_for_ErrorMsgContent) {
    _cached_encoder_for_ErrorMsgContent = function (
      value: ErrorMsgContent,
      elGetter: $.ASN1Encoder<ErrorMsgContent>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_PKIStatusInfo(value.pKIStatusInfo, $.BER),
            /* IF_ABSENT  */ value.errorCode === undefined
              ? undefined
              : $._encodeInteger(value.errorCode, $.BER),
            /* IF_ABSENT  */ value.errorDetails === undefined
              ? undefined
              : _encode_PKIFreeText(value.errorDetails, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ErrorMsgContent(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ErrorMsgContent */

/* eslint-enable */
