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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    BodyPartTokens_Item,
    _decode_BodyPartTokens_Item,
    _encode_BodyPartTokens_Item,
} from '../IPMSSecurityExtensions/BodyPartTokens-Item.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BodyPartTokens */
/**
 * @summary BodyPartTokens
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartTokens  ::=
 *   SET OF
 *     SET {body-part-number  BodyPartNumber,
 *          body-part-choice
 *            CHOICE {encryption-token              EncryptionToken,
 *                    message-or-content-body-part  [0]  BodyPartTokens}
 *     }
 * ```
 */
export type BodyPartTokens = BodyPartTokens_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION BodyPartTokens */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartTokens */
let _cached_decoder_for_BodyPartTokens: $.ASN1Decoder<BodyPartTokens> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartTokens */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartTokens */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartTokens
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartTokens} The decoded data structure.
 */
export function _decode_BodyPartTokens(el: _Element) {
    if (!_cached_decoder_for_BodyPartTokens) {
        _cached_decoder_for_BodyPartTokens = $._decodeSetOf<BodyPartTokens_Item>(
            () => _decode_BodyPartTokens_Item
        );
    }
    return _cached_decoder_for_BodyPartTokens(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartTokens */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartTokens */
let _cached_encoder_for_BodyPartTokens: $.ASN1Encoder<BodyPartTokens> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartTokens */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartTokens */
/**
 * @summary Encodes a(n) BodyPartTokens into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartTokens, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartTokens(
    value: BodyPartTokens,
    elGetter: $.ASN1Encoder<BodyPartTokens>
) {
    if (!_cached_encoder_for_BodyPartTokens) {
        _cached_encoder_for_BodyPartTokens = $._encodeSetOf<BodyPartTokens_Item>(
            () => _encode_BodyPartTokens_Item,
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartTokens(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartTokens */

/* eslint-enable */
