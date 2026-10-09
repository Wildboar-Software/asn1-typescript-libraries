/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary SearchKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchKey ::= SEQUENCE {
 *     searchKey   [0] IMPLICIT InternationalString,
 *     description [1] IMPLICIT HumanString OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SearchKey {
    /**
     * @summary `searchKey`.
     * @public
     * @readonly
     */
    readonly searchKey: InternationalString;
    /**
     * @summary `description`.
     * @public
     * @readonly
     */
    readonly description: OPTIONAL<HumanString>;

    constructor (
        searchKey: InternationalString,
        description: OPTIONAL<HumanString>
    ) {
        this.searchKey = searchKey;
        this.description = description;
    }

    /**
     * @summary Restructures an object into a SearchKey
     * @description
     * 
     * This takes an `object` and converts it to a `SearchKey`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchKey`.
     * @returns {SearchKey}
     */
    public static _from_object (_o: { [_K in keyof (SearchKey)]: (SearchKey)[_K] }): SearchKey {
        return new SearchKey(_o.searchKey, _o.description);
    }


}

/**
 * @summary The Leading Root Component Types of SearchKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SearchKey: $.ComponentSpec[] = [
    new $.ComponentSpec("searchKey", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SearchKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SearchKey: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SearchKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SearchKey: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SearchKey: $.ASN1Decoder<SearchKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchKey
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchKey (el: _Element): SearchKey {
    if (!_cached_decoder_for_SearchKey) { _cached_decoder_for_SearchKey = function (el: _Element): SearchKey {
    let searchKey!: InternationalString;
    let description: OPTIONAL<HumanString>;
    const callbacks: $.DecodingMap = {
        "searchKey": (_el: _Element): void => { searchKey = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchKey,
        _extension_additions_list_spec_for_SearchKey,
        _root_component_type_list_2_spec_for_SearchKey,
        undefined,
    );
    return new SearchKey(
        searchKey,
        description
    );
}; }
    return _cached_decoder_for_SearchKey(el);
}

let _cached_encoder_for_SearchKey: $.ASN1Encoder<SearchKey> | null = null;

/**
 * @summary Encodes a(n) SearchKey into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchKey, encoded as an ASN.1 Element.
 */
export
function _encode_SearchKey (value: SearchKey, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchKey) { _cached_encoder_for_SearchKey = function (value: SearchKey, elGetter: $.ASN1Encoder<SearchKey>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.searchKey, $.BER);
    if (value.description !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SearchKey(value, elGetter);
}


/* eslint-enable */
