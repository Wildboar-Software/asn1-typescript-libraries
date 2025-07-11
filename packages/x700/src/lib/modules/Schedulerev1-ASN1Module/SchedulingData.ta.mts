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
    SchedulingData_Item,
    _decode_SchedulingData_Item,
    _encode_SchedulingData_Item,
} from '../Schedulerev1-ASN1Module/SchedulingData-Item.ta.mjs';

/**
 * @summary SchedulingData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SchedulingData  ::=
 *   SET OF
 *     SEQUENCE {indexOrOperSpec  [0]  IndexOrOperSpec,
 *               schedule         [1]  Schedule,
 *               priority         [2]  INTEGER OPTIONAL}
 * ```
 */
export type SchedulingData = SchedulingData_Item[]; // SetOfType


let _cached_decoder_for_SchedulingData: $.ASN1Decoder<SchedulingData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SchedulingData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SchedulingData} The decoded data structure.
 */
export function _decode_SchedulingData(el: _Element): SchedulingData {
    if (!_cached_decoder_for_SchedulingData) {
        _cached_decoder_for_SchedulingData = $._decodeSetOf<SchedulingData_Item>(
            () => _decode_SchedulingData_Item
        );
    }
    return _cached_decoder_for_SchedulingData(el);
}


let _cached_encoder_for_SchedulingData: $.ASN1Encoder<SchedulingData> | null = null;


/**
 * @summary Encodes a(n) SchedulingData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchedulingData, encoded as an ASN.1 Element.
 */
export function _encode_SchedulingData(
    value: SchedulingData,
    elGetter: $.ASN1Encoder<SchedulingData>
): _Element {
    if (!_cached_encoder_for_SchedulingData) {
        _cached_encoder_for_SchedulingData = $._encodeSetOf<SchedulingData_Item>(
            () => _encode_SchedulingData_Item,
            $.BER
        );
    }
    return _cached_encoder_for_SchedulingData(value, elGetter);
}


/* eslint-enable */
