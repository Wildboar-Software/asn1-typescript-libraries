/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedUpdateMode, _decode_RequestedUpdateMode, _encode_RequestedUpdateMode,
    RequestedUpdateMode_continuous,
    RequestedUpdateMode_changeBased
} from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RequestedUpdateMode.ta.mjs";



import { integerIsOneOf } from "../../constraints.mjs";

/**
 * @summary UpdateMode
 * @description
 * 
 * update-mode on ROCF-START and in the permitted update-mode set. continuous
 * delivers every matching OCF. changeBased delivers an OCF when its contents
 * differ from the previous OCF with the same telecommand VC, or when none has
 * been delivered since this START. Service management sets the permitted set.
 *
 * CCSDS 911.5-B-4, section 3.4.2.10 and table 3-11.
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

/**
 * @summary Encodes a(n) UpdateMode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateMode, encoded as an ASN.1 Element.
 */
export const _encode_UpdateMode: $.ASN1Encoder<UpdateMode> = _encode_RequestedUpdateMode;


/* eslint-enable */
