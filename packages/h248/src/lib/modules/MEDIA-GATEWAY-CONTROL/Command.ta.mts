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
import { AmmRequest, _decode_AmmRequest, _encode_AmmRequest } from "../MEDIA-GATEWAY-CONTROL/AmmRequest.ta.mjs";
// export { AmmRequest, _decode_AmmRequest, _encode_AmmRequest } from "../MEDIA-GATEWAY-CONTROL/AmmRequest.ta.mjs";
import { SubtractRequest, _decode_SubtractRequest, _encode_SubtractRequest } from "../MEDIA-GATEWAY-CONTROL/SubtractRequest.ta.mjs";
// export { SubtractRequest, _decode_SubtractRequest, _encode_SubtractRequest } from "../MEDIA-GATEWAY-CONTROL/SubtractRequest.ta.mjs";
import { AuditRequest, _decode_AuditRequest, _encode_AuditRequest } from "../MEDIA-GATEWAY-CONTROL/AuditRequest.ta.mjs";
// export { AuditRequest, _decode_AuditRequest, _encode_AuditRequest } from "../MEDIA-GATEWAY-CONTROL/AuditRequest.ta.mjs";
import { NotifyRequest, _decode_NotifyRequest, _encode_NotifyRequest } from "../MEDIA-GATEWAY-CONTROL/NotifyRequest.ta.mjs";
// export { NotifyRequest, _decode_NotifyRequest, _encode_NotifyRequest } from "../MEDIA-GATEWAY-CONTROL/NotifyRequest.ta.mjs";
import { ServiceChangeRequest, _decode_ServiceChangeRequest, _encode_ServiceChangeRequest } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeRequest.ta.mjs";
// export { ServiceChangeRequest, _decode_ServiceChangeRequest, _encode_ServiceChangeRequest } from "../MEDIA-GATEWAY-CONTROL/ServiceChangeRequest.ta.mjs";


/**
 * @summary Command
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Command  ::=  CHOICE
 *     {
 *         addReq                [0] AmmRequest,
 *         moveReq                [1] AmmRequest,
 *         modReq                [2]    AmmRequest,
 *         -- Add, Move, Modify requests have the same parameters
 *         subtractReq            [3] SubtractRequest,
 *         auditCapRequest        [4] AuditRequest,
 *         auditValueRequest    [5] AuditRequest,
 *         notifyReq            [6]    NotifyRequest,
 *         serviceChangeReq    [7] ServiceChangeRequest,
 *         ...
 *     }
 * ```
 */
export
type Command =
    { addReq: AmmRequest } /* CHOICE_ALT_ROOT */
    | { moveReq: AmmRequest } /* CHOICE_ALT_ROOT */
    | { modReq: AmmRequest } /* CHOICE_ALT_ROOT */
    | { subtractReq: SubtractRequest } /* CHOICE_ALT_ROOT */
    | { auditCapRequest: AuditRequest } /* CHOICE_ALT_ROOT */
    | { auditValueRequest: AuditRequest } /* CHOICE_ALT_ROOT */
    | { notifyReq: NotifyRequest } /* CHOICE_ALT_ROOT */
    | { serviceChangeReq: ServiceChangeRequest } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Command: $.ASN1Decoder<Command> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Command
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Command (el: _Element): Command {
    if (!_cached_decoder_for_Command) { _cached_decoder_for_Command = $._decode_extensible_choice<Command>({
    "CONTEXT 0": [ "addReq", $._decode_implicit<AmmRequest>(() => _decode_AmmRequest) ],
    "CONTEXT 1": [ "moveReq", $._decode_implicit<AmmRequest>(() => _decode_AmmRequest) ],
    "CONTEXT 2": [ "modReq", $._decode_implicit<AmmRequest>(() => _decode_AmmRequest) ],
    "CONTEXT 3": [ "subtractReq", $._decode_implicit<SubtractRequest>(() => _decode_SubtractRequest) ],
    "CONTEXT 4": [ "auditCapRequest", $._decode_implicit<AuditRequest>(() => _decode_AuditRequest) ],
    "CONTEXT 5": [ "auditValueRequest", $._decode_implicit<AuditRequest>(() => _decode_AuditRequest) ],
    "CONTEXT 6": [ "notifyReq", $._decode_implicit<NotifyRequest>(() => _decode_NotifyRequest) ],
    "CONTEXT 7": [ "serviceChangeReq", $._decode_implicit<ServiceChangeRequest>(() => _decode_ServiceChangeRequest) ]
}); }
    return _cached_decoder_for_Command(el);
}

let _cached_encoder_for_Command: $.ASN1Encoder<Command> | null = null;

/**
 * @summary Encodes a(n) Command into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Command, encoded as an ASN.1 Element.
 */
export
function _encode_Command (value: Command, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Command) { _cached_encoder_for_Command = $._encode_choice<Command>({
    "addReq": $._encode_implicit(_TagClass.context, 0, () => _encode_AmmRequest, $.BER),
    "moveReq": $._encode_implicit(_TagClass.context, 1, () => _encode_AmmRequest, $.BER),
    "modReq": $._encode_implicit(_TagClass.context, 2, () => _encode_AmmRequest, $.BER),
    "subtractReq": $._encode_implicit(_TagClass.context, 3, () => _encode_SubtractRequest, $.BER),
    "auditCapRequest": $._encode_implicit(_TagClass.context, 4, () => _encode_AuditRequest, $.BER),
    "auditValueRequest": $._encode_implicit(_TagClass.context, 5, () => _encode_AuditRequest, $.BER),
    "notifyReq": $._encode_implicit(_TagClass.context, 6, () => _encode_NotifyRequest, $.BER),
    "serviceChangeReq": $._encode_implicit(_TagClass.context, 7, () => _encode_ServiceChangeRequest, $.BER),
}, $.BER); }
    return _cached_encoder_for_Command(value, elGetter);
}


/* eslint-enable */
