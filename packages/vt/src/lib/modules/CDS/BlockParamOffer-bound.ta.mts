/* eslint-disable */
import {
    OPTIONAL,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_IntegerOffer, _encode_IntegerOffer, type IntegerOffer } from "../G/IntegerOffer.ta.mjs";
// export { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";


/**
 * @summary BlockParamOffer_bound
 * @description
 *
 * Offered `b-bound`: unbounded or integer limit. Default 1 (single
 * block). ISO/IEC 9040:1997 §18.2.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BlockParamOffer-bound ::= SEQUENCE {
 *     unbounded NULL OPTIONAL,
 *     limit G.IntegerOffer OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class BlockParamOffer_bound {
    constructor (
        /**
         * @summary `unbounded`.
         * @description
         * Offer unbounded `b-bound`. ISO/IEC 9040:1997 §18.2.1.
         * @public
         * @readonly
         */
        readonly unbounded: OPTIONAL<NULL>,
        /**
         * @summary `limit`.
         * @description
         * Offered integer `b-bound`(s). Addressing/CREATE/DELETE
         * invalid if b > bound. ISO/IEC 9040:1997 §18.2.1.
         * @public
         * @readonly
         */
        readonly limit: OPTIONAL<IntegerOffer>
    ) {}

    /**
     * @summary Restructures an object into a BlockParamOffer_bound
     * @description
     * 
     * This takes an `object` and converts it to a `BlockParamOffer_bound`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BlockParamOffer_bound`.
     * @returns {BlockParamOffer_bound}
     */
    public static _from_object (_o: { [_K in keyof (BlockParamOffer_bound)]: (BlockParamOffer_bound)[_K] }): BlockParamOffer_bound {
        return new BlockParamOffer_bound(_o.unbounded, _o.limit);
    }


}

/**
 * @summary The Leading Root Component Types of BlockParamOffer_bound
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BlockParamOffer_bound: $.ComponentSpec[] = [
    new $.ComponentSpec("unbounded", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("limit", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of BlockParamOffer_bound
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BlockParamOffer_bound: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BlockParamOffer_bound
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BlockParamOffer_bound: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BlockParamOffer_bound: $.ASN1Decoder<BlockParamOffer_bound> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BlockParamOffer_bound
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BlockParamOffer_bound (el: _Element): BlockParamOffer_bound {
    if (!_cached_decoder_for_BlockParamOffer_bound) { _cached_decoder_for_BlockParamOffer_bound = function (el: _Element): BlockParamOffer_bound {
    let unbounded: OPTIONAL<NULL>;
    let limit: OPTIONAL<IntegerOffer>;
    const callbacks: $.DecodingMap = {
        "unbounded": (_el: _Element): void => { unbounded = $._decodeNull(_el); },
        "limit": (_el: _Element): void => { limit = _decode_IntegerOffer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BlockParamOffer_bound,
        _extension_additions_list_spec_for_BlockParamOffer_bound,
        _root_component_type_list_2_spec_for_BlockParamOffer_bound,
        undefined,
    );
    return new BlockParamOffer_bound(
        unbounded,
        limit
    );
}; }
    return _cached_decoder_for_BlockParamOffer_bound(el);
}

let _cached_encoder_for_BlockParamOffer_bound: $.ASN1Encoder<BlockParamOffer_bound> | null = null;

/**
 * @summary Encodes a(n) BlockParamOffer_bound into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BlockParamOffer_bound, encoded as an ASN.1 Element.
 */
export
function _encode_BlockParamOffer_bound (value: BlockParamOffer_bound, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BlockParamOffer_bound) { _cached_encoder_for_BlockParamOffer_bound = function (value: BlockParamOffer_bound): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.unbounded === undefined) ? undefined : $._encodeNull(value.unbounded, $.BER)),
            /* IF_ABSENT  */ ((value.limit === undefined) ? undefined : _encode_IntegerOffer(value.limit, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BlockParamOffer_bound(value, elGetter);
}


/* eslint-enable */
