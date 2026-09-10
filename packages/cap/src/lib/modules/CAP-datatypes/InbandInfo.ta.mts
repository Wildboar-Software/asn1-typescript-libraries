import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type MessageID, _decode_MessageID, _encode_MessageID } from "./MessageID.ta.mjs";

/**
 * @summary InbandInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InbandInfo {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *  messageID				[0] MessageID {bound},
 *  numberOfRepetitions			[1] INTEGER (1..127)			OPTIONAL,
 *  duration				[2] INTEGER (0..32767)			OPTIONAL,
 *  interval				[3] INTEGER (0..32767)			OPTIONAL,
 * ...
 *  }
 * ```
 *
 */
export class InbandInfo {
    constructor (
        readonly messageID: MessageID,
        readonly numberOfRepetitions: OPTIONAL<INTEGER>,
        readonly duration: OPTIONAL<INTEGER>,
        readonly interval: OPTIONAL<INTEGER>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {
        if (numberOfRepetitions !== undefined && (typeof numberOfRepetitions === "bigint" ? (numberOfRepetitions < 1n || numberOfRepetitions > 127n) : (numberOfRepetitions < 1 || numberOfRepetitions > 127))) {
            throw new ASN1OverflowError("InbandInfo.numberOfRepetitions violates INTEGER constraint");
        }
        if (duration !== undefined && (typeof duration === "bigint" ? (duration < 0n || duration > 32767n) : (duration < 0 || duration > 32767))) {
            throw new ASN1OverflowError("InbandInfo.duration violates INTEGER constraint");
        }
        if (interval !== undefined && (typeof interval === "bigint" ? (interval < 0n || interval > 32767n) : (interval < 0 || interval > 32767))) {
            throw new ASN1OverflowError("InbandInfo.interval violates INTEGER constraint");
        }
    }

    public static _from_object (_o: { [_K in keyof (InbandInfo)]: (InbandInfo)[_K] }): InbandInfo {
        return new InbandInfo(_o.messageID, _o.numberOfRepetitions, _o.duration, _o.interval, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_InbandInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("messageID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberOfRepetitions", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("interval", true, $.hasTag(_TagClass.context, 3))
];

export const _root_component_type_list_2_spec_for_InbandInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_InbandInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_InbandInfo: $.ASN1Decoder<InbandInfo> | null = null;
export function _decode_InbandInfo (el: _Element): InbandInfo {
    if (!_cached_decoder_for_InbandInfo) {
        _cached_decoder_for_InbandInfo = function (el: _Element): InbandInfo {
    let messageID!: MessageID;
    let numberOfRepetitions: OPTIONAL<INTEGER>;
    let duration: OPTIONAL<INTEGER>;
    let interval: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "messageID": (_el: _Element): void => { messageID = $._decode_explicit<MessageID>(() => _decode_MessageID)(_el); },
        "numberOfRepetitions": (_el: _Element): void => { numberOfRepetitions = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "interval": (_el: _Element): void => { interval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InbandInfo,
        _extension_additions_list_spec_for_InbandInfo,
        _root_component_type_list_2_spec_for_InbandInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InbandInfo(
        messageID,
        numberOfRepetitions,
        duration,
        interval,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_InbandInfo(el);
}

let _cached_encoder_for_InbandInfo: $.ASN1Encoder<InbandInfo> | null = null;
export function _encode_InbandInfo (value: InbandInfo, elGetter: $.ASN1Encoder<InbandInfo>): _Element {
    if (!_cached_encoder_for_InbandInfo) {
        _cached_encoder_for_InbandInfo = function (value: InbandInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_MessageID, $.BER)(value.messageID, $.BER),
            /* IF_ABSENT  */ ((value.numberOfRepetitions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numberOfRepetitions, $.BER)),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.duration, $.BER)),
            /* IF_ABSENT  */ ((value.interval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.interval, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_InbandInfo(value, elGetter);
}
