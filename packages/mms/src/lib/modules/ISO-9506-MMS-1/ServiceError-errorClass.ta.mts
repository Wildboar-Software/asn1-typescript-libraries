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
import { ServiceError_errorClass_vmd_state, ServiceError_errorClass_vmd_state_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_vmd_state_vmd_state_conflict /* IMPORTED_LONG_NAMED_INTEGER */, vmd_state_conflict /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_vmd_state_vmd_operational_problem /* IMPORTED_LONG_NAMED_INTEGER */, vmd_operational_problem /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_vmd_state_domain_transfer_problem /* IMPORTED_LONG_NAMED_INTEGER */, domain_transfer_problem /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_vmd_state_state_machine_id_invalid /* IMPORTED_LONG_NAMED_INTEGER */, state_machine_id_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_vmd_state, _encode_ServiceError_errorClass_vmd_state } from "../ISO-9506-MMS-1/ServiceError-errorClass-vmd-state.ta.mjs";
// export { ServiceError_errorClass_vmd_state, ServiceError_errorClass_vmd_state_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_vmd_state_vmd_state_conflict /* IMPORTED_LONG_NAMED_INTEGER */, vmd_state_conflict /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_vmd_state_vmd_operational_problem /* IMPORTED_LONG_NAMED_INTEGER */, vmd_operational_problem /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_vmd_state_domain_transfer_problem /* IMPORTED_LONG_NAMED_INTEGER */, domain_transfer_problem /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_vmd_state_state_machine_id_invalid /* IMPORTED_LONG_NAMED_INTEGER */, state_machine_id_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_vmd_state, _encode_ServiceError_errorClass_vmd_state } from "../ISO-9506-MMS-1/ServiceError-errorClass-vmd-state.ta.mjs";
import { ServiceError_errorClass_application_reference, ServiceError_errorClass_application_reference_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_application_reference_application_unreachable /* IMPORTED_LONG_NAMED_INTEGER */, application_unreachable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_application_reference_connection_lost /* IMPORTED_LONG_NAMED_INTEGER */, connection_lost /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_application_reference_application_reference_invalid /* IMPORTED_LONG_NAMED_INTEGER */, application_reference_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_application_reference_context_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, context_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_application_reference, _encode_ServiceError_errorClass_application_reference } from "../ISO-9506-MMS-1/ServiceError-errorClass-application-reference.ta.mjs";
// export { ServiceError_errorClass_application_reference, ServiceError_errorClass_application_reference_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_application_reference_application_unreachable /* IMPORTED_LONG_NAMED_INTEGER */, application_unreachable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_application_reference_connection_lost /* IMPORTED_LONG_NAMED_INTEGER */, connection_lost /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_application_reference_application_reference_invalid /* IMPORTED_LONG_NAMED_INTEGER */, application_reference_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_application_reference_context_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, context_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_application_reference, _encode_ServiceError_errorClass_application_reference } from "../ISO-9506-MMS-1/ServiceError-errorClass-application-reference.ta.mjs";
import { ServiceError_errorClass_definition, ServiceError_errorClass_definition_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_definition_object_undefined /* IMPORTED_LONG_NAMED_INTEGER */, object_undefined /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_definition_invalid_address /* IMPORTED_LONG_NAMED_INTEGER */, invalid_address /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_definition_type_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, type_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_definition_type_inconsistent /* IMPORTED_LONG_NAMED_INTEGER */, type_inconsistent /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_definition_object_exists /* IMPORTED_LONG_NAMED_INTEGER */, object_exists /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_definition_object_attribute_inconsistent /* IMPORTED_LONG_NAMED_INTEGER */, object_attribute_inconsistent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_definition, _encode_ServiceError_errorClass_definition } from "../ISO-9506-MMS-1/ServiceError-errorClass-definition.ta.mjs";
// export { ServiceError_errorClass_definition, ServiceError_errorClass_definition_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_definition_object_undefined /* IMPORTED_LONG_NAMED_INTEGER */, object_undefined /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_definition_invalid_address /* IMPORTED_LONG_NAMED_INTEGER */, invalid_address /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_definition_type_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, type_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_definition_type_inconsistent /* IMPORTED_LONG_NAMED_INTEGER */, type_inconsistent /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_definition_object_exists /* IMPORTED_LONG_NAMED_INTEGER */, object_exists /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_definition_object_attribute_inconsistent /* IMPORTED_LONG_NAMED_INTEGER */, object_attribute_inconsistent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_definition, _encode_ServiceError_errorClass_definition } from "../ISO-9506-MMS-1/ServiceError-errorClass-definition.ta.mjs";
import { ServiceError_errorClass_resource, ServiceError_errorClass_resource_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_resource_memory_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, memory_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_resource_processor_resource_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, processor_resource_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_resource_mass_storage_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, mass_storage_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_resource_capability_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, capability_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_resource_capability_unknown /* IMPORTED_LONG_NAMED_INTEGER */, capability_unknown /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_resource, _encode_ServiceError_errorClass_resource } from "../ISO-9506-MMS-1/ServiceError-errorClass-resource.ta.mjs";
// export { ServiceError_errorClass_resource, ServiceError_errorClass_resource_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_resource_memory_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, memory_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_resource_processor_resource_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, processor_resource_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_resource_mass_storage_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, mass_storage_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_resource_capability_unavailable /* IMPORTED_LONG_NAMED_INTEGER */, capability_unavailable /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_resource_capability_unknown /* IMPORTED_LONG_NAMED_INTEGER */, capability_unknown /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_resource, _encode_ServiceError_errorClass_resource } from "../ISO-9506-MMS-1/ServiceError-errorClass-resource.ta.mjs";
import { ServiceError_errorClass_service, ServiceError_errorClass_service_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_service_primitives_out_of_sequence /* IMPORTED_LONG_NAMED_INTEGER */, primitives_out_of_sequence /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_service_object_state_conflict /* IMPORTED_LONG_NAMED_INTEGER */, object_state_conflict /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_service_continuation_invalid /* IMPORTED_LONG_NAMED_INTEGER */, continuation_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_service_object_constraint_conflict /* IMPORTED_LONG_NAMED_INTEGER */, object_constraint_conflict /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_service, _encode_ServiceError_errorClass_service } from "../ISO-9506-MMS-1/ServiceError-errorClass-service.ta.mjs";
// export { ServiceError_errorClass_service, ServiceError_errorClass_service_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_service_primitives_out_of_sequence /* IMPORTED_LONG_NAMED_INTEGER */, primitives_out_of_sequence /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_service_object_state_conflict /* IMPORTED_LONG_NAMED_INTEGER */, object_state_conflict /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_service_continuation_invalid /* IMPORTED_LONG_NAMED_INTEGER */, continuation_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_service_object_constraint_conflict /* IMPORTED_LONG_NAMED_INTEGER */, object_constraint_conflict /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_service, _encode_ServiceError_errorClass_service } from "../ISO-9506-MMS-1/ServiceError-errorClass-service.ta.mjs";
import { ServiceError_errorClass_service_preempt, ServiceError_errorClass_service_preempt_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_service_preempt_timeout /* IMPORTED_LONG_NAMED_INTEGER */, timeout /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_service_preempt_deadlock /* IMPORTED_LONG_NAMED_INTEGER */, deadlock /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_service_preempt_cancel /* IMPORTED_LONG_NAMED_INTEGER */, cancel /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_service_preempt, _encode_ServiceError_errorClass_service_preempt } from "../ISO-9506-MMS-1/ServiceError-errorClass-service-preempt.ta.mjs";
// export { ServiceError_errorClass_service_preempt, ServiceError_errorClass_service_preempt_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_service_preempt_timeout /* IMPORTED_LONG_NAMED_INTEGER */, timeout /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_service_preempt_deadlock /* IMPORTED_LONG_NAMED_INTEGER */, deadlock /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_service_preempt_cancel /* IMPORTED_LONG_NAMED_INTEGER */, cancel /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_service_preempt, _encode_ServiceError_errorClass_service_preempt } from "../ISO-9506-MMS-1/ServiceError-errorClass-service-preempt.ta.mjs";
import { ServiceError_errorClass_time_resolution, ServiceError_errorClass_time_resolution_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_time_resolution_unsupportable_time_resolution /* IMPORTED_LONG_NAMED_INTEGER */, unsupportable_time_resolution /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_time_resolution, _encode_ServiceError_errorClass_time_resolution } from "../ISO-9506-MMS-1/ServiceError-errorClass-time-resolution.ta.mjs";
// export { ServiceError_errorClass_time_resolution, ServiceError_errorClass_time_resolution_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_time_resolution_unsupportable_time_resolution /* IMPORTED_LONG_NAMED_INTEGER */, unsupportable_time_resolution /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_time_resolution, _encode_ServiceError_errorClass_time_resolution } from "../ISO-9506-MMS-1/ServiceError-errorClass-time-resolution.ta.mjs";
import { ServiceError_errorClass_access, ServiceError_errorClass_access_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_access_object_access_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, object_access_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_access_object_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, object_non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_access_object_access_denied /* IMPORTED_LONG_NAMED_INTEGER */, object_access_denied /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_access_object_invalidated /* IMPORTED_LONG_NAMED_INTEGER */, object_invalidated /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_access, _encode_ServiceError_errorClass_access } from "../ISO-9506-MMS-1/ServiceError-errorClass-access.ta.mjs";
// export { ServiceError_errorClass_access, ServiceError_errorClass_access_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_access_object_access_unsupported /* IMPORTED_LONG_NAMED_INTEGER */, object_access_unsupported /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_access_object_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, object_non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_access_object_access_denied /* IMPORTED_LONG_NAMED_INTEGER */, object_access_denied /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_access_object_invalidated /* IMPORTED_LONG_NAMED_INTEGER */, object_invalidated /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_access, _encode_ServiceError_errorClass_access } from "../ISO-9506-MMS-1/ServiceError-errorClass-access.ta.mjs";
import { ServiceError_errorClass_initiate, ServiceError_errorClass_initiate_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient /* IMPORTED_LONG_NAMED_INTEGER */, max_services_outstanding_calling_insufficient /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient /* IMPORTED_LONG_NAMED_INTEGER */, max_services_outstanding_called_insufficient /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_initiate_service_CBB_insufficient /* IMPORTED_LONG_NAMED_INTEGER */, service_CBB_insufficient /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_initiate_parameter_CBB_insufficient /* IMPORTED_LONG_NAMED_INTEGER */, parameter_CBB_insufficient /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_initiate_nesting_level_insufficient /* IMPORTED_LONG_NAMED_INTEGER */, nesting_level_insufficient /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_initiate, _encode_ServiceError_errorClass_initiate } from "../ISO-9506-MMS-1/ServiceError-errorClass-initiate.ta.mjs";
// export { ServiceError_errorClass_initiate, ServiceError_errorClass_initiate_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_initiate_max_services_outstanding_calling_insufficient /* IMPORTED_LONG_NAMED_INTEGER */, max_services_outstanding_calling_insufficient /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_initiate_max_services_outstanding_called_insufficient /* IMPORTED_LONG_NAMED_INTEGER */, max_services_outstanding_called_insufficient /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_initiate_service_CBB_insufficient /* IMPORTED_LONG_NAMED_INTEGER */, service_CBB_insufficient /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_initiate_parameter_CBB_insufficient /* IMPORTED_LONG_NAMED_INTEGER */, parameter_CBB_insufficient /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_initiate_nesting_level_insufficient /* IMPORTED_LONG_NAMED_INTEGER */, nesting_level_insufficient /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_initiate, _encode_ServiceError_errorClass_initiate } from "../ISO-9506-MMS-1/ServiceError-errorClass-initiate.ta.mjs";
import { ServiceError_errorClass_conclude, ServiceError_errorClass_conclude_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_conclude_further_communication_required /* IMPORTED_LONG_NAMED_INTEGER */, further_communication_required /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_conclude, _encode_ServiceError_errorClass_conclude } from "../ISO-9506-MMS-1/ServiceError-errorClass-conclude.ta.mjs";
// export { ServiceError_errorClass_conclude, ServiceError_errorClass_conclude_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_conclude_further_communication_required /* IMPORTED_LONG_NAMED_INTEGER */, further_communication_required /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_conclude, _encode_ServiceError_errorClass_conclude } from "../ISO-9506-MMS-1/ServiceError-errorClass-conclude.ta.mjs";
import { ServiceError_errorClass_cancel, ServiceError_errorClass_cancel_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_cancel_invoke_id_unknown /* IMPORTED_LONG_NAMED_INTEGER */, invoke_id_unknown /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_cancel_cancel_not_possible /* IMPORTED_LONG_NAMED_INTEGER */, cancel_not_possible /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_cancel, _encode_ServiceError_errorClass_cancel } from "../ISO-9506-MMS-1/ServiceError-errorClass-cancel.ta.mjs";
// export { ServiceError_errorClass_cancel, ServiceError_errorClass_cancel_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_cancel_invoke_id_unknown /* IMPORTED_LONG_NAMED_INTEGER */, invoke_id_unknown /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_cancel_cancel_not_possible /* IMPORTED_LONG_NAMED_INTEGER */, cancel_not_possible /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_cancel, _encode_ServiceError_errorClass_cancel } from "../ISO-9506-MMS-1/ServiceError-errorClass-cancel.ta.mjs";
import { ServiceError_errorClass_file, ServiceError_errorClass_file_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_file_filename_ambiguous /* IMPORTED_LONG_NAMED_INTEGER */, filename_ambiguous /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_file_busy /* IMPORTED_LONG_NAMED_INTEGER */, file_busy /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_filename_syntax_error /* IMPORTED_LONG_NAMED_INTEGER */, filename_syntax_error /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_content_type_invalid /* IMPORTED_LONG_NAMED_INTEGER */, content_type_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_position_invalid /* IMPORTED_LONG_NAMED_INTEGER */, position_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_file_access_denied /* IMPORTED_LONG_NAMED_INTEGER */, file_access_denied /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_file_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, file_non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_duplicate_filename /* IMPORTED_LONG_NAMED_INTEGER */, duplicate_filename /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_insufficient_space_in_filestore /* IMPORTED_LONG_NAMED_INTEGER */, insufficient_space_in_filestore /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_file, _encode_ServiceError_errorClass_file } from "../ISO-9506-MMS-1/ServiceError-errorClass-file.ta.mjs";
// export { ServiceError_errorClass_file, ServiceError_errorClass_file_other /* IMPORTED_LONG_NAMED_INTEGER */, ServiceError_errorClass_file_filename_ambiguous /* IMPORTED_LONG_NAMED_INTEGER */, filename_ambiguous /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_file_busy /* IMPORTED_LONG_NAMED_INTEGER */, file_busy /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_filename_syntax_error /* IMPORTED_LONG_NAMED_INTEGER */, filename_syntax_error /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_content_type_invalid /* IMPORTED_LONG_NAMED_INTEGER */, content_type_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_position_invalid /* IMPORTED_LONG_NAMED_INTEGER */, position_invalid /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_file_access_denied /* IMPORTED_LONG_NAMED_INTEGER */, file_access_denied /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_file_non_existent /* IMPORTED_LONG_NAMED_INTEGER */, file_non_existent /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_duplicate_filename /* IMPORTED_LONG_NAMED_INTEGER */, duplicate_filename /* IMPORTED_SHORT_NAMED_INTEGER */, ServiceError_errorClass_file_insufficient_space_in_filestore /* IMPORTED_LONG_NAMED_INTEGER */, insufficient_space_in_filestore /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ServiceError_errorClass_file, _encode_ServiceError_errorClass_file } from "../ISO-9506-MMS-1/ServiceError-errorClass-file.ta.mjs";


/**
 * @summary ServiceError_errorClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceError-errorClass ::= CHOICE {
 *     vmd-state [0] IMPLICIT INTEGER {
 *         other (0),
 *         vmd-state-conflict (1),
 *         vmd-operational-problem (2),
 *         domain-transfer-problem (3),
 *         state-machine-id-invalid (4)
 *     } (0..4),
 *     application-reference [1] IMPLICIT INTEGER {
 *         other (0),
 *         application-unreachable (1),
 *         connection-lost (2),
 *         application-reference-invalid (3),
 *         context-unsupported (4)
 *     } (0..4),
 *     definition [2] IMPLICIT INTEGER {
 *         other (0),
 *         object-undefined (1),
 *         invalid-address (2),
 *         type-unsupported (3),
 *         type-inconsistent (4),
 *         object-exists (5),
 *         object-attribute-inconsistent (6)
 *     } (0..6),
 *     resource [3] IMPLICIT INTEGER {
 *         other (0),
 *         memory-unavailable (1),
 *         processor-resource-unavailable (2),
 *         mass-storage-unavailable (3),
 *         capability-unavailable (4),
 *         capability-unknown (5)
 *     } (0..5),
 *     service [4] IMPLICIT INTEGER {
 *         other (0),
 *         primitives-out-of-sequence (1),
 *         object-state-conflict (2),
 *         -- Value 3 reserved for further definition
 *         continuation-invalid (4),
 *         object-constraint-conflict (5)
 *     } (0..5),
 *     service-preempt [5] IMPLICIT INTEGER {
 *         other (0),
 *         timeout (1),
 *         deadlock (2),
 *         cancel (3)
 *     } (0..3),
 *     time-resolution [6] IMPLICIT INTEGER {
 *         other (0),
 *         unsupportable-time-resolution (1)
 *     } (0..1),
 *     access [7] IMPLICIT INTEGER {
 *         other (0),
 *         object-access-unsupported (1),
 *         object-non-existent (2),
 *         object-access-denied (3),
 *         object-invalidated (4)
 *     } (0..4),
 *     initiate [8] IMPLICIT INTEGER {
 *         other (0),
 *         -- Values 1 and 2 are reserved for further definition
 *         max-services-outstanding-calling-insufficient (3),
 *         max-services-outstanding-called-insufficient (4),
 *         service-CBB-insufficient (5),
 *         parameter-CBB-insufficient (6),
 *         nesting-level-insufficient (7)
 *     } (0..7),
 *     conclude [9] IMPLICIT INTEGER {
 *         other (0),
 *         further-communication-required (1)
 *     } (0..1),
 *     cancel [10] IMPLICIT INTEGER {
 *         other (0),
 *         invoke-id-unknown (1),
 *         cancel-not-possible (2)
 *     } (0..2),
 *     cancel [10] IMPLICIT NULL,
 *     file [11] IMPLICIT INTEGER {
 *         other (0),
 *         filename-ambiguous (1),
 *         file-busy (2),
 *         filename-syntax-error (3),
 *         content-type-invalid (4),
 *         position-invalid (5),
 *         file-access-denied (6),
 *         file-non-existent (7),
 *         duplicate-filename (8),
 *         insufficient-space-in-filestore (9)
 *     } (0..9),
 *     file [11] IMPLICIT NULL,
 *     others [12] IMPLICIT INTEGER
 * }
 * ```
 */
export
type ServiceError_errorClass =
    { vmd_state: ServiceError_errorClass_vmd_state } /* CHOICE_ALT_ROOT */
    | { application_reference: ServiceError_errorClass_application_reference } /* CHOICE_ALT_ROOT */
    | { definition: ServiceError_errorClass_definition } /* CHOICE_ALT_ROOT */
    | { resource: ServiceError_errorClass_resource } /* CHOICE_ALT_ROOT */
    | { service: ServiceError_errorClass_service } /* CHOICE_ALT_ROOT */
    | { service_preempt: ServiceError_errorClass_service_preempt } /* CHOICE_ALT_ROOT */
    | { time_resolution: ServiceError_errorClass_time_resolution } /* CHOICE_ALT_ROOT */
    | { access: ServiceError_errorClass_access } /* CHOICE_ALT_ROOT */
    | { initiate: ServiceError_errorClass_initiate } /* CHOICE_ALT_ROOT */
    | { conclude: ServiceError_errorClass_conclude } /* CHOICE_ALT_ROOT */
    | { cancel: ServiceError_errorClass_cancel } /* CHOICE_ALT_ROOT */
    | { cancel: NULL } /* CHOICE_ALT_ROOT */
    | { file: ServiceError_errorClass_file } /* CHOICE_ALT_ROOT */
    | { file: NULL } /* CHOICE_ALT_ROOT */
    | { others: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ServiceError_errorClass: $.ASN1Decoder<ServiceError_errorClass> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceError_errorClass
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceError_errorClass (el: _Element): ServiceError_errorClass {
    if (!_cached_decoder_for_ServiceError_errorClass) { _cached_decoder_for_ServiceError_errorClass = $._decode_inextensible_choice<ServiceError_errorClass>({
    "CONTEXT 0": [ "vmd_state", $._decode_implicit<ServiceError_errorClass_vmd_state>(() => _decode_ServiceError_errorClass_vmd_state) ],
    "CONTEXT 1": [ "application_reference", $._decode_implicit<ServiceError_errorClass_application_reference>(() => _decode_ServiceError_errorClass_application_reference) ],
    "CONTEXT 2": [ "definition", $._decode_implicit<ServiceError_errorClass_definition>(() => _decode_ServiceError_errorClass_definition) ],
    "CONTEXT 3": [ "resource", $._decode_implicit<ServiceError_errorClass_resource>(() => _decode_ServiceError_errorClass_resource) ],
    "CONTEXT 4": [ "service", $._decode_implicit<ServiceError_errorClass_service>(() => _decode_ServiceError_errorClass_service) ],
    "CONTEXT 5": [ "service_preempt", $._decode_implicit<ServiceError_errorClass_service_preempt>(() => _decode_ServiceError_errorClass_service_preempt) ],
    "CONTEXT 6": [ "time_resolution", $._decode_implicit<ServiceError_errorClass_time_resolution>(() => _decode_ServiceError_errorClass_time_resolution) ],
    "CONTEXT 7": [ "access", $._decode_implicit<ServiceError_errorClass_access>(() => _decode_ServiceError_errorClass_access) ],
    "CONTEXT 8": [ "initiate", $._decode_implicit<ServiceError_errorClass_initiate>(() => _decode_ServiceError_errorClass_initiate) ],
    "CONTEXT 9": [ "conclude", $._decode_implicit<ServiceError_errorClass_conclude>(() => _decode_ServiceError_errorClass_conclude) ],
    "CONTEXT 10": [ "cancel", $._decode_implicit<ServiceError_errorClass_cancel>(() => _decode_ServiceError_errorClass_cancel) ],
    "CONTEXT 10": [ "cancel", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 11": [ "file", $._decode_implicit<ServiceError_errorClass_file>(() => _decode_ServiceError_errorClass_file) ],
    "CONTEXT 11": [ "file", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 12": [ "others", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_ServiceError_errorClass(el);
}

let _cached_encoder_for_ServiceError_errorClass: $.ASN1Encoder<ServiceError_errorClass> | null = null;

/**
 * @summary Encodes a(n) ServiceError_errorClass into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceError_errorClass, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceError_errorClass (value: ServiceError_errorClass, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceError_errorClass) { _cached_encoder_for_ServiceError_errorClass = $._encode_choice<ServiceError_errorClass>({
    "vmd_state": $._encode_implicit(_TagClass.context, 0, () => _encode_ServiceError_errorClass_vmd_state, $.BER),
    "application_reference": $._encode_implicit(_TagClass.context, 1, () => _encode_ServiceError_errorClass_application_reference, $.BER),
    "definition": $._encode_implicit(_TagClass.context, 2, () => _encode_ServiceError_errorClass_definition, $.BER),
    "resource": $._encode_implicit(_TagClass.context, 3, () => _encode_ServiceError_errorClass_resource, $.BER),
    "service": $._encode_implicit(_TagClass.context, 4, () => _encode_ServiceError_errorClass_service, $.BER),
    "service_preempt": $._encode_implicit(_TagClass.context, 5, () => _encode_ServiceError_errorClass_service_preempt, $.BER),
    "time_resolution": $._encode_implicit(_TagClass.context, 6, () => _encode_ServiceError_errorClass_time_resolution, $.BER),
    "access": $._encode_implicit(_TagClass.context, 7, () => _encode_ServiceError_errorClass_access, $.BER),
    "initiate": $._encode_implicit(_TagClass.context, 8, () => _encode_ServiceError_errorClass_initiate, $.BER),
    "conclude": $._encode_implicit(_TagClass.context, 9, () => _encode_ServiceError_errorClass_conclude, $.BER),
    "cancel": $._encode_implicit(_TagClass.context, 10, () => _encode_ServiceError_errorClass_cancel, $.BER),
    "cancel": $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER),
    "file": $._encode_implicit(_TagClass.context, 11, () => _encode_ServiceError_errorClass_file, $.BER),
    "file": $._encode_implicit(_TagClass.context, 11, () => $._encodeNull, $.BER),
    "others": $._encode_implicit(_TagClass.context, 12, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_ServiceError_errorClass(value, elGetter);
}


/* eslint-enable */
