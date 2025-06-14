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



/* START_OF_SYMBOL_DEFINITION _enum_for_LogFullAction */
/**
 * @summary LogFullAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogFullAction  ::=  ENUMERATED {wrap(0), halt(1)}
 * ```@enum {number}
 */
export
enum _enum_for_LogFullAction {
    wrap = 0,
    halt = 1,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_LogFullAction */

/* START_OF_SYMBOL_DEFINITION LogFullAction */
/**
 * @summary LogFullAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogFullAction  ::=  ENUMERATED {wrap(0), halt(1)}
 * ```@enum {number}
 */
export
type LogFullAction = _enum_for_LogFullAction;
/* END_OF_SYMBOL_DEFINITION LogFullAction */

/* START_OF_SYMBOL_DEFINITION LogFullAction */
/**
 * @summary LogFullAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogFullAction  ::=  ENUMERATED {wrap(0), halt(1)}
 * ```@enum {number}
 */
export
const LogFullAction = _enum_for_LogFullAction;
/* END_OF_SYMBOL_DEFINITION LogFullAction */

/* START_OF_SYMBOL_DEFINITION LogFullAction_wrap */
/**
 * @summary LogFullAction_wrap
 * @constant
 * @type {number}
 */
export
const LogFullAction_wrap: LogFullAction = LogFullAction.wrap; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LogFullAction_wrap */

/* START_OF_SYMBOL_DEFINITION wrap */
/**
 * @summary wrap
 * @constant
 * @type {number}
 */
export
const wrap: LogFullAction = LogFullAction.wrap; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION wrap */

/* START_OF_SYMBOL_DEFINITION LogFullAction_halt */
/**
 * @summary LogFullAction_halt
 * @constant
 * @type {number}
 */
export
const LogFullAction_halt: LogFullAction = LogFullAction.halt; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION LogFullAction_halt */

/* START_OF_SYMBOL_DEFINITION halt */
/**
 * @summary halt
 * @constant
 * @type {number}
 */
export
const halt: LogFullAction = LogFullAction.halt; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION halt */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LogFullAction */
let _cached_decoder_for_LogFullAction: $.ASN1Decoder<LogFullAction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LogFullAction */

/* START_OF_SYMBOL_DEFINITION _decode_LogFullAction */
/**
 * @summary Decodes an ASN.1 element into a(n) LogFullAction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LogFullAction} The decoded data structure.
 */
export
function _decode_LogFullAction (el: _Element) {
    if (!_cached_decoder_for_LogFullAction) { _cached_decoder_for_LogFullAction = $._decodeEnumerated; }
    return _cached_decoder_for_LogFullAction(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LogFullAction */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LogFullAction */
let _cached_encoder_for_LogFullAction: $.ASN1Encoder<LogFullAction> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LogFullAction */

/* START_OF_SYMBOL_DEFINITION _encode_LogFullAction */
/**
 * @summary Encodes a(n) LogFullAction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogFullAction, encoded as an ASN.1 Element.
 */
export
function _encode_LogFullAction (value: LogFullAction, elGetter: $.ASN1Encoder<LogFullAction>) {
    if (!_cached_encoder_for_LogFullAction) { _cached_encoder_for_LogFullAction = $._encodeEnumerated; }
    return _cached_encoder_for_LogFullAction(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LogFullAction */

/* eslint-enable */
