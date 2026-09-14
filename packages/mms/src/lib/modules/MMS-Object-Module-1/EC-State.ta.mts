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
 * @summary EC_State
 * @description
 * 
 * Event Condition state: disabled, idle, or
 * active. Always disabled for network-triggered conditions.
 * ISO 9506-1:2003 §19.1.1.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EC-State  ::=  INTEGER {
 *   disabled                            (0),
 *   idle                                (1),
 *   active                              (2)
 * } (0..2)
 * ```
 */
export
type EC_State = INTEGER;

/**
 * @summary EC_State_disabled
 * @description
 *
 * Not monitoring / network-triggered idle form. Always this value if
 * network-triggered. ISO 9506-1:2003 §19.1.1.4.
 *
 * @constant
 * @type {number}
 */
export
const EC_State_disabled: EC_State = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_State_disabled
 * @description
 *
 * Not monitoring / network-triggered idle form. Always this value if
 * network-triggered. ISO 9506-1:2003 §19.1.1.4.
 *
 * @constant
 * @type {number}
 */
export
const disabled: EC_State = EC_State_disabled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EC_State_idle
 * @description
 *
 * Monitored condition currently idle. ISO 9506-1:2003 §19.1.1.4.
 *
 * @constant
 * @type {number}
 */
export
const EC_State_idle: EC_State = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_State_idle
 * @description
 *
 * Monitored condition currently idle. ISO 9506-1:2003 §19.1.1.4.
 *
 * @constant
 * @type {number}
 */
export
const idle: EC_State = EC_State_idle; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary EC_State_active
 * @description
 *
 * Monitored condition currently active. ISO 9506-1:2003 §19.1.1.4.
 *
 * @constant
 * @type {number}
 */
export
const EC_State_active: EC_State = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EC_State_active
 * @description
 *
 * Monitored condition currently active. ISO 9506-1:2003 §19.1.1.4.
 *
 * @constant
 * @type {number}
 */
export
const active: EC_State = EC_State_active; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_EC_State = $._decodeInteger;
export const _encode_EC_State = $._encodeInteger;


/* eslint-enable */
