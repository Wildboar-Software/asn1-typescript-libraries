/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrivateCapabilities_operators_Item, _decode_PrivateCapabilities_operators_Item, _encode_PrivateCapabilities_operators_Item } from "../RecordSyntax-explain/PrivateCapabilities-operators-Item.ta.mjs";
// export { PrivateCapabilities_operators_Item, _decode_PrivateCapabilities_operators_Item, _encode_PrivateCapabilities_operators_Item } from "../RecordSyntax-explain/PrivateCapabilities-operators-Item.ta.mjs";
import { SearchKey, _decode_SearchKey, _encode_SearchKey } from "../RecordSyntax-explain/SearchKey.ta.mjs";
// export { SearchKey, _decode_SearchKey, _encode_SearchKey } from "../RecordSyntax-explain/SearchKey.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary PrivateCapabilities
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateCapabilities ::= SEQUENCE {
 *   operators     [0] IMPLICIT SEQUENCE OF SEQUENCE {
 *                       operator     [0] IMPLICIT InternationalString,
 *                       description  [1] IMPLICIT HumanString OPTIONAL } OPTIONAL,
 *   searchKeys    [1] IMPLICIT SEQUENCE OF SearchKey OPTIONAL,  
 *                           -- field names that can be searched
 *   description   [2] IMPLICIT SEQUENCE OF HumanString OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PrivateCapabilities {
    constructor (
        /**
         * @summary `operators`.
         * @public
         * @readonly
         */
        readonly operators: OPTIONAL<PrivateCapabilities_operators_Item[]>,
        /**
         * @summary `searchKeys`.
         * @public
         * @readonly
         */
        readonly searchKeys: OPTIONAL<SearchKey[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString[]>
    ) {}

    /**
     * @summary Restructures an object into a PrivateCapabilities
     * @description
     * 
     * This takes an `object` and converts it to a `PrivateCapabilities`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivateCapabilities`.
     * @returns {PrivateCapabilities}
     */
    public static _from_object (_o: { [_K in keyof (PrivateCapabilities)]: (PrivateCapabilities)[_K] }): PrivateCapabilities {
        return new PrivateCapabilities(_o.operators, _o.searchKeys, _o.description);
    }


}

/**
 * @summary The Leading Root Component Types of PrivateCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrivateCapabilities: $.ComponentSpec[] = [
    new $.ComponentSpec("operators", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("searchKeys", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PrivateCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrivateCapabilities: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrivateCapabilities
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrivateCapabilities: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrivateCapabilities: $.ASN1Decoder<PrivateCapabilities> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivateCapabilities
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivateCapabilities (el: _Element): PrivateCapabilities {
    if (!_cached_decoder_for_PrivateCapabilities) { _cached_decoder_for_PrivateCapabilities = function (el: _Element): PrivateCapabilities {
    let operators: OPTIONAL<PrivateCapabilities_operators_Item[]>;
    let searchKeys: OPTIONAL<SearchKey[]>;
    let description: OPTIONAL<HumanString[]>;
    const callbacks: $.DecodingMap = {
        "operators": (_el: _Element): void => { operators = $._decode_implicit<PrivateCapabilities_operators_Item[]>(() => $._decodeSequenceOf<PrivateCapabilities_operators_Item>(() => _decode_PrivateCapabilities_operators_Item))(_el); },
        "searchKeys": (_el: _Element): void => { searchKeys = $._decode_implicit<SearchKey[]>(() => $._decodeSequenceOf<SearchKey>(() => _decode_SearchKey))(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString[]>(() => $._decodeSequenceOf<HumanString>(() => _decode_HumanString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrivateCapabilities,
        _extension_additions_list_spec_for_PrivateCapabilities,
        _root_component_type_list_2_spec_for_PrivateCapabilities,
        undefined,
    );
    return new PrivateCapabilities(
        operators,
        searchKeys,
        description
    );
}; }
    return _cached_decoder_for_PrivateCapabilities(el);
}

let _cached_encoder_for_PrivateCapabilities: $.ASN1Encoder<PrivateCapabilities> | null = null;

/**
 * @summary Encodes a(n) PrivateCapabilities into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivateCapabilities, encoded as an ASN.1 Element.
 */
export
function _encode_PrivateCapabilities (value: PrivateCapabilities, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivateCapabilities) { _cached_encoder_for_PrivateCapabilities = function (value: PrivateCapabilities, elGetter: $.ASN1Encoder<PrivateCapabilities>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.operators === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<PrivateCapabilities_operators_Item>(() => _encode_PrivateCapabilities_operators_Item, $.BER), $.BER)(value.operators, $.BER)),
            /* IF_ABSENT  */ ((value.searchKeys === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<SearchKey>(() => _encode_SearchKey, $.BER), $.BER)(value.searchKeys, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<HumanString>(() => _encode_HumanString, $.BER), $.BER)(value.description, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrivateCapabilities(value, elGetter);
}


/* eslint-enable */
