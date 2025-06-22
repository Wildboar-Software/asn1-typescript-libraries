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
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProceduralStatus_Item
 * @description
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
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_initializationRequired: ProceduralStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_initializationRequired
 * @constant
 * @type {number}
 */
export
const initializationRequired: ProceduralStatus_Item = ProceduralStatus_Item_initializationRequired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_notInitialized
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_notInitialized: ProceduralStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_notInitialized
 * @constant
 * @type {number}
 */
export
const notInitialized: ProceduralStatus_Item = ProceduralStatus_Item_notInitialized; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_initializing
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_initializing: ProceduralStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_initializing
 * @constant
 * @type {number}
 */
export
const initializing: ProceduralStatus_Item = ProceduralStatus_Item_initializing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_reporting
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_reporting: ProceduralStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_reporting
 * @constant
 * @type {number}
 */
export
const reporting: ProceduralStatus_Item = ProceduralStatus_Item_reporting; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_terminating
 * @constant
 * @type {number}
 */
export
const ProceduralStatus_Item_terminating: ProceduralStatus_Item = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProceduralStatus_Item_terminating
 * @constant
 * @type {number}
 */
export
const terminating: ProceduralStatus_Item = ProceduralStatus_Item_terminating; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ProceduralStatus_Item = $._decodeInteger;


export const _encode_ProceduralStatus_Item = $._encodeInteger;


/* eslint-enable */
