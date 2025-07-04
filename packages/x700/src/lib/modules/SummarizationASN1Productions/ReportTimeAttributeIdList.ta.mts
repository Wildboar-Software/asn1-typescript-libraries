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
} from '@wildboar/cmip';
/**
 * @summary ReportTimeAttributeIdList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReportTimeAttributeIdList  ::=  SET OF AttributeId
 * ```
 */
export type ReportTimeAttributeIdList = AttributeId[]; // SetOfType

let _cached_decoder_for_ReportTimeAttributeIdList: $.ASN1Decoder<ReportTimeAttributeIdList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportTimeAttributeIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReportTimeAttributeIdList} The decoded data structure.
 */
export function _decode_ReportTimeAttributeIdList(el: _Element): ReportTimeAttributeIdList {
    if (!_cached_decoder_for_ReportTimeAttributeIdList) {
        _cached_decoder_for_ReportTimeAttributeIdList = $._decodeSetOf<AttributeId>(
            () => _decode_AttributeId
        );
    }
    return _cached_decoder_for_ReportTimeAttributeIdList(el);
}

let _cached_encoder_for_ReportTimeAttributeIdList: $.ASN1Encoder<ReportTimeAttributeIdList> | null = null;

/**
 * @summary Encodes a(n) ReportTimeAttributeIdList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportTimeAttributeIdList, encoded as an ASN.1 Element.
 */
export function _encode_ReportTimeAttributeIdList(
    value: ReportTimeAttributeIdList,
    elGetter: $.ASN1Encoder<ReportTimeAttributeIdList>
): _Element {
    if (!_cached_encoder_for_ReportTimeAttributeIdList) {
        _cached_encoder_for_ReportTimeAttributeIdList = $._encodeSetOf<AttributeId>(
            () => _encode_AttributeId,
            $.BER
        );
    }
    return _cached_encoder_for_ReportTimeAttributeIdList(value, elGetter);
}


/* eslint-enable */
