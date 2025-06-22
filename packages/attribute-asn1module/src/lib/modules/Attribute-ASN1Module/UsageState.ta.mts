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
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UsageState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageState  ::=  ENUMERATED {idle(0), active(1), busy(2)}
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_UsageState {
    idle = 0,
    active = 1,
    busy = 2,
}

/**
 * @summary UsageState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageState  ::=  ENUMERATED {idle(0), active(1), busy(2)}
 * ```
 *
 * @enum {number}
 */
export
type UsageState = _enum_for_UsageState;

/**
 * @summary UsageState
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageState  ::=  ENUMERATED {idle(0), active(1), busy(2)}
 * ```
 *
 * @enum {number}
 */
export
const UsageState = _enum_for_UsageState;

/**
 * @summary UsageState_idle
 * @constant
 * @type {number}
 */
export
const UsageState_idle: UsageState = UsageState.idle; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary idle
 * @constant
 * @type {number}
 */
export
const idle: UsageState = UsageState.idle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UsageState_active
 * @constant
 * @type {number}
 */
export
const UsageState_active: UsageState = UsageState.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active: UsageState = UsageState.active; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UsageState_busy
 * @constant
 * @type {number}
 */
export
const UsageState_busy: UsageState = UsageState.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @constant
 * @type {number}
 */
export
const busy: UsageState = UsageState.busy; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_UsageState = $._decodeEnumerated;


export const _encode_UsageState = $._encodeEnumerated;


/* eslint-enable */
