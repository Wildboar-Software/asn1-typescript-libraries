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
import { TCMessage, _decode_TCMessage, _encode_TCMessage } from "../TCAPMessages/TCMessage.ta.mjs";



/**
 * @summary BASIC_gsmSRF_gsmSCF_PDUs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BASIC-gsmSRF-gsmSCF-PDUs  ::=  TCMessage {{GsmSRFgsmSCFInvokable},
 *                     {GsmSRFgsmSCFReturnable}}
 * ```
 */
export
type BASIC_gsmSRF_gsmSCF_PDUs = TCMessage; // DefinedType

let _cached_decoder_for_BASIC_gsmSRF_gsmSCF_PDUs: $.ASN1Decoder<BASIC_gsmSRF_gsmSCF_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BASIC_gsmSRF_gsmSCF_PDUs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BASIC_gsmSRF_gsmSCF_PDUs (el: _Element): BASIC_gsmSRF_gsmSCF_PDUs {
    if (!_cached_decoder_for_BASIC_gsmSRF_gsmSCF_PDUs) { _cached_decoder_for_BASIC_gsmSRF_gsmSCF_PDUs = _decode_TCMessage; }
    return _cached_decoder_for_BASIC_gsmSRF_gsmSCF_PDUs(el);
}

let _cached_encoder_for_BASIC_gsmSRF_gsmSCF_PDUs: $.ASN1Encoder<BASIC_gsmSRF_gsmSCF_PDUs> | null = null;

/**
 * @summary Encodes a(n) BASIC_gsmSRF_gsmSCF_PDUs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BASIC_gsmSRF_gsmSCF_PDUs, encoded as an ASN.1 Element.
 */
export
function _encode_BASIC_gsmSRF_gsmSCF_PDUs (value: BASIC_gsmSRF_gsmSCF_PDUs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BASIC_gsmSRF_gsmSCF_PDUs) { _cached_encoder_for_BASIC_gsmSRF_gsmSCF_PDUs = _encode_TCMessage; }
    return _cached_encoder_for_BASIC_gsmSRF_gsmSCF_PDUs(value, elGetter);
}


/* eslint-enable */
