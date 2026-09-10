import {
    OPTIONAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "./CalledPartyNumber.ta.mjs";
import { type ChargeIndicator, _decode_ChargeIndicator, _encode_ChargeIndicator } from "./ChargeIndicator.ta.mjs";
import { type Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";

/**
 * @summary EventSpecificInformationBCSM_oAnswerSpecificInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SEQUENCE {
 *  destinationAddress			[50] CalledPartyNumber {bound}		OPTIONAL,
 *  or-Call				[51] NULL				OPTIONAL,
 *  forwardedCall			[52] NULL				OPTIONAL,
 *  chargeIndicator			[53] ChargeIndicator			OPTIONAL,
 *  ext-basicServiceCode		[54] Ext-BasicServiceCode		OPTIONAL,
 *  ext-basicServiceCode2		[55] Ext-BasicServiceCode		OPTIONAL,
 *  ...
 *  }
 * ```
 *
 */
export class EventSpecificInformationBCSM_oAnswerSpecificInfo {
    constructor (
        readonly destinationAddress: OPTIONAL<CalledPartyNumber>,
        readonly or_Call: OPTIONAL<NULL>,
        readonly forwardedCall: OPTIONAL<NULL>,
        readonly chargeIndicator: OPTIONAL<ChargeIndicator>,
        readonly ext_basicServiceCode: OPTIONAL<Ext_BasicServiceCode>,
        readonly ext_basicServiceCode2: OPTIONAL<Ext_BasicServiceCode>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (EventSpecificInformationBCSM_oAnswerSpecificInfo)]: (EventSpecificInformationBCSM_oAnswerSpecificInfo)[_K] }): EventSpecificInformationBCSM_oAnswerSpecificInfo {
        return new EventSpecificInformationBCSM_oAnswerSpecificInfo(_o.destinationAddress, _o.or_Call, _o.forwardedCall, _o.chargeIndicator, _o.ext_basicServiceCode, _o.ext_basicServiceCode2, _o._unrecognizedExtensionsList);
    }
}

export const _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationAddress", true, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("or-Call", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("forwardedCall", true, $.hasTag(_TagClass.context, 52)),
    new $.ComponentSpec("chargeIndicator", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("ext-basicServiceCode", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("ext-basicServiceCode2", true, $.hasTag(_TagClass.context, 55))
];

export const _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo: $.ASN1Decoder<EventSpecificInformationBCSM_oAnswerSpecificInfo> | null = null;
export function _decode_EventSpecificInformationBCSM_oAnswerSpecificInfo (el: _Element): EventSpecificInformationBCSM_oAnswerSpecificInfo {
    if (!_cached_decoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo) {
        _cached_decoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo = function (el: _Element): EventSpecificInformationBCSM_oAnswerSpecificInfo {
    let destinationAddress: OPTIONAL<CalledPartyNumber>;
    let or_Call: OPTIONAL<NULL>;
    let forwardedCall: OPTIONAL<NULL>;
    let chargeIndicator: OPTIONAL<ChargeIndicator>;
    let ext_basicServiceCode: OPTIONAL<Ext_BasicServiceCode>;
    let ext_basicServiceCode2: OPTIONAL<Ext_BasicServiceCode>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "destinationAddress": (_el: _Element): void => { destinationAddress = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "or-Call": (_el: _Element): void => { or_Call = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "forwardedCall": (_el: _Element): void => { forwardedCall = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "chargeIndicator": (_el: _Element): void => { chargeIndicator = $._decode_implicit<ChargeIndicator>(() => _decode_ChargeIndicator)(_el); },
        "ext-basicServiceCode": (_el: _Element): void => { ext_basicServiceCode = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "ext-basicServiceCode2": (_el: _Element): void => { ext_basicServiceCode2 = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo,
        _extension_additions_list_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo,
        _root_component_type_list_2_spec_for_EventSpecificInformationBCSM_oAnswerSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventSpecificInformationBCSM_oAnswerSpecificInfo(
        destinationAddress,
        or_Call,
        forwardedCall,
        chargeIndicator,
        ext_basicServiceCode,
        ext_basicServiceCode2,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo(el);
}

let _cached_encoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo: $.ASN1Encoder<EventSpecificInformationBCSM_oAnswerSpecificInfo> | null = null;
export function _encode_EventSpecificInformationBCSM_oAnswerSpecificInfo (value: EventSpecificInformationBCSM_oAnswerSpecificInfo, elGetter: $.ASN1Encoder<EventSpecificInformationBCSM_oAnswerSpecificInfo>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo) {
        _cached_encoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo = function (value: EventSpecificInformationBCSM_oAnswerSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.destinationAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 50, () => _encode_CalledPartyNumber, $.BER)(value.destinationAddress, $.BER)),
            /* IF_ABSENT  */ ((value.or_Call === undefined) ? undefined : $._encode_implicit(_TagClass.context, 51, () => $._encodeNull, $.BER)(value.or_Call, $.BER)),
            /* IF_ABSENT  */ ((value.forwardedCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 52, () => $._encodeNull, $.BER)(value.forwardedCall, $.BER)),
            /* IF_ABSENT  */ ((value.chargeIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 53, () => _encode_ChargeIndicator, $.BER)(value.chargeIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.ext_basicServiceCode === undefined) ? undefined : $._encode_explicit(_TagClass.context, 54, () => _encode_Ext_BasicServiceCode, $.BER)(value.ext_basicServiceCode, $.BER)),
            /* IF_ABSENT  */ ((value.ext_basicServiceCode2 === undefined) ? undefined : $._encode_explicit(_TagClass.context, 55, () => _encode_Ext_BasicServiceCode, $.BER)(value.ext_basicServiceCode2, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_EventSpecificInformationBCSM_oAnswerSpecificInfo(value, elGetter);
}
