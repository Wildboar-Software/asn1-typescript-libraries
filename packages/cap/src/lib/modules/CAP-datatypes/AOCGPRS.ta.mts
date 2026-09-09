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
import { CAI_GSM0224, _decode_CAI_GSM0224, _encode_CAI_GSM0224 } from "./CAI-GSM0224.ta.mjs";
import { AOCSubsequent, _decode_AOCSubsequent, _encode_AOCSubsequent } from "./AOCSubsequent.ta.mjs";

/**
 * @summary AOCGPRS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AOCGPRS ::= SEQUENCE {
 aOCInitial				[0] CAI-GSM0224,
 aOCSubsequent			[1] AOCSubsequent				OPTIONAL
 }
 * ```
 *
 */
export class AOCGPRS {
    constructor (
        readonly aOCInitial: CAI_GSM0224,
        readonly aOCSubsequent: OPTIONAL<AOCSubsequent>,
    ) {}

    public static _from_object (_o: { [_K in keyof (AOCGPRS)]: (AOCGPRS)[_K] }): AOCGPRS {
        return new AOCGPRS(_o.aOCInitial, _o.aOCSubsequent);
    }
}

export const _root_component_type_list_1_spec_for_AOCGPRS: $.ComponentSpec[] = [
    new $.ComponentSpec("aOCInitial", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("aOCSubsequent", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_AOCGPRS: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_AOCGPRS: $.ComponentSpec[] = [];

let _cached_decoder_for_AOCGPRS: $.ASN1Decoder<AOCGPRS> | null = null;
export function _decode_AOCGPRS (el: _Element): AOCGPRS {
    if (!_cached_decoder_for_AOCGPRS) {
        _cached_decoder_for_AOCGPRS = function (el: _Element): AOCGPRS {
    let aOCInitial!: CAI_GSM0224;
    let aOCSubsequent: OPTIONAL<AOCSubsequent>;
    const callbacks: $.DecodingMap = {
        "aOCInitial": (_el: _Element): void => { aOCInitial = $._decode_implicit<CAI_GSM0224>(() => _decode_CAI_GSM0224)(_el); },
        "aOCSubsequent": (_el: _Element): void => { aOCSubsequent = $._decode_implicit<AOCSubsequent>(() => _decode_AOCSubsequent)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AOCGPRS,
        _extension_additions_list_spec_for_AOCGPRS,
        _root_component_type_list_2_spec_for_AOCGPRS,
        undefined,
    );
    return new AOCGPRS(
        aOCInitial,
        aOCSubsequent
    );
        };
    }
    return _cached_decoder_for_AOCGPRS(el);
}

let _cached_encoder_for_AOCGPRS: $.ASN1Encoder<AOCGPRS> | null = null;
export function _encode_AOCGPRS (value: AOCGPRS, elGetter: $.ASN1Encoder<AOCGPRS>): _Element {
    if (!_cached_encoder_for_AOCGPRS) {
        _cached_encoder_for_AOCGPRS = function (value: AOCGPRS, elGetter: $.ASN1Encoder<AOCGPRS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CAI_GSM0224, $.BER)(value.aOCInitial, $.BER),
            /* IF_ABSENT  */ ((value.aOCSubsequent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AOCSubsequent, $.BER)(value.aOCSubsequent, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_AOCGPRS(value, elGetter);
}
