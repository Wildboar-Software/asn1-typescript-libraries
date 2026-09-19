/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LanguageCode, _decode_LanguageCode, _encode_LanguageCode } from "../RecordSyntax-explain/LanguageCode.ta.mjs";
// export { LanguageCode, _decode_LanguageCode, _encode_LanguageCode } from "../RecordSyntax-explain/LanguageCode.ta.mjs";


/**
 * @summary HumanString_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HumanString-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class HumanString_Item {
    constructor (
        /**
         * @summary `language`.
         * @public
         * @readonly
         */
        readonly language: OPTIONAL<LanguageCode>,
        /**
         * @summary `text`.
         * @public
         * @readonly
         */
        readonly text: InternationalString
    ) {}

    /**
     * @summary Restructures an object into a HumanString_Item
     * @description
     * 
     * This takes an `object` and converts it to a `HumanString_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HumanString_Item`.
     * @returns {HumanString_Item}
     */
    public static _from_object (_o: { [_K in keyof (HumanString_Item)]: (HumanString_Item)[_K] }): HumanString_Item {
        return new HumanString_Item(_o.language, _o.text);
    }


}

/**
 * @summary The Leading Root Component Types of HumanString_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HumanString_Item: $.ComponentSpec[] = [
    /* FIXME: language COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: text COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of HumanString_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HumanString_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HumanString_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HumanString_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HumanString_Item: $.ASN1Decoder<HumanString_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HumanString_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HumanString_Item (el: _Element): HumanString_Item {
    if (!_cached_decoder_for_HumanString_Item) { _cached_decoder_for_HumanString_Item = function (el: _Element): HumanString_Item {
    let language: OPTIONAL<LanguageCode>;
    let text!: InternationalString;
    const callbacks: $.DecodingMap = {
        "language": (_el: _Element): void => { language = $._decode_implicit<LanguageCode>(() => _decode_LanguageCode)(_el); },
        "text": (_el: _Element): void => { text = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HumanString_Item,
        _extension_additions_list_spec_for_HumanString_Item,
        _root_component_type_list_2_spec_for_HumanString_Item,
        undefined,
    );
    return new HumanString_Item(
        language,
        text
    );
}; }
    return _cached_decoder_for_HumanString_Item(el);
}

let _cached_encoder_for_HumanString_Item: $.ASN1Encoder<HumanString_Item> | null = null;

/**
 * @summary Encodes a(n) HumanString_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HumanString_Item, encoded as an ASN.1 Element.
 */
export
function _encode_HumanString_Item (value: HumanString_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HumanString_Item) { _cached_encoder_for_HumanString_Item = function (value: HumanString_Item, elGetter: $.ASN1Encoder<HumanString_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.language === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_LanguageCode, $.BER)(value.language, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.text, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HumanString_Item(value, elGetter);
}


/* eslint-enable */
