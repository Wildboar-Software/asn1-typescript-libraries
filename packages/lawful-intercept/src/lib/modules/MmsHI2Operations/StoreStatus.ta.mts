/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_StoreStatus {
    success = 0,
    errorTransient = 1,
    high = 2,
}

/**
 * @summary StoreStatus
 * @description
 * 
 * Whether the MM was stored in the MMBox, or why it was not (table 15.3.6.1.2).
 * Annex B.15 names three outcomes. Clause 15.3 does not further define
 * errorTransient or high.
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StoreStatus  ::=  ENUMERATED
 * {
 *     success         (0),
 *     errorTransient     (1),
 *     high            (2),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type StoreStatus = _enum_for_StoreStatus | ENUMERATED;

/**
 * @summary StoreStatus_success
 * @description
 * 
 * The MM was stored in the MMBox (table 15.3.6.1.2).
 * @constant
 * @type {number}
 */
export
const StoreStatus_success: _enum_for_StoreStatus.success = _enum_for_StoreStatus.success; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary success
 * @description
 * 
 * The MM was stored in the MMBox.
 * @constant
 * @type {number}
 */
export
const success: _enum_for_StoreStatus.success = StoreStatus_success; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StoreStatus_errorTransient
 * @description
 * 
 * Annex B.15 names this store outcome. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const StoreStatus_errorTransient: _enum_for_StoreStatus.errorTransient = _enum_for_StoreStatus.errorTransient; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary errorTransient
 * @description
 * 
 * Clause 15.3 does not further define this store outcome.
 * @constant
 * @type {number}
 */
export
const errorTransient: _enum_for_StoreStatus.errorTransient = StoreStatus_errorTransient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StoreStatus_high
 * @description
 * 
 * Annex B.15 names this store outcome. Clause 15.3 does not further define it.
 * @constant
 * @type {number}
 */
export
const StoreStatus_high: _enum_for_StoreStatus.high = _enum_for_StoreStatus.high; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary high
 * @description
 * 
 * Clause 15.3 does not further define this store outcome.
 * @constant
 * @type {number}
 */
export
const high: _enum_for_StoreStatus.high = StoreStatus_high; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_StoreStatus: $.ASN1Decoder<StoreStatus> = $._decodeEnumerated;
export const _encode_StoreStatus: $.ASN1Encoder<StoreStatus> = $._encodeEnumerated;


/* eslint-enable */
