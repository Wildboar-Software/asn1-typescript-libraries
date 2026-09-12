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
import { CS_Status_Response, _decode_CS_Status_Response, _encode_CS_Status_Response } from "../ISO-9506-MMS-1/CS-Status-Response.ta.mjs";
// export { CS_Status_Response, _decode_CS_Status_Response, _encode_CS_Status_Response } from "../ISO-9506-MMS-1/CS-Status-Response.ta.mjs";
import { CS_GetProgramInvocationAttributes_Response, _decode_CS_GetProgramInvocationAttributes_Response, _encode_CS_GetProgramInvocationAttributes_Response } from "../ISO-9506-MMS-1/CS-GetProgramInvocationAttributes-Response.ta.mjs";
// export { CS_GetProgramInvocationAttributes_Response, _decode_CS_GetProgramInvocationAttributes_Response, _encode_CS_GetProgramInvocationAttributes_Response } from "../ISO-9506-MMS-1/CS-GetProgramInvocationAttributes-Response.ta.mjs";
import { CS_GetEventConditionAttributes_Response, _decode_CS_GetEventConditionAttributes_Response, _encode_CS_GetEventConditionAttributes_Response } from "../ISO-9506-MMS-1/CS-GetEventConditionAttributes-Response.ta.mjs";
// export { CS_GetEventConditionAttributes_Response, _decode_CS_GetEventConditionAttributes_Response, _encode_CS_GetEventConditionAttributes_Response } from "../ISO-9506-MMS-1/CS-GetEventConditionAttributes-Response.ta.mjs";


/**
 * @summary Response_Detail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Response-Detail  ::=  CHOICE {
 *           -- this choice shall be selected if the tag value of the
 *           -- ConfirmedServiceResponse does not match any of the tags below
 *    otherRequests       NULL
 * ,  status
 *        [0] CS-Status-Response
 * ,  getProgramInvocationAttributes
 *        [45] IMPLICIT CS-GetProgramInvocationAttributes-Response
 * ,  getEventConditionAttributes
 *        [49] IMPLICIT CS-GetEventConditionAttributes-Response
 *    }
 * ```
 */
export
type Response_Detail =
    { otherRequests: NULL } /* CHOICE_ALT_ROOT */
    | { status: CS_Status_Response } /* CHOICE_ALT_ROOT */
    | { getProgramInvocationAttributes: CS_GetProgramInvocationAttributes_Response } /* CHOICE_ALT_ROOT */
    | { getEventConditionAttributes: CS_GetEventConditionAttributes_Response } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Response_Detail: $.ASN1Decoder<Response_Detail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Response_Detail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Response_Detail (el: _Element): Response_Detail {
    if (!_cached_decoder_for_Response_Detail) { _cached_decoder_for_Response_Detail = $._decode_inextensible_choice<Response_Detail>({
    "UNIVERSAL 5": [ "otherRequests", $._decodeNull ],
    "CONTEXT 0": [ "status", $._decode_explicit<CS_Status_Response>(() => _decode_CS_Status_Response) ],
    "CONTEXT 45": [ "getProgramInvocationAttributes", $._decode_implicit<CS_GetProgramInvocationAttributes_Response>(() => _decode_CS_GetProgramInvocationAttributes_Response) ],
    "CONTEXT 49": [ "getEventConditionAttributes", $._decode_implicit<CS_GetEventConditionAttributes_Response>(() => _decode_CS_GetEventConditionAttributes_Response) ]
}); }
    return _cached_decoder_for_Response_Detail(el);
}

let _cached_encoder_for_Response_Detail: $.ASN1Encoder<Response_Detail> | null = null;

/**
 * @summary Encodes a(n) Response_Detail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Response_Detail, encoded as an ASN.1 Element.
 */
export
function _encode_Response_Detail (value: Response_Detail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Response_Detail) { _cached_encoder_for_Response_Detail = $._encode_choice<Response_Detail>({
    "otherRequests": $._encodeNull,
    "status": $._encode_explicit(_TagClass.context, 0, () => _encode_CS_Status_Response, $.BER),
    "getProgramInvocationAttributes": $._encode_implicit(_TagClass.context, 45, () => _encode_CS_GetProgramInvocationAttributes_Response, $.BER),
    "getEventConditionAttributes": $._encode_implicit(_TagClass.context, 49, () => _encode_CS_GetEventConditionAttributes_Response, $.BER),
}, $.BER); }
    return _cached_encoder_for_Response_Detail(value, elGetter);
}


/* eslint-enable */
