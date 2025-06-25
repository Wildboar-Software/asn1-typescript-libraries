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
    ObservationId,
    _decode_ObservationId,
    _encode_ObservationId,
} from '../SummarizationASN1Productions/ObservationId.ta.mjs';
/**
 * @summary ObservationIdList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObservationIdList  ::=  SET OF ObservationId
 * ```
 */
export type ObservationIdList = ObservationId[]; // SetOfType

let _cached_decoder_for_ObservationIdList: $.ASN1Decoder<ObservationIdList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObservationIdList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObservationIdList} The decoded data structure.
 */
export function _decode_ObservationIdList(el: _Element): ObservationIdList {
    if (!_cached_decoder_for_ObservationIdList) {
        _cached_decoder_for_ObservationIdList = $._decodeSetOf<ObservationId>(
            () => _decode_ObservationId
        );
    }
    return _cached_decoder_for_ObservationIdList(el);
}

let _cached_encoder_for_ObservationIdList: $.ASN1Encoder<ObservationIdList> | null = null;

/**
 * @summary Encodes a(n) ObservationIdList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObservationIdList, encoded as an ASN.1 Element.
 */
export function _encode_ObservationIdList(
    value: ObservationIdList,
    elGetter: $.ASN1Encoder<ObservationIdList>
): _Element {
    if (!_cached_encoder_for_ObservationIdList) {
        _cached_encoder_for_ObservationIdList = $._encodeSetOf<ObservationId>(
            () => _encode_ObservationId,
            $.BER
        );
    }
    return _cached_encoder_for_ObservationIdList(value, elGetter);
}


/* eslint-enable */
