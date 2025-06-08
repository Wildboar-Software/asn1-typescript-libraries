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
    SourceIndicator,
    _enum_for_SourceIndicator,
    SourceIndicator_resourceOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    resourceOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SourceIndicator_managementOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    managementOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SourceIndicator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SourceIndicator,
    _encode_SourceIndicator,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SourceIndicator.ta';
export {
    SourceIndicator,
    _enum_for_SourceIndicator,
    SourceIndicator_resourceOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    resourceOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SourceIndicator_managementOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    managementOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SourceIndicator_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */,
    unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SourceIndicator,
    _encode_SourceIndicator,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SourceIndicator.ta';
import {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeList.ta';
export {
    AttributeList,
    _decode_AttributeList,
    _encode_AttributeList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeList.ta';
import {
    NotificationIdentifier,
    _decode_NotificationIdentifier,
    _encode_NotificationIdentifier,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/NotificationIdentifier.ta';
export {
    NotificationIdentifier,
    _decode_NotificationIdentifier,
    _encode_NotificationIdentifier,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/NotificationIdentifier.ta';
import {
    CorrelatedNotifications,
    _decode_CorrelatedNotifications,
    _encode_CorrelatedNotifications,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/CorrelatedNotifications.ta';
export {
    CorrelatedNotifications,
    _decode_CorrelatedNotifications,
    _encode_CorrelatedNotifications,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/CorrelatedNotifications.ta';
import {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalText.ta';
export {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalText.ta';
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

/* START_OF_SYMBOL_DEFINITION ObjectInfo */
/**
 * @summary ObjectInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectInfo ::= SEQUENCE {
 *   sourceIndicator          SourceIndicator OPTIONAL,
 *   attributeList            AttributeList OPTIONAL,
 *   notificationIdentifier   NotificationIdentifier OPTIONAL,
 *   correlatedNotifications  [1]  CorrelatedNotifications OPTIONAL,
 *   additionalText           AdditionalText OPTIONAL,
 *   additionalInformation    [2]  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class ObjectInfo {
    constructor(
        /**
         * @summary `sourceIndicator`.
         * @public
         * @readonly
         */
        readonly sourceIndicator: OPTIONAL<SourceIndicator>,
        /**
         * @summary `attributeList`.
         * @public
         * @readonly
         */
        readonly attributeList: OPTIONAL<AttributeList>,
        /**
         * @summary `notificationIdentifier`.
         * @public
         * @readonly
         */
        readonly notificationIdentifier: OPTIONAL<NotificationIdentifier>,
        /**
         * @summary `correlatedNotifications`.
         * @public
         * @readonly
         */
        readonly correlatedNotifications: OPTIONAL<CorrelatedNotifications>,
        /**
         * @summary `additionalText`.
         * @public
         * @readonly
         */
        readonly additionalText: OPTIONAL<AdditionalText>,
        /**
         * @summary `additionalInformation`.
         * @public
         * @readonly
         */
        readonly additionalInformation: OPTIONAL<AdditionalInformation>
    ) {}

    /**
     * @summary Restructures an object into a ObjectInfo
     * @description
     *
     * This takes an `object` and converts it to a `ObjectInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectInfo`.
     * @returns {ObjectInfo}
     */
    public static _from_object(
        _o: { [_K in keyof ObjectInfo]: ObjectInfo[_K] }
    ): ObjectInfo {
        return new ObjectInfo(
            _o.sourceIndicator,
            _o.attributeList,
            _o.notificationIdentifier,
            _o.correlatedNotifications,
            _o.additionalText,
            _o.additionalInformation
        );
    }

    /**
     * @summary The enum used as the type of the component `sourceIndicator`
     * @public
     * @static
     */

    public static _enum_for_sourceIndicator = _enum_for_SourceIndicator;
}
/* END_OF_SYMBOL_DEFINITION ObjectInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ObjectInfo */
/**
 * @summary The Leading Root Component Types of ObjectInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ObjectInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'sourceIndicator',
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'attributeList',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'notificationIdentifier',
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'correlatedNotifications',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.universal, 25),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ObjectInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ObjectInfo */
/**
 * @summary The Trailing Root Component Types of ObjectInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ObjectInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ObjectInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ObjectInfo */
/**
 * @summary The Extension Addition Component Types of ObjectInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ObjectInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ObjectInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectInfo */
let _cached_decoder_for_ObjectInfo: $.ASN1Decoder<ObjectInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObjectInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ObjectInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ObjectInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectInfo} The decoded data structure.
 */
export function _decode_ObjectInfo(el: _Element) {
    if (!_cached_decoder_for_ObjectInfo) {
        _cached_decoder_for_ObjectInfo = function (el: _Element): ObjectInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let sourceIndicator: OPTIONAL<SourceIndicator>;
            let attributeList: OPTIONAL<AttributeList>;
            let notificationIdentifier: OPTIONAL<NotificationIdentifier>;
            let correlatedNotifications: OPTIONAL<CorrelatedNotifications>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                sourceIndicator: (_el: _Element): void => {
                    sourceIndicator = _decode_SourceIndicator(_el);
                },
                attributeList: (_el: _Element): void => {
                    attributeList = _decode_AttributeList(_el);
                },
                notificationIdentifier: (_el: _Element): void => {
                    notificationIdentifier = _decode_NotificationIdentifier(
                        _el
                    );
                },
                correlatedNotifications: (_el: _Element): void => {
                    correlatedNotifications = $._decode_implicit<CorrelatedNotifications>(
                        () => _decode_CorrelatedNotifications
                    )(_el);
                },
                additionalText: (_el: _Element): void => {
                    additionalText = _decode_AdditionalText(_el);
                },
                additionalInformation: (_el: _Element): void => {
                    additionalInformation = $._decode_implicit<AdditionalInformation>(
                        () => _decode_AdditionalInformation
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ObjectInfo,
                _extension_additions_list_spec_for_ObjectInfo,
                _root_component_type_list_2_spec_for_ObjectInfo,
                undefined
            );
            return new ObjectInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                sourceIndicator,
                attributeList,
                notificationIdentifier,
                correlatedNotifications,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_ObjectInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObjectInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectInfo */
let _cached_encoder_for_ObjectInfo: $.ASN1Encoder<ObjectInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObjectInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ObjectInfo */
/**
 * @summary Encodes a(n) ObjectInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectInfo, encoded as an ASN.1 Element.
 */
export function _encode_ObjectInfo(
    value: ObjectInfo,
    elGetter: $.ASN1Encoder<ObjectInfo>
) {
    if (!_cached_encoder_for_ObjectInfo) {
        _cached_encoder_for_ObjectInfo = function (
            value: ObjectInfo,
            elGetter: $.ASN1Encoder<ObjectInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.sourceIndicator === undefined
                            ? undefined
                            : _encode_SourceIndicator(
                                  value.sourceIndicator,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.attributeList === undefined
                            ? undefined
                            : _encode_AttributeList(value.attributeList, $.BER),
                        /* IF_ABSENT  */ value.notificationIdentifier ===
                        undefined
                            ? undefined
                            : _encode_NotificationIdentifier(
                                  value.notificationIdentifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.correlatedNotifications ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CorrelatedNotifications,
                                  $.BER
                              )(value.correlatedNotifications, $.BER),
                        /* IF_ABSENT  */ value.additionalText === undefined
                            ? undefined
                            : _encode_AdditionalText(
                                  value.additionalText,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.additionalInformation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_AdditionalInformation,
                                  $.BER
                              )(value.additionalInformation, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ObjectInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObjectInfo */

/* eslint-enable */
