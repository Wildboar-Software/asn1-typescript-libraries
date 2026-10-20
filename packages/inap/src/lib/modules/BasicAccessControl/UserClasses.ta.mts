/* eslint-disable */
import {
    NULL,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NameAndOptionalUID, _decode_NameAndOptionalUID, _encode_NameAndOptionalUID } from "../SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
// export { NameAndOptionalUID, _decode_NameAndOptionalUID, _encode_NameAndOptionalUID } from "../SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import { SubtreeSpecification, _decode_SubtreeSpecification, _encode_SubtreeSpecification } from "../InformationFramework/SubtreeSpecification.ta.mjs";
// export { SubtreeSpecification, _decode_SubtreeSpecification, _encode_SubtreeSpecification } from "../InformationFramework/SubtreeSpecification.ta.mjs";


/**
 * @summary UserClasses
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserClasses ::= SEQUENCE {
 *   allUsers   [0]  NULL OPTIONAL,
 *   thisEntry  [1]  NULL OPTIONAL,
 *   name       [2]  SET SIZE (1..MAX) OF NameAndOptionalUID OPTIONAL,
 *   userGroup  [3]  SET SIZE (1..MAX) OF NameAndOptionalUID OPTIONAL,
 *   -- dn component must be the name of an
 *   -- entry of GroupOfUniqueNames
 *   subtree    [4]  SET SIZE (1..MAX) OF SubtreeSpecification OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UserClasses {
    /**
     * @summary `allUsers`.
     * @public
     * @readonly
     */
    readonly allUsers: OPTIONAL<NULL>;
    /**
     * @summary `thisEntry`.
     * @public
     * @readonly
     */
    readonly thisEntry: OPTIONAL<NULL>;
    /**
     * @summary `name`.
     * @public
     * @readonly
     */
    readonly name: OPTIONAL<NameAndOptionalUID[]>;
    /**
     * @summary `userGroup`.
     * @public
     * @readonly
     */
    readonly userGroup: OPTIONAL<NameAndOptionalUID[]>;
    /**
     * @summary `subtree`.
     * @public
     * @readonly
     */
    readonly subtree: OPTIONAL<SubtreeSpecification[]>;

    constructor (
        allUsers: OPTIONAL<NULL>,
        thisEntry: OPTIONAL<NULL>,
        name: OPTIONAL<NameAndOptionalUID[]>,
        userGroup: OPTIONAL<NameAndOptionalUID[]>,
        subtree: OPTIONAL<SubtreeSpecification[]>
    ) {
        this.allUsers = allUsers;
        this.thisEntry = thisEntry;
        this.name = name;
        this.userGroup = userGroup;
        this.subtree = subtree;
    }

    /**
     * @summary Restructures an object into a UserClasses
     * @description
     * 
     * This takes an `object` and converts it to a `UserClasses`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserClasses`.
     * @returns {UserClasses}
     */
    public static _from_object (_o: { [_K in keyof (UserClasses)]: (UserClasses)[_K] }): UserClasses {
        return new UserClasses(_o.allUsers, _o.thisEntry, _o.name, _o.userGroup, _o.subtree);
    }


}

/**
 * @summary The Leading Root Component Types of UserClasses
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UserClasses: $.ComponentSpec[] = [
    new $.ComponentSpec("allUsers", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("thisEntry", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("name", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("userGroup", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("subtree", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of UserClasses
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UserClasses: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UserClasses
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UserClasses: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UserClasses: $.ASN1Decoder<UserClasses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserClasses
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserClasses (el: _Element): UserClasses {
    if (!_cached_decoder_for_UserClasses) { _cached_decoder_for_UserClasses = function (el: _Element): UserClasses {
    let allUsers: OPTIONAL<NULL>;
    let thisEntry: OPTIONAL<NULL>;
    let name: OPTIONAL<NameAndOptionalUID[]>;
    let userGroup: OPTIONAL<NameAndOptionalUID[]>;
    let subtree: OPTIONAL<SubtreeSpecification[]>;
    const callbacks: $.DecodingMap = {
        "allUsers": (_el: _Element): void => { allUsers = $._decode_explicit<NULL>(() => $._decodeNull)(_el); },
        "thisEntry": (_el: _Element): void => { thisEntry = $._decode_explicit<NULL>(() => $._decodeNull)(_el); },
        "name": (_el: _Element): void => { name = $._decode_explicit<NameAndOptionalUID[]>(() => $._decodeSetOf<NameAndOptionalUID>(() => _decode_NameAndOptionalUID))(_el); },
        "userGroup": (_el: _Element): void => { userGroup = $._decode_explicit<NameAndOptionalUID[]>(() => $._decodeSetOf<NameAndOptionalUID>(() => _decode_NameAndOptionalUID))(_el); },
        "subtree": (_el: _Element): void => { subtree = $._decode_explicit<SubtreeSpecification[]>(() => $._decodeSetOf<SubtreeSpecification>(() => _decode_SubtreeSpecification))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UserClasses,
        _extension_additions_list_spec_for_UserClasses,
        _root_component_type_list_2_spec_for_UserClasses,
        undefined,
    );
    return new UserClasses(
        allUsers,
        thisEntry,
        name,
        userGroup,
        subtree
    );
}; }
    return _cached_decoder_for_UserClasses(el);
}

let _cached_encoder_for_UserClasses: $.ASN1Encoder<UserClasses> | null = null;

/**
 * @summary Encodes a(n) UserClasses into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserClasses, encoded as an ASN.1 Element.
 */
export
function _encode_UserClasses (value: UserClasses, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserClasses) { _cached_encoder_for_UserClasses = function (value: UserClasses, elGetter: $.ASN1Encoder<UserClasses>): _Element {
    const _components: _Element[] = [];
    if (value.allUsers !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.allUsers, $.BER));
    }
    if (value.thisEntry !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.thisEntry, $.BER));
    }
    if (value.name !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => $._encodeSetOf<NameAndOptionalUID>(() => _encode_NameAndOptionalUID, $.BER), $.BER)(value.name, $.BER));
    }
    if (value.userGroup !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => $._encodeSetOf<NameAndOptionalUID>(() => _encode_NameAndOptionalUID, $.BER), $.BER)(value.userGroup, $.BER));
    }
    if (value.subtree !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => $._encodeSetOf<SubtreeSpecification>(() => _encode_SubtreeSpecification, $.BER), $.BER)(value.subtree, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UserClasses(value, elGetter);
}


/* eslint-enable */
