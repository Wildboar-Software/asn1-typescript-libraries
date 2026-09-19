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
import { CRLNumber, _decode_CRLNumber, _encode_CRLNumber } from "../CertificateExtensions/CRLNumber.ta.mjs";
// export { CRLNumber, _decode_CRLNumber, _encode_CRLNumber } from "../CertificateExtensions/CRLNumber.ta.mjs";


/**
 * @summary BaseCRLNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BaseCRLNumber  ::=  CRLNumber
 * ```
 */
export
type BaseCRLNumber = CRLNumber; // DefinedType

let _cached_decoder_for_BaseCRLNumber: $.ASN1Decoder<BaseCRLNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BaseCRLNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BaseCRLNumber (el: _Element): BaseCRLNumber {
    if (!_cached_decoder_for_BaseCRLNumber) { _cached_decoder_for_BaseCRLNumber = _decode_CRLNumber; }
    return _cached_decoder_for_BaseCRLNumber(el);
}

let _cached_encoder_for_BaseCRLNumber: $.ASN1Encoder<BaseCRLNumber> | null = null;

/**
 * @summary Encodes a(n) BaseCRLNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BaseCRLNumber, encoded as an ASN.1 Element.
 */
export
function _encode_BaseCRLNumber (value: BaseCRLNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BaseCRLNumber) { _cached_encoder_for_BaseCRLNumber = _encode_CRLNumber; }
    return _cached_encoder_for_BaseCRLNumber(value, elGetter);
}


/* eslint-enable */
