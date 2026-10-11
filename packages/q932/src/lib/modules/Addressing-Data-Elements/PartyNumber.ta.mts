/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NumberDigits, _decode_NumberDigits, _encode_NumberDigits } from "../Addressing-Data-Elements/NumberDigits.ta.mjs";
// export { NumberDigits, _decode_NumberDigits, _encode_NumberDigits } from "../Addressing-Data-Elements/NumberDigits.ta.mjs";
import { PublicPartyNumber, _decode_PublicPartyNumber, _encode_PublicPartyNumber } from "../Addressing-Data-Elements/PublicPartyNumber.ta.mjs";
// export { PublicPartyNumber, _decode_PublicPartyNumber, _encode_PublicPartyNumber } from "../Addressing-Data-Elements/PublicPartyNumber.ta.mjs";
import { NsapEncodedNumber, _decode_NsapEncodedNumber, _encode_NsapEncodedNumber } from "../Addressing-Data-Elements/NsapEncodedNumber.ta.mjs";
// export { NsapEncodedNumber, _decode_NsapEncodedNumber, _encode_NsapEncodedNumber } from "../Addressing-Data-Elements/NsapEncodedNumber.ta.mjs";
import { PrivatePartyNumber, _decode_PrivatePartyNumber, _encode_PrivatePartyNumber } from "../Addressing-Data-Elements/PrivatePartyNumber.ta.mjs";
// export { PrivatePartyNumber, _decode_PrivatePartyNumber, _encode_PrivatePartyNumber } from "../Addressing-Data-Elements/PrivatePartyNumber.ta.mjs";


/**
 * @summary PartyNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyNumber  ::=  CHOICE {
 *   unknownPartyNumber           [0] IMPLICIT NumberDigits,
 *   --  the numbering plan is the default numbering plan
 *   --  of the network. It is recommended that this value
 *   --  is used.
 *   publicPartyNumber            [1] IMPLICIT PublicPartyNumber,
 *   --  the numbering plan is according to ITU-T
 *   --  Recommendation E.164.
 *   nsapEncodedNumber            [2] IMPLICIT NsapEncodedNumber,
 *   -- ATM endsystem address encoded as an NSAP address. 
 *   dataPartyNumber              [3] IMPLICIT NumberDigits,
 *   --  not used, value reserved.
 *   telexPartyNumber             [4] IMPLICIT NumberDigits,
 *   --  not used, value reserved.
 *   privatePartyNumber           [5] IMPLICIT PrivatePartyNumber,
 *   nationalStandardPartyNumber  [8] IMPLICIT NumberDigits
 * }
 * ```
 */
export
type PartyNumber =
    { unknownPartyNumber: NumberDigits } /* CHOICE_ALT_ROOT */
    | { publicPartyNumber: PublicPartyNumber } /* CHOICE_ALT_ROOT */
    | { nsapEncodedNumber: NsapEncodedNumber } /* CHOICE_ALT_ROOT */
    | { dataPartyNumber: NumberDigits } /* CHOICE_ALT_ROOT */
    | { telexPartyNumber: NumberDigits } /* CHOICE_ALT_ROOT */
    | { privatePartyNumber: PrivatePartyNumber } /* CHOICE_ALT_ROOT */
    | { nationalStandardPartyNumber: NumberDigits } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PartyNumber: $.ASN1Decoder<PartyNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyNumber (el: _Element): PartyNumber {
    if (!_cached_decoder_for_PartyNumber) { _cached_decoder_for_PartyNumber = $._decode_inextensible_choice<PartyNumber>({
    "CONTEXT 0": [ "unknownPartyNumber", $._decode_implicit<NumberDigits>(() => _decode_NumberDigits) ],
    "CONTEXT 1": [ "publicPartyNumber", $._decode_implicit<PublicPartyNumber>(() => _decode_PublicPartyNumber) ],
    "CONTEXT 2": [ "nsapEncodedNumber", $._decode_implicit<NsapEncodedNumber>(() => _decode_NsapEncodedNumber) ],
    "CONTEXT 3": [ "dataPartyNumber", $._decode_implicit<NumberDigits>(() => _decode_NumberDigits) ],
    "CONTEXT 4": [ "telexPartyNumber", $._decode_implicit<NumberDigits>(() => _decode_NumberDigits) ],
    "CONTEXT 5": [ "privatePartyNumber", $._decode_implicit<PrivatePartyNumber>(() => _decode_PrivatePartyNumber) ],
    "CONTEXT 8": [ "nationalStandardPartyNumber", $._decode_implicit<NumberDigits>(() => _decode_NumberDigits) ]
}); }
    return _cached_decoder_for_PartyNumber(el);
}

let _cached_encoder_for_PartyNumber: $.ASN1Encoder<PartyNumber> | null = null;

/**
 * @summary Encodes a(n) PartyNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyNumber, encoded as an ASN.1 Element.
 */
export
function _encode_PartyNumber (value: PartyNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyNumber) { _cached_encoder_for_PartyNumber = $._encode_choice<PartyNumber>({
    "unknownPartyNumber": $._encode_implicit(_TagClass.context, 0, () => _encode_NumberDigits, $.BER),
    "publicPartyNumber": $._encode_implicit(_TagClass.context, 1, () => _encode_PublicPartyNumber, $.BER),
    "nsapEncodedNumber": $._encode_implicit(_TagClass.context, 2, () => _encode_NsapEncodedNumber, $.BER),
    "dataPartyNumber": $._encode_implicit(_TagClass.context, 3, () => _encode_NumberDigits, $.BER),
    "telexPartyNumber": $._encode_implicit(_TagClass.context, 4, () => _encode_NumberDigits, $.BER),
    "privatePartyNumber": $._encode_implicit(_TagClass.context, 5, () => _encode_PrivatePartyNumber, $.BER),
    "nationalStandardPartyNumber": $._encode_implicit(_TagClass.context, 8, () => _encode_NumberDigits, $.BER),
}, $.BER); }
    return _cached_encoder_for_PartyNumber(value, elGetter);
}


/* eslint-enable */
