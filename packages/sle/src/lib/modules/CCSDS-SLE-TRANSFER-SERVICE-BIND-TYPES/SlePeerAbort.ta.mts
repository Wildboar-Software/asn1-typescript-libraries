/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PeerAbortDiagnostic, _decode_PeerAbortDiagnostic, _encode_PeerAbortDiagnostic } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/PeerAbortDiagnostic.ta.mjs";


/**
 * @summary SlePeerAbort
 * @description
 * 
 * Invocation of PEER-ABORT. Unconfirmed notification that the local application
 * detected an error that requires the association to be terminated abnormally.
 * Valid in states 2 (ready) and 3 (active), from either user or provider. It
 * carries no credentials. The association is aborted, the provider returns to
 * state 1 (unbound), and the transfer buffer is discarded. Status-report
 * statistics are kept for the rest of the provision period.
 * 
 * The initiator may also send it when a BIND return does not arrive, then
 * invoke BIND again.
 * 
 * CCSDS 911.1-B-5, sections 3.11, 3.1.5.1, 3.2.1.5, and A2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SlePeerAbort              ::=     PeerAbortDiagnostic
 * ```
 */
export
type SlePeerAbort = PeerAbortDiagnostic; // DefinedType

let _cached_decoder_for_SlePeerAbort: $.ASN1Decoder<SlePeerAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SlePeerAbort
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SlePeerAbort (el: _Element): SlePeerAbort {
    if (!_cached_decoder_for_SlePeerAbort) { _cached_decoder_for_SlePeerAbort = _decode_PeerAbortDiagnostic; }
    return _cached_decoder_for_SlePeerAbort(el);
}

let _cached_encoder_for_SlePeerAbort: $.ASN1Encoder<SlePeerAbort> | null = null;

/**
 * @summary Encodes a(n) SlePeerAbort into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SlePeerAbort, encoded as an ASN.1 Element.
 */
export
function _encode_SlePeerAbort (value: SlePeerAbort, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SlePeerAbort) { _cached_encoder_for_SlePeerAbort = _encode_PeerAbortDiagnostic; }
    return _cached_encoder_for_SlePeerAbort(value, elGetter);
}


/* eslint-enable */
