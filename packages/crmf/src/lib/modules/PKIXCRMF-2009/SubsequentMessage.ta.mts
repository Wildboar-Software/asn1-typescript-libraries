/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary SubsequentMessage
 * @description
 *
 * Indirect POP: POP completed by decrypting a later CA/RA message
 * ([RFC 4211 §4.2](https://datatracker.ietf.org/doc/html/rfc4211#section-4.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubsequentMessage  ::=  INTEGER {
 *     encrCert (0),
 *     -- requests that resulting certificate be encrypted for the
 *     -- end entity (following which, POP will be proven in a
 *     -- confirmation message)
 *     challengeResp (1) }
 * ```
 */
export type SubsequentMessage = INTEGER;


/**
 * @summary SubsequentMessage_encrCert
 * @description
 *
 * `encrCert`(0): issued certificate returned encrypted; requestor
 * decrypts and proves success to the CA/RA (details in the CRP)
 * ([RFC 4211 §4.2](https://datatracker.ietf.org/doc/html/rfc4211#section-4.2)).
 *
 * @constant
 * @type {number}
 */
export const SubsequentMessage_encrCert: SubsequentMessage = 0; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SubsequentMessage_encrCert
 * @description
 *
 * `encrCert`(0): issued certificate returned encrypted; requestor
 * decrypts and proves success to the CA/RA (details in the CRP)
 * ([RFC 4211 §4.2](https://datatracker.ietf.org/doc/html/rfc4211#section-4.2)).
 *
 * @constant
 * @type {number}
 */
export const encrCert: SubsequentMessage = SubsequentMessage_encrCert; /* SHORT_NAMED_INTEGER_VALUE */


/**
 * @summary SubsequentMessage_challengeResp
 * @description
 *
 * `challengeResp`(1): CA/RA sends a challenge; response details
 * are provided by the CRP ([RFC 4211 §4.2](https://datatracker.ietf.org/doc/html/rfc4211#section-4.2)).
 *
 * @constant
 * @type {number}
 */
export const SubsequentMessage_challengeResp: SubsequentMessage = 1; /* LONG_NAMED_INTEGER_VALUE */


/**
 * @summary SubsequentMessage_challengeResp
 * @description
 *
 * `challengeResp`(1): CA/RA sends a challenge; response details
 * are provided by the CRP ([RFC 4211 §4.2](https://datatracker.ietf.org/doc/html/rfc4211#section-4.2)).
 *
 * @constant
 * @type {number}
 */
export const challengeResp: SubsequentMessage = SubsequentMessage_challengeResp; /* SHORT_NAMED_INTEGER_VALUE */




export const _decode_SubsequentMessage = $._decodeInteger;




export const _encode_SubsequentMessage = $._encodeInteger;


/* eslint-enable */
