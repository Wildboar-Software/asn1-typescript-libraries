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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { IMSI_WithLMSI, _decode_IMSI_WithLMSI, _encode_IMSI_WithLMSI } from "../MAP-CommonDataTypes/IMSI-WithLMSI.ta.mjs";


/**
 * @summary Identity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Identity  ::=  CHOICE {
 *     imsi    IMSI,
 *     imsi-WithLMSI    IMSI-WithLMSI}
 * ```
 */
export
type Identity =
    { imsi: IMSI } /* CHOICE_ALT_ROOT */
    | { imsi_WithLMSI: IMSI_WithLMSI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Identity: $.ASN1Decoder<Identity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Identity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Identity (el: _Element): Identity {
    if (!_cached_decoder_for_Identity) { _cached_decoder_for_Identity = $._decode_inextensible_choice<Identity>({
    "UNIVERSAL 4": [ "imsi", _decode_IMSI ],
    "UNIVERSAL 16": [ "imsi_WithLMSI", _decode_IMSI_WithLMSI ]
}); }
    return _cached_decoder_for_Identity(el);
}

let _cached_encoder_for_Identity: $.ASN1Encoder<Identity> | null = null;

/**
 * @summary Encodes a(n) Identity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Identity, encoded as an ASN.1 Element.
 */
export
function _encode_Identity (value: Identity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Identity) { _cached_encoder_for_Identity = $._encode_choice<Identity>({
    "imsi": _encode_IMSI,
    "imsi_WithLMSI": _encode_IMSI_WithLMSI,
}, $.BER); }
    return _cached_encoder_for_Identity(value, elGetter);
}


/* eslint-enable */
