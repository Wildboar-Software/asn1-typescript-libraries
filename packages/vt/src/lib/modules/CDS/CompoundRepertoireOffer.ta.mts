/* eslint-disable */
import {
    OPTIONAL,
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
import { RepertoireFontOffer, _decode_RepertoireFontOffer, _encode_RepertoireFontOffer } from "../CDS/RepertoireFontOffer.ta.mjs";
// export { RepertoireFontOffer, _decode_RepertoireFontOffer, _encode_RepertoireFontOffer } from "../CDS/RepertoireFontOffer.ta.mjs";


/**
 * @summary CompoundRepertoireOffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundRepertoireOffer ::= SEQUENCE {
 *     repertoireCapability    [0] IMPLICIT G.IntegerOffer OPTIONAL,
 *     fontOffers              [1] IMPLICIT SEQUENCE OF RepertoireFontOffer OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CompoundRepertoireOffer {
    constructor (
        /**
         * @summary `repertoireCapability`.
         * @public
         * @readonly
         */
        readonly repertoireCapability: OPTIONAL<G.IntegerOffer>,
        /**
         * @summary `fontOffers`.
         * @public
         * @readonly
         */
        readonly fontOffers: OPTIONAL<RepertoireFontOffer[]>
    ) {}

    /**
     * @summary Restructures an object into a CompoundRepertoireOffer
     * @description
     * 
     * This takes an `object` and converts it to a `CompoundRepertoireOffer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompoundRepertoireOffer`.
     * @returns {CompoundRepertoireOffer}
     */
    public static _from_object (_o: { [_K in keyof (CompoundRepertoireOffer)]: (CompoundRepertoireOffer)[_K] }): CompoundRepertoireOffer {
        return new CompoundRepertoireOffer(_o.repertoireCapability, _o.fontOffers);
    }


}

/**
 * @summary The Leading Root Component Types of CompoundRepertoireOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompoundRepertoireOffer: $.ComponentSpec[] = [
    new $.ComponentSpec("repertoireCapability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fontOffers", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CompoundRepertoireOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompoundRepertoireOffer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompoundRepertoireOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompoundRepertoireOffer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompoundRepertoireOffer: $.ASN1Decoder<CompoundRepertoireOffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundRepertoireOffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundRepertoireOffer (el: _Element): CompoundRepertoireOffer {
    if (!_cached_decoder_for_CompoundRepertoireOffer) { _cached_decoder_for_CompoundRepertoireOffer = function (el: _Element): CompoundRepertoireOffer {
    let repertoireCapability: OPTIONAL<G.IntegerOffer>;
    let fontOffers: OPTIONAL<RepertoireFontOffer[]>;
    const callbacks: $.DecodingMap = {
        "repertoireCapability": (_el: _Element): void => { repertoireCapability = $._decode_implicit<G.IntegerOffer>(() => G._decode_IntegerOffer)(_el); },
        "fontOffers": (_el: _Element): void => { fontOffers = $._decode_implicit<RepertoireFontOffer[]>(() => $._decodeSequenceOf<RepertoireFontOffer>(() => _decode_RepertoireFontOffer))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompoundRepertoireOffer,
        _extension_additions_list_spec_for_CompoundRepertoireOffer,
        _root_component_type_list_2_spec_for_CompoundRepertoireOffer,
        undefined,
    );
    return new CompoundRepertoireOffer(
        repertoireCapability,
        fontOffers
    );
}; }
    return _cached_decoder_for_CompoundRepertoireOffer(el);
}

let _cached_encoder_for_CompoundRepertoireOffer: $.ASN1Encoder<CompoundRepertoireOffer> | null = null;

/**
 * @summary Encodes a(n) CompoundRepertoireOffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundRepertoireOffer, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundRepertoireOffer (value: CompoundRepertoireOffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundRepertoireOffer) { _cached_encoder_for_CompoundRepertoireOffer = function (value: CompoundRepertoireOffer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.repertoireCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => G._encode_IntegerOffer, $.BER)(value.repertoireCapability, $.BER)),
            /* IF_ABSENT  */ ((value.fontOffers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RepertoireFontOffer>(() => _encode_RepertoireFontOffer, $.BER), $.BER)(value.fontOffers, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompoundRepertoireOffer(value, elGetter);
}


/* eslint-enable */
