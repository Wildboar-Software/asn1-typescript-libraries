/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
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
 * @summary PrioritisedObject_Item_priority
 * @description
 * 
 * Priority of a related object: `highest(0)` through `lowest(127)`. ITU-T Rec.
 * X.721 (02/92) §14.2.
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
 * @description
 *
 * Highest priority (0). ITU-T Rec. X.721 (02/92) §14.2.
 *
 * @constant
 * @type {number}
 */
export
const PrioritisedObject_Item_priority_highest = 0 satisfies PrioritisedObject_Item_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrioritisedObject_Item_priority_highest
 * @description
 *
 * Highest priority (0). ITU-T Rec. X.721 (02/92) §14.2.
 *
 * @constant
 * @type {number}
 */
export
const highest = PrioritisedObject_Item_priority_highest satisfies PrioritisedObject_Item_priority; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PrioritisedObject_Item_priority_lowest
 * @description
 *
 * Lowest priority (127). ITU-T Rec. X.721 (02/92) §14.2.
 *
 * @constant
 * @type {number}
 */
export
const PrioritisedObject_Item_priority_lowest = 127 satisfies PrioritisedObject_Item_priority; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PrioritisedObject_Item_priority_lowest
 * @description
 *
 * Lowest priority (127). ITU-T Rec. X.721 (02/92) §14.2.
 *
 * @constant
 * @type {number}
 */
export
const lowest = PrioritisedObject_Item_priority_lowest satisfies PrioritisedObject_Item_priority; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_PrioritisedObject_Item_priority = $._decodeInteger;


export const _encode_PrioritisedObject_Item_priority = $._encodeInteger;


/* eslint-enable */
