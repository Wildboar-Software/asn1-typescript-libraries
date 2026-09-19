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
import { EncKDCRepPart, _decode_EncKDCRepPart, _encode_EncKDCRepPart } from "../KerberosV5Spec2/EncKDCRepPart.ta.mjs";
// export { EncKDCRepPart, _decode_EncKDCRepPart, _encode_EncKDCRepPart } from "../KerberosV5Spec2/EncKDCRepPart.ta.mjs";


/**
 * @summary EncASRepPart
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncASRepPart     ::=  [APPLICATION 25] EncKDCRepPart
 * ```
 */
export
type EncASRepPart = EncKDCRepPart; // DefinedType

let _cached_decoder_for_EncASRepPart: $.ASN1Decoder<EncASRepPart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncASRepPart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncASRepPart (el: _Element): EncASRepPart {
    if (!_cached_decoder_for_EncASRepPart) { _cached_decoder_for_EncASRepPart = $._decode_implicit<EncASRepPart>(() => _decode_EncKDCRepPart); }
    return _cached_decoder_for_EncASRepPart(el);
}

let _cached_encoder_for_EncASRepPart: $.ASN1Encoder<EncASRepPart> | null = null;

/**
 * @summary Encodes a(n) EncASRepPart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncASRepPart, encoded as an ASN.1 Element.
 */
export
function _encode_EncASRepPart (value: EncASRepPart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncASRepPart) { _cached_encoder_for_EncASRepPart = $._encode_implicit(_TagClass.application, 25, () => _encode_EncKDCRepPart, $.BER); }
    return _cached_encoder_for_EncASRepPart(value, elGetter);
}


/* eslint-enable */
