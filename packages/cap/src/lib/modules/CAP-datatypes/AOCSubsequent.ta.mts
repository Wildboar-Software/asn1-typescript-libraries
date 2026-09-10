import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1OverflowError,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CAI_GSM0224, _decode_CAI_GSM0224, _encode_CAI_GSM0224 } from "./CAI-GSM0224.ta.mjs";

/**
 * @summary AOCSubsequent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AOCSubsequent ::= SEQUENCE {
 *  cAI-GSM0224				[0] CAI-GSM0224	,
 *  tariffSwitchInterval		[1] INTEGER (1..86400)			OPTIONAL
 *  }
 * ```
 *
 */
export class AOCSubsequent {
    constructor (
        readonly cAI_GSM0224: CAI_GSM0224,
        readonly tariffSwitchInterval: OPTIONAL<INTEGER>,
    ) {
        if (tariffSwitchInterval !== undefined && (typeof tariffSwitchInterval === "bigint" ? (tariffSwitchInterval < 1n || tariffSwitchInterval > 86400n) : (tariffSwitchInterval < 1 || tariffSwitchInterval > 86400))) {
            throw new ASN1OverflowError("AOCSubsequent.tariffSwitchInterval violates INTEGER constraint");
        }
    }

    public static _from_object (_o: { [_K in keyof (AOCSubsequent)]: (AOCSubsequent)[_K] }): AOCSubsequent {
        return new AOCSubsequent(_o.cAI_GSM0224, _o.tariffSwitchInterval);
    }
}

export const _root_component_type_list_1_spec_for_AOCSubsequent: $.ComponentSpec[] = [
    new $.ComponentSpec("cAI-GSM0224", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("tariffSwitchInterval", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_AOCSubsequent: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_AOCSubsequent: $.ComponentSpec[] = [];

let _cached_decoder_for_AOCSubsequent: $.ASN1Decoder<AOCSubsequent> | null = null;
export function _decode_AOCSubsequent (el: _Element): AOCSubsequent {
    if (!_cached_decoder_for_AOCSubsequent) {
        _cached_decoder_for_AOCSubsequent = function (el: _Element): AOCSubsequent {
    let cAI_GSM0224!: CAI_GSM0224;
    let tariffSwitchInterval: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "cAI-GSM0224": (_el: _Element): void => { cAI_GSM0224 = $._decode_implicit<CAI_GSM0224>(() => _decode_CAI_GSM0224)(_el); },
        "tariffSwitchInterval": (_el: _Element): void => { tariffSwitchInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AOCSubsequent,
        _extension_additions_list_spec_for_AOCSubsequent,
        _root_component_type_list_2_spec_for_AOCSubsequent,
        undefined,
    );
    return new AOCSubsequent(
        cAI_GSM0224,
        tariffSwitchInterval
    );
        };
    }
    return _cached_decoder_for_AOCSubsequent(el);
}

let _cached_encoder_for_AOCSubsequent: $.ASN1Encoder<AOCSubsequent> | null = null;
export function _encode_AOCSubsequent (value: AOCSubsequent, elGetter: $.ASN1Encoder<AOCSubsequent>): _Element {
    if (!_cached_encoder_for_AOCSubsequent) {
        _cached_encoder_for_AOCSubsequent = function (value: AOCSubsequent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CAI_GSM0224, $.BER)(value.cAI_GSM0224, $.BER),
            /* IF_ABSENT  */ ((value.tariffSwitchInterval === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.tariffSwitchInterval, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_AOCSubsequent(value, elGetter);
}
