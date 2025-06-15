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
    PackageConflict_Item,
    _decode_PackageConflict_Item,
    _encode_PackageConflict_Item,
} from '../SummarizationASN1Productions/PackageConflict-Item.ta.mjs';
/**
 * @summary PackageConflict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PackageConflict  ::=
 *   SET OF
 *     CHOICE {conflictingPackagesPresent  [0]  Packages,
 *             packagesMissing             [1]  Packages}
 * ```
 */
export type PackageConflict = PackageConflict_Item[]; // SetOfType

let _cached_decoder_for_PackageConflict: $.ASN1Decoder<PackageConflict> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PackageConflict
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PackageConflict} The decoded data structure.
 */
export function _decode_PackageConflict(el: _Element) {
    if (!_cached_decoder_for_PackageConflict) {
        _cached_decoder_for_PackageConflict = $._decodeSetOf<PackageConflict_Item>(
            () => _decode_PackageConflict_Item
        );
    }
    return _cached_decoder_for_PackageConflict(el);
}

let _cached_encoder_for_PackageConflict: $.ASN1Encoder<PackageConflict> | null = null;

/**
 * @summary Encodes a(n) PackageConflict into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PackageConflict, encoded as an ASN.1 Element.
 */
export function _encode_PackageConflict(
    value: PackageConflict,
    elGetter: $.ASN1Encoder<PackageConflict>
) {
    if (!_cached_encoder_for_PackageConflict) {
        _cached_encoder_for_PackageConflict = $._encodeSetOf<PackageConflict_Item>(
            () => _encode_PackageConflict_Item,
            $.BER
        );
    }
    return _cached_encoder_for_PackageConflict(value, elGetter);
}


/* eslint-enable */
