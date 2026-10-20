/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Precedence, _decode_Precedence, _encode_Precedence } from "../BasicAccessControl/Precedence.ta.mjs";
// export { Precedence, _decode_Precedence, _encode_Precedence } from "../BasicAccessControl/Precedence.ta.mjs";
import { UserClasses, _decode_UserClasses, _encode_UserClasses } from "../IN-SCF-SDF-datatypes/UserClasses.ta.mjs";
// export { UserClasses, _decode_UserClasses, _encode_UserClasses } from "../IN-SCF-SDF-datatypes/UserClasses.ta.mjs";
import { GrantsAndDenials, _decode_GrantsAndDenials, _encode_GrantsAndDenials } from "../IN-SCF-SDF-datatypes/GrantsAndDenials.ta.mjs";
// export { GrantsAndDenials, GrantsAndDenials_grantAdd /* IMPORTED_LONG_NAMED_BIT */, grantAdd /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyAdd /* IMPORTED_LONG_NAMED_BIT */, denyAdd /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantDiscloseOnError /* IMPORTED_LONG_NAMED_BIT */, grantDiscloseOnError /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyDiscloseOnError /* IMPORTED_LONG_NAMED_BIT */, denyDiscloseOnError /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantRead /* IMPORTED_LONG_NAMED_BIT */, grantRead /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyRead /* IMPORTED_LONG_NAMED_BIT */, denyRead /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantRemove /* IMPORTED_LONG_NAMED_BIT */, grantRemove /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyRemove /* IMPORTED_LONG_NAMED_BIT */, denyRemove /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantBrowse /* IMPORTED_LONG_NAMED_BIT */, grantBrowse /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyBrowse /* IMPORTED_LONG_NAMED_BIT */, denyBrowse /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantExport /* IMPORTED_LONG_NAMED_BIT */, grantExport /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyExport /* IMPORTED_LONG_NAMED_BIT */, denyExport /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantImport /* IMPORTED_LONG_NAMED_BIT */, grantImport /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyImport /* IMPORTED_LONG_NAMED_BIT */, denyImport /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantModify /* IMPORTED_LONG_NAMED_BIT */, grantModify /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyModify /* IMPORTED_LONG_NAMED_BIT */, denyModify /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantRename /* IMPORTED_LONG_NAMED_BIT */, grantRename /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyRename /* IMPORTED_LONG_NAMED_BIT */, denyRename /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantReturnDN /* IMPORTED_LONG_NAMED_BIT */, grantReturnDN /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyReturnDN /* IMPORTED_LONG_NAMED_BIT */, denyReturnDN /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantCompare /* IMPORTED_LONG_NAMED_BIT */, grantCompare /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyCompare /* IMPORTED_LONG_NAMED_BIT */, denyCompare /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantFilterMatch /* IMPORTED_LONG_NAMED_BIT */, grantFilterMatch /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyFilterMatch /* IMPORTED_LONG_NAMED_BIT */, denyFilterMatch /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_grantExecuteMethod /* IMPORTED_LONG_NAMED_BIT */, grantExecuteMethod /* IMPORTED_SHORT_NAMED_BIT */, GrantsAndDenials_denyExecuteMethod /* IMPORTED_LONG_NAMED_BIT */, denyExecuteMethod /* IMPORTED_SHORT_NAMED_BIT */, _decode_GrantsAndDenials, _encode_GrantsAndDenials } from "../IN-SCF-SDF-datatypes/GrantsAndDenials.ta.mjs";


/**
 * @summary ItemPermission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ItemPermission ::= SEQUENCE {
 *   precedence        Precedence OPTIONAL,
 *   -- defaults to precedence in ACIItem
 *   userClasses       UserClasses,
 *   grantsAndDenials  GrantsAndDenials
 * }
 * ```
 * 
 * @class
 */
export
class ItemPermission {
    /**
     * @summary `precedence`.
     * @public
     * @readonly
     */
    readonly precedence: OPTIONAL<Precedence>;
    /**
     * @summary `userClasses`.
     * @public
     * @readonly
     */
    readonly userClasses: UserClasses;
    /**
     * @summary `grantsAndDenials`.
     * @public
     * @readonly
     */
    readonly grantsAndDenials: GrantsAndDenials;

    constructor (
        precedence: OPTIONAL<Precedence>,
        userClasses: UserClasses,
        grantsAndDenials: GrantsAndDenials
    ) {
        this.precedence = precedence;
        this.userClasses = userClasses;
        this.grantsAndDenials = grantsAndDenials;
    }

    /**
     * @summary Restructures an object into a ItemPermission
     * @description
     * 
     * This takes an `object` and converts it to a `ItemPermission`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ItemPermission`.
     * @returns {ItemPermission}
     */
    public static _from_object (_o: { [_K in keyof (ItemPermission)]: (ItemPermission)[_K] }): ItemPermission {
        return new ItemPermission(_o.precedence, _o.userClasses, _o.grantsAndDenials);
    }


}

/**
 * @summary The Leading Root Component Types of ItemPermission
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ItemPermission: $.ComponentSpec[] = [
    new $.ComponentSpec("precedence", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("userClasses", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("grantsAndDenials", false, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of ItemPermission
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ItemPermission: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ItemPermission
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ItemPermission: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ItemPermission: $.ASN1Decoder<ItemPermission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ItemPermission
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ItemPermission (el: _Element): ItemPermission {
    if (!_cached_decoder_for_ItemPermission) { _cached_decoder_for_ItemPermission = function (el: _Element): ItemPermission {
    let precedence: OPTIONAL<Precedence>;
    let userClasses!: UserClasses;
    let grantsAndDenials!: GrantsAndDenials;
    const callbacks: $.DecodingMap = {
        "precedence": (_el: _Element): void => { precedence = _decode_Precedence(_el); },
        "userClasses": (_el: _Element): void => { userClasses = _decode_UserClasses(_el); },
        "grantsAndDenials": (_el: _Element): void => { grantsAndDenials = _decode_GrantsAndDenials(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ItemPermission,
        _extension_additions_list_spec_for_ItemPermission,
        _root_component_type_list_2_spec_for_ItemPermission,
        undefined,
    );
    return new ItemPermission(
        precedence,
        userClasses,
        grantsAndDenials
    );
}; }
    return _cached_decoder_for_ItemPermission(el);
}

let _cached_encoder_for_ItemPermission: $.ASN1Encoder<ItemPermission> | null = null;

/**
 * @summary Encodes a(n) ItemPermission into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ItemPermission, encoded as an ASN.1 Element.
 */
export
function _encode_ItemPermission (value: ItemPermission, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ItemPermission) { _cached_encoder_for_ItemPermission = function (value: ItemPermission, elGetter: $.ASN1Encoder<ItemPermission>): _Element {
    const _components: _Element[] = [];
    if (value.precedence !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_Precedence(value.precedence, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_UserClasses(value.userClasses, $.BER));
    _components.push(/* REQUIRED   */ _encode_GrantsAndDenials(value.grantsAndDenials, $.BER));
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ItemPermission(value, elGetter);
}


/* eslint-enable */
