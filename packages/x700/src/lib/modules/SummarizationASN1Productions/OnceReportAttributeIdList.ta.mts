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
 * @summary OnceReportAttributeIdList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OnceReportAttributeIdList  ::=  SET OF AttributeId
 * ```
 */
export type OnceReportAttributeIdList = AttributeId[]; // SetOfType

let _cached_decoder_for_OnceReportAttributeIdList: $.ASN1Decoder<OnceReportAttributeIdList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OnceReportAttributeIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OnceReportAttributeIdList} The decoded data structure.
 */
export function _decode_OnceReportAttributeIdList(el: _Element) {
    if (!_cached_decoder_for_OnceReportAttributeIdList) {
        _cached_decoder_for_OnceReportAttributeIdList = $._decodeSetOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_OnceReportAttributeIdList(el);
}

let _cached_encoder_for_OnceReportAttributeIdList: $.ASN1Encoder<OnceReportAttributeIdList> | null = null;

/**
 * @summary Encodes a(n) OnceReportAttributeIdList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OnceReportAttributeIdList, encoded as an ASN.1 Element.
 */
export function _encode_OnceReportAttributeIdList(
    value: OnceReportAttributeIdList,
    elGetter: $.ASN1Encoder<OnceReportAttributeIdList>
) {
    if (!_cached_encoder_for_OnceReportAttributeIdList) {
        _cached_encoder_for_OnceReportAttributeIdList = $._encodeSetOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_OnceReportAttributeIdList(value, elGetter);
}


/* eslint-enable */
