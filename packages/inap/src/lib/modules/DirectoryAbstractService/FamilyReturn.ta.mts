/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FamilyReturn_memberSelect, _decode_FamilyReturn_memberSelect, _encode_FamilyReturn_memberSelect, _enum_for_FamilyReturn_memberSelect } from "../DirectoryAbstractService/FamilyReturn-memberSelect.ta.mjs";
// export { FamilyReturn_memberSelect, _enum_for_FamilyReturn_memberSelect, FamilyReturn_memberSelect_contributingEntriesOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, contributingEntriesOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, FamilyReturn_memberSelect_participatingEntriesOnly /* IMPORTED_LONG_ENUMERATION_ITEM */, participatingEntriesOnly /* IMPORTED_SHORT_ENUMERATION_ITEM */, FamilyReturn_memberSelect_compoundEntry /* IMPORTED_LONG_ENUMERATION_ITEM */, compoundEntry /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FamilyReturn_memberSelect, _encode_FamilyReturn_memberSelect } from "../DirectoryAbstractService/FamilyReturn-memberSelect.ta.mjs";
// export { OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";


/**
 * @summary FamilyReturn
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FamilyReturn ::= SEQUENCE {
 *   memberSelect
 *     ENUMERATED {contributingEntriesOnly(1), participatingEntriesOnly(2),
 *                 compoundEntry(3)},
 *   familySelect  SEQUENCE SIZE (1..MAX) OF OBJECT-CLASS.&id OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FamilyReturn {
    /**
     * @summary `memberSelect`.
     * @public
     * @readonly
     */
    readonly memberSelect: FamilyReturn_memberSelect;
    /**
     * @summary `familySelect`.
     * @public
     * @readonly
     */
    readonly familySelect: OPTIONAL<OBJECT_IDENTIFIER[]>;

    constructor (
        memberSelect: FamilyReturn_memberSelect,
        familySelect: OPTIONAL<OBJECT_IDENTIFIER[]>
    ) {
        this.memberSelect = memberSelect;
        this.familySelect = familySelect;
    }

    /**
     * @summary Restructures an object into a FamilyReturn
     * @description
     * 
     * This takes an `object` and converts it to a `FamilyReturn`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FamilyReturn`.
     * @returns {FamilyReturn}
     */
    public static _from_object (_o: { [_K in keyof (FamilyReturn)]: (FamilyReturn)[_K] }): FamilyReturn {
        return new FamilyReturn(_o.memberSelect, _o.familySelect);
    }

        /**
         * @summary The enum used as the type of the component `memberSelect`
         * @public
         * @static
         */

    public static _enum_for_memberSelect = _enum_for_FamilyReturn_memberSelect;
}

/**
 * @summary The Leading Root Component Types of FamilyReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FamilyReturn: $.ComponentSpec[] = [
    new $.ComponentSpec("memberSelect", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("familySelect", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of FamilyReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FamilyReturn: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FamilyReturn
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FamilyReturn: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FamilyReturn: $.ASN1Decoder<FamilyReturn> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FamilyReturn
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FamilyReturn (el: _Element): FamilyReturn {
    if (!_cached_decoder_for_FamilyReturn) { _cached_decoder_for_FamilyReturn = function (el: _Element): FamilyReturn {
    let memberSelect!: FamilyReturn_memberSelect;
    let familySelect: OPTIONAL<OBJECT_IDENTIFIER[]>;
    const callbacks: $.DecodingMap = {
        "memberSelect": (_el: _Element): void => { memberSelect = _decode_FamilyReturn_memberSelect(_el); },
        "familySelect": (_el: _Element): void => { familySelect = $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FamilyReturn,
        _extension_additions_list_spec_for_FamilyReturn,
        _root_component_type_list_2_spec_for_FamilyReturn,
        undefined,
    );
    return new FamilyReturn(
        memberSelect,
        familySelect
    );
}; }
    return _cached_decoder_for_FamilyReturn(el);
}

let _cached_encoder_for_FamilyReturn: $.ASN1Encoder<FamilyReturn> | null = null;

/**
 * @summary Encodes a(n) FamilyReturn into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FamilyReturn, encoded as an ASN.1 Element.
 */
export
function _encode_FamilyReturn (value: FamilyReturn, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FamilyReturn) { _cached_encoder_for_FamilyReturn = function (value: FamilyReturn, elGetter: $.ASN1Encoder<FamilyReturn>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_FamilyReturn_memberSelect(value.memberSelect, $.BER));
    if (value.familySelect !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER)(value.familySelect, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FamilyReturn(value, elGetter);
}


/* eslint-enable */
