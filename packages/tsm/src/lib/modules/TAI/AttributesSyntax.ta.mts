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
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";


/**
 * @summary AttributesSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributesSyntax  ::=  SEQUENCE SIZE (1..MAX) OF Attribute{{SupportedAttributes}}
 * ```
 */
export
type AttributesSyntax = Attribute[]; // SequenceOfType

let _cached_decoder_for_AttributesSyntax: $.ASN1Decoder<AttributesSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributesSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributesSyntax (el: _Element): AttributesSyntax {
    if (!_cached_decoder_for_AttributesSyntax) { _cached_decoder_for_AttributesSyntax = $._decodeSequenceOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_AttributesSyntax(el);
}

let _cached_encoder_for_AttributesSyntax: $.ASN1Encoder<AttributesSyntax> | null = null;

/**
 * @summary Encodes a(n) AttributesSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributesSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_AttributesSyntax (value: AttributesSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributesSyntax) { _cached_encoder_for_AttributesSyntax = $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_AttributesSyntax(value, elGetter);
}


/* eslint-enable */
