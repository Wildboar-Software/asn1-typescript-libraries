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
  PKIStatus,
  PKIStatus_accepted /* IMPORTED_LONG_NAMED_INTEGER */,
  accepted /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_grantedWithMods /* IMPORTED_LONG_NAMED_INTEGER */,
  grantedWithMods /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
  rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_waiting /* IMPORTED_LONG_NAMED_INTEGER */,
  waiting /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_revocationWarning /* IMPORTED_LONG_NAMED_INTEGER */,
  revocationWarning /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_revocationNotification /* IMPORTED_LONG_NAMED_INTEGER */,
  revocationNotification /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_keyUpdateWarning /* IMPORTED_LONG_NAMED_INTEGER */,
  keyUpdateWarning /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_PKIStatus,
  _encode_PKIStatus,
} from '../PKIXCMP-2009/PKIStatus.ta.mjs';
export {
  PKIStatus,
  PKIStatus_accepted /* IMPORTED_LONG_NAMED_INTEGER */,
  accepted /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_grantedWithMods /* IMPORTED_LONG_NAMED_INTEGER */,
  grantedWithMods /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
  rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_waiting /* IMPORTED_LONG_NAMED_INTEGER */,
  waiting /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_revocationWarning /* IMPORTED_LONG_NAMED_INTEGER */,
  revocationWarning /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_revocationNotification /* IMPORTED_LONG_NAMED_INTEGER */,
  revocationNotification /* IMPORTED_SHORT_NAMED_INTEGER */,
  PKIStatus_keyUpdateWarning /* IMPORTED_LONG_NAMED_INTEGER */,
  keyUpdateWarning /* IMPORTED_SHORT_NAMED_INTEGER */,
  _decode_PKIStatus,
  _encode_PKIStatus,
} from '../PKIXCMP-2009/PKIStatus.ta.mjs';
import {
  PKIFreeText,
  _decode_PKIFreeText,
  _encode_PKIFreeText,
} from '../PKIXCMP-2009/PKIFreeText.ta.mjs';
export {
  PKIFreeText,
  _decode_PKIFreeText,
  _encode_PKIFreeText,
} from '../PKIXCMP-2009/PKIFreeText.ta.mjs';
import {
  PKIFailureInfo,
  PKIFailureInfo_badAlg /* IMPORTED_LONG_NAMED_BIT */,
  badAlg /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badMessageCheck /* IMPORTED_LONG_NAMED_BIT */,
  badMessageCheck /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badRequest /* IMPORTED_LONG_NAMED_BIT */,
  badRequest /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badTime /* IMPORTED_LONG_NAMED_BIT */,
  badTime /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badCertId /* IMPORTED_LONG_NAMED_BIT */,
  badCertId /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badDataFormat /* IMPORTED_LONG_NAMED_BIT */,
  badDataFormat /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_wrongAuthority /* IMPORTED_LONG_NAMED_BIT */,
  wrongAuthority /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_incorrectData /* IMPORTED_LONG_NAMED_BIT */,
  incorrectData /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_missingTimeStamp /* IMPORTED_LONG_NAMED_BIT */,
  missingTimeStamp /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badPOP /* IMPORTED_LONG_NAMED_BIT */,
  badPOP /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_certRevoked /* IMPORTED_LONG_NAMED_BIT */,
  certRevoked /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_certConfirmed /* IMPORTED_LONG_NAMED_BIT */,
  certConfirmed /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_wrongIntegrity /* IMPORTED_LONG_NAMED_BIT */,
  wrongIntegrity /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badRecipientNonce /* IMPORTED_LONG_NAMED_BIT */,
  badRecipientNonce /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_timeNotAvailable /* IMPORTED_LONG_NAMED_BIT */,
  timeNotAvailable /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_unacceptedPolicy /* IMPORTED_LONG_NAMED_BIT */,
  unacceptedPolicy /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_unacceptedExtension /* IMPORTED_LONG_NAMED_BIT */,
  unacceptedExtension /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_addInfoNotAvailable /* IMPORTED_LONG_NAMED_BIT */,
  addInfoNotAvailable /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badSenderNonce /* IMPORTED_LONG_NAMED_BIT */,
  badSenderNonce /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badCertTemplate /* IMPORTED_LONG_NAMED_BIT */,
  badCertTemplate /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_signerNotTrusted /* IMPORTED_LONG_NAMED_BIT */,
  signerNotTrusted /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_transactionIdInUse /* IMPORTED_LONG_NAMED_BIT */,
  transactionIdInUse /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_unsupportedVersion /* IMPORTED_LONG_NAMED_BIT */,
  unsupportedVersion /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_notAuthorized /* IMPORTED_LONG_NAMED_BIT */,
  notAuthorized /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_systemUnavail /* IMPORTED_LONG_NAMED_BIT */,
  systemUnavail /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_systemFailure /* IMPORTED_LONG_NAMED_BIT */,
  systemFailure /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_duplicateCertReq /* IMPORTED_LONG_NAMED_BIT */,
  duplicateCertReq /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_PKIFailureInfo,
  _encode_PKIFailureInfo,
} from '../PKIXCMP-2009/PKIFailureInfo.ta.mjs';
export {
  PKIFailureInfo,
  PKIFailureInfo_badAlg /* IMPORTED_LONG_NAMED_BIT */,
  badAlg /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badMessageCheck /* IMPORTED_LONG_NAMED_BIT */,
  badMessageCheck /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badRequest /* IMPORTED_LONG_NAMED_BIT */,
  badRequest /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badTime /* IMPORTED_LONG_NAMED_BIT */,
  badTime /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badCertId /* IMPORTED_LONG_NAMED_BIT */,
  badCertId /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badDataFormat /* IMPORTED_LONG_NAMED_BIT */,
  badDataFormat /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_wrongAuthority /* IMPORTED_LONG_NAMED_BIT */,
  wrongAuthority /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_incorrectData /* IMPORTED_LONG_NAMED_BIT */,
  incorrectData /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_missingTimeStamp /* IMPORTED_LONG_NAMED_BIT */,
  missingTimeStamp /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badPOP /* IMPORTED_LONG_NAMED_BIT */,
  badPOP /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_certRevoked /* IMPORTED_LONG_NAMED_BIT */,
  certRevoked /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_certConfirmed /* IMPORTED_LONG_NAMED_BIT */,
  certConfirmed /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_wrongIntegrity /* IMPORTED_LONG_NAMED_BIT */,
  wrongIntegrity /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badRecipientNonce /* IMPORTED_LONG_NAMED_BIT */,
  badRecipientNonce /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_timeNotAvailable /* IMPORTED_LONG_NAMED_BIT */,
  timeNotAvailable /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_unacceptedPolicy /* IMPORTED_LONG_NAMED_BIT */,
  unacceptedPolicy /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_unacceptedExtension /* IMPORTED_LONG_NAMED_BIT */,
  unacceptedExtension /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_addInfoNotAvailable /* IMPORTED_LONG_NAMED_BIT */,
  addInfoNotAvailable /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badSenderNonce /* IMPORTED_LONG_NAMED_BIT */,
  badSenderNonce /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_badCertTemplate /* IMPORTED_LONG_NAMED_BIT */,
  badCertTemplate /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_signerNotTrusted /* IMPORTED_LONG_NAMED_BIT */,
  signerNotTrusted /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_transactionIdInUse /* IMPORTED_LONG_NAMED_BIT */,
  transactionIdInUse /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_unsupportedVersion /* IMPORTED_LONG_NAMED_BIT */,
  unsupportedVersion /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_notAuthorized /* IMPORTED_LONG_NAMED_BIT */,
  notAuthorized /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_systemUnavail /* IMPORTED_LONG_NAMED_BIT */,
  systemUnavail /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_systemFailure /* IMPORTED_LONG_NAMED_BIT */,
  systemFailure /* IMPORTED_SHORT_NAMED_BIT */,
  PKIFailureInfo_duplicateCertReq /* IMPORTED_LONG_NAMED_BIT */,
  duplicateCertReq /* IMPORTED_SHORT_NAMED_BIT */,
  _decode_PKIFailureInfo,
  _encode_PKIFailureInfo,
} from '../PKIXCMP-2009/PKIFailureInfo.ta.mjs';

/* START_OF_SYMBOL_DEFINITION PKIStatusInfo */
/**
 * @summary PKIStatusInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIStatusInfo ::= SEQUENCE {
 *     status        PKIStatus,
 *     statusString  PKIFreeText     OPTIONAL,
 *     failInfo      PKIFailureInfo  OPTIONAL }
 * ```
 *
 * @class
 */
export class PKIStatusInfo {
  constructor(
    /**
     * @summary `status`.
     * @public
     * @readonly
     */
    readonly status: PKIStatus,
    /**
     * @summary `statusString`.
     * @public
     * @readonly
     */
    readonly statusString: OPTIONAL<PKIFreeText>,
    /**
     * @summary `failInfo`.
     * @public
     * @readonly
     */
    readonly failInfo: OPTIONAL<PKIFailureInfo>
  ) {}

  /**
   * @summary Restructures an object into a PKIStatusInfo
   * @description
   *
   * This takes an `object` and converts it to a `PKIStatusInfo`.
   *
   * @public
   * @static
   * @method
   * @param {Object} _o An object having all of the keys and values of a `PKIStatusInfo`.
   * @returns {PKIStatusInfo}
   */
  public static _from_object(
    _o: { [_K in keyof PKIStatusInfo]: PKIStatusInfo[_K] }
  ): PKIStatusInfo {
    return new PKIStatusInfo(_o.status, _o.statusString, _o.failInfo);
  }
}
/* END_OF_SYMBOL_DEFINITION PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKIStatusInfo */
/**
 * @summary The Leading Root Component Types of PKIStatusInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PKIStatusInfo: $.ComponentSpec[] = [
  new $.ComponentSpec(
    'status',
    false,
    $.hasTag(_TagClass.universal, 2),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'statusString',
    true,
    $.hasTag(_TagClass.universal, 16),
    undefined,
    undefined
  ),
  new $.ComponentSpec(
    'failInfo',
    true,
    $.hasTag(_TagClass.universal, 3),
    undefined,
    undefined
  ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKIStatusInfo */
/**
 * @summary The Trailing Root Component Types of PKIStatusInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKIStatusInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKIStatusInfo */
/**
 * @summary The Extension Addition Component Types of PKIStatusInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKIStatusInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIStatusInfo */
let _cached_decoder_for_PKIStatusInfo: $.ASN1Decoder<PKIStatusInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _decode_PKIStatusInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIStatusInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIStatusInfo} The decoded data structure.
 */
export function _decode_PKIStatusInfo(el: _Element) {
  if (!_cached_decoder_for_PKIStatusInfo) {
    _cached_decoder_for_PKIStatusInfo = function (el: _Element): PKIStatusInfo {
      /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      let status!: PKIStatus;
      let statusString: OPTIONAL<PKIFreeText>;
      let failInfo: OPTIONAL<PKIFailureInfo>;
      /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
      /* START_OF_CALLBACKS_MAP */
      const callbacks: $.DecodingMap = {
        status: (_el: _Element): void => {
          status = _decode_PKIStatus(_el);
        },
        statusString: (_el: _Element): void => {
          statusString = _decode_PKIFreeText(_el);
        },
        failInfo: (_el: _Element): void => {
          failInfo = _decode_PKIFailureInfo(_el);
        },
      };
      /* END_OF_CALLBACKS_MAP */
      $._parse_sequence(
        el,
        callbacks,
        _root_component_type_list_1_spec_for_PKIStatusInfo,
        _extension_additions_list_spec_for_PKIStatusInfo,
        _root_component_type_list_2_spec_for_PKIStatusInfo,
        undefined
      );
      return new PKIStatusInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
        status,
        statusString,
        failInfo
      );
    };
  }
  return _cached_decoder_for_PKIStatusInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIStatusInfo */
let _cached_encoder_for_PKIStatusInfo: $.ASN1Encoder<PKIStatusInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _encode_PKIStatusInfo */
/**
 * @summary Encodes a(n) PKIStatusInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIStatusInfo, encoded as an ASN.1 Element.
 */
export function _encode_PKIStatusInfo(
  value: PKIStatusInfo,
  elGetter: $.ASN1Encoder<PKIStatusInfo>
) {
  if (!_cached_encoder_for_PKIStatusInfo) {
    _cached_encoder_for_PKIStatusInfo = function (
      value: PKIStatusInfo,
      elGetter: $.ASN1Encoder<PKIStatusInfo>
    ): _Element {
      return $._encodeSequence(
        ([] as (_Element | undefined)[])
          .concat([
            /* REQUIRED   */ _encode_PKIStatus(value.status, $.BER),
            /* IF_ABSENT  */ value.statusString === undefined
              ? undefined
              : _encode_PKIFreeText(value.statusString, $.BER),
            /* IF_ABSENT  */ value.failInfo === undefined
              ? undefined
              : _encode_PKIFailureInfo(value.failInfo, $.BER),
          ])
          .filter((c: _Element | undefined): c is _Element => !!c),
        $.BER
      );
    };
  }
  return _cached_encoder_for_PKIStatusInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIStatusInfo */

/* eslint-enable */
