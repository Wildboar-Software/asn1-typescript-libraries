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

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo */
/**
 * @summary PKIFailureInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIFailureInfo  ::=  BIT STRING {
 * -- since we can fail in more than one way!
 * -- More codes may be added in the future if/when required.
 *     badAlg              (0),
 *     -- unrecognized or unsupported Algorithm Identifier
 *     badMessageCheck     (1),
 *     -- integrity check failed (e.g., signature did not verify)
 *     badRequest          (2),
 *     -- transaction not permitted or supported
 *     badTime             (3),
 *     -- messageTime was not sufficiently close to the system time,
 *     -- as defined by local policy
 *
 *     badCertId           (4),
 *     -- no certificate could be found matching the provided criteria
 *     badDataFormat       (5),
 *     -- the data submitted has the wrong format
 *     wrongAuthority      (6),
 *     -- the authority indicated in the request is different from the
 *     -- one creating the response token
 *     incorrectData       (7),
 *     -- the requester's data is incorrect (for notary services)
 *     missingTimeStamp    (8),
 *     -- when the timestamp is missing but should be there
 *     -- (by policy)
 *     badPOP              (9),
 *     -- the proof-of-possession failed
 *     certRevoked         (10),
 *     -- the certificate has already been revoked
 *     certConfirmed       (11),
 *     -- the certificate has already been confirmed
 *     wrongIntegrity      (12),
 *     -- invalid integrity, password based instead of signature or
 *     -- vice versa
 *     badRecipientNonce   (13),
 *     -- invalid recipient nonce, either missing or wrong value
 *     timeNotAvailable    (14),
 *     -- the TSA's time source is not available
 *     unacceptedPolicy    (15),
 *     -- the requested TSA policy is not supported by the TSA
 *     unacceptedExtension (16),
 *     -- the requested extension is not supported by the TSA
 *     addInfoNotAvailable (17),
 *     -- the additional information requested could not be
 *     -- understood or is not available
 *     badSenderNonce      (18),
 *     -- invalid sender nonce, either missing or wrong size
 *     badCertTemplate     (19),
 *     -- invalid cert. template or missing mandatory information
 *     signerNotTrusted    (20),
 *     -- signer of the message unknown or not trusted
 *     transactionIdInUse  (21),
 *     -- the transaction identifier is already in use
 *     unsupportedVersion  (22),
 *     -- the version of the message is not supported
 *     notAuthorized       (23),
 *     -- the sender was not authorized to make the preceding
 *     -- request or perform the preceding action
 *     systemUnavail       (24),
 *     -- the request cannot be handled due to system unavailability
 *     systemFailure       (25),
 *
 *     -- the request cannot be handled due to system failure
 *     duplicateCertReq    (26)
 *     -- certificate cannot be issued because a duplicate
 *     -- certificate already exists
 * }
 * ```
 */
export type PKIFailureInfo = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badAlg */
/**
 * @summary PKIFailureInfo_badAlg
 * @constant
 */
export const PKIFailureInfo_badAlg: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badAlg */

/* START_OF_SYMBOL_DEFINITION badAlg */
/**
 * @summary badAlg
 * @constant
 */
export const badAlg: number = PKIFailureInfo_badAlg; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badAlg */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badMessageCheck */
/**
 * @summary PKIFailureInfo_badMessageCheck
 * @constant
 */
export const PKIFailureInfo_badMessageCheck: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badMessageCheck */

/* START_OF_SYMBOL_DEFINITION badMessageCheck */
/**
 * @summary badMessageCheck
 * @constant
 */
export const badMessageCheck: number = PKIFailureInfo_badMessageCheck; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badMessageCheck */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badRequest */
/**
 * @summary PKIFailureInfo_badRequest
 * @constant
 */
export const PKIFailureInfo_badRequest: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badRequest */

/* START_OF_SYMBOL_DEFINITION badRequest */
/**
 * @summary badRequest
 * @constant
 */
export const badRequest: number = PKIFailureInfo_badRequest; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badRequest */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badTime */
/**
 * @summary PKIFailureInfo_badTime
 * @constant
 */
export const PKIFailureInfo_badTime: number = 3; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badTime */

/* START_OF_SYMBOL_DEFINITION badTime */
/**
 * @summary badTime
 * @constant
 */
export const badTime: number = PKIFailureInfo_badTime; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badTime */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badCertId */
/**
 * @summary PKIFailureInfo_badCertId
 * @constant
 */
export const PKIFailureInfo_badCertId: number = 4; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badCertId */

/* START_OF_SYMBOL_DEFINITION badCertId */
/**
 * @summary badCertId
 * @constant
 */
export const badCertId: number = PKIFailureInfo_badCertId; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badCertId */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badDataFormat */
/**
 * @summary PKIFailureInfo_badDataFormat
 * @constant
 */
export const PKIFailureInfo_badDataFormat: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badDataFormat */

/* START_OF_SYMBOL_DEFINITION badDataFormat */
/**
 * @summary badDataFormat
 * @constant
 */
export const badDataFormat: number = PKIFailureInfo_badDataFormat; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badDataFormat */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_wrongAuthority */
/**
 * @summary PKIFailureInfo_wrongAuthority
 * @constant
 */
export const PKIFailureInfo_wrongAuthority: number = 6; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_wrongAuthority */

/* START_OF_SYMBOL_DEFINITION wrongAuthority */
/**
 * @summary wrongAuthority
 * @constant
 */
export const wrongAuthority: number = PKIFailureInfo_wrongAuthority; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION wrongAuthority */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_incorrectData */
/**
 * @summary PKIFailureInfo_incorrectData
 * @constant
 */
export const PKIFailureInfo_incorrectData: number = 7; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_incorrectData */

/* START_OF_SYMBOL_DEFINITION incorrectData */
/**
 * @summary incorrectData
 * @constant
 */
export const incorrectData: number = PKIFailureInfo_incorrectData; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION incorrectData */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_missingTimeStamp */
/**
 * @summary PKIFailureInfo_missingTimeStamp
 * @constant
 */
export const PKIFailureInfo_missingTimeStamp: number = 8; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_missingTimeStamp */

/* START_OF_SYMBOL_DEFINITION missingTimeStamp */
/**
 * @summary missingTimeStamp
 * @constant
 */
export const missingTimeStamp: number = PKIFailureInfo_missingTimeStamp; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION missingTimeStamp */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badPOP */
/**
 * @summary PKIFailureInfo_badPOP
 * @constant
 */
export const PKIFailureInfo_badPOP: number = 9; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badPOP */

/* START_OF_SYMBOL_DEFINITION badPOP */
/**
 * @summary badPOP
 * @constant
 */
export const badPOP: number = PKIFailureInfo_badPOP; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badPOP */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_certRevoked */
/**
 * @summary PKIFailureInfo_certRevoked
 * @constant
 */
export const PKIFailureInfo_certRevoked: number = 10; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_certRevoked */

/* START_OF_SYMBOL_DEFINITION certRevoked */
/**
 * @summary certRevoked
 * @constant
 */
export const certRevoked: number = PKIFailureInfo_certRevoked; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION certRevoked */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_certConfirmed */
/**
 * @summary PKIFailureInfo_certConfirmed
 * @constant
 */
export const PKIFailureInfo_certConfirmed: number = 11; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_certConfirmed */

/* START_OF_SYMBOL_DEFINITION certConfirmed */
/**
 * @summary certConfirmed
 * @constant
 */
export const certConfirmed: number = PKIFailureInfo_certConfirmed; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION certConfirmed */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_wrongIntegrity */
/**
 * @summary PKIFailureInfo_wrongIntegrity
 * @constant
 */
export const PKIFailureInfo_wrongIntegrity: number = 12; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_wrongIntegrity */

/* START_OF_SYMBOL_DEFINITION wrongIntegrity */
/**
 * @summary wrongIntegrity
 * @constant
 */
export const wrongIntegrity: number = PKIFailureInfo_wrongIntegrity; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION wrongIntegrity */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badRecipientNonce */
/**
 * @summary PKIFailureInfo_badRecipientNonce
 * @constant
 */
export const PKIFailureInfo_badRecipientNonce: number = 13; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badRecipientNonce */

/* START_OF_SYMBOL_DEFINITION badRecipientNonce */
/**
 * @summary badRecipientNonce
 * @constant
 */
export const badRecipientNonce: number = PKIFailureInfo_badRecipientNonce; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badRecipientNonce */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_timeNotAvailable */
/**
 * @summary PKIFailureInfo_timeNotAvailable
 * @constant
 */
export const PKIFailureInfo_timeNotAvailable: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_timeNotAvailable */

/* START_OF_SYMBOL_DEFINITION timeNotAvailable */
/**
 * @summary timeNotAvailable
 * @constant
 */
export const timeNotAvailable: number = PKIFailureInfo_timeNotAvailable; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION timeNotAvailable */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_unacceptedPolicy */
/**
 * @summary PKIFailureInfo_unacceptedPolicy
 * @constant
 */
export const PKIFailureInfo_unacceptedPolicy: number = 15; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_unacceptedPolicy */

/* START_OF_SYMBOL_DEFINITION unacceptedPolicy */
/**
 * @summary unacceptedPolicy
 * @constant
 */
export const unacceptedPolicy: number = PKIFailureInfo_unacceptedPolicy; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unacceptedPolicy */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_unacceptedExtension */
/**
 * @summary PKIFailureInfo_unacceptedExtension
 * @constant
 */
export const PKIFailureInfo_unacceptedExtension: number = 16; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_unacceptedExtension */

/* START_OF_SYMBOL_DEFINITION unacceptedExtension */
/**
 * @summary unacceptedExtension
 * @constant
 */
export const unacceptedExtension: number = PKIFailureInfo_unacceptedExtension; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unacceptedExtension */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_addInfoNotAvailable */
/**
 * @summary PKIFailureInfo_addInfoNotAvailable
 * @constant
 */
export const PKIFailureInfo_addInfoNotAvailable: number = 17; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_addInfoNotAvailable */

/* START_OF_SYMBOL_DEFINITION addInfoNotAvailable */
/**
 * @summary addInfoNotAvailable
 * @constant
 */
export const addInfoNotAvailable: number = PKIFailureInfo_addInfoNotAvailable; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION addInfoNotAvailable */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badSenderNonce */
/**
 * @summary PKIFailureInfo_badSenderNonce
 * @constant
 */
export const PKIFailureInfo_badSenderNonce: number = 18; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badSenderNonce */

/* START_OF_SYMBOL_DEFINITION badSenderNonce */
/**
 * @summary badSenderNonce
 * @constant
 */
export const badSenderNonce: number = PKIFailureInfo_badSenderNonce; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badSenderNonce */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badCertTemplate */
/**
 * @summary PKIFailureInfo_badCertTemplate
 * @constant
 */
export const PKIFailureInfo_badCertTemplate: number = 19; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badCertTemplate */

/* START_OF_SYMBOL_DEFINITION badCertTemplate */
/**
 * @summary badCertTemplate
 * @constant
 */
export const badCertTemplate: number = PKIFailureInfo_badCertTemplate; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badCertTemplate */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_signerNotTrusted */
/**
 * @summary PKIFailureInfo_signerNotTrusted
 * @constant
 */
export const PKIFailureInfo_signerNotTrusted: number = 20; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_signerNotTrusted */

/* START_OF_SYMBOL_DEFINITION signerNotTrusted */
/**
 * @summary signerNotTrusted
 * @constant
 */
export const signerNotTrusted: number = PKIFailureInfo_signerNotTrusted; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION signerNotTrusted */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_transactionIdInUse */
/**
 * @summary PKIFailureInfo_transactionIdInUse
 * @constant
 */
export const PKIFailureInfo_transactionIdInUse: number = 21; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_transactionIdInUse */

/* START_OF_SYMBOL_DEFINITION transactionIdInUse */
/**
 * @summary transactionIdInUse
 * @constant
 */
export const transactionIdInUse: number = PKIFailureInfo_transactionIdInUse; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION transactionIdInUse */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_unsupportedVersion */
/**
 * @summary PKIFailureInfo_unsupportedVersion
 * @constant
 */
export const PKIFailureInfo_unsupportedVersion: number = 22; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION unsupportedVersion */
/**
 * @summary unsupportedVersion
 * @constant
 */
export const unsupportedVersion: number = PKIFailureInfo_unsupportedVersion; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unsupportedVersion */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_notAuthorized */
/**
 * @summary PKIFailureInfo_notAuthorized
 * @constant
 */
export const PKIFailureInfo_notAuthorized: number = 23; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_notAuthorized */

/* START_OF_SYMBOL_DEFINITION notAuthorized */
/**
 * @summary notAuthorized
 * @constant
 */
export const notAuthorized: number = PKIFailureInfo_notAuthorized; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION notAuthorized */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_systemUnavail */
/**
 * @summary PKIFailureInfo_systemUnavail
 * @constant
 */
export const PKIFailureInfo_systemUnavail: number = 24; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_systemUnavail */

/* START_OF_SYMBOL_DEFINITION systemUnavail */
/**
 * @summary systemUnavail
 * @constant
 */
export const systemUnavail: number = PKIFailureInfo_systemUnavail; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION systemUnavail */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_systemFailure */
/**
 * @summary PKIFailureInfo_systemFailure
 * @constant
 */
export const PKIFailureInfo_systemFailure: number = 25; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_systemFailure */

/* START_OF_SYMBOL_DEFINITION systemFailure */
/**
 * @summary systemFailure
 * @constant
 */
export const systemFailure: number = PKIFailureInfo_systemFailure; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION systemFailure */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_duplicateCertReq */
/**
 * @summary PKIFailureInfo_duplicateCertReq
 * @constant
 */
export const PKIFailureInfo_duplicateCertReq: number = 26; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_duplicateCertReq */

/* START_OF_SYMBOL_DEFINITION duplicateCertReq */
/**
 * @summary duplicateCertReq
 * @constant
 */
export const duplicateCertReq: number = PKIFailureInfo_duplicateCertReq; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION duplicateCertReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIFailureInfo */
let _cached_decoder_for_PKIFailureInfo: $.ASN1Decoder<PKIFailureInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIFailureInfo */

/* START_OF_SYMBOL_DEFINITION _decode_PKIFailureInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIFailureInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIFailureInfo} The decoded data structure.
 */
export function _decode_PKIFailureInfo(el: _Element) {
  if (!_cached_decoder_for_PKIFailureInfo) {
    _cached_decoder_for_PKIFailureInfo = $._decodeBitString;
  }
  return _cached_decoder_for_PKIFailureInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIFailureInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIFailureInfo */
let _cached_encoder_for_PKIFailureInfo: $.ASN1Encoder<PKIFailureInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIFailureInfo */

/* START_OF_SYMBOL_DEFINITION _encode_PKIFailureInfo */
/**
 * @summary Encodes a(n) PKIFailureInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIFailureInfo, encoded as an ASN.1 Element.
 */
export function _encode_PKIFailureInfo(
  value: PKIFailureInfo,
  elGetter: $.ASN1Encoder<PKIFailureInfo>
) {
  if (!_cached_encoder_for_PKIFailureInfo) {
    _cached_encoder_for_PKIFailureInfo = $._encodeBitString;
  }
  return _cached_encoder_for_PKIFailureInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIFailureInfo */

/* eslint-enable */
