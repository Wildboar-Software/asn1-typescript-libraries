/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Specification_elementSpec, _decode_Specification_elementSpec, _encode_Specification_elementSpec } from "./Specification-elementSpec.ta.mjs";


/**
 * @summary Specification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Specification ::= SEQUENCE {
 *     schema       [1] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     elementSpec  [2] Specification-elementSpec OPTIONAL
 * }
 * ```
 */
export
class Specification {
    constructor (
        readonly schema: OPTIONAL<OBJECT_IDENTIFIER>,
        readonly elementSpec: OPTIONAL<Specification_elementSpec>
    ) {}

    public static _from_object (_o: { [_K in keyof (Specification)]: (Specification)[_K] }): Specification {
        return new Specification(_o.schema, _o.elementSpec);
    }
}

export
const _root_component_type_list_1_spec_for_Specification: $.ComponentSpec[] = [
    new $.ComponentSpec("schema", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("elementSpec", true, $.hasTag(_TagClass.context, 2)),
];

export
const _root_component_type_list_2_spec_for_Specification: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_Specification: $.ComponentSpec[] = [

];

let _cached_decoder_for_Specification: $.ASN1Decoder<Specification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Specification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Specification (el: _Element): Specification {
    if (!_cached_decoder_for_Specification) { _cached_decoder_for_Specification = function (el: _Element): Specification {
    let schema: OPTIONAL<OBJECT_IDENTIFIER>;
    let elementSpec: OPTIONAL<Specification_elementSpec>;
    const callbacks: $.DecodingMap = {
        "schema": (_el: _Element): void => { schema = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "elementSpec": (_el: _Element): void => { elementSpec = $._decode_explicit<Specification_elementSpec>(() => _decode_Specification_elementSpec)(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Specification,
        _extension_additions_list_spec_for_Specification,
        _root_component_type_list_2_spec_for_Specification,
        undefined,
    );
    return new Specification(
        schema,
        elementSpec,
    );
}; }
    return _cached_decoder_for_Specification(el);
}

let _cached_encoder_for_Specification: $.ASN1Encoder<Specification> | null = null;

/**
 * @summary Encodes a(n) Specification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Specification, encoded as an ASN.1 Element.
 */
export
function _encode_Specification (value: Specification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Specification) { _cached_encoder_for_Specification = function (value: Specification, elGetter: $.ASN1Encoder<Specification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.schema === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.schema, $.BER)),
            /* IF_ABSENT  */ ((value.elementSpec === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_Specification_elementSpec, $.BER)(value.elementSpec, $.BER)),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Specification(value, elGetter);
}

/* eslint-enable */
