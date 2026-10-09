/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InfoCategory
 * @description
 * 
 * Optional category on an Other-information item (ANSI/NISO Z39.50-2003 §4.1,
 * comment 5). The category may be absent, present without a type id, or present
 * with a type id. No category values are known to have been assigned, and no
 * categories are known to be in use. A category without a type id is for
 * partners with a prior agreement. When a type id is present it identifies a
 * registration agent, not a classification.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoCategory ::= SEQUENCE {
 *     categoryTypeId  [1] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     categoryValue   [2] IMPLICIT INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class InfoCategory {
    /**
     * @summary `categoryTypeId`.
     * @description
     * 
     * Registration authority for `categoryValue`, when the partners use a
     * qualified category (ANSI/NISO Z39.50-2003 §4.1, comment 5). The standard
     * names no authorities.
     * 
     * @public
     * @readonly
     */
    readonly categoryTypeId: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `categoryValue`.
     * @description
     * 
     * Integer distinguishing a category under `categoryTypeId`. The standard
     * states that no values are known to have been assigned or to be in use
     * (ANSI/NISO Z39.50-2003 §4.1, comment 5).
     * 
     * @public
     * @readonly
     */
    readonly categoryValue: INTEGER;

    constructor (
        categoryTypeId: OPTIONAL<OBJECT_IDENTIFIER>,
        categoryValue: INTEGER
    ) {
        this.categoryTypeId = categoryTypeId;
        this.categoryValue = categoryValue;
    }

    /**
     * @summary Restructures an object into a InfoCategory
     * @description
     * 
     * This takes an `object` and converts it to a `InfoCategory`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InfoCategory`.
     * @returns {InfoCategory}
     */
    public static _from_object (_o: { [_K in keyof (InfoCategory)]: (InfoCategory)[_K] }): InfoCategory {
        return new InfoCategory(_o.categoryTypeId, _o.categoryValue);
    }


}

/**
 * @summary The Leading Root Component Types of InfoCategory
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InfoCategory: $.ComponentSpec[] = [
    new $.ComponentSpec("categoryTypeId", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("categoryValue", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of InfoCategory
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InfoCategory: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InfoCategory
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InfoCategory: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InfoCategory: $.ASN1Decoder<InfoCategory> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InfoCategory
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InfoCategory (el: _Element): InfoCategory {
    if (!_cached_decoder_for_InfoCategory) { _cached_decoder_for_InfoCategory = function (el: _Element): InfoCategory {
    let categoryTypeId: OPTIONAL<OBJECT_IDENTIFIER>;
    let categoryValue!: INTEGER;
    const callbacks: $.DecodingMap = {
        "categoryTypeId": (_el: _Element): void => { categoryTypeId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "categoryValue": (_el: _Element): void => { categoryValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InfoCategory,
        _extension_additions_list_spec_for_InfoCategory,
        _root_component_type_list_2_spec_for_InfoCategory,
        undefined,
    );
    return new InfoCategory(
        categoryTypeId,
        categoryValue
    );
}; }
    return _cached_decoder_for_InfoCategory(el);
}

let _cached_encoder_for_InfoCategory: $.ASN1Encoder<InfoCategory> | null = null;

/**
 * @summary Encodes a(n) InfoCategory into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoCategory, encoded as an ASN.1 Element.
 */
export
function _encode_InfoCategory (value: InfoCategory, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InfoCategory) { _cached_encoder_for_InfoCategory = function (value: InfoCategory, elGetter: $.ASN1Encoder<InfoCategory>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.categoryTypeId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.categoryTypeId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.categoryValue, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InfoCategory(value, elGetter);
}


/* eslint-enable */
