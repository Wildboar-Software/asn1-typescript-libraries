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
import { ObjectValue, _get_decoder_for_ObjectValue, _get_encoder_for_ObjectValue } from "../CryptographicInformationFramework/ObjectValue.ta.mjs";
// export { ObjectValue, _get_decoder_for_ObjectValue, _get_encoder_for_ObjectValue } from "../CryptographicInformationFramework/ObjectValue.ta.mjs";
import { CIO_OPAQUE } from "../CryptographicInformationFramework/CIO-OPAQUE.oca.mjs";
// export { CIO_OPAQUE } from "../CryptographicInformationFramework/CIO-OPAQUE.oca.mjs";


/**
 * @summary ISO7816DOAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISO7816DOAttributes  ::=  ObjectValue {CIO-OPAQUE.&Type}
 *     (CONSTRAINED BY {-- All such data container objects shall be defined in accordance with ISO/IEC 7816-4 --})
 * ```
 */
export
type ISO7816DOAttributes = ObjectValue<_Element>; // DefinedType

let _cached_decoder_for_ISO7816DOAttributes: $.ASN1Decoder<ISO7816DOAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISO7816DOAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISO7816DOAttributes (el: _Element): ISO7816DOAttributes {
    if (!_cached_decoder_for_ISO7816DOAttributes) { _cached_decoder_for_ISO7816DOAttributes = _get_decoder_for_ObjectValue<_Element>($._decodeAny); }
    return _cached_decoder_for_ISO7816DOAttributes(el);
}

let _cached_encoder_for_ISO7816DOAttributes: $.ASN1Encoder<ISO7816DOAttributes> | null = null;

/**
 * @summary Encodes a(n) ISO7816DOAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISO7816DOAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_ISO7816DOAttributes (value: ISO7816DOAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISO7816DOAttributes) { _cached_encoder_for_ISO7816DOAttributes = _get_encoder_for_ObjectValue<_Element>($._encodeAny); }
    return _cached_encoder_for_ISO7816DOAttributes(value, elGetter);
}


/* eslint-enable */
