/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SortElement, _decode_SortElement, _encode_SortElement } from "../Z39-50-APDU-2001/SortElement.ta.mjs";
// export { SortElement, _decode_SortElement, _encode_SortElement } from "../Z39-50-APDU-2001/SortElement.ta.mjs";
import { SortKeySpec_sortRelation, _decode_SortKeySpec_sortRelation, _encode_SortKeySpec_sortRelation } from "../Z39-50-APDU-2001/SortKeySpec-sortRelation.ta.mjs";
// export { SortKeySpec_sortRelation, SortKeySpec_sortRelation_ascending /* IMPORTED_LONG_NAMED_INTEGER */, ascending /* IMPORTED_SHORT_NAMED_INTEGER */, SortKeySpec_sortRelation_descending /* IMPORTED_LONG_NAMED_INTEGER */, descending /* IMPORTED_SHORT_NAMED_INTEGER */, SortKeySpec_sortRelation_ascendingByFrequency /* IMPORTED_LONG_NAMED_INTEGER */, ascendingByFrequency /* IMPORTED_SHORT_NAMED_INTEGER */, SortKeySpec_sortRelation_descendingByfrequency /* IMPORTED_LONG_NAMED_INTEGER */, descendingByfrequency /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SortKeySpec_sortRelation, _encode_SortKeySpec_sortRelation } from "../Z39-50-APDU-2001/SortKeySpec-sortRelation.ta.mjs";
import { SortKeySpec_caseSensitivity, _decode_SortKeySpec_caseSensitivity, _encode_SortKeySpec_caseSensitivity } from "../Z39-50-APDU-2001/SortKeySpec-caseSensitivity.ta.mjs";
// export { SortKeySpec_caseSensitivity, SortKeySpec_caseSensitivity_caseSensitive /* IMPORTED_LONG_NAMED_INTEGER */, caseSensitive /* IMPORTED_SHORT_NAMED_INTEGER */, SortKeySpec_caseSensitivity_caseInsensitive /* IMPORTED_LONG_NAMED_INTEGER */, caseInsensitive /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SortKeySpec_caseSensitivity, _encode_SortKeySpec_caseSensitivity } from "../Z39-50-APDU-2001/SortKeySpec-caseSensitivity.ta.mjs";
import { SortKeySpec_missingValueAction, _decode_SortKeySpec_missingValueAction, _encode_SortKeySpec_missingValueAction } from "../Z39-50-APDU-2001/SortKeySpec-missingValueAction.ta.mjs";
// export { SortKeySpec_missingValueAction, _decode_SortKeySpec_missingValueAction, _encode_SortKeySpec_missingValueAction } from "../Z39-50-APDU-2001/SortKeySpec-missingValueAction.ta.mjs";


/**
 * @summary SortKeySpec
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKeySpec ::= SEQUENCE {
 *     sortElement             SortElement,
 *     sortRelation            [1] IMPLICIT INTEGER{
 *         ascending               (0),
 *         descending              (1),
 *         ascendingByFrequency    (3),
 *         descendingByfrequency   (4)
 *     },
 *     -- SEE COMMENT 4
 *     caseSensitivity         [2] IMPLICIT INTEGER{
 *         caseSensitive           (0),
 *         caseInsensitive         (1)
 *     },
 *     missingValueAction      [3] CHOICE {
 *         abort                   [1] IMPLICIT NULL,
 *         null                    [2] IMPLICIT NULL,
 *         -- Supply a null value for missing value
 *         missingValueData        [3] IMPLICIT OCTET STRING
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SortKeySpec {
    /**
     * @summary `sortElement`.
     * @public
     * @readonly
     */
    readonly sortElement: SortElement;
    /**
     * @summary `sortRelation`.
     * @public
     * @readonly
     */
    readonly sortRelation: SortKeySpec_sortRelation;
    /**
     * @summary `caseSensitivity`.
     * @public
     * @readonly
     */
    readonly caseSensitivity: SortKeySpec_caseSensitivity;
    /**
     * @summary `missingValueAction`.
     * @public
     * @readonly
     */
    readonly missingValueAction: OPTIONAL<SortKeySpec_missingValueAction>;

    constructor (
        sortElement: SortElement,
        sortRelation: SortKeySpec_sortRelation,
        caseSensitivity: SortKeySpec_caseSensitivity,
        missingValueAction: OPTIONAL<SortKeySpec_missingValueAction>
    ) {
        this.sortElement = sortElement;
        this.sortRelation = sortRelation;
        this.caseSensitivity = caseSensitivity;
        this.missingValueAction = missingValueAction;
    }

    /**
     * @summary Restructures an object into a SortKeySpec
     * @description
     * 
     * This takes an `object` and converts it to a `SortKeySpec`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SortKeySpec`.
     * @returns {SortKeySpec}
     */
    public static _from_object (_o: { [_K in keyof (SortKeySpec)]: (SortKeySpec)[_K] }): SortKeySpec {
        return new SortKeySpec(_o.sortElement, _o.sortRelation, _o.caseSensitivity, _o.missingValueAction);
    }


}

/**
 * @summary The Leading Root Component Types of SortKeySpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SortKeySpec: $.ComponentSpec[] = [
    new $.ComponentSpec("sortElement", false, $.hasAnyTag),
    new $.ComponentSpec("sortRelation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("caseSensitivity", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("missingValueAction", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of SortKeySpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SortKeySpec: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SortKeySpec
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SortKeySpec: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SortKeySpec: $.ASN1Decoder<SortKeySpec> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortKeySpec
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortKeySpec (el: _Element): SortKeySpec {
    if (!_cached_decoder_for_SortKeySpec) { _cached_decoder_for_SortKeySpec = function (el: _Element): SortKeySpec {
    let sortElement!: SortElement;
    let sortRelation!: SortKeySpec_sortRelation;
    let caseSensitivity!: SortKeySpec_caseSensitivity;
    let missingValueAction: OPTIONAL<SortKeySpec_missingValueAction>;
    const callbacks: $.DecodingMap = {
        "sortElement": (_el: _Element): void => { sortElement = _decode_SortElement(_el); },
        "sortRelation": (_el: _Element): void => { sortRelation = $._decode_implicit<SortKeySpec_sortRelation>(() => _decode_SortKeySpec_sortRelation)(_el); },
        "caseSensitivity": (_el: _Element): void => { caseSensitivity = $._decode_implicit<SortKeySpec_caseSensitivity>(() => _decode_SortKeySpec_caseSensitivity)(_el); },
        "missingValueAction": (_el: _Element): void => { missingValueAction = $._decode_explicit<SortKeySpec_missingValueAction>(() => _decode_SortKeySpec_missingValueAction)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SortKeySpec,
        _extension_additions_list_spec_for_SortKeySpec,
        _root_component_type_list_2_spec_for_SortKeySpec,
        undefined,
    );
    return new SortKeySpec(
        sortElement,
        sortRelation,
        caseSensitivity,
        missingValueAction
    );
}; }
    return _cached_decoder_for_SortKeySpec(el);
}

let _cached_encoder_for_SortKeySpec: $.ASN1Encoder<SortKeySpec> | null = null;

/**
 * @summary Encodes a(n) SortKeySpec into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKeySpec, encoded as an ASN.1 Element.
 */
export
function _encode_SortKeySpec (value: SortKeySpec, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortKeySpec) { _cached_encoder_for_SortKeySpec = function (value: SortKeySpec, elGetter: $.ASN1Encoder<SortKeySpec>): _Element {
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ _encode_SortElement(value.sortElement, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SortKeySpec_sortRelation, $.BER)(value.sortRelation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SortKeySpec_caseSensitivity, $.BER)(value.caseSensitivity, $.BER);
    if (value.missingValueAction !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_SortKeySpec_missingValueAction, $.BER)(value.missingValueAction, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SortKeySpec(value, elGetter);
}


/* eslint-enable */
