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
 * @summary DeleteEventAction_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteEventAction-Request  ::=  CHOICE {
 *    specific                   [0] IMPLICIT SEQUENCE OF ObjectName,
 *    aa-specific                [1] IMPLICIT NULL,
 *    domain                     [3] IMPLICIT Identifier,
 *    vmd                        [4] IMPLICIT NULL   }
 * ```
 */
export
type DeleteEventAction_Request =
    { specific: ObjectName[] } /* CHOICE_ALT_ROOT */
    | { aa_specific: NULL } /* CHOICE_ALT_ROOT */
    | { domain: Identifier } /* CHOICE_ALT_ROOT */
    | { vmd: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DeleteEventAction_Request: $.ASN1Decoder<DeleteEventAction_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteEventAction_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteEventAction_Request (el: _Element): DeleteEventAction_Request {
    if (!_cached_decoder_for_DeleteEventAction_Request) { _cached_decoder_for_DeleteEventAction_Request = $._decode_inextensible_choice<DeleteEventAction_Request>({
    "CONTEXT 0": [ "specific", $._decode_implicit<ObjectName[]>(() => $._decodeSequenceOf<ObjectName>(() => _decode_ObjectName)) ],
    "CONTEXT 1": [ "aa_specific", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "domain", $._decode_explicit<Identifier>(() => _decode_Identifier) ],
    "CONTEXT 4": [ "vmd", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_DeleteEventAction_Request(el);
}

let _cached_encoder_for_DeleteEventAction_Request: $.ASN1Encoder<DeleteEventAction_Request> | null = null;

/**
 * @summary Encodes a(n) DeleteEventAction_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteEventAction_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteEventAction_Request (value: DeleteEventAction_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteEventAction_Request) { _cached_encoder_for_DeleteEventAction_Request = $._encode_choice<DeleteEventAction_Request>({
    "specific": $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ObjectName>(() => _encode_ObjectName, $.BER), $.BER),
    "aa_specific": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "domain": $._encode_explicit(_TagClass.context, 3, () => _encode_Identifier, $.BER),
    "vmd": $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_DeleteEventAction_Request(value, elGetter);
}


/* eslint-enable */
