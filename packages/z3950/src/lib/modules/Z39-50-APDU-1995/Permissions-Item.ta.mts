/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "./InternationalString.ta.mjs";
import { Permissions_Item_allowableFunctions, _decode_Permissions_Item_allowableFunctions, _encode_Permissions_Item_allowableFunctions } from "./Permissions-Item-allowableFunctions.ta.mjs";


/**
 * @summary Permissions_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Permissions-Item ::= SEQUENCE {
 *     userId               [1] IMPLICIT InternationalString,
 *     allowableFunctions   [2] IMPLICIT SEQUENCE OF Permissions-Item-allowableFunctions
 * }
 * ```
 */
export
class Permissions_Item {
    constructor (
        readonly userId: InternationalString,
        readonly allowableFunctions: Permissions_Item_allowableFunctions[]
    ) {}

    public static _from_object (_o: { [_K in keyof (Permissions_Item)]: (Permissions_Item)[_K] }): Permissions_Item {
        return new Permissions_Item(_o.userId, _o.allowableFunctions);
    }
}

export
const _root_component_type_list_1_spec_for_Permissions_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("userId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("allowableFunctions", false, $.hasTag(_TagClass.context, 2)),
];

export
const _root_component_type_list_2_spec_for_Permissions_Item: $.ComponentSpec[] = [

];

export
const _extension_additions_list_spec_for_Permissions_Item: $.ComponentSpec[] = [

];

let _cached_decoder_for_Permissions_Item: $.ASN1Decoder<Permissions_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Permissions_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Permissions_Item (el: _Element): Permissions_Item {
    if (!_cached_decoder_for_Permissions_Item) { _cached_decoder_for_Permissions_Item = function (el: _Element): Permissions_Item {
    let userId!: InternationalString;
    let allowableFunctions!: Permissions_Item_allowableFunctions[];
    const callbacks: $.DecodingMap = {
        "userId": (_el: _Element): void => { userId = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "allowableFunctions": (_el: _Element): void => { allowableFunctions = $._decode_implicit<Permissions_Item_allowableFunctions[]>(() => $._decodeSequenceOf<Permissions_Item_allowableFunctions>(() => _decode_Permissions_Item_allowableFunctions))(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Permissions_Item,
        _extension_additions_list_spec_for_Permissions_Item,
        _root_component_type_list_2_spec_for_Permissions_Item,
        undefined,
    );
    return new Permissions_Item(
        userId,
        allowableFunctions,
    );
}; }
    return _cached_decoder_for_Permissions_Item(el);
}

let _cached_encoder_for_Permissions_Item: $.ASN1Encoder<Permissions_Item> | null = null;

/**
 * @summary Encodes a(n) Permissions_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Permissions_Item, encoded as an ASN.1 Element.
 */
export
function _encode_Permissions_Item (value: Permissions_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Permissions_Item) { _cached_encoder_for_Permissions_Item = function (value: Permissions_Item, elGetter: $.ASN1Encoder<Permissions_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.userId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Permissions_Item_allowableFunctions>(() => _encode_Permissions_Item_allowableFunctions, $.BER), $.BER)(value.allowableFunctions, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Permissions_Item(value, elGetter);
}

/* eslint-enable */
