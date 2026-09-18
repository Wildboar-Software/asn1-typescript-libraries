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
import { RepertoireFontIdent, _decode_RepertoireFontIdent, _encode_RepertoireFontIdent } from "../CDS/RepertoireFontIdent.ta.mjs";
// export { RepertoireFontIdent, _decode_RepertoireFontIdent, _encode_RepertoireFontIdent } from "../CDS/RepertoireFontIdent.ta.mjs";


/**
 * @summary CompoundRepertoireIdent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompoundRepertoireIdent ::= SEQUENCE {
 *     capability                  [0] IMPLICIT NULL OPTIONAL,
 *     repertoirePositionOffers    [1] IMPLICIT SEQUENCE OF RepertoireFontIdent OPTIONAL
 *     -- offers for positions in repertoire list
 * }
 * ```
 * 
 * @class
 */
export
class CompoundRepertoireIdent {
    constructor (
        /**
         * @summary `capability`.
         * @public
         * @readonly
         */
        readonly capability: OPTIONAL<NULL>,
        /**
         * @summary `repertoirePositionOffers`.
         * @public
         * @readonly
         */
        readonly repertoirePositionOffers: OPTIONAL<RepertoireFontIdent[]>
    ) {}

    /**
     * @summary Restructures an object into a CompoundRepertoireIdent
     * @description
     * 
     * This takes an `object` and converts it to a `CompoundRepertoireIdent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompoundRepertoireIdent`.
     * @returns {CompoundRepertoireIdent}
     */
    public static _from_object (_o: { [_K in keyof (CompoundRepertoireIdent)]: (CompoundRepertoireIdent)[_K] }): CompoundRepertoireIdent {
        return new CompoundRepertoireIdent(_o.capability, _o.repertoirePositionOffers);
    }


}

/**
 * @summary The Leading Root Component Types of CompoundRepertoireIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompoundRepertoireIdent: $.ComponentSpec[] = [
    new $.ComponentSpec("capability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("repertoirePositionOffers", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CompoundRepertoireIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompoundRepertoireIdent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompoundRepertoireIdent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompoundRepertoireIdent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompoundRepertoireIdent: $.ASN1Decoder<CompoundRepertoireIdent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompoundRepertoireIdent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompoundRepertoireIdent (el: _Element): CompoundRepertoireIdent {
    if (!_cached_decoder_for_CompoundRepertoireIdent) { _cached_decoder_for_CompoundRepertoireIdent = function (el: _Element): CompoundRepertoireIdent {
    let capability: OPTIONAL<NULL>;
    let repertoirePositionOffers: OPTIONAL<RepertoireFontIdent[]>;
    const callbacks: $.DecodingMap = {
        "capability": (_el: _Element): void => { capability = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "repertoirePositionOffers": (_el: _Element): void => { repertoirePositionOffers = $._decode_implicit<RepertoireFontIdent[]>(() => $._decodeSequenceOf<RepertoireFontIdent>(() => _decode_RepertoireFontIdent))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CompoundRepertoireIdent,
        _extension_additions_list_spec_for_CompoundRepertoireIdent,
        _root_component_type_list_2_spec_for_CompoundRepertoireIdent,
        undefined,
    );
    return new CompoundRepertoireIdent(
        capability,
        repertoirePositionOffers
    );
}; }
    return _cached_decoder_for_CompoundRepertoireIdent(el);
}

let _cached_encoder_for_CompoundRepertoireIdent: $.ASN1Encoder<CompoundRepertoireIdent> | null = null;

/**
 * @summary Encodes a(n) CompoundRepertoireIdent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompoundRepertoireIdent, encoded as an ASN.1 Element.
 */
export
function _encode_CompoundRepertoireIdent (value: CompoundRepertoireIdent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompoundRepertoireIdent) { _cached_encoder_for_CompoundRepertoireIdent = function (value: CompoundRepertoireIdent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.capability, $.BER)),
            /* IF_ABSENT  */ ((value.repertoirePositionOffers === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<RepertoireFontIdent>(() => _encode_RepertoireFontIdent, $.BER), $.BER)(value.repertoirePositionOffers, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompoundRepertoireIdent(value, elGetter);
}


/* eslint-enable */
