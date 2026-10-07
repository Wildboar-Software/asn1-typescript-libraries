/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProximityOperator_relationType, _decode_ProximityOperator_relationType, _encode_ProximityOperator_relationType } from "./ProximityOperator-relationType.ta.mjs";
import { ProximityOperator_proximityUnitCode, _decode_ProximityOperator_proximityUnitCode, _encode_ProximityOperator_proximityUnitCode } from "./ProximityOperator-proximityUnitCode.ta.mjs";


/**
 * @summary ProximityOperator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProximityOperator ::= SEQUENCE {
 *     exclusion          [1] IMPLICIT BOOLEAN OPTIONAL,
 *     distance           [2] IMPLICIT INTEGER,
 *     ordered            [3] IMPLICIT BOOLEAN,
 *     relationType       [4] IMPLICIT ProximityOperator-relationType,
 *     proximityUnitCode  [5] ProximityOperator-proximityUnitCode
 * }
 * ```
 */
export
class ProximityOperator {
    constructor (
        readonly exclusion: OPTIONAL<BOOLEAN>,
        readonly distance: INTEGER,
        readonly ordered: BOOLEAN,
        readonly relationType: ProximityOperator_relationType,
        readonly proximityUnitCode: ProximityOperator_proximityUnitCode
    ) {}

    public static _from_object (_o: { [_K in keyof (ProximityOperator)]: (ProximityOperator)[_K] }): ProximityOperator {
        return new ProximityOperator(_o.exclusion, _o.distance, _o.ordered, _o.relationType, _o.proximityUnitCode);
    }
}

export
const _root_component_type_list_1_spec_for_ProximityOperator: $.ComponentSpec[] = [
    new $.ComponentSpec("exclusion", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("distance", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ordered", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("relationType", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("proximityUnitCode", false, $.hasTag(_TagClass.context, 5)),
];

export
const _root_component_type_list_2_spec_for_ProximityOperator: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_ProximityOperator: $.ComponentSpec[] = [

];

let _cached_decoder_for_ProximityOperator: $.ASN1Decoder<ProximityOperator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProximityOperator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProximityOperator (el: _Element): ProximityOperator {
    if (!_cached_decoder_for_ProximityOperator) { _cached_decoder_for_ProximityOperator = function (el: _Element): ProximityOperator {
    let exclusion: OPTIONAL<BOOLEAN>;
    let distance!: INTEGER;
    let ordered!: BOOLEAN;
    let relationType!: ProximityOperator_relationType;
    let proximityUnitCode!: ProximityOperator_proximityUnitCode;
    const callbacks: $.DecodingMap = {
        "exclusion": (_el: _Element): void => { exclusion = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "distance": (_el: _Element): void => { distance = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ordered": (_el: _Element): void => { ordered = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "relationType": (_el: _Element): void => { relationType = $._decode_implicit<ProximityOperator_relationType>(() => _decode_ProximityOperator_relationType)(_el); },
        "proximityUnitCode": (_el: _Element): void => { proximityUnitCode = $._decode_explicit<ProximityOperator_proximityUnitCode>(() => _decode_ProximityOperator_proximityUnitCode)(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProximityOperator,
        _extension_additions_list_spec_for_ProximityOperator,
        _root_component_type_list_2_spec_for_ProximityOperator,
        undefined,
    );
    return new ProximityOperator(
        exclusion,
        distance,
        ordered,
        relationType,
        proximityUnitCode,
    );
}; }
    return _cached_decoder_for_ProximityOperator(el);
}

let _cached_encoder_for_ProximityOperator: $.ASN1Encoder<ProximityOperator> | null = null;

/**
 * @summary Encodes a(n) ProximityOperator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProximityOperator, encoded as an ASN.1 Element.
 */
export
function _encode_ProximityOperator (value: ProximityOperator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProximityOperator) { _cached_encoder_for_ProximityOperator = function (value: ProximityOperator, elGetter: $.ASN1Encoder<ProximityOperator>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.exclusion === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.exclusion, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.distance, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.ordered, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_ProximityOperator_relationType, $.BER)(value.relationType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 5, () => _encode_ProximityOperator_proximityUnitCode, $.BER)(value.proximityUnitCode, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProximityOperator(value, elGetter);
}

/* eslint-enable */
