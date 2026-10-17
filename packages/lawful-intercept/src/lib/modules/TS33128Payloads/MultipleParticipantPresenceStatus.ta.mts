/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCParticipantPresenceStatus, _decode_PTCParticipantPresenceStatus, _encode_PTCParticipantPresenceStatus } from "../TS33128Payloads/PTCParticipantPresenceStatus.ta.mjs";
// export { PTCParticipantPresenceStatus, _decode_PTCParticipantPresenceStatus, _encode_PTCParticipantPresenceStatus } from "../TS33128Payloads/PTCParticipantPresenceStatus.ta.mjs";


/**
 * @summary MultipleParticipantPresenceStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MultipleParticipantPresenceStatus   ::=  SEQUENCE OF PTCParticipantPresenceStatus
 * ```
 */
export
type MultipleParticipantPresenceStatus = PTCParticipantPresenceStatus[]; // SequenceOfType

let _cached_decoder_for_MultipleParticipantPresenceStatus: $.ASN1Decoder<MultipleParticipantPresenceStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MultipleParticipantPresenceStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MultipleParticipantPresenceStatus (el: _Element): MultipleParticipantPresenceStatus {
    if (!_cached_decoder_for_MultipleParticipantPresenceStatus) { _cached_decoder_for_MultipleParticipantPresenceStatus = $._decodeSequenceOf<PTCParticipantPresenceStatus>(() => _decode_PTCParticipantPresenceStatus); }
    return _cached_decoder_for_MultipleParticipantPresenceStatus(el);
}

let _cached_encoder_for_MultipleParticipantPresenceStatus: $.ASN1Encoder<MultipleParticipantPresenceStatus> | null = null;

/**
 * @summary Encodes a(n) MultipleParticipantPresenceStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MultipleParticipantPresenceStatus, encoded as an ASN.1 Element.
 */
export
function _encode_MultipleParticipantPresenceStatus (value: MultipleParticipantPresenceStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MultipleParticipantPresenceStatus) { _cached_encoder_for_MultipleParticipantPresenceStatus = $._encodeSequenceOf<PTCParticipantPresenceStatus>(() => _encode_PTCParticipantPresenceStatus, $.BER); }
    return _cached_encoder_for_MultipleParticipantPresenceStatus(value, elGetter);
}


/* eslint-enable */
