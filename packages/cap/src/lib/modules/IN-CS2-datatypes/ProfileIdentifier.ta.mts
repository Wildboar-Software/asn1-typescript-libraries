/* eslint-disable */
import {
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
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";
import { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS2-datatypes/FacilityGroup.ta.mjs";
// export { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS2-datatypes/FacilityGroup.ta.mjs";


/**
 * @summary ProfileIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileIdentifier{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   access  [0]  CalledPartyNumber{bound},
 *   group   [1]  FacilityGroup
 * }
 * ```
 */
export
type ProfileIdentifier =
    { access: CalledPartyNumber } /* CHOICE_ALT_ROOT */
    | { group: FacilityGroup } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ProfileIdentifier: $.ASN1Decoder<ProfileIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileIdentifier (el: _Element): ProfileIdentifier {
    if (!_cached_decoder_for_ProfileIdentifier) { _cached_decoder_for_ProfileIdentifier = $._decode_inextensible_choice<ProfileIdentifier>({
    "CONTEXT 0": [ "access", $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber) ],
    "CONTEXT 1": [ "group", $._decode_explicit<FacilityGroup>(() => _decode_FacilityGroup) ]
}); }
    return _cached_decoder_for_ProfileIdentifier(el);
}

let _cached_encoder_for_ProfileIdentifier: $.ASN1Encoder<ProfileIdentifier> | null = null;

/**
 * @summary Encodes a(n) ProfileIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileIdentifier (value: ProfileIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileIdentifier) { _cached_encoder_for_ProfileIdentifier = $._encode_choice<ProfileIdentifier>({
    "access": $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER),
    "group": $._encode_explicit(_TagClass.context, 1, () => _encode_FacilityGroup, $.BER),
}, $.BER); }
    return _cached_encoder_for_ProfileIdentifier(value, elGetter);
}


/* eslint-enable */
