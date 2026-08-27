/* eslint-disable */
import {
  BIT_STRING,
  ASN1Element as _Element,
  ASN1TagClass as _TagClass,
  ASN1Construction as _Construction,
  ASN1UniversalType as _UniversalType,
  ObjectIdentifier as _OID,
  External as _External,
  EmbeddedPDV as _PDV,
  ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary PKIFailureInfo
 * @description
 *
 * Failure information bit string for `PKIStatusInfo.failInfo`
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)). More than one bit MAY be set. More codes may be
 * added in the future.
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


/**
 * @summary PKIFailureInfo_badAlg
 * @description
 *
 * Bit 0: unrecognized or unsupported Algorithm Identifier
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_badAlg: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary badAlg
 * @description
 *
 * Bit 0: unrecognized or unsupported Algorithm Identifier
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const badAlg: number = PKIFailureInfo_badAlg; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_badMessageCheck
 * @description
 *
 * Bit 1: integrity check failed (e.g., signature did not verify)
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_badMessageCheck: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary badMessageCheck
 * @description
 *
 * Bit 1: integrity check failed (e.g., signature did not verify)
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const badMessageCheck: number = PKIFailureInfo_badMessageCheck; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_badRequest
 * @description
 *
 * Bit 2: transaction not permitted or supported
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_badRequest: number = 2; /* LONG_NAMED_BIT */


/**
 * @summary badRequest
 * @description
 *
 * Bit 2: transaction not permitted or supported
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const badRequest: number = PKIFailureInfo_badRequest; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_badTime
 * @description
 *
 * Bit 3: messageTime was not sufficiently close to the system time, as defined by local policy
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_badTime: number = 3; /* LONG_NAMED_BIT */


/**
 * @summary badTime
 * @description
 *
 * Bit 3: messageTime was not sufficiently close to the system time, as defined by local policy
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const badTime: number = PKIFailureInfo_badTime; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_badCertId
 * @description
 *
 * Bit 4: no certificate could be found matching the provided criteria
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_badCertId: number = 4; /* LONG_NAMED_BIT */


/**
 * @summary badCertId
 * @description
 *
 * Bit 4: no certificate could be found matching the provided criteria
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const badCertId: number = PKIFailureInfo_badCertId; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_badDataFormat
 * @description
 *
 * Bit 5: the data submitted has the wrong format
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_badDataFormat: number = 5; /* LONG_NAMED_BIT */


/**
 * @summary badDataFormat
 * @description
 *
 * Bit 5: the data submitted has the wrong format
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const badDataFormat: number = PKIFailureInfo_badDataFormat; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_wrongAuthority
 * @description
 *
 * Bit 6: the authority indicated in the request is different from the one creating the response token
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_wrongAuthority: number = 6; /* LONG_NAMED_BIT */


/**
 * @summary wrongAuthority
 * @description
 *
 * Bit 6: the authority indicated in the request is different from the one creating the response token
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const wrongAuthority: number = PKIFailureInfo_wrongAuthority; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_incorrectData
 * @description
 *
 * Bit 7: the requester's data is incorrect (for notary services)
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_incorrectData: number = 7; /* LONG_NAMED_BIT */


/**
 * @summary incorrectData
 * @description
 *
 * Bit 7: the requester's data is incorrect (for notary services)
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const incorrectData: number = PKIFailureInfo_incorrectData; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_missingTimeStamp
 * @description
 *
 * Bit 8: when the timestamp is missing but should be there (by policy)
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_missingTimeStamp: number = 8; /* LONG_NAMED_BIT */


/**
 * @summary missingTimeStamp
 * @description
 *
 * Bit 8: when the timestamp is missing but should be there (by policy)
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const missingTimeStamp: number = PKIFailureInfo_missingTimeStamp; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_badPOP
 * @description
 *
 * Bit 9: the proof-of-possession failed
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_badPOP: number = 9; /* LONG_NAMED_BIT */


/**
 * @summary badPOP
 * @description
 *
 * Bit 9: the proof-of-possession failed
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const badPOP: number = PKIFailureInfo_badPOP; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_certRevoked
 * @description
 *
 * Bit 10: the certificate has already been revoked
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_certRevoked: number = 10; /* LONG_NAMED_BIT */


/**
 * @summary certRevoked
 * @description
 *
 * Bit 10: the certificate has already been revoked
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const certRevoked: number = PKIFailureInfo_certRevoked; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_certConfirmed
 * @description
 *
 * Bit 11: the certificate has already been confirmed
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_certConfirmed: number = 11; /* LONG_NAMED_BIT */


/**
 * @summary certConfirmed
 * @description
 *
 * Bit 11: the certificate has already been confirmed
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const certConfirmed: number = PKIFailureInfo_certConfirmed; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_wrongIntegrity
 * @description
 *
 * Bit 12: invalid integrity, password based instead of signature or vice versa
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_wrongIntegrity: number = 12; /* LONG_NAMED_BIT */


/**
 * @summary wrongIntegrity
 * @description
 *
 * Bit 12: invalid integrity, password based instead of signature or vice versa
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const wrongIntegrity: number = PKIFailureInfo_wrongIntegrity; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_badRecipientNonce
 * @description
 *
 * Bit 13: invalid recipient nonce, either missing or wrong value
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_badRecipientNonce: number = 13; /* LONG_NAMED_BIT */


/**
 * @summary badRecipientNonce
 * @description
 *
 * Bit 13: invalid recipient nonce, either missing or wrong value
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const badRecipientNonce: number = PKIFailureInfo_badRecipientNonce; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_timeNotAvailable
 * @description
 *
 * Bit 14: the TSA's time source is not available
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_timeNotAvailable: number = 14; /* LONG_NAMED_BIT */


/**
 * @summary timeNotAvailable
 * @description
 *
 * Bit 14: the TSA's time source is not available
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const timeNotAvailable: number = PKIFailureInfo_timeNotAvailable; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_unacceptedPolicy
 * @description
 *
 * Bit 15: the requested TSA policy is not supported by the TSA
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_unacceptedPolicy: number = 15; /* LONG_NAMED_BIT */


/**
 * @summary unacceptedPolicy
 * @description
 *
 * Bit 15: the requested TSA policy is not supported by the TSA
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const unacceptedPolicy: number = PKIFailureInfo_unacceptedPolicy; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_unacceptedExtension
 * @description
 *
 * Bit 16: the requested extension is not supported by the TSA
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_unacceptedExtension: number = 16; /* LONG_NAMED_BIT */


/**
 * @summary unacceptedExtension
 * @description
 *
 * Bit 16: the requested extension is not supported by the TSA
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const unacceptedExtension: number = PKIFailureInfo_unacceptedExtension; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_addInfoNotAvailable
 * @description
 *
 * Bit 17: the additional information requested could not be understood or is not available
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_addInfoNotAvailable: number = 17; /* LONG_NAMED_BIT */


/**
 * @summary addInfoNotAvailable
 * @description
 *
 * Bit 17: the additional information requested could not be understood or is not available
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const addInfoNotAvailable: number = PKIFailureInfo_addInfoNotAvailable; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_badSenderNonce
 * @description
 *
 * Bit 18: invalid sender nonce, either missing or wrong size
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_badSenderNonce: number = 18; /* LONG_NAMED_BIT */


/**
 * @summary badSenderNonce
 * @description
 *
 * Bit 18: invalid sender nonce, either missing or wrong size
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const badSenderNonce: number = PKIFailureInfo_badSenderNonce; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_badCertTemplate
 * @description
 *
 * Bit 19: invalid cert. template or missing mandatory information
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_badCertTemplate: number = 19; /* LONG_NAMED_BIT */


/**
 * @summary badCertTemplate
 * @description
 *
 * Bit 19: invalid cert. template or missing mandatory information
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const badCertTemplate: number = PKIFailureInfo_badCertTemplate; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_signerNotTrusted
 * @description
 *
 * Bit 20: signer of the message unknown or not trusted
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_signerNotTrusted: number = 20; /* LONG_NAMED_BIT */


/**
 * @summary signerNotTrusted
 * @description
 *
 * Bit 20: signer of the message unknown or not trusted
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const signerNotTrusted: number = PKIFailureInfo_signerNotTrusted; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_transactionIdInUse
 * @description
 *
 * Bit 21: the transaction identifier is already in use
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_transactionIdInUse: number = 21; /* LONG_NAMED_BIT */


/**
 * @summary transactionIdInUse
 * @description
 *
 * Bit 21: the transaction identifier is already in use
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const transactionIdInUse: number = PKIFailureInfo_transactionIdInUse; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_unsupportedVersion
 * @description
 *
 * Bit 22: the version of the message is not supported
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_unsupportedVersion: number = 22; /* LONG_NAMED_BIT */


/**
 * @summary unsupportedVersion
 * @description
 *
 * Bit 22: the version of the message is not supported
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const unsupportedVersion: number = PKIFailureInfo_unsupportedVersion; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_notAuthorized
 * @description
 *
 * Bit 23: the sender was not authorized to make the preceding request or perform the preceding action
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_notAuthorized: number = 23; /* LONG_NAMED_BIT */


/**
 * @summary notAuthorized
 * @description
 *
 * Bit 23: the sender was not authorized to make the preceding request or perform the preceding action
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const notAuthorized: number = PKIFailureInfo_notAuthorized; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_systemUnavail
 * @description
 *
 * Bit 24: the request cannot be handled due to system unavailability
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_systemUnavail: number = 24; /* LONG_NAMED_BIT */


/**
 * @summary systemUnavail
 * @description
 *
 * Bit 24: the request cannot be handled due to system unavailability
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const systemUnavail: number = PKIFailureInfo_systemUnavail; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_systemFailure
 * @description
 *
 * Bit 25: the request cannot be handled due to system failure
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_systemFailure: number = 25; /* LONG_NAMED_BIT */


/**
 * @summary systemFailure
 * @description
 *
 * Bit 25: the request cannot be handled due to system failure
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const systemFailure: number = PKIFailureInfo_systemFailure; /* SHORT_NAMED_BIT */


/**
 * @summary PKIFailureInfo_duplicateCertReq
 * @description
 *
 * Bit 26: certificate cannot be issued because a duplicate certificate already exists
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const PKIFailureInfo_duplicateCertReq: number = 26; /* LONG_NAMED_BIT */


/**
 * @summary duplicateCertReq
 * @description
 *
 * Bit 26: certificate cannot be issued because a duplicate certificate already exists
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 */
export const duplicateCertReq: number = PKIFailureInfo_duplicateCertReq; /* SHORT_NAMED_BIT */




export const _decode_PKIFailureInfo = $._decodeBitString;




export const _encode_PKIFailureInfo = $._encodeBitString;


/* eslint-enable */
