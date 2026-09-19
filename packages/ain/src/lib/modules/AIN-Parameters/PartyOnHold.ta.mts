/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartyOnHold
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyOnHold  ::=  [146] IMPLICIT NULL
 * ```
 */
export
type PartyOnHold = NULL; // NullType

let _cached_decoder_for_PartyOnHold: $.ASN1Decoder<PartyOnHold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyOnHold
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyOnHold (el: _Element): PartyOnHold {
    if (!_cached_decoder_for_PartyOnHold) { _cached_decoder_for_PartyOnHold = $._decode_implicit<PartyOnHold>(() => $._decodeNull); }
    return _cached_decoder_for_PartyOnHold(el);
}

let _cached_encoder_for_PartyOnHold: $.ASN1Encoder<PartyOnHold> | null = null;

/**
 * @summary Encodes a(n) PartyOnHold into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyOnHold, encoded as an ASN.1 Element.
 */
export
function _encode_PartyOnHold (value: PartyOnHold, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyOnHold) { _cached_encoder_for_PartyOnHold = $._encode_implicit(_TagClass.context, 146, () => $._encodeNull, $.BER); }
    return _cached_encoder_for_PartyOnHold(value, elGetter);
}


/* eslint-enable */
