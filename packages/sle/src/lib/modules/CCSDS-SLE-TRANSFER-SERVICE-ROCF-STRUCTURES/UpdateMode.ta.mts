/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedUpdateMode, _decode_RequestedUpdateMode, _encode_RequestedUpdateMode } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RequestedUpdateMode.ta.mjs";
// export { RequestedUpdateMode, RequestedUpdateMode_continuous /* IMPORTED_LONG_NAMED_INTEGER */, continuous /* IMPORTED_SHORT_NAMED_INTEGER */, RequestedUpdateMode_changeBased /* IMPORTED_LONG_NAMED_INTEGER */, changeBased /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RequestedUpdateMode, _encode_RequestedUpdateMode } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RequestedUpdateMode.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary UpdateMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateMode               ::=    RequestedUpdateMode
 * (  continuous
 * |  changeBased
 * )
 * ```
 */
export
type UpdateMode = RequestedUpdateMode; // DefinedType

let _cached_decoder_for_UpdateMode: $.ASN1Decoder<UpdateMode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateMode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateMode (el: _Element): UpdateMode {
    if (!_cached_decoder_for_UpdateMode) { _cached_decoder_for_UpdateMode = _decode_RequestedUpdateMode; }
    const _decoded = _cached_decoder_for_UpdateMode(el);
    if (!integerIsOneOf(_decoded, [BigInt(RequestedUpdateMode_continuous), BigInt(RequestedUpdateMode_changeBased)])) {
        throw new ASN1Error("UpdateMode violates RequestedUpdateMode (continuous | changeBased)");
    }
    return _decoded;
}

let _cached_encoder_for_UpdateMode: $.ASN1Encoder<UpdateMode> | null = null;

/**
 * @summary Encodes a(n) UpdateMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateMode, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateMode (value: UpdateMode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateMode) { _cached_encoder_for_UpdateMode = _encode_RequestedUpdateMode; }
    return _cached_encoder_for_UpdateMode(value, elGetter);
}


/* eslint-enable */
import { RequestedUpdateMode_continuous, RequestedUpdateMode_changeBased } from "./RequestedUpdateMode.ta.mjs";
