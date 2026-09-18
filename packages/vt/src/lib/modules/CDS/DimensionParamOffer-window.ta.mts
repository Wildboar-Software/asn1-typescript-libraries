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
import { _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";
// export { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";


/**
 * @summary DimensionParamOffer_window
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DimensionParamOffer-window ::= SEQUENCE {
 *     unbounded NULL OPTIONAL,
 *     limit G.IntegerOffer OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DimensionParamOffer_window {
    constructor (
        /**
         * @summary `unbounded`.
         * @public
         * @readonly
         */
        readonly unbounded: OPTIONAL<NULL>,
        /**
         * @summary `limit`.
         * @public
         * @readonly
         */
        readonly limit: OPTIONAL<G.IntegerOffer>
    ) {}

    /**
     * @summary Restructures an object into a DimensionParamOffer_window
     * @description
     * 
     * This takes an `object` and converts it to a `DimensionParamOffer_window`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DimensionParamOffer_window`.
     * @returns {DimensionParamOffer_window}
     */
    public static _from_object (_o: { [_K in keyof (DimensionParamOffer_window)]: (DimensionParamOffer_window)[_K] }): DimensionParamOffer_window {
        return new DimensionParamOffer_window(_o.unbounded, _o.limit);
    }


}

/**
 * @summary The Leading Root Component Types of DimensionParamOffer_window
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DimensionParamOffer_window: $.ComponentSpec[] = [
    new $.ComponentSpec("unbounded", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("limit", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of DimensionParamOffer_window
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DimensionParamOffer_window: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DimensionParamOffer_window
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DimensionParamOffer_window: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DimensionParamOffer_window: $.ASN1Decoder<DimensionParamOffer_window> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DimensionParamOffer_window
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DimensionParamOffer_window (el: _Element): DimensionParamOffer_window {
    if (!_cached_decoder_for_DimensionParamOffer_window) { _cached_decoder_for_DimensionParamOffer_window = function (el: _Element): DimensionParamOffer_window {
    let unbounded: OPTIONAL<NULL>;
    let limit: OPTIONAL<G.IntegerOffer>;
    const callbacks: $.DecodingMap = {
        "unbounded": (_el: _Element): void => { unbounded = $._decodeNull(_el); },
        "limit": (_el: _Element): void => { limit = G._decode_IntegerOffer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DimensionParamOffer_window,
        _extension_additions_list_spec_for_DimensionParamOffer_window,
        _root_component_type_list_2_spec_for_DimensionParamOffer_window,
        undefined,
    );
    return new DimensionParamOffer_window(
        unbounded,
        limit
    );
}; }
    return _cached_decoder_for_DimensionParamOffer_window(el);
}

let _cached_encoder_for_DimensionParamOffer_window: $.ASN1Encoder<DimensionParamOffer_window> | null = null;

/**
 * @summary Encodes a(n) DimensionParamOffer_window into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DimensionParamOffer_window, encoded as an ASN.1 Element.
 */
export
function _encode_DimensionParamOffer_window (value: DimensionParamOffer_window, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DimensionParamOffer_window) { _cached_encoder_for_DimensionParamOffer_window = function (value: DimensionParamOffer_window): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.unbounded === undefined) ? undefined : $._encodeNull(value.unbounded, $.BER)),
            /* IF_ABSENT  */ ((value.limit === undefined) ? undefined : G._encode_IntegerOffer(value.limit, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DimensionParamOffer_window(value, elGetter);
}


/* eslint-enable */
