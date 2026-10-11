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


/**
 * @summary Reset_Error
 * @description
 * 
 * Result(-) of Reset: Program Invocation state after failure. `stopped` if
 * possible, else `unrunnable`. ISO 9506-1:2003 §12.7.1.3.1. ISO 9506-2:2003
 * §12.7.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Reset-Error  ::=  ProgramInvocationState
 * ```
 */
export
type Reset_Error = ProgramInvocationState; // DefinedType

let _cached_decoder_for_Reset_Error: $.ASN1Decoder<Reset_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Reset_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Reset_Error (el: _Element): Reset_Error {
    if (!_cached_decoder_for_Reset_Error) { _cached_decoder_for_Reset_Error = _decode_ProgramInvocationState; }
    return _cached_decoder_for_Reset_Error(el);
}

let _cached_encoder_for_Reset_Error: $.ASN1Encoder<Reset_Error> | null = null;

/**
 * @summary Encodes a(n) Reset_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reset_Error, encoded as an ASN.1 Element.
 */
export
function _encode_Reset_Error (value: Reset_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Reset_Error) { _cached_encoder_for_Reset_Error = _encode_ProgramInvocationState; }
    return _cached_encoder_for_Reset_Error(value, elGetter);
}


/* eslint-enable */
