/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SDSEContent, _decode_SDSEContent, _encode_SDSEContent } from "../DirectoryShadowAbstractService/SDSEContent.ta.mjs";
// export { SDSEContent, _decode_SDSEContent, _encode_SDSEContent } from "../DirectoryShadowAbstractService/SDSEContent.ta.mjs";
import { Subtree, _decode_Subtree, _encode_Subtree } from "../DirectoryShadowAbstractService/Subtree.ta.mjs";
// export { Subtree, _decode_Subtree, _encode_Subtree } from "../DirectoryShadowAbstractService/Subtree.ta.mjs";


/**
 * @summary TotalRefresh
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TotalRefresh ::= SEQUENCE {
 *   sDSE     SDSEContent OPTIONAL,
 *   subtree  SET OF Subtree OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TotalRefresh {
    /**
     * @summary `sDSE`.
     * @public
     * @readonly
     */
    readonly sDSE: OPTIONAL<SDSEContent>;
    /**
     * @summary `subtree`.
     * @public
     * @readonly
     */
    readonly subtree: OPTIONAL<Subtree[]>;

    constructor (
        sDSE: OPTIONAL<SDSEContent>,
        subtree: OPTIONAL<Subtree[]>
    ) {
        this.sDSE = sDSE;
        this.subtree = subtree;
    }

    /**
     * @summary Restructures an object into a TotalRefresh
     * @description
     * 
     * This takes an `object` and converts it to a `TotalRefresh`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TotalRefresh`.
     * @returns {TotalRefresh}
     */
    public static _from_object (_o: { [_K in keyof (TotalRefresh)]: (TotalRefresh)[_K] }): TotalRefresh {
        return new TotalRefresh(_o.sDSE, _o.subtree);
    }


}

/**
 * @summary The Leading Root Component Types of TotalRefresh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TotalRefresh: $.ComponentSpec[] = [
    new $.ComponentSpec("sDSE", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("subtree", true, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of TotalRefresh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TotalRefresh: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TotalRefresh
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TotalRefresh: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TotalRefresh: $.ASN1Decoder<TotalRefresh> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TotalRefresh
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TotalRefresh (el: _Element): TotalRefresh {
    if (!_cached_decoder_for_TotalRefresh) { _cached_decoder_for_TotalRefresh = function (el: _Element): TotalRefresh {
    let sDSE: OPTIONAL<SDSEContent>;
    let subtree: OPTIONAL<Subtree[]>;
    const callbacks: $.DecodingMap = {
        "sDSE": (_el: _Element): void => { sDSE = _decode_SDSEContent(_el); },
        "subtree": (_el: _Element): void => { subtree = $._decodeSetOf<Subtree>(() => _decode_Subtree)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TotalRefresh,
        _extension_additions_list_spec_for_TotalRefresh,
        _root_component_type_list_2_spec_for_TotalRefresh,
        undefined,
    );
    return new TotalRefresh(
        sDSE,
        subtree
    );
}; }
    return _cached_decoder_for_TotalRefresh(el);
}

let _cached_encoder_for_TotalRefresh: $.ASN1Encoder<TotalRefresh> | null = null;

/**
 * @summary Encodes a(n) TotalRefresh into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TotalRefresh, encoded as an ASN.1 Element.
 */
export
function _encode_TotalRefresh (value: TotalRefresh, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TotalRefresh) { _cached_encoder_for_TotalRefresh = function (value: TotalRefresh, elGetter: $.ASN1Encoder<TotalRefresh>): _Element {
    const _components: _Element[] = [];
    if (value.sDSE !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SDSEContent(value.sDSE, $.BER));
    }
    if (value.subtree !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSetOf<Subtree>(() => _encode_Subtree, $.BER)(value.subtree, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TotalRefresh(value, elGetter);
}


/* eslint-enable */
