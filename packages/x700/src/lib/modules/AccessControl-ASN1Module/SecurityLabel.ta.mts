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
    SecurityLabel_Item,
    _decode_SecurityLabel_Item,
    _encode_SecurityLabel_Item,
} from '../AccessControl-ASN1Module/SecurityLabel-Item.ta.mjs';
/**
 * @summary SecurityLabel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityLabel  ::=
 *   SET OF
 *     CHOICE {initiatorLabel
 *               [1] IMPLICIT SEQUENCE {clearance
 *                                        CHOICE {localForm   [0] IMPLICIT INTEGER,
 *                                                globalForm
 *                                                  [1] IMPLICIT OBJECT IDENTIFIER
 *                                      },
 *                                      category
 *                                        [2] IMPLICIT BIT STRING OPTIONAL
 *             }}
 * ```
 */
export type SecurityLabel = SecurityLabel_Item[]; // SetOfType

let _cached_decoder_for_SecurityLabel: $.ASN1Decoder<SecurityLabel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLabel} The decoded data structure.
 */
export function _decode_SecurityLabel(el: _Element): SecurityLabel {
    if (!_cached_decoder_for_SecurityLabel) {
        _cached_decoder_for_SecurityLabel = $._decodeSetOf<SecurityLabel_Item>(
            () => _decode_SecurityLabel_Item
        );
    }
    return _cached_decoder_for_SecurityLabel(el);
}

let _cached_encoder_for_SecurityLabel: $.ASN1Encoder<SecurityLabel> | null = null;

/**
 * @summary Encodes a(n) SecurityLabel into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabel, encoded as an ASN.1 Element.
 */
export function _encode_SecurityLabel(
    value: SecurityLabel,
    elGetter: $.ASN1Encoder<SecurityLabel>
): _Element {
    if (!_cached_encoder_for_SecurityLabel) {
        _cached_encoder_for_SecurityLabel = $._encodeSetOf<SecurityLabel_Item>(
            () => _encode_SecurityLabel_Item,
            $.BER
        );
    }
    return _cached_encoder_for_SecurityLabel(value, elGetter);
}


/* eslint-enable */
