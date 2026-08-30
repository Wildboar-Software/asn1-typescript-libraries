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
 * @summary PLMN_Id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PLMN-Id  ::=  OCTET STRING (SIZE (3))
 * ```
 */
export
type PLMN_Id = OCTET_STRING; // OctetStringType

let _cached_decoder_for_PLMN_Id: $.ASN1Decoder<PLMN_Id> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PLMN_Id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PLMN_Id (el: _Element): PLMN_Id {
    if (!_cached_decoder_for_PLMN_Id) { _cached_decoder_for_PLMN_Id = $._decodeOctetString; }
    return _cached_decoder_for_PLMN_Id(el);
}

let _cached_encoder_for_PLMN_Id: $.ASN1Encoder<PLMN_Id> | null = null;

/**
 * @summary Encodes a(n) PLMN_Id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PLMN_Id, encoded as an ASN.1 Element.
 */
export
function _encode_PLMN_Id (value: PLMN_Id, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PLMN_Id) { _cached_encoder_for_PLMN_Id = $._encodeOctetString; }
    return _cached_encoder_for_PLMN_Id(value, elGetter);
}


/* eslint-enable */
