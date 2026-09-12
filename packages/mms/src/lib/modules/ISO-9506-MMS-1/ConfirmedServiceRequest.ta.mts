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
import { AdditionalService_Request, _decode_AdditionalService_Request, _encode_AdditionalService_Request } from "../ISO-9506-MMS-1/AdditionalService-Request.ta.mjs";
// export { AdditionalService_Request, _decode_AdditionalService_Request, _encode_AdditionalService_Request } from "../ISO-9506-MMS-1/AdditionalService-Request.ta.mjs";
import { GetDataExchangeAttributes_Request, _decode_GetDataExchangeAttributes_Request, _encode_GetDataExchangeAttributes_Request } from "../ISO-9506-MMS-1/GetDataExchangeAttributes-Request.ta.mjs";
// export { GetDataExchangeAttributes_Request, _decode_GetDataExchangeAttributes_Request, _encode_GetDataExchangeAttributes_Request } from "../ISO-9506-MMS-1/GetDataExchangeAttributes-Request.ta.mjs";
import { ExchangeData_Request, _decode_ExchangeData_Request, _encode_ExchangeData_Request } from "../ISO-9506-MMS-1/ExchangeData-Request.ta.mjs";
// export { ExchangeData_Request, _decode_ExchangeData_Request, _encode_ExchangeData_Request } from "../ISO-9506-MMS-1/ExchangeData-Request.ta.mjs";
import { DefineAccessControlList_Request, _decode_DefineAccessControlList_Request, _encode_DefineAccessControlList_Request } from "../ISO-9506-MMS-1/DefineAccessControlList-Request.ta.mjs";
// export { DefineAccessControlList_Request, _decode_DefineAccessControlList_Request, _encode_DefineAccessControlList_Request } from "../ISO-9506-MMS-1/DefineAccessControlList-Request.ta.mjs";
import { GetAccessControlListAttributes_Request, _decode_GetAccessControlListAttributes_Request, _encode_GetAccessControlListAttributes_Request } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Request.ta.mjs";
// export { GetAccessControlListAttributes_Request, _decode_GetAccessControlListAttributes_Request, _encode_GetAccessControlListAttributes_Request } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Request.ta.mjs";
import { ReportAccessControlledObjects_Request, _decode_ReportAccessControlledObjects_Request, _encode_ReportAccessControlledObjects_Request } from "../ISO-9506-MMS-1/ReportAccessControlledObjects-Request.ta.mjs";
// export { ReportAccessControlledObjects_Request, _decode_ReportAccessControlledObjects_Request, _encode_ReportAccessControlledObjects_Request } from "../ISO-9506-MMS-1/ReportAccessControlledObjects-Request.ta.mjs";
import { DeleteAccessControlList_Request, _decode_DeleteAccessControlList_Request, _encode_DeleteAccessControlList_Request } from "../ISO-9506-MMS-1/DeleteAccessControlList-Request.ta.mjs";
// export { DeleteAccessControlList_Request, _decode_DeleteAccessControlList_Request, _encode_DeleteAccessControlList_Request } from "../ISO-9506-MMS-1/DeleteAccessControlList-Request.ta.mjs";
import { ChangeAccessControl_Request, _decode_ChangeAccessControl_Request, _encode_ChangeAccessControl_Request } from "../ISO-9506-MMS-1/ChangeAccessControl-Request.ta.mjs";
// export { ChangeAccessControl_Request, _decode_ChangeAccessControl_Request, _encode_ChangeAccessControl_Request } from "../ISO-9506-MMS-1/ChangeAccessControl-Request.ta.mjs";


/**
 * @summary ConfirmedServiceRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfirmedServiceRequest  ::=  CHOICE {
 *     additionalService   [78] AdditionalService-Request,
 *     -- choice [79] is reserved
 *     getDataExchangeAttributes   [80] GetDataExchangeAttributes-Request,
 *     -- Shall not appear in minor version 1
 *     exchangeData    [81] IMPLICIT ExchangeData-Request,
 *     -- Shall not appear in minor version 1
 *     defineAccessControlList [82] IMPLICIT DefineAccessControlList-Request,
 *     -- Shall not appear in minor version 1 or 2
 *     getAccessControlListAttributes  [83] GetAccessControlListAttributes-Request,
 *     -- Shall not appear in minor version 1 or 2
 *     reportAccessControlledObjects   [84] IMPLICIT ReportAccessControlledObjects-Request,
 *     -- Shall not appear in minor version 1 or 2
 *     deleteAccessControlList [85] IMPLICIT DeleteAccessControlList-Request,
 *     -- Shall not appear in minor version 1 or 2
 *     changeAccessControl [86] IMPLICIT ChangeAccessControl-Request,
 *     -- Shall not appear in minor version 1 or 2
 *     ...
 * }
 * ```
 */
export
type ConfirmedServiceRequest =
    { additionalService: AdditionalService_Request } /* CHOICE_ALT_ROOT */
    | { getDataExchangeAttributes: GetDataExchangeAttributes_Request } /* CHOICE_ALT_ROOT */
    | { exchangeData: ExchangeData_Request } /* CHOICE_ALT_ROOT */
    | { defineAccessControlList: DefineAccessControlList_Request } /* CHOICE_ALT_ROOT */
    | { getAccessControlListAttributes: GetAccessControlListAttributes_Request } /* CHOICE_ALT_ROOT */
    | { reportAccessControlledObjects: ReportAccessControlledObjects_Request } /* CHOICE_ALT_ROOT */
    | { deleteAccessControlList: DeleteAccessControlList_Request } /* CHOICE_ALT_ROOT */
    | { changeAccessControl: ChangeAccessControl_Request } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ConfirmedServiceRequest: $.ASN1Decoder<ConfirmedServiceRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfirmedServiceRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfirmedServiceRequest (el: _Element): ConfirmedServiceRequest {
    if (!_cached_decoder_for_ConfirmedServiceRequest) { _cached_decoder_for_ConfirmedServiceRequest = $._decode_extensible_choice<ConfirmedServiceRequest>({
    "CONTEXT 78": [ "additionalService", $._decode_implicit<AdditionalService_Request>(() => _decode_AdditionalService_Request) ],
    "CONTEXT 80": [ "getDataExchangeAttributes", $._decode_explicit<GetDataExchangeAttributes_Request>(() => _decode_GetDataExchangeAttributes_Request) ],
    "CONTEXT 81": [ "exchangeData", $._decode_implicit<ExchangeData_Request>(() => _decode_ExchangeData_Request) ],
    "CONTEXT 82": [ "defineAccessControlList", $._decode_implicit<DefineAccessControlList_Request>(() => _decode_DefineAccessControlList_Request) ],
    "CONTEXT 83": [ "getAccessControlListAttributes", $._decode_explicit<GetAccessControlListAttributes_Request>(() => _decode_GetAccessControlListAttributes_Request) ],
    "CONTEXT 84": [ "reportAccessControlledObjects", $._decode_implicit<ReportAccessControlledObjects_Request>(() => _decode_ReportAccessControlledObjects_Request) ],
    "CONTEXT 85": [ "deleteAccessControlList", $._decode_explicit<DeleteAccessControlList_Request>(() => _decode_DeleteAccessControlList_Request) ],
    "CONTEXT 86": [ "changeAccessControl", $._decode_implicit<ChangeAccessControl_Request>(() => _decode_ChangeAccessControl_Request) ]
}); }
    return _cached_decoder_for_ConfirmedServiceRequest(el);
}

let _cached_encoder_for_ConfirmedServiceRequest: $.ASN1Encoder<ConfirmedServiceRequest> | null = null;

/**
 * @summary Encodes a(n) ConfirmedServiceRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfirmedServiceRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ConfirmedServiceRequest (value: ConfirmedServiceRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfirmedServiceRequest) { _cached_encoder_for_ConfirmedServiceRequest = $._encode_choice<ConfirmedServiceRequest>({
    "additionalService": $._encode_implicit(_TagClass.context, 78, () => _encode_AdditionalService_Request, $.BER),
    "getDataExchangeAttributes": $._encode_explicit(_TagClass.context, 80, () => _encode_GetDataExchangeAttributes_Request, $.BER),
    "exchangeData": $._encode_implicit(_TagClass.context, 81, () => _encode_ExchangeData_Request, $.BER),
    "defineAccessControlList": $._encode_implicit(_TagClass.context, 82, () => _encode_DefineAccessControlList_Request, $.BER),
    "getAccessControlListAttributes": $._encode_explicit(_TagClass.context, 83, () => _encode_GetAccessControlListAttributes_Request, $.BER),
    "reportAccessControlledObjects": $._encode_implicit(_TagClass.context, 84, () => _encode_ReportAccessControlledObjects_Request, $.BER),
    "deleteAccessControlList": $._encode_explicit(_TagClass.context, 85, () => _encode_DeleteAccessControlList_Request, $.BER),
    "changeAccessControl": $._encode_implicit(_TagClass.context, 86, () => _encode_ChangeAccessControl_Request, $.BER),
}, $.BER); }
    return _cached_encoder_for_ConfirmedServiceRequest(value, elGetter);
}


/* eslint-enable */
