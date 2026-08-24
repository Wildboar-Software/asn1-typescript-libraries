/**
 * @summary PresentationAddress
 * @description
 *
 * Optional `pSelector`/`sSelector`/`tSelector` plus `nAddresses` SET
 * SIZE (1..MAX) (at least one NSAP; unordered). presentationAddressMatch:
 * selectors equal and presented `nAddresses` is a subset of stored.
 * Re-exported from `@wildboar/presentation-address`.
 */
export {
    PresentationAddress,
    _decode_PresentationAddress,
    _encode_PresentationAddress,
    _extension_additions_list_spec_for_PresentationAddress,
    _root_component_type_list_1_spec_for_PresentationAddress,
    _root_component_type_list_2_spec_for_PresentationAddress,
} from "@wildboar/presentation-address";
