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
import { Certificate, _decode_Certificate, _encode_Certificate } from "../AuthenticationFramework/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../AuthenticationFramework/Certificate.ta.mjs";


/**
 * @summary CrossCertificates
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CrossCertificates  ::=  SET SIZE (1..MAX) OF Certificate
 * ```
 */
export
type CrossCertificates = Certificate[]; // SetOfType

let _cached_decoder_for_CrossCertificates: $.ASN1Decoder<CrossCertificates> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CrossCertificates
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CrossCertificates (el: _Element): CrossCertificates {
    if (!_cached_decoder_for_CrossCertificates) { _cached_decoder_for_CrossCertificates = $._decodeSetOf<Certificate>(() => _decode_Certificate); }
    return _cached_decoder_for_CrossCertificates(el);
}

let _cached_encoder_for_CrossCertificates: $.ASN1Encoder<CrossCertificates> | null = null;

/**
 * @summary Encodes a(n) CrossCertificates into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrossCertificates, encoded as an ASN.1 Element.
 */
export
function _encode_CrossCertificates (value: CrossCertificates, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CrossCertificates) { _cached_encoder_for_CrossCertificates = $._encodeSetOf<Certificate>(() => _encode_Certificate, $.BER); }
    return _cached_encoder_for_CrossCertificates(value, elGetter);
}


/* eslint-enable */
