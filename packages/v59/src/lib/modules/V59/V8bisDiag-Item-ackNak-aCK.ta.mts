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
 * @summary V8bisDiag_Item_ackNak_aCK
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item-ackNak-aCK ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type V8bisDiag_Item_ackNak_aCK =
    { nONE: INTEGER } /* CHOICE_ALT_ROOT */
    | { aCK1: INTEGER } /* CHOICE_ALT_ROOT */
    | { aCK2: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_V8bisDiag_Item_ackNak_aCK: $.ASN1Decoder<V8bisDiag_Item_ackNak_aCK> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item_ackNak_aCK
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item_ackNak_aCK (el: _Element): V8bisDiag_Item_ackNak_aCK {
    if (!_cached_decoder_for_V8bisDiag_Item_ackNak_aCK) { _cached_decoder_for_V8bisDiag_Item_ackNak_aCK = $._decode_inextensible_choice<V8bisDiag_Item_ackNak_aCK>({
    "CONTEXT 0": [ "nONE", $._decodeInteger ],
    "CONTEXT 1": [ "aCK1", $._decodeInteger ],
    "CONTEXT 2": [ "aCK2", $._decodeInteger ]
}); }
    return _cached_decoder_for_V8bisDiag_Item_ackNak_aCK(el);
}

let _cached_encoder_for_V8bisDiag_Item_ackNak_aCK: $.ASN1Encoder<V8bisDiag_Item_ackNak_aCK> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item_ackNak_aCK into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item_ackNak_aCK, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item_ackNak_aCK (value: V8bisDiag_Item_ackNak_aCK, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item_ackNak_aCK) { _cached_encoder_for_V8bisDiag_Item_ackNak_aCK = $._encode_choice<V8bisDiag_Item_ackNak_aCK>({
    "nONE": $._encodeInteger,
    "aCK1": $._encodeInteger,
    "aCK2": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_V8bisDiag_Item_ackNak_aCK(value, elGetter);
}


/* eslint-enable */
