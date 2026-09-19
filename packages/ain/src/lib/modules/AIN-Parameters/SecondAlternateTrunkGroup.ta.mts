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
 * @summary SecondAlternateTrunkGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecondAlternateTrunkGroup  ::=  [48] IMPLICIT OCTET STRING(SIZE(5))
 * ```
 */
export
type SecondAlternateTrunkGroup = OCTET_STRING; // OctetStringType

let _cached_decoder_for_SecondAlternateTrunkGroup: $.ASN1Decoder<SecondAlternateTrunkGroup> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecondAlternateTrunkGroup
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecondAlternateTrunkGroup (el: _Element): SecondAlternateTrunkGroup {
    if (!_cached_decoder_for_SecondAlternateTrunkGroup) { _cached_decoder_for_SecondAlternateTrunkGroup = $._decode_implicit<SecondAlternateTrunkGroup>(() => $._decodeOctetString); }
    return _cached_decoder_for_SecondAlternateTrunkGroup(el);
}

let _cached_encoder_for_SecondAlternateTrunkGroup: $.ASN1Encoder<SecondAlternateTrunkGroup> | null = null;

/**
 * @summary Encodes a(n) SecondAlternateTrunkGroup into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecondAlternateTrunkGroup, encoded as an ASN.1 Element.
 */
export
function _encode_SecondAlternateTrunkGroup (value: SecondAlternateTrunkGroup, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecondAlternateTrunkGroup) { _cached_encoder_for_SecondAlternateTrunkGroup = $._encode_implicit(_TagClass.context, 48, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_SecondAlternateTrunkGroup(value, elGetter);
}


/* eslint-enable */
