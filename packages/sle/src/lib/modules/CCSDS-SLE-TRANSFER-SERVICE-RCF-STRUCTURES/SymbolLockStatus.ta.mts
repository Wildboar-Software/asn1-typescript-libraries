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
 * @summary SymbolLockStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SymbolLockStatus        ::=    LockStatus
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

let _cached_encoder_for_SymbolLockStatus: $.ASN1Encoder<SymbolLockStatus> | null = null;

/**
 * @summary Encodes a(n) SymbolLockStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SymbolLockStatus, encoded as an ASN.1 Element.
 */
export
function _encode_SymbolLockStatus (value: SymbolLockStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SymbolLockStatus) { _cached_encoder_for_SymbolLockStatus = _encode_LockStatus; }
    return _cached_encoder_for_SymbolLockStatus(value, elGetter);
}


/* eslint-enable */
