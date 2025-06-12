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
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Certificate.ta.js";


/* START_OF_SYMBOL_DEFINITION CertData */
/**
 * @summary CertData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertData  ::=  CHOICE {
 *     certificateSet     SET SIZE (1..MAX) OF Certificate,
 *     certURL            IA5String,
 *     ... -- For future extensions
 * }
 * ```
 */
export
type CertData =
    { certificateSet: Certificate[] } /* CHOICE_ALT_ROOT */
    | { certURL: IA5String } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION CertData */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CertData */
let _cached_decoder_for_CertData: $.ASN1Decoder<CertData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CertData */

/* START_OF_SYMBOL_DEFINITION _decode_CertData */
/**
 * @summary Decodes an ASN.1 element into a(n) CertData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertData} The decoded data structure.
 */
export
function _decode_CertData (el: _Element) {
    if (!_cached_decoder_for_CertData) { _cached_decoder_for_CertData = $._decode_extensible_choice<CertData>({
    "UNIVERSAL 17": [ "certificateSet", $._decodeSetOf<Certificate>(() => _decode_Certificate) ],
    "UNIVERSAL 22": [ "certURL", $._decodeIA5String ]
}); }
    return _cached_decoder_for_CertData(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CertData */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CertData */
let _cached_encoder_for_CertData: $.ASN1Encoder<CertData> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CertData */

/* START_OF_SYMBOL_DEFINITION _encode_CertData */
/**
 * @summary Encodes a(n) CertData into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertData, encoded as an ASN.1 Element.
 */
export
function _encode_CertData (value: CertData, elGetter: $.ASN1Encoder<CertData>) {
    if (!_cached_encoder_for_CertData) { _cached_encoder_for_CertData = $._encode_choice<CertData>({
    "certificateSet": $._encodeSetOf<Certificate>(() => _encode_Certificate, $.BER),
    "certURL": $._encodeIA5String,
}, $.BER); }
    return _cached_encoder_for_CertData(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CertData */

/* eslint-enable */
