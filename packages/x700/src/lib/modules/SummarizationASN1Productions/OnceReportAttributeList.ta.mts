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
import * as $ from '@wildboar/asn1/functional';
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/Attribute.ta.mjs';
/**
 * @summary OnceReportAttributeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OnceReportAttributeList  ::=  SET OF Attribute
 * ```
 */
export type OnceReportAttributeList = Attribute[]; // SetOfType

let _cached_decoder_for_OnceReportAttributeList: $.ASN1Decoder<OnceReportAttributeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OnceReportAttributeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OnceReportAttributeList} The decoded data structure.
 */
export function _decode_OnceReportAttributeList(el: _Element) {
    if (!_cached_decoder_for_OnceReportAttributeList) {
        _cached_decoder_for_OnceReportAttributeList = $._decodeSetOf<Attribute>(
            () => _decode_Attribute
        );
    }
    return _cached_decoder_for_OnceReportAttributeList(el);
}

let _cached_encoder_for_OnceReportAttributeList: $.ASN1Encoder<OnceReportAttributeList> | null = null;

/**
 * @summary Encodes a(n) OnceReportAttributeList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OnceReportAttributeList, encoded as an ASN.1 Element.
 */
export function _encode_OnceReportAttributeList(
    value: OnceReportAttributeList,
    elGetter: $.ASN1Encoder<OnceReportAttributeList>
) {
    if (!_cached_encoder_for_OnceReportAttributeList) {
        _cached_encoder_for_OnceReportAttributeList = $._encodeSetOf<Attribute>(
            () => _encode_Attribute,
            $.BER
        );
    }
    return _cached_encoder_for_OnceReportAttributeList(value, elGetter);
}


/* eslint-enable */
