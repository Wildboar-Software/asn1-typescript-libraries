/* eslint-disable */
import {
    VisibleString,
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
import { Integer16, _decode_Integer16, _encode_Integer16 } from "../ISO-9506-MMS-1/Integer16.ta.mjs";
// export { Integer16, _decode_Integer16, _encode_Integer16 } from "../ISO-9506-MMS-1/Integer16.ta.mjs";
import { ParameterSupportOptions, _decode_ParameterSupportOptions, _encode_ParameterSupportOptions } from "../MMS-Object-Module-1/ParameterSupportOptions.ta.mjs";
// export { ParameterSupportOptions, ParameterSupportOptions_str1 /* IMPORTED_LONG_NAMED_BIT */, str1 /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_str2 /* IMPORTED_LONG_NAMED_BIT */, str2 /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_vnam /* IMPORTED_LONG_NAMED_BIT */, vnam /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_valt /* IMPORTED_LONG_NAMED_BIT */, valt /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_vadr /* IMPORTED_LONG_NAMED_BIT */, vadr /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_vsca /* IMPORTED_LONG_NAMED_BIT */, vsca /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_tpy /* IMPORTED_LONG_NAMED_BIT */, tpy /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_vlis /* IMPORTED_LONG_NAMED_BIT */, vlis /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_cei /* IMPORTED_LONG_NAMED_BIT */, cei /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_aco /* IMPORTED_LONG_NAMED_BIT */, aco /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_sem /* IMPORTED_LONG_NAMED_BIT */, sem /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_csr /* IMPORTED_LONG_NAMED_BIT */, csr /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_csnc /* IMPORTED_LONG_NAMED_BIT */, csnc /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_csplc /* IMPORTED_LONG_NAMED_BIT */, csplc /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_cspi /* IMPORTED_LONG_NAMED_BIT */, cspi /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_char /* IMPORTED_LONG_NAMED_BIT */, char /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParameterSupportOptions, _encode_ParameterSupportOptions } from "../MMS-Object-Module-1/ParameterSupportOptions.ta.mjs";
import { ServiceSupportOptions, _decode_ServiceSupportOptions, _encode_ServiceSupportOptions } from "../MMS-Object-Module-1/ServiceSupportOptions.ta.mjs";
// export { ServiceSupportOptions, ServiceSupportOptions_status /* IMPORTED_LONG_NAMED_BIT */, status /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getNameList /* IMPORTED_LONG_NAMED_BIT */, getNameList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_identify /* IMPORTED_LONG_NAMED_BIT */, identify /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_rename /* IMPORTED_LONG_NAMED_BIT */, rename /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_read /* IMPORTED_LONG_NAMED_BIT */, read /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_write /* IMPORTED_LONG_NAMED_BIT */, write /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getVariableAccessAttributes /* IMPORTED_LONG_NAMED_BIT */, getVariableAccessAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineNamedVariable /* IMPORTED_LONG_NAMED_BIT */, defineNamedVariable /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineScatteredAccess /* IMPORTED_LONG_NAMED_BIT */, defineScatteredAccess /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getScatteredAccessAttributes /* IMPORTED_LONG_NAMED_BIT */, getScatteredAccessAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteVariableAccess /* IMPORTED_LONG_NAMED_BIT */, deleteVariableAccess /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineNamedVariableList /* IMPORTED_LONG_NAMED_BIT */, defineNamedVariableList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getNamedVariableListAttributes /* IMPORTED_LONG_NAMED_BIT */, getNamedVariableListAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteNamedVariableList /* IMPORTED_LONG_NAMED_BIT */, deleteNamedVariableList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineNamedType /* IMPORTED_LONG_NAMED_BIT */, defineNamedType /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getNamedTypeAttributes /* IMPORTED_LONG_NAMED_BIT */, getNamedTypeAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteNamedType /* IMPORTED_LONG_NAMED_BIT */, deleteNamedType /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_input /* IMPORTED_LONG_NAMED_BIT */, input /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_output /* IMPORTED_LONG_NAMED_BIT */, output /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_takeControl /* IMPORTED_LONG_NAMED_BIT */, takeControl /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_relinquishControl /* IMPORTED_LONG_NAMED_BIT */, relinquishControl /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineSemaphore /* IMPORTED_LONG_NAMED_BIT */, defineSemaphore /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteSemaphore /* IMPORTED_LONG_NAMED_BIT */, deleteSemaphore /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportSemaphoreStatus /* IMPORTED_LONG_NAMED_BIT */, reportSemaphoreStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportPoolSemaphoreStatus /* IMPORTED_LONG_NAMED_BIT */, reportPoolSemaphoreStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportSemaphoreEntryStatus /* IMPORTED_LONG_NAMED_BIT */, reportSemaphoreEntryStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_initiateDownloadSequence /* IMPORTED_LONG_NAMED_BIT */, initiateDownloadSequence /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_downloadSegment /* IMPORTED_LONG_NAMED_BIT */, downloadSegment /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_terminateDownloadSequence /* IMPORTED_LONG_NAMED_BIT */, terminateDownloadSequence /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_initiateUploadSequence /* IMPORTED_LONG_NAMED_BIT */, initiateUploadSequence /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_uploadSegment /* IMPORTED_LONG_NAMED_BIT */, uploadSegment /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_terminateUploadSequence /* IMPORTED_LONG_NAMED_BIT */, terminateUploadSequence /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_requestDomainDownload /* IMPORTED_LONG_NAMED_BIT */, requestDomainDownload /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_requestDomainUpload /* IMPORTED_LONG_NAMED_BIT */, requestDomainUpload /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_loadDomainContent /* IMPORTED_LONG_NAMED_BIT */, loadDomainContent /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_storeDomainContent /* IMPORTED_LONG_NAMED_BIT */, storeDomainContent /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteDomain /* IMPORTED_LONG_NAMED_BIT */, deleteDomain /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getDomainAttributes /* IMPORTED_LONG_NAMED_BIT */, getDomainAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_createProgramInvocation /* IMPORTED_LONG_NAMED_BIT */, createProgramInvocation /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteProgramInvocation /* IMPORTED_LONG_NAMED_BIT */, deleteProgramInvocation /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_start /* IMPORTED_LONG_NAMED_BIT */, start /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_stop /* IMPORTED_LONG_NAMED_BIT */, stop /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_resume /* IMPORTED_LONG_NAMED_BIT */, resume /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reset /* IMPORTED_LONG_NAMED_BIT */, reset /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_kill /* IMPORTED_LONG_NAMED_BIT */, kill /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getProgramInvocationAttributes /* IMPORTED_LONG_NAMED_BIT */, getProgramInvocationAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_obtainFile /* IMPORTED_LONG_NAMED_BIT */, obtainFile /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineEventCondition /* IMPORTED_LONG_NAMED_BIT */, defineEventCondition /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteEventCondition /* IMPORTED_LONG_NAMED_BIT */, deleteEventCondition /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getEventConditionAttributes /* IMPORTED_LONG_NAMED_BIT */, getEventConditionAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportEventConditionStatus /* IMPORTED_LONG_NAMED_BIT */, reportEventConditionStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_alterEventConditionMonitoring /* IMPORTED_LONG_NAMED_BIT */, alterEventConditionMonitoring /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_triggerEvent /* IMPORTED_LONG_NAMED_BIT */, triggerEvent /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineEventAction /* IMPORTED_LONG_NAMED_BIT */, defineEventAction /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteEventAction /* IMPORTED_LONG_NAMED_BIT */, deleteEventAction /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getEventActionAttributes /* IMPORTED_LONG_NAMED_BIT */, getEventActionAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportEventActionStatus /* IMPORTED_LONG_NAMED_BIT */, reportEventActionStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineEventEnrollment /* IMPORTED_LONG_NAMED_BIT */, defineEventEnrollment /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteEventEnrollment /* IMPORTED_LONG_NAMED_BIT */, deleteEventEnrollment /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_alterEventEnrollment /* IMPORTED_LONG_NAMED_BIT */, alterEventEnrollment /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportEventEnrollmentStatus /* IMPORTED_LONG_NAMED_BIT */, reportEventEnrollmentStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getEventEnrollmentAttributes /* IMPORTED_LONG_NAMED_BIT */, getEventEnrollmentAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_acknowledgeEventNotification /* IMPORTED_LONG_NAMED_BIT */, acknowledgeEventNotification /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getAlarmSummary /* IMPORTED_LONG_NAMED_BIT */, getAlarmSummary /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getAlarmEnrollmentSummary /* IMPORTED_LONG_NAMED_BIT */, getAlarmEnrollmentSummary /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_readJournal /* IMPORTED_LONG_NAMED_BIT */, readJournal /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_writeJournal /* IMPORTED_LONG_NAMED_BIT */, writeJournal /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_initializeJournal /* IMPORTED_LONG_NAMED_BIT */, initializeJournal /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportJournalStatus /* IMPORTED_LONG_NAMED_BIT */, reportJournalStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_createJournal /* IMPORTED_LONG_NAMED_BIT */, createJournal /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteJournal /* IMPORTED_LONG_NAMED_BIT */, deleteJournal /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getCapabilityList /* IMPORTED_LONG_NAMED_BIT */, getCapabilityList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileOpen /* IMPORTED_LONG_NAMED_BIT */, fileOpen /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileRead /* IMPORTED_LONG_NAMED_BIT */, fileRead /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileClose /* IMPORTED_LONG_NAMED_BIT */, fileClose /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileRename /* IMPORTED_LONG_NAMED_BIT */, fileRename /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileDelete /* IMPORTED_LONG_NAMED_BIT */, fileDelete /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileDirectory /* IMPORTED_LONG_NAMED_BIT */, fileDirectory /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_unsolicitedStatus /* IMPORTED_LONG_NAMED_BIT */, unsolicitedStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_informationReport /* IMPORTED_LONG_NAMED_BIT */, informationReport /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_eventNotification /* IMPORTED_LONG_NAMED_BIT */, eventNotification /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_attachToEventCondition /* IMPORTED_LONG_NAMED_BIT */, attachToEventCondition /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_attachToSemaphore /* IMPORTED_LONG_NAMED_BIT */, attachToSemaphore /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_conclude /* IMPORTED_LONG_NAMED_BIT */, conclude /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_cancel /* IMPORTED_LONG_NAMED_BIT */, cancel /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getDataExchangeAttributes /* IMPORTED_LONG_NAMED_BIT */, getDataExchangeAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_exchangeData /* IMPORTED_LONG_NAMED_BIT */, exchangeData /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineAccessControlList /* IMPORTED_LONG_NAMED_BIT */, defineAccessControlList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getAccessControlListAttributes /* IMPORTED_LONG_NAMED_BIT */, getAccessControlListAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportAccessControlledObjects /* IMPORTED_LONG_NAMED_BIT */, reportAccessControlledObjects /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteAccessControlList /* IMPORTED_LONG_NAMED_BIT */, deleteAccessControlList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_alterAccessControl /* IMPORTED_LONG_NAMED_BIT */, alterAccessControl /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reconfigureProgramInvocation /* IMPORTED_LONG_NAMED_BIT */, reconfigureProgramInvocation /* IMPORTED_SHORT_NAMED_BIT */, _decode_ServiceSupportOptions, _encode_ServiceSupportOptions } from "../MMS-Object-Module-1/ServiceSupportOptions.ta.mjs";
import { AdditionalSupportOptions, _decode_AdditionalSupportOptions, _encode_AdditionalSupportOptions } from "../MMS-Object-Module-1/AdditionalSupportOptions.ta.mjs";
// export { AdditionalSupportOptions, AdditionalSupportOptions_vMDStop /* IMPORTED_LONG_NAMED_BIT */, vMDStop /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_vMDReset /* IMPORTED_LONG_NAMED_BIT */, vMDReset /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_select /* IMPORTED_LONG_NAMED_BIT */, select /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_alterProgramInvocationAttributes /* IMPORTED_LONG_NAMED_BIT */, alterProgramInvocationAttributes /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_initiateUnitControlLoad /* IMPORTED_LONG_NAMED_BIT */, initiateUnitControlLoad /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_unitControlLoadSegment /* IMPORTED_LONG_NAMED_BIT */, unitControlLoadSegment /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_unitControlUpload /* IMPORTED_LONG_NAMED_BIT */, unitControlUpload /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_startUnitControl /* IMPORTED_LONG_NAMED_BIT */, startUnitControl /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_stopUnitControl /* IMPORTED_LONG_NAMED_BIT */, stopUnitControl /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_createUnitControl /* IMPORTED_LONG_NAMED_BIT */, createUnitControl /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_addToUnitControl /* IMPORTED_LONG_NAMED_BIT */, addToUnitControl /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_removeFromUnitControl /* IMPORTED_LONG_NAMED_BIT */, removeFromUnitControl /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_getUnitControlAttributes /* IMPORTED_LONG_NAMED_BIT */, getUnitControlAttributes /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_loadUnitControlFromFile /* IMPORTED_LONG_NAMED_BIT */, loadUnitControlFromFile /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_storeUnitControlToFile /* IMPORTED_LONG_NAMED_BIT */, storeUnitControlToFile /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_deleteUnitControl /* IMPORTED_LONG_NAMED_BIT */, deleteUnitControl /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_defineEventConditionList /* IMPORTED_LONG_NAMED_BIT */, defineEventConditionList /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_deleteEventConditionList /* IMPORTED_LONG_NAMED_BIT */, deleteEventConditionList /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_addEventConditionListReference /* IMPORTED_LONG_NAMED_BIT */, addEventConditionListReference /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_removeEventConditionListReference /* IMPORTED_LONG_NAMED_BIT */, removeEventConditionListReference /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_getEventConditionListAttributes /* IMPORTED_LONG_NAMED_BIT */, getEventConditionListAttributes /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_reportEventConditionListStatus /* IMPORTED_LONG_NAMED_BIT */, reportEventConditionListStatus /* IMPORTED_SHORT_NAMED_BIT */, AdditionalSupportOptions_alterEventConditionListMonitoring /* IMPORTED_LONG_NAMED_BIT */, alterEventConditionListMonitoring /* IMPORTED_SHORT_NAMED_BIT */, _decode_AdditionalSupportOptions, _encode_AdditionalSupportOptions } from "../MMS-Object-Module-1/AdditionalSupportOptions.ta.mjs";
import { AdditionalCBBOptions, _decode_AdditionalCBBOptions, _encode_AdditionalCBBOptions } from "../MMS-Object-Module-1/AdditionalCBBOptions.ta.mjs";
// export { AdditionalCBBOptions, AdditionalCBBOptions_des /* IMPORTED_LONG_NAMED_BIT */, des /* IMPORTED_SHORT_NAMED_BIT */, AdditionalCBBOptions_dei /* IMPORTED_LONG_NAMED_BIT */, dei /* IMPORTED_SHORT_NAMED_BIT */, AdditionalCBBOptions_recl /* IMPORTED_LONG_NAMED_BIT */, recl /* IMPORTED_SHORT_NAMED_BIT */, _decode_AdditionalCBBOptions, _encode_AdditionalCBBOptions } from "../MMS-Object-Module-1/AdditionalCBBOptions.ta.mjs";


/**
 * @summary Initiate_ResponsePDU_initResponseDetail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiate-ResponsePDU-initResponseDetail ::= SEQUENCE {
 *     negotiatedVersionNumber [0] IMPLICIT Integer16,
 *     negotiatedParameterCBB [1] IMPLICIT ParameterSupportOptions,
 *     servicesSupportedCalled [2] IMPLICIT ServiceSupportOptions,
 *     ...,
 *     additionalSupportedCalled [3] IMPLICIT AdditionalSupportOptions,
 *     additionalCbbSupportedCalled [4] IMPLICIT AdditionalCBBOptions,
 *     privilegeClassIdentityCalled [5] IMPLICIT VisibleString
 * }
 * ```
 * 
 * @class
 */
export
class Initiate_ResponsePDU_initResponseDetail {
    constructor (
        /**
         * @summary `negotiatedVersionNumber`.
         * @public
         * @readonly
         */
        readonly negotiatedVersionNumber: Integer16,
        /**
         * @summary `negotiatedParameterCBB`.
         * @public
         * @readonly
         */
        readonly negotiatedParameterCBB: ParameterSupportOptions,
        /**
         * @summary `servicesSupportedCalled`.
         * @public
         * @readonly
         */
        readonly servicesSupportedCalled: ServiceSupportOptions,
        /**
         * @summary `additionalSupportedCalled`.
         * @public
         * @readonly
         */
        readonly additionalSupportedCalled: AdditionalSupportOptions,
        /**
         * @summary `additionalCbbSupportedCalled`.
         * @public
         * @readonly
         */
        readonly additionalCbbSupportedCalled: AdditionalCBBOptions,
        /**
         * @summary `privilegeClassIdentityCalled`.
         * @public
         * @readonly
         */
        readonly privilegeClassIdentityCalled: VisibleString,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a Initiate_ResponsePDU_initResponseDetail
     * @description
     * 
     * This takes an `object` and converts it to a `Initiate_ResponsePDU_initResponseDetail`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Initiate_ResponsePDU_initResponseDetail`.
     * @returns {Initiate_ResponsePDU_initResponseDetail}
     */
    public static _from_object (_o: { [_K in keyof (Initiate_ResponsePDU_initResponseDetail)]: (Initiate_ResponsePDU_initResponseDetail)[_K] }): Initiate_ResponsePDU_initResponseDetail {
        return new Initiate_ResponsePDU_initResponseDetail(_o.negotiatedVersionNumber, _o.negotiatedParameterCBB, _o.servicesSupportedCalled, _o.additionalSupportedCalled, _o.additionalCbbSupportedCalled, _o.privilegeClassIdentityCalled, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Initiate_ResponsePDU_initResponseDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Initiate_ResponsePDU_initResponseDetail: $.ComponentSpec[] = [
    new $.ComponentSpec("negotiatedVersionNumber", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("negotiatedParameterCBB", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("servicesSupportedCalled", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Initiate_ResponsePDU_initResponseDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Initiate_ResponsePDU_initResponseDetail: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Initiate_ResponsePDU_initResponseDetail
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Initiate_ResponsePDU_initResponseDetail: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalSupportedCalled", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("additionalCbbSupportedCalled", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("privilegeClassIdentityCalled", false, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_Initiate_ResponsePDU_initResponseDetail: $.ASN1Decoder<Initiate_ResponsePDU_initResponseDetail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Initiate_ResponsePDU_initResponseDetail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Initiate_ResponsePDU_initResponseDetail (el: _Element): Initiate_ResponsePDU_initResponseDetail {
    if (!_cached_decoder_for_Initiate_ResponsePDU_initResponseDetail) { _cached_decoder_for_Initiate_ResponsePDU_initResponseDetail = function (el: _Element): Initiate_ResponsePDU_initResponseDetail {
    let negotiatedVersionNumber!: Integer16;
    let negotiatedParameterCBB!: ParameterSupportOptions;
    let servicesSupportedCalled!: ServiceSupportOptions;
    let additionalSupportedCalled!: AdditionalSupportOptions;
    let additionalCbbSupportedCalled!: AdditionalCBBOptions;
    let privilegeClassIdentityCalled!: VisibleString;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "negotiatedVersionNumber": (_el: _Element): void => { negotiatedVersionNumber = $._decode_implicit<Integer16>(() => _decode_Integer16)(_el); },
        "negotiatedParameterCBB": (_el: _Element): void => { negotiatedParameterCBB = $._decode_implicit<ParameterSupportOptions>(() => _decode_ParameterSupportOptions)(_el); },
        "servicesSupportedCalled": (_el: _Element): void => { servicesSupportedCalled = $._decode_implicit<ServiceSupportOptions>(() => _decode_ServiceSupportOptions)(_el); },
        "additionalSupportedCalled": (_el: _Element): void => { additionalSupportedCalled = $._decode_implicit<AdditionalSupportOptions>(() => _decode_AdditionalSupportOptions)(_el); },
        "additionalCbbSupportedCalled": (_el: _Element): void => { additionalCbbSupportedCalled = $._decode_implicit<AdditionalCBBOptions>(() => _decode_AdditionalCBBOptions)(_el); },
        "privilegeClassIdentityCalled": (_el: _Element): void => { privilegeClassIdentityCalled = $._decode_implicit<VisibleString>(() => $._decodeVisibleString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Initiate_ResponsePDU_initResponseDetail,
        _extension_additions_list_spec_for_Initiate_ResponsePDU_initResponseDetail,
        _root_component_type_list_2_spec_for_Initiate_ResponsePDU_initResponseDetail,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Initiate_ResponsePDU_initResponseDetail(
        negotiatedVersionNumber,
        negotiatedParameterCBB,
        servicesSupportedCalled,
        additionalSupportedCalled,
        additionalCbbSupportedCalled,
        privilegeClassIdentityCalled,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Initiate_ResponsePDU_initResponseDetail(el);
}

let _cached_encoder_for_Initiate_ResponsePDU_initResponseDetail: $.ASN1Encoder<Initiate_ResponsePDU_initResponseDetail> | null = null;

/**
 * @summary Encodes a(n) Initiate_ResponsePDU_initResponseDetail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Initiate_ResponsePDU_initResponseDetail, encoded as an ASN.1 Element.
 */
export
function _encode_Initiate_ResponsePDU_initResponseDetail (value: Initiate_ResponsePDU_initResponseDetail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Initiate_ResponsePDU_initResponseDetail) { _cached_encoder_for_Initiate_ResponsePDU_initResponseDetail = function (value: Initiate_ResponsePDU_initResponseDetail): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Integer16, $.BER)(value.negotiatedVersionNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ParameterSupportOptions, $.BER)(value.negotiatedParameterCBB, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ServiceSupportOptions, $.BER)(value.servicesSupportedCalled, $.BER)
        ],
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_AdditionalSupportOptions, $.BER)(value.additionalSupportedCalled, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_AdditionalCBBOptions, $.BER)(value.additionalCbbSupportedCalled, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeVisibleString, $.BER)(value.privilegeClassIdentityCalled, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Initiate_ResponsePDU_initResponseDetail(value, elGetter);
}


/* eslint-enable */
