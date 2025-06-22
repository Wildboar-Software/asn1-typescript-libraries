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
 * @summary ControlStatus_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlStatus-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ControlStatus_Item = INTEGER;

/**
 * @summary ControlStatus_Item_subjectToTest
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_subjectToTest: ControlStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ControlStatus_Item_subjectToTest
 * @constant
 * @type {number}
 */
export
const subjectToTest: ControlStatus_Item = ControlStatus_Item_subjectToTest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ControlStatus_Item_partOfServicesLocked
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_partOfServicesLocked: ControlStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ControlStatus_Item_partOfServicesLocked
 * @constant
 * @type {number}
 */
export
const partOfServicesLocked: ControlStatus_Item = ControlStatus_Item_partOfServicesLocked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ControlStatus_Item_reservedForTest
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_reservedForTest: ControlStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ControlStatus_Item_reservedForTest
 * @constant
 * @type {number}
 */
export
const reservedForTest: ControlStatus_Item = ControlStatus_Item_reservedForTest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ControlStatus_Item_suspended
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_suspended: ControlStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ControlStatus_Item_suspended
 * @constant
 * @type {number}
 */
export
const suspended: ControlStatus_Item = ControlStatus_Item_suspended; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_ControlStatus_Item = $._decodeInteger;


export const _encode_ControlStatus_Item = $._encodeInteger;


/* eslint-enable */
