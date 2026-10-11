/**
 * @module
 * @description
 * Export Specification extended service (ANSI/NISO Z39.50-2003 EXT.1.6).
 * 
 * Task-specific parameters for establishing an export specification that a
 * later Export Invocation task can run.
 */
export {
    ClientPartToKeep,
    _root_component_type_list_1_spec_for_ClientPartToKeep,
    _root_component_type_list_2_spec_for_ClientPartToKeep,
    _extension_additions_list_spec_for_ClientPartToKeep,
    _decode_ClientPartToKeep,
    _encode_ClientPartToKeep,
} from "./ClientPartToKeep.ta.mjs";

export {
    Destination_other,
    _root_component_type_list_1_spec_for_Destination_other,
    _root_component_type_list_2_spec_for_Destination_other,
    _extension_additions_list_spec_for_Destination_other,
    _decode_Destination_other,
    _encode_Destination_other,
} from "./Destination-other.ta.mjs";

export type {
    Destination,
} from "./Destination.ta.mjs";

export {
    _decode_Destination,
    _encode_Destination,
} from "./Destination.ta.mjs";

export {
    ExportSpecification_esRequest,
    _root_component_type_list_1_spec_for_ExportSpecification_esRequest,
    _root_component_type_list_2_spec_for_ExportSpecification_esRequest,
    _extension_additions_list_spec_for_ExportSpecification_esRequest,
    _decode_ExportSpecification_esRequest,
    _encode_ExportSpecification_esRequest,
} from "./ExportSpecification-esRequest.ta.mjs";

export {
    ExportSpecification_taskPackage,
    _root_component_type_list_1_spec_for_ExportSpecification_taskPackage,
    _root_component_type_list_2_spec_for_ExportSpecification_taskPackage,
    _extension_additions_list_spec_for_ExportSpecification_taskPackage,
    _decode_ExportSpecification_taskPackage,
    _encode_ExportSpecification_taskPackage,
} from "./ExportSpecification-taskPackage.ta.mjs";

export type {
    ExportSpecification,
} from "./ExportSpecification.ta.mjs";

export {
    _decode_ExportSpecification,
    _encode_ExportSpecification,
} from "./ExportSpecification.ta.mjs";
