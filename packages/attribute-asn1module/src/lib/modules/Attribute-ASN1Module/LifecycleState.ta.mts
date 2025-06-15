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



/* START_OF_SYMBOL_DEFINITION _enum_for_LifecycleState */
/**
 * @summary LifecycleState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LifecycleState  ::=  ENUMERATED {planned(0), installed(1), pendingRemoval(2)}
 * ```@enum {number}
 */
export
enum _enum_for_LifecycleState {
    planned = 0,
    installed = 1,
    pendingRemoval = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_LifecycleState */

/* START_OF_SYMBOL_DEFINITION LifecycleState */
/**
 * @summary LifecycleState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LifecycleState  ::=  ENUMERATED {planned(0), installed(1), pendingRemoval(2)}
 * ```@enum {number}
 */
export
type LifecycleState = _enum_for_LifecycleState;
/* END_OF_SYMBOL_DEFINITION LifecycleState */

/* START_OF_SYMBOL_DEFINITION LifecycleState */
/**
 * @summary LifecycleState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LifecycleState  ::=  ENUMERATED {planned(0), installed(1), pendingRemoval(2)}
 * ```@enum {number}
 */
export
const LifecycleState = _enum_for_LifecycleState;
/* END_OF_SYMBOL_DEFINITION LifecycleState */

/* START_OF_SYMBOL_DEFINITION LifecycleState_planned */
/**
 * @summary LifecycleState_planned
 * @constant
 * @type {number}
 */
export
const LifecycleState_planned: LifecycleState = LifecycleState.planned; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LifecycleState_planned */

/* START_OF_SYMBOL_DEFINITION planned */
/**
 * @summary planned
 * @constant
 * @type {number}
 */
export
const planned: LifecycleState = LifecycleState.planned; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION planned */

/* START_OF_SYMBOL_DEFINITION LifecycleState_installed */
/**
 * @summary LifecycleState_installed
 * @constant
 * @type {number}
 */
export
const LifecycleState_installed: LifecycleState = LifecycleState.installed; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LifecycleState_installed */

/* START_OF_SYMBOL_DEFINITION installed */
/**
 * @summary installed
 * @constant
 * @type {number}
 */
export
const installed: LifecycleState = LifecycleState.installed; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION installed */

/* START_OF_SYMBOL_DEFINITION LifecycleState_pendingRemoval */
/**
 * @summary LifecycleState_pendingRemoval
 * @constant
 * @type {number}
 */
export
const LifecycleState_pendingRemoval: LifecycleState = LifecycleState.pendingRemoval; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LifecycleState_pendingRemoval */

/* START_OF_SYMBOL_DEFINITION pendingRemoval */
/**
 * @summary pendingRemoval
 * @constant
 * @type {number}
 */
export
const pendingRemoval: LifecycleState = LifecycleState.pendingRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION pendingRemoval */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LifecycleState */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LifecycleState */

/* START_OF_SYMBOL_DEFINITION _decode_LifecycleState */
export const _decode_LifecycleState = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_LifecycleState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LifecycleState */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LifecycleState */

/* START_OF_SYMBOL_DEFINITION _encode_LifecycleState */
export const _encode_LifecycleState = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_LifecycleState */

/* eslint-enable */
