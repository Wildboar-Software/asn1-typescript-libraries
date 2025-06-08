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
  CVStatusCode,
  _enum_for_CVStatusCode,
  CVStatusCode_okay /* IMPORTED_LONG_ENUMERATION_ITEM */,
  okay /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_skipUnrecognizedItems /* IMPORTED_LONG_ENUMERATION_ITEM */,
  skipUnrecognizedItems /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_tooBusy /* IMPORTED_LONG_ENUMERATION_ITEM */,
  tooBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_invalidRequest /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_internalError /* IMPORTED_LONG_ENUMERATION_ITEM */,
  internalError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_badStructure /* IMPORTED_LONG_ENUMERATION_ITEM */,
  badStructure /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unsupportedVersion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unsupportedVersion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_abortUnrecognizedItems /* IMPORTED_LONG_ENUMERATION_ITEM */,
  abortUnrecognizedItems /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedSigKey /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedSigKey /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_badSignatureOrMAC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  badSignatureOrMAC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unableToDecode /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unableToDecode /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */,
  notAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unsupportedChecks /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unsupportedChecks /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unsupportedWantBacks /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unsupportedWantBacks /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unsupportedSignatureOrMAC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unsupportedSignatureOrMAC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_invalidSignatureOrMAC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidSignatureOrMAC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_protectedResponseUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  protectedResponseUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedResponderName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedResponderName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_relayingLoop /* IMPORTED_LONG_ENUMERATION_ITEM */,
  relayingLoop /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedValPol /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedValPol /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedValAlg /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedValAlg /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_fullRequestInResponseUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  fullRequestInResponseUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_fullPolResponseUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  fullPolResponseUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_inhibitPolicyMappingUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  inhibitPolicyMappingUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_requireExplicitPolicyUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  requireExplicitPolicyUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_inhibitAnyPolicyUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  inhibitAnyPolicyUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_validationTimeUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  validationTimeUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedCritQueryExt /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedCritQueryExt /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedCritRequestExt /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedCritRequestExt /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_CVStatusCode,
  _encode_CVStatusCode,
} from '../SCVP-2009/CVStatusCode.ta';
export {
  CVStatusCode,
  _enum_for_CVStatusCode,
  CVStatusCode_okay /* IMPORTED_LONG_ENUMERATION_ITEM */,
  okay /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_skipUnrecognizedItems /* IMPORTED_LONG_ENUMERATION_ITEM */,
  skipUnrecognizedItems /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_tooBusy /* IMPORTED_LONG_ENUMERATION_ITEM */,
  tooBusy /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_invalidRequest /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidRequest /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_internalError /* IMPORTED_LONG_ENUMERATION_ITEM */,
  internalError /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_badStructure /* IMPORTED_LONG_ENUMERATION_ITEM */,
  badStructure /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unsupportedVersion /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unsupportedVersion /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_abortUnrecognizedItems /* IMPORTED_LONG_ENUMERATION_ITEM */,
  abortUnrecognizedItems /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedSigKey /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedSigKey /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_badSignatureOrMAC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  badSignatureOrMAC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unableToDecode /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unableToDecode /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_notAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */,
  notAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unsupportedChecks /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unsupportedChecks /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unsupportedWantBacks /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unsupportedWantBacks /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unsupportedSignatureOrMAC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unsupportedSignatureOrMAC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_invalidSignatureOrMAC /* IMPORTED_LONG_ENUMERATION_ITEM */,
  invalidSignatureOrMAC /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_protectedResponseUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  protectedResponseUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedResponderName /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedResponderName /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_relayingLoop /* IMPORTED_LONG_ENUMERATION_ITEM */,
  relayingLoop /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedValPol /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedValPol /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedValAlg /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedValAlg /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_fullRequestInResponseUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  fullRequestInResponseUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_fullPolResponseUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  fullPolResponseUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_inhibitPolicyMappingUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  inhibitPolicyMappingUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_requireExplicitPolicyUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  requireExplicitPolicyUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_inhibitAnyPolicyUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  inhibitAnyPolicyUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_validationTimeUnsupported /* IMPORTED_LONG_ENUMERATION_ITEM */,
  validationTimeUnsupported /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedCritQueryExt /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedCritQueryExt /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  CVStatusCode_unrecognizedCritRequestExt /* IMPORTED_LONG_ENUMERATION_ITEM */,
  unrecognizedCritRequestExt /* IMPORTED_SHORT_ENUMERATION_ITEM */,
  _decode_CVStatusCode,
  _encode_CVStatusCode,
} from '../SCVP-2009/CVStatusCode.ta';

/* START_OF_SYMBOL_DEFINITION ResponseStatus */
/**
 * @summary ResponseStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ResponseStatus ::= SEQUENCE {
 *     statusCode               CVStatusCode DEFAULT  okay,
 *     errorMessage             UTF8String OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ResponseStatus {
  constructor(
    /**
     * @summary `statusCode`.
     * @public
     * @readonly
     */
    readonly statusCode: OPTIONAL<CVStatusCode>,
    /**
     * @summary `errorMessage`.
     * @public
     * @readonly
     */
    readonly errorMessage: OPTIONAL<UTF8String>
  ) {}

  /**
   * @summary Restructures an object into a ResponseStatus
   * @description
   *
   * This takes an `object` and converts it to a `ResponseStatus`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `ResponseStatus`.
   * @returns {ResponseStatus}
   */
  public static _from_object(
    _o: { [_K in keyof ResponseStatus]: ResponseStatus[_K] }
  ): ResponseStatus {
    return new ResponseStatus(_o.statusCode, _o.errorMessage);
  }

  /**
   * @summary Getter that returns the default value for `statusCode`.
   * @public
   * @static
   * @method
   */
  public static get _default_value_for_statusCode() {
    return CVStatusCode_okay;
  }
  /**
   * @summary The enum used as the type of the component `statusCode`
   * @public
   * @static
   */

  public static _enum_for_statusCode = _enum_for_CVStatusCode;
}
/* END_OF_SYMBOL_DEFINITION ResponseStatus */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResponseStatus */
/**
 * @summary The Leading Root Component Types of ResponseStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ResponseStatus: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'statusCode',
    true,
    $.hasTag(_TagClass.universal, 10),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'errorMessage',
    true,
    $.hasTag(_TagClass.universal, 12),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ResponseStatus */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResponseStatus */
/**
 * @summary The Trailing Root Component Types of ResponseStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ResponseStatus: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ResponseStatus */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResponseStatus */
/**
 * @summary The Extension Addition Component Types of ResponseStatus
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ResponseStatus: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ResponseStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseStatus */
let _cached_decoder_for_ResponseStatus: $.ASN1Decoder<ResponseStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ResponseStatus */

/* START_OF_SYMBOL_DEFINITION _decode_ResponseStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) ResponseStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ResponseStatus} The decoded data structure.
 */
export function _decode_ResponseStatus(el: _Element) {
  if (!_cached_decoder_for_ResponseStatus) {
    _cached_decoder_for_ResponseStatus = function (
      el: _Element
    ): ResponseStatus {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let statusCode: OPTIONAL<CVStatusCode> =
        ResponseStatus._default_value_for_statusCode;
      let errorMessage: OPTIONAL<UTF8String>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        statusCode: (_el: _Element): void => {
          statusCode = _decode_CVStatusCode(_el);
        },
        errorMessage: (_el: _Element): void => {
          errorMessage = $._decodeUTF8String(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_ResponseStatus,
        _extension_additions_list_spec_for_ResponseStatus,
        _root_component_type_list_2_spec_for_ResponseStatus,
        undefined
      );
      return new ResponseStatus /* SEQUENCE_CONSTRUCTOR_CALL */(
        statusCode,
        errorMessage
      );
    };
  }
  return _cached_decoder_for_ResponseStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ResponseStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseStatus */
let _cached_encoder_for_ResponseStatus: $.ASN1Encoder<ResponseStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ResponseStatus */

/* START_OF_SYMBOL_DEFINITION _encode_ResponseStatus */
/**
 * @summary Encodes a(n) ResponseStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResponseStatus, encoded as an ASN.1 Element.
 */
export function _encode_ResponseStatus(
  value: ResponseStatus,
  elGetter: $.ASN1Encoder<ResponseStatus>
) {
  if (!_cached_encoder_for_ResponseStatus) {
    _cached_encoder_for_ResponseStatus = function (
      value: ResponseStatus,
      elGetter: $.ASN1Encoder<ResponseStatus>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* IF_DEFAULT */ value.statusCode === undefined ||
            $.deepEq(
              value.statusCode,
              ResponseStatus._default_value_for_statusCode
            )
              ? undefined
              : _encode_CVStatusCode(value.statusCode, $.BER),
            /* IF_ABSENT  */ value.errorMessage === undefined
              ? undefined
              : $._encodeUTF8String(value.errorMessage, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_ResponseStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ResponseStatus */

/* eslint-enable */
