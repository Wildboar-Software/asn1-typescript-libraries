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
    AttributeId,
    _decode_AttributeId,
    _encode_AttributeId,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/AttributeId.ta.mjs';
/**
 * @summary ScanAttributeIdList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScanAttributeIdList  ::=  SET OF AttributeId
 * ```
 */
export type ScanAttributeIdList = AttributeId[]; // SetOfType

let _cached_decoder_for_ScanAttributeIdList: $.ASN1Decoder<ScanAttributeIdList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScanAttributeIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScanAttributeIdList} The decoded data structure.
 */
export function _decode_ScanAttributeIdList(el: _Element): ScanAttributeIdList {
    if (!_cached_decoder_for_ScanAttributeIdList) {
        _cached_decoder_for_ScanAttributeIdList = $._decodeSetOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_ScanAttributeIdList(el);
}

let _cached_encoder_for_ScanAttributeIdList: $.ASN1Encoder<ScanAttributeIdList> | null = null;

/**
 * @summary Encodes a(n) ScanAttributeIdList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScanAttributeIdList, encoded as an ASN.1 Element.
 */
export function _encode_ScanAttributeIdList(
    value: ScanAttributeIdList,
    elGetter: $.ASN1Encoder<ScanAttributeIdList>
): _Element {
    if (!_cached_encoder_for_ScanAttributeIdList) {
        _cached_encoder_for_ScanAttributeIdList = $._encodeSetOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_ScanAttributeIdList(value, elGetter);
}


/* eslint-enable */
