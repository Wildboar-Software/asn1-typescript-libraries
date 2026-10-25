/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSReadStatus
 * @description
 * 
 * Status of the MMS (e.g. read or deleted without reading).
 *
 * 3GPP TS 33.128, clause 7.4.3.15.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatus  ::=  ENUMERATED
 * {
 *     read(1),
 *     deletedWithoutBeingRead(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MMSReadStatus {
    read = 1,
    deletedWithoutBeingRead = 2,
}

/**
 * @summary MMSReadStatus
 * @description
 * 
 * Status of the MMS (e.g. read or deleted without reading).
 *
 * 3GPP TS 33.128, clause 7.4.3.15.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatus  ::=  ENUMERATED
 * {
 *     read(1),
 *     deletedWithoutBeingRead(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MMSReadStatus = _enum_for_MMSReadStatus;

/**
 * @summary MMSReadStatus
 * @description
 * 
 * Status of the MMS (e.g. read or deleted without reading).
 *
 * 3GPP TS 33.128, clause 7.4.3.15.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSReadStatus  ::=  ENUMERATED
 * {
 *     read(1),
 *     deletedWithoutBeingRead(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MMSReadStatus = _enum_for_MMSReadStatus;

/**
 * @summary MMSReadStatus_read
 * @constant
 * @type {number}
 */
export
const MMSReadStatus_read = MMSReadStatus.read satisfies MMSReadStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary read
 * @constant
 * @type {number}
 */
export
const read = MMSReadStatus.read satisfies MMSReadStatus; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MMSReadStatus_deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const MMSReadStatus_deletedWithoutBeingRead = MMSReadStatus.deletedWithoutBeingRead satisfies MMSReadStatus; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deletedWithoutBeingRead
 * @constant
 * @type {number}
 */
export
const deletedWithoutBeingRead = MMSReadStatus.deletedWithoutBeingRead satisfies MMSReadStatus; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MMSReadStatus: $.ASN1Decoder<MMSReadStatus> = $._decodeEnumerated;
export const _encode_MMSReadStatus: $.ASN1Encoder<MMSReadStatus> = $._encodeEnumerated;


/* eslint-enable */
