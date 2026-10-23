/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TriggerDataIdentifier, _decode_TriggerDataIdentifier, _encode_TriggerDataIdentifier } from "../IN-SSF-SCF-datatypes/TriggerDataIdentifier.ta.mjs";
// export { TriggerDataIdentifier, _decode_TriggerDataIdentifier, _encode_TriggerDataIdentifier } from "../IN-SSF-SCF-datatypes/TriggerDataIdentifier.ta.mjs";
import { ProfileIdentifier, _decode_ProfileIdentifier, _encode_ProfileIdentifier } from "../IN-SSF-SCF-datatypes/ProfileIdentifier.ta.mjs";
// export { ProfileIdentifier, _decode_ProfileIdentifier, _encode_ProfileIdentifier } from "../IN-SSF-SCF-datatypes/ProfileIdentifier.ta.mjs";


/**
 * @summary ManageTriggerDataArg_triggerDataIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ManageTriggerDataArg-triggerDataIdentifier ::=
 * CHOICE {
 *   profileAndDP [1] TriggerDataIdentifier,
 *   -- one trigger
 *   profile [5] ProfileIdentifier
 * }
 * ```
 */
export
type ManageTriggerDataArg_triggerDataIdentifier =
    { profileAndDP: TriggerDataIdentifier } /* CHOICE_ALT_ROOT */
    | { profile: ProfileIdentifier } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ManageTriggerDataArg_triggerDataIdentifier: $.ASN1Decoder<ManageTriggerDataArg_triggerDataIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ManageTriggerDataArg_triggerDataIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ManageTriggerDataArg_triggerDataIdentifier (el: _Element): ManageTriggerDataArg_triggerDataIdentifier {
    if (!_cached_decoder_for_ManageTriggerDataArg_triggerDataIdentifier) { _cached_decoder_for_ManageTriggerDataArg_triggerDataIdentifier = $._decode_inextensible_choice<ManageTriggerDataArg_triggerDataIdentifier>({
    "CONTEXT 1": [ "profileAndDP", $._decode_implicit<TriggerDataIdentifier>(() => _decode_TriggerDataIdentifier) ],
    "CONTEXT 5": [ "profile", $._decode_explicit<ProfileIdentifier>(() => _decode_ProfileIdentifier) ]
}); }
    return _cached_decoder_for_ManageTriggerDataArg_triggerDataIdentifier(el);
}

let _cached_encoder_for_ManageTriggerDataArg_triggerDataIdentifier: $.ASN1Encoder<ManageTriggerDataArg_triggerDataIdentifier> | null = null;

/**
 * @summary Encodes a(n) ManageTriggerDataArg_triggerDataIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManageTriggerDataArg_triggerDataIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ManageTriggerDataArg_triggerDataIdentifier (value: ManageTriggerDataArg_triggerDataIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ManageTriggerDataArg_triggerDataIdentifier) { _cached_encoder_for_ManageTriggerDataArg_triggerDataIdentifier = $._encode_choice<ManageTriggerDataArg_triggerDataIdentifier>({
    "profileAndDP": $._encode_implicit(_TagClass.context, 1, () => _encode_TriggerDataIdentifier, $.BER),
    "profile": $._encode_explicit(_TagClass.context, 5, () => _encode_ProfileIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_ManageTriggerDataArg_triggerDataIdentifier(value, elGetter);
}


/* eslint-enable */
