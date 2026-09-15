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


/**
 * @summary NumberMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberMatch{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   initialMatch  [0]  CalledPartyNumber{bound},
 *   totalMatch    [1]  CalledPartyNumber{bound}
 * }
 * ```
 */
export
type NumberMatch =
    { initialMatch: CalledPartyNumber } /* CHOICE_ALT_ROOT */
    | { totalMatch: CalledPartyNumber } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NumberMatch: $.ASN1Decoder<NumberMatch> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberMatch
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberMatch (el: _Element): NumberMatch {
    if (!_cached_decoder_for_NumberMatch) { _cached_decoder_for_NumberMatch = $._decode_inextensible_choice<NumberMatch>({
    "CONTEXT 0": [ "initialMatch", $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber) ],
    "CONTEXT 1": [ "totalMatch", $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber) ]
}); }
    return _cached_decoder_for_NumberMatch(el);
}

let _cached_encoder_for_NumberMatch: $.ASN1Encoder<NumberMatch> | null = null;

/**
 * @summary Encodes a(n) NumberMatch into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberMatch, encoded as an ASN.1 Element.
 */
export
function _encode_NumberMatch (value: NumberMatch, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberMatch) { _cached_encoder_for_NumberMatch = $._encode_choice<NumberMatch>({
    "initialMatch": $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER),
    "totalMatch": $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyNumber, $.BER),
}, $.BER); }
    return _cached_encoder_for_NumberMatch(value, elGetter);
}


/* eslint-enable */
