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
    AlarmReportingControl,
    _decode_AlarmReportingControl,
    _encode_AlarmReportingControl,
} from '../M3100ASN1TypeModule4/AlarmReportingControl.ta.mjs';

/**
 * @summary AlarmReportingControlList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlarmReportingControlList  ::=  SET OF AlarmReportingControl
 * ```
 */
export type AlarmReportingControlList = AlarmReportingControl[]; // SetOfType


let _cached_decoder_for_AlarmReportingControlList: $.ASN1Decoder<AlarmReportingControlList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AlarmReportingControlList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmReportingControlList} The decoded data structure.
 */
export function _decode_AlarmReportingControlList(el: _Element): AlarmReportingControlList {
    if (!_cached_decoder_for_AlarmReportingControlList) {
        _cached_decoder_for_AlarmReportingControlList = $._decodeSetOf<AlarmReportingControl>(
            () => _decode_AlarmReportingControl
        );
    }
    return _cached_decoder_for_AlarmReportingControlList(el);
}


let _cached_encoder_for_AlarmReportingControlList: $.ASN1Encoder<AlarmReportingControlList> | null = null;


/**
 * @summary Encodes a(n) AlarmReportingControlList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmReportingControlList, encoded as an ASN.1 Element.
 */
export function _encode_AlarmReportingControlList(
    value: AlarmReportingControlList,
    elGetter: $.ASN1Encoder<AlarmReportingControlList>
): _Element {
    if (!_cached_encoder_for_AlarmReportingControlList) {
        _cached_encoder_for_AlarmReportingControlList = $._encodeSetOf<AlarmReportingControl>(
            () => _encode_AlarmReportingControl,
            $.BER
        );
    }
    return _cached_encoder_for_AlarmReportingControlList(value, elGetter);
}


/* eslint-enable */
