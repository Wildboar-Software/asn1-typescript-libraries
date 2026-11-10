/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type NULL,
    type OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SubtreeSpecification,
    type SubtreeSpecificationJSON,
    _decode_SubtreeSpecification,
    _encode_SubtreeSpecification,
} from "../InformationFramework/SubtreeSpecification.ta.mjs";
import {
    NameAndOptionalUID,
    type NameAndOptionalUIDJSON,
    _decode_NameAndOptionalUID,
    _encode_NameAndOptionalUID,
} from "../SelectedAttributeTypes/NameAndOptionalUID.ta.mjs";
import { gserSequence, quoteGserString } from "../../json.mjs";

/**
 * JSON Encoding Rules encoding of {@link UserClasses}.
 * Absent or empty selectors are omitted.
 */
export type UserClassesJSON = {
    allUsers?: null;
    thisEntry?: null;
    name?: NameAndOptionalUIDJSON[];
    userGroup?: NameAndOptionalUIDJSON[];
    subtree?: SubtreeSpecificationJSON[];
};
/**
 * @summary UserClasses
 * @description
 *
 * SEQUENCE of optional selectors; omitted means not selected on that axis.
 * Present `SET SIZE (1..MAX)` cannot be empty. `allUsers` is everyone (still
 * subject to `authenticationLevel`). `thisEntry` is the accessed entry's DN
 * (or the family ancestor). `name` is exact NameAndOptionalUID (UID, if
 * present, must match). `userGroup` names a groupOfNames /
 * groupOfUniqueNames; nested groups are not followed; if membership cannot be
 * evaluated locally, assume non-member for grants and member for denials.
 * `subtree` is SubtreeSpecification (`specificationFilter` is ignored).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserClasses ::= SEQUENCE {
 *   allUsers   [0]  NULL                                      type OPTIONAL,
 *   thisEntry  [1]  NULL                                      type OPTIONAL,
 *   name       [2]  SET SIZE (1..MAX) OF NameAndOptionalUID   OPTIONAL,
 *   userGroup  [3]  SET SIZE (1..MAX) OF NameAndOptionalUID   OPTIONAL,
 *                   -- dn component shall be the name of an
 *                   -- entry of GroupOfUniqueNames
 *   subtree    [4]  SET SIZE (1..MAX) OF SubtreeSpecification OPTIONAL,
 *   ... }
 * ```
 *
 */
export class UserClasses {
    /**
     * @summary `allUsers`.
     * @description Every directory user (lowest specificity).
     * @public
     * @readonly
     */
    public readonly allUsers?: OPTIONAL<NULL>;
    /**
     * @summary `thisEntry`.
     * @description The user whose DN is the entry being accessed (or its family ancestor).
     * @public
     * @readonly
     */
    public readonly thisEntry?: OPTIONAL<NULL>;
    /**
     * @summary `name`.
     * @description Exact names; uniqueIdentifier, if present, must also match.
     * @public
     * @readonly
     */
    public readonly name?: OPTIONAL<NameAndOptionalUID[]>;
    /**
     * @summary `userGroup`.
     * @description DN of groupOfNames/groupOfUniqueNames; nested groups are not expanded.
     * @public
     * @readonly
     */
    public readonly userGroup?: OPTIONAL<NameAndOptionalUID[]>;
    /**
     * @summary `subtree`.
     * @description Users in the (unrefined) subtree; `specificationFilter` is ignored.
     * @public
     * @readonly
     */
    public readonly subtree?: OPTIONAL<SubtreeSpecification[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    public readonly _unrecognizedExtensionsList: _Element[];

    constructor(
        allUsers?: OPTIONAL<NULL>,
        thisEntry?: OPTIONAL<NULL>,
        name?: OPTIONAL<NameAndOptionalUID[]>,
        userGroup?: OPTIONAL<NameAndOptionalUID[]>,
        subtree?: OPTIONAL<SubtreeSpecification[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.allUsers = allUsers;
        this.thisEntry = thisEntry;
        this.name = name;
        this.userGroup = userGroup;
        this.subtree = subtree;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
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
    public static _from_object(
        _o: { [_K in keyof UserClasses]: UserClasses[_K] }
    ): UserClasses {
        return new UserClasses(
            _o.allUsers,
            _o.thisEntry,
            _o.name,
            _o.userGroup,
            _o.subtree,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Whether no user selector is present.
     * @description
     *
     * Omitted axes are not selected. Present `SET SIZE (1..MAX)`
     * components cannot be empty; an empty array is treated as absent.
     *
     * @public
     * @method
     * @returns {boolean} `true` if every selector is absent or empty.
     */
    public isEmpty(): boolean {
        return (
            this.allUsers === undefined
            && this.thisEntry === undefined
            && (this.name === undefined || this.name.length === 0)
            && (this.userGroup === undefined || this.userGroup.length === 0)
            && (this.subtree === undefined || this.subtree.length === 0)
        );
    }

    /**
     * @summary ASN.1 value notation for these user classes
     * @description
     *
     * Present selectors only. `NULL` axes are `NULL`. `name` and
     * `userGroup` quote {@link NameAndOptionalUID.toString}. `subtree`
     * uses {@link SubtreeSpecification.toString}. Empty `SET SIZE
     * (1..MAX)` components are treated as absent. Unrecognized
     * extensions are omitted. An empty value is `{}`.
     *
     * @returns `{ allUsers NULL }` or a subset
     * @function
     * @public
     */
    public toString(): string {
        const parts: string[] = [];
        if (this.allUsers !== undefined) {
            parts.push("allUsers NULL");
        }
        if (this.thisEntry !== undefined) {
            parts.push("thisEntry NULL");
        }
        if (this.name !== undefined && this.name.length > 0) {
            parts.push(`name ${gserSequence(this.name.map((n) => quoteGserString(n.toString())))}`);
        }
        if (this.userGroup !== undefined && this.userGroup.length > 0) {
            parts.push(`userGroup ${gserSequence(this.userGroup.map((n) => quoteGserString(n.toString())))}`);
        }
        if (this.subtree !== undefined && this.subtree.length > 0) {
            parts.push(`subtree ${gserSequence(this.subtree.map((s) => s.toString()))}`);
        }
        return gserSequence(parts);
    }

    /**
     * @summary Convert this value to a JSON encoding loosely following ITU-T X.697 (JER)
     * @description
     *
     * Present selectors only. `NULL` axes are JSON `null`. Empty
     * `SET SIZE (1..MAX)` components are treated as absent.
     * Unrecognized extensions are not represented.
     *
     * @returns The JSON Encoding Rules encoding of this value
     * @function
     * @public
     */
    public toJSON(): UserClassesJSON {
        const json: UserClassesJSON = {};
        if (this.allUsers !== undefined) {
            json.allUsers = null;
        }
        if (this.thisEntry !== undefined) {
            json.thisEntry = null;
        }
        if (this.name !== undefined && this.name.length > 0) {
            json.name = this.name.map((n) => n.toJSON());
        }
        if (this.userGroup !== undefined && this.userGroup.length > 0) {
            json.userGroup = this.userGroup.map((n) => n.toJSON());
        }
        if (this.subtree !== undefined && this.subtree.length > 0) {
            json.subtree = this.subtree.map((s) => s.toJSON());
        }
        return json;
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
export const _root_component_type_list_1_spec_for_UserClasses: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "allUsers",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "thisEntry",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "userGroup",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "subtree",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of UserClasses
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserClasses: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UserClasses
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserClasses: $.ComponentSpec[] = [];

let _cached_decoder_for_UserClasses: $.ASN1Decoder<UserClasses> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserClasses
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserClasses} The decoded data structure.
 */
export function _decode_UserClasses(el: _Element): UserClasses {
    if (!_cached_decoder_for_UserClasses) {
        _cached_decoder_for_UserClasses = function (el: _Element): UserClasses {
            let allUsers: OPTIONAL<NULL>;
            let thisEntry: OPTIONAL<NULL>;
            let name: OPTIONAL<NameAndOptionalUID[]>;
            let userGroup: OPTIONAL<NameAndOptionalUID[]>;
            let subtree: OPTIONAL<SubtreeSpecification[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                allUsers: (_el: _Element): void => {
                    allUsers = $._decode_explicit<NULL>(() => $._decodeNull)(
                        _el
                    );
                },
                thisEntry: (_el: _Element): void => {
                    thisEntry = $._decode_explicit<NULL>(() => $._decodeNull)(
                        _el
                    );
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<NameAndOptionalUID[]>(() =>
                        $._decodeSetOf<NameAndOptionalUID>(
                            () => _decode_NameAndOptionalUID
                        )
                    )(_el);
                },
                userGroup: (_el: _Element): void => {
                    userGroup = $._decode_explicit<NameAndOptionalUID[]>(() =>
                        $._decodeSetOf<NameAndOptionalUID>(
                            () => _decode_NameAndOptionalUID
                        )
                    )(_el);
                },
                subtree: (_el: _Element): void => {
                    subtree = $._decode_explicit<SubtreeSpecification[]>(() =>
                        $._decodeSetOf<SubtreeSpecification>(
                            () => _decode_SubtreeSpecification
                        )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserClasses,
                _extension_additions_list_spec_for_UserClasses,
                _root_component_type_list_2_spec_for_UserClasses,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new UserClasses(
                allUsers,
                thisEntry,
                name,
                userGroup,
                subtree,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_UserClasses(el);
}

let _cached_encoder_for_UserClasses: $.ASN1Encoder<UserClasses> | null = null;

/**
 * @summary Encodes a(n) UserClasses into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserClasses, encoded as an ASN.1 Element.
 */
export function _encode_UserClasses(
    value: UserClasses,
    elGetter: $.ASN1Encoder<UserClasses>
): _Element {
    if (!_cached_encoder_for_UserClasses) {
        _cached_encoder_for_UserClasses = function (
            value: UserClasses        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.allUsers === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeNull,
                                      $.DER
                                  )(value.allUsers, $.DER),
                            /* IF_ABSENT  */ value.thisEntry === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeNull,
                                      $.DER
                                  )(value.thisEntry, $.DER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<NameAndOptionalUID>(
                                              () => _encode_NameAndOptionalUID,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.name, $.DER),
                            /* IF_ABSENT  */ value.userGroup === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<NameAndOptionalUID>(
                                              () => _encode_NameAndOptionalUID,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.userGroup, $.DER),
                            /* IF_ABSENT  */ value.subtree === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSetOf<SubtreeSpecification>(
                                              () =>
                                                  _encode_SubtreeSpecification,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.subtree, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_UserClasses(value, elGetter);
}


/* eslint-enable */
