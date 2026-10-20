/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlternativeIdentity, _decode_AlternativeIdentity, _encode_AlternativeIdentity } from "../IN-SSF-SCF-datatypes/AlternativeIdentity.ta.mjs";
// export { AlternativeIdentity, _decode_AlternativeIdentity, _encode_AlternativeIdentity } from "../IN-SSF-SCF-datatypes/AlternativeIdentity.ta.mjs";


/**
 * @summary AlternativeIdentities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternativeIdentities  ::= 
 *   SEQUENCE  OF AlternativeIdentity
 * ```
 */
export
type AlternativeIdentities = AlternativeIdentity[]; // SequenceOfType

let _cached_decoder_for_AlternativeIdentities: $.ASN1Decoder<AlternativeIdentities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternativeIdentities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternativeIdentities (el: _Element): AlternativeIdentities {
    if (!_cached_decoder_for_AlternativeIdentities) { _cached_decoder_for_AlternativeIdentities = $._decodeSequenceOf<AlternativeIdentity>(() => _decode_AlternativeIdentity); }
    return _cached_decoder_for_AlternativeIdentities(el);
}

let _cached_encoder_for_AlternativeIdentities: $.ASN1Encoder<AlternativeIdentities> | null = null;

/**
 * @summary Encodes a(n) AlternativeIdentities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternativeIdentities, encoded as an ASN.1 Element.
 */
export
function _encode_AlternativeIdentities (value: AlternativeIdentities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternativeIdentities) { _cached_encoder_for_AlternativeIdentities = $._encodeSequenceOf<AlternativeIdentity>(() => _encode_AlternativeIdentity, $.BER); }
    return _cached_encoder_for_AlternativeIdentities(value, elGetter);
}


/* eslint-enable */
