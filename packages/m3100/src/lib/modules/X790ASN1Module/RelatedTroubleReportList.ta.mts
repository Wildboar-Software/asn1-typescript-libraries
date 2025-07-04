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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';

/**
 * @summary RelatedTroubleReportList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedTroubleReportList  ::=  SET OF ObjectInstance
 * ```
 */
export type RelatedTroubleReportList = ObjectInstance[]; // SetOfType


let _cached_decoder_for_RelatedTroubleReportList: $.ASN1Decoder<RelatedTroubleReportList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RelatedTroubleReportList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedTroubleReportList} The decoded data structure.
 */
export function _decode_RelatedTroubleReportList(el: _Element): RelatedTroubleReportList {
    if (!_cached_decoder_for_RelatedTroubleReportList) {
        _cached_decoder_for_RelatedTroubleReportList = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_RelatedTroubleReportList(el);
}


let _cached_encoder_for_RelatedTroubleReportList: $.ASN1Encoder<RelatedTroubleReportList> | null = null;


/**
 * @summary Encodes a(n) RelatedTroubleReportList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedTroubleReportList, encoded as an ASN.1 Element.
 */
export function _encode_RelatedTroubleReportList(
    value: RelatedTroubleReportList,
    elGetter: $.ASN1Encoder<RelatedTroubleReportList>
): _Element {
    if (!_cached_encoder_for_RelatedTroubleReportList) {
        _cached_encoder_for_RelatedTroubleReportList = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_RelatedTroubleReportList(value, elGetter);
}


/* eslint-enable */
