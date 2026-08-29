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
 * One member of `AvailabilityStatus`. ITU-T Rec. X.721 (02/92) §14.2; ITU-T
 * Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
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
 * @description
 *
 * Resource is undergoing a test procedure. ITU-T Rec. X.721 (02/92) §14.2;
 * ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_inTest: AvailabilityStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_inTest
 * @description
 *
 * Resource is undergoing a test procedure. ITU-T Rec. X.721 (02/92) §14.2;
 * ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const inTest: AvailabilityStatus_Item = AvailabilityStatus_Item_inTest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_failed
 * @description
 *
 * Internal fault prevents operation. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec.
 * X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_failed: AvailabilityStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_failed
 * @description
 *
 * Internal fault prevents operation. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec.
 * X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const failed: AvailabilityStatus_Item = AvailabilityStatus_Item_failed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_powerOff
 * @description
 *
 * Resource requires power to be applied. ITU-T Rec. X.721 (02/92) §14.2; ITU-T
 * Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_powerOff: AvailabilityStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_powerOff
 * @description
 *
 * Resource requires power to be applied. ITU-T Rec. X.721 (02/92) §14.2; ITU-T
 * Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const powerOff: AvailabilityStatus_Item = AvailabilityStatus_Item_powerOff; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_offLine
 * @description
 *
 * Requires a manual operation to become available. ITU-T Rec. X.721 (02/92)
 * §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_offLine: AvailabilityStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_offLine
 * @description
 *
 * Requires a manual operation to become available. ITU-T Rec. X.721 (02/92)
 * §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const offLine: AvailabilityStatus_Item = AvailabilityStatus_Item_offLine; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_offDuty
 * @description
 *
 * Made inactive by an internal control process on a predetermined schedule.
 * ITU-T Rec. X.721 (02/92) §8.5, §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2
 * §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_offDuty: AvailabilityStatus_Item = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_offDuty
 * @description
 *
 * Made inactive by an internal control process on a predetermined schedule.
 * ITU-T Rec. X.721 (02/92) §8.5, §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2
 * §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const offDuty: AvailabilityStatus_Item = AvailabilityStatus_Item_offDuty; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_dependency
 * @description
 *
 * Cannot operate because a required resource is unavailable. ITU-T Rec. X.721
 * (02/92) §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_dependency: AvailabilityStatus_Item = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_dependency
 * @description
 *
 * Cannot operate because a required resource is unavailable. ITU-T Rec. X.721
 * (02/92) §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const dependency: AvailabilityStatus_Item = AvailabilityStatus_Item_dependency; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_degraded
 * @description
 *
 * Service is degraded in some respect. ITU-T Rec. X.721 (02/92) §14.2; ITU-T
 * Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_degraded: AvailabilityStatus_Item = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_degraded
 * @description
 *
 * Service is degraded in some respect. ITU-T Rec. X.721 (02/92) §14.2; ITU-T
 * Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const degraded: AvailabilityStatus_Item = AvailabilityStatus_Item_degraded; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_notInstalled
 * @description
 *
 * Resource is not present or is incomplete. ITU-T Rec. X.721 (02/92) §14.2;
 * ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_notInstalled: AvailabilityStatus_Item = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_notInstalled
 * @description
 *
 * Resource is not present or is incomplete. ITU-T Rec. X.721 (02/92) §14.2;
 * ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.1.
 *
 * @constant
 * @type {number}
 */
export
const notInstalled: AvailabilityStatus_Item = AvailabilityStatus_Item_notInstalled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_logFull
 * @description
 *
 * Log cannot accept further records (from ITU-T Rec. X.735 | ISO/IEC 10164-6).
 * ITU-T Rec. X.721 (02/92) §14.2.
 *
 * @constant
 * @type {number}
 */
export
const AvailabilityStatus_Item_logFull: AvailabilityStatus_Item = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AvailabilityStatus_Item_logFull
 * @description
 *
 * Log cannot accept further records (from ITU-T Rec. X.735 | ISO/IEC 10164-6).
 * ITU-T Rec. X.721 (02/92) §14.2.
 *
 * @constant
 * @type {number}
 */
export
const logFull: AvailabilityStatus_Item = AvailabilityStatus_Item_logFull; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_AvailabilityStatus_Item = $._decodeInteger;


export const _encode_AvailabilityStatus_Item = $._encodeInteger;


/* eslint-enable */
