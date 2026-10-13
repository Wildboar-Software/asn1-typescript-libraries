/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PeerAbortDiagnostic, _decode_PeerAbortDiagnostic, _encode_PeerAbortDiagnostic } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/PeerAbortDiagnostic.ta.mjs";
// export { PeerAbortDiagnostic, PeerAbortDiagnostic_accessDenied /* IMPORTED_LONG_NAMED_INTEGER */, accessDenied /* IMPORTED_SHORT_NAMED_INTEGER */, PeerAbortDiagnostic_unexpectedResponderId /* IMPORTED_LONG_NAMED_INTEGER */, unexpectedResponderId /* IMPORTED_SHORT_NAMED_INTEGER */, PeerAbortDiagnostic_operationalRequirement /* IMPORTED_LONG_NAMED_INTEGER */, operationalRequirement /* IMPORTED_SHORT_NAMED_INTEGER */, PeerAbortDiagnostic_protocolError /* IMPORTED_LONG_NAMED_INTEGER */, protocolError /* IMPORTED_SHORT_NAMED_INTEGER */, PeerAbortDiagnostic_communicationsFailure /* IMPORTED_LONG_NAMED_INTEGER */, communicationsFailure /* IMPORTED_SHORT_NAMED_INTEGER */, PeerAbortDiagnostic_encodingError /* IMPORTED_LONG_NAMED_INTEGER */, encodingError /* IMPORTED_SHORT_NAMED_INTEGER */, PeerAbortDiagnostic_returnTimeout /* IMPORTED_LONG_NAMED_INTEGER */, returnTimeout /* IMPORTED_SHORT_NAMED_INTEGER */, PeerAbortDiagnostic_endOfServiceProvisionPeriod /* IMPORTED_LONG_NAMED_INTEGER */, endOfServiceProvisionPeriod /* IMPORTED_SHORT_NAMED_INTEGER */, PeerAbortDiagnostic_unsolicitedInvokeId /* IMPORTED_LONG_NAMED_INTEGER */, unsolicitedInvokeId /* IMPORTED_SHORT_NAMED_INTEGER */, PeerAbortDiagnostic_otherReason /* IMPORTED_LONG_NAMED_INTEGER */, otherReason /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_PeerAbortDiagnostic, _encode_PeerAbortDiagnostic } from "../CCSDS-SLE-TRANSFER-SERVICE-BIND-TYPES/PeerAbortDiagnostic.ta.mjs";


/**
 * @summary SlePeerAbort
 * @description
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
