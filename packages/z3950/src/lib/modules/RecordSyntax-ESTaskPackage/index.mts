/**
 * @module
 * @description
 * ASN.1 module `RecordSyntax-ESTaskPackage`: the retrieval record for an
 * extended-services task package (ANSI/NISO Z39.50-2003, REC.4, ASN1.7,
 * §3.2.9).
 * 
 * Object identifier `{Z39-50-recordSyntax esTaskPackage(106)}` on arc `{Z39-50
 * 5}` (`1.2.840.10003.5.106`). Packages are records in the database
 * `IR-Extend-1`, retrieved by Search and Present, and may also be returned on
 * the ES response. Common parameters are on `TaskPackage`. Service-specific
 * parameters are an EXTERNAL using the same OID as the package type, selecting
 * the taskPackage alternative.
 */

export type {
    TaskPackage_taskStatus,
} from "./TaskPackage-taskStatus.ta.mjs";

export {
    TaskPackage_taskStatus_pending,
    pending,
    TaskPackage_taskStatus_active,
    active,
    TaskPackage_taskStatus_complete,
    complete,
    TaskPackage_taskStatus_aborted,
    aborted,
    _decode_TaskPackage_taskStatus,
    _encode_TaskPackage_taskStatus,
} from "./TaskPackage-taskStatus.ta.mjs";

export {
    TaskPackage,
    _root_component_type_list_1_spec_for_TaskPackage,
    _root_component_type_list_2_spec_for_TaskPackage,
    _extension_additions_list_spec_for_TaskPackage,
    _decode_TaskPackage,
    _encode_TaskPackage,
} from "./TaskPackage.ta.mjs";
