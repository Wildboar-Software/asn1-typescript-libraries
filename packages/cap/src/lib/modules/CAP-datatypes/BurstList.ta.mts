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
import { Burst, _decode_Burst, _encode_Burst } from "./Burst.ta.mjs";

/**
 * @summary BurstList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BurstList ::= SEQUENCE {
 warningPeriod			[0] INTEGER	(1..1200) DEFAULT 30,
 bursts				[1] Burst,
 ...
 }
 * ```
 *
 */
export class BurstList {
    constructor (
        readonly warningPeriod: OPTIONAL<INTEGER>,
        readonly bursts: Burst,
        readonly _unrecognizedExtensionsList: _Element[] = [],
    ) {}

    public static _from_object (_o: { [_K in keyof (BurstList)]: (BurstList)[_K] }): BurstList {
        return new BurstList(_o.warningPeriod, _o.bursts, _o._unrecognizedExtensionsList);
    }

    public static get _default_value_for_warningPeriod () { return 30; }
}

export const _root_component_type_list_1_spec_for_BurstList: $.ComponentSpec[] = [
    new $.ComponentSpec("warningPeriod", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bursts", false, $.hasTag(_TagClass.context, 1))
];

export const _root_component_type_list_2_spec_for_BurstList: $.ComponentSpec[] = [];

export const _extension_additions_list_spec_for_BurstList: $.ComponentSpec[] = [];

let _cached_decoder_for_BurstList: $.ASN1Decoder<BurstList> | null = null;
export function _decode_BurstList (el: _Element): BurstList {
    if (!_cached_decoder_for_BurstList) {
        _cached_decoder_for_BurstList = function (el: _Element): BurstList {
    let warningPeriod: OPTIONAL<INTEGER> = BurstList._default_value_for_warningPeriod;
    let bursts!: Burst;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "warningPeriod": (_el: _Element): void => { warningPeriod = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "bursts": (_el: _Element): void => { bursts = $._decode_implicit<Burst>(() => _decode_Burst)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BurstList,
        _extension_additions_list_spec_for_BurstList,
        _root_component_type_list_2_spec_for_BurstList,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BurstList(
        warningPeriod,
        bursts,
        _unrecognizedExtensionsList
    );
        };
    }
    return _cached_decoder_for_BurstList(el);
}

let _cached_encoder_for_BurstList: $.ASN1Encoder<BurstList> | null = null;
export function _encode_BurstList (value: BurstList, elGetter: $.ASN1Encoder<BurstList>): _Element {
    if (!_cached_encoder_for_BurstList) {
        _cached_encoder_for_BurstList = function (value: BurstList, elGetter: $.ASN1Encoder<BurstList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.warningPeriod === undefined || $.deepEq(value.warningPeriod, BurstList._default_value_for_warningPeriod) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.warningPeriod, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Burst, $.BER)(value.bursts, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : [])
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
        };
    }
    return _cached_encoder_for_BurstList(value, elGetter);
}
