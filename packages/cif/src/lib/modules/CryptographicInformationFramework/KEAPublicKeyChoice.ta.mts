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
import { KEAPublicKey, _decode_KEAPublicKey, _encode_KEAPublicKey } from "../CryptographicInformationFramework/KEAPublicKey.ta.mjs";
// export { KEAPublicKey, _decode_KEAPublicKey, _encode_KEAPublicKey } from "../CryptographicInformationFramework/KEAPublicKey.ta.mjs";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
// export { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";


/**
 * @summary KEAPublicKeyChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KEAPublicKeyChoice  ::=  CHOICE {
 *     raw     KEAPublicKey,
 *     spki    SubjectPublicKeyInfo, -- See ISO/IEC 9594-8. Must contain a public KEA key.
 *     ...
 * }
 * ```
 */
export
type KEAPublicKeyChoice =
    { raw: KEAPublicKey } /* CHOICE_ALT_ROOT */
    | { spki: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_KEAPublicKeyChoice: $.ASN1Decoder<KEAPublicKeyChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KEAPublicKeyChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KEAPublicKeyChoice (el: _Element): KEAPublicKeyChoice {
    if (!_cached_decoder_for_KEAPublicKeyChoice) { _cached_decoder_for_KEAPublicKeyChoice = $._decode_extensible_choice<KEAPublicKeyChoice>({
    "UNIVERSAL 2": [ "raw", _decode_KEAPublicKey ],
    "UNIVERSAL 16": [ "spki", _decode_SubjectPublicKeyInfo ]
}); }
    return _cached_decoder_for_KEAPublicKeyChoice(el);
}

let _cached_encoder_for_KEAPublicKeyChoice: $.ASN1Encoder<KEAPublicKeyChoice> | null = null;

/**
 * @summary Encodes a(n) KEAPublicKeyChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KEAPublicKeyChoice, encoded as an ASN.1 Element.
 */
export
function _encode_KEAPublicKeyChoice (value: KEAPublicKeyChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KEAPublicKeyChoice) { _cached_encoder_for_KEAPublicKeyChoice = $._encode_choice<KEAPublicKeyChoice>({
    "raw": _encode_KEAPublicKey,
    "spki": _encode_SubjectPublicKeyInfo,
}, $.BER); }
    return _cached_encoder_for_KEAPublicKeyChoice(value, elGetter);
}


/* eslint-enable */
