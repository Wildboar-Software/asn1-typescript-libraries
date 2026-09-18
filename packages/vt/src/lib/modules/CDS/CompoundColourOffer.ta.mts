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
import { ColourAssignment, _decode_ColourAssignment, _encode_ColourAssignment } from "../CDS/ColourAssignment.ta.mjs";
// export { ColourAssignment, _decode_ColourAssignment, _encode_ColourAssignment } from "../CDS/ColourAssignment.ta.mjs";


/**
 * @summary CompoundColourOffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundColourOffer ::= SEQUENCE {
 *     colourCapability [0] IMPLICIT G.IntegerOffer OPTIONAL,
 *     colourValues     [1] IMPLICIT SEQUENCE OF ColourAssignment OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CompoundColourOffer {
    constructor (
        /**
         * @summary `colourCapability`.
         * @public
         * @readonly
         */
        readonly colourCapability: OPTIONAL<G.IntegerOffer>,
        /**
         * @summary `colourValues`.
         * @public
         * @readonly
         */
        readonly colourValues: OPTIONAL<ColourAssignment[]>
    ) {}

    /**
     * @summary Restructures an object into a CompoundColourOffer
     * @description
     * 
     * This takes an `object` and converts it to a `CompoundColourOffer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompoundColourOffer`.
     * @returns {CompoundColourOffer}
     */
    public static _from_object (_o: { [_K in keyof (CompoundColourOffer)]: (CompoundColourOffer)[_K] }): CompoundColourOffer {
        return new CompoundColourOffer(_o.colourCapability, _o.colourValues);
    }


}

/**
 * @summary The Leading Root Component Types of CompoundColourOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompoundColourOffer: $.ComponentSpec[] = [
    new $.ComponentSpec("colourCapability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("colourValues", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CompoundColourOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompoundColourOffer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompoundColourOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompoundColourOffer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompoundColourOffer: $.ASN1Decoder<CompoundColourOffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundColourOffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundColourOffer (el: _Element): CompoundColourOffer {
    if (!_cached_decoder_for_CompoundColourOffer) { _cached_decoder_for_CompoundColourOffer = function (el: _Element): CompoundColourOffer {
    let colourCapability: OPTIONAL<G.IntegerOffer>;
    let colourValues: OPTIONAL<ColourAssignment[]>;
    const callbacks: $.DecodingMap = {
        "colourCapability": (_el: _Element): void => { colourCapability = $._decode_implicit<G.IntegerOffer>(() => G._decode_IntegerOffer)(_el); },
        "colourValues": (_el: _Element): void => { colourValues = $._decode_implicit<ColourAssignment[]>(() => $._decodeSequenceOf<ColourAssignment>(() => _decode_ColourAssignment))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompoundColourOffer,
        _extension_additions_list_spec_for_CompoundColourOffer,
        _root_component_type_list_2_spec_for_CompoundColourOffer,
        undefined,
    );
    return new CompoundColourOffer(
        colourCapability,
        colourValues
    );
}; }
    return _cached_decoder_for_CompoundColourOffer(el);
}

let _cached_encoder_for_CompoundColourOffer: $.ASN1Encoder<CompoundColourOffer> | null = null;

/**
 * @summary Encodes a(n) CompoundColourOffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundColourOffer, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundColourOffer (value: CompoundColourOffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundColourOffer) { _cached_encoder_for_CompoundColourOffer = function (value: CompoundColourOffer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.colourCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => G._encode_IntegerOffer, $.BER)(value.colourCapability, $.BER)),
            /* IF_ABSENT  */ ((value.colourValues === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ColourAssignment>(() => _encode_ColourAssignment, $.BER), $.BER)(value.colourValues, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompoundColourOffer(value, elGetter);
}


/* eslint-enable */
