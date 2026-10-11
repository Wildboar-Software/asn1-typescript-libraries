/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_CliRestrictionOption, _encode_CliRestrictionOption, CliRestrictionOption } from "../MAP-SS-DataTypes/CliRestrictionOption.ta.mjs";
import { _decode_OverrideCategory, _encode_OverrideCategory, OverrideCategory } from "../MAP-SS-DataTypes/OverrideCategory.ta.mjs";


/**
 * @summary SS_SubscriptionOption
 * @description
 *
 * CLI restriction option or Override category (3GPP TS 29.002 V19.1.0 clauses
 * 7.6.4.4–7.6.4.5 and 17.7.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-SubscriptionOption  ::=  CHOICE {
 *     cliRestrictionOption    [2] CliRestrictionOption,
 *     overrideCategory    [1] OverrideCategory}
 * ```
 */
export
type SS_SubscriptionOption =
    { cliRestrictionOption: CliRestrictionOption } /* CHOICE_ALT_ROOT */
    | { overrideCategory: OverrideCategory } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SS_SubscriptionOption: $.ASN1Decoder<SS_SubscriptionOption> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_SubscriptionOption
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_SubscriptionOption (el: _Element): SS_SubscriptionOption {
    if (!_cached_decoder_for_SS_SubscriptionOption) { _cached_decoder_for_SS_SubscriptionOption = $._decode_inextensible_choice<SS_SubscriptionOption>({
    "CONTEXT 2": [ "cliRestrictionOption", $._decode_implicit<CliRestrictionOption>(() => _decode_CliRestrictionOption) ],
    "CONTEXT 1": [ "overrideCategory", $._decode_implicit<OverrideCategory>(() => _decode_OverrideCategory) ]
}); }
    return _cached_decoder_for_SS_SubscriptionOption(el);
}

let _cached_encoder_for_SS_SubscriptionOption: $.ASN1Encoder<SS_SubscriptionOption> | null = null;

/**
 * @summary Encodes a(n) SS_SubscriptionOption into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_SubscriptionOption, encoded as an ASN.1 Element.
 */
export
function _encode_SS_SubscriptionOption (value: SS_SubscriptionOption, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_SubscriptionOption) { _cached_encoder_for_SS_SubscriptionOption = $._encode_choice<SS_SubscriptionOption>({
    "cliRestrictionOption": $._encode_implicit(_TagClass.context, 2, () => _encode_CliRestrictionOption, $.BER),
    "overrideCategory": $._encode_implicit(_TagClass.context, 1, () => _encode_OverrideCategory, $.BER),
}, $.BER); }
    return _cached_encoder_for_SS_SubscriptionOption(value, elGetter);
}


/* eslint-enable */
