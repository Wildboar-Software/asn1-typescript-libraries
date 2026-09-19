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
import { GetReferenceRequestPdu, _decode_GetReferenceRequestPdu, _encode_GetReferenceRequestPdu } from "../IEC61850/GetReferenceRequestPdu.ta.mjs";
// export { GetReferenceRequestPdu, _decode_GetReferenceRequestPdu, _encode_GetReferenceRequestPdu } from "../IEC61850/GetReferenceRequestPdu.ta.mjs";
import { GetElementRequestPdu, _decode_GetElementRequestPdu, _encode_GetElementRequestPdu } from "../IEC61850/GetElementRequestPdu.ta.mjs";
// export { GetElementRequestPdu, _decode_GetElementRequestPdu, _encode_GetElementRequestPdu } from "../IEC61850/GetElementRequestPdu.ta.mjs";


/**
 * @summary GSEMngtRequests
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GSEMngtRequests  ::=  CHOICE {
 *     getGoReference            [1] IMPLICIT GetReferenceRequestPdu,
 *     getGOOSEElementNumber    [2] IMPLICIT GetElementRequestPdu,
 *     getGsReference            [3] IMPLICIT GetReferenceRequestPdu,
 *     getGSSEDataOffset        [4] IMPLICIT GetElementRequestPdu,
 *     ...
 * }
 * ```
 */
export
type GSEMngtRequests =
    { getGoReference: GetReferenceRequestPdu } /* CHOICE_ALT_ROOT */
    | { getGOOSEElementNumber: GetElementRequestPdu } /* CHOICE_ALT_ROOT */
    | { getGsReference: GetReferenceRequestPdu } /* CHOICE_ALT_ROOT */
    | { getGSSEDataOffset: GetElementRequestPdu } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_GSEMngtRequests: $.ASN1Decoder<GSEMngtRequests> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GSEMngtRequests
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GSEMngtRequests (el: _Element): GSEMngtRequests {
    if (!_cached_decoder_for_GSEMngtRequests) { _cached_decoder_for_GSEMngtRequests = $._decode_extensible_choice<GSEMngtRequests>({
    "CONTEXT 1": [ "getGoReference", $._decode_implicit<GetReferenceRequestPdu>(() => _decode_GetReferenceRequestPdu) ],
    "CONTEXT 2": [ "getGOOSEElementNumber", $._decode_implicit<GetElementRequestPdu>(() => _decode_GetElementRequestPdu) ],
    "CONTEXT 3": [ "getGsReference", $._decode_implicit<GetReferenceRequestPdu>(() => _decode_GetReferenceRequestPdu) ],
    "CONTEXT 4": [ "getGSSEDataOffset", $._decode_implicit<GetElementRequestPdu>(() => _decode_GetElementRequestPdu) ]
}); }
    return _cached_decoder_for_GSEMngtRequests(el);
}

let _cached_encoder_for_GSEMngtRequests: $.ASN1Encoder<GSEMngtRequests> | null = null;

/**
 * @summary Encodes a(n) GSEMngtRequests into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GSEMngtRequests, encoded as an ASN.1 Element.
 */
export
function _encode_GSEMngtRequests (value: GSEMngtRequests, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GSEMngtRequests) { _cached_encoder_for_GSEMngtRequests = $._encode_choice<GSEMngtRequests>({
    "getGoReference": $._encode_implicit(_TagClass.context, 1, () => _encode_GetReferenceRequestPdu, $.BER),
    "getGOOSEElementNumber": $._encode_implicit(_TagClass.context, 2, () => _encode_GetElementRequestPdu, $.BER),
    "getGsReference": $._encode_implicit(_TagClass.context, 3, () => _encode_GetReferenceRequestPdu, $.BER),
    "getGSSEDataOffset": $._encode_implicit(_TagClass.context, 4, () => _encode_GetElementRequestPdu, $.BER),
}, $.BER); }
    return _cached_encoder_for_GSEMngtRequests(value, elGetter);
}


/* eslint-enable */
