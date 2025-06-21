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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    RequestState,
    _enum_for_RequestState,
    _decode_RequestState,
    _encode_RequestState,
} from '../X790ASN1Module/RequestState.ta.mjs';
import {
    ActivityType,
    _decode_ActivityType,
    _encode_ActivityType,
} from '../X790ASN1Module/ActivityType.ta.mjs';
import {
    AuthorizationTime,
    _decode_AuthorizationTime,
    _encode_AuthorizationTime,
} from '../X790ASN1Module/AuthorizationTime.ta.mjs';
import {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';

/**
 * @summary AuthorizationList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthorizationList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class AuthorizationList_Item {
    constructor(
        /**
         * @summary `state`.
         * @public
         * @readonly
         */
        readonly state: RequestState,
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: ActivityType,
        /**
         * @summary `authTime`.
         * @public
         * @readonly
         */
        readonly authTime: OPTIONAL<AuthorizationTime>,
        /**
         * @summary `authPerson`.
         * @public
         * @readonly
         */
        readonly authPerson: OPTIONAL<PersonReach>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuthorizationList_Item
     * @description
     *
     * This takes an `object` and converts it to a `AuthorizationList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthorizationList_Item`.
     * @returns {AuthorizationList_Item}
     */
    public static _from_object(
        _o: { [_K in keyof AuthorizationList_Item]: AuthorizationList_Item[_K] }
    ): AuthorizationList_Item {
        return new AuthorizationList_Item(
            _o.state,
            _o.type_,
            _o.authTime,
            _o.authPerson,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary The enum used as the type of the component `state`
     * @public
     * @static
     */

    public static _enum_for_state = _enum_for_RequestState;
}


/**
 * @summary The Leading Root Component Types of AuthorizationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthorizationList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'state',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'type',
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        'authTime',
        true,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        'authPerson',
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of AuthorizationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthorizationList_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AuthorizationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthorizationList_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_AuthorizationList_Item: $.ASN1Decoder<AuthorizationList_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizationList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthorizationList_Item} The decoded data structure.
 */
export function _decode_AuthorizationList_Item(el: _Element) {
    if (!_cached_decoder_for_AuthorizationList_Item) {
        _cached_decoder_for_AuthorizationList_Item = function (
            el: _Element
        ): AuthorizationList_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let state!: RequestState;
            let type_!: ActivityType;
            let authTime: OPTIONAL<AuthorizationTime>;
            let authPerson: OPTIONAL<PersonReach>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                state: (_el: _Element): void => {
                    state = _decode_RequestState(_el);
                },
                type: (_el: _Element): void => {
                    type_ = _decode_ActivityType(_el);
                },
                authTime: (_el: _Element): void => {
                    authTime = _decode_AuthorizationTime(_el);
                },
                authPerson: (_el: _Element): void => {
                    authPerson = _decode_PersonReach(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthorizationList_Item,
                _extension_additions_list_spec_for_AuthorizationList_Item,
                _root_component_type_list_2_spec_for_AuthorizationList_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AuthorizationList_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                state,
                type_,
                authTime,
                authPerson,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AuthorizationList_Item(el);
}


let _cached_encoder_for_AuthorizationList_Item: $.ASN1Encoder<AuthorizationList_Item> | null = null;


/**
 * @summary Encodes a(n) AuthorizationList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizationList_Item, encoded as an ASN.1 Element.
 */
export function _encode_AuthorizationList_Item(
    value: AuthorizationList_Item,
    elGetter: $.ASN1Encoder<AuthorizationList_Item>
) {
    if (!_cached_encoder_for_AuthorizationList_Item) {
        _cached_encoder_for_AuthorizationList_Item = function (
            value: AuthorizationList_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RequestState(
                                value.state,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_ActivityType(
                                value.type_,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.authTime === undefined
                                ? undefined
                                : _encode_AuthorizationTime(
                                      value.authTime,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.authPerson === undefined
                                ? undefined
                                : _encode_PersonReach(value.authPerson, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AuthorizationList_Item(value, elGetter);
}


/* eslint-enable */
