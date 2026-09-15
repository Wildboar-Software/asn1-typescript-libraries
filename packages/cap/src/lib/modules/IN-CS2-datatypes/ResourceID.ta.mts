/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
import { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS2-datatypes/FacilityGroup.ta.mjs";
// export { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS2-datatypes/FacilityGroup.ta.mjs";


/**
 * @summary ResourceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceID{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   lineID                 [0]  Digits{bound},
 *   facilityGroupID        [1]  FacilityGroup,
 *   facilityGroupMemberID  [2]  INTEGER,
 *   trunkGroupID           [3]  INTEGER
 * }
 * ```
 */
export
type ResourceID =
    { lineID: Digits } /* CHOICE_ALT_ROOT */
    | { facilityGroupID: FacilityGroup } /* CHOICE_ALT_ROOT */
    | { facilityGroupMemberID: INTEGER } /* CHOICE_ALT_ROOT */
    | { trunkGroupID: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ResourceID: $.ASN1Decoder<ResourceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceID (el: _Element): ResourceID {
    if (!_cached_decoder_for_ResourceID) { _cached_decoder_for_ResourceID = $._decode_inextensible_choice<ResourceID>({
    "CONTEXT 0": [ "lineID", $._decode_implicit<Digits>(() => _decode_Digits) ],
    "CONTEXT 1": [ "facilityGroupID", $._decode_explicit<FacilityGroup>(() => _decode_FacilityGroup) ],
    "CONTEXT 2": [ "facilityGroupMemberID", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "trunkGroupID", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_ResourceID(el);
}

let _cached_encoder_for_ResourceID: $.ASN1Encoder<ResourceID> | null = null;

/**
 * @summary Encodes a(n) ResourceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceID, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceID (value: ResourceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceID) { _cached_encoder_for_ResourceID = $._encode_choice<ResourceID>({
    "lineID": $._encode_implicit(_TagClass.context, 0, () => _encode_Digits, $.BER),
    "facilityGroupID": $._encode_explicit(_TagClass.context, 1, () => _encode_FacilityGroup, $.BER),
    "facilityGroupMemberID": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "trunkGroupID": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_ResourceID(value, elGetter);
}


/* eslint-enable */
