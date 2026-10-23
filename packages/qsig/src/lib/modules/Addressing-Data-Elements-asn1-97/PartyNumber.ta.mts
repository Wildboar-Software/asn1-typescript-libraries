/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NumberDigits, _decode_NumberDigits, _encode_NumberDigits } from "../Addressing-Data-Elements-asn1-97/NumberDigits.ta.mjs";
import { PublicPartyNumber, _decode_PublicPartyNumber, _encode_PublicPartyNumber } from "../Addressing-Data-Elements-asn1-97/PublicPartyNumber.ta.mjs";
import { PrivatePartyNumber, _decode_PrivatePartyNumber, _encode_PrivatePartyNumber } from "../Addressing-Data-Elements-asn1-97/PrivatePartyNumber.ta.mjs";

/**
 * @summary PartyNumber
 * @description
 *
 * Digits of a party number and the numbering plan those digits belong to
 * (ECMA-165 Annex B Table B.1). `unknownPartyNumber` is the network's default
 * numbering plan; Table B.1 recommends it. `publicPartyNumber` uses ITU-T E.163
 * and E.164. `privatePartyNumber` is a private numbering plan (ECMA-155, cited
 * by §4.30). `dataPartyNumber`, `telexPartyNumber`, and
 * `nationalStandardPartyNumber` are not used; those values are reserved.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyNumber  ::=  CHOICE {
 *     unknownPartyNumber [0] IMPLICIT NumberDigits,
 *     -- the numbering plan is the default numbering
 *     -- plan of the network. It is recommended that
 *     -- this value is used.
 *     publicPartyNumber [1] IMPLICIT PublicPartyNumber,
 *     -- the numbering plan is according to
 *     -- Recommendation E.163 and E.164.
 *     dataPartyNumber [3] IMPLICIT NumberDigits,
 *     -- not used, value reserved.
 *     telexPartyNumber [4] IMPLICIT NumberDigits,
 *     -- not used, value reserved.
 *     privatePartyNumber [5] IMPLICIT PrivatePartyNumber,
 *     nationalStandardPartyNumber [8] IMPLICIT NumberDigits
 * }
 * ```
 */
export
type PartyNumber =
    { unknownPartyNumber: NumberDigits } /* CHOICE_ALT_ROOT */
    | { publicPartyNumber: PublicPartyNumber } /* CHOICE_ALT_ROOT */
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
    "dataPartyNumber": $._encode_implicit(_TagClass.context, 3, () => _encode_NumberDigits, $.BER),
    "telexPartyNumber": $._encode_implicit(_TagClass.context, 4, () => _encode_NumberDigits, $.BER),
    "privatePartyNumber": $._encode_implicit(_TagClass.context, 5, () => _encode_PrivatePartyNumber, $.BER),
    "nationalStandardPartyNumber": $._encode_implicit(_TagClass.context, 8, () => _encode_NumberDigits, $.BER),
}, $.BER); }
    return _cached_encoder_for_PartyNumber(value, elGetter);
}

/* eslint-enable */
