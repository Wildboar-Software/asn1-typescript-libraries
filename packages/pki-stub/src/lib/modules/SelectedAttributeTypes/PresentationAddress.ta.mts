/**
 * OSI presentation address (P-selector, S-selector, T-selector, and one or
 * more N-addresses). Re-exported from `@wildboar/presentation-address`.
 *
 * X.501 notes that the equality matching rule for `presentationAddress` is not
 * commutative. Selector comparison is typically octet-for-octet; n-addresses
 * are a SET.
 */
export {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
    _extension_additions_list_spec_for_PresentationAddress,
    _root_component_type_list_1_spec_for_PresentationAddress,
    _root_component_type_list_2_spec_for_PresentationAddress,
} from "@wildboar/presentation-address";
