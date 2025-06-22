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
 * @summary PrioritisedObject_Item_priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrioritisedObject-Item-priority ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PrioritisedObject_Item_priority = INTEGER;

/**
 * @summary PrioritisedObject_Item_priority_highest
 * @constant
 * @type {number}
 */
export
const PrioritisedObject_Item_priority_highest: PrioritisedObject_Item_priority = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrioritisedObject_Item_priority_highest
 * @constant
 * @type {number}
 */
export
const highest: PrioritisedObject_Item_priority = PrioritisedObject_Item_priority_highest; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrioritisedObject_Item_priority_lowest
 * @constant
 * @type {number}
 */
export
const PrioritisedObject_Item_priority_lowest: PrioritisedObject_Item_priority = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrioritisedObject_Item_priority_lowest
 * @constant
 * @type {number}
 */
export
const lowest: PrioritisedObject_Item_priority = PrioritisedObject_Item_priority_lowest; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_PrioritisedObject_Item_priority = $._decodeInteger;


export const _encode_PrioritisedObject_Item_priority = $._encodeInteger;


/* eslint-enable */
