/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    GrantsAndDenials,
    _decode_GrantsAndDenials,
    _encode_GrantsAndDenials,
} from "../BasicAccessControl/GrantsAndDenials.ta.mjs";
import {
    Precedence,
    _decode_Precedence,
    _encode_Precedence,
} from "../BasicAccessControl/Precedence.ta.mjs";
import {
    ProtectedItems,
    _decode_ProtectedItems,
    _encode_ProtectedItems,
} from "../BasicAccessControl/ProtectedItems.ta.mjs";
/**
 * @summary UserPermission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserPermission ::= SEQUENCE {
 *   precedence        Precedence OPTIONAL,
 *              -- defaults to precedence in ACIItem
 *   protectedItems    ProtectedItems,
 *   grantsAndDenials  GrantsAndDenials,
 *   ... }
 * ```
 *
 */
export class UserPermission {
    constructor(
        /**
         * @summary `precedence`.
         * @public
         * @readonly
         */
        readonly precedence: OPTIONAL<Precedence>,
        /**
         * @summary `protectedItems`.
         * @public
         * @readonly
         */
        readonly protectedItems: ProtectedItems,
        /**
         * @summary `grantsAndDenials`.
         * @public
         * @readonly
         */
        readonly grantsAndDenials: GrantsAndDenials,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UserPermission
     * @description
     *
     * This takes an `object` and converts it to a `UserPermission`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserPermission`.
     * @returns {UserPermission}
     */
    public static _from_object(
        _o: { [_K in keyof UserPermission]: UserPermission[_K] }
    ): UserPermission {
        return new UserPermission(
            _o.precedence,
            _o.protectedItems,
            _o.grantsAndDenials,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of UserPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_UserPermission: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "precedence",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "protectedItems",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "grantsAndDenials",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of UserPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_UserPermission: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of UserPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_UserPermission: $.ComponentSpec[] = [];

let _cached_decoder_for_UserPermission: $.ASN1Decoder<UserPermission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserPermission
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UserPermission} The decoded data structure.
 */
export function _decode_UserPermission(el: _Element): UserPermission {
    if (!_cached_decoder_for_UserPermission) {
        _cached_decoder_for_UserPermission = function (
            el: _Element
        ): UserPermission {
            let precedence: OPTIONAL<Precedence>;
            let protectedItems!: ProtectedItems;
            let grantsAndDenials!: GrantsAndDenials;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                precedence: (_el: _Element): void => {
                    precedence = _decode_Precedence(_el);
                },
                protectedItems: (_el: _Element): void => {
                    protectedItems = _decode_ProtectedItems(_el);
                },
                grantsAndDenials: (_el: _Element): void => {
                    grantsAndDenials = _decode_GrantsAndDenials(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_UserPermission,
                _extension_additions_list_spec_for_UserPermission,
                _root_component_type_list_2_spec_for_UserPermission,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new UserPermission(
                precedence,
                protectedItems,
                grantsAndDenials,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_UserPermission(el);
}

let _cached_encoder_for_UserPermission: $.ASN1Encoder<UserPermission> | null = null;

/**
 * @summary Encodes a(n) UserPermission into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserPermission, encoded as an ASN.1 Element.
 */
export function _encode_UserPermission(
    value: UserPermission,
    elGetter: $.ASN1Encoder<UserPermission>
): _Element {
    if (!_cached_encoder_for_UserPermission) {
        _cached_encoder_for_UserPermission = function (
            value: UserPermission        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.precedence === undefined
                                ? undefined
                                : _encode_Precedence(value.precedence, $.DER),
                            /* REQUIRED   */ _encode_ProtectedItems(
                                value.protectedItems,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_GrantsAndDenials(
                                value.grantsAndDenials,
                                $.DER
                            ),
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
    return _cached_encoder_for_UserPermission(value, elGetter);
}


/* eslint-enable */
