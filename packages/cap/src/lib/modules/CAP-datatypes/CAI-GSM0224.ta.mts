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


/**
 * @summary CAI_GSM0224
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CAI-GSM0224 ::= SEQUENCE {
 e1					[0] INTEGER (0..8191)			OPTIONAL,
 e2					[1] INTEGER (0..8191)			OPTIONAL,
 e3					[2] INTEGER (0..8191)			OPTIONAL,
 e4					[3] INTEGER (0..8191)			OPTIONAL,
 e5					[4] INTEGER (0..8191)			OPTIONAL,
 e6					[5] INTEGER (0..8191)			OPTIONAL,
 e7					[6] INTEGER (0..8191)			OPTIONAL
 }
 * ```
 *
 */
export class CAI_GSM0224 {
    constructor (
        readonly e1: OPTIONAL<INTEGER>,
        readonly e2: OPTIONAL<INTEGER>,
        readonly e3: OPTIONAL<INTEGER>,
        readonly e4: OPTIONAL<INTEGER>,
        readonly e5: OPTIONAL<INTEGER>,
        readonly e6: OPTIONAL<INTEGER>,
        readonly e7: OPTIONAL<INTEGER>,
    ) {}

    public static _from_object (_o: { [_K in keyof (CAI_GSM0224)]: (CAI_GSM0224)[_K] }): CAI_GSM0224 {
        return new CAI_GSM0224(_o.e1, _o.e2, _o.e3, _o.e4, _o.e5, _o.e6, _o.e7);
    }
}

export const _root_component_type_list_1_spec_for_CAI_GSM0224: $.ComponentSpec[] = [
    new $.ComponentSpec("e1", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("e2", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("e3", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("e4", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("e5", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("e6", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("e7", true, $.hasTag(_TagClass.context, 6))
];

export const _root_component_type_list_2_spec_for_CAI_GSM0224: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_CAI_GSM0224: $.ComponentSpec[] = [];

let _cached_decoder_for_CAI_GSM0224: $.ASN1Decoder<CAI_GSM0224> | null = null;
export function _decode_CAI_GSM0224 (el: _Element): CAI_GSM0224 {
    if (!_cached_decoder_for_CAI_GSM0224) {
        _cached_decoder_for_CAI_GSM0224 = function (el: _Element): CAI_GSM0224 {
    let e1: OPTIONAL<INTEGER>;
    let e2: OPTIONAL<INTEGER>;
    let e3: OPTIONAL<INTEGER>;
    let e4: OPTIONAL<INTEGER>;
    let e5: OPTIONAL<INTEGER>;
    let e6: OPTIONAL<INTEGER>;
    let e7: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "e1": (_el: _Element): void => { e1 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e2": (_el: _Element): void => { e2 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e3": (_el: _Element): void => { e3 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e4": (_el: _Element): void => { e4 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e5": (_el: _Element): void => { e5 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e6": (_el: _Element): void => { e6 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "e7": (_el: _Element): void => { e7 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CAI_GSM0224,
        _extension_additions_list_spec_for_CAI_GSM0224,
        _root_component_type_list_2_spec_for_CAI_GSM0224,
        undefined,
    );
    return new CAI_GSM0224(
        e1,
        e2,
        e3,
        e4,
        e5,
        e6,
        e7
    );
        };
    }
    return _cached_decoder_for_CAI_GSM0224(el);
}

let _cached_encoder_for_CAI_GSM0224: $.ASN1Encoder<CAI_GSM0224> | null = null;
export function _encode_CAI_GSM0224 (value: CAI_GSM0224, elGetter: $.ASN1Encoder<CAI_GSM0224>): _Element {
    if (!_cached_encoder_for_CAI_GSM0224) {
        _cached_encoder_for_CAI_GSM0224 = function (value: CAI_GSM0224, elGetter: $.ASN1Encoder<CAI_GSM0224>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.e1 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.e1, $.BER)),
            /* IF_ABSENT  */ ((value.e2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.e2, $.BER)),
            /* IF_ABSENT  */ ((value.e3 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.e3, $.BER)),
            /* IF_ABSENT  */ ((value.e4 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.e4, $.BER)),
            /* IF_ABSENT  */ ((value.e5 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.e5, $.BER)),
            /* IF_ABSENT  */ ((value.e6 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.e6, $.BER)),
            /* IF_ABSENT  */ ((value.e7 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.e7, $.BER))
        ]
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_CAI_GSM0224(value, elGetter);
}
