/* eslint-disable */
import {
    NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyIdentity, _decode_PartyIdentity, _encode_PartyIdentity } from "../CONFHI2Operations/PartyIdentity.ta.mjs";
// export { PartyIdentity, _decode_PartyIdentity, _encode_PartyIdentity } from "../CONFHI2Operations/PartyIdentity.ta.mjs";


/**
 * @summary ConfEventInitiator
 * @description
 * 
 * Who initiated the request: the conference server, the target, or another
 * conferee (table 11.2).
 *
 * `confServer` is the conference server. `confTargetID` is the target.
 * `confPartyID` is a conferee. Required on conference end. On join or leave,
 * present when this party is not the joining or leaving party. 3GPP TS 33.108,
 * clause 11.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfEventInitiator  ::=  CHOICE
 * {
 *         confServer        [1] NULL,
 *             
 *         confTargetID    [2] PartyIdentity,
 * 
 *         confPartyID        [3] PartyIdentity,
 *     ...
 * }
 * ```
 */
export
type ConfEventInitiator =
    { confServer: NULL } /* CHOICE_ALT_ROOT */
    | { confTargetID: PartyIdentity } /* CHOICE_ALT_ROOT */
    | { confPartyID: PartyIdentity } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ConfEventInitiator: $.ASN1Decoder<ConfEventInitiator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfEventInitiator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfEventInitiator (el: _Element): ConfEventInitiator {
    if (!_cached_decoder_for_ConfEventInitiator) { _cached_decoder_for_ConfEventInitiator = $._decode_extensible_choice<ConfEventInitiator>({
    "CONTEXT 1": [ "confServer", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "confTargetID", $._decode_implicit<PartyIdentity>(() => _decode_PartyIdentity) ],
    "CONTEXT 3": [ "confPartyID", $._decode_implicit<PartyIdentity>(() => _decode_PartyIdentity) ]
}); }
    return _cached_decoder_for_ConfEventInitiator(el);
}

let _cached_encoder_for_ConfEventInitiator: $.ASN1Encoder<ConfEventInitiator> | null = null;

/**
 * @summary Encodes a(n) ConfEventInitiator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfEventInitiator, encoded as an ASN.1 Element.
 */
export
function _encode_ConfEventInitiator (value: ConfEventInitiator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfEventInitiator) { _cached_encoder_for_ConfEventInitiator = $._encode_choice<ConfEventInitiator>({
    "confServer": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "confTargetID": $._encode_implicit(_TagClass.context, 2, () => _encode_PartyIdentity, $.BER),
    "confPartyID": $._encode_implicit(_TagClass.context, 3, () => _encode_PartyIdentity, $.BER),
}, $.BER); }
    return _cached_encoder_for_ConfEventInitiator(value, elGetter);
}


/* eslint-enable */
