/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_PreEstStatus {
    established = 1,
    modify = 2,
    released = 3,
}

/**
 * @summary PreEstStatus
 * @description
 * 
 * Whether a pre-established PTC session is set up, modified, or released.
 * Mandatory on the pre-established session record (table 17.2.20). On session
 * end, include it when a pre-established session was used, to say whether that
 * session remains up or was released (table 17.2.7).
 * 
 * 3GPP TS 33.108, clause 17.2 and annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PreEstStatus             ::=  ENUMERATED
 * {
 *     established        (1),
 *     modify            (2),
 *     released        (3),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PreEstStatus = _enum_for_PreEstStatus | ENUMERATED;

/**
 * @summary PreEstStatus_established
 * @description
 * 
 * The pre-established PTC session setup has completed. Mandatory status on the
 * pre-established session record, and one of the two outcomes reported on
 * session end when a pre-established session was used. 3GPP TS 33.108, tables
 * 17.2.7 and 17.2.20.
 * 
 * @constant
 * @type {number}
 */
export
const PreEstStatus_established: _enum_for_PreEstStatus.established = _enum_for_PreEstStatus.established; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary established
 * @description
 * 
 * Pre-established PTC session setup completed (3GPP TS 33.108, table 17.2.20).
 * 
 * @constant
 * @type {number}
 */
export
const established: _enum_for_PreEstStatus.established = PreEstStatus_established; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreEstStatus_modify
 * @description
 * 
 * The pre-established PTC session was modified. Reported on the pre-established
 * session record (table 17.2.20). 3GPP TS 33.108, clause 17.2.20.
 * 
 * @constant
 * @type {number}
 */
export
const PreEstStatus_modify: _enum_for_PreEstStatus.modify = _enum_for_PreEstStatus.modify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modify
 * @description
 * 
 * Pre-established PTC session was modified (3GPP TS 33.108, table 17.2.20).
 * 
 * @constant
 * @type {number}
 */
export
const modify: _enum_for_PreEstStatus.modify = PreEstStatus_modify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreEstStatus_released
 * @description
 * 
 * The pre-established PTC session was released. Reported on the pre-established
 * session record, and on session end when that session was released with the
 * PTC session. 3GPP TS 33.108, tables 17.2.7 and 17.2.20.
 * 
 * @constant
 * @type {number}
 */
export
const PreEstStatus_released: _enum_for_PreEstStatus.released = _enum_for_PreEstStatus.released; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary released
 * @description
 * 
 * Pre-established PTC session was released (3GPP TS 33.108, table 17.2.20).
 * 
 * @constant
 * @type {number}
 */
export
const released: _enum_for_PreEstStatus.released = PreEstStatus_released; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PreEstStatus: $.ASN1Decoder<PreEstStatus> = $._decodeEnumerated;
export const _encode_PreEstStatus: $.ASN1Encoder<PreEstStatus> = $._encodeEnumerated;


/* eslint-enable */
