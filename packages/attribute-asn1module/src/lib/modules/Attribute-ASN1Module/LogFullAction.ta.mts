/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary LogFullAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogFullAction  ::=  ENUMERATED {wrap(0), halt(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_LogFullAction {
    wrap = 0,
    halt = 1,
}

/**
 * @summary LogFullAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogFullAction  ::=  ENUMERATED {wrap(0), halt(1)}
 * ```
 * 
 * @enum {number}
 */
export
type LogFullAction = _enum_for_LogFullAction;

/**
 * @summary LogFullAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogFullAction  ::=  ENUMERATED {wrap(0), halt(1)}
 * ```
 * 
 * @enum {number}
 */
export
const LogFullAction = _enum_for_LogFullAction;

/**
 * @summary LogFullAction_wrap
 * @constant
 * @type {number}
 */
export
const LogFullAction_wrap: LogFullAction = LogFullAction.wrap; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary wrap
 * @constant
 * @type {number}
 */
export
const wrap: LogFullAction = LogFullAction.wrap; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LogFullAction_halt
 * @constant
 * @type {number}
 */
export
const LogFullAction_halt: LogFullAction = LogFullAction.halt; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary halt
 * @constant
 * @type {number}
 */
export
const halt: LogFullAction = LogFullAction.halt; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_LogFullAction = $._decodeEnumerated;


export const _encode_LogFullAction = $._encodeEnumerated;


/* eslint-enable */
