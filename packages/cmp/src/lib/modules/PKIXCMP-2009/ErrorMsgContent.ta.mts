/* eslint-disable */
import {
  OPTIONAL,
  INTEGER,
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
} from '../PKIXCMP-2009/PKIStatusInfo.ta.mjs';
import {
  PKIFreeText,
  _decode_PKIFreeText,
  _encode_PKIFreeText,
} from '../PKIXCMP-2009/PKIFreeText.ta.mjs';

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


/**
 * @summary The Trailing Root Component Types of ErrorMsgContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ErrorMsgContent: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ErrorMsgContent
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ErrorMsgContent: $.ComponentSpec[] = [];


let _cached_decoder_for_ErrorMsgContent: $.ASN1Decoder<ErrorMsgContent> | null = null;


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


let _cached_encoder_for_ErrorMsgContent: $.ASN1Encoder<ErrorMsgContent> | null = null;


/**
 * @summary Encodes a(n) ErrorMsgContent into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorMsgContent, encoded as an ASN.1 Element.
 */
export function _encode_ErrorMsgContent(
  value: ErrorMsgContent,
  elGetter: $.ASN1Encoder<ErrorMsgContent>
) {
  if (!_cached_encoder_for_ErrorMsgContent) {
    _cached_encoder_for_ErrorMsgContent = function (
      value: ErrorMsgContent    ): _Element {
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


/* eslint-enable */
