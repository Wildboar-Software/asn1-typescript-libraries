/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import {
    AccessPoint,
    _decode_AccessPoint,
    _encode_AccessPoint,
} from "../DistributedOperations/AccessPoint.ta.mjs";
import {
    Attribute,
    _decode_Attribute,
    _encode_Attribute,
} from "../InformationFramework/Attribute.ta.mjs";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../InformationFramework/DistinguishedName.ta.mjs";
import {
    EstablishOperationalBindingResultData_initiator,
    _decode_EstablishOperationalBindingResultData_initiator,
    _encode_EstablishOperationalBindingResultData_initiator,
} from "../OperationalBindingManagement/EstablishOperationalBindingResultData-initiator.ta.mjs";
import {
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta.mjs";
import {
    CommonResultsSeq,
    _root_component_type_list_1_spec_for_CommonResultsSeq,
} from "../DirectoryAbstractService/CommonResultsSeq.ta.mjs";

/**
 * @summary EstablishOperationalBindingResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EstablishOperationalBindingResultData ::= SEQUENCE {
 *   bindingType   [0]  OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   bindingID     [1]  OperationalBindingID OPTIONAL,
 *   accessPoint   [2]  AccessPoint,
 *   -- symmetric, Role A replies, or Role B replies
 *   initiator          CHOICE {
 *     symmetric     [3]  OPERATIONAL-BINDING.&both.&EstablishParam
 *                          ({OpBindingSet}{@bindingType}),
 *     roleA-replies [4]  OPERATIONAL-BINDING.&roleA.&EstablishParam
 *                          ({OpBindingSet}{@bindingType}),
 *     roleB-replies [5]  OPERATIONAL-BINDING.&roleB.&EstablishParam
 *                          ({OpBindingSet}{@bindingType})},
 *   ...,
 *   ...,
 *   COMPONENTS OF      CommonResultsSeq }
 * ```
 *
 */
export class EstablishOperationalBindingResultData implements CommonResultsSeq {
    constructor(
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OBJECT_IDENTIFIER,
        /**
         * @summary `bindingID`.
         * @public
         * @readonly
         */
        readonly bindingID: OPTIONAL<OperationalBindingID>,
        /**
         * @summary `accessPoint`.
         * @public
         * @readonly
         */
        readonly accessPoint: AccessPoint,
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: EstablishOperationalBindingResultData_initiator,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `securityParameters`.
         * @public
         * @readonly
         */
        readonly securityParameters?: OPTIONAL<SecurityParameters> /* REPLICATED_COMPONENT */,
        /**
         * @summary `performer`.
         * @public
         * @readonly
         */
        readonly performer?: OPTIONAL<DistinguishedName> /* REPLICATED_COMPONENT */,
        /**
         * @summary `aliasDereferenced`.
         * @public
         * @readonly
         */
        readonly aliasDereferenced?: OPTIONAL<BOOLEAN> /* REPLICATED_COMPONENT */,
        /**
         * @summary `notification`.
         * @public
         * @readonly
         */
        readonly notification?: OPTIONAL<Attribute[]> /* REPLICATED_COMPONENT */
    ) {}

    /**
     * @summary Restructures an object into a EstablishOperationalBindingResultData
     * @description
     *
     * This takes an `object` and converts it to a `EstablishOperationalBindingResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EstablishOperationalBindingResultData`.
     * @returns {EstablishOperationalBindingResultData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof EstablishOperationalBindingResultData]: EstablishOperationalBindingResultData[_K];
            }
        >
    ): EstablishOperationalBindingResultData {
        return new EstablishOperationalBindingResultData(
            _o.bindingType,
            _o.bindingID,
            _o.accessPoint,
            _o.initiator,
            _o._unrecognizedExtensionsList,
            _o.securityParameters,
            _o.performer,
            _o.aliasDereferenced,
            _o.notification
        );
    }

    /**
     * @summary Getter that returns the default value for `aliasDereferenced`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_aliasDereferenced(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of EstablishOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EstablishOperationalBindingResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "bindingID",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "accessPoint",
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec("initiator", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of EstablishOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EstablishOperationalBindingResultData: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonResultsSeq,
];

/**
 * @summary The Extension Addition Component Types of EstablishOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EstablishOperationalBindingResultData: $.ComponentSpec[] = [];

let _cached_decoder_for_EstablishOperationalBindingResultData: $.ASN1Decoder<EstablishOperationalBindingResultData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EstablishOperationalBindingResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EstablishOperationalBindingResultData} The decoded data structure.
 */
export function _decode_EstablishOperationalBindingResultData(el: _Element): EstablishOperationalBindingResultData {
    if (!_cached_decoder_for_EstablishOperationalBindingResultData) {
        _cached_decoder_for_EstablishOperationalBindingResultData = function (
            el: _Element
        ): EstablishOperationalBindingResultData {
            let bindingType!: OBJECT_IDENTIFIER;
            let bindingID: OPTIONAL<OperationalBindingID>;
            let accessPoint!: AccessPoint;
            let initiator!: EstablishOperationalBindingResultData_initiator;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                EstablishOperationalBindingResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            const callbacks: $.DecodingMap = {
                bindingType: (_el: _Element): void => {
                    bindingType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                bindingID: (_el: _Element): void => {
                    bindingID = $._decode_explicit<OperationalBindingID>(
                        () => _decode_OperationalBindingID
                    )(_el);
                },
                accessPoint: (_el: _Element): void => {
                    accessPoint = $._decode_explicit<AccessPoint>(
                        () => _decode_AccessPoint
                    )(_el);
                },
                initiator: (_el: _Element): void => {
                    initiator = _decode_EstablishOperationalBindingResultData_initiator(
                        _el
                    );
                },
                securityParameters: (_el: _Element): void => {
                    securityParameters = $._decode_explicit<SecurityParameters>(
                        () => _decode_SecurityParameters
                    )(_el);
                },
                performer: (_el: _Element): void => {
                    performer = $._decode_explicit<DistinguishedName>(
                        () => _decode_DistinguishedName
                    )(_el);
                },
                aliasDereferenced: (_el: _Element): void => {
                    aliasDereferenced = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                notification: (_el: _Element): void => {
                    notification = $._decode_explicit<Attribute[]>(() =>
                        $._decodeSequenceOf<Attribute>(() => _decode_Attribute)
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EstablishOperationalBindingResultData,
                _extension_additions_list_spec_for_EstablishOperationalBindingResultData,
                _root_component_type_list_2_spec_for_EstablishOperationalBindingResultData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EstablishOperationalBindingResultData(
                bindingType,
                bindingID,
                accessPoint,
                initiator,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_EstablishOperationalBindingResultData(el);
}

let _cached_encoder_for_EstablishOperationalBindingResultData: $.ASN1Encoder<EstablishOperationalBindingResultData> | null = null;

/**
 * @summary Encodes a(n) EstablishOperationalBindingResultData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EstablishOperationalBindingResultData, encoded as an ASN.1 Element.
 */
export function _encode_EstablishOperationalBindingResultData(
    value: EstablishOperationalBindingResultData,
    elGetter: $.ASN1Encoder<EstablishOperationalBindingResultData>
): _Element {
    if (!_cached_encoder_for_EstablishOperationalBindingResultData) {
        _cached_encoder_for_EstablishOperationalBindingResultData = function (
            value: EstablishOperationalBindingResultData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => $._encodeObjectIdentifier,
                                $.DER
                            )(value.bindingType, $.DER),
                            /* IF_ABSENT  */ value.bindingID === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_OperationalBindingID,
                                      $.DER
                                  )(value.bindingID, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => _encode_AccessPoint,
                                $.DER
                            )(value.accessPoint, $.DER),
                            /* REQUIRED   */ _encode_EstablishOperationalBindingResultData_initiator(
                                value.initiator,
                                $.DER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : [],
                        [
                            /* IF_ABSENT  */ value.securityParameters ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      30,
                                      () => _encode_SecurityParameters,
                                      $.DER
                                  )(value.securityParameters, $.DER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.DER
                                  )(value.performer, $.DER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                EstablishOperationalBindingResultData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.DER
                                  )(value.aliasDereferenced, $.DER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.notification, $.DER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_EstablishOperationalBindingResultData(
        value,
        elGetter
    );
}


/* eslint-enable */
