/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { EncodingAlgorithm, _enum_for_EncodingAlgorithm, EncodingAlgorithm_aDPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, aDPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_aDPCM8K /* IMPORTED_LONG_ENUMERATION_ITEM */, aDPCM8K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_muLawPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, muLawPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_aLawPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, aLawPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EncodingAlgorithm, _encode_EncodingAlgorithm } from "../CSTA-device-feature-types/EncodingAlgorithm.ta.mjs";
// export { EncodingAlgorithm, _enum_for_EncodingAlgorithm, EncodingAlgorithm_aDPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, aDPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_aDPCM8K /* IMPORTED_LONG_ENUMERATION_ITEM */, aDPCM8K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_muLawPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, muLawPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, EncodingAlgorithm_aLawPCM6K /* IMPORTED_LONG_ENUMERATION_ITEM */, aLawPCM6K /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EncodingAlgorithm, _encode_EncodingAlgorithm } from "../CSTA-device-feature-types/EncodingAlgorithm.ta.mjs";
import { CurrentState, _enum_for_CurrentState, CurrentState_dtmfDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmfDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_formed /* IMPORTED_LONG_ENUMERATION_ITEM */, formed /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_play /* IMPORTED_LONG_ENUMERATION_ITEM */, play /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_playing /* IMPORTED_LONG_ENUMERATION_ITEM */, playing /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_ready /* IMPORTED_LONG_ENUMERATION_ITEM */, ready /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_record /* IMPORTED_LONG_ENUMERATION_ITEM */, record /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_review /* IMPORTED_LONG_ENUMERATION_ITEM */, review /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_started /* IMPORTED_LONG_ENUMERATION_ITEM */, started /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_stop /* IMPORTED_LONG_ENUMERATION_ITEM */, stop /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_suspendPlay /* IMPORTED_LONG_ENUMERATION_ITEM */, suspendPlay /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_suspendRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, suspendRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CurrentState, _encode_CurrentState } from "../CSTA-device-feature-types/CurrentState.ta.mjs";
// export { CurrentState, _enum_for_CurrentState, CurrentState_dtmfDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, dtmfDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_formed /* IMPORTED_LONG_ENUMERATION_ITEM */, formed /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_play /* IMPORTED_LONG_ENUMERATION_ITEM */, play /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_playing /* IMPORTED_LONG_ENUMERATION_ITEM */, playing /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_ready /* IMPORTED_LONG_ENUMERATION_ITEM */, ready /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_record /* IMPORTED_LONG_ENUMERATION_ITEM */, record /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_review /* IMPORTED_LONG_ENUMERATION_ITEM */, review /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_speechDetected /* IMPORTED_LONG_ENUMERATION_ITEM */, speechDetected /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_started /* IMPORTED_LONG_ENUMERATION_ITEM */, started /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_stop /* IMPORTED_LONG_ENUMERATION_ITEM */, stop /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_suspendPlay /* IMPORTED_LONG_ENUMERATION_ITEM */, suspendPlay /* IMPORTED_SHORT_ENUMERATION_ITEM */, CurrentState_suspendRecord /* IMPORTED_LONG_ENUMERATION_ITEM */, suspendRecord /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CurrentState, _encode_CurrentState } from "../CSTA-device-feature-types/CurrentState.ta.mjs";


/**
 * @summary AttributeInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeInfo  ::=  CHOICE
 * {     encodingAlgorithm         [0] IMPLICIT EncodingAlgorithm,
 *     samplingRate             [1] IMPLICIT INTEGER,
 *     duration             [2] IMPLICIT INTEGER,
 *     filename             [3] IMPLICIT IA5String,
 *     currentPosition         [4] IMPLICIT INTEGER,
 *     currentSpeed             [5] IMPLICIT INTEGER,
 *     currentVolume             [6] IMPLICIT INTEGER (0 .. 100),
 *     currentGain             [7] IMPLICIT INTEGER (0 .. 100),
 *     currentState             [8] IMPLICIT CurrentState }
 * ```
 */
export
type AttributeInfo =
    { encodingAlgorithm: EncodingAlgorithm } /* CHOICE_ALT_ROOT */
    | { samplingRate: INTEGER } /* CHOICE_ALT_ROOT */
    | { duration: INTEGER } /* CHOICE_ALT_ROOT */
    | { filename: IA5String } /* CHOICE_ALT_ROOT */
    | { currentPosition: INTEGER } /* CHOICE_ALT_ROOT */
    | { currentSpeed: INTEGER } /* CHOICE_ALT_ROOT */
    | { currentVolume: INTEGER } /* CHOICE_ALT_ROOT */
    | { currentGain: INTEGER } /* CHOICE_ALT_ROOT */
    | { currentState: CurrentState } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AttributeInfo: $.ASN1Decoder<AttributeInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeInfo (el: _Element): AttributeInfo {
    if (!_cached_decoder_for_AttributeInfo) { _cached_decoder_for_AttributeInfo = $._decode_inextensible_choice<AttributeInfo>({
    "CONTEXT 0": [ "encodingAlgorithm", $._decode_implicit<EncodingAlgorithm>(() => _decode_EncodingAlgorithm) ],
    "CONTEXT 1": [ "samplingRate", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "duration", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "filename", $._decode_implicit<IA5String>(() => $._decodeIA5String) ],
    "CONTEXT 4": [ "currentPosition", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 5": [ "currentSpeed", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 6": [ "currentVolume", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 7": [ "currentGain", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 8": [ "currentState", $._decode_implicit<CurrentState>(() => _decode_CurrentState) ]
}); }
    return _cached_decoder_for_AttributeInfo(el);
}

let _cached_encoder_for_AttributeInfo: $.ASN1Encoder<AttributeInfo> | null = null;

/**
 * @summary Encodes a(n) AttributeInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeInfo (value: AttributeInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeInfo) { _cached_encoder_for_AttributeInfo = $._encode_choice<AttributeInfo>({
    "encodingAlgorithm": $._encode_implicit(_TagClass.context, 0, () => _encode_EncodingAlgorithm, $.BER),
    "samplingRate": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "duration": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "filename": $._encode_implicit(_TagClass.context, 3, () => $._encodeIA5String, $.BER),
    "currentPosition": $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER),
    "currentSpeed": $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER),
    "currentVolume": $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER),
    "currentGain": $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
    "currentState": $._encode_implicit(_TagClass.context, 8, () => _encode_CurrentState, $.BER),
}, $.BER); }
    return _cached_encoder_for_AttributeInfo(value, elGetter);
}


/* eslint-enable */
