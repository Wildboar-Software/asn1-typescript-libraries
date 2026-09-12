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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProgramInvocationState, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";
// export { ProgramInvocationState, ProgramInvocationState_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_unrunnable /* IMPORTED_LONG_NAMED_INTEGER */, unrunnable /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_idle /* IMPORTED_LONG_NAMED_INTEGER */, idle /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_running /* IMPORTED_LONG_NAMED_INTEGER */, running /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopped /* IMPORTED_LONG_NAMED_INTEGER */, stopped /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_starting /* IMPORTED_LONG_NAMED_INTEGER */, starting /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_stopping /* IMPORTED_LONG_NAMED_INTEGER */, stopping /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resuming /* IMPORTED_LONG_NAMED_INTEGER */, resuming /* IMPORTED_SHORT_NAMED_INTEGER */, ProgramInvocationState_resetting /* IMPORTED_LONG_NAMED_INTEGER */, resetting /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProgramInvocationState, _encode_ProgramInvocationState } from "../MMS-Object-Module-1/ProgramInvocationState.ta.mjs";


/**
 * @summary Start_Error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Start-Error  ::=  ProgramInvocationState
 * ```
 */
export
type Start_Error = ProgramInvocationState; // DefinedType

let _cached_decoder_for_Start_Error: $.ASN1Decoder<Start_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Start_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Start_Error (el: _Element): Start_Error {
    if (!_cached_decoder_for_Start_Error) { _cached_decoder_for_Start_Error = _decode_ProgramInvocationState; }
    return _cached_decoder_for_Start_Error(el);
}

let _cached_encoder_for_Start_Error: $.ASN1Encoder<Start_Error> | null = null;

/**
 * @summary Encodes a(n) Start_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Start_Error, encoded as an ASN.1 Element.
 */
export
function _encode_Start_Error (value: Start_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Start_Error) { _cached_encoder_for_Start_Error = _encode_ProgramInvocationState; }
    return _cached_encoder_for_Start_Error(value, elGetter);
}


/* eslint-enable */
