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
import { AdditionalService_Response, _decode_AdditionalService_Response, _encode_AdditionalService_Response } from "../ISO-9506-MMS-1/AdditionalService-Response.ta.mjs";
// export { AdditionalService_Response, _decode_AdditionalService_Response, _encode_AdditionalService_Response } from "../ISO-9506-MMS-1/AdditionalService-Response.ta.mjs";
import { GetDataExchangeAttributes_Response, _decode_GetDataExchangeAttributes_Response, _encode_GetDataExchangeAttributes_Response } from "../ISO-9506-MMS-1/GetDataExchangeAttributes-Response.ta.mjs";
// export { GetDataExchangeAttributes_Response, _decode_GetDataExchangeAttributes_Response, _encode_GetDataExchangeAttributes_Response } from "../ISO-9506-MMS-1/GetDataExchangeAttributes-Response.ta.mjs";
import { ExchangeData_Response, _decode_ExchangeData_Response, _encode_ExchangeData_Response } from "../ISO-9506-MMS-1/ExchangeData-Response.ta.mjs";
// export { ExchangeData_Response, _decode_ExchangeData_Response, _encode_ExchangeData_Response } from "../ISO-9506-MMS-1/ExchangeData-Response.ta.mjs";
import { DefineAccessControlList_Response, _decode_DefineAccessControlList_Response, _encode_DefineAccessControlList_Response } from "../ISO-9506-MMS-1/DefineAccessControlList-Response.ta.mjs";
// export { DefineAccessControlList_Response, _decode_DefineAccessControlList_Response, _encode_DefineAccessControlList_Response } from "../ISO-9506-MMS-1/DefineAccessControlList-Response.ta.mjs";
import { GetAccessControlListAttributes_Response, _decode_GetAccessControlListAttributes_Response, _encode_GetAccessControlListAttributes_Response } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Response.ta.mjs";
// export { GetAccessControlListAttributes_Response, _decode_GetAccessControlListAttributes_Response, _encode_GetAccessControlListAttributes_Response } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Response.ta.mjs";
import { ReportAccessControlledObjects_Response, _decode_ReportAccessControlledObjects_Response, _encode_ReportAccessControlledObjects_Response } from "../ISO-9506-MMS-1/ReportAccessControlledObjects-Response.ta.mjs";
// export { ReportAccessControlledObjects_Response, _decode_ReportAccessControlledObjects_Response, _encode_ReportAccessControlledObjects_Response } from "../ISO-9506-MMS-1/ReportAccessControlledObjects-Response.ta.mjs";
import { DeleteAccessControlList_Response, _decode_DeleteAccessControlList_Response, _encode_DeleteAccessControlList_Response } from "../ISO-9506-MMS-1/DeleteAccessControlList-Response.ta.mjs";
// export { DeleteAccessControlList_Response, _decode_DeleteAccessControlList_Response, _encode_DeleteAccessControlList_Response } from "../ISO-9506-MMS-1/DeleteAccessControlList-Response.ta.mjs";
import { ChangeAccessControl_Response, _decode_ChangeAccessControl_Response, _encode_ChangeAccessControl_Response } from "../ISO-9506-MMS-1/ChangeAccessControl-Response.ta.mjs";
// export { ChangeAccessControl_Response, _decode_ChangeAccessControl_Response, _encode_ChangeAccessControl_Response } from "../ISO-9506-MMS-1/ChangeAccessControl-Response.ta.mjs";


/**
 * @summary ConfirmedServiceResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfirmedServiceResponse  ::=  CHOICE {
 *     / *
 *     status   [0] IMPLICIT Status-Response,
 *     status   [0] IMPLICIT RejectPDU,
 *     getNameList   [1] IMPLICIT GetNameList-Response,
 *     getNameList   [1] IMPLICIT RejectPDU,
 *     identify   [2] IMPLICIT Identify-Response,
 *     identify   [2] IMPLICIT RejectPDU,
 *     rename   [3] IMPLICIT Rename-Response,
 *     rename   [3] IMPLICIT RejectPDU,
 *     read   [4] IMPLICIT Read-Response,
 *     read   [4] IMPLICIT RejectPDU,
 *     write   [5] IMPLICIT Write-Response,
 *     write   [5] IMPLICIT RejectPDU,
 *     getVariableAccessAttributes   [6] IMPLICIT GetVariableAccessAttributes-Response,
 *     getVariableAccessAttributes   [6] IMPLICIT RejectPDU,
 *     defineNamedVariable   [7] IMPLICIT DefineNamedVariable-Response,
 *     defineNamedVariable   [7] IMPLICIT RejectPDU,
 *     defineScatteredAccess   [8] IMPLICIT DefineScatteredAccess-Response,
 *     defineScatteredAccess   [8] IMPLICIT RejectPDU,
 *     getScatteredAccessAttributes   [9] IMPLICIT GetScatteredAccessAttributes-Response,
 *     getScatteredAccessAttributes   [9] IMPLICIT RejectPDU,
 *     deleteVariableAccess   [10] IMPLICIT DeleteVariableAccess-Response,
 *     deleteVariableAccess   [10] IMPLICIT RejectPDU,
 *     defineNamedVariableList   [11] IMPLICIT DefineNamedVariableList-Response,
 *     defineNamedVariableList   [11] IMPLICIT RejectPDU,
 *     getNamedVariableListAttributes   [12] IMPLICIT GetNamedVariableListAttributes-Response,
 *     getNamedVariableListAttributes   [12] IMPLICIT RejectPDU,
 *     deleteNamedVariableList   [13] IMPLICIT DeleteNamedVariableList-Response,
 *     deleteNamedVariableList   [13] IMPLICIT RejectPDU,
 *     defineNamedType   [14] IMPLICIT DefineNamedType-Response,
 *     defineNamedType   [14] IMPLICIT RejectPDU,
 *     getNamedTypeAttributes  [15] IMPLICIT GetNamedTypeAttributes-Response,
 *     getNamedTypeAttributes   [15] IMPLICIT RejectPDU,
 *     deleteNamedType   [16] IMPLICIT DeleteNamedType-Response,
 *     deleteNamedType   [16] IMPLICIT RejectPDU,
 *     input   [17] IMPLICIT Input-Response,
 *     output   [18] IMPLICIT Output-Response,
 *     output   [18] IMPLICIT RejectPDU,
 *     takeControl   [19] TakeControl-Response,
 *     takeControl   [19] TakeControl-Response,
 *     relinquishControl   [20] IMPLICIT RelinquishControl-Response,
 *     relinquishControl   [20] IMPLICIT RejectPDU,
 *     relinquishControl [20] IMPLICIT RejectPDU,
 *     defineSemaphore   [21] IMPLICIT DefineSemaphore-Response,
 *     defineSemaphore   [21] IMPLICIT RejectPDU,
 *     deleteSemaphore   [22] IMPLICIT DeleteSemaphore-Response,
 *     deleteSemaphore   [22] IMPLICIT RejectPDU,
 *     reportSemaphoreStatus   [23] IMPLICIT ReportSemaphoreStatus-Response,
 *     reportSemaphoreStatus   [23] IMPLICIT RejectPDU,
 *     reportPoolSemaphoreStatus   [24] IMPLICIT ReportPoolSemaphoreStatus-Response,
 *     reportPoolSemaphoreStatus   [24] IMPLICIT RejectPDU,
 *     reportSemaphoreEntryStatus  [25] IMPLICIT ReportSemaphoreEntryStatus-Response,
 *     reportSemaphoreEntryStatus  [25] IMPLICIT RejectPDU,
 *     initiateDownloadSequence    [26] IMPLICIT InitiateDownloadSequence-Response,
 *     initiateDownloadSequence    [26] IMPLICIT RejectPDU,
 *     downloadSegment  [27] IMPLICIT DownloadSegment-Response,
 *     downloadSegment  [27] IMPLICIT RejectPDU,
 *     terminateDownloadSequence   [28] IMPLICIT TerminateDownloadSequence-Response,
 *     terminateDownloadSequence   [28] IMPLICIT RejectPDU,
 *     initiateUploadSequence  [29] IMPLICIT InitiateUploadSequence-Response,
 *     initiateUploadSequence  [29] IMPLICIT RejectPDU,
 *     uploadSegment       [30] IMPLICIT UploadSegment-Response,
 *     uploadSegment       [30] IMPLICIT RejectPDU,
 *     terminateUploadSequence  [31] IMPLICIT TerminateUploadSequence-Response,  
 *     terminateUploadSequence  [31] IMPLICIT RejectPDU,
 *     requestDomainDownload    [32] IMPLICIT RequestDomainDownload-Response,
 *     requestDomainDownload    [32] IMPLICIT RejectPDU,
 *     requestDomainUpload  [33] IMPLICIT RequestDomainUpload-Response,
 *     requestDomainUpload  [33] IMPLICIT RejectPDU,
 *     loadDomainContent    [34] IMPLICIT LoadDomainContent-Response,
 *     loadDomainContent    [34] IMPLICIT RejectPDU,
 *     storeDomainContent   [35] IMPLICIT StoreDomainContent-Response,
 *     storeDomainContent   [35] IMPLICIT RejectPDU,
 *     deleteDomain   [36] IMPLICIT DeleteDomain-Response,
 *     deleteDomain   [36] IMPLICIT RejectPDU,
 *     getDomainAttributes   [37] IMPLICIT GetDomainAttributes-Response,
 *     getDomainAttributes   [37] IMPLICIT RejectPDU,
 *     createProgramInvocation   [38] IMPLICIT CreateProgramInvocation-Response,
 *     createProgramInvocation   [38] IMPLICIT RejectPDU,
 *     deleteProgramInvocation   [39] IMPLICIT DeleteProgramInvocation-Response,
 *     deleteProgramInvocation   [39] IMPLICIT RejectPDU,
 *     start   [40] IMPLICIT Start-Response,
 *     start   [40] IMPLICIT RejectPDU,
 *     stop   [41] IMPLICIT Stop-Response,
 *     stop   [41] IMPLICIT RejectPDU,
 *     resume   [42] IMPLICIT Resume-Response,
 *     resume   [42] IMPLICIT RejectPDU,
 *     reset   [43] IMPLICIT Reset-Response,
 *     reset   [43] IMPLICIT RejectPDU,
 *     kill   [44] IMPLICIT Kill-Response,
 *     kill   [44] IMPLICIT RejectPDU,
 *     getProgramInvocationAttributes   [45] IMPLICIT GetProgramInvocationAttributes-Response,
 *     getProgramInvocationAttributes   [45] IMPLICIT RejectPDU,
 *     obtainFile   [46] IMPLICIT ObtainFile-Response,
 *     obtainFile   [46] IMPLICIT RejectPDU,
 *     defineEventCondition   [47] IMPLICIT DefineEventCondition-Response,
 *     defineEventCondition   [47] IMPLICIT RejectPDU,
 *     deleteEventCondition   [48] IMPLICIT DeleteEventCondition-Response,
 *     getEventConditionAttributes   [49] IMPLICIT GetEventConditionAttributes-Response,
 *     getEventConditionAttributes   [49] IMPLICIT RejectPDU,
 *     reportEventConditionStatus   [50] IMPLICIT ReportEventConditionStatus-Response,
 *     reportEventConditionStatus   [50] IMPLICIT RejectPDU,
 *     alterEventConditionMonitoring   [51] IMPLICIT AlterEventConditionMonitoring-Response,
 *     alterEventConditionMonitoring   [51] IMPLICIT RejectPDU,
 *     triggerEvent   [52] IMPLICIT TriggerEvent-Response,
 *     triggerEvent   [52] IMPLICIT RejectPDU,
 *     defineEventAction   [53] IMPLICIT DefineEventAction-Response,
 *     defineEventAction   [53] IMPLICIT RejectPDU,
 *     deleteEventAction   [54] IMPLICIT DeleteEventAction-Response,
 *     deleteEventAction   [54] IMPLICIT RejectPDU,
 *     getEventActionAttributes   [55] IMPLICIT GetEventActionAttributes-Response,
 *     getEventActionAttributes   [55] IMPLICIT RejectPDU,
 *     reportEventActionStatus   [56] IMPLICIT ReportEventActionStatus-Response,
 *     reportEventActionStatus   [56] IMPLICIT RejectPDU,
 *     defineEventEnrollment [57] IMPLICIT DefineEventEnrollment-Response,
 *     defineEventEnrollment [57] IMPLICIT RejectPDU,
 *     deleteEventEnrollment [58] IMPLICIT DeleteEventEnrollment-Response,
 *     deleteEventEnrollment [58] IMPLICIT RejectPDU,
 *     alterEventEnrollment [59] IMPLICIT AlterEventEnrollment-Response,
 *     alterEventEnrollment [59] IMPLICIT RejectPDU,
 *     reportEventEnrollmentStatus [60] IMPLICIT ReportEventEnrollmentStatus-Response,
 *     reportEventEnrollmentStatus [60] IMPLICIT RejectPDU,
 *     getEventEnrollmentAttributes [61] IMPLICIT GetEventEnrollmentAttributes-Response,
 *     getEventEnrollmentAttributes [61] IMPLICIT RejectPDU,
 *     acknowledgeEventNotification [62] IMPLICIT AcknowledgeEventNotification-Response,
 *     acknowledgeEventNotification [62] IMPLICIT RejectPDU,
 *     getAlarmSummary [63] IMPLICIT GetAlarmSummary-Response,
 *     getAlarmSummary [63] IMPLICIT RejectPDU,
 *     getAlarmEnrollmentSummary [64] IMPLICIT GetAlarmEnrollmentSummary-Response,
 *     getAlarmEnrollmentSummary [64] IMPLICIT RejectPDU,
 *     readJournal [65] IMPLICIT ReadJournal-Response,
 *     readJournal [65] IMPLICIT RejectPDU,
 *     writeJournal [66] IMPLICIT WriteJournal-Response,
 *     writeJournal [66] IMPLICIT RejectPDU,
 *     initializeJournal [67] IMPLICIT InitializeJournal-Response,
 *     initializeJournal [67] IMPLICIT RejectPDU,
 *     reportJournalStatus [68] IMPLICIT ReportJournalStatus-Response,
 *     reportJournalStatus [68] IMPLICIT RejectPDU,
 *     createJournal [69] IMPLICIT CreateJournal-Response,
 *     createJournal [69] IMPLICIT RejectPDU,
 *     deleteJournal [70] IMPLICIT DeleteJournal-Response,
 *     deleteJournal [70] IMPLICIT RejectPDU,
 *     getCapabilityList [71] IMPLICIT GetCapabilityList-Response,
 *     getCapabilityList [71] IMPLICIT RejectPDU,
 * -- choices [72] through [77] are reserved for use by services
 * -- defined in annex D
 *     fileOpen [72] IMPLICIT FileOpen-Response,
 *     fileOpen [72] IMPLICIT RejectPDU,
 *     fileRead [73] IMPLICIT FileRead-Response,
 *     fileRead [73] IMPLICIT RejectPDU,
 *     fileClose [74] IMPLICIT FileClose-Response,
 *     fileClose [74] IMPLICIT RejectPDU,
 *     fileRename [75] IMPLICIT FileRename-Response,
 *     fileRename [75] IMPLICIT RejectPDU,
 *     fileDelete [76] IMPLICIT FileDelete-Response,
 *     fileDelete [76] IMPLICIT RejectPDU,
 *     fileDirectory [77] IMPLICIT FileDirectory-Response,
 *     fileDirectory [77] IMPLICIT RejectPDU,
 *     ...,
 *     * /
 *     additionalService [78] AdditionalService-Response,
 *     -- choice [79] is reserved
 *     getDataExchangeAttributes [80] GetDataExchangeAttributes-Response,
 *     -- Shall not appear in minor version 1
 *     exchangeData [81] IMPLICIT ExchangeData-Response,
 *     -- Shall not appear in minor version 1
 *     defineAccessControlList [82] IMPLICIT DefineAccessControlList-Response,
 *     -- Shall not appear in minor version 1 or 2
 *     getAccessControlListAttributes [83] IMPLICIT GetAccessControlListAttributes-Response,
 *     -- Shall not appear in minor version 1 or 2
 *     reportAccessControlledObjects [84] IMPLICIT ReportAccessControlledObjects-Response,
 *     -- Shall not appear in minor version 1 or 2
 *     deleteAccessControlList [85] IMPLICIT DeleteAccessControlList-Response,
 *     -- Shall not appear in minor version 1 or 2
 *     changeAccessControl [86] IMPLICIT ChangeAccessControl-Response,
 *     -- Shall not appear in minor version 1 or 2
 *    ...
 * }
 * ```
 */
export
type ConfirmedServiceResponse =
    { additionalService: AdditionalService_Response } /* CHOICE_ALT_ROOT */
    | { getDataExchangeAttributes: GetDataExchangeAttributes_Response } /* CHOICE_ALT_ROOT */
    | { exchangeData: ExchangeData_Response } /* CHOICE_ALT_ROOT */
    | { defineAccessControlList: DefineAccessControlList_Response } /* CHOICE_ALT_ROOT */
    | { getAccessControlListAttributes: GetAccessControlListAttributes_Response } /* CHOICE_ALT_ROOT */
    | { reportAccessControlledObjects: ReportAccessControlledObjects_Response } /* CHOICE_ALT_ROOT */
    | { deleteAccessControlList: DeleteAccessControlList_Response } /* CHOICE_ALT_ROOT */
    | { changeAccessControl: ChangeAccessControl_Response } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ConfirmedServiceResponse: $.ASN1Decoder<ConfirmedServiceResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfirmedServiceResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfirmedServiceResponse (el: _Element): ConfirmedServiceResponse {
    if (!_cached_decoder_for_ConfirmedServiceResponse) { _cached_decoder_for_ConfirmedServiceResponse = $._decode_extensible_choice<ConfirmedServiceResponse>({
    "CONTEXT 78": [ "additionalService", $._decode_implicit<AdditionalService_Response>(() => _decode_AdditionalService_Response) ],
    "CONTEXT 80": [ "getDataExchangeAttributes", $._decode_implicit<GetDataExchangeAttributes_Response>(() => _decode_GetDataExchangeAttributes_Response) ],
    "CONTEXT 81": [ "exchangeData", $._decode_implicit<ExchangeData_Response>(() => _decode_ExchangeData_Response) ],
    "CONTEXT 82": [ "defineAccessControlList", $._decode_implicit<DefineAccessControlList_Response>(() => _decode_DefineAccessControlList_Response) ],
    "CONTEXT 83": [ "getAccessControlListAttributes", $._decode_implicit<GetAccessControlListAttributes_Response>(() => _decode_GetAccessControlListAttributes_Response) ],
    "CONTEXT 84": [ "reportAccessControlledObjects", $._decode_implicit<ReportAccessControlledObjects_Response>(() => _decode_ReportAccessControlledObjects_Response) ],
    "CONTEXT 85": [ "deleteAccessControlList", $._decode_implicit<DeleteAccessControlList_Response>(() => _decode_DeleteAccessControlList_Response) ],
    "CONTEXT 86": [ "changeAccessControl", $._decode_implicit<ChangeAccessControl_Response>(() => _decode_ChangeAccessControl_Response) ]
}); }
    return _cached_decoder_for_ConfirmedServiceResponse(el);
}

let _cached_encoder_for_ConfirmedServiceResponse: $.ASN1Encoder<ConfirmedServiceResponse> | null = null;

/**
 * @summary Encodes a(n) ConfirmedServiceResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfirmedServiceResponse, encoded as an ASN.1 Element.
 */
export
function _encode_ConfirmedServiceResponse (value: ConfirmedServiceResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfirmedServiceResponse) { _cached_encoder_for_ConfirmedServiceResponse = $._encode_choice<ConfirmedServiceResponse>({
    "additionalService": $._encode_implicit(_TagClass.context, 78, () => _encode_AdditionalService_Response, $.BER),
    "getDataExchangeAttributes": $._encode_implicit(_TagClass.context, 80, () => _encode_GetDataExchangeAttributes_Response, $.BER),
    "exchangeData": $._encode_implicit(_TagClass.context, 81, () => _encode_ExchangeData_Response, $.BER),
    "defineAccessControlList": $._encode_implicit(_TagClass.context, 82, () => _encode_DefineAccessControlList_Response, $.BER),
    "getAccessControlListAttributes": $._encode_implicit(_TagClass.context, 83, () => _encode_GetAccessControlListAttributes_Response, $.BER),
    "reportAccessControlledObjects": $._encode_implicit(_TagClass.context, 84, () => _encode_ReportAccessControlledObjects_Response, $.BER),
    "deleteAccessControlList": $._encode_implicit(_TagClass.context, 85, () => _encode_DeleteAccessControlList_Response, $.BER),
    "changeAccessControl": $._encode_implicit(_TagClass.context, 86, () => _encode_ChangeAccessControl_Response, $.BER),
}, $.BER); }
    return _cached_encoder_for_ConfirmedServiceResponse(value, elGetter);
}


/* eslint-enable */
