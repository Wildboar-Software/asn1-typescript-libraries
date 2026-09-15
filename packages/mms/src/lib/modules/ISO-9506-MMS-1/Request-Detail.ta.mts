/* eslint-disable */
import {
    NULL,
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
import { CS_CreateProgramInvocation_Request, _decode_CS_CreateProgramInvocation_Request, _encode_CS_CreateProgramInvocation_Request } from "../ISO-9506-MMS-1/CS-CreateProgramInvocation-Request.ta.mjs";
// export { CS_CreateProgramInvocation_Request, _decode_CS_CreateProgramInvocation_Request, _encode_CS_CreateProgramInvocation_Request } from "../ISO-9506-MMS-1/CS-CreateProgramInvocation-Request.ta.mjs";
import { CS_Start_Request, _decode_CS_Start_Request, _encode_CS_Start_Request } from "../ISO-9506-MMS-1/CS-Start-Request.ta.mjs";
// export { CS_Start_Request, _decode_CS_Start_Request, _encode_CS_Start_Request } from "../ISO-9506-MMS-1/CS-Start-Request.ta.mjs";
import { CS_Resume_Request, _decode_CS_Resume_Request, _encode_CS_Resume_Request } from "../ISO-9506-MMS-1/CS-Resume-Request.ta.mjs";
// export { CS_Resume_Request, _decode_CS_Resume_Request, _encode_CS_Resume_Request } from "../ISO-9506-MMS-1/CS-Resume-Request.ta.mjs";
import { CS_DefineEventCondition_Request, _decode_CS_DefineEventCondition_Request, _encode_CS_DefineEventCondition_Request } from "../ISO-9506-MMS-1/CS-DefineEventCondition-Request.ta.mjs";
// export { CS_DefineEventCondition_Request, _decode_CS_DefineEventCondition_Request, _encode_CS_DefineEventCondition_Request } from "../ISO-9506-MMS-1/CS-DefineEventCondition-Request.ta.mjs";
import { CS_AlterEventConditionMonitoring_Request, _decode_CS_AlterEventConditionMonitoring_Request, _encode_CS_AlterEventConditionMonitoring_Request } from "../ISO-9506-MMS-1/CS-AlterEventConditionMonitoring-Request.ta.mjs";
// export { CS_AlterEventConditionMonitoring_Request, _decode_CS_AlterEventConditionMonitoring_Request, _encode_CS_AlterEventConditionMonitoring_Request } from "../ISO-9506-MMS-1/CS-AlterEventConditionMonitoring-Request.ta.mjs";
import { CS_DefineEventEnrollment_Request, _decode_CS_DefineEventEnrollment_Request, _encode_CS_DefineEventEnrollment_Request } from "../ISO-9506-MMS-1/CS-DefineEventEnrollment-Request.ta.mjs";
// export { CS_DefineEventEnrollment_Request, _decode_CS_DefineEventEnrollment_Request, _encode_CS_DefineEventEnrollment_Request } from "../ISO-9506-MMS-1/CS-DefineEventEnrollment-Request.ta.mjs";
import { CS_AlterEventEnrollment_Request, _decode_CS_AlterEventEnrollment_Request, _encode_CS_AlterEventEnrollment_Request } from "../ISO-9506-MMS-1/CS-AlterEventEnrollment-Request.ta.mjs";
// export { CS_AlterEventEnrollment_Request, _decode_CS_AlterEventEnrollment_Request, _encode_CS_AlterEventEnrollment_Request } from "../ISO-9506-MMS-1/CS-AlterEventEnrollment-Request.ta.mjs";


/**
 * @summary Request_Detail
 * @description
 *
 * Companion-standard request extension in Confirmed-RequestPDU `service-ext`
 * [79]. Select `otherRequests` (NULL) when the ConfirmedServiceRequest tag does
 * not match a named alternative. Named tags match createProgramInvocation,
 * start, resume, and event condition/enrollment services. Omit the whole
 * `service-ext` if the value would be a tagged NULL (ISO 9506-1:2003 Annex B;
 * ISO 9506-2:2003 §7.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Request-Detail ::= CHOICE {
 *     -- this choice shall be selected if the tag value of the
 *     -- ConfirmedServiceRequest does not match any of the tags below
 *     otherRequests                 NULL,
 *     createProgramInvocation [38] IMPLICIT CS-CreateProgramInvocation-Request,
 *     createProgramInvocation [38] IMPLICIT NULL,
 *     start   [40] IMPLICIT CS-Start-Request,
 *     start   [40] IMPLICIT NULL,
 *     resume  [42] IMPLICIT CS-Resume-Request,
 *     resume  [42] IMPLICIT NULL,
 *     defineEventCondition    [47] IMPLICIT CS-DefineEventCondition-Request,
 *     defineEventCondition    [47] IMPLICIT NULL,
 *     alterEventConditionMonitoring   [51] IMPLICIT CS-AlterEventConditionMonitoring-Request,
 *     alterEventConditionMonitoring   [51] IMPLICIT NULL,
 *     defineEventEnrollment   [57] IMPLICIT CS-DefineEventEnrollment-Request,
 *     defineEventEnrollment   [57] IMPLICIT NULL,
 *     alterEventEnrollment    [59] IMPLICIT CS-AlterEventEnrollment-Request,
 *     alterEventEnrollment    [59] IMPLICIT NULL
 * }
 * ```
 */
export
type Request_Detail =
    { otherRequests: NULL } /* CHOICE_ALT_ROOT */
    | { createProgramInvocation: CS_CreateProgramInvocation_Request } /* CHOICE_ALT_ROOT */
    | { createProgramInvocation: NULL } /* CHOICE_ALT_ROOT */
    | { start: CS_Start_Request } /* CHOICE_ALT_ROOT */
    | { start: NULL } /* CHOICE_ALT_ROOT */
    | { resume: CS_Resume_Request } /* CHOICE_ALT_ROOT */
    | { resume: NULL } /* CHOICE_ALT_ROOT */
    | { defineEventCondition: CS_DefineEventCondition_Request } /* CHOICE_ALT_ROOT */
    | { defineEventCondition: NULL } /* CHOICE_ALT_ROOT */
    | { alterEventConditionMonitoring: CS_AlterEventConditionMonitoring_Request } /* CHOICE_ALT_ROOT */
    | { alterEventConditionMonitoring: NULL } /* CHOICE_ALT_ROOT */
    | { defineEventEnrollment: CS_DefineEventEnrollment_Request } /* CHOICE_ALT_ROOT */
    | { defineEventEnrollment: NULL } /* CHOICE_ALT_ROOT */
    | { alterEventEnrollment: CS_AlterEventEnrollment_Request } /* CHOICE_ALT_ROOT */
    | { alterEventEnrollment: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Request_Detail: $.ASN1Decoder<Request_Detail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Request_Detail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Request_Detail (el: _Element): Request_Detail {
    if (!_cached_decoder_for_Request_Detail) { _cached_decoder_for_Request_Detail = $._decode_inextensible_choice<Request_Detail>({
    "UNIVERSAL 5": [ "otherRequests", $._decodeNull ],
    "CONTEXT 38": [ "createProgramInvocation", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<CS_CreateProgramInvocation_Request>(() => _decode_CS_CreateProgramInvocation_Request)(el)) ],
    "CONTEXT 40": [ "start", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<CS_Start_Request>(() => _decode_CS_Start_Request)(el)) ],
    "CONTEXT 42": [ "resume", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<CS_Resume_Request>(() => _decode_CS_Resume_Request)(el)) ],
    "CONTEXT 47": [ "defineEventCondition", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<CS_DefineEventCondition_Request>(() => _decode_CS_DefineEventCondition_Request)(el)) ],
    "CONTEXT 51": [ "alterEventConditionMonitoring", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<CS_AlterEventConditionMonitoring_Request>(() => _decode_CS_AlterEventConditionMonitoring_Request)(el)) ],
    "CONTEXT 57": [ "defineEventEnrollment", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<CS_DefineEventEnrollment_Request>(() => _decode_CS_DefineEventEnrollment_Request)(el)) ],
    "CONTEXT 59": [ "alterEventEnrollment", (el: _Element) => ((el.construction === _Construction.primitive && el.value.length === 0)
        ? $._decode_implicit<NULL>(() => $._decodeNull)(el)
        : $._decode_implicit<CS_AlterEventEnrollment_Request>(() => _decode_CS_AlterEventEnrollment_Request)(el)) ]
}); }
    return _cached_decoder_for_Request_Detail(el);
}

let _cached_encoder_for_Request_Detail: $.ASN1Encoder<Request_Detail> | null = null;

/**
 * @summary Encodes a(n) Request_Detail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request_Detail, encoded as an ASN.1 Element.
 */
export
function _encode_Request_Detail (value: Request_Detail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Request_Detail) { _cached_encoder_for_Request_Detail = $._encode_choice<Request_Detail>({
    "otherRequests": $._encodeNull,
    "createProgramInvocation": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 38, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 38, () => _encode_CS_CreateProgramInvocation_Request, $.BER)(value, elGetter)),
    "start": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 40, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 40, () => _encode_CS_Start_Request, $.BER)(value, elGetter)),
    "resume": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 42, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 42, () => _encode_CS_Resume_Request, $.BER)(value, elGetter)),
    "defineEventCondition": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 47, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 47, () => _encode_CS_DefineEventCondition_Request, $.BER)(value, elGetter)),
    "alterEventConditionMonitoring": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 51, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 51, () => _encode_CS_AlterEventConditionMonitoring_Request, $.BER)(value, elGetter)),
    "defineEventEnrollment": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 57, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 57, () => _encode_CS_DefineEventEnrollment_Request, $.BER)(value, elGetter)),
    "alterEventEnrollment": (value: any, elGetter: $.ASN1Encoder<any>): _Element => (value === null
        ? $._encode_implicit(_TagClass.context, 59, () => $._encodeNull, $.BER)(value, elGetter)
        : $._encode_implicit(_TagClass.context, 59, () => _encode_CS_AlterEventEnrollment_Request, $.BER)(value, elGetter)),
}, $.BER); }
    return _cached_encoder_for_Request_Detail(value, elGetter);
}


/* eslint-enable */
