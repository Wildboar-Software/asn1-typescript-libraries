/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ForwardDuStatus, _encode_ForwardDuStatus, ForwardDuStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ForwardDuStatus.ta.mjs";
// export { ForwardDuStatus, ForwardDuStatus_radiated /* IMPORTED_LONG_NAMED_INTEGER */, radiated /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_expired /* IMPORTED_LONG_NAMED_INTEGER */, expired /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_interrupted /* IMPORTED_LONG_NAMED_INTEGER */, interrupted /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_acknowledged /* IMPORTED_LONG_NAMED_INTEGER */, acknowledged /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_productionStarted /* IMPORTED_LONG_NAMED_INTEGER */, productionStarted /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_productionNotStarted /* IMPORTED_LONG_NAMED_INTEGER */, productionNotStarted /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_unsupportedTransmissionMode /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedTransmissionMode /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ForwardDuStatus, _encode_ForwardDuStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ForwardDuStatus.ta.mjs";


/**
 * @summary CltuStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuStatus                        ::=    ForwardDuStatus
 * (  radiated
 * |  expired
 * |  interrupted
 * |  productionStarted                   -- radiation started
 * |  productionNotStarted                -- radiation not started
 * )
 * ```
 */
export
type CltuStatus = ForwardDuStatus; // DefinedType

let _cached_decoder_for_CltuStatus: $.ASN1Decoder<CltuStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuStatus (el: _Element): CltuStatus {
    if (!_cached_decoder_for_CltuStatus) { _cached_decoder_for_CltuStatus = _decode_ForwardDuStatus; }
    return _cached_decoder_for_CltuStatus(el);
}

let _cached_encoder_for_CltuStatus: $.ASN1Encoder<CltuStatus> | null = null;

/**
 * @summary Encodes a(n) CltuStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuStatus, encoded as an ASN.1 Element.
 */
export
function _encode_CltuStatus (value: CltuStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CltuStatus) { _cached_encoder_for_CltuStatus = _encode_ForwardDuStatus; }
    return _cached_encoder_for_CltuStatus(value, elGetter);
}


/* eslint-enable */
