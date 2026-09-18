/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { ParameterValues_typeIdentifier, _decode_ParameterValues_typeIdentifier, _encode_ParameterValues_typeIdentifier } from "../CSS/ParameterValues-typeIdentifier.ta.mjs";
// export { ParameterValues_typeIdentifier, _decode_ParameterValues_typeIdentifier, _encode_ParameterValues_typeIdentifier } from "../CSS/ParameterValues-typeIdentifier.ta.mjs";
import { AccessRuleValue, _decode_AccessRuleValue, _encode_AccessRuleValue } from "../CSS/AccessRuleValue.ta.mjs";
// export { AccessRuleValue, AccessRuleValue_wavar /* IMPORTED_LONG_NAMED_INTEGER */, wavar /* IMPORTED_SHORT_NAMED_INTEGER */, AccessRuleValue_waci /* IMPORTED_LONG_NAMED_INTEGER */, waci /* IMPORTED_SHORT_NAMED_INTEGER */, AccessRuleValue_waca /* IMPORTED_LONG_NAMED_INTEGER */, waca /* IMPORTED_SHORT_NAMED_INTEGER */, AccessRuleValue_nsac /* IMPORTED_LONG_NAMED_INTEGER */, nsac /* IMPORTED_SHORT_NAMED_INTEGER */, AccessRuleValue_wavar_and_waci /* IMPORTED_LONG_NAMED_INTEGER */, wavar_and_waci /* IMPORTED_SHORT_NAMED_INTEGER */, AccessRuleValue_wavar_and_waca /* IMPORTED_LONG_NAMED_INTEGER */, wavar_and_waca /* IMPORTED_SHORT_NAMED_INTEGER */, AccessRuleValue_no_access /* IMPORTED_LONG_NAMED_INTEGER */, no_access /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AccessRuleValue, _encode_AccessRuleValue } from "../CSS/AccessRuleValue.ta.mjs";
import { ParameterValues_category, _decode_ParameterValues_category, _encode_ParameterValues_category } from "../CSS/ParameterValues-category.ta.mjs";
// export { ParameterValues_category, ParameterValues_category_character /* IMPORTED_LONG_NAMED_INTEGER */, character /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterValues_category_boolean /* IMPORTED_LONG_NAMED_INTEGER */, boolean_ /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterValues_category_symbolic /* IMPORTED_LONG_NAMED_INTEGER */, symbolic /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterValues_category_integer /* IMPORTED_LONG_NAMED_INTEGER */, integer /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterValues_category_transparent /* IMPORTED_LONG_NAMED_INTEGER */, transparent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ParameterValues_category, _encode_ParameterValues_category } from "../CSS/ParameterValues-category.ta.mjs";
import { _decode_RepertoireAssignment, _encode_RepertoireAssignment } from "../CDS/RepertoireAssignment.ta.mjs";
// export { RepertoireAssignment, _decode_RepertoireAssignment, _encode_RepertoireAssignment } from "../CDS/RepertoireAssignment.ta.mjs";
import { ParameterValues_priority, _decode_ParameterValues_priority, _encode_ParameterValues_priority } from "../CSS/ParameterValues-priority.ta.mjs";
// export { ParameterValues_priority, ParameterValues_priority_normal /* IMPORTED_LONG_NAMED_INTEGER */, normal /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterValues_priority_high /* IMPORTED_LONG_NAMED_INTEGER */, high /* IMPORTED_SHORT_NAMED_INTEGER */, ParameterValues_priority_urgent /* IMPORTED_LONG_NAMED_INTEGER */, urgent /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ParameterValues_priority, _encode_ParameterValues_priority } from "../CSS/ParameterValues-priority.ta.mjs";
import { ParameterValues_structure, _decode_ParameterValues_structure, _encode_ParameterValues_structure } from "../CSS/ParameterValues-structure.ta.mjs";
// export { ParameterValues_structure, _decode_ParameterValues_structure, _encode_ParameterValues_structure } from "../CSS/ParameterValues-structure.ta.mjs";
import { ElementParamValue, _decode_ElementParamValue, _encode_ElementParamValue } from "../CSS/ElementParamValue.ta.mjs";
// export { ElementParamValue, _decode_ElementParamValue, _encode_ElementParamValue } from "../CSS/ElementParamValue.ta.mjs";


/**
 * @summary ParameterValues
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues ::= SEQUENCE {
 *     typeIdentifier  [0] CHOICE {
 *         oid     OBJECT IDENTIFIER,
 *         string  PrintableString
 *     },
 *     access          [1] IMPLICIT AccessRuleValue OPTIONAL,
 *     triggerSelected [2] IMPLICIT BOOLEAN OPTIONAL,
 *     size            [3] IMPLICIT INTEGER OPTIONAL,
 *     category        [4] IMPLICIT INTEGER {
 *         character   (0),
 *         boolean     (1),
 *         symbolic    (2),
 *         integer     (3),
 *         transparent (4)
 *     } OPTIONAL,
 *     repertoire      [5] IMPLICIT CDS.RepertoireAssignment OPTIONAL,
 *     priority        [6] IMPLICIT INTEGER {
 *         normal (0),
 *         high   (1),
 *         urgent (2)
 *     } OPTIONAL,
 *     structure       [7] CHOICE {
 *         nonParametric NULL,
 *         numberElements INTEGER
 *     } OPTIONAL,
 *     multiElement    [8] IMPLICIT SEQUENCE OF ElementParamValue OPTIONAL
 *     -- These values are responses to an offer and must be consistent with the proposals.
 * }
 * ```
 * 
 * @class
 */
export
class ParameterValues {
    constructor (
        /**
         * @summary `typeIdentifier`.
         * @public
         * @readonly
         */
        readonly typeIdentifier: ParameterValues_typeIdentifier,
        /**
         * @summary `access`.
         * @public
         * @readonly
         */
        readonly access: OPTIONAL<AccessRuleValue>,
        /**
         * @summary `triggerSelected`.
         * @public
         * @readonly
         */
        readonly triggerSelected: OPTIONAL<BOOLEAN>,
        /**
         * @summary `size`.
         * @public
         * @readonly
         */
        readonly size: OPTIONAL<INTEGER>,
        /**
         * @summary `category`.
         * @public
         * @readonly
         */
        readonly category: OPTIONAL<ParameterValues_category>,
        /**
         * @summary `repertoire`.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<CDS.RepertoireAssignment>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<ParameterValues_priority>,
        /**
         * @summary `structure`.
         * @public
         * @readonly
         */
        readonly structure: OPTIONAL<ParameterValues_structure>,
        /**
         * @summary `multiElement`.
         * @public
         * @readonly
         */
        readonly multiElement: OPTIONAL<ElementParamValue[]>
    ) {}

    /**
     * @summary Restructures an object into a ParameterValues
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterValues`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterValues`.
     * @returns {ParameterValues}
     */
    public static _from_object (_o: { [_K in keyof (ParameterValues)]: (ParameterValues)[_K] }): ParameterValues {
        return new ParameterValues(_o.typeIdentifier, _o.access, _o.triggerSelected, _o.size, _o.category, _o.repertoire, _o.priority, _o.structure, _o.multiElement);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterValues: $.ComponentSpec[] = [
    new $.ComponentSpec("typeIdentifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("access", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("triggerSelected", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("size", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("category", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("repertoire", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("structure", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("multiElement", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of ParameterValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterValues: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterValues: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterValues: $.ASN1Decoder<ParameterValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues (el: _Element): ParameterValues {
    if (!_cached_decoder_for_ParameterValues) { _cached_decoder_for_ParameterValues = function (el: _Element): ParameterValues {
    let typeIdentifier!: ParameterValues_typeIdentifier;
    let access: OPTIONAL<AccessRuleValue>;
    let triggerSelected: OPTIONAL<BOOLEAN>;
    let size: OPTIONAL<INTEGER>;
    let category: OPTIONAL<ParameterValues_category>;
    let repertoire: OPTIONAL<CDS.RepertoireAssignment>;
    let priority: OPTIONAL<ParameterValues_priority>;
    let structure: OPTIONAL<ParameterValues_structure>;
    let multiElement: OPTIONAL<ElementParamValue[]>;
    const callbacks: $.DecodingMap = {
        "typeIdentifier": (_el: _Element): void => { typeIdentifier = $._decode_explicit<ParameterValues_typeIdentifier>(() => _decode_ParameterValues_typeIdentifier)(_el); },
        "access": (_el: _Element): void => { access = $._decode_implicit<AccessRuleValue>(() => _decode_AccessRuleValue)(_el); },
        "triggerSelected": (_el: _Element): void => { triggerSelected = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "size": (_el: _Element): void => { size = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "category": (_el: _Element): void => { category = $._decode_implicit<ParameterValues_category>(() => _decode_ParameterValues_category)(_el); },
        "repertoire": (_el: _Element): void => { repertoire = $._decode_implicit<CDS.RepertoireAssignment>(() => CDS._decode_RepertoireAssignment)(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<ParameterValues_priority>(() => _decode_ParameterValues_priority)(_el); },
        "structure": (_el: _Element): void => { structure = $._decode_explicit<ParameterValues_structure>(() => _decode_ParameterValues_structure)(_el); },
        "multiElement": (_el: _Element): void => { multiElement = $._decode_implicit<ElementParamValue[]>(() => $._decodeSequenceOf<ElementParamValue>(() => _decode_ElementParamValue))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterValues,
        _extension_additions_list_spec_for_ParameterValues,
        _root_component_type_list_2_spec_for_ParameterValues,
        undefined,
    );
    return new ParameterValues(
        typeIdentifier,
        access,
        triggerSelected,
        size,
        category,
        repertoire,
        priority,
        structure,
        multiElement
    );
}; }
    return _cached_decoder_for_ParameterValues(el);
}

let _cached_encoder_for_ParameterValues: $.ASN1Encoder<ParameterValues> | null = null;

/**
 * @summary Encodes a(n) ParameterValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues (value: ParameterValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues) { _cached_encoder_for_ParameterValues = function (value: ParameterValues): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ParameterValues_typeIdentifier, $.BER)(value.typeIdentifier, $.BER),
            /* IF_ABSENT  */ ((value.access === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AccessRuleValue, $.BER)(value.access, $.BER)),
            /* IF_ABSENT  */ ((value.triggerSelected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.triggerSelected, $.BER)),
            /* IF_ABSENT  */ ((value.size === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.size, $.BER)),
            /* IF_ABSENT  */ ((value.category === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ParameterValues_category, $.BER)(value.category, $.BER)),
            /* IF_ABSENT  */ ((value.repertoire === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => CDS._encode_RepertoireAssignment, $.BER)(value.repertoire, $.BER)),
            /* IF_ABSENT  */ ((value.priority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ParameterValues_priority, $.BER)(value.priority, $.BER)),
            /* IF_ABSENT  */ ((value.structure === undefined) ? undefined : $._encode_explicit(_TagClass.context, 7, () => _encode_ParameterValues_structure, $.BER)(value.structure, $.BER)),
            /* IF_ABSENT  */ ((value.multiElement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<ElementParamValue>(() => _encode_ElementParamValue, $.BER), $.BER)(value.multiElement, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterValues(value, elGetter);
}


/* eslint-enable */
