/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OctetTo16, _decode_OctetTo16, _encode_OctetTo16 } from "../RSPDefinitions/OctetTo16.ta.mjs";
// export { OctetTo16, _decode_OctetTo16, _encode_OctetTo16 } from "../RSPDefinitions/OctetTo16.ta.mjs";
import { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";
// export { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";


/**
 * @summary DeleteProfileRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteProfileRequest  ::=  [51] CHOICE { -- Tag 'BF33'
 *     isdpAid [APPLICATION 15] OctetTo16, -- AID, tag '4F'
 *     iccid Iccid -- ICCID, tag '5A'
 * }
 * ```
 */
export
type DeleteProfileRequest =
    { isdpAid: OctetTo16 } /* CHOICE_ALT_ROOT */
    | { iccid: Iccid } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DeleteProfileRequest: $.ASN1Decoder<DeleteProfileRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteProfileRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteProfileRequest (el: _Element): DeleteProfileRequest {
    if (!_cached_decoder_for_DeleteProfileRequest) { _cached_decoder_for_DeleteProfileRequest = $._decode_explicit<DeleteProfileRequest>(() => $._decode_inextensible_choice<DeleteProfileRequest>({
    "APPLICATION 15": [ "isdpAid", $._decode_implicit<OctetTo16>(() => _decode_OctetTo16) ],
    "APPLICATION 26": [ "iccid", _decode_Iccid ]
})); }
    return _cached_decoder_for_DeleteProfileRequest(el);
}

let _cached_encoder_for_DeleteProfileRequest: $.ASN1Encoder<DeleteProfileRequest> | null = null;

/**
 * @summary Encodes a(n) DeleteProfileRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteProfileRequest, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteProfileRequest (value: DeleteProfileRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteProfileRequest) { _cached_encoder_for_DeleteProfileRequest = $._encode_explicit(_TagClass.context, 51, () => $._encode_choice<DeleteProfileRequest>({
    "isdpAid": $._encode_implicit(_TagClass.application, 15, () => _encode_OctetTo16, $.BER),
    "iccid": _encode_Iccid,
}, $.BER), $.BER); }
    return _cached_encoder_for_DeleteProfileRequest(value, elGetter);
}


/* eslint-enable */
