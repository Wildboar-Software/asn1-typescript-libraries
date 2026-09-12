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
import { Confirmed_RequestPDU, _decode_Confirmed_RequestPDU, _encode_Confirmed_RequestPDU } from "../ISO-9506-MMS-1/Confirmed-RequestPDU.ta.mjs";
// export { Confirmed_RequestPDU, _decode_Confirmed_RequestPDU, _encode_Confirmed_RequestPDU } from "../ISO-9506-MMS-1/Confirmed-RequestPDU.ta.mjs";
import { Confirmed_ResponsePDU, _decode_Confirmed_ResponsePDU, _encode_Confirmed_ResponsePDU } from "../ISO-9506-MMS-1/Confirmed-ResponsePDU.ta.mjs";
// export { Confirmed_ResponsePDU, _decode_Confirmed_ResponsePDU, _encode_Confirmed_ResponsePDU } from "../ISO-9506-MMS-1/Confirmed-ResponsePDU.ta.mjs";
import { Confirmed_ErrorPDU, _decode_Confirmed_ErrorPDU, _encode_Confirmed_ErrorPDU } from "../ISO-9506-MMS-1/Confirmed-ErrorPDU.ta.mjs";
// export { Confirmed_ErrorPDU, _decode_Confirmed_ErrorPDU, _encode_Confirmed_ErrorPDU } from "../ISO-9506-MMS-1/Confirmed-ErrorPDU.ta.mjs";
import { RejectPDU, _decode_RejectPDU, _encode_RejectPDU } from "../ISO-9506-MMS-1/RejectPDU.ta.mjs";
// export { RejectPDU, _decode_RejectPDU, _encode_RejectPDU } from "../ISO-9506-MMS-1/RejectPDU.ta.mjs";
import { Initiate_RequestPDU, _decode_Initiate_RequestPDU, _encode_Initiate_RequestPDU } from "../ISO-9506-MMS-1/Initiate-RequestPDU.ta.mjs";
// export { Initiate_RequestPDU, _decode_Initiate_RequestPDU, _encode_Initiate_RequestPDU } from "../ISO-9506-MMS-1/Initiate-RequestPDU.ta.mjs";
import { Initiate_ResponsePDU, _decode_Initiate_ResponsePDU, _encode_Initiate_ResponsePDU } from "../ISO-9506-MMS-1/Initiate-ResponsePDU.ta.mjs";
// export { Initiate_ResponsePDU, _decode_Initiate_ResponsePDU, _encode_Initiate_ResponsePDU } from "../ISO-9506-MMS-1/Initiate-ResponsePDU.ta.mjs";
import { Initiate_ErrorPDU, _decode_Initiate_ErrorPDU, _encode_Initiate_ErrorPDU } from "../ISO-9506-MMS-1/Initiate-ErrorPDU.ta.mjs";
// export { Initiate_ErrorPDU, _decode_Initiate_ErrorPDU, _encode_Initiate_ErrorPDU } from "../ISO-9506-MMS-1/Initiate-ErrorPDU.ta.mjs";
import { Conclude_RequestPDU, _decode_Conclude_RequestPDU, _encode_Conclude_RequestPDU } from "../ISO-9506-MMS-1/Conclude-RequestPDU.ta.mjs";
// export { Conclude_RequestPDU, _decode_Conclude_RequestPDU, _encode_Conclude_RequestPDU } from "../ISO-9506-MMS-1/Conclude-RequestPDU.ta.mjs";
import { Conclude_ResponsePDU, _decode_Conclude_ResponsePDU, _encode_Conclude_ResponsePDU } from "../ISO-9506-MMS-1/Conclude-ResponsePDU.ta.mjs";
// export { Conclude_ResponsePDU, _decode_Conclude_ResponsePDU, _encode_Conclude_ResponsePDU } from "../ISO-9506-MMS-1/Conclude-ResponsePDU.ta.mjs";
import { Conclude_ErrorPDU, _decode_Conclude_ErrorPDU, _encode_Conclude_ErrorPDU } from "../ISO-9506-MMS-1/Conclude-ErrorPDU.ta.mjs";
// export { Conclude_ErrorPDU, _decode_Conclude_ErrorPDU, _encode_Conclude_ErrorPDU } from "../ISO-9506-MMS-1/Conclude-ErrorPDU.ta.mjs";


/**
 * @summary MMSpdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSpdu  ::=  CHOICE {
 *     confirmed-RequestPDU       [0] IMPLICIT Confirmed-RequestPDU,
 *     confirmed-ResponsePDU      [1] IMPLICIT Confirmed-ResponsePDU,
 *     confirmed-ErrorPDU         [2] IMPLICIT Confirmed-ErrorPDU,
 *     -- unconfirmed-PDU            [3] IMPLICIT Unconfirmed-PDU,
 *     -- unconfirmed-PDU            [3] IMPLICIT NULL,
 *     rejectPDU                  [4] IMPLICIT RejectPDU,
 *     -- cancel-RequestPDU          [5] IMPLICIT Cancel-RequestPDU,
 *     -- cancel-ResponsePDU         [6] IMPLICIT Cancel-ResponsePDU,
 *     -- cancel-ErrorPDU            [7] IMPLICIT Cancel-ErrorPDU,
 *     -- cancel-RequestPDU          [5] IMPLICIT NULL,
 *     -- cancel-ResponsePDU         [6] IMPLICIT NULL,
 *     -- cancel-ErrorPDU            [7] IMPLICIT NULL,
 *     initiate-RequestPDU        [8] IMPLICIT Initiate-RequestPDU,
 *     initiate-ResponsePDU       [9] IMPLICIT Initiate-ResponsePDU,
 *     initiate-ErrorPDU          [10] IMPLICIT Initiate-ErrorPDU,
 *     conclude-RequestPDU        [11] IMPLICIT Conclude-RequestPDU,
 *     conclude-ResponsePDU       [12] IMPLICIT Conclude-ResponsePDU,
 *     conclude-ErrorPDU          [13] IMPLICIT Conclude-ErrorPDU,
 *     ...
 * }
 * ```
 */
export
type MMSpdu =
    { confirmed_RequestPDU: Confirmed_RequestPDU } /* CHOICE_ALT_ROOT */
    | { confirmed_ResponsePDU: Confirmed_ResponsePDU } /* CHOICE_ALT_ROOT */
    | { confirmed_ErrorPDU: Confirmed_ErrorPDU } /* CHOICE_ALT_ROOT */
    | { rejectPDU: RejectPDU } /* CHOICE_ALT_ROOT */
    | { initiate_RequestPDU: Initiate_RequestPDU } /* CHOICE_ALT_ROOT */
    | { initiate_ResponsePDU: Initiate_ResponsePDU } /* CHOICE_ALT_ROOT */
    | { initiate_ErrorPDU: Initiate_ErrorPDU } /* CHOICE_ALT_ROOT */
    | { conclude_RequestPDU: Conclude_RequestPDU } /* CHOICE_ALT_ROOT */
    | { conclude_ResponsePDU: Conclude_ResponsePDU } /* CHOICE_ALT_ROOT */
    | { conclude_ErrorPDU: Conclude_ErrorPDU } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MMSpdu: $.ASN1Decoder<MMSpdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSpdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSpdu (el: _Element): MMSpdu {
    if (!_cached_decoder_for_MMSpdu) { _cached_decoder_for_MMSpdu = $._decode_extensible_choice<MMSpdu>({
    "CONTEXT 0": [ "confirmed_RequestPDU", $._decode_implicit<Confirmed_RequestPDU>(() => _decode_Confirmed_RequestPDU) ],
    "CONTEXT 1": [ "confirmed_ResponsePDU", $._decode_implicit<Confirmed_ResponsePDU>(() => _decode_Confirmed_ResponsePDU) ],
    "CONTEXT 2": [ "confirmed_ErrorPDU", $._decode_implicit<Confirmed_ErrorPDU>(() => _decode_Confirmed_ErrorPDU) ],
    "CONTEXT 4": [ "rejectPDU", $._decode_implicit<RejectPDU>(() => _decode_RejectPDU) ],
    "CONTEXT 8": [ "initiate_RequestPDU", $._decode_implicit<Initiate_RequestPDU>(() => _decode_Initiate_RequestPDU) ],
    "CONTEXT 9": [ "initiate_ResponsePDU", $._decode_implicit<Initiate_ResponsePDU>(() => _decode_Initiate_ResponsePDU) ],
    "CONTEXT 10": [ "initiate_ErrorPDU", $._decode_implicit<Initiate_ErrorPDU>(() => _decode_Initiate_ErrorPDU) ],
    "CONTEXT 11": [ "conclude_RequestPDU", $._decode_implicit<Conclude_RequestPDU>(() => _decode_Conclude_RequestPDU) ],
    "CONTEXT 12": [ "conclude_ResponsePDU", $._decode_implicit<Conclude_ResponsePDU>(() => _decode_Conclude_ResponsePDU) ],
    "CONTEXT 13": [ "conclude_ErrorPDU", $._decode_implicit<Conclude_ErrorPDU>(() => _decode_Conclude_ErrorPDU) ]
}); }
    return _cached_decoder_for_MMSpdu(el);
}

let _cached_encoder_for_MMSpdu: $.ASN1Encoder<MMSpdu> | null = null;

/**
 * @summary Encodes a(n) MMSpdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSpdu, encoded as an ASN.1 Element.
 */
export
function _encode_MMSpdu (value: MMSpdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSpdu) { _cached_encoder_for_MMSpdu = $._encode_choice<MMSpdu>({
    "confirmed_RequestPDU": $._encode_implicit(_TagClass.context, 0, () => _encode_Confirmed_RequestPDU, $.BER),
    "confirmed_ResponsePDU": $._encode_implicit(_TagClass.context, 1, () => _encode_Confirmed_ResponsePDU, $.BER),
    "confirmed_ErrorPDU": $._encode_implicit(_TagClass.context, 2, () => _encode_Confirmed_ErrorPDU, $.BER),
    "rejectPDU": $._encode_implicit(_TagClass.context, 4, () => _encode_RejectPDU, $.BER),
    "initiate_RequestPDU": $._encode_implicit(_TagClass.context, 8, () => _encode_Initiate_RequestPDU, $.BER),
    "initiate_ResponsePDU": $._encode_implicit(_TagClass.context, 9, () => _encode_Initiate_ResponsePDU, $.BER),
    "initiate_ErrorPDU": $._encode_implicit(_TagClass.context, 10, () => _encode_Initiate_ErrorPDU, $.BER),
    "conclude_RequestPDU": $._encode_implicit(_TagClass.context, 11, () => _encode_Conclude_RequestPDU, $.BER),
    "conclude_ResponsePDU": $._encode_implicit(_TagClass.context, 12, () => _encode_Conclude_ResponsePDU, $.BER),
    "conclude_ErrorPDU": $._encode_implicit(_TagClass.context, 13, () => _encode_Conclude_ErrorPDU, $.BER),
}, $.BER); }
    return _cached_encoder_for_MMSpdu(value, elGetter);
}


/* eslint-enable */
