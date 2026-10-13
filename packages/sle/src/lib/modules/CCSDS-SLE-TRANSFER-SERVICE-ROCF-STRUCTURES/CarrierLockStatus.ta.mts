/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_LockStatus, _encode_LockStatus, LockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/LockStatus.ta.mjs";
// export { LockStatus, LockStatus_inLock /* IMPORTED_LONG_NAMED_INTEGER */, inLock /* IMPORTED_SHORT_NAMED_INTEGER */, LockStatus_outOfLock /* IMPORTED_LONG_NAMED_INTEGER */, outOfLock /* IMPORTED_SHORT_NAMED_INTEGER */, LockStatus_notInUse /* IMPORTED_LONG_NAMED_INTEGER */, notInUse /* IMPORTED_SHORT_NAMED_INTEGER */, LockStatus_unknown /* IMPORTED_LONG_NAMED_INTEGER */, unknown /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_LockStatus, _encode_LockStatus } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/LockStatus.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary CarrierLockStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CarrierLockStatus        ::=    LockStatus
 * (  inLock
 * |  outOfLock
 * |  unknown
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
import { LockStatus_inLock, LockStatus_outOfLock, LockStatus_unknown } from "./LockStatus.ta.mjs";
