/**
 * ASN.1 module `MMSExtendedBodyPartTypes`.
 *
 * Military extended body parts, from STANAG 4406 (Ed. 2), Annex A, clause
 * 7.3.12 and Annexes B and I1: ADatP-3, corrections, forwarded-encrypted,
 * MM-message, and ACP 127 data.
 */
export {
    type ACP127DataData,
    _decode_ACP127DataData,
    _encode_ACP127DataData,
} from "./ACP127DataData.ta.mjs";
export {
    type ACP127DataParameters,
    _decode_ACP127DataParameters,
    _encode_ACP127DataParameters,
} from "./ACP127DataParameters.ta.mjs";
export {
    type ADatP3Data,
    _decode_ADatP3Data,
    _encode_ADatP3Data,
} from "./ADatP3Data.ta.mjs";
export {
    type ADatP3Parameters,
    _decode_ADatP3Parameters,
    _encode_ADatP3Parameters,
} from "./ADatP3Parameters.ta.mjs";
export {
    type CorrectionsData,
    _decode_CorrectionsData,
    _encode_CorrectionsData,
} from "./CorrectionsData.ta.mjs";
export {
    type CorrectionsParameters,
    _decode_CorrectionsParameters,
    _encode_CorrectionsParameters,
} from "./CorrectionsParameters.ta.mjs";
export {
    type ForwardedEncryptedData,
    _decode_ForwardedEncryptedData,
    _encode_ForwardedEncryptedData,
} from "./ForwardedEncryptedData.ta.mjs";
export {
    ForwardedEncryptedParameters,
    _root_component_type_list_1_spec_for_ForwardedEncryptedParameters,
    _root_component_type_list_2_spec_for_ForwardedEncryptedParameters,
    _extension_additions_list_spec_for_ForwardedEncryptedParameters,
    _decode_ForwardedEncryptedParameters,
    _encode_ForwardedEncryptedParameters,
} from "./ForwardedEncryptedParameters.ta.mjs";
export {
    type MMMessageData,
    _decode_MMMessageData,
    _encode_MMMessageData,
} from "./MMMessageData.ta.mjs";
export {
    MMMessageParameters,
    _root_component_type_list_1_spec_for_MMMessageParameters,
    _root_component_type_list_2_spec_for_MMMessageParameters,
    _extension_additions_list_spec_for_MMMessageParameters,
    _decode_MMMessageParameters,
    _encode_MMMessageParameters,
} from "./MMMessageParameters.ta.mjs";
