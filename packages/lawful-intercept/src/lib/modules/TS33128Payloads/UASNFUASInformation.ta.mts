/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary UASNFUASInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UASNFUASInformation  ::=  CHOICE
 * {
 *     uAVFlightAssistance          [1] SBIType,
 *     uAVFlightAssistancePatch     [2] SBIType,
 *     nAFAuthenticateRequest       [3] SBIType,
 *     nAFAuthenticateAccept        [4] SBIType
 * }
 * ```
 */
export
type UASNFUASInformation =
    { uAVFlightAssistance: SBIType } /* CHOICE_ALT_ROOT */
    | { uAVFlightAssistancePatch: SBIType } /* CHOICE_ALT_ROOT */
    | { nAFAuthenticateRequest: SBIType } /* CHOICE_ALT_ROOT */
    | { nAFAuthenticateAccept: SBIType } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_UASNFUASInformation: $.ASN1Decoder<UASNFUASInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UASNFUASInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UASNFUASInformation (el: _Element): UASNFUASInformation {
    if (!_cached_decoder_for_UASNFUASInformation) { _cached_decoder_for_UASNFUASInformation = $._decode_extensible_choice<UASNFUASInformation>({
    "CONTEXT 1": [ "uAVFlightAssistance", $._decode_implicit<SBIType>(() => _decode_SBIType) ],
    "CONTEXT 2": [ "uAVFlightAssistancePatch", $._decode_implicit<SBIType>(() => _decode_SBIType) ],
    "CONTEXT 3": [ "nAFAuthenticateRequest", $._decode_implicit<SBIType>(() => _decode_SBIType) ],
    "CONTEXT 4": [ "nAFAuthenticateAccept", $._decode_implicit<SBIType>(() => _decode_SBIType) ]
}); }
    return _cached_decoder_for_UASNFUASInformation(el);
}

let _cached_encoder_for_UASNFUASInformation: $.ASN1Encoder<UASNFUASInformation> | null = null;

/**
 * @summary Encodes a(n) UASNFUASInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UASNFUASInformation, encoded as an ASN.1 Element.
 */
export
function _encode_UASNFUASInformation (value: UASNFUASInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UASNFUASInformation) { _cached_encoder_for_UASNFUASInformation = $._encode_choice<UASNFUASInformation>({
    "uAVFlightAssistance": $._encode_implicit(_TagClass.context, 1, () => _encode_SBIType, $.BER),
    "uAVFlightAssistancePatch": $._encode_implicit(_TagClass.context, 2, () => _encode_SBIType, $.BER),
    "nAFAuthenticateRequest": $._encode_implicit(_TagClass.context, 3, () => _encode_SBIType, $.BER),
    "nAFAuthenticateAccept": $._encode_implicit(_TagClass.context, 4, () => _encode_SBIType, $.BER),
}, $.BER); }
    return _cached_encoder_for_UASNFUASInformation(value, elGetter);
}


/* eslint-enable */
