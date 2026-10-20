/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../InformationFramework/Name.ta.mjs";


/**
 * @summary SecurityIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityIdentity  ::=  CHOICE {
 *   directoryName     Name,
 *   objectIdentifier  OBJECT IDENTIFIER
 * }
 * ```
 */
export
type SecurityIdentity =
    { directoryName: Name } /* CHOICE_ALT_ROOT */
    | { objectIdentifier: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SecurityIdentity: $.ASN1Decoder<SecurityIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SecurityIdentity (el: _Element): SecurityIdentity {
    if (!_cached_decoder_for_SecurityIdentity) { _cached_decoder_for_SecurityIdentity = $._decode_inextensible_choice<SecurityIdentity>({
    "UNIVERSAL 16": [ "directoryName", _decode_Name ],
    "CONTEXT 1": [ "objectIdentifier", $._decodeObjectIdentifier ]
}); }
    return _cached_decoder_for_SecurityIdentity(el);
}

let _cached_encoder_for_SecurityIdentity: $.ASN1Encoder<SecurityIdentity> | null = null;

/**
 * @summary Encodes a(n) SecurityIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityIdentity (value: SecurityIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SecurityIdentity) { _cached_encoder_for_SecurityIdentity = $._encode_choice<SecurityIdentity>({
    "directoryName": $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER),
    "objectIdentifier": $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER),
}, $.BER); }
    return _cached_encoder_for_SecurityIdentity(value, elGetter);
}


/* eslint-enable */
