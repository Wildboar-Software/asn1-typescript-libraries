/* eslint-disable */
import {
    INTEGER,
    NumericString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";


/**
 * @summary MsgCentreId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MsgCentreId  ::=  CHOICE {
 *     integer [0] IMPLICIT INTEGER (0..65535),
 *     partyNumber [1] PartyNumber,
 *     numericString [2] IMPLICIT NumericString (SIZE(1..10))
 * }
 * ```
 */
export
type MsgCentreId =
    { integer: INTEGER } /* CHOICE_ALT_ROOT */
    | { partyNumber: PartyNumber } /* CHOICE_ALT_ROOT */
    | { numericString: NumericString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MsgCentreId: $.ASN1Decoder<MsgCentreId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MsgCentreId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MsgCentreId (el: _Element): MsgCentreId {
    if (!_cached_decoder_for_MsgCentreId) { _cached_decoder_for_MsgCentreId = $._decode_inextensible_choice<MsgCentreId>({
    "CONTEXT 0": [ "integer", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 1": [ "partyNumber", $._decode_explicit<PartyNumber>(() => _decode_PartyNumber) ],
    "CONTEXT 2": [ "numericString", $._decode_implicit<NumericString>(() => $._decodeNumericString) ]
}); }
    return _cached_decoder_for_MsgCentreId(el);
}

let _cached_encoder_for_MsgCentreId: $.ASN1Encoder<MsgCentreId> | null = null;

/**
 * @summary Encodes a(n) MsgCentreId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MsgCentreId, encoded as an ASN.1 Element.
 */
export
function _encode_MsgCentreId (value: MsgCentreId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MsgCentreId) { _cached_encoder_for_MsgCentreId = $._encode_choice<MsgCentreId>({
    "integer": $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER),
    "partyNumber": $._encode_explicit(_TagClass.context, 1, () => _encode_PartyNumber, $.BER),
    "numericString": $._encode_implicit(_TagClass.context, 2, () => $._encodeNumericString, $.BER),
}, $.BER); }
    return _cached_encoder_for_MsgCentreId(value, elGetter);
}


/* eslint-enable */
