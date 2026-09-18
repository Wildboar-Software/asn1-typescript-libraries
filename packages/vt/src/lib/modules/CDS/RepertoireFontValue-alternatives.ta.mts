/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
import { RepertoireAssignment, _decode_RepertoireAssignment, _encode_RepertoireAssignment } from "../CDS/RepertoireAssignment.ta.mjs";
// export { RepertoireAssignment, _decode_RepertoireAssignment, _encode_RepertoireAssignment } from "../CDS/RepertoireAssignment.ta.mjs";
import { FontAssignment, _decode_FontAssignment, _encode_FontAssignment } from "../CDS/FontAssignment.ta.mjs";
// export { FontAssignment, _decode_FontAssignment, _encode_FontAssignment } from "../CDS/FontAssignment.ta.mjs";


/**
 * @summary RepertoireFontValue_alternatives
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepertoireFontValue-alternatives ::= SEQUENCE {
 *     repertoire      [0] IMPLICIT RepertoireAssignment OPTIONAL,
 *     fontCapability  [1] IMPLICIT INTEGER OPTIONAL,
 *     fontAssignments [2] IMPLICIT SEQUENCE OF FontAssignment OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RepertoireFontValue_alternatives {
    constructor (
        /**
         * @summary `repertoire`.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<RepertoireAssignment>,
        /**
         * @summary `fontCapability`.
         * @public
         * @readonly
         */
        readonly fontCapability: OPTIONAL<INTEGER>,
        /**
         * @summary `fontAssignments`.
         * @public
         * @readonly
         */
        readonly fontAssignments: OPTIONAL<FontAssignment[]>
    ) {}

    /**
     * @summary Restructures an object into a RepertoireFontValue_alternatives
     * @description
     * 
     * This takes an `object` and converts it to a `RepertoireFontValue_alternatives`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepertoireFontValue_alternatives`.
     * @returns {RepertoireFontValue_alternatives}
     */
    public static _from_object (_o: { [_K in keyof (RepertoireFontValue_alternatives)]: (RepertoireFontValue_alternatives)[_K] }): RepertoireFontValue_alternatives {
        return new RepertoireFontValue_alternatives(_o.repertoire, _o.fontCapability, _o.fontAssignments);
    }


}

/**
 * @summary The Leading Root Component Types of RepertoireFontValue_alternatives
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RepertoireFontValue_alternatives: $.ComponentSpec[] = [
    new $.ComponentSpec("repertoire", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fontCapability", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fontAssignments", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RepertoireFontValue_alternatives
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RepertoireFontValue_alternatives: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RepertoireFontValue_alternatives
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RepertoireFontValue_alternatives: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RepertoireFontValue_alternatives: $.ASN1Decoder<RepertoireFontValue_alternatives> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepertoireFontValue_alternatives
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RepertoireFontValue_alternatives (el: _Element): RepertoireFontValue_alternatives {
    if (!_cached_decoder_for_RepertoireFontValue_alternatives) { _cached_decoder_for_RepertoireFontValue_alternatives = function (el: _Element): RepertoireFontValue_alternatives {
    let repertoire: OPTIONAL<RepertoireAssignment>;
    let fontCapability: OPTIONAL<INTEGER>;
    let fontAssignments: OPTIONAL<FontAssignment[]>;
    const callbacks: $.DecodingMap = {
        "repertoire": (_el: _Element): void => { repertoire = $._decode_implicit<RepertoireAssignment>(() => _decode_RepertoireAssignment)(_el); },
        "fontCapability": (_el: _Element): void => { fontCapability = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "fontAssignments": (_el: _Element): void => { fontAssignments = $._decode_implicit<FontAssignment[]>(() => $._decodeSequenceOf<FontAssignment>(() => _decode_FontAssignment))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RepertoireFontValue_alternatives,
        _extension_additions_list_spec_for_RepertoireFontValue_alternatives,
        _root_component_type_list_2_spec_for_RepertoireFontValue_alternatives,
        undefined,
    );
    return new RepertoireFontValue_alternatives(
        repertoire,
        fontCapability,
        fontAssignments
    );
}; }
    return _cached_decoder_for_RepertoireFontValue_alternatives(el);
}

let _cached_encoder_for_RepertoireFontValue_alternatives: $.ASN1Encoder<RepertoireFontValue_alternatives> | null = null;

/**
 * @summary Encodes a(n) RepertoireFontValue_alternatives into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepertoireFontValue_alternatives, encoded as an ASN.1 Element.
 */
export
function _encode_RepertoireFontValue_alternatives (value: RepertoireFontValue_alternatives, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RepertoireFontValue_alternatives) { _cached_encoder_for_RepertoireFontValue_alternatives = function (value: RepertoireFontValue_alternatives): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.repertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RepertoireAssignment, $.BER)(value.repertoire, $.BER)),
            /* IF_ABSENT  */ ((value.fontCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.fontCapability, $.BER)),
            /* IF_ABSENT  */ ((value.fontAssignments === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<FontAssignment>(() => _encode_FontAssignment, $.BER), $.BER)(value.fontAssignments, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RepertoireFontValue_alternatives(value, elGetter);
}


/* eslint-enable */
