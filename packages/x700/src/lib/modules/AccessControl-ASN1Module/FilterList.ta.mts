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
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from '@wildboar/cmip';
/**
 * @summary FilterList
 * @description
 *
 * Set of CMIS filters constraining parameters of management
 * operations. Syntax of `accessControlFilter` (inherited by
 * `attributeFilterList`, `scopeFilter`,
 * `synchronizationFilter`) and of optional action-argument
 * constraints. Each filter addresses a single element of
 * management information; each element appears in at most
 * one filter. Empty set: all possible values are targeted
 * (for `accessControlFilter`) or no constraints (for
 * `attributeFilterList`). Filter-item attribute ids in one
 * filter must be homogeneous; else
 * `invalidAccessControlFilter` (`heterogeneousId`,
 * `duplicateId`, or `invalidId`). ITU-T Rec. X.741 (04/95)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * A.5.2, A.5.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FilterList  ::=  SET OF CMISFilter
 * ```
 */
export type FilterList = CMISFilter[]; // SetOfType

let _cached_decoder_for_FilterList: $.ASN1Decoder<FilterList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FilterList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FilterList} The decoded data structure.
 */
export function _decode_FilterList(el: _Element): FilterList {
    if (!_cached_decoder_for_FilterList) {
        _cached_decoder_for_FilterList = $._decodeSetOf<CMISFilter>(
            () => _decode_CMISFilter
        );
    }
    return _cached_decoder_for_FilterList(el);
}

let _cached_encoder_for_FilterList: $.ASN1Encoder<FilterList> | null = null;

/**
 * @summary Encodes a(n) FilterList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FilterList, encoded as an ASN.1 Element.
 */
export function _encode_FilterList(
    value: FilterList,
    elGetter: $.ASN1Encoder<FilterList>
): _Element {
    if (!_cached_encoder_for_FilterList) {
        _cached_encoder_for_FilterList = $._encodeSetOf<CMISFilter>(
            () => _encode_CMISFilter,
            $.BER
        );
    }
    return _cached_encoder_for_FilterList(value, elGetter);
}


/* eslint-enable */
