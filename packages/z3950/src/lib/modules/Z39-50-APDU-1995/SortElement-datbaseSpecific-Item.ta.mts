/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "./DatabaseName.ta.mjs";
import { SortKey, _decode_SortKey, _encode_SortKey } from "./SortKey.ta.mjs";


/**
 * @summary SortElement_datbaseSpecific_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SortElement-datbaseSpecific-Item ::= SEQUENCE {
 *     databaseName   DatabaseName,
 *     dbSort         SortKey
 * }
 * ```
 */
export
class SortElement_datbaseSpecific_Item {
    constructor (
        readonly databaseName: DatabaseName,
        readonly dbSort: SortKey
    ) {}

    public static _from_object (_o: { [_K in keyof (SortElement_datbaseSpecific_Item)]: (SortElement_datbaseSpecific_Item)[_K] }): SortElement_datbaseSpecific_Item {
        return new SortElement_datbaseSpecific_Item(_o.databaseName, _o.dbSort);
    }
}

export
const _root_component_type_list_1_spec_for_SortElement_datbaseSpecific_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("databaseName", false, $.hasTag(_TagClass.context, 105)),
    new $.ComponentSpec("dbSort", false, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2))),
];

export
const _root_component_type_list_2_spec_for_SortElement_datbaseSpecific_Item: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_SortElement_datbaseSpecific_Item: $.ComponentSpec[] = [

];

let _cached_decoder_for_SortElement_datbaseSpecific_Item: $.ASN1Decoder<SortElement_datbaseSpecific_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortElement_datbaseSpecific_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortElement_datbaseSpecific_Item (el: _Element): SortElement_datbaseSpecific_Item {
    if (!_cached_decoder_for_SortElement_datbaseSpecific_Item) { _cached_decoder_for_SortElement_datbaseSpecific_Item = function (el: _Element): SortElement_datbaseSpecific_Item {
    let databaseName!: DatabaseName;
    let dbSort!: SortKey;
    const callbacks: $.DecodingMap = {
        "databaseName": (_el: _Element): void => { databaseName = _decode_DatabaseName(_el); },
        "dbSort": (_el: _Element): void => { dbSort = _decode_SortKey(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SortElement_datbaseSpecific_Item,
        _extension_additions_list_spec_for_SortElement_datbaseSpecific_Item,
        _root_component_type_list_2_spec_for_SortElement_datbaseSpecific_Item,
        undefined,
    );
    return new SortElement_datbaseSpecific_Item(
        databaseName,
        dbSort,
    );
}; }
    return _cached_decoder_for_SortElement_datbaseSpecific_Item(el);
}

let _cached_encoder_for_SortElement_datbaseSpecific_Item: $.ASN1Encoder<SortElement_datbaseSpecific_Item> | null = null;

/**
 * @summary Encodes a(n) SortElement_datbaseSpecific_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortElement_datbaseSpecific_Item, encoded as an ASN.1 Element.
 */
export
function _encode_SortElement_datbaseSpecific_Item (value: SortElement_datbaseSpecific_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortElement_datbaseSpecific_Item) { _cached_encoder_for_SortElement_datbaseSpecific_Item = function (value: SortElement_datbaseSpecific_Item, elGetter: $.ASN1Encoder<SortElement_datbaseSpecific_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DatabaseName(value.databaseName, $.BER),
            /* REQUIRED   */ _encode_SortKey(value.dbSort, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SortElement_datbaseSpecific_Item(value, elGetter);
}

/* eslint-enable */
