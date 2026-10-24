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
 * State of a PTC pre-established session. Table 17.2.20 requires it on the
 * pre-established session record: established (setup completed), modified, or
 * released. On session end, include it when a pre-established session was used,
 * to say whether that session remains established or is released (clause
 * 17.2.7).
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * Pre-established PTC session setup has completed (table 17.2.20).
 * @constant
 * @type {number}
 */
export
const PreEstStatus_established: PreEstStatus = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary established
 * @description
 * 
 * Pre-established session setup completed (table 17.2.20).
 * @constant
 * @type {number}
 */
export
const established: PreEstStatus = PreEstStatus_established; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreEstStatus_modify
 * @description
 * 
 * Pre-established PTC session was modified (table 17.2.20).
 * @constant
 * @type {number}
 */
export
const PreEstStatus_modify: PreEstStatus = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modify
 * @description
 * 
 * Pre-established session modified (table 17.2.20).
 * @constant
 * @type {number}
 */
export
const modify: PreEstStatus = PreEstStatus_modify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PreEstStatus_released
 * @description
 * 
 * Pre-established PTC session was released (table 17.2.20). On session end,
 * this also reports that a pre-established session used for the PTC session was
 * released (clause 17.2.7).
 * @constant
 * @type {number}
 */
export
const PreEstStatus_released: PreEstStatus = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary released
 * @description
 * 
 * Pre-established session released (table 17.2.20).
 * @constant
 * @type {number}
 */
export
const released: PreEstStatus = PreEstStatus_released; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PreEstStatus: $.ASN1Decoder<PreEstStatus> = $._decodeEnumerated;
export const _encode_PreEstStatus: $.ASN1Encoder<PreEstStatus> = $._encodeEnumerated;


/* eslint-enable */
