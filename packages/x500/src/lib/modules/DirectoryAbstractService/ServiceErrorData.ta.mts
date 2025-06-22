/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import {
    ServiceProblem,
    _decode_ServiceProblem,
    _encode_ServiceProblem,
} from "../DirectoryAbstractService/ServiceProblem.ta.mjs";
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
    CommonResults,
    _root_component_type_list_1_spec_for_CommonResults,
    _root_component_type_list_2_spec_for_CommonResults,
    _extension_additions_list_spec_for_CommonResults,
} from "../DirectoryAbstractService/CommonResults.ta.mjs";

/**
 * @summary ServiceErrorData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceErrorData ::= SET {
 *   problem   [0]  ServiceProblem,
 *   ...,
 *   ...,
 *   COMPONENTS OF  CommonResults }
 * ```
 *
 * @class
 */
export class ServiceErrorData implements CommonResults {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: ServiceProblem,
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
     * @summary Restructures an object into a ServiceErrorData
     * @description
     *
     * This takes an `object` and converts it to a `ServiceErrorData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceErrorData`.
     * @returns {ServiceErrorData}
     */
    public static _from_object(
        _o: { [_K in keyof ServiceErrorData]: ServiceErrorData[_K] }
    ): ServiceErrorData {
        return new ServiceErrorData(
            _o.problem,
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
 * @summary The Leading Root Component Types of ServiceErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ServiceErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "problem",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of ServiceErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ServiceErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "securityParameters",
        true,
        $.hasTag(_TagClass.context, 30)
    ),
    new $.ComponentSpec(
        "performer",
        true,
        $.hasTag(_TagClass.context, 29)
    ),
    new $.ComponentSpec(
        "aliasDereferenced",
        true,
        $.hasTag(_TagClass.context, 28)
    ),
    new $.ComponentSpec(
        "notification",
        true,
        $.hasTag(_TagClass.context, 27)
    ),
];

/**
 * @summary The Extension Addition Component Types of ServiceErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ServiceErrorData: $.ComponentSpec[] = [];

let _cached_decoder_for_ServiceErrorData: $.ASN1Decoder<ServiceErrorData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceErrorData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceErrorData} The decoded data structure.
 */
export function _decode_ServiceErrorData(el: _Element) {
    if (!_cached_decoder_for_ServiceErrorData) {
        _cached_decoder_for_ServiceErrorData = function (
            el: _Element
        ): ServiceErrorData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: ServiceProblem;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                ServiceErrorData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<ServiceProblem>(
                        () => _decode_ServiceProblem
                    )(_el);
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
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ServiceErrorData,
                _extension_additions_list_spec_for_ServiceErrorData,
                _root_component_type_list_2_spec_for_ServiceErrorData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ServiceErrorData(
                /* SET_CONSTRUCTOR_CALL */ problem,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_ServiceErrorData(el);
}

let _cached_encoder_for_ServiceErrorData: $.ASN1Encoder<ServiceErrorData> | null = null;

/**
 * @summary Encodes a(n) ServiceErrorData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceErrorData, encoded as an ASN.1 Element.
 */
export function _encode_ServiceErrorData(
    value: ServiceErrorData,
    elGetter: $.ASN1Encoder<ServiceErrorData>
) {
    if (!_cached_encoder_for_ServiceErrorData) {
        _cached_encoder_for_ServiceErrorData = function (
            value: ServiceErrorData        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_ServiceProblem,
                                $.BER
                            )(value.problem, $.BER),
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
                                      $.BER
                                  )(value.securityParameters, $.BER),
                            /* IF_ABSENT  */ value.performer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      29,
                                      () => _encode_DistinguishedName,
                                      $.BER
                                  )(value.performer, $.BER),
                            /* IF_DEFAULT */ value.aliasDereferenced ===
                                undefined ||
                            $.deepEq(
                                value.aliasDereferenced,
                                ServiceErrorData._default_value_for_aliasDereferenced
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      28,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.aliasDereferenced, $.BER),
                            /* IF_ABSENT  */ value.notification === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      27,
                                      () =>
                                          $._encodeSequenceOf<Attribute>(
                                              () => _encode_Attribute,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.notification, $.BER),
                        ]
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ServiceErrorData(value, elGetter);
}


/* eslint-enable */
