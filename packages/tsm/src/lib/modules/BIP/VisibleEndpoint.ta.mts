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
import { BioAPI_FRAMEWORK_SCHEMA, _decode_BioAPI_FRAMEWORK_SCHEMA, _encode_BioAPI_FRAMEWORK_SCHEMA } from "../BIP/BioAPI-FRAMEWORK-SCHEMA.ta.mjs";
// export { BioAPI_FRAMEWORK_SCHEMA, _decode_BioAPI_FRAMEWORK_SCHEMA, _encode_BioAPI_FRAMEWORK_SCHEMA } from "../BIP/BioAPI-FRAMEWORK-SCHEMA.ta.mjs";


/**
 * @summary VisibleEndpoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VisibleEndpoint  ::=  BioAPI-FRAMEWORK-SCHEMA
 * ```
 */
export
type VisibleEndpoint = BioAPI_FRAMEWORK_SCHEMA; // DefinedType

let _cached_decoder_for_VisibleEndpoint: $.ASN1Decoder<VisibleEndpoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VisibleEndpoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VisibleEndpoint (el: _Element): VisibleEndpoint {
    if (!_cached_decoder_for_VisibleEndpoint) { _cached_decoder_for_VisibleEndpoint = _decode_BioAPI_FRAMEWORK_SCHEMA; }
    return _cached_decoder_for_VisibleEndpoint(el);
}

let _cached_encoder_for_VisibleEndpoint: $.ASN1Encoder<VisibleEndpoint> | null = null;

/**
 * @summary Encodes a(n) VisibleEndpoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VisibleEndpoint, encoded as an ASN.1 Element.
 */
export
function _encode_VisibleEndpoint (value: VisibleEndpoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VisibleEndpoint) { _cached_encoder_for_VisibleEndpoint = _encode_BioAPI_FRAMEWORK_SCHEMA; }
    return _cached_encoder_for_VisibleEndpoint(value, elGetter);
}


/* eslint-enable */
