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
import * as $ from '@wildboar/asn1/functional';
import {
    RequestState,
    _enum_for_RequestState,
    _decode_RequestState,
    _encode_RequestState,
} from '../X790ASN1Module/RequestState.ta.mjs';
import {
    EscalationTime,
    _decode_EscalationTime,
    _encode_EscalationTime,
} from '../X790ASN1Module/EscalationTime.ta.mjs';
import {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.mjs';
import {
    OrgLevel,
    _decode_OrgLevel,
    _encode_OrgLevel,
} from '../X790ASN1Module/OrgLevel.ta.mjs';

/**
 * @summary EscalationList_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EscalationList-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class EscalationList_Item {
    constructor(
        /**
         * @summary `state`.
         * @public
         * @readonly
         */
        readonly state: RequestState,
        /**
         * @summary `escTime`.
         * @public
         * @readonly
         */
        readonly escTime: EscalationTime,
        /**
         * @summary `requestPerson`.
         * @public
         * @readonly
         */
        readonly requestPerson: PersonReach,
        /**
         * @summary `level`.
         * @public
         * @readonly
         */
        readonly level: OPTIONAL<OrgLevel>,
        /**
         * @summary `escPerson`.
         * @public
         * @readonly
         */
        readonly escPerson: OPTIONAL<PersonReach>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EscalationList_Item
     * @description
     *
     * This takes an `object` and converts it to a `EscalationList_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EscalationList_Item`.
     * @returns {EscalationList_Item}
     */
    public static _from_object(
        _o: { [_K in keyof EscalationList_Item]: EscalationList_Item[_K] }
    ): EscalationList_Item {
        return new EscalationList_Item(
            _o.state,
            _o.escTime,
            _o.requestPerson,
            _o.level,
            _o.escPerson,
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
 * @summary The Leading Root Component Types of EscalationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EscalationList_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'state',
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'escTime',
        false,
        $.hasTag(_TagClass.universal, 24)
    ),
    new $.ComponentSpec(
        'requestPerson',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'level',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'escPerson',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of EscalationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EscalationList_Item: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EscalationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EscalationList_Item: $.ComponentSpec[] = [];


let _cached_decoder_for_EscalationList_Item: $.ASN1Decoder<EscalationList_Item> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EscalationList_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EscalationList_Item} The decoded data structure.
 */
export function _decode_EscalationList_Item(el: _Element) {
    if (!_cached_decoder_for_EscalationList_Item) {
        _cached_decoder_for_EscalationList_Item = function (
            el: _Element
        ): EscalationList_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let state!: RequestState;
            let escTime!: EscalationTime;
            let requestPerson!: PersonReach;
            let level: OPTIONAL<OrgLevel>;
            let escPerson: OPTIONAL<PersonReach>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                state: (_el: _Element): void => {
                    state = _decode_RequestState(_el);
                },
                escTime: (_el: _Element): void => {
                    escTime = _decode_EscalationTime(_el);
                },
                requestPerson: (_el: _Element): void => {
                    requestPerson = $._decode_implicit<PersonReach>(
                        () => _decode_PersonReach
                    )(_el);
                },
                level: (_el: _Element): void => {
                    level = $._decode_implicit<OrgLevel>(
                        () => _decode_OrgLevel
                    )(_el);
                },
                escPerson: (_el: _Element): void => {
                    escPerson = $._decode_implicit<PersonReach>(
                        () => _decode_PersonReach
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EscalationList_Item,
                _extension_additions_list_spec_for_EscalationList_Item,
                _root_component_type_list_2_spec_for_EscalationList_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EscalationList_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                state,
                escTime,
                requestPerson,
                level,
                escPerson,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EscalationList_Item(el);
}


let _cached_encoder_for_EscalationList_Item: $.ASN1Encoder<EscalationList_Item> | null = null;


/**
 * @summary Encodes a(n) EscalationList_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscalationList_Item, encoded as an ASN.1 Element.
 */
export function _encode_EscalationList_Item(
    value: EscalationList_Item,
    elGetter: $.ASN1Encoder<EscalationList_Item>
) {
    if (!_cached_encoder_for_EscalationList_Item) {
        _cached_encoder_for_EscalationList_Item = function (
            value: EscalationList_Item        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_RequestState(
                                value.state,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_EscalationTime(
                                value.escTime,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encode_implicit(
                                _TagClass.context,
                                0,
                                () => _encode_PersonReach,
                                $.BER
                            )(value.requestPerson, $.BER),
                            /* IF_ABSENT  */ value.level === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_OrgLevel,
                                      $.BER
                                  )(value.level, $.BER),
                            /* IF_ABSENT  */ value.escPerson === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_PersonReach,
                                      $.BER
                                  )(value.escPerson, $.BER),
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
    return _cached_encoder_for_EscalationList_Item(value, elGetter);
}


/* eslint-enable */
