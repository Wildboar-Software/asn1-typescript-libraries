/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StartCount, _decode_StartCount, _encode_StartCount } from "../ISO-9506-MMS-1/StartCount.ta.mjs";
// export { StartCount, _decode_StartCount, _encode_StartCount } from "../ISO-9506-MMS-1/StartCount.ta.mjs";


/**
 * @summary CS_Resume_Request_controlling_modeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-Resume-Request-controlling-modeType ::= CHOICE {
 *     continueMode [0] IMPLICIT NULL,
 *     changeMode [1] StartCount
 * }
 * ```
 */
export
type CS_Resume_Request_controlling_modeType =
    { continueMode: NULL } /* CHOICE_ALT_ROOT */
    | { changeMode: StartCount } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_Resume_Request_controlling_modeType: $.ASN1Decoder<CS_Resume_Request_controlling_modeType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_Resume_Request_controlling_modeType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_Resume_Request_controlling_modeType (el: _Element): CS_Resume_Request_controlling_modeType {
    if (!_cached_decoder_for_CS_Resume_Request_controlling_modeType) { _cached_decoder_for_CS_Resume_Request_controlling_modeType = $._decode_inextensible_choice<CS_Resume_Request_controlling_modeType>({
    "CONTEXT 0": [ "continueMode", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "changeMode", $._decode_explicit<StartCount>(() => _decode_StartCount) ]
}); }
    return _cached_decoder_for_CS_Resume_Request_controlling_modeType(el);
}

let _cached_encoder_for_CS_Resume_Request_controlling_modeType: $.ASN1Encoder<CS_Resume_Request_controlling_modeType> | null = null;

/**
 * @summary Encodes a(n) CS_Resume_Request_controlling_modeType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_Resume_Request_controlling_modeType, encoded as an ASN.1 Element.
 */
export
function _encode_CS_Resume_Request_controlling_modeType (value: CS_Resume_Request_controlling_modeType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_Resume_Request_controlling_modeType) { _cached_encoder_for_CS_Resume_Request_controlling_modeType = $._encode_choice<CS_Resume_Request_controlling_modeType>({
    "continueMode": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "changeMode": $._encode_explicit(_TagClass.context, 1, () => _encode_StartCount, $.BER),
}, $.BER); }
    return _cached_encoder_for_CS_Resume_Request_controlling_modeType(value, elGetter);
}


/* eslint-enable */
