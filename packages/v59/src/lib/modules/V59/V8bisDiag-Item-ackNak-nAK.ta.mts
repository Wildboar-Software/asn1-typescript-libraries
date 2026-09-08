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



/**
 * @summary V8bisDiag_Item_ackNak_nAK
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item-ackNak-nAK ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type V8bisDiag_Item_ackNak_nAK =
    { none: INTEGER } /* CHOICE_ALT_ROOT */
    | { nAK1: INTEGER } /* CHOICE_ALT_ROOT */
    | { nAK2: INTEGER } /* CHOICE_ALT_ROOT */
    | { nAK3: INTEGER } /* CHOICE_ALT_ROOT */
    | { nAK4: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_V8bisDiag_Item_ackNak_nAK: $.ASN1Decoder<V8bisDiag_Item_ackNak_nAK> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item_ackNak_nAK
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item_ackNak_nAK (el: _Element): V8bisDiag_Item_ackNak_nAK {
    if (!_cached_decoder_for_V8bisDiag_Item_ackNak_nAK) { _cached_decoder_for_V8bisDiag_Item_ackNak_nAK = $._decode_inextensible_choice<V8bisDiag_Item_ackNak_nAK>({
    "CONTEXT 0": [ "none", $._decodeInteger ],
    "CONTEXT 1": [ "nAK1", $._decodeInteger ],
    "CONTEXT 2": [ "nAK2", $._decodeInteger ],
    "CONTEXT 3": [ "nAK3", $._decodeInteger ],
    "CONTEXT 4": [ "nAK4", $._decodeInteger ]
}); }
    return _cached_decoder_for_V8bisDiag_Item_ackNak_nAK(el);
}

let _cached_encoder_for_V8bisDiag_Item_ackNak_nAK: $.ASN1Encoder<V8bisDiag_Item_ackNak_nAK> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item_ackNak_nAK into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item_ackNak_nAK, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item_ackNak_nAK (value: V8bisDiag_Item_ackNak_nAK, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item_ackNak_nAK) { _cached_encoder_for_V8bisDiag_Item_ackNak_nAK = $._encode_choice<V8bisDiag_Item_ackNak_nAK>({
    "none": $._encodeInteger,
    "nAK1": $._encodeInteger,
    "nAK2": $._encodeInteger,
    "nAK3": $._encodeInteger,
    "nAK4": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_V8bisDiag_Item_ackNak_nAK(value, elGetter);
}


/* eslint-enable */
