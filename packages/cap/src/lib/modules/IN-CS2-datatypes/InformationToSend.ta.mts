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
import { InbandInfo, _decode_InbandInfo, _encode_InbandInfo } from "../IN-CS2-datatypes/InbandInfo.ta.mjs";
// export { InbandInfo, _decode_InbandInfo, _encode_InbandInfo } from "../IN-CS2-datatypes/InbandInfo.ta.mjs";
import { Tone, _decode_Tone, _encode_Tone } from "../IN-CS2-datatypes/Tone.ta.mjs";
// export { Tone, _decode_Tone, _encode_Tone } from "../IN-CS2-datatypes/Tone.ta.mjs";
import { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-CS2-datatypes/DisplayInformation.ta.mjs";
// export { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-CS2-datatypes/DisplayInformation.ta.mjs";


/**
 * @summary InformationToSend
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InformationToSend{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   inbandInfo          [0]  InbandInfo{bound},
 *   tone                [1]  Tone,
 *   displayInformation  [2]  DisplayInformation{bound}
 * }
 * ```
 */
export
type InformationToSend =
    { inbandInfo: InbandInfo } /* CHOICE_ALT_ROOT */
    | { tone: Tone } /* CHOICE_ALT_ROOT */
    | { displayInformation: DisplayInformation } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InformationToSend: $.ASN1Decoder<InformationToSend> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformationToSend
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InformationToSend (el: _Element): InformationToSend {
    if (!_cached_decoder_for_InformationToSend) { _cached_decoder_for_InformationToSend = $._decode_inextensible_choice<InformationToSend>({
    "CONTEXT 0": [ "inbandInfo", $._decode_implicit<InbandInfo>(() => _decode_InbandInfo) ],
    "CONTEXT 1": [ "tone", $._decode_implicit<Tone>(() => _decode_Tone) ],
    "CONTEXT 2": [ "displayInformation", $._decode_implicit<DisplayInformation>(() => _decode_DisplayInformation) ]
}); }
    return _cached_decoder_for_InformationToSend(el);
}

let _cached_encoder_for_InformationToSend: $.ASN1Encoder<InformationToSend> | null = null;

/**
 * @summary Encodes a(n) InformationToSend into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationToSend, encoded as an ASN.1 Element.
 */
export
function _encode_InformationToSend (value: InformationToSend, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InformationToSend) { _cached_encoder_for_InformationToSend = $._encode_choice<InformationToSend>({
    "inbandInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_InbandInfo, $.BER),
    "tone": $._encode_implicit(_TagClass.context, 1, () => _encode_Tone, $.BER),
    "displayInformation": $._encode_implicit(_TagClass.context, 2, () => _encode_DisplayInformation, $.BER),
}, $.BER); }
    return _cached_encoder_for_InformationToSend(value, elGetter);
}


/* eslint-enable */
