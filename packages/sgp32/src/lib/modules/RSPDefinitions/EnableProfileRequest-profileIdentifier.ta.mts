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
 * @summary EnableProfileRequest_profileIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnableProfileRequest-profileIdentifier ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EnableProfileRequest_profileIdentifier =
    { isdpAid: OctetTo16 } /* CHOICE_ALT_ROOT */
    | { iccid: Iccid } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EnableProfileRequest_profileIdentifier: $.ASN1Decoder<EnableProfileRequest_profileIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnableProfileRequest_profileIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnableProfileRequest_profileIdentifier (el: _Element): EnableProfileRequest_profileIdentifier {
    if (!_cached_decoder_for_EnableProfileRequest_profileIdentifier) { _cached_decoder_for_EnableProfileRequest_profileIdentifier = $._decode_inextensible_choice<EnableProfileRequest_profileIdentifier>({
    "APPLICATION 15": [ "isdpAid", $._decode_implicit<OctetTo16>(() => _decode_OctetTo16) ],
    "APPLICATION 26": [ "iccid", _decode_Iccid ]
}); }
    return _cached_decoder_for_EnableProfileRequest_profileIdentifier(el);
}

let _cached_encoder_for_EnableProfileRequest_profileIdentifier: $.ASN1Encoder<EnableProfileRequest_profileIdentifier> | null = null;

/**
 * @summary Encodes a(n) EnableProfileRequest_profileIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnableProfileRequest_profileIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_EnableProfileRequest_profileIdentifier (value: EnableProfileRequest_profileIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnableProfileRequest_profileIdentifier) { _cached_encoder_for_EnableProfileRequest_profileIdentifier = $._encode_choice<EnableProfileRequest_profileIdentifier>({
    "isdpAid": $._encode_implicit(_TagClass.application, 15, () => _encode_OctetTo16, $.BER),
    "iccid": _encode_Iccid,
}, $.BER); }
    return _cached_encoder_for_EnableProfileRequest_profileIdentifier(value, elGetter);
}


/* eslint-enable */
