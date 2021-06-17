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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    ConnectInformation_Item_itemType,
    _decode_ConnectInformation_Item_itemType,
    _encode_ConnectInformation_Item_itemType,
} from '../ASN1DefinedTypesModule/ConnectInformation-Item-itemType.ta';
export {
    ConnectInformation_Item_itemType,
    _decode_ConnectInformation_Item_itemType,
    _encode_ConnectInformation_Item_itemType,
} from '../ASN1DefinedTypesModule/ConnectInformation-Item-itemType.ta';
import {
    AdministrativeState,
    _enum_for_AdministrativeState,
    AdministrativeState_locked /* IMPORTED_LONG_ENUMERATION_ITEM */,
    locked /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AdministrativeState_unlocked /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unlocked /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AdministrativeState_shuttingDown /* IMPORTED_LONG_ENUMERATION_ITEM */,
    shuttingDown /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AdministrativeState,
    _encode_AdministrativeState,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdministrativeState.ta';
export {
    AdministrativeState,
    _enum_for_AdministrativeState,
    AdministrativeState_locked /* IMPORTED_LONG_ENUMERATION_ITEM */,
    locked /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AdministrativeState_unlocked /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unlocked /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    AdministrativeState_shuttingDown /* IMPORTED_LONG_ENUMERATION_ITEM */,
    shuttingDown /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AdministrativeState,
    _encode_AdministrativeState,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdministrativeState.ta';
import {
    NamedCrossConnection,
    _decode_NamedCrossConnection,
    _encode_NamedCrossConnection,
} from '../ASN1DefinedTypesModule/NamedCrossConnection.ta';
export {
    NamedCrossConnection,
    _decode_NamedCrossConnection,
    _encode_NamedCrossConnection,
} from '../ASN1DefinedTypesModule/NamedCrossConnection.ta';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta';
export {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta';
import {
    UserLabel,
    _decode_UserLabel,
    _encode_UserLabel,
} from '../ASN1DefinedTypesModule/UserLabel.ta';
export {
    UserLabel,
    _decode_UserLabel,
    _encode_UserLabel,
} from '../ASN1DefinedTypesModule/UserLabel.ta';
import {
    Boolean,
    _decode_Boolean,
    _encode_Boolean,
} from '../ASN1DefinedTypesModule/Boolean.ta';
export {
    Boolean,
    _decode_Boolean,
    _encode_Boolean,
} from '../ASN1DefinedTypesModule/Boolean.ta';

/* START_OF_SYMBOL_DEFINITION ConnectInformation_Item */
/**
 * @summary ConnectInformation_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectInformation-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class ConnectInformation_Item {
    constructor(
        /**
         * @summary `itemType`.
         * @public
         * @readonly
         */
        readonly itemType: ConnectInformation_Item_itemType,
        /**
         * @summary `administrativeState`.
         * @public
         * @readonly
         */
        readonly administrativeState: OPTIONAL<AdministrativeState>,
        /**
         * @summary `namedCrossConnection`.
         * @public
         * @readonly
         */
        readonly namedCrossConnection: OPTIONAL<NamedCrossConnection>,
        /**
         * @summary `userLabel`.
         * @public
         * @readonly
         */
        readonly userLabel: OPTIONAL<UserLabel>,
        /**
         * @summary `redline`.
         * @public
         * @readonly
         */
        readonly redline: OPTIONAL<Boolean>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<AdditionalInformation>
    ) {}

    /**
     * @summary Restructures an object into a ConnectInformation_Item
     * @description
     *
     * This takes an `object` and converts it to a `ConnectInformation_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectInformation_Item`.
     * @returns {ConnectInformation_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof ConnectInformation_Item]: ConnectInformation_Item[_K];
        }
    ): ConnectInformation_Item {
        return new ConnectInformation_Item(
            _o.itemType,
            _o.administrativeState,
            _o.namedCrossConnection,
            _o.userLabel,
            _o.redline,
            _o._unrecognizedExtensionsList,
            _o.additionalInfo
        );
    }

    /**
     * @summary The enum used as the type of the component `administrativeState`
     * @public
     * @static
     */

    public static _enum_for_administrativeState = _enum_for_AdministrativeState;
}
/* END_OF_SYMBOL_DEFINITION ConnectInformation_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConnectInformation_Item */
/**
 * @summary The Leading Root Component Types of ConnectInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConnectInformation_Item: $.ComponentSpec[] = [
    new $.ComponentSpec('itemType', false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        'administrativeState',
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'namedCrossConnection',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ConnectInformation_Item */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConnectInformation_Item */
/**
 * @summary The Trailing Root Component Types of ConnectInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConnectInformation_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'additionalInfo',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ConnectInformation_Item */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConnectInformation_Item */
/**
 * @summary The Extension Addition Component Types of ConnectInformation_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConnectInformation_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'userLabel',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'redline',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ConnectInformation_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectInformation_Item */
let _cached_decoder_for_ConnectInformation_Item: $.ASN1Decoder<ConnectInformation_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectInformation_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectInformation_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectInformation_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectInformation_Item} The decoded data structure.
 */
export function _decode_ConnectInformation_Item(el: _Element) {
    if (!_cached_decoder_for_ConnectInformation_Item) {
        _cached_decoder_for_ConnectInformation_Item = function (
            el: _Element
        ): ConnectInformation_Item {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let itemType!: ConnectInformation_Item_itemType;
            let administrativeState: OPTIONAL<AdministrativeState>;
            let namedCrossConnection: OPTIONAL<NamedCrossConnection>;
            let userLabel: OPTIONAL<UserLabel>;
            let redline: OPTIONAL<Boolean>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let additionalInfo: OPTIONAL<AdditionalInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                itemType: (_el: _Element): void => {
                    itemType = _decode_ConnectInformation_Item_itemType(_el);
                },
                administrativeState: (_el: _Element): void => {
                    administrativeState = _decode_AdministrativeState(_el);
                },
                namedCrossConnection: (_el: _Element): void => {
                    namedCrossConnection = $._decode_implicit<NamedCrossConnection>(
                        () => _decode_NamedCrossConnection
                    )(_el);
                },
                additionalInfo: (_el: _Element): void => {
                    additionalInfo = $._decode_implicit<AdditionalInformation>(
                        () => _decode_AdditionalInformation
                    )(_el);
                },
                userLabel: (_el: _Element): void => {
                    userLabel = $._decode_implicit<UserLabel>(
                        () => _decode_UserLabel
                    )(_el);
                },
                redline: (_el: _Element): void => {
                    redline = $._decode_implicit<Boolean>(
                        () => _decode_Boolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ConnectInformation_Item,
                _extension_additions_list_spec_for_ConnectInformation_Item,
                _root_component_type_list_2_spec_for_ConnectInformation_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ConnectInformation_Item /* SEQUENCE_CONSTRUCTOR_CALL */(
                itemType,
                administrativeState,
                namedCrossConnection,
                userLabel,
                redline,
                _unrecognizedExtensionsList,
                additionalInfo
            );
        };
    }
    return _cached_decoder_for_ConnectInformation_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectInformation_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectInformation_Item */
let _cached_encoder_for_ConnectInformation_Item: $.ASN1Encoder<ConnectInformation_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectInformation_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectInformation_Item */
/**
 * @summary Encodes a(n) ConnectInformation_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectInformation_Item, encoded as an ASN.1 Element.
 */
export function _encode_ConnectInformation_Item(
    value: ConnectInformation_Item,
    elGetter: $.ASN1Encoder<ConnectInformation_Item>
) {
    if (!_cached_encoder_for_ConnectInformation_Item) {
        _cached_encoder_for_ConnectInformation_Item = function (
            value: ConnectInformation_Item,
            elGetter: $.ASN1Encoder<ConnectInformation_Item>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_ConnectInformation_Item_itemType(
                                value.itemType,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.administrativeState ===
                            undefined
                                ? undefined
                                : _encode_AdministrativeState(
                                      value.administrativeState,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.namedCrossConnection ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_NamedCrossConnection,
                                      $.BER
                                  )(value.namedCrossConnection, $.BER),
                        ],
                        [
                            /* IF_ABSENT  */ value.userLabel === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_UserLabel,
                                      $.BER
                                  )(value.userLabel, $.BER),
                            /* IF_ABSENT  */ value.redline === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_Boolean,
                                      $.BER
                                  )(value.redline, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.additionalInfo === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      6,
                                      () => _encode_AdditionalInformation,
                                      $.BER
                                  )(value.additionalInfo, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ConnectInformation_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectInformation_Item */

/* eslint-enable */
