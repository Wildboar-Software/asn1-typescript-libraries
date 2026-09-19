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
 * @summary FacilityMemberID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FacilityMemberID  ::=  [31] IMPLICIT INTEGER(1..2047)
 * ```
 */
export
type FacilityMemberID = INTEGER;

let _cached_decoder_for_FacilityMemberID: $.ASN1Decoder<FacilityMemberID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FacilityMemberID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FacilityMemberID (el: _Element): FacilityMemberID {
    if (!_cached_decoder_for_FacilityMemberID) { _cached_decoder_for_FacilityMemberID = $._decode_implicit<FacilityMemberID>(() => $._decodeInteger); }
    return _cached_decoder_for_FacilityMemberID(el);
}

let _cached_encoder_for_FacilityMemberID: $.ASN1Encoder<FacilityMemberID> | null = null;

/**
 * @summary Encodes a(n) FacilityMemberID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FacilityMemberID, encoded as an ASN.1 Element.
 */
export
function _encode_FacilityMemberID (value: FacilityMemberID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FacilityMemberID) { _cached_encoder_for_FacilityMemberID = $._encode_implicit(_TagClass.context, 31, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_FacilityMemberID(value, elGetter);
}


/* eslint-enable */
