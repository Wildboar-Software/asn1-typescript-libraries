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
import { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";
// export { EPSLocation, _decode_EPSLocation, _encode_EPSLocation } from "../EpsHI2Operations/EPSLocation.ta.mjs";


/**
 * @summary HeNBLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HeNBLocation  ::=  EPSLocation
 * ```
 */
export
type HeNBLocation = EPSLocation; // DefinedType

let _cached_decoder_for_HeNBLocation: $.ASN1Decoder<HeNBLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HeNBLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HeNBLocation (el: _Element): HeNBLocation {
    if (!_cached_decoder_for_HeNBLocation) { _cached_decoder_for_HeNBLocation = _decode_EPSLocation; }
    return _cached_decoder_for_HeNBLocation(el);
}

let _cached_encoder_for_HeNBLocation: $.ASN1Encoder<HeNBLocation> | null = null;

/**
 * @summary Encodes a(n) HeNBLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HeNBLocation, encoded as an ASN.1 Element.
 */
export
function _encode_HeNBLocation (value: HeNBLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HeNBLocation) { _cached_encoder_for_HeNBLocation = _encode_EPSLocation; }
    return _cached_encoder_for_HeNBLocation(value, elGetter);
}


/* eslint-enable */
