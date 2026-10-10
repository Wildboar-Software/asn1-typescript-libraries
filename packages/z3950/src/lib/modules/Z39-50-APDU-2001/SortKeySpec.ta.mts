/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SortElement, _decode_SortElement, _encode_SortElement } from "../Z39-50-APDU-2001/SortElement.ta.mjs";
import { SortKeySpec_sortRelation, _decode_SortKeySpec_sortRelation, _encode_SortKeySpec_sortRelation } from "../Z39-50-APDU-2001/SortKeySpec-sortRelation.ta.mjs";
import { SortKeySpec_caseSensitivity, _decode_SortKeySpec_caseSensitivity, _encode_SortKeySpec_caseSensitivity } from "../Z39-50-APDU-2001/SortKeySpec-caseSensitivity.ta.mjs";
import { SortKeySpec_missingValueAction, _decode_SortKeySpec_missingValueAction, _encode_SortKeySpec_missingValueAction } from "../Z39-50-APDU-2001/SortKeySpec-missingValueAction.ta.mjs";


/**
 * @summary SortKeySpec
 * @description
 * 
 * One sort element: the key, the direction, case handling, and the action when
 * a record has no value for the key (ANSI/NISO Z39.50-2003 §3.2.7.1.3). The
 * sequence on the Sort request is major key first.
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
     * @description
     * 
     * Sort key, as a private key, a retrieval element, or a search access
     * point. The server designates keys through Explain or by agreement outside
     * this standard (ANSI/NISO Z39.50-2003 §3.2.7.1.3).
     * 
     * @public
     * @readonly
     */
    readonly sortElement: SortElement;
    /**
     * @summary `sortRelation`.
     * @description
     * 
     * Direction of this key: ascending or descending, or either direction by
     * frequency of the key value (ANSI/NISO Z39.50-2003 §3.2.7.1.3, §4.1
     * comment 4).
     * 
     * @public
     * @readonly
     */
    readonly sortRelation: SortKeySpec_sortRelation;
    /**
     * @summary `caseSensitivity`.
     * @description
     * 
     * Whether letter case distinguishes values, when case applies to this key
     * (ANSI/NISO Z39.50-2003 §3.2.7.1.3). The standard does not define the
     * comparison beyond these two codes.
     * 
     * @public
     * @readonly
     */
    readonly caseSensitivity: SortKeySpec_caseSensitivity;
    /**
     * @summary `missingValueAction`.
     * @description
     * 
     * What the server does when a record lacks a value for this key (ANSI/NISO
     * Z39.50-2003 §3.2.7.1.3). The standard defines the null action in the
     * ASN.1 comment and does not further define `abort` or the octets of
     * `missingValueData`.
     * 
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
