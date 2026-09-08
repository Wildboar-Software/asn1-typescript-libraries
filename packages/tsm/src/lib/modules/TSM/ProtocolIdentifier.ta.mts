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
import { UINT8, _decode_UINT8, _encode_UINT8 } from "../TSM/UINT8.ta.mjs";
// export { UINT8, _decode_UINT8, _encode_UINT8 } from "../TSM/UINT8.ta.mjs";


/**
 * @summary ProtocolIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolIdentifier     ::=     UINT8
 * ```
 */
export
type ProtocolIdentifier = UINT8; // DefinedType

let _cached_decoder_for_ProtocolIdentifier: $.ASN1Decoder<ProtocolIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProtocolIdentifier (el: _Element): ProtocolIdentifier {
    if (!_cached_decoder_for_ProtocolIdentifier) { _cached_decoder_for_ProtocolIdentifier = _decode_UINT8; }
    return _cached_decoder_for_ProtocolIdentifier(el);
}

let _cached_encoder_for_ProtocolIdentifier: $.ASN1Encoder<ProtocolIdentifier> | null = null;

/**
 * @summary Encodes a(n) ProtocolIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ProtocolIdentifier (value: ProtocolIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProtocolIdentifier) { _cached_encoder_for_ProtocolIdentifier = _encode_UINT8; }
    return _cached_encoder_for_ProtocolIdentifier(value, elGetter);
}


/* eslint-enable */
