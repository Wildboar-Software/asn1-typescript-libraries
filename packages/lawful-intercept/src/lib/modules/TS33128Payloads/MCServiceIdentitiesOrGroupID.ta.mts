/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceIdentity, _decode_MCServiceIdentity, _encode_MCServiceIdentity } from "../TS33128Payloads/MCServiceIdentity.ta.mjs";
// export { MCServiceIdentity, _decode_MCServiceIdentity, _encode_MCServiceIdentity } from "../TS33128Payloads/MCServiceIdentity.ta.mjs";
import { MCServiceGroupID, _decode_MCServiceGroupID, _encode_MCServiceGroupID } from "../TS33128Payloads/MCServiceGroupID.ta.mjs";
// export { MCServiceGroupID, _decode_MCServiceGroupID, _encode_MCServiceGroupID } from "../TS33128Payloads/MCServiceGroupID.ta.mjs";


/**
 * @summary MCServiceIdentitiesOrGroupID
 * @description
 * 
 * MC service identities of the target user or group ID of the target MC service
 * group.
 *
 * 3GPP TS 33.128, clause 7.20.2.1.1.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceIdentitiesOrGroupID  ::=  CHOICE
 * {
 *     mCServiceIdentities   [1] SEQUENCE SIZE (1..MAX) OF MCServiceIdentity,
 *     mCServiceGroupID      [2] MCServiceGroupID
 * }
 * ```
 */
export
type MCServiceIdentitiesOrGroupID =
    { mCServiceIdentities: MCServiceIdentity[] } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * MC service group ID of the target MC service group the file is intended
     * for. (3GPP TS 33.128, clause 7.20.2.6.2.)
     */
    | { mCServiceGroupID: MCServiceGroupID } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MCServiceIdentitiesOrGroupID: $.ASN1Decoder<MCServiceIdentitiesOrGroupID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCServiceIdentitiesOrGroupID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCServiceIdentitiesOrGroupID (el: _Element): MCServiceIdentitiesOrGroupID {
    if (!_cached_decoder_for_MCServiceIdentitiesOrGroupID) { _cached_decoder_for_MCServiceIdentitiesOrGroupID = $._decode_extensible_choice<MCServiceIdentitiesOrGroupID>({
    "CONTEXT 1": [ "mCServiceIdentities", $._decode_implicit<MCServiceIdentity[]>(() => $._decodeSequenceOf<MCServiceIdentity>(() => _decode_MCServiceIdentity)) ],
    "CONTEXT 2": [ "mCServiceGroupID", $._decode_implicit<MCServiceGroupID>(() => _decode_MCServiceGroupID) ]
}); }
    const _value = _cached_decoder_for_MCServiceIdentitiesOrGroupID(el);
    if ("mCServiceIdentities" in _value && _value.mCServiceIdentities !== undefined) {
        const _alt = _value.mCServiceIdentities;
        if (_alt.length < 1) {
            throw new ASN1SizeError("MCServiceIdentitiesOrGroupID.mCServiceIdentities violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_MCServiceIdentitiesOrGroupID: $.ASN1Encoder<MCServiceIdentitiesOrGroupID> | null = null;

/**
 * @summary Encodes a(n) MCServiceIdentitiesOrGroupID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCServiceIdentitiesOrGroupID, encoded as an ASN.1 Element.
 */
export
function _encode_MCServiceIdentitiesOrGroupID (value: MCServiceIdentitiesOrGroupID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCServiceIdentitiesOrGroupID) { _cached_encoder_for_MCServiceIdentitiesOrGroupID = $._encode_choice<MCServiceIdentitiesOrGroupID>({
    "mCServiceIdentities": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<MCServiceIdentity>(() => _encode_MCServiceIdentity, $.BER), $.BER),
    "mCServiceGroupID": $._encode_implicit(_TagClass.context, 2, () => _encode_MCServiceGroupID, $.BER),
}, $.BER); }
    return _cached_encoder_for_MCServiceIdentitiesOrGroupID(value, elGetter);
}


/* eslint-enable */
