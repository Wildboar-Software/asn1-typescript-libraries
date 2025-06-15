/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION PKIStatus */
/**
 * @summary PKIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIStatus  ::=  INTEGER {
 *     accepted               (0),
 *     -- you got exactly what you asked for
 *     grantedWithMods        (1),
 *     -- you got something like what you asked for; the
 *     -- requester is responsible for ascertaining the differences
 *     rejection              (2),
 *     -- you don't get it, more information elsewhere in the message
 *     waiting                (3),
 *     -- the request body part has not yet been processed; expect to
 *     -- hear more later (note: proper handling of this status
 *     -- response MAY use the polling req/rep PKIMessages specified
 *     -- in Section 5.3.22; alternatively, polling in the underlying
 *     -- transport layer MAY have some utility in this regard)
 *     revocationWarning      (4),
 *     -- this message contains a warning that a revocation is
 *     -- imminent
 *     revocationNotification (5),
 *     -- notification that a revocation has occurred
 *     keyUpdateWarning       (6)
 *     -- update already done for the oldCertId specified in
 *     -- CertReqMsg
 * }
 * ```
 */
export type PKIStatus = INTEGER;
/* END_OF_SYMBOL_DEFINITION PKIStatus */

/* START_OF_SYMBOL_DEFINITION PKIStatus_accepted */
/**
 * @summary PKIStatus_accepted
 * @constant
 * @type {number}
 */
export const PKIStatus_accepted: PKIStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_accepted */

/* START_OF_SYMBOL_DEFINITION accepted */
/**
 * @summary PKIStatus_accepted
 * @constant
 * @type {number}
 */
export const accepted: PKIStatus = PKIStatus_accepted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION accepted */

/* START_OF_SYMBOL_DEFINITION PKIStatus_grantedWithMods */
/**
 * @summary PKIStatus_grantedWithMods
 * @constant
 * @type {number}
 */
export const PKIStatus_grantedWithMods: PKIStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_grantedWithMods */

/* START_OF_SYMBOL_DEFINITION grantedWithMods */
/**
 * @summary PKIStatus_grantedWithMods
 * @constant
 * @type {number}
 */
export const grantedWithMods: PKIStatus = PKIStatus_grantedWithMods; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION grantedWithMods */

/* START_OF_SYMBOL_DEFINITION PKIStatus_rejection */
/**
 * @summary PKIStatus_rejection
 * @constant
 * @type {number}
 */
export const PKIStatus_rejection: PKIStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_rejection */

/* START_OF_SYMBOL_DEFINITION rejection */
/**
 * @summary PKIStatus_rejection
 * @constant
 * @type {number}
 */
export const rejection: PKIStatus = PKIStatus_rejection; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rejection */

/* START_OF_SYMBOL_DEFINITION PKIStatus_waiting */
/**
 * @summary PKIStatus_waiting
 * @constant
 * @type {number}
 */
export const PKIStatus_waiting: PKIStatus = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_waiting */

/* START_OF_SYMBOL_DEFINITION waiting */
/**
 * @summary PKIStatus_waiting
 * @constant
 * @type {number}
 */
export const waiting: PKIStatus = PKIStatus_waiting; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION waiting */

/* START_OF_SYMBOL_DEFINITION PKIStatus_revocationWarning */
/**
 * @summary PKIStatus_revocationWarning
 * @constant
 * @type {number}
 */
export const PKIStatus_revocationWarning: PKIStatus = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_revocationWarning */

/* START_OF_SYMBOL_DEFINITION revocationWarning */
/**
 * @summary PKIStatus_revocationWarning
 * @constant
 * @type {number}
 */
export const revocationWarning: PKIStatus = PKIStatus_revocationWarning; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION revocationWarning */

/* START_OF_SYMBOL_DEFINITION PKIStatus_revocationNotification */
/**
 * @summary PKIStatus_revocationNotification
 * @constant
 * @type {number}
 */
export const PKIStatus_revocationNotification: PKIStatus = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_revocationNotification */

/* START_OF_SYMBOL_DEFINITION revocationNotification */
/**
 * @summary PKIStatus_revocationNotification
 * @constant
 * @type {number}
 */
export const revocationNotification: PKIStatus = PKIStatus_revocationNotification; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION revocationNotification */

/* START_OF_SYMBOL_DEFINITION PKIStatus_keyUpdateWarning */
/**
 * @summary PKIStatus_keyUpdateWarning
 * @constant
 * @type {number}
 */
export const PKIStatus_keyUpdateWarning: PKIStatus = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_keyUpdateWarning */

/* START_OF_SYMBOL_DEFINITION keyUpdateWarning */
/**
 * @summary PKIStatus_keyUpdateWarning
 * @constant
 * @type {number}
 */
export const keyUpdateWarning: PKIStatus = PKIStatus_keyUpdateWarning; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION keyUpdateWarning */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIStatus */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIStatus */

/* START_OF_SYMBOL_DEFINITION _decode_PKIStatus */
export const _decode_PKIStatus = $._decodeInteger;
/* END_OF_SYMBOL_DEFINITION _decode_PKIStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIStatus */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIStatus */

/* START_OF_SYMBOL_DEFINITION _encode_PKIStatus */
export const _encode_PKIStatus = $._encodeInteger;

/* END_OF_SYMBOL_DEFINITION _encode_PKIStatus */

/* eslint-enable */
