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



/* START_OF_SYMBOL_DEFINITION _enum_for_AdministrativeState */
/**
 * @summary AdministrativeState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```@enum {number}
 */
export
enum _enum_for_AdministrativeState {
    locked = 0,
    unlocked = 1,
    shuttingDown = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_AdministrativeState */

/* START_OF_SYMBOL_DEFINITION AdministrativeState */
/**
 * @summary AdministrativeState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```@enum {number}
 */
export
type AdministrativeState = _enum_for_AdministrativeState;
/* END_OF_SYMBOL_DEFINITION AdministrativeState */

/* START_OF_SYMBOL_DEFINITION AdministrativeState */
/**
 * @summary AdministrativeState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```@enum {number}
 */
export
const AdministrativeState = _enum_for_AdministrativeState;
/* END_OF_SYMBOL_DEFINITION AdministrativeState */

/* START_OF_SYMBOL_DEFINITION AdministrativeState_locked */
/**
 * @summary AdministrativeState_locked
 * @constant
 * @type {number}
 */
export
const AdministrativeState_locked: AdministrativeState = AdministrativeState.locked; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdministrativeState_locked */

/* START_OF_SYMBOL_DEFINITION locked */
/**
 * @summary locked
 * @constant
 * @type {number}
 */
export
const locked: AdministrativeState = AdministrativeState.locked; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION locked */

/* START_OF_SYMBOL_DEFINITION AdministrativeState_unlocked */
/**
 * @summary AdministrativeState_unlocked
 * @constant
 * @type {number}
 */
export
const AdministrativeState_unlocked: AdministrativeState = AdministrativeState.unlocked; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdministrativeState_unlocked */

/* START_OF_SYMBOL_DEFINITION unlocked */
/**
 * @summary unlocked
 * @constant
 * @type {number}
 */
export
const unlocked: AdministrativeState = AdministrativeState.unlocked; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION unlocked */

/* START_OF_SYMBOL_DEFINITION AdministrativeState_shuttingDown */
/**
 * @summary AdministrativeState_shuttingDown
 * @constant
 * @type {number}
 */
export
const AdministrativeState_shuttingDown: AdministrativeState = AdministrativeState.shuttingDown; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION AdministrativeState_shuttingDown */

/* START_OF_SYMBOL_DEFINITION shuttingDown */
/**
 * @summary shuttingDown
 * @constant
 * @type {number}
 */
export
const shuttingDown: AdministrativeState = AdministrativeState.shuttingDown; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION shuttingDown */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrativeState */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AdministrativeState */

/* START_OF_SYMBOL_DEFINITION _decode_AdministrativeState */
export const _decode_AdministrativeState = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_AdministrativeState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrativeState */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AdministrativeState */

/* START_OF_SYMBOL_DEFINITION _encode_AdministrativeState */
export const _encode_AdministrativeState = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_AdministrativeState */

/* eslint-enable */
