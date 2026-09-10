import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary Burst
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Burst ::= SEQUENCE {
 *  numberOfBursts			[0]	INTEGER (1..3)	DEFAULT 1,
 *  burstInterval			[1]	INTEGER	(1..1200)	DEFAULT 2,			
 *  numberOfTonesInBurst		[2] INTEGER (1..3)	DEFAULT 3,
 *  toneDuration			[3]	INTEGER	(1..20)	DEFAULT 2,
 *  toneInterval			[4]	INTEGER	(1..20)	DEFAULT 2,
 *  ...
 *  }
 * ```
 *
 */
export class Burst {
    constructor (
        readonly numberOfBursts: OPTIONAL<INTEGER>,
        readonly burstInterval: OPTIONAL<INTEGER>,
        readonly numberOfTonesInBurst: OPTIONAL<INTEGER>,
        readonly toneDuration: OPTIONAL<INTEGER>,
        readonly toneInterval: OPTIONAL<INTEGER>,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (Burst)]: (Burst)[_K] }): Burst {
        return new Burst(_o.numberOfBursts, _o.burstInterval, _o.numberOfTonesInBurst, _o.toneDuration, _o.toneInterval, _o._unrecognizedExtensionsList);
    }

    public static get _default_value_for_numberOfBursts () { return 1; }
    public static get _default_value_for_burstInterval () { return 2; }
    public static get _default_value_for_numberOfTonesInBurst () { return 3; }
    public static get _default_value_for_toneDuration () { return 2; }
    public static get _default_value_for_toneInterval () { return 2; }
}

export const _root_component_type_list_1_spec_for_Burst: $.ComponentSpec[] = [
    new $.ComponentSpec("numberOfBursts", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("burstInterval", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberOfTonesInBurst", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("toneDuration", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("toneInterval", true, $.hasTag(_TagClass.context, 4))
];

export const _root_component_type_list_2_spec_for_Burst: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_Burst: $.ComponentSpec[] = [];

let _cached_decoder_for_Burst: $.ASN1Decoder<Burst> | null = null;
export function _decode_Burst (el: _Element): Burst {
    if (!_cached_decoder_for_Burst) {
        _cached_decoder_for_Burst = function (el: _Element): Burst {
    let numberOfBursts: OPTIONAL<INTEGER> = Burst._default_value_for_numberOfBursts;
    let burstInterval: OPTIONAL<INTEGER> = Burst._default_value_for_burstInterval;
    let numberOfTonesInBurst: OPTIONAL<INTEGER> = Burst._default_value_for_numberOfTonesInBurst;
    let toneDuration: OPTIONAL<INTEGER> = Burst._default_value_for_toneDuration;
    let toneInterval: OPTIONAL<INTEGER> = Burst._default_value_for_toneInterval;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "numberOfBursts": (_el: _Element): void => { numberOfBursts = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "burstInterval": (_el: _Element): void => { burstInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "numberOfTonesInBurst": (_el: _Element): void => { numberOfTonesInBurst = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "toneDuration": (_el: _Element): void => { toneDuration = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "toneInterval": (_el: _Element): void => { toneInterval = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Burst,
        _extension_additions_list_spec_for_Burst,
        _root_component_type_list_2_spec_for_Burst,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Burst(
        numberOfBursts,
        burstInterval,
        numberOfTonesInBurst,
        toneDuration,
        toneInterval,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_Burst(el);
}

let _cached_encoder_for_Burst: $.ASN1Encoder<Burst> | null = null;
export function _encode_Burst (value: Burst, elGetter: $.ASN1Encoder<Burst>): _Element {
    if (!_cached_encoder_for_Burst) {
        _cached_encoder_for_Burst = function (value: Burst): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.numberOfBursts === undefined || $.deepEq(value.numberOfBursts, Burst._default_value_for_numberOfBursts) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.numberOfBursts, $.BER)),
            /* IF_DEFAULT */ (value.burstInterval === undefined || $.deepEq(value.burstInterval, Burst._default_value_for_burstInterval) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.burstInterval, $.BER)),
            /* IF_DEFAULT */ (value.numberOfTonesInBurst === undefined || $.deepEq(value.numberOfTonesInBurst, Burst._default_value_for_numberOfTonesInBurst) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.numberOfTonesInBurst, $.BER)),
            /* IF_DEFAULT */ (value.toneDuration === undefined || $.deepEq(value.toneDuration, Burst._default_value_for_toneDuration) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.toneDuration, $.BER)),
            /* IF_DEFAULT */ (value.toneInterval === undefined || $.deepEq(value.toneInterval, Burst._default_value_for_toneInterval) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.toneInterval, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_Burst(value, elGetter);
}
