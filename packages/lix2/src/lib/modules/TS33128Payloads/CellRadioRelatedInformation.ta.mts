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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NGInformation, _decode_NGInformation, _encode_NGInformation } from "../TS33128Payloads/NGInformation.ta.mjs";
// export { NGInformation, _decode_NGInformation, _encode_NGInformation } from "../TS33128Payloads/NGInformation.ta.mjs";
import { F1Information, _decode_F1Information, _encode_F1Information } from "../TS33128Payloads/F1Information.ta.mjs";
// export { F1Information, _decode_F1Information, _encode_F1Information } from "../TS33128Payloads/F1Information.ta.mjs";
import { S1Information, _decode_S1Information, _encode_S1Information } from "../TS33128Payloads/S1Information.ta.mjs";
// export { S1Information, _decode_S1Information, _encode_S1Information } from "../TS33128Payloads/S1Information.ta.mjs";


/**
 * @summary CellRadioRelatedInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellRadioRelatedInformation  ::=  CHOICE
 * {
 *     nGInformation [1] NGInformation,
 *     f1Information [2] F1Information,
 *     s1Information [3] S1Information
 * }
 * ```
 */
export
type CellRadioRelatedInformation =
    { nGInformation: NGInformation } /* CHOICE_ALT_ROOT */
    | { f1Information: F1Information } /* CHOICE_ALT_ROOT */
    | { s1Information: S1Information } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CellRadioRelatedInformation: $.ASN1Decoder<CellRadioRelatedInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CellRadioRelatedInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CellRadioRelatedInformation (el: _Element): CellRadioRelatedInformation {
    if (!_cached_decoder_for_CellRadioRelatedInformation) { _cached_decoder_for_CellRadioRelatedInformation = $._decode_inextensible_choice<CellRadioRelatedInformation>({
    "CONTEXT 1": [ "nGInformation", $._decode_implicit<NGInformation>(() => _decode_NGInformation) ],
    "CONTEXT 2": [ "f1Information", $._decode_implicit<F1Information>(() => _decode_F1Information) ],
    "CONTEXT 3": [ "s1Information", $._decode_implicit<S1Information>(() => _decode_S1Information) ]
}); }
    return _cached_decoder_for_CellRadioRelatedInformation(el);
}

let _cached_encoder_for_CellRadioRelatedInformation: $.ASN1Encoder<CellRadioRelatedInformation> | null = null;

/**
 * @summary Encodes a(n) CellRadioRelatedInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellRadioRelatedInformation, encoded as an ASN.1 Element.
 */
export
function _encode_CellRadioRelatedInformation (value: CellRadioRelatedInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CellRadioRelatedInformation) { _cached_encoder_for_CellRadioRelatedInformation = $._encode_choice<CellRadioRelatedInformation>({
    "nGInformation": $._encode_implicit(_TagClass.context, 1, () => _encode_NGInformation, $.BER),
    "f1Information": $._encode_implicit(_TagClass.context, 2, () => _encode_F1Information, $.BER),
    "s1Information": $._encode_implicit(_TagClass.context, 3, () => _encode_S1Information, $.BER),
}, $.BER); }
    return _cached_encoder_for_CellRadioRelatedInformation(value, elGetter);
}


/* eslint-enable */
