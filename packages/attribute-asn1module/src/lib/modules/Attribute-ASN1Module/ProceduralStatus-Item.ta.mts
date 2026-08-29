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
 * @summary ProceduralStatus_Item
 * @description
 * 
 * One member of `ProceduralStatus`. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec.
 * X.731 | ISO/IEC 10164-2 §7.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProceduralStatus-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProceduralStatus_Item = INTEGER;

/**
 * @summary ProceduralStatus_Item_initializationRequired
 * @description
 *
 * Initialization is required before normal operation. ITU-T Rec. X.721 (02/92)
 * §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.2.
 *
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_initializationRequired: ProceduralStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_initializationRequired
 * @description
 *
 * Initialization is required before normal operation. ITU-T Rec. X.721 (02/92)
 * §14.2; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.2.
 *
 * @constant
 * @type {number}
 */
export
const initializationRequired: ProceduralStatus_Item = ProceduralStatus_Item_initializationRequired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_notInitialized
 * @description
 *
 * Resource has not been initialized. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec.
 * X.731 | ISO/IEC 10164-2 §7.2.2.
 *
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_notInitialized: ProceduralStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_notInitialized
 * @description
 *
 * Resource has not been initialized. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec.
 * X.731 | ISO/IEC 10164-2 §7.2.2.
 *
 * @constant
 * @type {number}
 */
export
const notInitialized: ProceduralStatus_Item = ProceduralStatus_Item_notInitialized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_initializing
 * @description
 *
 * Initialization is in progress. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec.
 * X.731 | ISO/IEC 10164-2 §7.2.2.
 *
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_initializing: ProceduralStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_initializing
 * @description
 *
 * Initialization is in progress. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec.
 * X.731 | ISO/IEC 10164-2 §7.2.2.
 *
 * @constant
 * @type {number}
 */
export
const initializing: ProceduralStatus_Item = ProceduralStatus_Item_initializing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_reporting
 * @description
 *
 * Resource is reporting its status. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec.
 * X.731 | ISO/IEC 10164-2 §7.2.2.
 *
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_reporting: ProceduralStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_reporting
 * @description
 *
 * Resource is reporting its status. ITU-T Rec. X.721 (02/92) §14.2; ITU-T Rec.
 * X.731 | ISO/IEC 10164-2 §7.2.2.
 *
 * @constant
 * @type {number}
 */
export
const reporting: ProceduralStatus_Item = ProceduralStatus_Item_reporting; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_terminating
 * @description
 *
 * Resource is being taken out of service. ITU-T Rec. X.721 (02/92) §14.2; ITU-T
 * Rec. X.731 | ISO/IEC 10164-2 §7.2.2.
 *
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_terminating: ProceduralStatus_Item = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_terminating
 * @description
 *
 * Resource is being taken out of service. ITU-T Rec. X.721 (02/92) §14.2; ITU-T
 * Rec. X.731 | ISO/IEC 10164-2 §7.2.2.
 *
 * @constant
 * @type {number}
 */
export
const terminating: ProceduralStatus_Item = ProceduralStatus_Item_terminating; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ProceduralStatus_Item = $._decodeInteger;


export const _encode_ProceduralStatus_Item = $._encodeInteger;


/* eslint-enable */
