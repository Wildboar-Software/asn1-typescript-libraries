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
let _cached_decoder_for_UsageState: $.ASN1Decoder<UsageState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_UsageState */

/* START_OF_SYMBOL_DEFINITION _decode_UsageState */
/**
 * @summary Decodes an ASN.1 element into a(n) UsageState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UsageState} The decoded data structure.
 */
export
function _decode_UsageState (el: _Element) {
    if (!_cached_decoder_for_UsageState) { _cached_decoder_for_UsageState = $._decodeEnumerated; }
    return _cached_decoder_for_UsageState(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_UsageState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_UsageState */
let _cached_encoder_for_UsageState: $.ASN1Encoder<UsageState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_UsageState */

/* START_OF_SYMBOL_DEFINITION _encode_UsageState */
/**
 * @summary Encodes a(n) UsageState into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UsageState, encoded as an ASN.1 Element.
 */
export
function _encode_UsageState (value: UsageState, elGetter: $.ASN1Encoder<UsageState>) {
    if (!_cached_encoder_for_UsageState) { _cached_encoder_for_UsageState = $._encodeEnumerated; }
    return _cached_encoder_for_UsageState(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_UsageState */

/* eslint-enable */
