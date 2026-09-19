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



/**
 * @summary SMSOtherMessageIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOtherMessageIndication  ::=  BOOLEAN
 * ```
 */
export
type SMSOtherMessageIndication = BOOLEAN; // BooleanType

let _cached_decoder_for_SMSOtherMessageIndication: $.ASN1Decoder<SMSOtherMessageIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSOtherMessageIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSOtherMessageIndication (el: _Element): SMSOtherMessageIndication {
    if (!_cached_decoder_for_SMSOtherMessageIndication) { _cached_decoder_for_SMSOtherMessageIndication = $._decodeBoolean; }
    return _cached_decoder_for_SMSOtherMessageIndication(el);
}

let _cached_encoder_for_SMSOtherMessageIndication: $.ASN1Encoder<SMSOtherMessageIndication> | null = null;

/**
 * @summary Encodes a(n) SMSOtherMessageIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSOtherMessageIndication, encoded as an ASN.1 Element.
 */
export
function _encode_SMSOtherMessageIndication (value: SMSOtherMessageIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSOtherMessageIndication) { _cached_encoder_for_SMSOtherMessageIndication = $._encodeBoolean; }
    return _cached_encoder_for_SMSOtherMessageIndication(value, elGetter);
}


/* eslint-enable */
