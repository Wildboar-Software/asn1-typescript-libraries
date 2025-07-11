/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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

/**
 * @summary MistypedTestCategoryInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MistypedTestCategoryInformation  ::=  OBJECT IDENTIFIER
 * ```
 */
export type MistypedTestCategoryInformation = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_MistypedTestCategoryInformation: $.ASN1Decoder<MistypedTestCategoryInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MistypedTestCategoryInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MistypedTestCategoryInformation} The decoded data structure.
 */
export function _decode_MistypedTestCategoryInformation(el: _Element): MistypedTestCategoryInformation {
    if (!_cached_decoder_for_MistypedTestCategoryInformation) {
        _cached_decoder_for_MistypedTestCategoryInformation =
            $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_MistypedTestCategoryInformation(el);
}

let _cached_encoder_for_MistypedTestCategoryInformation: $.ASN1Encoder<MistypedTestCategoryInformation> | null = null;

/**
 * @summary Encodes a(n) MistypedTestCategoryInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MistypedTestCategoryInformation, encoded as an ASN.1 Element.
 */
export function _encode_MistypedTestCategoryInformation(
    value: MistypedTestCategoryInformation,
    elGetter: $.ASN1Encoder<MistypedTestCategoryInformation>
): _Element {
    if (!_cached_encoder_for_MistypedTestCategoryInformation) {
        _cached_encoder_for_MistypedTestCategoryInformation =
            $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_MistypedTestCategoryInformation(value, elGetter);
}


/* eslint-enable */
