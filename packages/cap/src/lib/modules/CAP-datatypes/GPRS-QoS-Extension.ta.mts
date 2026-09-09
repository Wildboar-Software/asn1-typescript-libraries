import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Ext2_QoS_Subscribed, _decode_Ext2_QoS_Subscribed, _encode_Ext2_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext2-QoS-Subscribed.ta.mjs";
import { type Ext3_QoS_Subscribed, _decode_Ext3_QoS_Subscribed, _encode_Ext3_QoS_Subscribed } from "../MAP-MS-DataTypes/Ext3-QoS-Subscribed.ta.mjs";

/**
 * @summary GPRS_QoS_Extension
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GPRS-QoS-Extension ::= SEQUENCE {
 supplement-to-long-QoS-format	[0] Ext2-QoS-Subscribed,
 ... ,
 additionalSupplement			[1] Ext3-QoS-Subscribed	OPTIONAL
 }
 * ```
 *
 */
export class GPRS_QoS_Extension {
    constructor (
        readonly supplement_to_long_QoS_format: Ext2_QoS_Subscribed,
        readonly additionalSupplement: OPTIONAL<Ext3_QoS_Subscribed>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (GPRS_QoS_Extension)]: (GPRS_QoS_Extension)[_K] }): GPRS_QoS_Extension {
        return new GPRS_QoS_Extension(_o.supplement_to_long_QoS_format, _o.additionalSupplement, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_GPRS_QoS_Extension: $.ComponentSpec[] = [
    new $.ComponentSpec("supplement-to-long-QoS-format", false, $.hasTag(_TagClass.context, 0))
];

export const _root_component_type_list_2_spec_for_GPRS_QoS_Extension: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_GPRS_QoS_Extension: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalSupplement", true, $.hasTag(_TagClass.context, 1))
];

let _cached_decoder_for_GPRS_QoS_Extension: $.ASN1Decoder<GPRS_QoS_Extension> | null = null;
export function _decode_GPRS_QoS_Extension (el: _Element): GPRS_QoS_Extension {
    if (!_cached_decoder_for_GPRS_QoS_Extension) {
        _cached_decoder_for_GPRS_QoS_Extension = function (el: _Element): GPRS_QoS_Extension {
    let supplement_to_long_QoS_format!: Ext2_QoS_Subscribed;
    let additionalSupplement: OPTIONAL<Ext3_QoS_Subscribed>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "supplement-to-long-QoS-format": (_el: _Element): void => { supplement_to_long_QoS_format = $._decode_implicit<Ext2_QoS_Subscribed>(() => _decode_Ext2_QoS_Subscribed)(_el); },
        "additionalSupplement": (_el: _Element): void => { additionalSupplement = $._decode_implicit<Ext3_QoS_Subscribed>(() => _decode_Ext3_QoS_Subscribed)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRS_QoS_Extension,
        _extension_additions_list_spec_for_GPRS_QoS_Extension,
        _root_component_type_list_2_spec_for_GPRS_QoS_Extension,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRS_QoS_Extension(
        supplement_to_long_QoS_format,
        additionalSupplement,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_GPRS_QoS_Extension(el);
}

let _cached_encoder_for_GPRS_QoS_Extension: $.ASN1Encoder<GPRS_QoS_Extension> | null = null;
export function _encode_GPRS_QoS_Extension (value: GPRS_QoS_Extension, elGetter: $.ASN1Encoder<GPRS_QoS_Extension>): _Element {
    if (!_cached_encoder_for_GPRS_QoS_Extension) {
        _cached_encoder_for_GPRS_QoS_Extension = function (value: GPRS_QoS_Extension): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Ext2_QoS_Subscribed, $.BER)(value.supplement_to_long_QoS_format, $.BER),
            /* IF_ABSENT  */ ((value.additionalSupplement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Ext3_QoS_Subscribed, $.BER)(value.additionalSupplement, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_GPRS_QoS_Extension(value, elGetter);
}
