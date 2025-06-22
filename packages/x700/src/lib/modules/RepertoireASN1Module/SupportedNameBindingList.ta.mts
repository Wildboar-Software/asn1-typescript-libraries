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
    NameBinding,
    _decode_NameBinding,
    _encode_NameBinding,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/NameBinding.ta.mjs';
/**
 * @summary SupportedNameBindingList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupportedNameBindingList  ::=  SET OF NameBinding
 * ```
 */
export type SupportedNameBindingList = NameBinding[]; // SetOfType

let _cached_decoder_for_SupportedNameBindingList: $.ASN1Decoder<SupportedNameBindingList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedNameBindingList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SupportedNameBindingList} The decoded data structure.
 */
export function _decode_SupportedNameBindingList(el: _Element) {
    if (!_cached_decoder_for_SupportedNameBindingList) {
        _cached_decoder_for_SupportedNameBindingList = $._decodeSetOf<NameBinding>(
            () => _decode_NameBinding
        );
    }
    return _cached_decoder_for_SupportedNameBindingList(el);
}

let _cached_encoder_for_SupportedNameBindingList: $.ASN1Encoder<SupportedNameBindingList> | null = null;

/**
 * @summary Encodes a(n) SupportedNameBindingList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedNameBindingList, encoded as an ASN.1 Element.
 */
export function _encode_SupportedNameBindingList(
    value: SupportedNameBindingList,
    elGetter: $.ASN1Encoder<SupportedNameBindingList>
) {
    if (!_cached_encoder_for_SupportedNameBindingList) {
        _cached_encoder_for_SupportedNameBindingList = $._encodeSetOf<NameBinding>(
            () => _encode_NameBinding,
            $.BER
        );
    }
    return _cached_encoder_for_SupportedNameBindingList(value, elGetter);
}


/* eslint-enable */
