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
    SourceIndicator,
    _enum_for_SourceIndicator,
    _decode_SourceIndicator,
    _encode_SourceIndicator,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SourceIndicator.ta.mjs';
import {
    AttributeIdentifierList,
    _decode_AttributeIdentifierList,
    _encode_AttributeIdentifierList,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeIdentifierList.ta.mjs';
import {
    AttributeValueChangeDefinition,
    _decode_AttributeValueChangeDefinition,
    _encode_AttributeValueChangeDefinition,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AttributeValueChangeDefinition.ta.mjs';
import {
    NotificationIdentifier,
    _decode_NotificationIdentifier,
    _encode_NotificationIdentifier,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/NotificationIdentifier.ta.mjs';
import {
    CorrelatedNotifications,
    _decode_CorrelatedNotifications,
    _encode_CorrelatedNotifications,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/CorrelatedNotifications.ta.mjs';
import {
    AdditionalText,
    _decode_AdditionalText,
    _encode_AdditionalText,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalText.ta.mjs';
import {
    AdditionalInformation,
    _decode_AdditionalInformation,
    _encode_AdditionalInformation,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/AdditionalInformation.ta.mjs';
/**
 * @summary RelationshipChangeInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelationshipChangeInfo ::= SEQUENCE {
 *   sourceIndicator               SourceIndicator OPTIONAL,
 *   attributeIdentifierList       [1]  AttributeIdentifierList OPTIONAL,
 *   relationshipChangeDefinition  AttributeValueChangeDefinition,
 *   notificationIdentifier        NotificationIdentifier OPTIONAL,
 *   correlatedNotifications       [2]  CorrelatedNotifications OPTIONAL,
 *   additionalText                AdditionalText OPTIONAL,
 *   additionalInformation         [3]  AdditionalInformation OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RelationshipChangeInfo {
    constructor(
        /**
         * @summary `sourceIndicator`.
         * @public
         * @readonly
         */
        readonly sourceIndicator: OPTIONAL<SourceIndicator>,
        /**
         * @summary `attributeIdentifierList`.
         * @public
         * @readonly
         */
        readonly attributeIdentifierList: OPTIONAL<AttributeIdentifierList>,
        /**
         * @summary `relationshipChangeDefinition`.
         * @public
         * @readonly
         */
        readonly relationshipChangeDefinition: AttributeValueChangeDefinition,
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
     * @summary Restructures an object into a RelationshipChangeInfo
     * @description
     *
     * This takes an `object` and converts it to a `RelationshipChangeInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RelationshipChangeInfo`.
     * @returns {RelationshipChangeInfo}
     */
    public static _from_object(
        _o: { [_K in keyof RelationshipChangeInfo]: RelationshipChangeInfo[_K] }
    ): RelationshipChangeInfo {
        return new RelationshipChangeInfo(
            _o.sourceIndicator,
            _o.attributeIdentifierList,
            _o.relationshipChangeDefinition,
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

/**
 * @summary The Leading Root Component Types of RelationshipChangeInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RelationshipChangeInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'sourceIndicator',
        true,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'attributeIdentifierList',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'relationshipChangeDefinition',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'notificationIdentifier',
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'correlatedNotifications',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'additionalText',
        true,
        $.hasTag(_TagClass.universal, 25)
    ),
    new $.ComponentSpec(
        'additionalInformation',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of RelationshipChangeInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RelationshipChangeInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of RelationshipChangeInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RelationshipChangeInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_RelationshipChangeInfo: $.ASN1Decoder<RelationshipChangeInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelationshipChangeInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelationshipChangeInfo} The decoded data structure.
 */
export function _decode_RelationshipChangeInfo(el: _Element): RelationshipChangeInfo {
    if (!_cached_decoder_for_RelationshipChangeInfo) {
        _cached_decoder_for_RelationshipChangeInfo = function (
            el: _Element
        ): RelationshipChangeInfo {
            let sourceIndicator: OPTIONAL<SourceIndicator>;
            let attributeIdentifierList: OPTIONAL<AttributeIdentifierList>;
            let relationshipChangeDefinition!: AttributeValueChangeDefinition;
            let notificationIdentifier: OPTIONAL<NotificationIdentifier>;
            let correlatedNotifications: OPTIONAL<CorrelatedNotifications>;
            let additionalText: OPTIONAL<AdditionalText>;
            let additionalInformation: OPTIONAL<AdditionalInformation>;
            const callbacks: $.DecodingMap = {
                sourceIndicator: (_el: _Element): void => {
                    sourceIndicator = _decode_SourceIndicator(_el);
                },
                attributeIdentifierList: (_el: _Element): void => {
                    attributeIdentifierList = $._decode_implicit<AttributeIdentifierList>(
                        () => _decode_AttributeIdentifierList
                    )(_el);
                },
                relationshipChangeDefinition: (_el: _Element): void => {
                    relationshipChangeDefinition = _decode_AttributeValueChangeDefinition(
                        _el
                    );
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RelationshipChangeInfo,
                _extension_additions_list_spec_for_RelationshipChangeInfo,
                _root_component_type_list_2_spec_for_RelationshipChangeInfo,
                undefined
            );
            return new RelationshipChangeInfo (
                sourceIndicator,
                attributeIdentifierList,
                relationshipChangeDefinition,
                notificationIdentifier,
                correlatedNotifications,
                additionalText,
                additionalInformation
            );
        };
    }
    return _cached_decoder_for_RelationshipChangeInfo(el);
}

let _cached_encoder_for_RelationshipChangeInfo: $.ASN1Encoder<RelationshipChangeInfo> | null = null;

/**
 * @summary Encodes a(n) RelationshipChangeInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelationshipChangeInfo, encoded as an ASN.1 Element.
 */
export function _encode_RelationshipChangeInfo(
    value: RelationshipChangeInfo,
    elGetter: $.ASN1Encoder<RelationshipChangeInfo>
): _Element {
    if (!_cached_encoder_for_RelationshipChangeInfo) {
        _cached_encoder_for_RelationshipChangeInfo = function (
            value: RelationshipChangeInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.sourceIndicator === undefined
                            ? undefined
                            : _encode_SourceIndicator(
                                  value.sourceIndicator,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.attributeIdentifierList ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_AttributeIdentifierList,
                                  $.BER
                              )(value.attributeIdentifierList, $.BER),
                        /* REQUIRED   */ _encode_AttributeValueChangeDefinition(
                            value.relationshipChangeDefinition,
                            $.BER
                        ),
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
                                  2,
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
                                  3,
                                  () => _encode_AdditionalInformation,
                                  $.BER
                              )(value.additionalInformation, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RelationshipChangeInfo(value, elGetter);
}


/* eslint-enable */
