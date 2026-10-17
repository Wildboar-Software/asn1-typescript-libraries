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
 * @summary CarrierLockStatus
 * @description
 *
 * Lock of the carrier demodulation process, on a status report and on a
 * loss-of-frame-sync notification. Section 3.7.2.4.2 lists in-lock,
 * out-of-lock, and unknown, which are the names of this subtype. Section
 * 3.9.2.7 also lists not-in-use for the status-report carrier field. This
 * subtype has no such code.
 *
 * CCSDS 911.2-B-4, sections 3.7.2.4.2 and 3.9.2.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CarrierLockStatus     ::=    LockStatus
 * ( inLock
 * | outOfLock
 * | unknown
 * )
 * ```
 */
export
type CarrierLockStatus = LockStatus; // DefinedType

let _cached_decoder_for_CarrierLockStatus: $.ASN1Decoder<CarrierLockStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CarrierLockStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CarrierLockStatus (el: _Element): CarrierLockStatus {
    if (!_cached_decoder_for_CarrierLockStatus) { _cached_decoder_for_CarrierLockStatus = _decode_LockStatus; }
    const _decoded = _cached_decoder_for_CarrierLockStatus(el);
    if (!integerIsOneOf(_decoded, [BigInt(LockStatus_inLock), BigInt(LockStatus_outOfLock), BigInt(LockStatus_unknown)])) {
        throw new ASN1Error("CarrierLockStatus violates LockStatus (inLock | outOfLock | unknown)");
    }
    return _decoded;
}

let _cached_encoder_for_CarrierLockStatus: $.ASN1Encoder<CarrierLockStatus> | null = null;

/**
 * @summary Encodes a(n) CarrierLockStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CarrierLockStatus, encoded as an ASN.1 Element.
 */
export
function _encode_CarrierLockStatus (value: CarrierLockStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CarrierLockStatus) { _cached_encoder_for_CarrierLockStatus = _encode_LockStatus; }
    return _cached_encoder_for_CarrierLockStatus(value, elGetter);
}


/* eslint-enable */
