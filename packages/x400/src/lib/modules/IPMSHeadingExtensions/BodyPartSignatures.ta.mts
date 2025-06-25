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
    BodyPartSignatures_Item,
    _decode_BodyPartSignatures_Item,
    _encode_BodyPartSignatures_Item,
} from '../IPMSHeadingExtensions/BodyPartSignatures-Item.ta.mjs';
/**
 * @summary BodyPartSignatures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSignatures  ::=
 *   SET OF
 *     SET {body-part-number                 BodyPartNumber,
 *          body-part-signature              BodyPartSignature,
 *          originator-certificate-selector  [1]  CertificateAssertion OPTIONAL,
 *          originator-certificates          [0]  ExtendedCertificates OPTIONAL,
 *          ...}
 * ```
 */
export type BodyPartSignatures = BodyPartSignatures_Item[]; // SetOfType

let _cached_decoder_for_BodyPartSignatures: $.ASN1Decoder<BodyPartSignatures> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSignatures
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSignatures} The decoded data structure.
 */
export function _decode_BodyPartSignatures(el: _Element): BodyPartSignatures {
    if (!_cached_decoder_for_BodyPartSignatures) {
        _cached_decoder_for_BodyPartSignatures = $._decodeSetOf<BodyPartSignatures_Item>(
            () => _decode_BodyPartSignatures_Item
        );
    }
    return _cached_decoder_for_BodyPartSignatures(el);
}

let _cached_encoder_for_BodyPartSignatures: $.ASN1Encoder<BodyPartSignatures> | null = null;

/**
 * @summary Encodes a(n) BodyPartSignatures into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSignatures, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSignatures(
    value: BodyPartSignatures,
    elGetter: $.ASN1Encoder<BodyPartSignatures>
): _Element {
    if (!_cached_encoder_for_BodyPartSignatures) {
        _cached_encoder_for_BodyPartSignatures = $._encodeSetOf<BodyPartSignatures_Item>(
            () => _encode_BodyPartSignatures_Item,
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartSignatures(value, elGetter);
}


/* eslint-enable */
