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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Message,
    _decode_Message,
    _encode_Message,
} from '../MTAAbstractService/Message.ta.mjs';
import {
    Probe,
    _decode_Probe,
    _encode_Probe,
} from '../MTAAbstractService/Probe.ta.mjs';
import {
    Report,
    _decode_Report,
    _encode_Report,
} from '../MTAAbstractService/Report.ta.mjs';
/**
 * @summary MTS_APDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MTS-APDU  ::=  CHOICE {
 *   message  [0]  Message,
 *   probe    [2]  Probe,
 *   report   [1]  Report
 * }
 * ```
 */
export type MTS_APDU =
    | { message: Message } /* CHOICE_ALT_ROOT */
    | { probe: Probe } /* CHOICE_ALT_ROOT */
    | { report: Report } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MTS_APDU: $.ASN1Decoder<MTS_APDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MTS_APDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MTS_APDU} The decoded data structure.
 */
export function _decode_MTS_APDU(el: _Element) {
    if (!_cached_decoder_for_MTS_APDU) {
        _cached_decoder_for_MTS_APDU = $._decode_inextensible_choice<MTS_APDU>({
            'CONTEXT 0': [
                'message',
                $._decode_implicit<Message>(() => _decode_Message),
            ],
            'CONTEXT 2': [
                'probe',
                $._decode_implicit<Probe>(() => _decode_Probe),
            ],
            'CONTEXT 1': [
                'report',
                $._decode_implicit<Report>(() => _decode_Report),
            ],
        });
    }
    return _cached_decoder_for_MTS_APDU(el);
}

let _cached_encoder_for_MTS_APDU: $.ASN1Encoder<MTS_APDU> | null = null;

/**
 * @summary Encodes a(n) MTS_APDU into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MTS_APDU, encoded as an ASN.1 Element.
 */
export function _encode_MTS_APDU(
    value: MTS_APDU,
    elGetter: $.ASN1Encoder<MTS_APDU>
) {
    if (!_cached_encoder_for_MTS_APDU) {
        _cached_encoder_for_MTS_APDU = $._encode_choice<MTS_APDU>(
            {
                message: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_Message,
                    $.BER
                ),
                probe: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_Probe,
                    $.BER
                ),
                report: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_Report,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_MTS_APDU(value, elGetter);
}


/* eslint-enable */
