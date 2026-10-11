/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary SubscriberIdentity
 * @description
 *
 * Subscriber identity as IMSI or MSISDN (`ISDN-AddressString`).
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8, 7.6.2.1 and 7.6.2.17).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberIdentity  ::=  CHOICE {
 *     imsi    [0] IMSI,
 *     msisdn    [1] ISDN-AddressString
 *     }
 * ```
 */
export
type SubscriberIdentity =
    { imsi: IMSI } /* CHOICE_ALT_ROOT */
    | { msisdn: ISDN_AddressString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SubscriberIdentity: $.ASN1Decoder<SubscriberIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberIdentity (el: _Element): SubscriberIdentity {
    if (!_cached_decoder_for_SubscriberIdentity) { _cached_decoder_for_SubscriberIdentity = $._decode_inextensible_choice<SubscriberIdentity>({
    "CONTEXT 0": [ "imsi", $._decode_implicit<IMSI>(() => _decode_IMSI) ],
    "CONTEXT 1": [ "msisdn", $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString) ]
}); }
    return _cached_decoder_for_SubscriberIdentity(el);
}

let _cached_encoder_for_SubscriberIdentity: $.ASN1Encoder<SubscriberIdentity> | null = null;

/**
 * @summary Encodes a(n) SubscriberIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberIdentity (value: SubscriberIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberIdentity) { _cached_encoder_for_SubscriberIdentity = $._encode_choice<SubscriberIdentity>({
    "imsi": $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER),
    "msisdn": $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER),
}, $.BER); }
    return _cached_encoder_for_SubscriberIdentity(value, elGetter);
}


/* eslint-enable */
