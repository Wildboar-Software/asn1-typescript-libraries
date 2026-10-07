/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Unit, _decode_Unit, _encode_Unit } from "./Unit.ta.mjs";


/**
 * @summary IntUnit
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IntUnit ::= SEQUENCE {
 *     value     [1] IMPLICIT INTEGER,
 *     unitUsed  [2] IMPLICIT Unit
 * }
 * ```
 */
export
class IntUnit {
    constructor (
        readonly value: INTEGER,
        readonly unitUsed: Unit
    ) {}

    public static _from_object (_o: { [_K in keyof (IntUnit)]: (IntUnit)[_K] }): IntUnit {
        return new IntUnit(_o.value, _o.unitUsed);
    }
}

export
const _root_component_type_list_1_spec_for_IntUnit: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("unitUsed", false, $.hasTag(_TagClass.context, 2)),
];

export
const _root_component_type_list_2_spec_for_IntUnit: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_IntUnit: $.ComponentSpec[] = [

];

let _cached_decoder_for_IntUnit: $.ASN1Decoder<IntUnit> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntUnit
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntUnit (el: _Element): IntUnit {
    if (!_cached_decoder_for_IntUnit) { _cached_decoder_for_IntUnit = function (el: _Element): IntUnit {
    let value!: INTEGER;
    let unitUsed!: Unit;
    const callbacks: $.DecodingMap = {
        "value": (_el: _Element): void => { value = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "unitUsed": (_el: _Element): void => { unitUsed = $._decode_implicit<Unit>(() => _decode_Unit)(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IntUnit,
        _extension_additions_list_spec_for_IntUnit,
        _root_component_type_list_2_spec_for_IntUnit,
        undefined,
    );
    return new IntUnit(
        value,
        unitUsed,
    );
}; }
    return _cached_decoder_for_IntUnit(el);
}

let _cached_encoder_for_IntUnit: $.ASN1Encoder<IntUnit> | null = null;

/**
 * @summary Encodes a(n) IntUnit into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntUnit, encoded as an ASN.1 Element.
 */
export
function _encode_IntUnit (value: IntUnit, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntUnit) { _cached_encoder_for_IntUnit = function (value: IntUnit, elGetter: $.ASN1Encoder<IntUnit>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.value, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Unit, $.BER)(value.unitUsed, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IntUnit(value, elGetter);
}

/* eslint-enable */
