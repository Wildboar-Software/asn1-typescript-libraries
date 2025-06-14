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



/* START_OF_SYMBOL_DEFINITION _enum_for_OperationalState */
/**
 * @summary OperationalState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationalState  ::=  ENUMERATED {disabled(0), enabled(1)}
 * ```@enum {number}
 */
export
enum _enum_for_OperationalState {
    disabled = 0,
    enabled = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_OperationalState */

/* START_OF_SYMBOL_DEFINITION OperationalState */
/**
 * @summary OperationalState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationalState  ::=  ENUMERATED {disabled(0), enabled(1)}
 * ```@enum {number}
 */
export
type OperationalState = _enum_for_OperationalState;
/* END_OF_SYMBOL_DEFINITION OperationalState */

/* START_OF_SYMBOL_DEFINITION OperationalState */
/**
 * @summary OperationalState
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OperationalState  ::=  ENUMERATED {disabled(0), enabled(1)}
 * ```@enum {number}
 */
export
const OperationalState = _enum_for_OperationalState;
/* END_OF_SYMBOL_DEFINITION OperationalState */

/* START_OF_SYMBOL_DEFINITION OperationalState_disabled */
/**
 * @summary OperationalState_disabled
 * @constant
 * @type {number}
 */
export
const OperationalState_disabled: OperationalState = OperationalState.disabled; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationalState_disabled */

/* START_OF_SYMBOL_DEFINITION disabled */
/**
 * @summary disabled
 * @constant
 * @type {number}
 */
export
const disabled: OperationalState = OperationalState.disabled; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION disabled */

/* START_OF_SYMBOL_DEFINITION OperationalState_enabled */
/**
 * @summary OperationalState_enabled
 * @constant
 * @type {number}
 */
export
const OperationalState_enabled: OperationalState = OperationalState.enabled; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationalState_enabled */

/* START_OF_SYMBOL_DEFINITION enabled */
/**
 * @summary enabled
 * @constant
 * @type {number}
 */
export
const enabled: OperationalState = OperationalState.enabled; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION enabled */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationalState */
let _cached_decoder_for_OperationalState: $.ASN1Decoder<OperationalState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationalState */

/* START_OF_SYMBOL_DEFINITION _decode_OperationalState */
/**
 * @summary Decodes an ASN.1 element into a(n) OperationalState
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationalState} The decoded data structure.
 */
export
function _decode_OperationalState (el: _Element) {
    if (!_cached_decoder_for_OperationalState) { _cached_decoder_for_OperationalState = $._decodeEnumerated; }
    return _cached_decoder_for_OperationalState(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OperationalState */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationalState */
let _cached_encoder_for_OperationalState: $.ASN1Encoder<OperationalState> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationalState */

/* START_OF_SYMBOL_DEFINITION _encode_OperationalState */
/**
 * @summary Encodes a(n) OperationalState into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationalState, encoded as an ASN.1 Element.
 */
export
function _encode_OperationalState (value: OperationalState, elGetter: $.ASN1Encoder<OperationalState>) {
    if (!_cached_encoder_for_OperationalState) { _cached_encoder_for_OperationalState = $._encodeEnumerated; }
    return _cached_encoder_for_OperationalState(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OperationalState */

/* eslint-enable */
