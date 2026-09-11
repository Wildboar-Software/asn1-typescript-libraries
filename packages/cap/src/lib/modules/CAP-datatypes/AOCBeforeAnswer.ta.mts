import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CAI_GSM0224, _decode_CAI_GSM0224, _encode_CAI_GSM0224 } from "./CAI-GSM0224.ta.mjs";
import { AOCSubsequent, _decode_AOCSubsequent, _encode_AOCSubsequent } from "./AOCSubsequent.ta.mjs";

/**
 * @summary AOCBeforeAnswer
 * @description
 *
 * Advice of Charge before Answer. Used in SendChargingInformation only if there
 * is neither an active call leg, nor a Temporary Connection, nor a gsmSRF
 * connection. (3GPP TS 29.078 V19.0.0 clause 11.29).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AOCBeforeAnswer ::= SEQUENCE {
 *  aOCInitial				[0] CAI-GSM0224,
 *  aOCSubsequent			[1] AOCSubsequent				OPTIONAL
 *  }
 * ```
 *
 */
export class AOCBeforeAnswer {
    constructor (
        /**
         * @summary `aOCInitial`.
         * @description
         *
         * CAI elements (3GPP TS 22.024) sent to the MS when Answer is detected
         * and a tariff switch for CSE control of e-parameters has not yet
         * occurred. (3GPP TS 29.078 V19.0.0 clause 11.29).
         *
         * @public
         * @readonly
         */
        readonly aOCInitial: CAI_GSM0224,
        /**
         * @summary `aOCSubsequent`.
         * @description
         *
         * CAI after a tariff switch for CSE control of e-parameters, or when
         * Answer is detected and that switch has already occurred.
         * (3GPP TS 29.078 V19.0.0 clause 11.29).
         *
         * @public
         * @readonly
         */
        readonly aOCSubsequent: OPTIONAL<AOCSubsequent>,
    ) {}

    public static _from_object (_o: { [_K in keyof (AOCBeforeAnswer)]: (AOCBeforeAnswer)[_K] }): AOCBeforeAnswer {
        return new AOCBeforeAnswer(_o.aOCInitial, _o.aOCSubsequent);
    }
}

export const _root_component_type_list_1_spec_for_AOCBeforeAnswer: $.ComponentSpec[] = [
    new $.ComponentSpec("aOCInitial", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("aOCSubsequent", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_AOCBeforeAnswer: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_AOCBeforeAnswer: $.ComponentSpec[] = [];

let _cached_decoder_for_AOCBeforeAnswer: $.ASN1Decoder<AOCBeforeAnswer> | null = null;
export function _decode_AOCBeforeAnswer (el: _Element): AOCBeforeAnswer {
    if (!_cached_decoder_for_AOCBeforeAnswer) {
        _cached_decoder_for_AOCBeforeAnswer = function (el: _Element): AOCBeforeAnswer {
    let aOCInitial!: CAI_GSM0224;
    let aOCSubsequent: OPTIONAL<AOCSubsequent>;
    const callbacks: $.DecodingMap = {
        "aOCInitial": (_el: _Element): void => { aOCInitial = $._decode_implicit<CAI_GSM0224>(() => _decode_CAI_GSM0224)(_el); },
        "aOCSubsequent": (_el: _Element): void => { aOCSubsequent = $._decode_implicit<AOCSubsequent>(() => _decode_AOCSubsequent)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AOCBeforeAnswer,
        _extension_additions_list_spec_for_AOCBeforeAnswer,
        _root_component_type_list_2_spec_for_AOCBeforeAnswer,
        undefined,
    );
    return new AOCBeforeAnswer(
        aOCInitial,
        aOCSubsequent
    );
        };
    }
    return _cached_decoder_for_AOCBeforeAnswer(el);
}

let _cached_encoder_for_AOCBeforeAnswer: $.ASN1Encoder<AOCBeforeAnswer> | null = null;
export function _encode_AOCBeforeAnswer (value: AOCBeforeAnswer, elGetter: $.ASN1Encoder<AOCBeforeAnswer>): _Element {
    if (!_cached_encoder_for_AOCBeforeAnswer) {
        _cached_encoder_for_AOCBeforeAnswer = function (value: AOCBeforeAnswer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CAI_GSM0224, $.BER)(value.aOCInitial, $.BER),
            /* IF_ABSENT  */ ((value.aOCSubsequent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AOCSubsequent, $.BER)(value.aOCSubsequent, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_AOCBeforeAnswer(value, elGetter);
}
