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
import { EncryptedData, _decode_EncryptedData, _encode_EncryptedData } from "../KerberosV5Spec2/EncryptedData.ta.mjs";
// export { EncryptedData, _decode_EncryptedData, _encode_EncryptedData } from "../KerberosV5Spec2/EncryptedData.ta.mjs";


/**
 * @summary PA_ENC_TIMESTAMP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PA-ENC-TIMESTAMP         ::=  EncryptedData
 * ```
 */
export
type PA_ENC_TIMESTAMP = EncryptedData; // DefinedType

let _cached_decoder_for_PA_ENC_TIMESTAMP: $.ASN1Decoder<PA_ENC_TIMESTAMP> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PA_ENC_TIMESTAMP
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PA_ENC_TIMESTAMP (el: _Element): PA_ENC_TIMESTAMP {
    if (!_cached_decoder_for_PA_ENC_TIMESTAMP) { _cached_decoder_for_PA_ENC_TIMESTAMP = _decode_EncryptedData; }
    return _cached_decoder_for_PA_ENC_TIMESTAMP(el);
}

let _cached_encoder_for_PA_ENC_TIMESTAMP: $.ASN1Encoder<PA_ENC_TIMESTAMP> | null = null;

/**
 * @summary Encodes a(n) PA_ENC_TIMESTAMP into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PA_ENC_TIMESTAMP, encoded as an ASN.1 Element.
 */
export
function _encode_PA_ENC_TIMESTAMP (value: PA_ENC_TIMESTAMP, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PA_ENC_TIMESTAMP) { _cached_encoder_for_PA_ENC_TIMESTAMP = _encode_EncryptedData; }
    return _cached_encoder_for_PA_ENC_TIMESTAMP(value, elGetter);
}


/* eslint-enable */
