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



/**
 * @summary ENbID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ENbID  ::=  CHOICE
 * {
 *     macroENbID                  [1] BIT STRING (SIZE(20)),
 *     homeENbID                   [2] BIT STRING (SIZE(28)),
 *     shortMacroENbID             [3] BIT STRING (SIZE(18)),
 *     longMacroENbID              [4] BIT STRING (SIZE(21))
 * }
 * ```
 */
export
type ENbID =
    { macroENbID: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { homeENbID: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { shortMacroENbID: BIT_STRING } /* CHOICE_ALT_ROOT */
    | { longMacroENbID: BIT_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ENbID: $.ASN1Decoder<ENbID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ENbID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ENbID (el: _Element): ENbID {
    if (!_cached_decoder_for_ENbID) { _cached_decoder_for_ENbID = $._decode_inextensible_choice<ENbID>({
    "CONTEXT 1": [ "macroENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 2": [ "homeENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 3": [ "shortMacroENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ],
    "CONTEXT 4": [ "longMacroENbID", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ]
}); }
    return _cached_decoder_for_ENbID(el);
}

let _cached_encoder_for_ENbID: $.ASN1Encoder<ENbID> | null = null;

/**
 * @summary Encodes a(n) ENbID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ENbID, encoded as an ASN.1 Element.
 */
export
function _encode_ENbID (value: ENbID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ENbID) { _cached_encoder_for_ENbID = $._encode_choice<ENbID>({
    "macroENbID": $._encode_implicit(_TagClass.context, 1, () => $._encodeBitString, $.BER),
    "homeENbID": $._encode_implicit(_TagClass.context, 2, () => $._encodeBitString, $.BER),
    "shortMacroENbID": $._encode_implicit(_TagClass.context, 3, () => $._encodeBitString, $.BER),
    "longMacroENbID": $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER),
}, $.BER); }
    return _cached_encoder_for_ENbID(value, elGetter);
}


/* eslint-enable */
