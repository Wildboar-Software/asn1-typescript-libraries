/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MIMEPartIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MIMEPartIdentifier  ::=  CHOICE
 * {
 *     index     [1] INTEGER
 * }
 * ```
 */
export
type MIMEPartIdentifier =
    { index: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MIMEPartIdentifier: $.ASN1Decoder<MIMEPartIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MIMEPartIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MIMEPartIdentifier (el: _Element): MIMEPartIdentifier {
    if (!_cached_decoder_for_MIMEPartIdentifier) { _cached_decoder_for_MIMEPartIdentifier = $._decode_inextensible_choice<MIMEPartIdentifier>({
    "CONTEXT 1": [ "index", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_MIMEPartIdentifier(el);
}

let _cached_encoder_for_MIMEPartIdentifier: $.ASN1Encoder<MIMEPartIdentifier> | null = null;

/**
 * @summary Encodes a(n) MIMEPartIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MIMEPartIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_MIMEPartIdentifier (value: MIMEPartIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MIMEPartIdentifier) { _cached_encoder_for_MIMEPartIdentifier = $._encode_choice<MIMEPartIdentifier>({
    "index": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_MIMEPartIdentifier(value, elGetter);
}


/* eslint-enable */
