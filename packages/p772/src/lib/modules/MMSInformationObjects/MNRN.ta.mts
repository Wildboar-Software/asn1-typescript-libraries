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
import { MN, _decode_MN, _encode_MN } from "../MMSInformationObjects/MN.ta.mjs";
// export { MN, _decode_MN, _encode_MN } from "../MMSInformationObjects/MN.ta.mjs";


/**
 * @summary MNRN
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MNRN  ::=  MN
 * ```
 */
export
type MNRN = MN; // DefinedType

let _cached_decoder_for_MNRN: $.ASN1Decoder<MNRN> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MNRN
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MNRN (el: _Element): MNRN {
    if (!_cached_decoder_for_MNRN) { _cached_decoder_for_MNRN = _decode_MN; }
    return _cached_decoder_for_MNRN(el);
}

let _cached_encoder_for_MNRN: $.ASN1Encoder<MNRN> | null = null;

/**
 * @summary Encodes a(n) MNRN into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MNRN, encoded as an ASN.1 Element.
 */
export
function _encode_MNRN (value: MNRN, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MNRN) { _cached_encoder_for_MNRN = _encode_MN; }
    return _cached_encoder_for_MNRN(value, elGetter);
}


/* eslint-enable */
