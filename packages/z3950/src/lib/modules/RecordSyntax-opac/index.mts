/**
 * @module
 * @description
 * ASN.1 module `RecordSyntax-opac`. The module assigns `{z39-50-recordSyntax
 * opac(102)}` (`1.2.840.10003.5.102`).
 * 
 * ANSI/NISO Z39.50-2003 removed OPAC and Summary from Appendix REC and does not
 * define these types. RET.3.4.1.2.5 mentions an OPAC database only as an
 * example of nested GRS-1 records. The module ASN.1 is a bibliographic EXTERNAL
 * plus holdings, which are either an EXTERNAL MARC holdings record or a
 * structure commented with NISO display and MARC holdings positions.
 * Uncommented components have no further semantics.
 */

export {
    CircRecord,
    _root_component_type_list_1_spec_for_CircRecord,
    _root_component_type_list_2_spec_for_CircRecord,
    _extension_additions_list_spec_for_CircRecord,
    _decode_CircRecord,
    _encode_CircRecord,
} from "./CircRecord.ta.mjs";

export {
    HoldingsAndCircData,
    _root_component_type_list_1_spec_for_HoldingsAndCircData,
    _root_component_type_list_2_spec_for_HoldingsAndCircData,
    _extension_additions_list_spec_for_HoldingsAndCircData,
    _decode_HoldingsAndCircData,
    _encode_HoldingsAndCircData,
} from "./HoldingsAndCircData.ta.mjs";

export type {
    HoldingsRecord,
} from "./HoldingsRecord.ta.mjs";

export {
    _decode_HoldingsRecord,
    _encode_HoldingsRecord,
} from "./HoldingsRecord.ta.mjs";

export {
    OPACRecord,
    _root_component_type_list_1_spec_for_OPACRecord,
    _root_component_type_list_2_spec_for_OPACRecord,
    _extension_additions_list_spec_for_OPACRecord,
    _decode_OPACRecord,
    _encode_OPACRecord,
} from "./OPACRecord.ta.mjs";

export {
    Volume,
    _root_component_type_list_1_spec_for_Volume,
    _root_component_type_list_2_spec_for_Volume,
    _extension_additions_list_spec_for_Volume,
    _decode_Volume,
    _encode_Volume,
} from "./Volume.ta.mjs";
