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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary PKIStatus
 * @description
 *
 * Status code for PKI response messages ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)). Also used
 * in revocation announcements ([RFC 4210 §5.3.15](https://datatracker.ietf.org/doc/html/rfc4210#section-5.3.15)).
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


/**
 * @summary PKIStatus_accepted
 * @description
 *
 * `accepted`(0): you got exactly what you asked for
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_accepted: PKIStatus = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_accepted
 * @description
 *
 * `accepted`(0): you got exactly what you asked for
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const accepted: PKIStatus = PKIStatus_accepted; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_grantedWithMods
 * @description
 *
 * `grantedWithMods`(1): you got something like what you asked for;
 * the requester is responsible for ascertaining the differences
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_grantedWithMods: PKIStatus = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_grantedWithMods
 * @description
 *
 * `grantedWithMods`(1): you got something like what you asked for;
 * the requester is responsible for ascertaining the differences
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const grantedWithMods: PKIStatus = PKIStatus_grantedWithMods; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_rejection
 * @description
 *
 * `rejection`(2): you don't get it; more information elsewhere in
 * the message ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_rejection: PKIStatus = 2; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_rejection
 * @description
 *
 * `rejection`(2): you don't get it; more information elsewhere in
 * the message ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const rejection: PKIStatus = PKIStatus_rejection; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_waiting
 * @description
 *
 * `waiting`(3): the request body part has not yet been processed;
 * expect to hear more later. MAY use `pollReq`/`pollRep`
 * ([RFC 4210 §5.3.22](https://datatracker.ietf.org/doc/html/rfc4210#section-5.3.22)) ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_waiting: PKIStatus = 3; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_waiting
 * @description
 *
 * `waiting`(3): the request body part has not yet been processed;
 * expect to hear more later. MAY use `pollReq`/`pollRep`
 * ([RFC 4210 §5.3.22](https://datatracker.ietf.org/doc/html/rfc4210#section-5.3.22)) ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const waiting: PKIStatus = PKIStatus_waiting; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_revocationWarning
 * @description
 *
 * `revocationWarning`(4): warning that a revocation is imminent
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_revocationWarning: PKIStatus = 4; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_revocationWarning
 * @description
 *
 * `revocationWarning`(4): warning that a revocation is imminent
 * ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const revocationWarning: PKIStatus = PKIStatus_revocationWarning; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_revocationNotification
 * @description
 *
 * `revocationNotification`(5): notification that a revocation has
 * occurred ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_revocationNotification: PKIStatus = 5; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_revocationNotification
 * @description
 *
 * `revocationNotification`(5): notification that a revocation has
 * occurred ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const revocationNotification: PKIStatus = PKIStatus_revocationNotification; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_keyUpdateWarning
 * @description
 *
 * `keyUpdateWarning`(6): update already done for the `oldCertId`
 * specified in `CertReqMsg` ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const PKIStatus_keyUpdateWarning: PKIStatus = 6; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary PKIStatus_keyUpdateWarning
 * @description
 *
 * `keyUpdateWarning`(6): update already done for the `oldCertId`
 * specified in `CertReqMsg` ([RFC 4210 §5.2.3](https://datatracker.ietf.org/doc/html/rfc4210#section-5.2.3)).
 *
 * @constant
 * @type {number}
 */
export const keyUpdateWarning: PKIStatus = PKIStatus_keyUpdateWarning; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_PKIStatus = $._decodeInteger;




export const _encode_PKIStatus = $._encodeInteger;


/* eslint-enable */
