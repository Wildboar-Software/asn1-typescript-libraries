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
import { GeneralSubtree, _decode_GeneralSubtree, _encode_GeneralSubtree } from "../CertificateExtensions/GeneralSubtree.ta.mjs";
// export { GeneralSubtree, _decode_GeneralSubtree, _encode_GeneralSubtree } from "../CertificateExtensions/GeneralSubtree.ta.mjs";


/**
 * @summary GeneralSubtrees
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeneralSubtrees  ::=  SEQUENCE SIZE (1..MAX) OF GeneralSubtree
 * ```
 */
export
type GeneralSubtrees = GeneralSubtree[]; // SequenceOfType

let _cached_decoder_for_GeneralSubtrees: $.ASN1Decoder<GeneralSubtrees> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeneralSubtrees
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GeneralSubtrees (el: _Element): GeneralSubtrees {
    if (!_cached_decoder_for_GeneralSubtrees) { _cached_decoder_for_GeneralSubtrees = $._decodeSequenceOf<GeneralSubtree>(() => _decode_GeneralSubtree); }
    return _cached_decoder_for_GeneralSubtrees(el);
}

let _cached_encoder_for_GeneralSubtrees: $.ASN1Encoder<GeneralSubtrees> | null = null;

/**
 * @summary Encodes a(n) GeneralSubtrees into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralSubtrees, encoded as an ASN.1 Element.
 */
export
function _encode_GeneralSubtrees (value: GeneralSubtrees, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GeneralSubtrees) { _cached_encoder_for_GeneralSubtrees = $._encodeSequenceOf<GeneralSubtree>(() => _encode_GeneralSubtree, $.BER); }
    return _cached_encoder_for_GeneralSubtrees(value, elGetter);
}


/* eslint-enable */
