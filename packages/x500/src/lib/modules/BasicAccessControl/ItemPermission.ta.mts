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
    UserClasses,
    _decode_UserClasses,
    _encode_UserClasses,
} from "../BasicAccessControl/UserClasses.ta.mjs";
/**
 * @summary ItemPermission
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ItemPermission ::= SEQUENCE {
 *   precedence        Precedence OPTIONAL,
 *              -- defaults to precedence in ACIItem
 *   userClasses       UserClasses,
 *   grantsAndDenials  GrantsAndDenials,
 *   ... }
 * ```
 *
 */
export class ItemPermission {
    constructor(
        /**
         * @summary `precedence`.
         * @public
         * @readonly
         */
        readonly precedence: OPTIONAL<Precedence>,
        /**
         * @summary `userClasses`.
         * @public
         * @readonly
         */
        readonly userClasses: UserClasses,
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
    public static _from_object(
        _o: { [_K in keyof ItemPermission]: ItemPermission[_K] }
    ): ItemPermission {
        return new ItemPermission(
            _o.precedence,
            _o.userClasses,
            _o.grantsAndDenials,
            _o._unrecognizedExtensionsList
        );
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
export const _root_component_type_list_1_spec_for_ItemPermission: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "precedence",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "userClasses",
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
 * @summary The Trailing Root Component Types of ItemPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ItemPermission: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ItemPermission
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ItemPermission: $.ComponentSpec[] = [];

let _cached_decoder_for_ItemPermission: $.ASN1Decoder<ItemPermission> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ItemPermission
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ItemPermission} The decoded data structure.
 */
export function _decode_ItemPermission(el: _Element): ItemPermission {
    if (!_cached_decoder_for_ItemPermission) {
        _cached_decoder_for_ItemPermission = function (
            el: _Element
        ): ItemPermission {
            let precedence: OPTIONAL<Precedence>;
            let userClasses!: UserClasses;
            let grantsAndDenials!: GrantsAndDenials;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                precedence: (_el: _Element): void => {
                    precedence = _decode_Precedence(_el);
                },
                userClasses: (_el: _Element): void => {
                    userClasses = _decode_UserClasses(_el);
                },
                grantsAndDenials: (_el: _Element): void => {
                    grantsAndDenials = _decode_GrantsAndDenials(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ItemPermission,
                _extension_additions_list_spec_for_ItemPermission,
                _root_component_type_list_2_spec_for_ItemPermission,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ItemPermission(
                precedence,
                userClasses,
                grantsAndDenials,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ItemPermission(el);
}

let _cached_encoder_for_ItemPermission: $.ASN1Encoder<ItemPermission> | null = null;

/**
 * @summary Encodes a(n) ItemPermission into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ItemPermission, encoded as an ASN.1 Element.
 */
export function _encode_ItemPermission(
    value: ItemPermission,
    elGetter: $.ASN1Encoder<ItemPermission>
): _Element {
    if (!_cached_encoder_for_ItemPermission) {
        _cached_encoder_for_ItemPermission = function (
            value: ItemPermission        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.precedence === undefined
                                ? undefined
                                : _encode_Precedence(value.precedence, $.DER),
                            /* REQUIRED   */ _encode_UserClasses(
                                value.userClasses,
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
    return _cached_encoder_for_ItemPermission(value, elGetter);
}


/* eslint-enable */
