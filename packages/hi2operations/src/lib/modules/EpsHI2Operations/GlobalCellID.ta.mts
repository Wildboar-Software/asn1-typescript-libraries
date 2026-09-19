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
 * @summary GlobalCellID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GlobalCellID  ::=  OCTET STRING (SIZE (5..7))
 * ```
 */
export
type GlobalCellID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_GlobalCellID: $.ASN1Decoder<GlobalCellID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GlobalCellID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GlobalCellID (el: _Element): GlobalCellID {
    if (!_cached_decoder_for_GlobalCellID) { _cached_decoder_for_GlobalCellID = $._decodeOctetString; }
    return _cached_decoder_for_GlobalCellID(el);
}

let _cached_encoder_for_GlobalCellID: $.ASN1Encoder<GlobalCellID> | null = null;

/**
 * @summary Encodes a(n) GlobalCellID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GlobalCellID, encoded as an ASN.1 Element.
 */
export
function _encode_GlobalCellID (value: GlobalCellID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GlobalCellID) { _cached_encoder_for_GlobalCellID = $._encodeOctetString; }
    return _cached_encoder_for_GlobalCellID(value, elGetter);
}


/* eslint-enable */
