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
    GdmoObjectClass,
    _decode_GdmoObjectClass,
    _encode_GdmoObjectClass,
} from '../RepertoireASN1Module/GdmoObjectClass.ta.mjs';
/**
 * @summary SupportedManagedObjectClassList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedManagedObjectClassList  ::=  SET OF GdmoObjectClass
 * ```
 */
export type SupportedManagedObjectClassList = GdmoObjectClass[]; // SetOfType

let _cached_decoder_for_SupportedManagedObjectClassList: $.ASN1Decoder<SupportedManagedObjectClassList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedManagedObjectClassList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedManagedObjectClassList} The decoded data structure.
 */
export function _decode_SupportedManagedObjectClassList(el: _Element) {
    if (!_cached_decoder_for_SupportedManagedObjectClassList) {
        _cached_decoder_for_SupportedManagedObjectClassList = $._decodeSetOf<GdmoObjectClass>(
            () => _decode_GdmoObjectClass
        );
    }
    return _cached_decoder_for_SupportedManagedObjectClassList(el);
}

let _cached_encoder_for_SupportedManagedObjectClassList: $.ASN1Encoder<SupportedManagedObjectClassList> | null = null;

/**
 * @summary Encodes a(n) SupportedManagedObjectClassList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedManagedObjectClassList, encoded as an ASN.1 Element.
 */
export function _encode_SupportedManagedObjectClassList(
    value: SupportedManagedObjectClassList,
    elGetter: $.ASN1Encoder<SupportedManagedObjectClassList>
) {
    if (!_cached_encoder_for_SupportedManagedObjectClassList) {
        _cached_encoder_for_SupportedManagedObjectClassList = $._encodeSetOf<GdmoObjectClass>(
            () => _encode_GdmoObjectClass,
            $.BER
        );
    }
    return _cached_encoder_for_SupportedManagedObjectClassList(value, elGetter);
}


/* eslint-enable */
