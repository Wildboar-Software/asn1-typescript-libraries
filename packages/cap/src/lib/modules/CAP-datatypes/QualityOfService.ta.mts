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
import { type GPRS_QoS, _decode_GPRS_QoS, _encode_GPRS_QoS } from "./GPRS-QoS.ta.mjs";
import { GPRS_QoS_Extension, _decode_GPRS_QoS_Extension, _encode_GPRS_QoS_Extension } from "./GPRS-QoS-Extension.ta.mjs";

/**
 * @summary QualityOfService
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * QualityOfService ::= SEQUENCE {
 requested-QoS			[0]	GPRS-QoS				OPTIONAL,
 subscribed-QoS			[1]	GPRS-QoS				OPTIONAL,
 negotiated-QoS			[2]	GPRS-QoS				OPTIONAL,
 ...,
 requested-QoS-Extension		[3]	GPRS-QoS-Extension			OPTIONAL,
 subscribed-QoS-Extension		[4]	GPRS-QoS-Extension			OPTIONAL,
 negotiated-QoS-Extension		[5]	GPRS-QoS-Extension			OPTIONAL
 }
 * ```
 *
 */
export class QualityOfService {
    constructor (
        readonly requested_QoS: OPTIONAL<GPRS_QoS>,
        readonly subscribed_QoS: OPTIONAL<GPRS_QoS>,
        readonly negotiated_QoS: OPTIONAL<GPRS_QoS>,
        readonly requested_QoS_Extension: OPTIONAL<GPRS_QoS_Extension>,
        readonly subscribed_QoS_Extension: OPTIONAL<GPRS_QoS_Extension>,
        readonly negotiated_QoS_Extension: OPTIONAL<GPRS_QoS_Extension>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (QualityOfService)]: (QualityOfService)[_K] }): QualityOfService {
        return new QualityOfService(_o.requested_QoS, _o.subscribed_QoS, _o.negotiated_QoS, _o.requested_QoS_Extension, _o.subscribed_QoS_Extension, _o.negotiated_QoS_Extension, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_QualityOfService: $.ComponentSpec[] = [
    new $.ComponentSpec("requested-QoS", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("subscribed-QoS", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("negotiated-QoS", true, $.hasTag(_TagClass.context, 2))
];

export const _root_component_type_list_2_spec_for_QualityOfService: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_QualityOfService: $.ComponentSpec[] = [
    new $.ComponentSpec("requested-QoS-Extension", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("subscribed-QoS-Extension", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("negotiated-QoS-Extension", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_QualityOfService: $.ASN1Decoder<QualityOfService> | null = null;
export function _decode_QualityOfService (el: _Element): QualityOfService {
    if (!_cached_decoder_for_QualityOfService) {
        _cached_decoder_for_QualityOfService = function (el: _Element): QualityOfService {
    let requested_QoS: OPTIONAL<GPRS_QoS>;
    let subscribed_QoS: OPTIONAL<GPRS_QoS>;
    let negotiated_QoS: OPTIONAL<GPRS_QoS>;
    let requested_QoS_Extension: OPTIONAL<GPRS_QoS_Extension>;
    let subscribed_QoS_Extension: OPTIONAL<GPRS_QoS_Extension>;
    let negotiated_QoS_Extension: OPTIONAL<GPRS_QoS_Extension>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "requested-QoS": (_el: _Element): void => { requested_QoS = $._decode_explicit<GPRS_QoS>(() => _decode_GPRS_QoS)(_el); },
        "subscribed-QoS": (_el: _Element): void => { subscribed_QoS = $._decode_explicit<GPRS_QoS>(() => _decode_GPRS_QoS)(_el); },
        "negotiated-QoS": (_el: _Element): void => { negotiated_QoS = $._decode_explicit<GPRS_QoS>(() => _decode_GPRS_QoS)(_el); },
        "requested-QoS-Extension": (_el: _Element): void => { requested_QoS_Extension = $._decode_implicit<GPRS_QoS_Extension>(() => _decode_GPRS_QoS_Extension)(_el); },
        "subscribed-QoS-Extension": (_el: _Element): void => { subscribed_QoS_Extension = $._decode_implicit<GPRS_QoS_Extension>(() => _decode_GPRS_QoS_Extension)(_el); },
        "negotiated-QoS-Extension": (_el: _Element): void => { negotiated_QoS_Extension = $._decode_implicit<GPRS_QoS_Extension>(() => _decode_GPRS_QoS_Extension)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_QualityOfService,
        _extension_additions_list_spec_for_QualityOfService,
        _root_component_type_list_2_spec_for_QualityOfService,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new QualityOfService(
        requested_QoS,
        subscribed_QoS,
        negotiated_QoS,
        requested_QoS_Extension,
        subscribed_QoS_Extension,
        negotiated_QoS_Extension,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_QualityOfService(el);
}

let _cached_encoder_for_QualityOfService: $.ASN1Encoder<QualityOfService> | null = null;
export function _encode_QualityOfService (value: QualityOfService, elGetter: $.ASN1Encoder<QualityOfService>): _Element {
    if (!_cached_encoder_for_QualityOfService) {
        _cached_encoder_for_QualityOfService = function (value: QualityOfService, elGetter: $.ASN1Encoder<QualityOfService>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.requested_QoS === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_GPRS_QoS, $.BER)(value.requested_QoS, $.BER)),
            /* IF_ABSENT  */ ((value.subscribed_QoS === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_GPRS_QoS, $.BER)(value.subscribed_QoS, $.BER)),
            /* IF_ABSENT  */ ((value.negotiated_QoS === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_GPRS_QoS, $.BER)(value.negotiated_QoS, $.BER)),
            /* IF_ABSENT  */ ((value.requested_QoS_Extension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GPRS_QoS_Extension, $.BER)(value.requested_QoS_Extension, $.BER)),
            /* IF_ABSENT  */ ((value.subscribed_QoS_Extension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_GPRS_QoS_Extension, $.BER)(value.subscribed_QoS_Extension, $.BER)),
            /* IF_ABSENT  */ ((value.negotiated_QoS_Extension === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_GPRS_QoS_Extension, $.BER)(value.negotiated_QoS_Extension, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_QualityOfService(value, elGetter);
}
