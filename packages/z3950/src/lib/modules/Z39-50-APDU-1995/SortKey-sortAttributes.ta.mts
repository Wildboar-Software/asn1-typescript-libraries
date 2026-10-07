/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttributeSetId, _decode_AttributeSetId, _encode_AttributeSetId } from "./AttributeSetId.ta.mjs";
import { AttributeList, _decode_AttributeList, _encode_AttributeList } from "./AttributeList.ta.mjs";


/**
 * @summary SortKey_sortAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SortKey-sortAttributes ::= SEQUENCE {
 *     id     AttributeSetId,
 *     list   AttributeList
 * }
 * ```
 */
export
class SortKey_sortAttributes {
    constructor (
        readonly id: AttributeSetId,
        readonly list: AttributeList
    ) {}

    public static _from_object (_o: { [_K in keyof (SortKey_sortAttributes)]: (SortKey_sortAttributes)[_K] }): SortKey_sortAttributes {
        return new SortKey_sortAttributes(_o.id, _o.list);
    }
}

export
const _root_component_type_list_1_spec_for_SortKey_sortAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("list", false, $.hasTag(_TagClass.context, 44)),
];

export
const _root_component_type_list_2_spec_for_SortKey_sortAttributes: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_SortKey_sortAttributes: $.ComponentSpec[] = [

];

let _cached_decoder_for_SortKey_sortAttributes: $.ASN1Decoder<SortKey_sortAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortKey_sortAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortKey_sortAttributes (el: _Element): SortKey_sortAttributes {
    if (!_cached_decoder_for_SortKey_sortAttributes) { _cached_decoder_for_SortKey_sortAttributes = function (el: _Element): SortKey_sortAttributes {
    let id!: AttributeSetId;
    let list!: AttributeList;
    const callbacks: $.DecodingMap = {
        "id": (_el: _Element): void => { id = _decode_AttributeSetId(_el); },
        "list": (_el: _Element): void => { list = _decode_AttributeList(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SortKey_sortAttributes,
        _extension_additions_list_spec_for_SortKey_sortAttributes,
        _root_component_type_list_2_spec_for_SortKey_sortAttributes,
        undefined,
    );
    return new SortKey_sortAttributes(
        id,
        list,
    );
}; }
    return _cached_decoder_for_SortKey_sortAttributes(el);
}

let _cached_encoder_for_SortKey_sortAttributes: $.ASN1Encoder<SortKey_sortAttributes> | null = null;

/**
 * @summary Encodes a(n) SortKey_sortAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKey_sortAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_SortKey_sortAttributes (value: SortKey_sortAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortKey_sortAttributes) { _cached_encoder_for_SortKey_sortAttributes = function (value: SortKey_sortAttributes, elGetter: $.ASN1Encoder<SortKey_sortAttributes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttributeSetId(value.id, $.BER),
            /* REQUIRED   */ _encode_AttributeList(value.list, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SortKey_sortAttributes(value, elGetter);
}

/* eslint-enable */
