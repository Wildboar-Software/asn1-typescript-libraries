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
 * @summary AUDT_apdu_protocol_version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AUDT-apdu-protocol-version ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type AUDT_apdu_protocol_version = BIT_STRING;

/**
 * @summary AUDT_apdu_protocol_version_version1
 * @constant
 */
export
const AUDT_apdu_protocol_version_version1: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary version1
 * @constant
 */
export
const version1: number = AUDT_apdu_protocol_version_version1; /* SHORT_NAMED_BIT */

let _cached_decoder_for_AUDT_apdu_protocol_version: $.ASN1Decoder<AUDT_apdu_protocol_version> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AUDT_apdu_protocol_version
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AUDT_apdu_protocol_version (el: _Element): AUDT_apdu_protocol_version {
    if (!_cached_decoder_for_AUDT_apdu_protocol_version) { _cached_decoder_for_AUDT_apdu_protocol_version = $._decodeBitString; }
    return _cached_decoder_for_AUDT_apdu_protocol_version(el);
}

let _cached_encoder_for_AUDT_apdu_protocol_version: $.ASN1Encoder<AUDT_apdu_protocol_version> | null = null;

/**
 * @summary Encodes a(n) AUDT_apdu_protocol_version into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AUDT_apdu_protocol_version, encoded as an ASN.1 Element.
 */
export
function _encode_AUDT_apdu_protocol_version (value: AUDT_apdu_protocol_version, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AUDT_apdu_protocol_version) { _cached_encoder_for_AUDT_apdu_protocol_version = $._encodeBitString; }
    return _cached_encoder_for_AUDT_apdu_protocol_version(value, elGetter);
}


/* eslint-enable */
