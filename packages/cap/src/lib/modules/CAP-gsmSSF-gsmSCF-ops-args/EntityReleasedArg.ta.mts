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
import { BCSM_Failure, _decode_BCSM_Failure, _encode_BCSM_Failure } from "../CAP-datatypes/BCSM-Failure.ta.mjs";
import { CallSegmentFailure, _decode_CallSegmentFailure, _encode_CallSegmentFailure } from "../CAP-datatypes/CallSegmentFailure.ta.mjs";



/**
 * @summary EntityReleasedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EntityReleasedArg {PARAMETERS-BOUND : bound}  ::=  CHOICE {
 *     callSegmentFailure            [0]    CallSegmentFailure {bound},
 *     bCSM-Failure            [1]    BCSM-Failure {bound}
 *     }
 * ```
 */
export
type EntityReleasedArg =
    { callSegmentFailure: CallSegmentFailure } /* CHOICE_ALT_ROOT */
    | { bCSM_Failure: BCSM_Failure } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EntityReleasedArg: $.ASN1Decoder<EntityReleasedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EntityReleasedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EntityReleasedArg (el: _Element): EntityReleasedArg {
    if (!_cached_decoder_for_EntityReleasedArg) { _cached_decoder_for_EntityReleasedArg = $._decode_inextensible_choice<EntityReleasedArg>({
    "CONTEXT 0": [ "callSegmentFailure", $._decode_implicit<CallSegmentFailure>(() => _decode_CallSegmentFailure) ],
    "CONTEXT 1": [ "bCSM_Failure", $._decode_implicit<BCSM_Failure>(() => _decode_BCSM_Failure) ]
}); }
    return _cached_decoder_for_EntityReleasedArg(el);
}

let _cached_encoder_for_EntityReleasedArg: $.ASN1Encoder<EntityReleasedArg> | null = null;

/**
 * @summary Encodes a(n) EntityReleasedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntityReleasedArg, encoded as an ASN.1 Element.
 */
export
function _encode_EntityReleasedArg (value: EntityReleasedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EntityReleasedArg) { _cached_encoder_for_EntityReleasedArg = $._encode_choice<EntityReleasedArg>({
    "callSegmentFailure": $._encode_implicit(_TagClass.context, 0, () => _encode_CallSegmentFailure, $.BER),
    "bCSM_Failure": $._encode_implicit(_TagClass.context, 1, () => _encode_BCSM_Failure, $.BER),
}, $.BER); }
    return _cached_encoder_for_EntityReleasedArg(value, elGetter);
}


/* eslint-enable */
