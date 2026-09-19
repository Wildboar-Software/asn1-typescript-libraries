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
 * @summary PayloadInformationRemoved
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PayloadInformationRemoved  ::=  CHOICE
 * {
 *     charactersRemoved [1] INTEGER,
 *     octetsRemoved     [2] INTEGER,
 *     bitsRemoved       [3] INTEGER
 * }
 * ```
 */
export
type PayloadInformationRemoved =
    { charactersRemoved: INTEGER } /* CHOICE_ALT_ROOT */
    | { octetsRemoved: INTEGER } /* CHOICE_ALT_ROOT */
    | { bitsRemoved: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PayloadInformationRemoved: $.ASN1Decoder<PayloadInformationRemoved> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PayloadInformationRemoved
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PayloadInformationRemoved (el: _Element): PayloadInformationRemoved {
    if (!_cached_decoder_for_PayloadInformationRemoved) { _cached_decoder_for_PayloadInformationRemoved = $._decode_inextensible_choice<PayloadInformationRemoved>({
    "CONTEXT 1": [ "charactersRemoved", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 2": [ "octetsRemoved", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "bitsRemoved", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_PayloadInformationRemoved(el);
}

let _cached_encoder_for_PayloadInformationRemoved: $.ASN1Encoder<PayloadInformationRemoved> | null = null;

/**
 * @summary Encodes a(n) PayloadInformationRemoved into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PayloadInformationRemoved, encoded as an ASN.1 Element.
 */
export
function _encode_PayloadInformationRemoved (value: PayloadInformationRemoved, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PayloadInformationRemoved) { _cached_encoder_for_PayloadInformationRemoved = $._encode_choice<PayloadInformationRemoved>({
    "charactersRemoved": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "octetsRemoved": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "bitsRemoved": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_PayloadInformationRemoved(value, elGetter);
}


/* eslint-enable */
