/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_LockStatus, _encode_LockStatus, LockStatus,
    LockStatus_inLock,
    LockStatus_outOfLock,
    LockStatus_unknown
} from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/LockStatus.ta.mjs";



import { integerIsOneOf } from "../../constraints.mjs";

/**
 * @summary FrameSyncLockStatus
 * @description
 *
 * Lock of the frame synchronization process: in-lock, out-of-lock, or unknown.
 * Loss of lock during the provider's lock-status observation period causes one
 * loss-of-frame-sync notification. The provider documents that period. Return
 * to lock is indicated by the next RCF-TRANSFER-DATA, and there is no separate
 * notification for it.
 *
 * CCSDS 911.2-B-4, sections 3.7.2.3 and 3.9.2.4.
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
    const _decoded = _cached_decoder_for_FrameSyncLockStatus(el);
    if (!integerIsOneOf(_decoded, [BigInt(LockStatus_inLock), BigInt(LockStatus_outOfLock), BigInt(LockStatus_unknown)])) {
        throw new ASN1Error("FrameSyncLockStatus violates LockStatus (inLock | outOfLock | unknown)");
    }
    return _decoded;
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
