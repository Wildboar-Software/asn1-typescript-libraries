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
 * @summary DiagFormat_accessCtrl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-accessCtrl ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_accessCtrl =
    { noUser: NULL } /* CHOICE_ALT_ROOT */
    | { refused: NULL } /* CHOICE_ALT_ROOT */
    | { simple: NULL } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */
    | { alternative: OBJECT_IDENTIFIER[] } /* CHOICE_ALT_ROOT */
    | { pwdInv: NULL } /* CHOICE_ALT_ROOT */
    | { pwdExp: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DiagFormat_accessCtrl: $.ASN1Decoder<DiagFormat_accessCtrl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_accessCtrl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_accessCtrl (el: _Element): DiagFormat_accessCtrl {
    if (!_cached_decoder_for_DiagFormat_accessCtrl) { _cached_decoder_for_DiagFormat_accessCtrl = $._decode_inextensible_choice<DiagFormat_accessCtrl>({
    "CONTEXT 1": [ "noUser", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "refused", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "simple", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "oid", $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)) ],
    "CONTEXT 5": [ "alternative", $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)) ],
    "CONTEXT 6": [ "pwdInv", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 7": [ "pwdExp", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_DiagFormat_accessCtrl(el);
}

let _cached_encoder_for_DiagFormat_accessCtrl: $.ASN1Encoder<DiagFormat_accessCtrl> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_accessCtrl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_accessCtrl, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_accessCtrl (value: DiagFormat_accessCtrl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_accessCtrl) { _cached_encoder_for_DiagFormat_accessCtrl = $._encode_choice<DiagFormat_accessCtrl>({
    "noUser": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "refused": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "simple": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "oid": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER),
    "alternative": $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER),
    "pwdInv": $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER),
    "pwdExp": $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_DiagFormat_accessCtrl(value, elGetter);
}


/* eslint-enable */
