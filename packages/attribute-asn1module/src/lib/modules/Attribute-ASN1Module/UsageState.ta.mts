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



/* START_OF_SYMBOL_DEFINITION _enum_for_UsageState */
/**
 * @summary UsageState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UsageState  ::=  ENUMERATED {idle(0), active(1), busy(2)}
 * ```@enum {number}
 */
export
enum _enum_for_UsageState {
    idle = 0,
    active = 1,
    busy = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_UsageState */

/* START_OF_SYMBOL_DEFINITION UsageState */
/**
 * @summary UsageState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UsageState  ::=  ENUMERATED {idle(0), active(1), busy(2)}
 * ```@enum {number}
 */
export
type UsageState = _enum_for_UsageState;
/* END_OF_SYMBOL_DEFINITION UsageState */

/* START_OF_SYMBOL_DEFINITION UsageState */
/**
 * @summary UsageState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UsageState  ::=  ENUMERATED {idle(0), active(1), busy(2)}
 * ```@enum {number}
 */
export
const UsageState = _enum_for_UsageState;
/* END_OF_SYMBOL_DEFINITION UsageState */

/* START_OF_SYMBOL_DEFINITION UsageState_idle */
/**
 * @summary UsageState_idle
 * @constant
 * @type {number}
 */
export
const UsageState_idle: UsageState = UsageState.idle; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION UsageState_idle */

/* START_OF_SYMBOL_DEFINITION idle */
/**
 * @summary idle
 * @constant
 * @type {number}
 */
export
const idle: UsageState = UsageState.idle; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION idle */

/* START_OF_SYMBOL_DEFINITION UsageState_active */
/**
 * @summary UsageState_active
 * @constant
 * @type {number}
 */
export
const UsageState_active: UsageState = UsageState.active; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION UsageState_active */

/* START_OF_SYMBOL_DEFINITION active */
/**
 * @summary active
 * @constant
 * @type {number}
 */
export
const active: UsageState = UsageState.active; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION active */

/* START_OF_SYMBOL_DEFINITION UsageState_busy */
/**
 * @summary UsageState_busy
 * @constant
 * @type {number}
 */
export
const UsageState_busy: UsageState = UsageState.busy; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION UsageState_busy */

/* START_OF_SYMBOL_DEFINITION busy */
/**
 * @summary busy
 * @constant
 * @type {number}
 */
export
const busy: UsageState = UsageState.busy; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION busy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_UsageState */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UsageState */

/* START_OF_SYMBOL_DEFINITION _decode_UsageState */
export const _decode_UsageState = $._decodeEnumerated;
/* END_OF_SYMBOL_DEFINITION _decode_UsageState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UsageState */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UsageState */

/* START_OF_SYMBOL_DEFINITION _encode_UsageState */
export const _encode_UsageState = $._encodeEnumerated;

/* END_OF_SYMBOL_DEFINITION _encode_UsageState */

/* eslint-enable */
