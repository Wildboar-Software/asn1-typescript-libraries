/* eslint-disable */
import {
    INTEGER,
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
import { ServiceSupportOptions, _decode_ServiceSupportOptions, _encode_ServiceSupportOptions } from "../MMS-Object-Module-1/ServiceSupportOptions.ta.mjs";
// export { ServiceSupportOptions, ServiceSupportOptions_status /* IMPORTED_LONG_NAMED_BIT */, status /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getNameList /* IMPORTED_LONG_NAMED_BIT */, getNameList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_identify /* IMPORTED_LONG_NAMED_BIT */, identify /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_rename /* IMPORTED_LONG_NAMED_BIT */, rename /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_read /* IMPORTED_LONG_NAMED_BIT */, read /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_write /* IMPORTED_LONG_NAMED_BIT */, write /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getVariableAccessAttributes /* IMPORTED_LONG_NAMED_BIT */, getVariableAccessAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineNamedVariable /* IMPORTED_LONG_NAMED_BIT */, defineNamedVariable /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineScatteredAccess /* IMPORTED_LONG_NAMED_BIT */, defineScatteredAccess /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getScatteredAccessAttributes /* IMPORTED_LONG_NAMED_BIT */, getScatteredAccessAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteVariableAccess /* IMPORTED_LONG_NAMED_BIT */, deleteVariableAccess /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineNamedVariableList /* IMPORTED_LONG_NAMED_BIT */, defineNamedVariableList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getNamedVariableListAttributes /* IMPORTED_LONG_NAMED_BIT */, getNamedVariableListAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteNamedVariableList /* IMPORTED_LONG_NAMED_BIT */, deleteNamedVariableList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineNamedType /* IMPORTED_LONG_NAMED_BIT */, defineNamedType /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getNamedTypeAttributes /* IMPORTED_LONG_NAMED_BIT */, getNamedTypeAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteNamedType /* IMPORTED_LONG_NAMED_BIT */, deleteNamedType /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_input /* IMPORTED_LONG_NAMED_BIT */, input /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_output /* IMPORTED_LONG_NAMED_BIT */, output /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_takeControl /* IMPORTED_LONG_NAMED_BIT */, takeControl /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_relinquishControl /* IMPORTED_LONG_NAMED_BIT */, relinquishControl /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineSemaphore /* IMPORTED_LONG_NAMED_BIT */, defineSemaphore /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteSemaphore /* IMPORTED_LONG_NAMED_BIT */, deleteSemaphore /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportSemaphoreStatus /* IMPORTED_LONG_NAMED_BIT */, reportSemaphoreStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportPoolSemaphoreStatus /* IMPORTED_LONG_NAMED_BIT */, reportPoolSemaphoreStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportSemaphoreEntryStatus /* IMPORTED_LONG_NAMED_BIT */, reportSemaphoreEntryStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_initiateDownloadSequence /* IMPORTED_LONG_NAMED_BIT */, initiateDownloadSequence /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_downloadSegment /* IMPORTED_LONG_NAMED_BIT */, downloadSegment /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_terminateDownloadSequence /* IMPORTED_LONG_NAMED_BIT */, terminateDownloadSequence /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_initiateUploadSequence /* IMPORTED_LONG_NAMED_BIT */, initiateUploadSequence /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_uploadSegment /* IMPORTED_LONG_NAMED_BIT */, uploadSegment /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_terminateUploadSequence /* IMPORTED_LONG_NAMED_BIT */, terminateUploadSequence /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_requestDomainDownload /* IMPORTED_LONG_NAMED_BIT */, requestDomainDownload /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_requestDomainUpload /* IMPORTED_LONG_NAMED_BIT */, requestDomainUpload /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_loadDomainContent /* IMPORTED_LONG_NAMED_BIT */, loadDomainContent /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_storeDomainContent /* IMPORTED_LONG_NAMED_BIT */, storeDomainContent /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteDomain /* IMPORTED_LONG_NAMED_BIT */, deleteDomain /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getDomainAttributes /* IMPORTED_LONG_NAMED_BIT */, getDomainAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_createProgramInvocation /* IMPORTED_LONG_NAMED_BIT */, createProgramInvocation /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteProgramInvocation /* IMPORTED_LONG_NAMED_BIT */, deleteProgramInvocation /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_start /* IMPORTED_LONG_NAMED_BIT */, start /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_stop /* IMPORTED_LONG_NAMED_BIT */, stop /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_resume /* IMPORTED_LONG_NAMED_BIT */, resume /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reset /* IMPORTED_LONG_NAMED_BIT */, reset /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_kill /* IMPORTED_LONG_NAMED_BIT */, kill /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getProgramInvocationAttributes /* IMPORTED_LONG_NAMED_BIT */, getProgramInvocationAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_obtainFile /* IMPORTED_LONG_NAMED_BIT */, obtainFile /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineEventCondition /* IMPORTED_LONG_NAMED_BIT */, defineEventCondition /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteEventCondition /* IMPORTED_LONG_NAMED_BIT */, deleteEventCondition /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getEventConditionAttributes /* IMPORTED_LONG_NAMED_BIT */, getEventConditionAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportEventConditionStatus /* IMPORTED_LONG_NAMED_BIT */, reportEventConditionStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_alterEventConditionMonitoring /* IMPORTED_LONG_NAMED_BIT */, alterEventConditionMonitoring /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_triggerEvent /* IMPORTED_LONG_NAMED_BIT */, triggerEvent /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineEventAction /* IMPORTED_LONG_NAMED_BIT */, defineEventAction /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteEventAction /* IMPORTED_LONG_NAMED_BIT */, deleteEventAction /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getEventActionAttributes /* IMPORTED_LONG_NAMED_BIT */, getEventActionAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportEventActionStatus /* IMPORTED_LONG_NAMED_BIT */, reportEventActionStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineEventEnrollment /* IMPORTED_LONG_NAMED_BIT */, defineEventEnrollment /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteEventEnrollment /* IMPORTED_LONG_NAMED_BIT */, deleteEventEnrollment /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_alterEventEnrollment /* IMPORTED_LONG_NAMED_BIT */, alterEventEnrollment /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportEventEnrollmentStatus /* IMPORTED_LONG_NAMED_BIT */, reportEventEnrollmentStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getEventEnrollmentAttributes /* IMPORTED_LONG_NAMED_BIT */, getEventEnrollmentAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_acknowledgeEventNotification /* IMPORTED_LONG_NAMED_BIT */, acknowledgeEventNotification /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getAlarmSummary /* IMPORTED_LONG_NAMED_BIT */, getAlarmSummary /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getAlarmEnrollmentSummary /* IMPORTED_LONG_NAMED_BIT */, getAlarmEnrollmentSummary /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_readJournal /* IMPORTED_LONG_NAMED_BIT */, readJournal /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_writeJournal /* IMPORTED_LONG_NAMED_BIT */, writeJournal /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_initializeJournal /* IMPORTED_LONG_NAMED_BIT */, initializeJournal /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportJournalStatus /* IMPORTED_LONG_NAMED_BIT */, reportJournalStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_createJournal /* IMPORTED_LONG_NAMED_BIT */, createJournal /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteJournal /* IMPORTED_LONG_NAMED_BIT */, deleteJournal /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getCapabilityList /* IMPORTED_LONG_NAMED_BIT */, getCapabilityList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileOpen /* IMPORTED_LONG_NAMED_BIT */, fileOpen /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileRead /* IMPORTED_LONG_NAMED_BIT */, fileRead /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileClose /* IMPORTED_LONG_NAMED_BIT */, fileClose /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileRename /* IMPORTED_LONG_NAMED_BIT */, fileRename /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileDelete /* IMPORTED_LONG_NAMED_BIT */, fileDelete /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_fileDirectory /* IMPORTED_LONG_NAMED_BIT */, fileDirectory /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_unsolicitedStatus /* IMPORTED_LONG_NAMED_BIT */, unsolicitedStatus /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_informationReport /* IMPORTED_LONG_NAMED_BIT */, informationReport /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_eventNotification /* IMPORTED_LONG_NAMED_BIT */, eventNotification /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_attachToEventCondition /* IMPORTED_LONG_NAMED_BIT */, attachToEventCondition /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_attachToSemaphore /* IMPORTED_LONG_NAMED_BIT */, attachToSemaphore /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_conclude /* IMPORTED_LONG_NAMED_BIT */, conclude /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_cancel /* IMPORTED_LONG_NAMED_BIT */, cancel /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getDataExchangeAttributes /* IMPORTED_LONG_NAMED_BIT */, getDataExchangeAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_exchangeData /* IMPORTED_LONG_NAMED_BIT */, exchangeData /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_defineAccessControlList /* IMPORTED_LONG_NAMED_BIT */, defineAccessControlList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_getAccessControlListAttributes /* IMPORTED_LONG_NAMED_BIT */, getAccessControlListAttributes /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reportAccessControlledObjects /* IMPORTED_LONG_NAMED_BIT */, reportAccessControlledObjects /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_deleteAccessControlList /* IMPORTED_LONG_NAMED_BIT */, deleteAccessControlList /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_alterAccessControl /* IMPORTED_LONG_NAMED_BIT */, alterAccessControl /* IMPORTED_SHORT_NAMED_BIT */, ServiceSupportOptions_reconfigureProgramInvocation /* IMPORTED_LONG_NAMED_BIT */, reconfigureProgramInvocation /* IMPORTED_SHORT_NAMED_BIT */, _decode_ServiceSupportOptions, _encode_ServiceSupportOptions } from "../MMS-Object-Module-1/ServiceSupportOptions.ta.mjs";
import { ParameterSupportOptions, _decode_ParameterSupportOptions, _encode_ParameterSupportOptions } from "../MMS-Object-Module-1/ParameterSupportOptions.ta.mjs";
// export { ParameterSupportOptions, ParameterSupportOptions_str1 /* IMPORTED_LONG_NAMED_BIT */, str1 /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_str2 /* IMPORTED_LONG_NAMED_BIT */, str2 /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_vnam /* IMPORTED_LONG_NAMED_BIT */, vnam /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_valt /* IMPORTED_LONG_NAMED_BIT */, valt /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_vadr /* IMPORTED_LONG_NAMED_BIT */, vadr /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_vsca /* IMPORTED_LONG_NAMED_BIT */, vsca /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_tpy /* IMPORTED_LONG_NAMED_BIT */, tpy /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_vlis /* IMPORTED_LONG_NAMED_BIT */, vlis /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_cei /* IMPORTED_LONG_NAMED_BIT */, cei /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_aco /* IMPORTED_LONG_NAMED_BIT */, aco /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_sem /* IMPORTED_LONG_NAMED_BIT */, sem /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_csr /* IMPORTED_LONG_NAMED_BIT */, csr /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_csnc /* IMPORTED_LONG_NAMED_BIT */, csnc /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_csplc /* IMPORTED_LONG_NAMED_BIT */, csplc /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_cspi /* IMPORTED_LONG_NAMED_BIT */, cspi /* IMPORTED_SHORT_NAMED_BIT */, ParameterSupportOptions_char /* IMPORTED_LONG_NAMED_BIT */, char /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParameterSupportOptions, _encode_ParameterSupportOptions } from "../MMS-Object-Module-1/ParameterSupportOptions.ta.mjs";
import { NullableAdditionalSupportOptions, _decode_NullableAdditionalSupportOptions, _encode_NullableAdditionalSupportOptions } from "../MMS-SCI-Module-1/NullableAdditionalSupportOptions.ta.mjs";
// export { NullableAdditionalSupportOptions, _decode_NullableAdditionalSupportOptions, _encode_NullableAdditionalSupportOptions } from "../MMS-SCI-Module-1/NullableAdditionalSupportOptions.ta.mjs";
import { NullableAdditionalCBBOptions, _decode_NullableAdditionalCBBOptions, _encode_NullableAdditionalCBBOptions } from "../MMS-SCI-Module-1/NullableAdditionalCBBOptions.ta.mjs";
// export { NullableAdditionalCBBOptions, _decode_NullableAdditionalCBBOptions, _encode_NullableAdditionalCBBOptions } from "../MMS-SCI-Module-1/NullableAdditionalCBBOptions.ta.mjs";
import { GeneralManagementParameters, _decode_GeneralManagementParameters, _encode_GeneralManagementParameters } from "../MMS-SCI-Module-1/GeneralManagementParameters.ta.mjs";
// export { GeneralManagementParameters, _decode_GeneralManagementParameters, _encode_GeneralManagementParameters } from "../MMS-SCI-Module-1/GeneralManagementParameters.ta.mjs";
import { VMDSupportParameters, _decode_VMDSupportParameters, _encode_VMDSupportParameters } from "../MMS-SCI-Module-1/VMDSupportParameters.ta.mjs";
// export { VMDSupportParameters, _decode_VMDSupportParameters, _encode_VMDSupportParameters } from "../MMS-SCI-Module-1/VMDSupportParameters.ta.mjs";
import { DomainManagementParameters, _decode_DomainManagementParameters, _encode_DomainManagementParameters } from "../MMS-SCI-Module-1/DomainManagementParameters.ta.mjs";
// export { DomainManagementParameters, _decode_DomainManagementParameters, _encode_DomainManagementParameters } from "../MMS-SCI-Module-1/DomainManagementParameters.ta.mjs";
import { ProgramInvocationManagementParameters, _decode_ProgramInvocationManagementParameters, _encode_ProgramInvocationManagementParameters } from "../MMS-SCI-Module-1/ProgramInvocationManagementParameters.ta.mjs";
// export { ProgramInvocationManagementParameters, _decode_ProgramInvocationManagementParameters, _encode_ProgramInvocationManagementParameters } from "../MMS-SCI-Module-1/ProgramInvocationManagementParameters.ta.mjs";
import { VariableAccessParameters, _decode_VariableAccessParameters, _encode_VariableAccessParameters } from "../MMS-SCI-Module-1/VariableAccessParameters.ta.mjs";
// export { VariableAccessParameters, _decode_VariableAccessParameters, _encode_VariableAccessParameters } from "../MMS-SCI-Module-1/VariableAccessParameters.ta.mjs";
import { DataParameters, _decode_DataParameters, _encode_DataParameters } from "../MMS-SCI-Module-1/DataParameters.ta.mjs";
// export { DataParameters, _decode_DataParameters, _encode_DataParameters } from "../MMS-SCI-Module-1/DataParameters.ta.mjs";
import { SemaphoreManagementParameters, _decode_SemaphoreManagementParameters, _encode_SemaphoreManagementParameters } from "../MMS-SCI-Module-1/SemaphoreManagementParameters.ta.mjs";
// export { SemaphoreManagementParameters, _decode_SemaphoreManagementParameters, _encode_SemaphoreManagementParameters } from "../MMS-SCI-Module-1/SemaphoreManagementParameters.ta.mjs";
import { OperatorCommunicationParameters, _decode_OperatorCommunicationParameters, _encode_OperatorCommunicationParameters } from "../MMS-SCI-Module-1/OperatorCommunicationParameters.ta.mjs";
// export { OperatorCommunicationParameters, _decode_OperatorCommunicationParameters, _encode_OperatorCommunicationParameters } from "../MMS-SCI-Module-1/OperatorCommunicationParameters.ta.mjs";
import { ErrorParameters, _decode_ErrorParameters, _encode_ErrorParameters } from "../MMS-SCI-Module-1/ErrorParameters.ta.mjs";
// export { ErrorParameters, _decode_ErrorParameters, _encode_ErrorParameters } from "../MMS-SCI-Module-1/ErrorParameters.ta.mjs";
import { FileManagementParameters, _decode_FileManagementParameters, _encode_FileManagementParameters } from "../MMS-SCI-Module-1/FileManagementParameters.ta.mjs";
// export { FileManagementParameters, _decode_FileManagementParameters, _encode_FileManagementParameters } from "../MMS-SCI-Module-1/FileManagementParameters.ta.mjs";


/**
 * @summary Service_and_Parameter_CBBs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Service-and-Parameter-CBBs ::= SEQUENCE {
 *     services-Client            [0] IMPLICIT ServiceSupportOptions,
 *     services-Server            [1] IMPLICIT ServiceSupportOptions,
 *     parameters                 [2] IMPLICIT ParameterSupportOptions,
 *     nest                       [3] IMPLICIT INTEGER,
 *     extendedServices-Client    [4] IMPLICIT NullableAdditionalSupportOptions,
 *     extendedServices-Server    [5] IMPLICIT NullableAdditionalSupportOptions,
 *     extendedParameters         [6] IMPLICIT NullableAdditionalCBBOptions,
 *     generalManagement          [7] IMPLICIT GeneralManagementParameters,
 *     vMDSupport                 [8] IMPLICIT VMDSupportParameters,
 *     domainManagement           [9] IMPLICIT DomainManagementParameters,
 *     programInvocation          [10] IMPLICIT ProgramInvocationManagementParameters,
 *     variableAccess             [11] IMPLICIT VariableAccessParameters,
 *     dataParameters             [12] IMPLICIT DataParameters,
 *     semaphoreManagement        [13] IMPLICIT SemaphoreManagementParameters,
 *     operatorCommunication      [14] IMPLICIT OperatorCommunicationParameters,
 *     errors                     [15] IMPLICIT ErrorParameters,
 *     fileManagement             [16] IMPLICIT FileManagementParameters
 * }
 * ```
 * 
 * @class
 */
export
class Service_and_Parameter_CBBs {
    constructor (
        /**
         * @summary `services_Client`.
         * @public
         * @readonly
         */
        readonly services_Client: ServiceSupportOptions,
        /**
         * @summary `services_Server`.
         * @public
         * @readonly
         */
        readonly services_Server: ServiceSupportOptions,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: ParameterSupportOptions,
        /**
         * @summary `nest`.
         * @public
         * @readonly
         */
        readonly nest: INTEGER,
        /**
         * @summary `extendedServices_Client`.
         * @public
         * @readonly
         */
        readonly extendedServices_Client: NullableAdditionalSupportOptions,
        /**
         * @summary `extendedServices_Server`.
         * @public
         * @readonly
         */
        readonly extendedServices_Server: NullableAdditionalSupportOptions,
        /**
         * @summary `extendedParameters`.
         * @public
         * @readonly
         */
        readonly extendedParameters: NullableAdditionalCBBOptions,
        /**
         * @summary `generalManagement`.
         * @public
         * @readonly
         */
        readonly generalManagement: GeneralManagementParameters,
        /**
         * @summary `vMDSupport`.
         * @public
         * @readonly
         */
        readonly vMDSupport: VMDSupportParameters,
        /**
         * @summary `domainManagement`.
         * @public
         * @readonly
         */
        readonly domainManagement: DomainManagementParameters,
        /**
         * @summary `programInvocation`.
         * @public
         * @readonly
         */
        readonly programInvocation: ProgramInvocationManagementParameters,
        /**
         * @summary `variableAccess`.
         * @public
         * @readonly
         */
        readonly variableAccess: VariableAccessParameters,
        /**
         * @summary `dataParameters`.
         * @public
         * @readonly
         */
        readonly dataParameters: DataParameters,
        /**
         * @summary `semaphoreManagement`.
         * @public
         * @readonly
         */
        readonly semaphoreManagement: SemaphoreManagementParameters,
        /**
         * @summary `operatorCommunication`.
         * @public
         * @readonly
         */
        readonly operatorCommunication: OperatorCommunicationParameters,
        /**
         * @summary `errors`.
         * @public
         * @readonly
         */
        readonly errors: ErrorParameters,
        /**
         * @summary `fileManagement`.
         * @public
         * @readonly
         */
        readonly fileManagement: FileManagementParameters
    ) {}

    /**
     * @summary Restructures an object into a Service_and_Parameter_CBBs
     * @description
     * 
     * This takes an `object` and converts it to a `Service_and_Parameter_CBBs`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Service_and_Parameter_CBBs`.
     * @returns {Service_and_Parameter_CBBs}
     */
    public static _from_object (_o: { [_K in keyof (Service_and_Parameter_CBBs)]: (Service_and_Parameter_CBBs)[_K] }): Service_and_Parameter_CBBs {
        return new Service_and_Parameter_CBBs(_o.services_Client, _o.services_Server, _o.parameters, _o.nest, _o.extendedServices_Client, _o.extendedServices_Server, _o.extendedParameters, _o.generalManagement, _o.vMDSupport, _o.domainManagement, _o.programInvocation, _o.variableAccess, _o.dataParameters, _o.semaphoreManagement, _o.operatorCommunication, _o.errors, _o.fileManagement);
    }


}

/**
 * @summary The Leading Root Component Types of Service_and_Parameter_CBBs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Service_and_Parameter_CBBs: $.ComponentSpec[] = [
    new $.ComponentSpec("services-Client", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("services-Server", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("parameters", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("nest", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extendedServices-Client", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extendedServices-Server", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extendedParameters", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("generalManagement", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("vMDSupport", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("domainManagement", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("programInvocation", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("variableAccess", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("dataParameters", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("semaphoreManagement", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("operatorCommunication", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("errors", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("fileManagement", false, $.hasTag(_TagClass.context, 16))
];

/**
 * @summary The Trailing Root Component Types of Service_and_Parameter_CBBs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Service_and_Parameter_CBBs: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Service_and_Parameter_CBBs
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Service_and_Parameter_CBBs: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Service_and_Parameter_CBBs: $.ASN1Decoder<Service_and_Parameter_CBBs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Service_and_Parameter_CBBs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Service_and_Parameter_CBBs (el: _Element): Service_and_Parameter_CBBs {
    if (!_cached_decoder_for_Service_and_Parameter_CBBs) { _cached_decoder_for_Service_and_Parameter_CBBs = function (el: _Element): Service_and_Parameter_CBBs {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 17) {
        throw new _ConstructionError("Service-and-Parameter-CBBs contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "services-Client";
    sequence[1].name = "services-Server";
    sequence[2].name = "parameters";
    sequence[3].name = "nest";
    sequence[4].name = "extendedServices-Client";
    sequence[5].name = "extendedServices-Server";
    sequence[6].name = "extendedParameters";
    sequence[7].name = "generalManagement";
    sequence[8].name = "vMDSupport";
    sequence[9].name = "domainManagement";
    sequence[10].name = "programInvocation";
    sequence[11].name = "variableAccess";
    sequence[12].name = "dataParameters";
    sequence[13].name = "semaphoreManagement";
    sequence[14].name = "operatorCommunication";
    sequence[15].name = "errors";
    sequence[16].name = "fileManagement";
    let services_Client!: ServiceSupportOptions;
    let services_Server!: ServiceSupportOptions;
    let parameters!: ParameterSupportOptions;
    let nest!: INTEGER;
    let extendedServices_Client!: NullableAdditionalSupportOptions;
    let extendedServices_Server!: NullableAdditionalSupportOptions;
    let extendedParameters!: NullableAdditionalCBBOptions;
    let generalManagement!: GeneralManagementParameters;
    let vMDSupport!: VMDSupportParameters;
    let domainManagement!: DomainManagementParameters;
    let programInvocation!: ProgramInvocationManagementParameters;
    let variableAccess!: VariableAccessParameters;
    let dataParameters!: DataParameters;
    let semaphoreManagement!: SemaphoreManagementParameters;
    let operatorCommunication!: OperatorCommunicationParameters;
    let errors!: ErrorParameters;
    let fileManagement!: FileManagementParameters;
    services_Client = $._decode_implicit<ServiceSupportOptions>(() => _decode_ServiceSupportOptions)(sequence[0]);
    services_Server = $._decode_implicit<ServiceSupportOptions>(() => _decode_ServiceSupportOptions)(sequence[1]);
    parameters = $._decode_implicit<ParameterSupportOptions>(() => _decode_ParameterSupportOptions)(sequence[2]);
    nest = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[3]);
    extendedServices_Client = $._decode_implicit<NullableAdditionalSupportOptions>(() => _decode_NullableAdditionalSupportOptions)(sequence[4]);
    extendedServices_Server = $._decode_implicit<NullableAdditionalSupportOptions>(() => _decode_NullableAdditionalSupportOptions)(sequence[5]);
    extendedParameters = $._decode_implicit<NullableAdditionalCBBOptions>(() => _decode_NullableAdditionalCBBOptions)(sequence[6]);
    generalManagement = $._decode_implicit<GeneralManagementParameters>(() => _decode_GeneralManagementParameters)(sequence[7]);
    vMDSupport = $._decode_implicit<VMDSupportParameters>(() => _decode_VMDSupportParameters)(sequence[8]);
    domainManagement = $._decode_implicit<DomainManagementParameters>(() => _decode_DomainManagementParameters)(sequence[9]);
    programInvocation = $._decode_implicit<ProgramInvocationManagementParameters>(() => _decode_ProgramInvocationManagementParameters)(sequence[10]);
    variableAccess = $._decode_implicit<VariableAccessParameters>(() => _decode_VariableAccessParameters)(sequence[11]);
    dataParameters = $._decode_implicit<DataParameters>(() => _decode_DataParameters)(sequence[12]);
    semaphoreManagement = $._decode_implicit<SemaphoreManagementParameters>(() => _decode_SemaphoreManagementParameters)(sequence[13]);
    operatorCommunication = $._decode_implicit<OperatorCommunicationParameters>(() => _decode_OperatorCommunicationParameters)(sequence[14]);
    errors = $._decode_implicit<ErrorParameters>(() => _decode_ErrorParameters)(sequence[15]);
    fileManagement = $._decode_implicit<FileManagementParameters>(() => _decode_FileManagementParameters)(sequence[16]);
    return new Service_and_Parameter_CBBs(
        services_Client,
        services_Server,
        parameters,
        nest,
        extendedServices_Client,
        extendedServices_Server,
        extendedParameters,
        generalManagement,
        vMDSupport,
        domainManagement,
        programInvocation,
        variableAccess,
        dataParameters,
        semaphoreManagement,
        operatorCommunication,
        errors,
        fileManagement,

    );
}; }
    return _cached_decoder_for_Service_and_Parameter_CBBs(el);
}

let _cached_encoder_for_Service_and_Parameter_CBBs: $.ASN1Encoder<Service_and_Parameter_CBBs> | null = null;

/**
 * @summary Encodes a(n) Service_and_Parameter_CBBs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Service_and_Parameter_CBBs, encoded as an ASN.1 Element.
 */
export
function _encode_Service_and_Parameter_CBBs (value: Service_and_Parameter_CBBs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Service_and_Parameter_CBBs) { _cached_encoder_for_Service_and_Parameter_CBBs = function (value: Service_and_Parameter_CBBs): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceSupportOptions, $.BER)(value.services_Client, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceSupportOptions, $.BER)(value.services_Server, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_ParameterSupportOptions, $.BER)(value.parameters, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.nest, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_NullableAdditionalSupportOptions, $.BER)(value.extendedServices_Client, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_NullableAdditionalSupportOptions, $.BER)(value.extendedServices_Server, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_NullableAdditionalCBBOptions, $.BER)(value.extendedParameters, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_GeneralManagementParameters, $.BER)(value.generalManagement, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_VMDSupportParameters, $.BER)(value.vMDSupport, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => _encode_DomainManagementParameters, $.BER)(value.domainManagement, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => _encode_ProgramInvocationManagementParameters, $.BER)(value.programInvocation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => _encode_VariableAccessParameters, $.BER)(value.variableAccess, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => _encode_DataParameters, $.BER)(value.dataParameters, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => _encode_SemaphoreManagementParameters, $.BER)(value.semaphoreManagement, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => _encode_OperatorCommunicationParameters, $.BER)(value.operatorCommunication, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => _encode_ErrorParameters, $.BER)(value.errors, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => _encode_FileManagementParameters, $.BER)(value.fileManagement, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Service_and_Parameter_CBBs(value, elGetter);
}


/* eslint-enable */
