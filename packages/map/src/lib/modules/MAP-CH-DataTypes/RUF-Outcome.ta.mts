/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_RUF_Outcome {
    accepted = 0,
    rejected = 1,
    noResponseFromFreeMS = 2,
    noResponseFromBusyMS = 3,
    udubFromFreeMS = 4,
    udubFromBusyMS = 5,
}

/**
 * @summary RUF_Outcome
 * @description
 *
 * 6–20 map to accepted; 21–30 rejected; 31–40 noResponseFromFreeMS (T4); 41–50
 * noResponseFromBusyMS (T10); 51–60 udubFromFreeMS; >60 udubFromBusyMS (3GPP TS
 * 29.002 V19.1.0 clause 17.7.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RUF-Outcome  ::=  ENUMERATED{
 *     accepted (0),
 *     rejected (1),
 *     noResponseFromFreeMS (2), -- T4 Expiry
 *     noResponseFromBusyMS (3), -- T10 Expiry
 *     udubFromFreeMS (4),
 *     udubFromBusyMS (5),
 *     ...}
 * ```
 * 
 * @enum {number}
 */
export
type RUF_Outcome = _enum_for_RUF_Outcome | ENUMERATED;

/**
 * @summary RUF_Outcome_accepted
 * @description
 *
 * `accepted (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_accepted: RUF_Outcome = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary accepted
 * @description
 *
 * `accepted (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const accepted: RUF_Outcome = RUF_Outcome_accepted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RUF_Outcome_rejected
 * @description
 *
 * `rejected (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_rejected: RUF_Outcome = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rejected
 * @description
 *
 * `rejected (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const rejected: RUF_Outcome = RUF_Outcome_rejected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RUF_Outcome_noResponseFromFreeMS
 * @description
 *
 * `noResponseFromFreeMS (2)` T4 expiry (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_noResponseFromFreeMS: RUF_Outcome = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noResponseFromFreeMS
 * @description
 *
 * `noResponseFromFreeMS (2)` T4 expiry (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const noResponseFromFreeMS: RUF_Outcome = RUF_Outcome_noResponseFromFreeMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RUF_Outcome_noResponseFromBusyMS
 * @description
 *
 * `noResponseFromBusyMS (3)` T10 expiry (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_noResponseFromBusyMS: RUF_Outcome = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noResponseFromBusyMS
 * @description
 *
 * `noResponseFromBusyMS (3)` T10 expiry (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const noResponseFromBusyMS: RUF_Outcome = RUF_Outcome_noResponseFromBusyMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RUF_Outcome_udubFromFreeMS
 * @description
 *
 * `udubFromFreeMS (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_udubFromFreeMS: RUF_Outcome = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary udubFromFreeMS
 * @description
 *
 * `udubFromFreeMS (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const udubFromFreeMS: RUF_Outcome = RUF_Outcome_udubFromFreeMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RUF_Outcome_udubFromBusyMS
 * @description
 *
 * `udubFromBusyMS (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const RUF_Outcome_udubFromBusyMS: RUF_Outcome = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary udubFromBusyMS
 * @description
 *
 * `udubFromBusyMS (5)` (3GPP TS 29.002 V19.1.0 clause 17.7.3).
 *
 * @constant
 * @type {number}
 */
export
const udubFromBusyMS: RUF_Outcome = RUF_Outcome_udubFromBusyMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RUF_Outcome
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RUF_Outcome = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RUF_Outcome into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RUF_Outcome, encoded as an ASN.1 Element.
 */
export const _encode_RUF_Outcome = $._encodeEnumerated;


/* eslint-enable */
