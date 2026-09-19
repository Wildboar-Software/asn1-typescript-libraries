/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";
// export { SBIType, _decode_SBIType, _encode_SBIType } from "../TS33128Payloads/SBIType.ta.mjs";


/**
 * @summary SubscriptionDataSets
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriptionDataSets  ::=  CHOICE
 * {
 *     iMSSubscriptionData [1] SBIType
 * }
 * ```
 */
export
type SubscriptionDataSets =
    { iMSSubscriptionData: SBIType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SubscriptionDataSets: $.ASN1Decoder<SubscriptionDataSets> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriptionDataSets
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriptionDataSets (el: _Element): SubscriptionDataSets {
    if (!_cached_decoder_for_SubscriptionDataSets) { _cached_decoder_for_SubscriptionDataSets = $._decode_inextensible_choice<SubscriptionDataSets>({
    "CONTEXT 1": [ "iMSSubscriptionData", $._decode_implicit<SBIType>(() => _decode_SBIType) ]
}); }
    return _cached_decoder_for_SubscriptionDataSets(el);
}

let _cached_encoder_for_SubscriptionDataSets: $.ASN1Encoder<SubscriptionDataSets> | null = null;

/**
 * @summary Encodes a(n) SubscriptionDataSets into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriptionDataSets, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriptionDataSets (value: SubscriptionDataSets, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriptionDataSets) { _cached_encoder_for_SubscriptionDataSets = $._encode_choice<SubscriptionDataSets>({
    "iMSSubscriptionData": $._encode_implicit(_TagClass.context, 1, () => _encode_SBIType, $.BER),
}, $.BER); }
    return _cached_encoder_for_SubscriptionDataSets(value, elGetter);
}


/* eslint-enable */
