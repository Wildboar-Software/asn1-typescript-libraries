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
import { SIPURI, _decode_SIPURI, _encode_SIPURI } from "../TS33128Payloads/SIPURI.ta.mjs";
// export { SIPURI, _decode_SIPURI, _encode_SIPURI } from "../TS33128Payloads/SIPURI.ta.mjs";
import { TELURI, _decode_TELURI, _encode_TELURI } from "../TS33128Payloads/TELURI.ta.mjs";
// export { TELURI, _decode_TELURI, _encode_TELURI } from "../TS33128Payloads/TELURI.ta.mjs";


/**
 * @summary IMPU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMPU  ::=  CHOICE
 * {
 *     sIPURI [1] SIPURI,
 *     tELURI [2] TELURI
 * }
 * ```
 */
export
type IMPU =
    { sIPURI: SIPURI } /* CHOICE_ALT_ROOT */
    | { tELURI: TELURI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IMPU: $.ASN1Decoder<IMPU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMPU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMPU (el: _Element): IMPU {
    if (!_cached_decoder_for_IMPU) { _cached_decoder_for_IMPU = $._decode_inextensible_choice<IMPU>({
    "CONTEXT 1": [ "sIPURI", $._decode_implicit<SIPURI>(() => _decode_SIPURI) ],
    "CONTEXT 2": [ "tELURI", $._decode_implicit<TELURI>(() => _decode_TELURI) ]
}); }
    return _cached_decoder_for_IMPU(el);
}

let _cached_encoder_for_IMPU: $.ASN1Encoder<IMPU> | null = null;

/**
 * @summary Encodes a(n) IMPU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMPU, encoded as an ASN.1 Element.
 */
export
function _encode_IMPU (value: IMPU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMPU) { _cached_encoder_for_IMPU = $._encode_choice<IMPU>({
    "sIPURI": $._encode_implicit(_TagClass.context, 1, () => _encode_SIPURI, $.BER),
    "tELURI": $._encode_implicit(_TagClass.context, 2, () => _encode_TELURI, $.BER),
}, $.BER); }
    return _cached_encoder_for_IMPU(value, elGetter);
}


/* eslint-enable */
