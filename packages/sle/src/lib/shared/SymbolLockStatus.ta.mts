/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_LockStatus, _encode_LockStatus, type LockStatus,
    LockStatus_inLock,
    LockStatus_outOfLock,
    LockStatus_unknown
} from "./LockStatus.ta.mjs";



import { integerIsOneOf } from "../constraints.mjs";

/**
 * @summary SymbolLockStatus
 * @description
 * 
 * Lock of the symbol (or bit) synchronization process, as reported on a
 * status report and in a loss-of-frame-sync notification. The permitted
 * values are `inLock`, `outOfLock`, and `unknown`.
 * 
 * CCSDS 911.1-B-5, 911.2-B-4, and 911.5-B-4, sections 3.7.2.4.2 and 3.9.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SymbolLockStatus         ::=     LockStatus
 * ( inLock
 * | outOfLock
 * | unknown
 * )
 * ```
 */
export
type SymbolLockStatus = LockStatus; // DefinedType

let _cached_decoder_for_SymbolLockStatus: $.ASN1Decoder<SymbolLockStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SymbolLockStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SymbolLockStatus (el: _Element): SymbolLockStatus {
    if (!_cached_decoder_for_SymbolLockStatus) { _cached_decoder_for_SymbolLockStatus = _decode_LockStatus; }
    const _decoded = _cached_decoder_for_SymbolLockStatus(el);
    if (!integerIsOneOf(_decoded, [BigInt(LockStatus_inLock), BigInt(LockStatus_outOfLock), BigInt(LockStatus_unknown)])) {
        throw new ASN1Error("SymbolLockStatus violates LockStatus (inLock | outOfLock | unknown)");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) SymbolLockStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SymbolLockStatus, encoded as an ASN.1 Element.
 */
export const _encode_SymbolLockStatus: $.ASN1Encoder<SymbolLockStatus> = _encode_LockStatus;


/* eslint-enable */
