/* eslint-disable */
import {
    INTEGER,
    NumericString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";

/**
 * @summary MsgCentreId
 * @description
 *
 * Identity of the Message Centre at which messages are waiting (ECMA-241
 * §7.2.1.1 note 5). `integer` is 0..65535. `numericString` is 1 to 10 numeric
 * characters. `partyNumber` shall be a complete number as required for routing
 * (ECMA-242 §6.3.1). The standard does not say when to use each alternative,
 * nor what the integer or numeric string denotes beyond identifying the centre.
 * On deactivation this element is mandatory if a previous activation included
 * it (ECMA-241 §7.2.1.2 note 3).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MsgCentreId  ::=  CHOICE {
 *     integer [0] IMPLICIT INTEGER (0..65535),
 *     partyNumber [1] PartyNumber,
 *     -- The party number must be a complete number as required
 *     -- for routing purposes.
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
    "CONTEXT 0": [ "integer", $._decode_implicit<INTEGER>(() => (el: _Element): INTEGER => {
            const _value = $._decodeInteger(el);
            if ((typeof _value === "bigint" ? (_value < 0n || _value > 65535n) : (_value < 0 || _value > 65535))) {
                throw new ASN1OverflowError("MsgCentreId.integer violates INTEGER constraint");
            }
            return _value;
        }) ],
    "CONTEXT 1": [ "partyNumber", $._decode_explicit<PartyNumber>(() => _decode_PartyNumber) ],
    "CONTEXT 2": [ "numericString", $._decode_implicit<NumericString>(() => (el: _Element) => {
            const _value = $._decodeNumericString(el);
            if (_value.length < 1 || _value.length > 10) {
                throw new ASN1SizeError("MsgCentreId.numericString violates SIZE constraint");
            }
            return _value;
        }) ]
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
