/* eslint-disable */
import {
    BIT_STRING,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PayloadInformationRemoved, _decode_PayloadInformationRemoved, _encode_PayloadInformationRemoved } from "../TS33128Payloads/PayloadInformationRemoved.ta.mjs";
// export { PayloadInformationRemoved, _decode_PayloadInformationRemoved, _encode_PayloadInformationRemoved } from "../TS33128Payloads/PayloadInformationRemoved.ta.mjs";
import { PayloadInformationReplacedWithCharacters, _decode_PayloadInformationReplacedWithCharacters, _encode_PayloadInformationReplacedWithCharacters } from "../TS33128Payloads/PayloadInformationReplacedWithCharacters.ta.mjs";
// export { PayloadInformationReplacedWithCharacters, _decode_PayloadInformationReplacedWithCharacters, _encode_PayloadInformationReplacedWithCharacters } from "../TS33128Payloads/PayloadInformationReplacedWithCharacters.ta.mjs";


/**
 * @summary ModificationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModificationType  ::=  CHOICE
 * {
 *     removed                  [1] PayloadInformationRemoved,
 *     replacedWithCharacters   [2] PayloadInformationReplacedWithCharacters,
 *     replacedWithOctets       [3] OCTET STRING,
 *     replacedWithBits         [4] BIT STRING
 * }
 * ```
 */
export
type ModificationType =
    { removed: PayloadInformationRemoved } /* CHOICE_ALT_ROOT */
    | { replacedWithCharacters: PayloadInformationReplacedWithCharacters } /* CHOICE_ALT_ROOT */
    | { replacedWithOctets: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { replacedWithBits: BIT_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ModificationType: $.ASN1Decoder<ModificationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModificationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModificationType (el: _Element): ModificationType {
    if (!_cached_decoder_for_ModificationType) { _cached_decoder_for_ModificationType = $._decode_inextensible_choice<ModificationType>({
    "CONTEXT 1": [ "removed", $._decode_explicit<PayloadInformationRemoved>(() => _decode_PayloadInformationRemoved) ],
    "CONTEXT 2": [ "replacedWithCharacters", $._decode_implicit<PayloadInformationReplacedWithCharacters>(() => _decode_PayloadInformationReplacedWithCharacters) ],
    "CONTEXT 3": [ "replacedWithOctets", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 4": [ "replacedWithBits", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ]
}); }
    return _cached_decoder_for_ModificationType(el);
}

let _cached_encoder_for_ModificationType: $.ASN1Encoder<ModificationType> | null = null;

/**
 * @summary Encodes a(n) ModificationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModificationType, encoded as an ASN.1 Element.
 */
export
function _encode_ModificationType (value: ModificationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModificationType) { _cached_encoder_for_ModificationType = $._encode_choice<ModificationType>({
    "removed": $._encode_explicit(_TagClass.context, 1, () => _encode_PayloadInformationRemoved, $.BER),
    "replacedWithCharacters": $._encode_implicit(_TagClass.context, 2, () => _encode_PayloadInformationReplacedWithCharacters, $.BER),
    "replacedWithOctets": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
    "replacedWithBits": $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER),
}, $.BER); }
    return _cached_encoder_for_ModificationType(value, elGetter);
}


/* eslint-enable */
