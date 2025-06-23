/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ServiceControlOptions,
    _decode_ServiceControlOptions,
    _encode_ServiceControlOptions,
} from "../DirectoryAbstractService/ServiceControlOptions.ta.mjs";
import {
    ServiceControls_manageDSAITPlaneRef,
    _decode_ServiceControls_manageDSAITPlaneRef,
    _encode_ServiceControls_manageDSAITPlaneRef,
} from "../DirectoryAbstractService/ServiceControls-manageDSAITPlaneRef.ta.mjs";
import {
    medium /* IMPORTED_SHORT_NAMED_INTEGER */,
    ServiceControls_priority,
    _decode_ServiceControls_priority,
    _encode_ServiceControls_priority,
} from "../DirectoryAbstractService/ServiceControls-priority.ta.mjs";
import {
    ServiceControls_scopeOfReferral,
    _decode_ServiceControls_scopeOfReferral,
    _encode_ServiceControls_scopeOfReferral,
} from "../DirectoryAbstractService/ServiceControls-scopeOfReferral.ta.mjs";
/**
 * @summary ServiceControls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceControls ::= SET {
 *   options              [0]  ServiceControlOptions DEFAULT {},
 *   priority             [1]  INTEGER {low(0), medium(1), high(2)} DEFAULT medium,
 *   timeLimit            [2]  INTEGER OPTIONAL,
 *   sizeLimit            [3]  INTEGER OPTIONAL,
 *   scopeOfReferral      [4]  INTEGER {dmd(0), country(1)} OPTIONAL,
 *   attributeSizeLimit   [5]  INTEGER OPTIONAL,
 *   manageDSAITPlaneRef  [6]  SEQUENCE {
 *     dsaName                   Name,
 *     agreementID               AgreementID,
 *     ...} OPTIONAL,
 *   serviceType          [7]  OBJECT IDENTIFIER OPTIONAL,
 *   userClass            [8]  INTEGER OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class ServiceControls {
    constructor(
        /**
         * @summary `options`.
         * @public
         * @readonly
         */
        readonly options?: OPTIONAL<ServiceControlOptions>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority?: OPTIONAL<ServiceControls_priority>,
        /**
         * @summary `timeLimit`.
         * @public
         * @readonly
         */
        readonly timeLimit?: OPTIONAL<INTEGER>,
        /**
         * @summary `sizeLimit`.
         * @public
         * @readonly
         */
        readonly sizeLimit?: OPTIONAL<INTEGER>,
        /**
         * @summary `scopeOfReferral`.
         * @public
         * @readonly
         */
        readonly scopeOfReferral?: OPTIONAL<ServiceControls_scopeOfReferral>,
        /**
         * @summary `attributeSizeLimit`.
         * @public
         * @readonly
         */
        readonly attributeSizeLimit?: OPTIONAL<INTEGER>,
        /**
         * @summary `manageDSAITPlaneRef`.
         * @public
         * @readonly
         */
        readonly manageDSAITPlaneRef?: OPTIONAL<ServiceControls_manageDSAITPlaneRef>,
        /**
         * @summary `serviceType`.
         * @public
         * @readonly
         */
        readonly serviceType?: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `userClass`.
         * @public
         * @readonly
         */
        readonly userClass?: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ServiceControls
     * @description
     *
     * This takes an `object` and converts it to a `ServiceControls`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceControls`.
     * @returns {ServiceControls}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof ServiceControls]: ServiceControls[_K] }>
    ): ServiceControls {
        return new ServiceControls(
            _o.options,
            _o.priority,
            _o.timeLimit,
            _o.sizeLimit,
            _o.scopeOfReferral,
            _o.attributeSizeLimit,
            _o.manageDSAITPlaneRef,
            _o.serviceType,
            _o.userClass,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `options`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_options() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority() {
        return medium;
    }
}

/**
 * @summary The Leading Root Component Types of ServiceControls
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ServiceControls: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "options",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "priority",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "timeLimit",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "sizeLimit",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "scopeOfReferral",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "attributeSizeLimit",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        "manageDSAITPlaneRef",
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        "serviceType",
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        "userClass",
        true,
        $.hasTag(_TagClass.context, 8)
    ),
];

/**
 * @summary The Trailing Root Component Types of ServiceControls
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ServiceControls: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ServiceControls
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ServiceControls: $.ComponentSpec[] = [];

let _cached_decoder_for_ServiceControls: $.ASN1Decoder<ServiceControls> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceControls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceControls} The decoded data structure.
 */
export function _decode_ServiceControls(el: _Element) {
    if (!_cached_decoder_for_ServiceControls) {
        _cached_decoder_for_ServiceControls = function (
            el: _Element
        ): ServiceControls {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let options: OPTIONAL<ServiceControlOptions> =
                ServiceControls._default_value_for_options;
            let priority: OPTIONAL<ServiceControls_priority> =
                ServiceControls._default_value_for_priority;
            let timeLimit: OPTIONAL<INTEGER>;
            let sizeLimit: OPTIONAL<INTEGER>;
            let scopeOfReferral: OPTIONAL<ServiceControls_scopeOfReferral>;
            let attributeSizeLimit: OPTIONAL<INTEGER>;
            let manageDSAITPlaneRef: OPTIONAL<ServiceControls_manageDSAITPlaneRef>;
            let serviceType: OPTIONAL<OBJECT_IDENTIFIER>;
            let userClass: OPTIONAL<INTEGER>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                options: (_el: _Element): void => {
                    options = $._decode_explicit<ServiceControlOptions>(
                        () => _decode_ServiceControlOptions
                    )(_el);
                },
                priority: (_el: _Element): void => {
                    priority = $._decode_explicit<ServiceControls_priority>(
                        () => _decode_ServiceControls_priority
                    )(_el);
                },
                timeLimit: (_el: _Element): void => {
                    timeLimit = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                sizeLimit: (_el: _Element): void => {
                    sizeLimit = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                scopeOfReferral: (_el: _Element): void => {
                    scopeOfReferral = $._decode_explicit<ServiceControls_scopeOfReferral>(
                        () => _decode_ServiceControls_scopeOfReferral
                    )(_el);
                },
                attributeSizeLimit: (_el: _Element): void => {
                    attributeSizeLimit = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                manageDSAITPlaneRef: (_el: _Element): void => {
                    manageDSAITPlaneRef = $._decode_explicit<ServiceControls_manageDSAITPlaneRef>(
                        () => _decode_ServiceControls_manageDSAITPlaneRef
                    )(_el);
                },
                serviceType: (_el: _Element): void => {
                    serviceType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                userClass: (_el: _Element): void => {
                    userClass = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ServiceControls,
                _extension_additions_list_spec_for_ServiceControls,
                _root_component_type_list_2_spec_for_ServiceControls,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new ServiceControls(
                /* SET_CONSTRUCTOR_CALL */ options,
                priority,
                timeLimit,
                sizeLimit,
                scopeOfReferral,
                attributeSizeLimit,
                manageDSAITPlaneRef,
                serviceType,
                userClass,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_ServiceControls(el);
}

let _cached_encoder_for_ServiceControls: $.ASN1Encoder<ServiceControls> | null = null;

/**
 * @summary Encodes a(n) ServiceControls into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceControls, encoded as an ASN.1 Element.
 */
export function _encode_ServiceControls(
    value: ServiceControls,
    elGetter: $.ASN1Encoder<ServiceControls>
) {
    if (!_cached_encoder_for_ServiceControls) {
        _cached_encoder_for_ServiceControls = function (
            value: ServiceControls        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.options === undefined ||
                            $.deepEq(
                                value.options,
                                ServiceControls._default_value_for_options
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_ServiceControlOptions,
                                      $.BER
                                  )(value.options, $.BER),
                            /* IF_DEFAULT */ value.priority === undefined ||
                            $.deepEq(
                                value.priority,
                                ServiceControls._default_value_for_priority
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_ServiceControls_priority,
                                      $.BER
                                  )(value.priority, $.BER),
                            /* IF_ABSENT  */ value.timeLimit === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.timeLimit, $.BER),
                            /* IF_ABSENT  */ value.sizeLimit === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.sizeLimit, $.BER),
                            /* IF_ABSENT  */ value.scopeOfReferral === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          _encode_ServiceControls_scopeOfReferral,
                                      $.BER
                                  )(value.scopeOfReferral, $.BER),
                            /* IF_ABSENT  */ value.attributeSizeLimit ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.attributeSizeLimit, $.BER),
                            /* IF_ABSENT  */ value.manageDSAITPlaneRef ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      6,
                                      () =>
                                          _encode_ServiceControls_manageDSAITPlaneRef,
                                      $.BER
                                  )(value.manageDSAITPlaneRef, $.BER),
                            /* IF_ABSENT  */ value.serviceType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      7,
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.serviceType, $.BER),
                            /* IF_ABSENT  */ value.userClass === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => $._encodeInteger,
                                      $.BER
                                  )(value.userClass, $.BER),
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
    return _cached_encoder_for_ServiceControls(value, elGetter);
}


/* eslint-enable */
