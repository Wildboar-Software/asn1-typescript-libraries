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
import { RequestGroup1, _decode_RequestGroup1, _encode_RequestGroup1 } from "../AIN-Parameters/RequestGroup1.ta.mjs";
// export { RequestGroup1, _decode_RequestGroup1, _encode_RequestGroup1 } from "../AIN-Parameters/RequestGroup1.ta.mjs";
import { RequestGroup2, _decode_RequestGroup2, _encode_RequestGroup2 } from "../AIN-Parameters/RequestGroup2.ta.mjs";
// export { RequestGroup2, _decode_RequestGroup2, _encode_RequestGroup2 } from "../AIN-Parameters/RequestGroup2.ta.mjs";
import { RequestGroup3, _decode_RequestGroup3, _encode_RequestGroup3 } from "../AIN-Parameters/RequestGroup3.ta.mjs";
// export { RequestGroup3, _decode_RequestGroup3, _encode_RequestGroup3 } from "../AIN-Parameters/RequestGroup3.ta.mjs";
import { RequestGroup4, _decode_RequestGroup4, _encode_RequestGroup4 } from "../AIN-Parameters/RequestGroup4.ta.mjs";
// export { RequestGroup4, _decode_RequestGroup4, _encode_RequestGroup4 } from "../AIN-Parameters/RequestGroup4.ta.mjs";
import { RequestGroup5, _decode_RequestGroup5, _encode_RequestGroup5 } from "../AIN-Parameters/RequestGroup5.ta.mjs";
// export { RequestGroup5, _decode_RequestGroup5, _encode_RequestGroup5 } from "../AIN-Parameters/RequestGroup5.ta.mjs";
import { RequestGroup6, _decode_RequestGroup6, _encode_RequestGroup6 } from "../AIN-Parameters/RequestGroup6.ta.mjs";
// export { RequestGroup6, _decode_RequestGroup6, _encode_RequestGroup6 } from "../AIN-Parameters/RequestGroup6.ta.mjs";


/**
 * @summary RequestGroups
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestGroups  ::=  CHOICE{
 *         requestGroup1 [1] IMPLICIT RequestGroup1,
 *         requestGroup2 [2] IMPLICIT RequestGroup2,
 *         requestGroup3 [3] IMPLICIT RequestGroup3,
 *         requestGroup4 [4] IMPLICIT RequestGroup4,
 *         requestGroup5 [5] IMPLICIT RequestGroup5,
 *         requestGroup6 [6] IMPLICIT RequestGroup6
 *     }
 * ```
 */
export
type RequestGroups =
    { requestGroup1: RequestGroup1 } /* CHOICE_ALT_ROOT */
    | { requestGroup2: RequestGroup2 } /* CHOICE_ALT_ROOT */
    | { requestGroup3: RequestGroup3 } /* CHOICE_ALT_ROOT */
    | { requestGroup4: RequestGroup4 } /* CHOICE_ALT_ROOT */
    | { requestGroup5: RequestGroup5 } /* CHOICE_ALT_ROOT */
    | { requestGroup6: RequestGroup6 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RequestGroups: $.ASN1Decoder<RequestGroups> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestGroups
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestGroups (el: _Element): RequestGroups {
    if (!_cached_decoder_for_RequestGroups) { _cached_decoder_for_RequestGroups = $._decode_inextensible_choice<RequestGroups>({
    "CONTEXT 1": [ "requestGroup1", $._decode_implicit<RequestGroup1>(() => _decode_RequestGroup1) ],
    "CONTEXT 2": [ "requestGroup2", $._decode_implicit<RequestGroup2>(() => _decode_RequestGroup2) ],
    "CONTEXT 3": [ "requestGroup3", $._decode_implicit<RequestGroup3>(() => _decode_RequestGroup3) ],
    "CONTEXT 4": [ "requestGroup4", $._decode_implicit<RequestGroup4>(() => _decode_RequestGroup4) ],
    "CONTEXT 5": [ "requestGroup5", $._decode_implicit<RequestGroup5>(() => _decode_RequestGroup5) ],
    "CONTEXT 6": [ "requestGroup6", $._decode_implicit<RequestGroup6>(() => _decode_RequestGroup6) ]
}); }
    return _cached_decoder_for_RequestGroups(el);
}

let _cached_encoder_for_RequestGroups: $.ASN1Encoder<RequestGroups> | null = null;

/**
 * @summary Encodes a(n) RequestGroups into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestGroups, encoded as an ASN.1 Element.
 */
export
function _encode_RequestGroups (value: RequestGroups, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestGroups) { _cached_encoder_for_RequestGroups = $._encode_choice<RequestGroups>({
    "requestGroup1": $._encode_implicit(_TagClass.context, 1, () => _encode_RequestGroup1, $.BER),
    "requestGroup2": $._encode_implicit(_TagClass.context, 2, () => _encode_RequestGroup2, $.BER),
    "requestGroup3": $._encode_implicit(_TagClass.context, 3, () => _encode_RequestGroup3, $.BER),
    "requestGroup4": $._encode_implicit(_TagClass.context, 4, () => _encode_RequestGroup4, $.BER),
    "requestGroup5": $._encode_implicit(_TagClass.context, 5, () => _encode_RequestGroup5, $.BER),
    "requestGroup6": $._encode_implicit(_TagClass.context, 6, () => _encode_RequestGroup6, $.BER),
}, $.BER); }
    return _cached_encoder_for_RequestGroups(value, elGetter);
}


/* eslint-enable */
