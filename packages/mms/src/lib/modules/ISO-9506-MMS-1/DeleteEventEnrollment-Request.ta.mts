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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary DeleteEventEnrollment_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteEventEnrollment-Request  ::=  CHOICE {
 *    specific                   [0] IMPLICIT SEQUENCE OF ObjectName,
 *    ec                         [1] ObjectName,
 *    ea                         [2] ObjectName   }
 * ```
 */
export
type DeleteEventEnrollment_Request =
    { specific: ObjectName[] } /* CHOICE_ALT_ROOT */
    | { ec: ObjectName } /* CHOICE_ALT_ROOT */
    | { ea: ObjectName } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DeleteEventEnrollment_Request: $.ASN1Decoder<DeleteEventEnrollment_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteEventEnrollment_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteEventEnrollment_Request (el: _Element): DeleteEventEnrollment_Request {
    if (!_cached_decoder_for_DeleteEventEnrollment_Request) { _cached_decoder_for_DeleteEventEnrollment_Request = $._decode_inextensible_choice<DeleteEventEnrollment_Request>({
    "CONTEXT 0": [ "specific", $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName)) ],
    "CONTEXT 1": [ "ec", $._decode_explicit<ObjectName>(() => _decode_ObjectName) ],
    "CONTEXT 2": [ "ea", $._decode_explicit<ObjectName>(() => _decode_ObjectName) ]
}); }
    return _cached_decoder_for_DeleteEventEnrollment_Request(el);
}

let _cached_encoder_for_DeleteEventEnrollment_Request: $.ASN1Encoder<DeleteEventEnrollment_Request> | null = null;

/**
 * @summary Encodes a(n) DeleteEventEnrollment_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteEventEnrollment_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteEventEnrollment_Request (value: DeleteEventEnrollment_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteEventEnrollment_Request) { _cached_encoder_for_DeleteEventEnrollment_Request = $._encode_choice<DeleteEventEnrollment_Request>({
    "specific": $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER),
    "ec": $._encode_explicit(_TagClass.context, 1, () => _encode_ObjectName, $.BER),
    "ea": $._encode_explicit(_TagClass.context, 2, () => _encode_ObjectName, $.BER),
}, $.BER); }
    return _cached_encoder_for_DeleteEventEnrollment_Request(value, elGetter);
}


/* eslint-enable */
