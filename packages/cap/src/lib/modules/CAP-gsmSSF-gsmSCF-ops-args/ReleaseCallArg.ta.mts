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
import { AllCallSegments, _decode_AllCallSegments, _encode_AllCallSegments } from "../CAP-gsmSSF-gsmSCF-ops-args/AllCallSegments.ta.mjs";
// export { AllCallSegments, _decode_AllCallSegments, _encode_AllCallSegments } from "../CAP-gsmSSF-gsmSCF-ops-args/AllCallSegments.ta.mjs";
import { AllCallSegmentsWithExtension, _decode_AllCallSegmentsWithExtension, _encode_AllCallSegmentsWithExtension } from "../CAP-gsmSSF-gsmSCF-ops-args/AllCallSegmentsWithExtension.ta.mjs";
// export { AllCallSegmentsWithExtension, _decode_AllCallSegmentsWithExtension, _encode_AllCallSegmentsWithExtension } from "../CAP-gsmSSF-gsmSCF-ops-args/AllCallSegmentsWithExtension.ta.mjs";


/**
 * @summary ReleaseCallArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReleaseCallArg {PARAMETERS-BOUND : bound}  ::=  CHOICE {
 *     allCallSegments            AllCallSegments,
 *     allCallSegmentsWithExtension    [2] AllCallSegmentsWithExtension
 *     }
 * ```
 */
export
type ReleaseCallArg =
    { allCallSegments: AllCallSegments } /* CHOICE_ALT_ROOT */
    | { allCallSegmentsWithExtension: AllCallSegmentsWithExtension } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ReleaseCallArg: $.ASN1Decoder<ReleaseCallArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseCallArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseCallArg (el: _Element): ReleaseCallArg {
    if (!_cached_decoder_for_ReleaseCallArg) { _cached_decoder_for_ReleaseCallArg = $._decode_inextensible_choice<ReleaseCallArg>({
    "*": [ "allCallSegments", _decode_AllCallSegments ],
    "CONTEXT 2": [ "allCallSegmentsWithExtension", $._decode_implicit<AllCallSegmentsWithExtension>(() => _decode_AllCallSegmentsWithExtension) ]
}); }
    return _cached_decoder_for_ReleaseCallArg(el);
}

let _cached_encoder_for_ReleaseCallArg: $.ASN1Encoder<ReleaseCallArg> | null = null;

/**
 * @summary Encodes a(n) ReleaseCallArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseCallArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReleaseCallArg (value: ReleaseCallArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReleaseCallArg) { _cached_encoder_for_ReleaseCallArg = $._encode_choice<ReleaseCallArg>({
    "allCallSegments": _encode_AllCallSegments,
    "allCallSegmentsWithExtension": $._encode_implicit(_TagClass.context, 2, () => _encode_AllCallSegmentsWithExtension, $.BER),
}, $.BER); }
    return _cached_encoder_for_ReleaseCallArg(value, elGetter);
}


/* eslint-enable */
