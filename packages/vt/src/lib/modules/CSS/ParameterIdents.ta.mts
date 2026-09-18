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
import { ElementParamIdent, _decode_ElementParamIdent, _encode_ElementParamIdent } from "../CSS/ElementParamIdent.ta.mjs";
// export { ElementParamIdent, _decode_ElementParamIdent, _encode_ElementParamIdent } from "../CSS/ElementParamIdent.ta.mjs";


/**
 * @summary ParameterIdents
 * @description
 *
 * Presence of a NULL component invites that CO VTE-parameter
 * for MIN. Absent means not invited in this identifier.
 * ISO/IEC 9041-1:1997 §12.4.1; ISO/IEC 9040:1997 table 9,
 * §20.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterIdents ::= SEQUENCE {
 *     typeIdentifier [0] IMPLICIT NULL OPTIONAL,
 *     access         [1] IMPLICIT NULL OPTIONAL,
 *     trigger        [2] IMPLICIT NULL OPTIONAL,
 *     size           [3] IMPLICIT NULL OPTIONAL,
 *     category       [4] IMPLICIT NULL OPTIONAL,
 *     repertoire     [5] IMPLICIT NULL OPTIONAL,
 *     priority       [6] IMPLICIT NULL OPTIONAL,
 *     structure      [7] IMPLICIT NULL OPTIONAL,
 *     multiElement   [8] IMPLICIT SEQUENCE OF ElementParamIdent OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParameterIdents {
    constructor (
        /**
         * @summary `typeIdentifier`.
         * @description
         * Invite `CO-type-identifier` (source of CO semantics).
         * ISO/IEC 9040:1997 §14, §20.1.1.
         * @public
         * @readonly
         */
        readonly typeIdentifier: OPTIONAL<NULL>,
        /**
         * @summary `access`.
         * @description
         * Invite `CO-access`. Default `"NSAC"`.
         * ISO/IEC 9040:1997 §9, §20.1.3.
         * @public
         * @readonly
         */
        readonly access: OPTIONAL<NULL>,
        /**
         * @summary `trigger`.
         * @description
         * Invite `CO-trigger`. Valid only if `CO-priority` is
         * `"normal"`. Default `"not selected"`.
         * ISO/IEC 9040:1997 §20.1.5.
         * @public
         * @readonly
         */
        readonly trigger: OPTIONAL<NULL>,
        /**
         * @summary `size`.
         * @description
         * Invite `CO-size` (meaning depends on category).
         * ISO/IEC 9040:1997 §20.2.2.
         * @public
         * @readonly
         */
        readonly size: OPTIONAL<NULL>,
        /**
         * @summary `category`.
         * @description
         * Invite `CO-category`. Default `"boolean"`.
         * ISO/IEC 9040:1997 table 9, §20.2.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<NULL>,
        /**
         * @summary `repertoire`.
         * @description
         * Invite `CO-repertoire-assignment` (character category).
         * ISO/IEC 9040:1997 table 9, §20.2.5.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<NULL>,
        /**
         * @summary `priority`.
         * @description
         * Invite `CO-priority`. Default `"normal"`.
         * ISO/IEC 9040:1997 §20.1.4.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<NULL>,
        /**
         * @summary `structure`.
         * @description
         * Invite `CO-structure` (parametric count vs
         * non-parametric). ISO/IEC 9040:1997 §14.1, §20.1.2.
         * @public
         * @readonly
         */
        readonly structure: OPTIONAL<NULL>,
        /**
         * @summary `multiElement`.
         * @description
         * Per-element invitations (`CO-element-id` plus
         * size/category/repertoire). Structured COs FU.
         * ISO/IEC 9040:1997 §20.2.1.
         * @public
         * @readonly
         */
        readonly multiElement: OPTIONAL<ElementParamIdent[]>
    ) {}

    /**
     * @summary Restructures an object into a ParameterIdents
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterIdents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterIdents`.
     * @returns {ParameterIdents}
     */
    public static _from_object (_o: { [_K in keyof (ParameterIdents)]: (ParameterIdents)[_K] }): ParameterIdents {
        return new ParameterIdents(_o.typeIdentifier, _o.access, _o.trigger, _o.size, _o.category, _o.repertoire, _o.priority, _o.structure, _o.multiElement);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterIdents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterIdents: $.ComponentSpec[] = [
    new $.ComponentSpec("typeIdentifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("access", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("trigger", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("size", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("repertoire", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("structure", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("multiElement", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of ParameterIdents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterIdents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterIdents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterIdents: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterIdents: $.ASN1Decoder<ParameterIdents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterIdents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterIdents (el: _Element): ParameterIdents {
    if (!_cached_decoder_for_ParameterIdents) { _cached_decoder_for_ParameterIdents = function (el: _Element): ParameterIdents {
    let typeIdentifier: OPTIONAL<NULL>;
    let access: OPTIONAL<NULL>;
    let trigger: OPTIONAL<NULL>;
    let size: OPTIONAL<NULL>;
    let category: OPTIONAL<NULL>;
    let repertoire: OPTIONAL<NULL>;
    let priority: OPTIONAL<NULL>;
    let structure: OPTIONAL<NULL>;
    let multiElement: OPTIONAL<ElementParamIdent[]>;
    const callbacks: $.DecodingMap = {
        "typeIdentifier": (_el: _Element): void => { typeIdentifier = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "access": (_el: _Element): void => { access = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "trigger": (_el: _Element): void => { trigger = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "size": (_el: _Element): void => { size = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "category": (_el: _Element): void => { category = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "repertoire": (_el: _Element): void => { repertoire = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "structure": (_el: _Element): void => { structure = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "multiElement": (_el: _Element): void => { multiElement = $._decode_implicit<ElementParamIdent[]>(() => $._decodeSequenceOf<ElementParamIdent>(() => _decode_ElementParamIdent))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterIdents,
        _extension_additions_list_spec_for_ParameterIdents,
        _root_component_type_list_2_spec_for_ParameterIdents,
        undefined,
    );
    return new ParameterIdents(
        typeIdentifier,
        access,
        trigger,
        size,
        category,
        repertoire,
        priority,
        structure,
        multiElement
    );
}; }
    return _cached_decoder_for_ParameterIdents(el);
}

let _cached_encoder_for_ParameterIdents: $.ASN1Encoder<ParameterIdents> | null = null;

/**
 * @summary Encodes a(n) ParameterIdents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterIdents, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterIdents (value: ParameterIdents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterIdents) { _cached_encoder_for_ParameterIdents = function (value: ParameterIdents): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.typeIdentifier === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.typeIdentifier, $.BER)),
            /* IF_ABSENT  */ ((value.access === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.access, $.BER)),
            /* IF_ABSENT  */ ((value.trigger === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.trigger, $.BER)),
            /* IF_ABSENT  */ ((value.size === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.size, $.BER)),
            /* IF_ABSENT  */ ((value.category === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.category, $.BER)),
            /* IF_ABSENT  */ ((value.repertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.repertoire, $.BER)),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.structure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeNull, $.BER)(value.structure, $.BER)),
            /* IF_ABSENT  */ ((value.multiElement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<ElementParamIdent>(() => _encode_ElementParamIdent, $.BER), $.BER)(value.multiElement, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterIdents(value, elGetter);
}


/* eslint-enable */
