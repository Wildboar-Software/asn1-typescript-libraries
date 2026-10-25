/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary GuidanceInfo
 * @description
 *
 * Guidance when a password is requested: enter password (old), enter new
 * password, or enter new password again. Delivery method (display,
 * announcement) is not specified here (3GPP TS 29.002 V19.1.0 clauses 7.6.4.22
 * and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GuidanceInfo  ::=  ENUMERATED {
 *     enterPW  (0),
 *     enterNewPW  (1),
 *     enterNewPW-Again  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GuidanceInfo {
    enterPW = 0,
    enterNewPW = 1,
    enterNewPW_Again = 2,
}

/**
 * @summary GuidanceInfo
 * @description
 *
 * Guidance when a password is requested: enter password (old), enter new
 * password, or enter new password again. Delivery method (display,
 * announcement) is not specified here (3GPP TS 29.002 V19.1.0 clauses 7.6.4.22
 * and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GuidanceInfo  ::=  ENUMERATED {
 *     enterPW  (0),
 *     enterNewPW  (1),
 *     enterNewPW-Again  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type GuidanceInfo = _enum_for_GuidanceInfo;

/**
 * @summary GuidanceInfo
 * @description
 *
 * Guidance when a password is requested: enter password (old), enter new
 * password, or enter new password again. Delivery method (display,
 * announcement) is not specified here (3GPP TS 29.002 V19.1.0 clauses 7.6.4.22
 * and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GuidanceInfo  ::=  ENUMERATED {
 *     enterPW  (0),
 *     enterNewPW  (1),
 *     enterNewPW-Again  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const GuidanceInfo: typeof _enum_for_GuidanceInfo = _enum_for_GuidanceInfo;

/**
 * @summary GuidanceInfo_enterPW
 * @description
 *
 * `enterPW (0)`: check old password (3GPP TS 29.002 V19.1.0 clause 7.6.4.22).
 *
 * @constant
 * @type {number}
 */
export
const GuidanceInfo_enterPW: _enum_for_GuidanceInfo.enterPW = GuidanceInfo.enterPW; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enterPW
 * @description
 *
 * `enterPW (0)`: check old password (3GPP TS 29.002 V19.1.0 clause 7.6.4.22).
 *
 * @constant
 * @type {number}
 */
export
const enterPW: _enum_for_GuidanceInfo.enterPW = GuidanceInfo.enterPW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GuidanceInfo_enterNewPW
 * @description
 *
 * `enterNewPW (1)`: first new password (3GPP TS 29.002 V19.1.0 clause
 * 7.6.4.22).
 *
 * @constant
 * @type {number}
 */
export
const GuidanceInfo_enterNewPW: _enum_for_GuidanceInfo.enterNewPW = GuidanceInfo.enterNewPW; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enterNewPW
 * @description
 *
 * `enterNewPW (1)`: first new password (3GPP TS 29.002 V19.1.0 clause
 * 7.6.4.22).
 *
 * @constant
 * @type {number}
 */
export
const enterNewPW: _enum_for_GuidanceInfo.enterNewPW = GuidanceInfo.enterNewPW; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GuidanceInfo_enterNewPW_Again
 * @description
 *
 * `enterNewPW-Again (2)`: verify new password (3GPP TS 29.002 V19.1.0 clause
 * 7.6.4.22).
 *
 * @constant
 * @type {number}
 */
export
const GuidanceInfo_enterNewPW_Again: _enum_for_GuidanceInfo.enterNewPW_Again = GuidanceInfo.enterNewPW_Again; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enterNewPW_Again
 * @description
 *
 * `enterNewPW-Again (2)`: verify new password (3GPP TS 29.002 V19.1.0 clause
 * 7.6.4.22).
 *
 * @constant
 * @type {number}
 */
export
const enterNewPW_Again: _enum_for_GuidanceInfo.enterNewPW_Again = GuidanceInfo.enterNewPW_Again; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) GuidanceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_GuidanceInfo: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) GuidanceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GuidanceInfo, encoded as an ASN.1 Element.
 */
export const _encode_GuidanceInfo: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
