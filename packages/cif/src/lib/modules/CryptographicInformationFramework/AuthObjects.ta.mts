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
import { PathOrObjects, _get_decoder_for_PathOrObjects, _get_encoder_for_PathOrObjects } from "../CryptographicInformationFramework/PathOrObjects.ta.mjs";
// export { PathOrObjects, _get_decoder_for_PathOrObjects, _get_encoder_for_PathOrObjects } from "../CryptographicInformationFramework/PathOrObjects.ta.mjs";
import { AuthenticationObjectChoice, _decode_AuthenticationObjectChoice, _encode_AuthenticationObjectChoice } from "../CryptographicInformationFramework/AuthenticationObjectChoice.ta.mjs";
// export { AuthenticationObjectChoice, _decode_AuthenticationObjectChoice, _encode_AuthenticationObjectChoice } from "../CryptographicInformationFramework/AuthenticationObjectChoice.ta.mjs";


/**
 * @summary AuthObjects
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthObjects  ::=  PathOrObjects {AuthenticationObjectChoice}
 * ```
 */
export
type AuthObjects = PathOrObjects<AuthenticationObjectChoice>; // DefinedType

let _cached_decoder_for_AuthObjects: $.ASN1Decoder<AuthObjects> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthObjects
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthObjects (el: _Element): AuthObjects {
    if (!_cached_decoder_for_AuthObjects) { _cached_decoder_for_AuthObjects = _get_decoder_for_PathOrObjects<AuthenticationObjectChoice>(_decode_AuthenticationObjectChoice); }
    return _cached_decoder_for_AuthObjects(el);
}

let _cached_encoder_for_AuthObjects: $.ASN1Encoder<AuthObjects> | null = null;

/**
 * @summary Encodes a(n) AuthObjects into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthObjects, encoded as an ASN.1 Element.
 */
export
function _encode_AuthObjects (value: AuthObjects, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthObjects) { _cached_encoder_for_AuthObjects = _get_encoder_for_PathOrObjects<AuthenticationObjectChoice>(_encode_AuthenticationObjectChoice); }
    return _cached_encoder_for_AuthObjects(value, elGetter);
}


/* eslint-enable */
