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
import { PathOrObjects, _get_decoder_for_PathOrObjects, _get_encoder_for_PathOrObjects } from "../CryptographicInformationFramework/PathOrObjects.ta.mjs";
// export { PathOrObjects, _get_decoder_for_PathOrObjects, _get_encoder_for_PathOrObjects } from "../CryptographicInformationFramework/PathOrObjects.ta.mjs";
import { PublicKeyChoice, _decode_PublicKeyChoice, _encode_PublicKeyChoice } from "../CryptographicInformationFramework/PublicKeyChoice.ta.mjs";
// export { PublicKeyChoice, _decode_PublicKeyChoice, _encode_PublicKeyChoice } from "../CryptographicInformationFramework/PublicKeyChoice.ta.mjs";


/**
 * @summary PublicKeys
 * @description
 * 
 * Public-key directory contents (EF.PuKD), also used for `trustedPublicKeys`
 * (cardholder trust points). ISO/IEC 7816-15:2016 §8.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicKeys  ::=  PathOrObjects {PublicKeyChoice}
 * ```
 */
export
type PublicKeys = PathOrObjects<PublicKeyChoice>; // DefinedType

let _cached_decoder_for_PublicKeys: $.ASN1Decoder<PublicKeys> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PublicKeys
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PublicKeys (el: _Element): PublicKeys {
    if (!_cached_decoder_for_PublicKeys) { _cached_decoder_for_PublicKeys = _get_decoder_for_PathOrObjects<PublicKeyChoice>(_decode_PublicKeyChoice); }
    return _cached_decoder_for_PublicKeys(el);
}

let _cached_encoder_for_PublicKeys: $.ASN1Encoder<PublicKeys> | null = null;

/**
 * @summary Encodes a(n) PublicKeys into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicKeys, encoded as an ASN.1 Element.
 */
export
function _encode_PublicKeys (value: PublicKeys, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PublicKeys) { _cached_encoder_for_PublicKeys = _get_encoder_for_PathOrObjects<PublicKeyChoice>(_encode_PublicKeyChoice); }
    return _cached_encoder_for_PublicKeys(value, elGetter);
}


/* eslint-enable */
