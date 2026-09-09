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
import { type BasicGapCriteria, _decode_BasicGapCriteria, _encode_BasicGapCriteria } from "./BasicGapCriteria.ta.mjs";
import { type ScfID, _decode_ScfID, _encode_ScfID } from "./ScfID.ta.mjs";

/**
 * @summary CompoundCriteria
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CompoundCriteria {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 basicGapCriteria			[0] BasicGapCriteria {bound},
 scfID				[1] ScfID {bound}				OPTIONAL
 }
 * ```
 *
 */
export class CompoundCriteria {
    constructor (
        readonly basicGapCriteria: BasicGapCriteria,
        readonly scfID: OPTIONAL<ScfID>,
    ) {}

    public static _from_object (_o: { [_K in keyof (CompoundCriteria)]: (CompoundCriteria)[_K] }): CompoundCriteria {
        return new CompoundCriteria(_o.basicGapCriteria, _o.scfID);
    }
}

export const _root_component_type_list_1_spec_for_CompoundCriteria: $.ComponentSpec[] = [
    new $.ComponentSpec("basicGapCriteria", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_CompoundCriteria: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CompoundCriteria: $.ComponentSpec[] = [];

let _cached_decoder_for_CompoundCriteria: $.ASN1Decoder<CompoundCriteria> | null = null;
export function _decode_CompoundCriteria (el: _Element): CompoundCriteria {
    if (!_cached_decoder_for_CompoundCriteria) {
        _cached_decoder_for_CompoundCriteria = function (el: _Element): CompoundCriteria {
    let basicGapCriteria!: BasicGapCriteria;
    let scfID: OPTIONAL<ScfID>;
    const callbacks: $.DecodingMap = {
        "basicGapCriteria": (_el: _Element): void => { basicGapCriteria = $._decode_explicit<BasicGapCriteria>(() => _decode_BasicGapCriteria)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompoundCriteria,
        _extension_additions_list_spec_for_CompoundCriteria,
        _root_component_type_list_2_spec_for_CompoundCriteria,
        undefined,
    );
    return new CompoundCriteria(
        basicGapCriteria,
        scfID
    );
        };
    }
    return _cached_decoder_for_CompoundCriteria(el);
}

let _cached_encoder_for_CompoundCriteria: $.ASN1Encoder<CompoundCriteria> | null = null;
export function _encode_CompoundCriteria (value: CompoundCriteria, elGetter: $.ASN1Encoder<CompoundCriteria>): _Element {
    if (!_cached_encoder_for_CompoundCriteria) {
        _cached_encoder_for_CompoundCriteria = function (value: CompoundCriteria, elGetter: $.ASN1Encoder<CompoundCriteria>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_BasicGapCriteria, $.BER)(value.basicGapCriteria, $.BER),
            /* IF_ABSENT  */ ((value.scfID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ScfID, $.BER)(value.scfID, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CompoundCriteria(value, elGetter);
}
