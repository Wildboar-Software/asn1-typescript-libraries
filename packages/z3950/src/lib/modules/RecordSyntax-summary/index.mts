/**
 * @module
 * @description
 * ASN.1 module `RecordSyntax-summary`. The module assigns `{z39-50-recordSyntax
 * summary(103)}` (`1.2.840.10003.5.103`).
 * 
 * ANSI/NISO Z39.50-2003 removed OPAC and Summary from Appendix REC. It does not
 * define `BriefBib` or `FormatSpec`, and the module ASN.1 has no comments.
 * "Summary record" in Explain (§3.2.10.2.2) means an abbreviated Explain
 * record, not this syntax.
 */

export {
    BriefBib,
    _root_component_type_list_1_spec_for_BriefBib,
    _root_component_type_list_2_spec_for_BriefBib,
    _extension_additions_list_spec_for_BriefBib,
    _decode_BriefBib,
    _encode_BriefBib,
} from "./BriefBib.ta.mjs";

export {
    FormatSpec,
    _root_component_type_list_1_spec_for_FormatSpec,
    _root_component_type_list_2_spec_for_FormatSpec,
    _extension_additions_list_spec_for_FormatSpec,
    _decode_FormatSpec,
    _encode_FormatSpec,
} from "./FormatSpec.ta.mjs";
