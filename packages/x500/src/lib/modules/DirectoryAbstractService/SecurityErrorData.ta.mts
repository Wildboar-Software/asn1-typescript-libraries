/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EncPwdInfo,
    _decode_EncPwdInfo,
    _encode_EncPwdInfo,
} from "../DirectoryAbstractService/EncPwdInfo.ta.mjs";
import {
    SecurityParameters,
    _decode_SecurityParameters,
    _encode_SecurityParameters,
} from "../DirectoryAbstractService/SecurityParameters.ta.mjs";
import {
    SecurityProblem,
    _decode_SecurityProblem,
    _encode_SecurityProblem,
} from "../DirectoryAbstractService/SecurityProblem.ta.mjs";
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
    SPKM_ERROR,
    _decode_SPKM_ERROR,
    _encode_SPKM_ERROR,
} from "../SpkmGssTokens/SPKM-ERROR.ta.mjs";
import {
    CommonResults,
    _root_component_type_list_1_spec_for_CommonResults,
    _root_component_type_list_2_spec_for_CommonResults,
    _extension_additions_list_spec_for_CommonResults,
} from "../DirectoryAbstractService/CommonResults.ta.mjs";

/**
 * @summary SecurityErrorData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityErrorData ::= SET {
 *   problem      [0]  SecurityProblem,
 *   spkmInfo     [1]  SPKM-ERROR OPTIONAL,
 *   encPwdInfo   [2]  EncPwdInfo OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF CommonResults }
 * ```
 *
 */
export class SecurityErrorData implements CommonResults {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: SecurityProblem,
        /**
         * @summary `spkmInfo`.
         * @public
         * @readonly
         */
        readonly spkmInfo?: OPTIONAL<SPKM_ERROR>,
        /**
         * @summary `encPwdInfo`.
         * @public
         * @readonly
         */
        readonly encPwdInfo?: OPTIONAL<EncPwdInfo>,
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
     * @summary Restructures an object into a SecurityErrorData
     * @description
     *
     * This takes an `object` and converts it to a `SecurityErrorData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SecurityErrorData`.
     * @returns {SecurityErrorData}
     */
    public static _from_object(
        _o: { [_K in keyof SecurityErrorData]: SecurityErrorData[_K] }
    ): SecurityErrorData {
        return new SecurityErrorData(
            _o.problem,
            _o.spkmInfo,
            _o.encPwdInfo,
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
 * @summary The Leading Root Component Types of SecurityErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SecurityErrorData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "problem",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "spkmInfo",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "encPwdInfo",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    ..._root_component_type_list_1_spec_for_CommonResults,
];

/**
 * @summary The Trailing Root Component Types of SecurityErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SecurityErrorData: $.ComponentSpec[] = [
    ..._root_component_type_list_2_spec_for_CommonResults,
];

/**
 * @summary The Extension Addition Component Types of SecurityErrorData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SecurityErrorData: $.ComponentSpec[] = [
    ..._extension_additions_list_spec_for_CommonResults,
];

let _cached_decoder_for_SecurityErrorData: $.ASN1Decoder<SecurityErrorData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityErrorData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityErrorData} The decoded data structure.
 */
export function _decode_SecurityErrorData(el: _Element): SecurityErrorData {
    if (!_cached_decoder_for_SecurityErrorData) {
        _cached_decoder_for_SecurityErrorData = function (
            el: _Element
        ): SecurityErrorData {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let problem!: SecurityProblem;
            let spkmInfo: OPTIONAL<SPKM_ERROR>;
            let encPwdInfo: OPTIONAL<EncPwdInfo>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                SecurityErrorData._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<SecurityProblem>(
                        () => _decode_SecurityProblem
                    )(_el);
                },
                spkmInfo: (_el: _Element): void => {
                    spkmInfo = $._decode_explicit<SPKM_ERROR>(
                        () => _decode_SPKM_ERROR
                    )(_el);
                },
                encPwdInfo: (_el: _Element): void => {
                    encPwdInfo = $._decode_explicit<EncPwdInfo>(
                        () => _decode_EncPwdInfo
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
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SecurityErrorData,
                _extension_additions_list_spec_for_SecurityErrorData,
                _root_component_type_list_2_spec_for_SecurityErrorData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SecurityErrorData(
                /* SET_CONSTRUCTOR_CALL */ problem,
                spkmInfo,
                encPwdInfo,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_SecurityErrorData(el);
}

let _cached_encoder_for_SecurityErrorData: $.ASN1Encoder<SecurityErrorData> | null = null;

/**
 * @summary Encodes a(n) SecurityErrorData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityErrorData, encoded as an ASN.1 Element.
 */
export function _encode_SecurityErrorData(
    value: SecurityErrorData,
    elGetter: $.ASN1Encoder<SecurityErrorData>
): _Element {
    if (!_cached_encoder_for_SecurityErrorData) {
        _cached_encoder_for_SecurityErrorData = function (
            value: SecurityErrorData        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_SecurityProblem,
                                $.BER
                            )(value.problem, $.BER),
                            /* IF_ABSENT  */ value.spkmInfo === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_SPKM_ERROR,
                                      $.BER
                                  )(value.spkmInfo, $.BER),
                            /* IF_ABSENT  */ value.encPwdInfo === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_EncPwdInfo,
                                      $.BER
                                  )(value.encPwdInfo, $.BER),
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
                                SecurityErrorData._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_SecurityErrorData(value, elGetter);
}


/* eslint-enable */
