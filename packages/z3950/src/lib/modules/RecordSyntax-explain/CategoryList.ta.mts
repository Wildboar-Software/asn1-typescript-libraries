/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { CategoryInfo, _decode_CategoryInfo, _encode_CategoryInfo } from "../RecordSyntax-explain/CategoryInfo.ta.mjs";
// export { CategoryInfo, _decode_CategoryInfo, _encode_CategoryInfo } from "../RecordSyntax-explain/CategoryInfo.ta.mjs";


/**
 * @summary CategoryList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CategoryList ::= SEQUENCE {
 *   commonInfo    [0] IMPLICIT CommonInfo OPTIONAL,
 *          -- Only one record expected per Explain database. All elements
 *          -- appear in brief presentation.
 *   categories    [1] IMPLICIT SEQUENCE OF CategoryInfo }
 * ```
 * 
 * @class
 */
export
class CategoryList {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `categories`.
         * @public
         * @readonly
         */
        readonly categories: CategoryInfo[]
    ) {}

    /**
     * @summary Restructures an object into a CategoryList
     * @description
     * 
     * This takes an `object` and converts it to a `CategoryList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CategoryList`.
     * @returns {CategoryList}
     */
    public static _from_object (_o: { [_K in keyof (CategoryList)]: (CategoryList)[_K] }): CategoryList {
        return new CategoryList(_o.commonInfo, _o.categories);
    }


}

/**
 * @summary The Leading Root Component Types of CategoryList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CategoryList: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("categories", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CategoryList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CategoryList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CategoryList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CategoryList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CategoryList: $.ASN1Decoder<CategoryList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CategoryList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CategoryList (el: _Element): CategoryList {
    if (!_cached_decoder_for_CategoryList) { _cached_decoder_for_CategoryList = function (el: _Element): CategoryList {
    let commonInfo: OPTIONAL<CommonInfo>;
    let categories!: CategoryInfo[];
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "categories": (_el: _Element): void => { categories = $._decode_implicit<CategoryInfo[]>(() => $._decodeSequenceOf<CategoryInfo>(() => _decode_CategoryInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CategoryList,
        _extension_additions_list_spec_for_CategoryList,
        _root_component_type_list_2_spec_for_CategoryList,
        undefined,
    );
    return new CategoryList(
        commonInfo,
        categories
    );
}; }
    return _cached_decoder_for_CategoryList(el);
}

let _cached_encoder_for_CategoryList: $.ASN1Encoder<CategoryList> | null = null;

/**
 * @summary Encodes a(n) CategoryList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CategoryList, encoded as an ASN.1 Element.
 */
export
function _encode_CategoryList (value: CategoryList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CategoryList) { _cached_encoder_for_CategoryList = function (value: CategoryList, elGetter: $.ASN1Encoder<CategoryList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<CategoryInfo>(() => _encode_CategoryInfo, $.BER), $.BER)(value.categories, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CategoryList(value, elGetter);
}


/* eslint-enable */
