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
import { AssignmentIdent, _decode_AssignmentIdent, _encode_AssignmentIdent } from "../CDS/AssignmentIdent.ta.mjs";
// export { AssignmentIdent, _decode_AssignmentIdent, _encode_AssignmentIdent } from "../CDS/AssignmentIdent.ta.mjs";


/**
 * @summary RepertoireFontIdent_alternatives
 * @description
 *
 * Invite sub-parameters of one repertoire-list slot. `NULL`
 * presence invites that sub-parameter. ISO/IEC 9041-1:1997
 * §12.3.1; ISO/IEC 9040:1997 §18.2.4, §18.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepertoireFontIdent-alternatives ::= SEQUENCE {
 *     assignment     [0] IMPLICIT NULL OPTIONAL,
 *     fontCapability [1] IMPLICIT NULL OPTIONAL,
 *     fontNames      [2] IMPLICIT SEQUENCE OF AssignmentIdent OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class RepertoireFontIdent_alternatives {
    constructor (
        /**
         * @summary `assignment`.
         * @description
         * Invite repertoire-assignment for this slot. ISO/IEC
         * 9040:1997 §18.2.4.
         * @public
         * @readonly
         */
        readonly assignment: OPTIONAL<NULL>,
        /**
         * @summary `fontCapability`.
         * @description
         * Invite `font-capability` for this repertoire (default 1).
         * ISO/IEC 9040:1997 §18.3.
         * @public
         * @readonly
         */
        readonly fontCapability: OPTIONAL<NULL>,
        /**
         * @summary `fontNames`.
         * @description
         * Invite font-assignment names for this repertoire slot.
         * ISO/IEC 9040:1997 §18.3.
         * @public
         * @readonly
         */
        readonly fontNames: OPTIONAL<AssignmentIdent[]>
    ) {}

    /**
     * @summary Restructures an object into a RepertoireFontIdent_alternatives
     * @description
     * 
     * This takes an `object` and converts it to a `RepertoireFontIdent_alternatives`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepertoireFontIdent_alternatives`.
     * @returns {RepertoireFontIdent_alternatives}
     */
    public static _from_object (_o: { [_K in keyof (RepertoireFontIdent_alternatives)]: (RepertoireFontIdent_alternatives)[_K] }): RepertoireFontIdent_alternatives {
        return new RepertoireFontIdent_alternatives(_o.assignment, _o.fontCapability, _o.fontNames);
    }


}

/**
 * @summary The Leading Root Component Types of RepertoireFontIdent_alternatives
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RepertoireFontIdent_alternatives: $.ComponentSpec[] = [
    new $.ComponentSpec("assignment", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("fontCapability", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fontNames", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RepertoireFontIdent_alternatives
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RepertoireFontIdent_alternatives: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RepertoireFontIdent_alternatives
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RepertoireFontIdent_alternatives: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RepertoireFontIdent_alternatives: $.ASN1Decoder<RepertoireFontIdent_alternatives> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepertoireFontIdent_alternatives
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RepertoireFontIdent_alternatives (el: _Element): RepertoireFontIdent_alternatives {
    if (!_cached_decoder_for_RepertoireFontIdent_alternatives) { _cached_decoder_for_RepertoireFontIdent_alternatives = function (el: _Element): RepertoireFontIdent_alternatives {
    let assignment: OPTIONAL<NULL>;
    let fontCapability: OPTIONAL<NULL>;
    let fontNames: OPTIONAL<AssignmentIdent[]>;
    const callbacks: $.DecodingMap = {
        "assignment": (_el: _Element): void => { assignment = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "fontCapability": (_el: _Element): void => { fontCapability = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "fontNames": (_el: _Element): void => { fontNames = $._decode_implicit<AssignmentIdent[]>(() => $._decodeSequenceOf<AssignmentIdent>(() => _decode_AssignmentIdent))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RepertoireFontIdent_alternatives,
        _extension_additions_list_spec_for_RepertoireFontIdent_alternatives,
        _root_component_type_list_2_spec_for_RepertoireFontIdent_alternatives,
        undefined,
    );
    return new RepertoireFontIdent_alternatives(
        assignment,
        fontCapability,
        fontNames
    );
}; }
    return _cached_decoder_for_RepertoireFontIdent_alternatives(el);
}

let _cached_encoder_for_RepertoireFontIdent_alternatives: $.ASN1Encoder<RepertoireFontIdent_alternatives> | null = null;

/**
 * @summary Encodes a(n) RepertoireFontIdent_alternatives into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepertoireFontIdent_alternatives, encoded as an ASN.1 Element.
 */
export
function _encode_RepertoireFontIdent_alternatives (value: RepertoireFontIdent_alternatives, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RepertoireFontIdent_alternatives) { _cached_encoder_for_RepertoireFontIdent_alternatives = function (value: RepertoireFontIdent_alternatives): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.assignment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.assignment, $.BER)),
            /* IF_ABSENT  */ ((value.fontCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.fontCapability, $.BER)),
            /* IF_ABSENT  */ ((value.fontNames === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<AssignmentIdent>(() => _encode_AssignmentIdent, $.BER), $.BER)(value.fontNames, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RepertoireFontIdent_alternatives(value, elGetter);
}


/* eslint-enable */
