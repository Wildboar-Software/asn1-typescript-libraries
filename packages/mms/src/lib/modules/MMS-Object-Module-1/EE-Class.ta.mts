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
 * @summary EE_Class
 * @description
 * 
 * Event Enrollment class. modifier (0) =
 * AttachToEventCondition on a confirmed service; notification (1) =
 * explicit/predefined notification request. ISO 9506-1:2003 §21.1.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EE-Class  ::=  INTEGER {
 *     modifier         (0),
 *     notification     (1)
 * } (0..1)
 * ```
 */
export
type EE_Class = INTEGER;

/**
 * @summary EE_Class_modifier
 * @description
 *
 * One-shot enrollment from AttachToEventCondition; not Alter/Delete-able. ISO
 * 9506-1:2003 §21.1.1.3.1.
 *
 * @constant
 * @type {number}
 */
export
const EE_Class_modifier: EE_Class = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_Class_modifier
 * @description
 *
 * One-shot enrollment from AttachToEventCondition; not Alter/Delete-able. ISO
 * 9506-1:2003 §21.1.1.3.1.
 *
 * @constant
 * @type {number}
 */
export
const modifier: EE_Class = EE_Class_modifier; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EE_Class_notification
 * @description
 *
 * Explicit or predefined request for Event-Transition Processing. ISO
 * 9506-1:2003 §21.1.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const EE_Class_notification: EE_Class = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EE_Class_notification
 * @description
 *
 * Explicit or predefined request for Event-Transition Processing. ISO
 * 9506-1:2003 §21.1.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const notification: EE_Class = EE_Class_notification; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EE_Class = $._decodeInteger;
export const _encode_EE_Class = $._encodeInteger;


/* eslint-enable */
