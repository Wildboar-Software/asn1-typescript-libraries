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
import { PrivateKeyChoice, _decode_PrivateKeyChoice, _encode_PrivateKeyChoice } from "../CryptographicInformationFramework/PrivateKeyChoice.ta.mjs";


/**
 * @summary PrivateKeys
 * @description
 * 
 * Private-key directory contents (EF.PrKD), or an inline sequence in EF.OD.
 * ISO/IEC 7816-15:2016 §8.3, §7.5.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateKeys  ::=  PathOrObjects {PrivateKeyChoice}
 * ```
 */
export
type PrivateKeys = PathOrObjects<PrivateKeyChoice>; // DefinedType

let _cached_decoder_for_PrivateKeys: $.ASN1Decoder<PrivateKeys> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateKeys
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateKeys (el: _Element): PrivateKeys {
    if (!_cached_decoder_for_PrivateKeys) { _cached_decoder_for_PrivateKeys = _get_decoder_for_PathOrObjects<PrivateKeyChoice>(_decode_PrivateKeyChoice); }
    return _cached_decoder_for_PrivateKeys(el);
}

let _cached_encoder_for_PrivateKeys: $.ASN1Encoder<PrivateKeys> | null = null;

/**
 * @summary Encodes a(n) PrivateKeys into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateKeys, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateKeys (value: PrivateKeys, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateKeys) { _cached_encoder_for_PrivateKeys = _get_encoder_for_PathOrObjects<PrivateKeyChoice>(_encode_PrivateKeyChoice); }
    return _cached_encoder_for_PrivateKeys(value, elGetter);
}


/* eslint-enable */
