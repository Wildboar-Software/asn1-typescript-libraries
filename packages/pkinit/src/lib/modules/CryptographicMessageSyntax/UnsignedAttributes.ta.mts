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
import { Attribute, _decode_Attribute, _encode_Attribute } from "../CryptographicMessageSyntax/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../CryptographicMessageSyntax/Attribute.ta.mjs";


/**
 * @summary UnsignedAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnsignedAttributes  ::=  SET SIZE (1..MAX) OF Attribute
 * ```
 */
export
type UnsignedAttributes = Attribute[]; // SetOfType

let _cached_decoder_for_UnsignedAttributes: $.ASN1Decoder<UnsignedAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UnsignedAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UnsignedAttributes (el: _Element): UnsignedAttributes {
    if (!_cached_decoder_for_UnsignedAttributes) { _cached_decoder_for_UnsignedAttributes = $._decodeSetOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_UnsignedAttributes(el);
}

let _cached_encoder_for_UnsignedAttributes: $.ASN1Encoder<UnsignedAttributes> | null = null;

/**
 * @summary Encodes a(n) UnsignedAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnsignedAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_UnsignedAttributes (value: UnsignedAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UnsignedAttributes) { _cached_encoder_for_UnsignedAttributes = $._encodeSetOf<Attribute>(() => _encode_Attribute, $.BER); }
    return _cached_encoder_for_UnsignedAttributes(value, elGetter);
}


/* eslint-enable */
