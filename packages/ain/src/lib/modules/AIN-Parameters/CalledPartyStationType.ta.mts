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
 * @summary CalledPartyStationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledPartyStationType  ::=  [16] IMPLICIT INTEGER(0..99)
 * ```
 */
export
type CalledPartyStationType = INTEGER;

let _cached_decoder_for_CalledPartyStationType: $.ASN1Decoder<CalledPartyStationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CalledPartyStationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CalledPartyStationType (el: _Element): CalledPartyStationType {
    if (!_cached_decoder_for_CalledPartyStationType) { _cached_decoder_for_CalledPartyStationType = $._decode_implicit<CalledPartyStationType>(() => $._decodeInteger); }
    return _cached_decoder_for_CalledPartyStationType(el);
}

let _cached_encoder_for_CalledPartyStationType: $.ASN1Encoder<CalledPartyStationType> | null = null;

/**
 * @summary Encodes a(n) CalledPartyStationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CalledPartyStationType, encoded as an ASN.1 Element.
 */
export
function _encode_CalledPartyStationType (value: CalledPartyStationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CalledPartyStationType) { _cached_encoder_for_CalledPartyStationType = $._encode_implicit(_TagClass.context, 16, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_CalledPartyStationType(value, elGetter);
}


/* eslint-enable */
