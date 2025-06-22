/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    GeneralizedTime,
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
    OperationalBindingID,
    _decode_OperationalBindingID,
    _encode_OperationalBindingID,
} from "../OperationalBindingManagement/OperationalBindingID.ta.mjs";
import {
    CommonResultsSeq,
    _root_component_type_list_1_spec_for_CommonResultsSeq,
} from "../DirectoryAbstractService/CommonResultsSeq.ta.mjs";

/**
 * @summary TerminateOperationalBindingResultData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TerminateOperationalBindingResultData ::= SEQUENCE {
 *   bindingID       OperationalBindingID,
 *   bindingType     OPERATIONAL-BINDING.&id({OpBindingSet}),
 *   terminateAt     GeneralizedTime OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF   CommonResultsSeq }
 * ```
 *
 * @class
 */
export class TerminateOperationalBindingResultData implements CommonResultsSeq {
    constructor(
        /**
         * @summary `bindingID`.
         * @public
         * @readonly
         */
        readonly bindingID: OperationalBindingID,
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType: OBJECT_IDENTIFIER,
        /**
         * @summary `terminateAt`.
         * @public
         * @readonly
         */
        readonly terminateAt?: OPTIONAL<GeneralizedTime>,
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
     * @summary Restructures an object into a TerminateOperationalBindingResultData
     * @description
     *
     * This takes an `object` and converts it to a `TerminateOperationalBindingResultData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TerminateOperationalBindingResultData`.
     * @returns {TerminateOperationalBindingResultData}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof TerminateOperationalBindingResultData]: TerminateOperationalBindingResultData[_K];
            }
        >
    ): TerminateOperationalBindingResultData {
        return new TerminateOperationalBindingResultData(
            _o.bindingID,
            _o.bindingType,
            _o.terminateAt,
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
    public static get _default_value_for_aliasDereferenced() {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of TerminateOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TerminateOperationalBindingResultData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "bindingID",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "bindingType",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "terminateAt",
        true,
        $.hasTag(_TagClass.universal, 24)
    ),
];

/**
 * @summary The Trailing Root Component Types of TerminateOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TerminateOperationalBindingResultData: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonResultsSeq,
];

/**
 * @summary The Extension Addition Component Types of TerminateOperationalBindingResultData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TerminateOperationalBindingResultData: $.ComponentSpec[] = [];

let _cached_decoder_for_TerminateOperationalBindingResultData: $.ASN1Decoder<TerminateOperationalBindingResultData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TerminateOperationalBindingResultData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TerminateOperationalBindingResultData} The decoded data structure.
 */
export function _decode_TerminateOperationalBindingResultData(el: _Element) {
    if (!_cached_decoder_for_TerminateOperationalBindingResultData) {
        _cached_decoder_for_TerminateOperationalBindingResultData = function (
            el: _Element
        ): TerminateOperationalBindingResultData {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let bindingID!: OperationalBindingID;
            let bindingType!: OBJECT_IDENTIFIER;
            let terminateAt: OPTIONAL<GeneralizedTime>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                TerminateOperationalBindingResultData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                bindingID: (_el: _Element): void => {
                    bindingID = _decode_OperationalBindingID(_el);
                },
                bindingType: (_el: _Element): void => {
                    bindingType = $._decodeObjectIdentifier(_el);
                },
                terminateAt: (_el: _Element): void => {
                    terminateAt = $._decodeGeneralizedTime(_el);
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
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TerminateOperationalBindingResultData,
                _extension_additions_list_spec_for_TerminateOperationalBindingResultData,
                _root_component_type_list_2_spec_for_TerminateOperationalBindingResultData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new TerminateOperationalBindingResultData(
                /* SEQUENCE_CONSTRUCTOR_CALL */ bindingID,
                bindingType,
                terminateAt,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_TerminateOperationalBindingResultData(el);
}

let _cached_encoder_for_TerminateOperationalBindingResultData: $.ASN1Encoder<TerminateOperationalBindingResultData> | null = null;

/**
 * @summary Encodes a(n) TerminateOperationalBindingResultData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TerminateOperationalBindingResultData, encoded as an ASN.1 Element.
 */
export function _encode_TerminateOperationalBindingResultData(
    value: TerminateOperationalBindingResultData,
    elGetter: $.ASN1Encoder<TerminateOperationalBindingResultData>
) {
    if (!_cached_encoder_for_TerminateOperationalBindingResultData) {
        _cached_encoder_for_TerminateOperationalBindingResultData = function (
            value: TerminateOperationalBindingResultData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_OperationalBindingID(
                                value.bindingID,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.bindingType,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.terminateAt === undefined
                                ? undefined
                                : $._encodeGeneralizedTime(
                                      value.terminateAt,
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
                                TerminateOperationalBindingResultData._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_TerminateOperationalBindingResultData(
        value,
        elGetter
    );
}


/* eslint-enable */
