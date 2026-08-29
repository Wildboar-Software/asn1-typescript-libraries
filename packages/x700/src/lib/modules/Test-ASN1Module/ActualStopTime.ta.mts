/* eslint-disable */
import {
    NULL,
    GeneralizedTime,
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

/**
 * @summary ActualStopTime
 * @description
 *
 * Time the test performer expects a TO to end execution, or the time it did
 * end. Not SET by the test conductor. Default unknown. Mandatory in a
 * scheduling-conflict notification. If this becomes later than the requested
 * stop, the TO shall cease execution (if executing) and emit
 * schedulingConflict. ITU-T Rec. X.745 (11/93) §7.2.2, 8.2.1, 9.10.
 * [§7.2.2](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ActualStopTime  ::=  CHOICE {unknown     NULL,
 *                            actualStop  GeneralizedTime
 * }
 * ```
 */
export type ActualStopTime =
    | { unknown: NULL } /* CHOICE_ALT_ROOT */
    | { actualStop: GeneralizedTime } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ActualStopTime: $.ASN1Decoder<ActualStopTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActualStopTime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ActualStopTime} The decoded data structure.
 */
export function _decode_ActualStopTime(el: _Element): ActualStopTime {
    if (!_cached_decoder_for_ActualStopTime) {
        _cached_decoder_for_ActualStopTime = $._decode_inextensible_choice<ActualStopTime>(
            {
                'UNIVERSAL 5': ['unknown', $._decodeNull],
                'UNIVERSAL 24': ['actualStop', $._decodeGeneralizedTime],
            }
        );
    }
    return _cached_decoder_for_ActualStopTime(el);
}

let _cached_encoder_for_ActualStopTime: $.ASN1Encoder<ActualStopTime> | null = null;

/**
 * @summary Encodes a(n) ActualStopTime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActualStopTime, encoded as an ASN.1 Element.
 */
export function _encode_ActualStopTime(
    value: ActualStopTime,
    elGetter: $.ASN1Encoder<ActualStopTime>
): _Element {
    if (!_cached_encoder_for_ActualStopTime) {
        _cached_encoder_for_ActualStopTime = $._encode_choice<ActualStopTime>(
            {
                unknown: $._encodeNull,
                actualStop: $._encodeGeneralizedTime,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ActualStopTime(value, elGetter);
}


/* eslint-enable */
