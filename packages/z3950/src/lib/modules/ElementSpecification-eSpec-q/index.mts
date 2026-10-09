/**
 * @module
 * @description
 * ASN.1 module for element specification format eSpec-q (ANSI/NISO Z39.50-2003,
 * ESP.2, ASN1.14).
 * 
 * Object identifier `{Z39-50-elementSpec eSpec-q(3)}` on arc `{Z39-50 11}`
 * (`1.2.840.10003.11.3`). Sent inside `compSpec` (§3.6.1). A value restrictor,
 * in the form of a type-1 query (§3.7), limits which information is retrieved.
 * An optional element selector (for example eSpec-2, or an element set name)
 * then chooses elements. If the selector is omitted, the server chooses the
 * element set.
 * 
 * The RPN here is narrower than a general type-1 query: the only operand is
 * attributes plus term, and the only operators are and, or, and and-not.
 */

export {
    AttributesPlusTerm,
    _root_component_type_list_1_spec_for_AttributesPlusTerm,
    _root_component_type_list_2_spec_for_AttributesPlusTerm,
    _extension_additions_list_spec_for_AttributesPlusTerm,
    _decode_AttributesPlusTerm,
    _encode_AttributesPlusTerm,
} from "./AttributesPlusTerm.ta.mjs";

export {
    Espec_q,
    _root_component_type_list_1_spec_for_Espec_q,
    _root_component_type_list_2_spec_for_Espec_q,
    _extension_additions_list_spec_for_Espec_q,
    _decode_Espec_q,
    _encode_Espec_q,
} from "./Espec-q.ta.mjs";

export type {
    RPNStructure_rpnRpnOp_op,
} from "./RPNStructure-rpnRpnOp-op.ta.mjs";

export {
    _decode_RPNStructure_rpnRpnOp_op,
    _encode_RPNStructure_rpnRpnOp_op,
} from "./RPNStructure-rpnRpnOp-op.ta.mjs";

export {
    RPNStructure_rpnRpnOp,
    _root_component_type_list_1_spec_for_RPNStructure_rpnRpnOp,
    _root_component_type_list_2_spec_for_RPNStructure_rpnRpnOp,
    _extension_additions_list_spec_for_RPNStructure_rpnRpnOp,
    _decode_RPNStructure_rpnRpnOp,
    _encode_RPNStructure_rpnRpnOp,
} from "./RPNStructure-rpnRpnOp.ta.mjs";

export type {
    RPNStructure,
} from "./RPNStructure.ta.mjs";

export {
    _decode_RPNStructure,
    _encode_RPNStructure,
} from "./RPNStructure.ta.mjs";

export {
    ValueRestrictor,
    _root_component_type_list_1_spec_for_ValueRestrictor,
    _root_component_type_list_2_spec_for_ValueRestrictor,
    _extension_additions_list_spec_for_ValueRestrictor,
    _decode_ValueRestrictor,
    _encode_ValueRestrictor,
} from "./ValueRestrictor.ta.mjs";
