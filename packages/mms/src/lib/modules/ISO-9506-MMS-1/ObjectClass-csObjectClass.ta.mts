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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ObjectClass_csObjectClass
 * @description
 *
 * Extended Object Class values, used when CBB `cspi` is negotiated
 * (ISO 9506-1:2003 §7.6.3; ISO 9506-2:2003 §7.5.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectClass-csObjectClass ::= INTEGER {
 *     eventConditionList (0),
 *     unitControl (1)
 * } (0..1)
 * ```
 */
export
type ObjectClass_csObjectClass = INTEGER;

/**
 * @summary ObjectClass_csObjectClass_eventConditionList
 * @description
 *
 * Event Condition List (ISO 9506-1:2003 §7.6.3).
 * @constant
 * @type {number}
 */
export
const ObjectClass_csObjectClass_eventConditionList: ObjectClass_csObjectClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_csObjectClass_eventConditionList
 * @description
 *
 * Event Condition List (ISO 9506-1:2003 §7.6.3).
 * @constant
 * @type {number}
 */
export
const eventConditionList: ObjectClass_csObjectClass = ObjectClass_csObjectClass_eventConditionList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_csObjectClass_unitControl
 * @description
 *
 * Unit Control (ISO 9506-1:2003 §7.6.3).
 * @constant
 * @type {number}
 */
export
const ObjectClass_csObjectClass_unitControl: ObjectClass_csObjectClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ObjectClass_csObjectClass_unitControl
 * @description
 *
 * Unit Control (ISO 9506-1:2003 §7.6.3).
 * @constant
 * @type {number}
 */
export
const unitControl: ObjectClass_csObjectClass = ObjectClass_csObjectClass_unitControl; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ObjectClass_csObjectClass = $._decodeInteger;
export const _encode_ObjectClass_csObjectClass = $._encodeInteger;


/* eslint-enable */
