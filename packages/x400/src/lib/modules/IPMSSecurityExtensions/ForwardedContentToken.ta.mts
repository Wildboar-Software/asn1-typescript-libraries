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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ForwardedContentToken_Item,
    _decode_ForwardedContentToken_Item,
    _encode_ForwardedContentToken_Item,
} from '../IPMSSecurityExtensions/ForwardedContentToken-Item.ta.mjs';
/**
 * @summary ForwardedContentToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ForwardedContentToken  ::=
 *   SET OF
 *     SET {body-part-number  BodyPartNumber,
 *          body-part-choice
 *            CHOICE {forwarding-token              MessageToken,
 *                    message-or-content-body-part  ForwardedContentToken
 *          }}
 * ```
 */
export type ForwardedContentToken = ForwardedContentToken_Item[]; // SetOfType

let _cached_decoder_for_ForwardedContentToken: $.ASN1Decoder<ForwardedContentToken> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardedContentToken
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ForwardedContentToken} The decoded data structure.
 */
export function _decode_ForwardedContentToken(el: _Element): ForwardedContentToken {
    if (!_cached_decoder_for_ForwardedContentToken) {
        _cached_decoder_for_ForwardedContentToken = $._decodeSetOf<ForwardedContentToken_Item>(
            () => _decode_ForwardedContentToken_Item
        );
    }
    return _cached_decoder_for_ForwardedContentToken(el);
}

let _cached_encoder_for_ForwardedContentToken: $.ASN1Encoder<ForwardedContentToken> | null = null;

/**
 * @summary Encodes a(n) ForwardedContentToken into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardedContentToken, encoded as an ASN.1 Element.
 */
export function _encode_ForwardedContentToken(
    value: ForwardedContentToken,
    elGetter: $.ASN1Encoder<ForwardedContentToken>
): _Element {
    if (!_cached_encoder_for_ForwardedContentToken) {
        _cached_encoder_for_ForwardedContentToken = $._encodeSetOf<ForwardedContentToken_Item>(
            () => _encode_ForwardedContentToken_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ForwardedContentToken(value, elGetter);
}


/* eslint-enable */
