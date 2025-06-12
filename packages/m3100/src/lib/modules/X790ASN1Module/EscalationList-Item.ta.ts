/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
    RequestState_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RequestState_provided /* IMPORTED_LONG_ENUMERATION_ITEM */,
    provided /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RequestState_denied /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RequestState,
    _encode_RequestState,
} from '../X790ASN1Module/RequestState.ta.js';
export {
    RequestState,
    _enum_for_RequestState,
    RequestState_requested /* IMPORTED_LONG_ENUMERATION_ITEM */,
    requested /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RequestState_provided /* IMPORTED_LONG_ENUMERATION_ITEM */,
    provided /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    RequestState_denied /* IMPORTED_LONG_ENUMERATION_ITEM */,
    denied /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_RequestState,
    _encode_RequestState,
} from '../X790ASN1Module/RequestState.ta.js';
import {
    EscalationTime,
    _decode_EscalationTime,
    _encode_EscalationTime,
} from '../X790ASN1Module/EscalationTime.ta.js';
export {
    EscalationTime,
    _decode_EscalationTime,
    _encode_EscalationTime,
} from '../X790ASN1Module/EscalationTime.ta.js';
import {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.js';
export {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from '../X790ASN1Module/PersonReach.ta.js';
import {
    OrgLevel,
    OrgLevel_no_escalation /* IMPORTED_LONG_NAMED_INTEGER */,
    no_escalation /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_first_level /* IMPORTED_LONG_NAMED_INTEGER */,
    first_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_second_level /* IMPORTED_LONG_NAMED_INTEGER */,
    second_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_third_level /* IMPORTED_LONG_NAMED_INTEGER */,
    third_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_fourth_level /* IMPORTED_LONG_NAMED_INTEGER */,
    fourth_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_fifth_level /* IMPORTED_LONG_NAMED_INTEGER */,
    fifth_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_sixth_level /* IMPORTED_LONG_NAMED_INTEGER */,
    sixth_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_OrgLevel,
    _encode_OrgLevel,
} from '../X790ASN1Module/OrgLevel.ta.js';
export {
    OrgLevel,
    OrgLevel_no_escalation /* IMPORTED_LONG_NAMED_INTEGER */,
    no_escalation /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_first_level /* IMPORTED_LONG_NAMED_INTEGER */,
    first_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_second_level /* IMPORTED_LONG_NAMED_INTEGER */,
    second_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_third_level /* IMPORTED_LONG_NAMED_INTEGER */,
    third_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_fourth_level /* IMPORTED_LONG_NAMED_INTEGER */,
    fourth_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_fifth_level /* IMPORTED_LONG_NAMED_INTEGER */,
    fifth_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    OrgLevel_sixth_level /* IMPORTED_LONG_NAMED_INTEGER */,
    sixth_level /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_OrgLevel,
    _encode_OrgLevel,
} from '../X790ASN1Module/OrgLevel.ta.js';

/* START_OF_SYMBOL_DEFINITION EscalationList_Item */
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
/* END_OF_SYMBOL_DEFINITION EscalationList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EscalationList_Item */
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
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'escTime',
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'requestPerson',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'level',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'escPerson',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EscalationList_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EscalationList_Item */
/**
 * @summary The Trailing Root Component Types of EscalationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EscalationList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EscalationList_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EscalationList_Item */
/**
 * @summary The Extension Addition Component Types of EscalationList_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EscalationList_Item: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EscalationList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EscalationList_Item */
let _cached_decoder_for_EscalationList_Item: $.ASN1Decoder<EscalationList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EscalationList_Item */

/* START_OF_SYMBOL_DEFINITION _decode_EscalationList_Item */
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
/* END_OF_SYMBOL_DEFINITION _decode_EscalationList_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EscalationList_Item */
let _cached_encoder_for_EscalationList_Item: $.ASN1Encoder<EscalationList_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EscalationList_Item */

/* START_OF_SYMBOL_DEFINITION _encode_EscalationList_Item */
/**
 * @summary Encodes a(n) EscalationList_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EscalationList_Item, encoded as an ASN.1 Element.
 */
export function _encode_EscalationList_Item(
    value: EscalationList_Item,
    elGetter: $.ASN1Encoder<EscalationList_Item>
) {
    if (!_cached_encoder_for_EscalationList_Item) {
        _cached_encoder_for_EscalationList_Item = function (
            value: EscalationList_Item,
            elGetter: $.ASN1Encoder<EscalationList_Item>
        ): _Element {
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

/* END_OF_SYMBOL_DEFINITION _encode_EscalationList_Item */

/* eslint-enable */
