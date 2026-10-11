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
 * @summary Stop_Error
 * @description
 * 
 * Result(-) of Stop: Program Invocation state after failure. ISO 9506-1:2003
 * §12.5.1.3.1. ISO 9506-2:2003 §12.5.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Stop-Error  ::=  ProgramInvocationState
 * ```
 */
export
type Stop_Error = ProgramInvocationState; // DefinedType

let _cached_decoder_for_Stop_Error: $.ASN1Decoder<Stop_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Stop_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Stop_Error (el: _Element): Stop_Error {
    if (!_cached_decoder_for_Stop_Error) { _cached_decoder_for_Stop_Error = _decode_ProgramInvocationState; }
    return _cached_decoder_for_Stop_Error(el);
}

let _cached_encoder_for_Stop_Error: $.ASN1Encoder<Stop_Error> | null = null;

/**
 * @summary Encodes a(n) Stop_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Stop_Error, encoded as an ASN.1 Element.
 */
export
function _encode_Stop_Error (value: Stop_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Stop_Error) { _cached_encoder_for_Stop_Error = _encode_ProgramInvocationState; }
    return _cached_encoder_for_Stop_Error(value, elGetter);
}


/* eslint-enable */
