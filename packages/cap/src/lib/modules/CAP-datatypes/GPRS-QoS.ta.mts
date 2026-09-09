import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type QoS_Subscribed, _decode_QoS_Subscribed, _encode_QoS_Subscribed } from "../MAP-MS-DataTypes/QoS-Subscribed.ta.mjs";
import { type Ext_QoS_Subscribed, _decode_Ext_QoS_Subscribed, _encode_Ext_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext-QoS-Subscribed.ta.mjs";

/**
 * @summary GPRS_QoS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GPRS-QoS ::= CHOICE {
 short-QoS-format			[0]	QoS-Subscribed,
 long-QoS-format			[1]	Ext-QoS-Subscribed
 }
 * ```
 *
 */
export type GPRS_QoS =
{ short_QoS_format: QoS_Subscribed }
    | { long_QoS_format: Ext_QoS_Subscribed };

let _cached_decoder_for_GPRS_QoS: $.ASN1Decoder<GPRS_QoS> | null = null;
export function _decode_GPRS_QoS (el: _Element): GPRS_QoS {
    if (!_cached_decoder_for_GPRS_QoS) {
        _cached_decoder_for_GPRS_QoS = $._decode_inextensible_choice<GPRS_QoS>({
    "CONTEXT 0": [ "short_QoS_format", $._decode_implicit<QoS_Subscribed>(() => _decode_QoS_Subscribed) ],
    "CONTEXT 1": [ "long_QoS_format", $._decode_implicit<Ext_QoS_Subscribed>(() => _decode_Ext_QoS_Subscribed) ]
        });
    }
    return _cached_decoder_for_GPRS_QoS(el);
}

let _cached_encoder_for_GPRS_QoS: $.ASN1Encoder<GPRS_QoS> | null = null;
export function _encode_GPRS_QoS (value: GPRS_QoS, elGetter: $.ASN1Encoder<GPRS_QoS>): _Element {
    if (!_cached_encoder_for_GPRS_QoS) {
        _cached_encoder_for_GPRS_QoS = $._encode_choice<GPRS_QoS>({
    "short_QoS_format": $._encode_implicit(_TagClass.context, 0, () => _encode_QoS_Subscribed, $.BER),
    "long_QoS_format": $._encode_implicit(_TagClass.context, 1, () => _encode_Ext_QoS_Subscribed, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_GPRS_QoS(value, elGetter);
}
