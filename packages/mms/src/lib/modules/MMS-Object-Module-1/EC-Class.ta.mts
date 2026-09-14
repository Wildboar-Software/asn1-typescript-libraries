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
 * @summary EC_Class
 * @description
 * 
 * Event Condition class. network-triggered (0)
 * or monitored (1). ISO 9506-1:2003 §19.1.1.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EC-Class  ::=  INTEGER {
 *     network-triggered                   (0),
 *     monitored                           (1)
 * } (0..1)
 * ```
 */
export
type EC_Class = INTEGER;

/**
 * @summary EC_Class_network_triggered
 * @description
 *
 * Raised by TriggerEvent or autonomous server action. ISO 9506-1:2003 §19.1,
 * §19.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const EC_Class_network_triggered: EC_Class = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_Class_network_triggered
 * @description
 *
 * Raised by TriggerEvent or autonomous server action. ISO 9506-1:2003 §19.1,
 * §19.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const network_triggered: EC_Class = EC_Class_network_triggered; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EC_Class_monitored
 * @description
 *
 * Server watches a boolean variable (or unspecified local condition). ISO
 * 9506-1:2003 §19.1, §19.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const EC_Class_monitored: EC_Class = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_Class_monitored
 * @description
 *
 * Server watches a boolean variable (or unspecified local condition). ISO
 * 9506-1:2003 §19.1, §19.1.1.3.
 *
 * @constant
 * @type {number}
 */
export
const monitored: EC_Class = EC_Class_monitored; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EC_Class = $._decodeInteger;
export const _encode_EC_Class = $._encodeInteger;


/* eslint-enable */
