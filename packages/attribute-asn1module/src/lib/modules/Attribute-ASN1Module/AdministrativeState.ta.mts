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
 * @summary AdministrativeState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AdministrativeState {
    locked = 0,
    unlocked = 1,
    shuttingDown = 2,
}

/**
 * @summary AdministrativeState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```
 * 
 * @enum {number}
 */
export
type AdministrativeState = _enum_for_AdministrativeState;

/**
 * @summary AdministrativeState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```
 * 
 * @enum {number}
 */
export
const AdministrativeState = _enum_for_AdministrativeState;

/**
 * @summary AdministrativeState_locked
 * @constant
 * @type {number}
 */
export
const AdministrativeState_locked: AdministrativeState = AdministrativeState.locked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locked
 * @constant
 * @type {number}
 */
export
const locked: AdministrativeState = AdministrativeState.locked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdministrativeState_unlocked
 * @constant
 * @type {number}
 */
export
const AdministrativeState_unlocked: AdministrativeState = AdministrativeState.unlocked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unlocked
 * @constant
 * @type {number}
 */
export
const unlocked: AdministrativeState = AdministrativeState.unlocked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdministrativeState_shuttingDown
 * @constant
 * @type {number}
 */
export
const AdministrativeState_shuttingDown: AdministrativeState = AdministrativeState.shuttingDown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shuttingDown
 * @constant
 * @type {number}
 */
export
const shuttingDown: AdministrativeState = AdministrativeState.shuttingDown; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AdministrativeState = $._decodeEnumerated;


export const _encode_AdministrativeState = $._encodeEnumerated;


/* eslint-enable */
