/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Hash, _decode_Hash, _encode_Hash } from "../X9-84-CMS/Hash.ta.mjs";



/**
 * @summary RecipientIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecipientIdentifier  ::=  CHOICE {
 *    certHash  [73] EXPLICIT Hash
 * }
 * ```
 */
export
type RecipientIdentifier =
    { certHash: Hash } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RecipientIdentifier: $.ASN1Decoder<RecipientIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecipientIdentifier (el: _Element): RecipientIdentifier {
    if (!_cached_decoder_for_RecipientIdentifier) { _cached_decoder_for_RecipientIdentifier = $._decode_inextensible_choice<RecipientIdentifier>({
    "CONTEXT 73": [ "certHash", $._decode_explicit<Hash>(() => _decode_Hash) ]
}); }
    return _cached_decoder_for_RecipientIdentifier(el);
}

let _cached_encoder_for_RecipientIdentifier: $.ASN1Encoder<RecipientIdentifier> | null = null;

/**
 * @summary Encodes a(n) RecipientIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_RecipientIdentifier (value: RecipientIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecipientIdentifier) { _cached_encoder_for_RecipientIdentifier = $._encode_choice<RecipientIdentifier>({
    "certHash": $._encode_explicit(_TagClass.context, 73, () => _encode_Hash, $.BER),
}, $.BER); }
    return _cached_encoder_for_RecipientIdentifier(value, elGetter);
}


/* eslint-enable */
