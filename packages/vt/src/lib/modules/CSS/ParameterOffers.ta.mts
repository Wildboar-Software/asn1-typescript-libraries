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
import { ParameterOffers_typeIdentifier_Item, _decode_ParameterOffers_typeIdentifier_Item, _encode_ParameterOffers_typeIdentifier_Item } from "../CSS/ParameterOffers-typeIdentifier-Item.ta.mjs";
// export { ParameterOffers_typeIdentifier_Item, _decode_ParameterOffers_typeIdentifier_Item, _encode_ParameterOffers_typeIdentifier_Item } from "../CSS/ParameterOffers-typeIdentifier-Item.ta.mjs";
import { AccessRuleOffer, _decode_AccessRuleOffer, _encode_AccessRuleOffer } from "../CSS/AccessRuleOffer.ta.mjs";
// export { AccessRuleOffer, AccessRuleOffer_wavar /* IMPORTED_LONG_NAMED_BIT */, wavar /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_waci /* IMPORTED_LONG_NAMED_BIT */, waci /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_waca /* IMPORTED_LONG_NAMED_BIT */, waca /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_nsac /* IMPORTED_LONG_NAMED_BIT */, nsac /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_wavar_and_waci /* IMPORTED_LONG_NAMED_BIT */, wavar_and_waci /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_wavar_and_waca /* IMPORTED_LONG_NAMED_BIT */, wavar_and_waca /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_no_access /* IMPORTED_LONG_NAMED_BIT */, no_access /* IMPORTED_SHORT_NAMED_BIT */, _decode_AccessRuleOffer, _encode_AccessRuleOffer } from "../CSS/AccessRuleOffer.ta.mjs";
import { ParameterOffers_trigger, _decode_ParameterOffers_trigger, _encode_ParameterOffers_trigger } from "../CSS/ParameterOffers-trigger.ta.mjs";
// export { ParameterOffers_trigger, ParameterOffers_trigger_yes /* IMPORTED_LONG_NAMED_BIT */, yes /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_trigger_no /* IMPORTED_LONG_NAMED_BIT */, no /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParameterOffers_trigger, _encode_ParameterOffers_trigger } from "../CSS/ParameterOffers-trigger.ta.mjs";
import { _decode_IntegerOffer, _encode_IntegerOffer, type IntegerOffer } from "../G/IntegerOffer.ta.mjs";
// export { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";
import { ParameterOffers_category, _decode_ParameterOffers_category, _encode_ParameterOffers_category } from "../CSS/ParameterOffers-category.ta.mjs";
// export { ParameterOffers_category, ParameterOffers_category_character /* IMPORTED_LONG_NAMED_BIT */, character /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_category_boolean /* IMPORTED_LONG_NAMED_BIT */, boolean_ /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_category_symbolic /* IMPORTED_LONG_NAMED_BIT */, symbolic /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_category_integer /* IMPORTED_LONG_NAMED_BIT */, integer /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_category_transparent /* IMPORTED_LONG_NAMED_BIT */, transparent /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParameterOffers_category, _encode_ParameterOffers_category } from "../CSS/ParameterOffers-category.ta.mjs";
import { _decode_RepertoireAssignment, _encode_RepertoireAssignment, RepertoireAssignment } from "../CDS/RepertoireAssignment.ta.mjs";
// export { RepertoireAssignment, _decode_RepertoireAssignment, _encode_RepertoireAssignment } from "../CDS/RepertoireAssignment.ta.mjs";
import { ParameterOffers_priority, _decode_ParameterOffers_priority, _encode_ParameterOffers_priority } from "../CSS/ParameterOffers-priority.ta.mjs";
// export { ParameterOffers_priority, ParameterOffers_priority_normal /* IMPORTED_LONG_NAMED_BIT */, normal /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_priority_high /* IMPORTED_LONG_NAMED_BIT */, high /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_priority_urgent /* IMPORTED_LONG_NAMED_BIT */, urgent /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParameterOffers_priority, _encode_ParameterOffers_priority } from "../CSS/ParameterOffers-priority.ta.mjs";
import { ParameterOffers_structure, _decode_ParameterOffers_structure, _encode_ParameterOffers_structure } from "../CSS/ParameterOffers-structure.ta.mjs";
// export { ParameterOffers_structure, _decode_ParameterOffers_structure, _encode_ParameterOffers_structure } from "../CSS/ParameterOffers-structure.ta.mjs";
import { ElementParamOffer, _decode_ElementParamOffer, _encode_ElementParamOffer } from "../CSS/ElementParamOffer.ta.mjs";
// export { ElementParamOffer, _decode_ElementParamOffer, _encode_ElementParamOffer } from "../CSS/ElementParamOffer.ta.mjs";


/**
 * @summary ParameterOffers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers ::= SEQUENCE {
 *     typeIdentifier  [0] IMPLICIT SET OF CHOICE {
 *         oid     OBJECT IDENTIFIER,
 *         string  PrintableString
 *     },
 *     access          [1] IMPLICIT AccessRuleOffer OPTIONAL,
 *     trigger         [2] IMPLICIT BIT STRING { yes (0), no (1) } OPTIONAL,
 *     size            [3] IMPLICIT G.IntegerOffer OPTIONAL,
 *     -- Set bits are offered, unset ones are not.
 *     category        [4] IMPLICIT BIT STRING {
 *         character   (0),
 *         boolean     (1),
 *         symbolic    (2),
 *         integer     (3),
 *         transparent (4)
 *     } OPTIONAL,
 *     repertoire      [5] IMPLICIT SEQUENCE OF CDS.RepertoireAssignment OPTIONAL,
 *     -- Set bits are offered, unset ones are not.
 *     priority        [6] IMPLICIT BIT STRING {
 *         normal (0),
 *         high   (1),
 *         urgent (2)
 *     } OPTIONAL,
 *     structure       [7] IMPLICIT SEQUENCE {
 *         nonParametric NULL OPTIONAL,
 *         numberElements G.IntegerOffer OPTIONAL
 *     } OPTIONAL,
 *     multiElement    [8] IMPLICIT SEQUENCE OF ElementParamOffer OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParameterOffers {
    constructor (
        /**
         * @summary `typeIdentifier`.
         * @public
         * @readonly
         */
        readonly typeIdentifier: ParameterOffers_typeIdentifier_Item[],
        /**
         * @summary `access`.
         * @public
         * @readonly
         */
        readonly access: OPTIONAL<AccessRuleOffer>,
        /**
         * @summary `trigger`.
         * @public
         * @readonly
         */
        readonly trigger: OPTIONAL<ParameterOffers_trigger>,
        /**
         * @summary `size`.
         * @public
         * @readonly
         */
        readonly size: OPTIONAL<IntegerOffer>,
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<ParameterOffers_category>,
        /**
         * @summary `repertoire`.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<RepertoireAssignment[]>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<ParameterOffers_priority>,
        /**
         * @summary `structure`.
         * @public
         * @readonly
         */
        readonly structure: OPTIONAL<ParameterOffers_structure>,
        /**
         * @summary `multiElement`.
         * @public
         * @readonly
         */
        readonly multiElement: OPTIONAL<ElementParamOffer[]>
    ) {}

    /**
     * @summary Restructures an object into a ParameterOffers
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterOffers`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterOffers`.
     * @returns {ParameterOffers}
     */
    public static _from_object (_o: { [_K in keyof (ParameterOffers)]: (ParameterOffers)[_K] }): ParameterOffers {
        return new ParameterOffers(_o.typeIdentifier, _o.access, _o.trigger, _o.size, _o.category, _o.repertoire, _o.priority, _o.structure, _o.multiElement);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterOffers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterOffers: $.ComponentSpec[] = [
    new $.ComponentSpec("typeIdentifier", false, $.hasTag(_TagClass.context, 0)),
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
 * @summary The Trailing Root Component Types of ParameterOffers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterOffers: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterOffers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterOffers: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterOffers: $.ASN1Decoder<ParameterOffers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers (el: _Element): ParameterOffers {
    if (!_cached_decoder_for_ParameterOffers) { _cached_decoder_for_ParameterOffers = function (el: _Element): ParameterOffers {
    let typeIdentifier!: ParameterOffers_typeIdentifier_Item[];
    let access: OPTIONAL<AccessRuleOffer>;
    let trigger: OPTIONAL<ParameterOffers_trigger>;
    let size: OPTIONAL<IntegerOffer>;
    let category: OPTIONAL<ParameterOffers_category>;
    let repertoire: OPTIONAL<RepertoireAssignment[]>;
    let priority: OPTIONAL<ParameterOffers_priority>;
    let structure: OPTIONAL<ParameterOffers_structure>;
    let multiElement: OPTIONAL<ElementParamOffer[]>;
    const callbacks: $.DecodingMap = {
        "typeIdentifier": (_el: _Element): void => { typeIdentifier = $._decode_implicit<ParameterOffers_typeIdentifier_Item[]>(() => $._decodeSetOf<ParameterOffers_typeIdentifier_Item>(() => _decode_ParameterOffers_typeIdentifier_Item))(_el); },
        "access": (_el: _Element): void => { access = $._decode_implicit<AccessRuleOffer>(() => _decode_AccessRuleOffer)(_el); },
        "trigger": (_el: _Element): void => { trigger = $._decode_implicit<ParameterOffers_trigger>(() => _decode_ParameterOffers_trigger)(_el); },
        "size": (_el: _Element): void => { size = $._decode_implicit<IntegerOffer>(() => _decode_IntegerOffer)(_el); },
        "category": (_el: _Element): void => { category = $._decode_implicit<ParameterOffers_category>(() => _decode_ParameterOffers_category)(_el); },
        "repertoire": (_el: _Element): void => { repertoire = $._decode_implicit<RepertoireAssignment[]>(() => $._decodeSequenceOf<RepertoireAssignment>(() => _decode_RepertoireAssignment))(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<ParameterOffers_priority>(() => _decode_ParameterOffers_priority)(_el); },
        "structure": (_el: _Element): void => { structure = $._decode_implicit<ParameterOffers_structure>(() => _decode_ParameterOffers_structure)(_el); },
        "multiElement": (_el: _Element): void => { multiElement = $._decode_implicit<ElementParamOffer[]>(() => $._decodeSequenceOf<ElementParamOffer>(() => _decode_ElementParamOffer))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterOffers,
        _extension_additions_list_spec_for_ParameterOffers,
        _root_component_type_list_2_spec_for_ParameterOffers,
        undefined,
    );
    return new ParameterOffers(
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
    return _cached_decoder_for_ParameterOffers(el);
}

let _cached_encoder_for_ParameterOffers: $.ASN1Encoder<ParameterOffers> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers (value: ParameterOffers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers) { _cached_encoder_for_ParameterOffers = function (value: ParameterOffers): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSetOf<ParameterOffers_typeIdentifier_Item>(() => _encode_ParameterOffers_typeIdentifier_Item, $.BER), $.BER)(value.typeIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.access === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AccessRuleOffer, $.BER)(value.access, $.BER)),
            /* IF_ABSENT  */ ((value.trigger === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ParameterOffers_trigger, $.BER)(value.trigger, $.BER)),
            /* IF_ABSENT  */ ((value.size === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IntegerOffer, $.BER)(value.size, $.BER)),
            /* IF_ABSENT  */ ((value.category === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ParameterOffers_category, $.BER)(value.category, $.BER)),
            /* IF_ABSENT  */ ((value.repertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<RepertoireAssignment>(() => _encode_RepertoireAssignment, $.BER), $.BER)(value.repertoire, $.BER)),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ParameterOffers_priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.structure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ParameterOffers_structure, $.BER)(value.structure, $.BER)),
            /* IF_ABSENT  */ ((value.multiElement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<ElementParamOffer>(() => _encode_ElementParamOffer, $.BER), $.BER)(value.multiElement, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterOffers(value, elGetter);
}


/* eslint-enable */
