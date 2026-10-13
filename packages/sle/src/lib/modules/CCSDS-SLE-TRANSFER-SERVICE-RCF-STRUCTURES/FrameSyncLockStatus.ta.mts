/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_LockStatus, _encode_LockStatus, LockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/LockStatus.ta.mjs";
// export { LockStatus, LockStatus_inLock /* IMPORTED_LONG_NAMED_INTEGER */, inLock /* IMPORTED_SHORT_NAMED_INTEGER */, LockStatus_outOfLock /* IMPORTED_LONG_NAMED_INTEGER */, outOfLock /* IMPORTED_SHORT_NAMED_INTEGER */, LockStatus_notInUse /* IMPORTED_LONG_NAMED_INTEGER */, notInUse /* IMPORTED_SHORT_NAMED_INTEGER */, LockStatus_unknown /* IMPORTED_LONG_NAMED_INTEGER */, unknown /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LockStatus, _encode_LockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/LockStatus.ta.mjs";


/**
 * @summary FrameSyncLockStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FrameSyncLockStatus      ::=     LockStatus
 * ( inLock
 * | outOfLock
 * | unknown
 * )
 * ```
 */
export
type FrameSyncLockStatus = LockStatus; // DefinedType

let _cached_decoder_for_FrameSyncLockStatus: $.ASN1Decoder<FrameSyncLockStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FrameSyncLockStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FrameSyncLockStatus (el: _Element): FrameSyncLockStatus {
    if (!_cached_decoder_for_FrameSyncLockStatus) { _cached_decoder_for_FrameSyncLockStatus = _decode_LockStatus; }
    return _cached_decoder_for_FrameSyncLockStatus(el);
}

let _cached_encoder_for_FrameSyncLockStatus: $.ASN1Encoder<FrameSyncLockStatus> | null = null;

/**
 * @summary Encodes a(n) FrameSyncLockStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FrameSyncLockStatus, encoded as an ASN.1 Element.
 */
export
function _encode_FrameSyncLockStatus (value: FrameSyncLockStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FrameSyncLockStatus) { _cached_encoder_for_FrameSyncLockStatus = _encode_LockStatus; }
    return _cached_encoder_for_FrameSyncLockStatus(value, elGetter);
}


/* eslint-enable */
