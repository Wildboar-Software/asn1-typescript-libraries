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
 * @summary SpkmCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpkmCredentials  ::=  CHOICE {
 *   req            [0]  SPKM-REQ,
 *   rep            [1]  SPKM-REP-TI,
 *   ... }
 * ```
 */
export
type SpkmCredentials =
    { req: SPKM_REQ } /* CHOICE_ALT_ROOT */
    | { rep: SPKM_REP_TI } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SpkmCredentials: $.ASN1Decoder<SpkmCredentials> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpkmCredentials
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpkmCredentials (el: _Element): SpkmCredentials {
    if (!_cached_decoder_for_SpkmCredentials) { _cached_decoder_for_SpkmCredentials = $._decode_extensible_choice<SpkmCredentials>({
    "CONTEXT 0": [ "req", $._decode_implicit<SPKM_REQ>(() => _decode_SPKM_REQ) ],
    "CONTEXT 1": [ "rep", $._decode_implicit<SPKM_REP_TI>(() => _decode_SPKM_REP_TI) ]
}); }
    return _cached_decoder_for_SpkmCredentials(el);
}

let _cached_encoder_for_SpkmCredentials: $.ASN1Encoder<SpkmCredentials> | null = null;

/**
 * @summary Encodes a(n) SpkmCredentials into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpkmCredentials, encoded as an ASN.1 Element.
 */
export
function _encode_SpkmCredentials (value: SpkmCredentials, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpkmCredentials) { _cached_encoder_for_SpkmCredentials = $._encode_choice<SpkmCredentials>({
    "req": $._encode_implicit(_TagClass.context, 0, () => _encode_SPKM_REQ, $.BER),
    "rep": $._encode_implicit(_TagClass.context, 1, () => _encode_SPKM_REP_TI, $.BER),
}, $.BER); }
    return _cached_encoder_for_SpkmCredentials(value, elGetter);
}


/* eslint-enable */
