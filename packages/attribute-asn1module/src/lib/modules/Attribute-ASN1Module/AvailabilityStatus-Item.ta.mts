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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AvailabilityStatus_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AvailabilityStatus-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AvailabilityStatus_Item = INTEGER;

/**
 * @summary AvailabilityStatus_Item_inTest
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_inTest: AvailabilityStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_inTest
 * @constant
 * @type {number}
 */
export
const inTest: AvailabilityStatus_Item = AvailabilityStatus_Item_inTest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_failed
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_failed: AvailabilityStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_failed
 * @constant
 * @type {number}
 */
export
const failed: AvailabilityStatus_Item = AvailabilityStatus_Item_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_powerOff
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_powerOff: AvailabilityStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_powerOff
 * @constant
 * @type {number}
 */
export
const powerOff: AvailabilityStatus_Item = AvailabilityStatus_Item_powerOff; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_offLine
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_offLine: AvailabilityStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_offLine
 * @constant
 * @type {number}
 */
export
const offLine: AvailabilityStatus_Item = AvailabilityStatus_Item_offLine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_offDuty
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_offDuty: AvailabilityStatus_Item = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_offDuty
 * @constant
 * @type {number}
 */
export
const offDuty: AvailabilityStatus_Item = AvailabilityStatus_Item_offDuty; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_dependency
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_dependency: AvailabilityStatus_Item = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_dependency
 * @constant
 * @type {number}
 */
export
const dependency: AvailabilityStatus_Item = AvailabilityStatus_Item_dependency; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_degraded
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_degraded: AvailabilityStatus_Item = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_degraded
 * @constant
 * @type {number}
 */
export
const degraded: AvailabilityStatus_Item = AvailabilityStatus_Item_degraded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_notInstalled
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_notInstalled: AvailabilityStatus_Item = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_notInstalled
 * @constant
 * @type {number}
 */
export
const notInstalled: AvailabilityStatus_Item = AvailabilityStatus_Item_notInstalled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_logFull
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_logFull: AvailabilityStatus_Item = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_logFull
 * @constant
 * @type {number}
 */
export
const logFull: AvailabilityStatus_Item = AvailabilityStatus_Item_logFull; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AvailabilityStatus_Item = $._decodeInteger;


export const _encode_AvailabilityStatus_Item = $._encodeInteger;


/* eslint-enable */
