/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ForwardDuStatus, _encode_ForwardDuStatus, ForwardDuStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ForwardDuStatus.ta.mjs";
// export { ForwardDuStatus, ForwardDuStatus_radiated /* IMPORTED_LONG_NAMED_INTEGER */, radiated /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_expired /* IMPORTED_LONG_NAMED_INTEGER */, expired /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_interrupted /* IMPORTED_LONG_NAMED_INTEGER */, interrupted /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_acknowledged /* IMPORTED_LONG_NAMED_INTEGER */, acknowledged /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_productionStarted /* IMPORTED_LONG_NAMED_INTEGER */, productionStarted /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_productionNotStarted /* IMPORTED_LONG_NAMED_INTEGER */, productionNotStarted /* IMPORTED_SHORT_NAMED_INTEGER */, ForwardDuStatus_unsupportedTransmissionMode /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedTransmissionMode /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ForwardDuStatus, _encode_ForwardDuStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ForwardDuStatus.ta.mjs";


/**
 * @summary FspPacketStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspPacketStatus          ::=    ForwardDuStatus
 * (  acknowledged
 * |  radiated
 * |  productionStarted
 * |  productionNotStarted
 * |  expired
 * |  unsupportedTransmissionMode
 * |  interrupted
 * )
 * ```
 */
export
type FspPacketStatus = ForwardDuStatus; // DefinedType

let _cached_decoder_for_FspPacketStatus: $.ASN1Decoder<FspPacketStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspPacketStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspPacketStatus (el: _Element): FspPacketStatus {
    if (!_cached_decoder_for_FspPacketStatus) { _cached_decoder_for_FspPacketStatus = _decode_ForwardDuStatus; }
    return _cached_decoder_for_FspPacketStatus(el);
}

let _cached_encoder_for_FspPacketStatus: $.ASN1Encoder<FspPacketStatus> | null = null;

/**
 * @summary Encodes a(n) FspPacketStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspPacketStatus, encoded as an ASN.1 Element.
 */
export
function _encode_FspPacketStatus (value: FspPacketStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspPacketStatus) { _cached_encoder_for_FspPacketStatus = _encode_ForwardDuStatus; }
    return _cached_encoder_for_FspPacketStatus(value, elGetter);
}


/* eslint-enable */
