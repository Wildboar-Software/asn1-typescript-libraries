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



/**
 * @summary Local_GroupID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Local-GroupID  ::=  OCTET STRING (SIZE (1..10))
 * ```
 */
export
type Local_GroupID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Local_GroupID: $.ASN1Decoder<Local_GroupID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Local_GroupID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Local_GroupID (el: _Element): Local_GroupID {
    if (!_cached_decoder_for_Local_GroupID) { _cached_decoder_for_Local_GroupID = $._decodeOctetString; }
    return _cached_decoder_for_Local_GroupID(el);
}

let _cached_encoder_for_Local_GroupID: $.ASN1Encoder<Local_GroupID> | null = null;

/**
 * @summary Encodes a(n) Local_GroupID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Local_GroupID, encoded as an ASN.1 Element.
 */
export
function _encode_Local_GroupID (value: Local_GroupID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Local_GroupID) { _cached_encoder_for_Local_GroupID = $._encodeOctetString; }
    return _cached_encoder_for_Local_GroupID(value, elGetter);
}


/* eslint-enable */
