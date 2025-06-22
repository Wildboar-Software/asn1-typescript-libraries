/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    EnforcementAction,
    _enum_for_EnforcementAction,
    _decode_EnforcementAction,
    _encode_EnforcementAction,
} from '../AccessControl-ASN1Module/EnforcementAction.ta.mjs';
import {
    deny,
} from './deny.va.mjs';

/**
 * @summary DefaultAccess
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefaultAccess ::= SEQUENCE {
 *   action                   [0] IMPLICIT EnforcementAction DEFAULT deny,
 *   create                   [1] IMPLICIT EnforcementAction DEFAULT deny,
 *   delete                   [2] IMPLICIT EnforcementAction DEFAULT deny,
 *   get                      [3] IMPLICIT EnforcementAction DEFAULT deny,
 *   replace                  [4] IMPLICIT EnforcementAction DEFAULT deny,
 *   addMember                [5] IMPLICIT EnforcementAction DEFAULT deny,
 *   removeMember             [6] IMPLICIT EnforcementAction DEFAULT deny,
 *   replaceWithDefault       [7] IMPLICIT EnforcementAction DEFAULT deny,
 *   multipleObjectSelection  [8] IMPLICIT EnforcementAction DEFAULT deny,
 *   filter                   [9] IMPLICIT EnforcementAction DEFAULT deny
 * }
 * ```
 *
 * @class
 */
export class DefaultAccess {
    constructor(
        /**
         * @summary `action`.
         * @public
         * @readonly
         */
        readonly action: OPTIONAL<EnforcementAction>,
        /**
         * @summary `create`.
         * @public
         * @readonly
         */
        readonly create: OPTIONAL<EnforcementAction>,
        /**
         * @summary `delete_`.
         * @public
         * @readonly
         */
        readonly delete_: OPTIONAL<EnforcementAction>,
        /**
         * @summary `get_`.
         * @public
         * @readonly
         */
        readonly get_: OPTIONAL<EnforcementAction>,
        /**
         * @summary `replace`.
         * @public
         * @readonly
         */
        readonly replace: OPTIONAL<EnforcementAction>,
        /**
         * @summary `addMember`.
         * @public
         * @readonly
         */
        readonly addMember: OPTIONAL<EnforcementAction>,
        /**
         * @summary `removeMember`.
         * @public
         * @readonly
         */
        readonly removeMember: OPTIONAL<EnforcementAction>,
        /**
         * @summary `replaceWithDefault`.
         * @public
         * @readonly
         */
        readonly replaceWithDefault: OPTIONAL<EnforcementAction>,
        /**
         * @summary `multipleObjectSelection`.
         * @public
         * @readonly
         */
        readonly multipleObjectSelection: OPTIONAL<EnforcementAction>,
        /**
         * @summary `filter`.
         * @public
         * @readonly
         */
        readonly filter: OPTIONAL<EnforcementAction>
    ) {}

    /**
     * @summary Restructures an object into a DefaultAccess
     * @description
     *
     * This takes an `object` and converts it to a `DefaultAccess`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefaultAccess`.
     * @returns {DefaultAccess}
     */
    public static _from_object(
        _o: { [_K in keyof DefaultAccess]: DefaultAccess[_K] }
    ): DefaultAccess {
        return new DefaultAccess(
            _o.action,
            _o.create,
            _o.delete_,
            _o.get_,
            _o.replace,
            _o.addMember,
            _o.removeMember,
            _o.replaceWithDefault,
            _o.multipleObjectSelection,
            _o.filter
        );
    }

    /**
     * @summary Getter that returns the default value for `action`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_action() {
        return deny;
    }
    /**
     * @summary Getter that returns the default value for `create`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_create() {
        return deny;
    }
    /**
     * @summary Getter that returns the default value for `delete_`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_delete_() {
        return deny;
    }
    /**
     * @summary Getter that returns the default value for `get_`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_get_() {
        return deny;
    }
    /**
     * @summary Getter that returns the default value for `replace`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_replace() {
        return deny;
    }
    /**
     * @summary Getter that returns the default value for `addMember`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_addMember() {
        return deny;
    }
    /**
     * @summary Getter that returns the default value for `removeMember`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_removeMember() {
        return deny;
    }
    /**
     * @summary Getter that returns the default value for `replaceWithDefault`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_replaceWithDefault() {
        return deny;
    }
    /**
     * @summary Getter that returns the default value for `multipleObjectSelection`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_multipleObjectSelection() {
        return deny;
    }
    /**
     * @summary Getter that returns the default value for `filter`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_filter() {
        return deny;
    }
    /**
     * @summary The enum used as the type of the component `action`
     * @public
     * @static
     */

    public static _enum_for_action = _enum_for_EnforcementAction;
    /**
     * @summary The enum used as the type of the component `create`
     * @public
     * @static
     */

    public static _enum_for_create = _enum_for_EnforcementAction;
    /**
     * @summary The enum used as the type of the component `delete_`
     * @public
     * @static
     */

    public static _enum_for_delete_ = _enum_for_EnforcementAction;
    /**
     * @summary The enum used as the type of the component `get_`
     * @public
     * @static
     */

    public static _enum_for_get_ = _enum_for_EnforcementAction;
    /**
     * @summary The enum used as the type of the component `replace`
     * @public
     * @static
     */

    public static _enum_for_replace = _enum_for_EnforcementAction;
    /**
     * @summary The enum used as the type of the component `addMember`
     * @public
     * @static
     */

    public static _enum_for_addMember = _enum_for_EnforcementAction;
    /**
     * @summary The enum used as the type of the component `removeMember`
     * @public
     * @static
     */

    public static _enum_for_removeMember = _enum_for_EnforcementAction;
    /**
     * @summary The enum used as the type of the component `replaceWithDefault`
     * @public
     * @static
     */

    public static _enum_for_replaceWithDefault = _enum_for_EnforcementAction;
    /**
     * @summary The enum used as the type of the component `multipleObjectSelection`
     * @public
     * @static
     */

    public static _enum_for_multipleObjectSelection = _enum_for_EnforcementAction;
    /**
     * @summary The enum used as the type of the component `filter`
     * @public
     * @static
     */

    public static _enum_for_filter = _enum_for_EnforcementAction;
}

/**
 * @summary The Leading Root Component Types of DefaultAccess
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DefaultAccess: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'action',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'create',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'delete',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'get',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'replace',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'addMember',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'removeMember',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        'replaceWithDefault',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'multipleObjectSelection',
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        'filter',
        true,
        $.hasTag(_TagClass.context, 9)
    ),
];

/**
 * @summary The Trailing Root Component Types of DefaultAccess
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DefaultAccess: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DefaultAccess
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DefaultAccess: $.ComponentSpec[] = [];

let _cached_decoder_for_DefaultAccess: $.ASN1Decoder<DefaultAccess> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefaultAccess
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DefaultAccess} The decoded data structure.
 */
export function _decode_DefaultAccess(el: _Element) {
    if (!_cached_decoder_for_DefaultAccess) {
        _cached_decoder_for_DefaultAccess = function (
            el: _Element
        ): DefaultAccess {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let action: OPTIONAL<EnforcementAction> =
                DefaultAccess._default_value_for_action;
            let create: OPTIONAL<EnforcementAction> =
                DefaultAccess._default_value_for_create;
            let delete_: OPTIONAL<EnforcementAction> =
                DefaultAccess._default_value_for_delete_;
            let get_: OPTIONAL<EnforcementAction> =
                DefaultAccess._default_value_for_get_;
            let replace: OPTIONAL<EnforcementAction> =
                DefaultAccess._default_value_for_replace;
            let addMember: OPTIONAL<EnforcementAction> =
                DefaultAccess._default_value_for_addMember;
            let removeMember: OPTIONAL<EnforcementAction> =
                DefaultAccess._default_value_for_removeMember;
            let replaceWithDefault: OPTIONAL<EnforcementAction> =
                DefaultAccess._default_value_for_replaceWithDefault;
            let multipleObjectSelection: OPTIONAL<EnforcementAction> =
                DefaultAccess._default_value_for_multipleObjectSelection;
            let filter: OPTIONAL<EnforcementAction> =
                DefaultAccess._default_value_for_filter;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                action: (_el: _Element): void => {
                    action = $._decode_implicit<EnforcementAction>(
                        () => _decode_EnforcementAction
                    )(_el);
                },
                create: (_el: _Element): void => {
                    create = $._decode_implicit<EnforcementAction>(
                        () => _decode_EnforcementAction
                    )(_el);
                },
                delete: (_el: _Element): void => {
                    delete_ = $._decode_implicit<EnforcementAction>(
                        () => _decode_EnforcementAction
                    )(_el);
                },
                get: (_el: _Element): void => {
                    get_ = $._decode_implicit<EnforcementAction>(
                        () => _decode_EnforcementAction
                    )(_el);
                },
                replace: (_el: _Element): void => {
                    replace = $._decode_implicit<EnforcementAction>(
                        () => _decode_EnforcementAction
                    )(_el);
                },
                addMember: (_el: _Element): void => {
                    addMember = $._decode_implicit<EnforcementAction>(
                        () => _decode_EnforcementAction
                    )(_el);
                },
                removeMember: (_el: _Element): void => {
                    removeMember = $._decode_implicit<EnforcementAction>(
                        () => _decode_EnforcementAction
                    )(_el);
                },
                replaceWithDefault: (_el: _Element): void => {
                    replaceWithDefault = $._decode_implicit<EnforcementAction>(
                        () => _decode_EnforcementAction
                    )(_el);
                },
                multipleObjectSelection: (_el: _Element): void => {
                    multipleObjectSelection = $._decode_implicit<EnforcementAction>(
                        () => _decode_EnforcementAction
                    )(_el);
                },
                filter: (_el: _Element): void => {
                    filter = $._decode_implicit<EnforcementAction>(
                        () => _decode_EnforcementAction
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DefaultAccess,
                _extension_additions_list_spec_for_DefaultAccess,
                _root_component_type_list_2_spec_for_DefaultAccess,
                undefined
            );
            return new DefaultAccess /* SEQUENCE_CONSTRUCTOR_CALL */(
                action,
                create,
                delete_,
                get_,
                replace,
                addMember,
                removeMember,
                replaceWithDefault,
                multipleObjectSelection,
                filter
            );
        };
    }
    return _cached_decoder_for_DefaultAccess(el);
}

let _cached_encoder_for_DefaultAccess: $.ASN1Encoder<DefaultAccess> | null = null;

/**
 * @summary Encodes a(n) DefaultAccess into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultAccess, encoded as an ASN.1 Element.
 */
export function _encode_DefaultAccess(
    value: DefaultAccess,
    elGetter: $.ASN1Encoder<DefaultAccess>
) {
    if (!_cached_encoder_for_DefaultAccess) {
        _cached_encoder_for_DefaultAccess = function (
            value: DefaultAccess        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.action === undefined ||
                        $.deepEq(
                            value.action,
                            DefaultAccess._default_value_for_action
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_EnforcementAction,
                                  $.BER
                              )(value.action, $.BER),
                        /* IF_DEFAULT */ value.create === undefined ||
                        $.deepEq(
                            value.create,
                            DefaultAccess._default_value_for_create
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_EnforcementAction,
                                  $.BER
                              )(value.create, $.BER),
                        /* IF_DEFAULT */ value.delete_ === undefined ||
                        $.deepEq(
                            value.delete_,
                            DefaultAccess._default_value_for_delete_
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_EnforcementAction,
                                  $.BER
                              )(value.delete_, $.BER),
                        /* IF_DEFAULT */ value.get_ === undefined ||
                        $.deepEq(
                            value.get_,
                            DefaultAccess._default_value_for_get_
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_EnforcementAction,
                                  $.BER
                              )(value.get_, $.BER),
                        /* IF_DEFAULT */ value.replace === undefined ||
                        $.deepEq(
                            value.replace,
                            DefaultAccess._default_value_for_replace
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_EnforcementAction,
                                  $.BER
                              )(value.replace, $.BER),
                        /* IF_DEFAULT */ value.addMember === undefined ||
                        $.deepEq(
                            value.addMember,
                            DefaultAccess._default_value_for_addMember
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_EnforcementAction,
                                  $.BER
                              )(value.addMember, $.BER),
                        /* IF_DEFAULT */ value.removeMember === undefined ||
                        $.deepEq(
                            value.removeMember,
                            DefaultAccess._default_value_for_removeMember
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_EnforcementAction,
                                  $.BER
                              )(value.removeMember, $.BER),
                        /* IF_DEFAULT */ value.replaceWithDefault ===
                            undefined ||
                        $.deepEq(
                            value.replaceWithDefault,
                            DefaultAccess._default_value_for_replaceWithDefault
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_EnforcementAction,
                                  $.BER
                              )(value.replaceWithDefault, $.BER),
                        /* IF_DEFAULT */ value.multipleObjectSelection ===
                            undefined ||
                        $.deepEq(
                            value.multipleObjectSelection,
                            DefaultAccess._default_value_for_multipleObjectSelection
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_EnforcementAction,
                                  $.BER
                              )(value.multipleObjectSelection, $.BER),
                        /* IF_DEFAULT */ value.filter === undefined ||
                        $.deepEq(
                            value.filter,
                            DefaultAccess._default_value_for_filter
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_EnforcementAction,
                                  $.BER
                              )(value.filter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DefaultAccess(value, elGetter);
}


/* eslint-enable */
