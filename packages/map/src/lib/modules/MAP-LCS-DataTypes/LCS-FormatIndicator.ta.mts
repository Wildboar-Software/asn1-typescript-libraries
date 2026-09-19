/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_LCS_FormatIndicator {
    logicalName = 0,
    e_mailAddress = 1,
    msisdn = 2,
    url = 3,
    sipUrl = 4,
}

/**
 * @summary LCS_FormatIndicator
 * @description
 *
 * logicalName, e-mailAddress, msisdn, url, sipUrl (3GPP TS 29.002 V19.1.0
 * clause 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LCS-FormatIndicator  ::=  ENUMERATED {
 *     logicalName    (0),
 *     e-mailAddress    (1),
 *     msisdn    (2),
 *     url    (3),
 *     sipUrl    (4),
 *     ... }
 * ```
 * 
 * @enum {number}
 */
export
type LCS_FormatIndicator = _enum_for_LCS_FormatIndicator | ENUMERATED;

/**
 * @summary LCS_FormatIndicator_logicalName
 * @description
 *
 * `logicalName (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCS_FormatIndicator_logicalName: LCS_FormatIndicator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary logicalName
 * @description
 *
 * `logicalName (0)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const logicalName: LCS_FormatIndicator = LCS_FormatIndicator_logicalName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_FormatIndicator_e_mailAddress
 * @description
 *
 * `e-mailAddress (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCS_FormatIndicator_e_mailAddress: LCS_FormatIndicator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e_mailAddress
 * @description
 *
 * `e-mailAddress (1)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const e_mailAddress: LCS_FormatIndicator = LCS_FormatIndicator_e_mailAddress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_FormatIndicator_msisdn
 * @description
 *
 * `msisdn (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCS_FormatIndicator_msisdn: LCS_FormatIndicator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary msisdn
 * @description
 *
 * `msisdn (2)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const msisdn: LCS_FormatIndicator = LCS_FormatIndicator_msisdn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_FormatIndicator_url
 * @description
 *
 * `url (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCS_FormatIndicator_url: LCS_FormatIndicator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary url
 * @description
 *
 * `url (3)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const url: LCS_FormatIndicator = LCS_FormatIndicator_url; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LCS_FormatIndicator_sipUrl
 * @description
 *
 * `sipUrl (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const LCS_FormatIndicator_sipUrl: LCS_FormatIndicator = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sipUrl
 * @description
 *
 * `sipUrl (4)` (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * @constant
 * @type {number}
 */
export
const sipUrl: LCS_FormatIndicator = LCS_FormatIndicator_sipUrl; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) LCS_FormatIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_LCS_FormatIndicator = $._decodeEnumerated;

/**
 * @summary Encodes a(n) LCS_FormatIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LCS_FormatIndicator, encoded as an ASN.1 Element.
 */
export const _encode_LCS_FormatIndicator = $._encodeEnumerated;


/* eslint-enable */
