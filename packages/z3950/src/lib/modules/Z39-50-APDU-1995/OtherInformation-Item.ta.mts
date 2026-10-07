/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InfoCategory, _decode_InfoCategory, _encode_InfoCategory } from "./InfoCategory.ta.mjs";
import { OtherInformation_Item_information, _decode_OtherInformation_Item_information, _encode_OtherInformation_Item_information } from "./OtherInformation-Item-information.ta.mjs";


/**
 * @summary OtherInformation_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherInformation-Item ::= SEQUENCE {
 *     category     [1] IMPLICIT InfoCategory OPTIONAL,
 *     information  OtherInformation-Item-information
 * }
 * ```
 */
export
class OtherInformation_Item {
    constructor (
        readonly category: OPTIONAL<InfoCategory>,
        readonly information: OtherInformation_Item_information
    ) {}

    public static _from_object (_o: { [_K in keyof (OtherInformation_Item)]: (OtherInformation_Item)[_K] }): OtherInformation_Item {
        return new OtherInformation_Item(_o.category, _o.information);
    }
}

export
const _root_component_type_list_1_spec_for_OtherInformation_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("information", false, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5))),
];

export
const _root_component_type_list_2_spec_for_OtherInformation_Item: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_OtherInformation_Item: $.ComponentSpec[] = [

];

let _cached_decoder_for_OtherInformation_Item: $.ASN1Decoder<OtherInformation_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherInformation_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherInformation_Item (el: _Element): OtherInformation_Item {
    if (!_cached_decoder_for_OtherInformation_Item) { _cached_decoder_for_OtherInformation_Item = function (el: _Element): OtherInformation_Item {
    let category: OPTIONAL<InfoCategory>;
    let information!: OtherInformation_Item_information;
    const callbacks: $.DecodingMap = {
        "category": (_el: _Element): void => { category = $._decode_implicit<InfoCategory>(() => _decode_InfoCategory)(_el); },
        "information": (_el: _Element): void => { information = _decode_OtherInformation_Item_information(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_OtherInformation_Item,
        _extension_additions_list_spec_for_OtherInformation_Item,
        _root_component_type_list_2_spec_for_OtherInformation_Item,
        undefined,
    );
    return new OtherInformation_Item(
        category,
        information,
    );
}; }
    return _cached_decoder_for_OtherInformation_Item(el);
}

let _cached_encoder_for_OtherInformation_Item: $.ASN1Encoder<OtherInformation_Item> | null = null;

/**
 * @summary Encodes a(n) OtherInformation_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherInformation_Item, encoded as an ASN.1 Element.
 */
export
function _encode_OtherInformation_Item (value: OtherInformation_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherInformation_Item) { _cached_encoder_for_OtherInformation_Item = function (value: OtherInformation_Item, elGetter: $.ASN1Encoder<OtherInformation_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.category === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_InfoCategory, $.BER)(value.category, $.BER)),
            /* REQUIRED   */ _encode_OtherInformation_Item_information(value.information, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OtherInformation_Item(value, elGetter);
}

/* eslint-enable */
