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
import { RepertoireFontIdent_alternatives, _decode_RepertoireFontIdent_alternatives, _encode_RepertoireFontIdent_alternatives } from "../CDS/RepertoireFontIdent-alternatives.ta.mjs";
// export { RepertoireFontIdent_alternatives, _decode_RepertoireFontIdent_alternatives, _encode_RepertoireFontIdent_alternatives } from "../CDS/RepertoireFontIdent-alternatives.ta.mjs";


/**
 * @summary RepertoireFontIdent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepertoireFontIdent  ::=  CHOICE {
 *     placeholder     NULL,
 *     alternatives    SEQUENCE {
 *         assignment     [0] IMPLICIT NULL OPTIONAL,
 *         fontCapability [1] IMPLICIT NULL OPTIONAL,
 *         fontNames      [2] IMPLICIT SEQUENCE OF AssignmentIdent OPTIONAL
 *     }
 * }
 * ```
 */
export
type RepertoireFontIdent =
    { placeholder: NULL } /* CHOICE_ALT_ROOT */
    | { alternatives: RepertoireFontIdent_alternatives } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RepertoireFontIdent: $.ASN1Decoder<RepertoireFontIdent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepertoireFontIdent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RepertoireFontIdent (el: _Element): RepertoireFontIdent {
    if (!_cached_decoder_for_RepertoireFontIdent) { _cached_decoder_for_RepertoireFontIdent = $._decode_inextensible_choice<RepertoireFontIdent>({
    "UNIVERSAL 5": [ "placeholder", $._decodeNull ],
    "UNIVERSAL 16": [ "alternatives", _decode_RepertoireFontIdent_alternatives ]
}); }
    return _cached_decoder_for_RepertoireFontIdent(el);
}

let _cached_encoder_for_RepertoireFontIdent: $.ASN1Encoder<RepertoireFontIdent> | null = null;

/**
 * @summary Encodes a(n) RepertoireFontIdent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepertoireFontIdent, encoded as an ASN.1 Element.
 */
export
function _encode_RepertoireFontIdent (value: RepertoireFontIdent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RepertoireFontIdent) { _cached_encoder_for_RepertoireFontIdent = $._encode_choice<RepertoireFontIdent>({
    "placeholder": $._encodeNull,
    "alternatives": _encode_RepertoireFontIdent_alternatives,
}, $.BER); }
    return _cached_encoder_for_RepertoireFontIdent(value, elGetter);
}


/* eslint-enable */
