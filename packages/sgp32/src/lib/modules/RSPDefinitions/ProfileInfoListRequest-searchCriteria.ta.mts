/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OctetTo16, _decode_OctetTo16, _encode_OctetTo16 } from "../RSPDefinitions/OctetTo16.ta.mjs";
// export { OctetTo16, _decode_OctetTo16, _encode_OctetTo16 } from "../RSPDefinitions/OctetTo16.ta.mjs";
import { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";
// export { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";
import { ProfileClass, _decode_ProfileClass, _encode_ProfileClass } from "../RSPDefinitions/ProfileClass.ta.mjs";
// export { ProfileClass, ProfileClass_test /* IMPORTED_LONG_NAMED_INTEGER */, test /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileClass_provisioning /* IMPORTED_LONG_NAMED_INTEGER */, provisioning /* IMPORTED_SHORT_NAMED_INTEGER */, ProfileClass_operational /* IMPORTED_LONG_NAMED_INTEGER */, operational /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProfileClass, _encode_ProfileClass } from "../RSPDefinitions/ProfileClass.ta.mjs";


/**
 * @summary ProfileInfoListRequest_searchCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInfoListRequest-searchCriteria ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProfileInfoListRequest_searchCriteria =
    { isdpAid: OctetTo16 } /* CHOICE_ALT_ROOT */
    | { iccid: Iccid } /* CHOICE_ALT_ROOT */
    | { profileClass: ProfileClass } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProfileInfoListRequest_searchCriteria: $.ASN1Decoder<ProfileInfoListRequest_searchCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileInfoListRequest_searchCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileInfoListRequest_searchCriteria (el: _Element): ProfileInfoListRequest_searchCriteria {
    if (!_cached_decoder_for_ProfileInfoListRequest_searchCriteria) { _cached_decoder_for_ProfileInfoListRequest_searchCriteria = $._decode_inextensible_choice<ProfileInfoListRequest_searchCriteria>({
    "APPLICATION 15": [ "isdpAid", $._decode_implicit<OctetTo16>(() => _decode_OctetTo16) ],
    "APPLICATION 26": [ "iccid", _decode_Iccid ],
    "CONTEXT 21": [ "profileClass", $._decode_implicit<ProfileClass>(() => _decode_ProfileClass) ]
}); }
    return _cached_decoder_for_ProfileInfoListRequest_searchCriteria(el);
}

let _cached_encoder_for_ProfileInfoListRequest_searchCriteria: $.ASN1Encoder<ProfileInfoListRequest_searchCriteria> | null = null;

/**
 * @summary Encodes a(n) ProfileInfoListRequest_searchCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileInfoListRequest_searchCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileInfoListRequest_searchCriteria (value: ProfileInfoListRequest_searchCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileInfoListRequest_searchCriteria) { _cached_encoder_for_ProfileInfoListRequest_searchCriteria = $._encode_choice<ProfileInfoListRequest_searchCriteria>({
    "isdpAid": $._encode_implicit(_TagClass.application, 15, () => _encode_OctetTo16, $.BER),
    "iccid": _encode_Iccid,
    "profileClass": $._encode_implicit(_TagClass.context, 21, () => _encode_ProfileClass, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProfileInfoListRequest_searchCriteria(value, elGetter);
}


/* eslint-enable */
