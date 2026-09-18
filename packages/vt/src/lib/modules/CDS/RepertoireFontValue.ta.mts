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
import { RepertoireFontValue_alternatives, _decode_RepertoireFontValue_alternatives, _encode_RepertoireFontValue_alternatives } from "../CDS/RepertoireFontValue-alternatives.ta.mjs";
// export { RepertoireFontValue_alternatives, _decode_RepertoireFontValue_alternatives, _encode_RepertoireFontValue_alternatives } from "../CDS/RepertoireFontValue-alternatives.ta.mjs";


/**
 * @summary RepertoireFontValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepertoireFontValue  ::=  CHOICE {
 *     placeholder     NULL,
 *     alternatives    SEQUENCE {
 *         repertoire      [0] IMPLICIT RepertoireAssignment OPTIONAL,
 *         fontCapability  [1] IMPLICIT INTEGER OPTIONAL,
 *         fontAssignments [2] IMPLICIT SEQUENCE OF FontAssignment OPTIONAL
 *     }
 * }
 * ```
 */
export
type RepertoireFontValue =
    { placeholder: NULL } /* CHOICE_ALT_ROOT */
    | { alternatives: RepertoireFontValue_alternatives } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RepertoireFontValue: $.ASN1Decoder<RepertoireFontValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepertoireFontValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RepertoireFontValue (el: _Element): RepertoireFontValue {
    if (!_cached_decoder_for_RepertoireFontValue) { _cached_decoder_for_RepertoireFontValue = $._decode_inextensible_choice<RepertoireFontValue>({
    "UNIVERSAL 5": [ "placeholder", $._decodeNull ],
    "UNIVERSAL 16": [ "alternatives", _decode_RepertoireFontValue_alternatives ]
}); }
    return _cached_decoder_for_RepertoireFontValue(el);
}

let _cached_encoder_for_RepertoireFontValue: $.ASN1Encoder<RepertoireFontValue> | null = null;

/**
 * @summary Encodes a(n) RepertoireFontValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepertoireFontValue, encoded as an ASN.1 Element.
 */
export
function _encode_RepertoireFontValue (value: RepertoireFontValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RepertoireFontValue) { _cached_encoder_for_RepertoireFontValue = $._encode_choice<RepertoireFontValue>({
    "placeholder": $._encodeNull,
    "alternatives": _encode_RepertoireFontValue_alternatives,
}, $.BER); }
    return _cached_encoder_for_RepertoireFontValue(value, elGetter);
}


/* eslint-enable */
