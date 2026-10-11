/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SortKeySpec_missingValueAction
 * @description
 * 
 * Server action when a record has no value for this sort key (ANSI/NISO
 * Z39.50-2003 §3.2.7.1.3). `null` means supply a null value for the missing
 * value (§4.1). The standard does not further define `abort`.
 * `missingValueData` is an octet string supplied in place of the missing value;
 * the standard does not define how those octets are interpreted.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKeySpec-missingValueAction ::= CHOICE {
 *     abort [1] IMPLICIT NULL,
 *     null [2] IMPLICIT NULL,
 *     -- Supply a null value for missing value
 *     missingValueData [3] IMPLICIT OCTET STRING
 * }
 * ```
 */
export
type SortKeySpec_missingValueAction =
    { abort: NULL } /* CHOICE_ALT_ROOT */
    | { null_: NULL } /* CHOICE_ALT_ROOT */
    | { missingValueData: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SortKeySpec_missingValueAction: $.ASN1Decoder<SortKeySpec_missingValueAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortKeySpec_missingValueAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortKeySpec_missingValueAction (el: _Element): SortKeySpec_missingValueAction {
    if (!_cached_decoder_for_SortKeySpec_missingValueAction) { _cached_decoder_for_SortKeySpec_missingValueAction = $._decode_inextensible_choice<SortKeySpec_missingValueAction>({
    "CONTEXT 1": [ "abort", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "null_", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "missingValueData", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_SortKeySpec_missingValueAction(el);
}

let _cached_encoder_for_SortKeySpec_missingValueAction: $.ASN1Encoder<SortKeySpec_missingValueAction> | null = null;

/**
 * @summary Encodes a(n) SortKeySpec_missingValueAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKeySpec_missingValueAction, encoded as an ASN.1 Element.
 */
export
function _encode_SortKeySpec_missingValueAction (value: SortKeySpec_missingValueAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortKeySpec_missingValueAction) { _cached_encoder_for_SortKeySpec_missingValueAction = $._encode_choice<SortKeySpec_missingValueAction>({
    "abort": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "null_": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "missingValueData": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_SortKeySpec_missingValueAction(value, elGetter);
}


/* eslint-enable */
