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
 * @summary ParameterOffers_structure
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-structure ::= SEQUENCE {
 *     nonParametric NULL OPTIONAL,
 *     numberElements G.IntegerOffer OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParameterOffers_structure {
    constructor (
        /**
         * @summary `nonParametric`.
         * @public
         * @readonly
         */
        readonly nonParametric: OPTIONAL<NULL>,
        /**
         * @summary `numberElements`.
         * @public
         * @readonly
         */
        readonly numberElements: OPTIONAL<G.IntegerOffer>
    ) {}

    /**
     * @summary Restructures an object into a ParameterOffers_structure
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterOffers_structure`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterOffers_structure`.
     * @returns {ParameterOffers_structure}
     */
    public static _from_object (_o: { [_K in keyof (ParameterOffers_structure)]: (ParameterOffers_structure)[_K] }): ParameterOffers_structure {
        return new ParameterOffers_structure(_o.nonParametric, _o.numberElements);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterOffers_structure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterOffers_structure: $.ComponentSpec[] = [
    new $.ComponentSpec("nonParametric", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("numberElements", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ParameterOffers_structure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterOffers_structure: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterOffers_structure
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterOffers_structure: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterOffers_structure: $.ASN1Decoder<ParameterOffers_structure> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_structure
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_structure (el: _Element): ParameterOffers_structure {
    if (!_cached_decoder_for_ParameterOffers_structure) { _cached_decoder_for_ParameterOffers_structure = function (el: _Element): ParameterOffers_structure {
    let nonParametric: OPTIONAL<NULL>;
    let numberElements: OPTIONAL<G.IntegerOffer>;
    const callbacks: $.DecodingMap = {
        "nonParametric": (_el: _Element): void => { nonParametric = $._decodeNull(_el); },
        "numberElements": (_el: _Element): void => { numberElements = G._decode_IntegerOffer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterOffers_structure,
        _extension_additions_list_spec_for_ParameterOffers_structure,
        _root_component_type_list_2_spec_for_ParameterOffers_structure,
        undefined,
    );
    return new ParameterOffers_structure(
        nonParametric,
        numberElements
    );
}; }
    return _cached_decoder_for_ParameterOffers_structure(el);
}

let _cached_encoder_for_ParameterOffers_structure: $.ASN1Encoder<ParameterOffers_structure> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_structure into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_structure, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_structure (value: ParameterOffers_structure, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_structure) { _cached_encoder_for_ParameterOffers_structure = function (value: ParameterOffers_structure): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.nonParametric === undefined) ? undefined : $._encodeNull(value.nonParametric, $.BER)),
            /* IF_ABSENT  */ ((value.numberElements === undefined) ? undefined : G._encode_IntegerOffer(value.numberElements, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterOffers_structure(value, elGetter);
}


/* eslint-enable */
