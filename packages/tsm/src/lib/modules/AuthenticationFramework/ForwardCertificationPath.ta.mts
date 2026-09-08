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
import { CrossCertificates, _decode_CrossCertificates, _encode_CrossCertificates } from "../AuthenticationFramework/CrossCertificates.ta.mjs";
// export { CrossCertificates, _decode_CrossCertificates, _encode_CrossCertificates } from "../AuthenticationFramework/CrossCertificates.ta.mjs";


/**
 * @summary ForwardCertificationPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardCertificationPath  ::=  SEQUENCE SIZE (1..MAX) OF CrossCertificates
 * ```
 */
export
type ForwardCertificationPath = CrossCertificates[]; // SequenceOfType

let _cached_decoder_for_ForwardCertificationPath: $.ASN1Decoder<ForwardCertificationPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardCertificationPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardCertificationPath (el: _Element): ForwardCertificationPath {
    if (!_cached_decoder_for_ForwardCertificationPath) { _cached_decoder_for_ForwardCertificationPath = $._decodeSequenceOf<CrossCertificates>(() => _decode_CrossCertificates); }
    return _cached_decoder_for_ForwardCertificationPath(el);
}

let _cached_encoder_for_ForwardCertificationPath: $.ASN1Encoder<ForwardCertificationPath> | null = null;

/**
 * @summary Encodes a(n) ForwardCertificationPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardCertificationPath, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardCertificationPath (value: ForwardCertificationPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardCertificationPath) { _cached_encoder_for_ForwardCertificationPath = $._encodeSequenceOf<CrossCertificates>(() => _encode_CrossCertificates, $.BER); }
    return _cached_encoder_for_ForwardCertificationPath(value, elGetter);
}


/* eslint-enable */
