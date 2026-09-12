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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary DeleteEventCondition_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteEventCondition-Request  ::=  CHOICE {
 *    specific                   [0] IMPLICIT SEQUENCE OF ObjectName,
 *    aa-specific                [1] IMPLICIT NULL,
 *    domain                     [2] IMPLICIT Identifier,
 *    vmd                        [3] IMPLICIT NULL   }
 * ```
 */
export
type DeleteEventCondition_Request =
    { specific: ObjectName[] } /* CHOICE_ALT_ROOT */
    | { aa_specific: NULL } /* CHOICE_ALT_ROOT */
    | { domain: Identifier } /* CHOICE_ALT_ROOT */
    | { vmd: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DeleteEventCondition_Request: $.ASN1Decoder<DeleteEventCondition_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteEventCondition_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteEventCondition_Request (el: _Element): DeleteEventCondition_Request {
    if (!_cached_decoder_for_DeleteEventCondition_Request) { _cached_decoder_for_DeleteEventCondition_Request = $._decode_inextensible_choice<DeleteEventCondition_Request>({
    "CONTEXT 0": [ "specific", $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName)) ],
    "CONTEXT 1": [ "aa_specific", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "domain", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 3": [ "vmd", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_DeleteEventCondition_Request(el);
}

let _cached_encoder_for_DeleteEventCondition_Request: $.ASN1Encoder<DeleteEventCondition_Request> | null = null;

/**
 * @summary Encodes a(n) DeleteEventCondition_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteEventCondition_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteEventCondition_Request (value: DeleteEventCondition_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteEventCondition_Request) { _cached_encoder_for_DeleteEventCondition_Request = $._encode_choice<DeleteEventCondition_Request>({
    "specific": $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER),
    "aa_specific": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "domain": $._encode_explicit(_TagClass.context, 2, () => _encode_Identifier, $.BER),
    "vmd": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_DeleteEventCondition_Request(value, elGetter);
}


/* eslint-enable */
