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
 * @summary IOCrossRefID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IOCrossRefID  ::=  CHOICE
 * {    switchProvided         [0] OCTET STRING ,
 *     computerProvided     [1] OCTET STRING }
 * ```
 */
export
type IOCrossRefID =
    { switchProvided: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { computerProvided: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IOCrossRefID: $.ASN1Decoder<IOCrossRefID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IOCrossRefID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IOCrossRefID (el: _Element): IOCrossRefID {
    if (!_cached_decoder_for_IOCrossRefID) { _cached_decoder_for_IOCrossRefID = $._decode_inextensible_choice<IOCrossRefID>({
    "CONTEXT 0": [ "switchProvided", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "computerProvided", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_IOCrossRefID(el);
}

let _cached_encoder_for_IOCrossRefID: $.ASN1Encoder<IOCrossRefID> | null = null;

/**
 * @summary Encodes a(n) IOCrossRefID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IOCrossRefID, encoded as an ASN.1 Element.
 */
export
function _encode_IOCrossRefID (value: IOCrossRefID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IOCrossRefID) { _cached_encoder_for_IOCrossRefID = $._encode_choice<IOCrossRefID>({
    "switchProvided": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "computerProvided": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_IOCrossRefID(value, elGetter);
}


/* eslint-enable */
