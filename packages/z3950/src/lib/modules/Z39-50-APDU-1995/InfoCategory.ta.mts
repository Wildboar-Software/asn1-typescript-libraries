/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


/**
 * @summary InfoCategory
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InfoCategory ::= SEQUENCE {
 *     categoryTypeId   [1] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     categoryValue    [2] IMPLICIT INTEGER
 * }
 * ```
 */
export
class InfoCategory {
    constructor (
        readonly categoryTypeId: OPTIONAL<OBJECT_IDENTIFIER>,
        readonly categoryValue: INTEGER
    ) {}

    public static _from_object (_o: { [_K in keyof (InfoCategory)]: (InfoCategory)[_K] }): InfoCategory {
        return new InfoCategory(_o.categoryTypeId, _o.categoryValue);
    }
}

export
const _root_component_type_list_1_spec_for_InfoCategory: $.ComponentSpec[] = [
    new $.ComponentSpec("categoryTypeId", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("categoryValue", false, $.hasTag(_TagClass.context, 2)),
];

export
const _root_component_type_list_2_spec_for_InfoCategory: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_InfoCategory: $.ComponentSpec[] = [

];

let _cached_decoder_for_InfoCategory: $.ASN1Decoder<InfoCategory> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InfoCategory
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InfoCategory (el: _Element): InfoCategory {
    if (!_cached_decoder_for_InfoCategory) { _cached_decoder_for_InfoCategory = function (el: _Element): InfoCategory {
    let categoryTypeId: OPTIONAL<OBJECT_IDENTIFIER>;
    let categoryValue!: INTEGER;
    const callbacks: $.DecodingMap = {
        "categoryTypeId": (_el: _Element): void => { categoryTypeId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "categoryValue": (_el: _Element): void => { categoryValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InfoCategory,
        _extension_additions_list_spec_for_InfoCategory,
        _root_component_type_list_2_spec_for_InfoCategory,
        undefined,
    );
    return new InfoCategory(
        categoryTypeId,
        categoryValue,
    );
}; }
    return _cached_decoder_for_InfoCategory(el);
}

let _cached_encoder_for_InfoCategory: $.ASN1Encoder<InfoCategory> | null = null;

/**
 * @summary Encodes a(n) InfoCategory into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoCategory, encoded as an ASN.1 Element.
 */
export
function _encode_InfoCategory (value: InfoCategory, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InfoCategory) { _cached_encoder_for_InfoCategory = function (value: InfoCategory, elGetter: $.ASN1Encoder<InfoCategory>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.categoryTypeId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.categoryTypeId, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.categoryValue, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InfoCategory(value, elGetter);
}

/* eslint-enable */
