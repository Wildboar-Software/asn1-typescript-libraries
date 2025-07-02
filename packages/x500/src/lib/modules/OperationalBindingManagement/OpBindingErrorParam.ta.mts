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
    OpBindingErrorParam_problem,
    _decode_OpBindingErrorParam_problem,
    _encode_OpBindingErrorParam_problem,
    _enum_for_OpBindingErrorParam_problem,
} from "../OperationalBindingManagement/OpBindingErrorParam-problem.ta.mjs";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../OperationalBindingManagement/Time.ta.mjs";
import {
    CommonResultsSeq,
    _root_component_type_list_1_spec_for_CommonResultsSeq,
} from "../DirectoryAbstractService/CommonResultsSeq.ta.mjs";

/**
 * @summary OpBindingErrorParam
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OpBindingErrorParam ::= SEQUENCE {
 *   problem            [0]  ENUMERATED {
 *     invalidID              (0),
 *     duplicateID            (1),
 *     unsupportedBindingType (2),
 *     notAllowedForRole      (3),
 *     parametersMissing      (4),
 *     roleAssignment         (5),
 *     invalidStartTime       (6),
 *     invalidEndTime         (7),
 *     invalidAgreement       (8),
 *     currentlyNotDecidable  (9),
 *     modificationNotAllowed (10),
 *     invalidBindingType     (11),
 *     invalidNewID           (12),
 *     ... },
 *   bindingType        [1]  OPERATIONAL-BINDING.&id({OpBindingSet}) OPTIONAL,
 *   agreementProposal  [2]  OPERATIONAL-BINDING.&Agreement
 *                           ({OpBindingSet}{@bindingType}) OPTIONAL,
 *   retryAt            [3]  Time OPTIONAL,
 *   ...,
 *   ...,
 *   COMPONENTS OF           CommonResultsSeq }
 * ```
 *
 */
export class OpBindingErrorParam implements CommonResultsSeq {
    constructor(
        /**
         * @summary `problem`.
         * @public
         * @readonly
         */
        readonly problem: OpBindingErrorParam_problem,
        /**
         * @summary `bindingType`.
         * @public
         * @readonly
         */
        readonly bindingType?: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `agreementProposal`.
         * @public
         * @readonly
         */
        readonly agreementProposal?: OPTIONAL<_Element>,
        /**
         * @summary `retryAt`.
         * @public
         * @readonly
         */
        readonly retryAt?: OPTIONAL<Time>,
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
     * @summary Restructures an object into a OpBindingErrorParam
     * @description
     *
     * This takes an `object` and converts it to a `OpBindingErrorParam`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OpBindingErrorParam`.
     * @returns {OpBindingErrorParam}
     */
    public static _from_object(
        _o: { [_K in keyof OpBindingErrorParam]: OpBindingErrorParam[_K] }
    ): OpBindingErrorParam {
        return new OpBindingErrorParam(
            _o.problem,
            _o.bindingType,
            _o.agreementProposal,
            _o.retryAt,
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
    /**
     * @summary The enum used as the type of the component `problem`
     * @public
     * @static
     */

    public static _enum_for_problem = _enum_for_OpBindingErrorParam_problem;
}

/**
 * @summary The Leading Root Component Types of OpBindingErrorParam
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_OpBindingErrorParam: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "problem",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "bindingType",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "agreementProposal",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "retryAt",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of OpBindingErrorParam
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_OpBindingErrorParam: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_CommonResultsSeq,
];

/**
 * @summary The Extension Addition Component Types of OpBindingErrorParam
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_OpBindingErrorParam: $.ComponentSpec[] = [];

let _cached_decoder_for_OpBindingErrorParam: $.ASN1Decoder<OpBindingErrorParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OpBindingErrorParam
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OpBindingErrorParam} The decoded data structure.
 */
export function _decode_OpBindingErrorParam(el: _Element): OpBindingErrorParam {
    if (!_cached_decoder_for_OpBindingErrorParam) {
        _cached_decoder_for_OpBindingErrorParam = function (
            el: _Element
        ): OpBindingErrorParam {
            let problem!: OpBindingErrorParam_problem;
            let bindingType: OPTIONAL<OBJECT_IDENTIFIER>;
            let agreementProposal: OPTIONAL<_Element>;
            let retryAt: OPTIONAL<Time>;
            let _unrecognizedExtensionsList: _Element[] = [];
            let securityParameters: OPTIONAL<SecurityParameters>;
            let performer: OPTIONAL<DistinguishedName>;
            let aliasDereferenced: OPTIONAL<BOOLEAN> =
                OpBindingErrorParam._default_value_for_aliasDereferenced;
            let notification: OPTIONAL<Attribute[]>;
            const callbacks: $.DecodingMap = {
                problem: (_el: _Element): void => {
                    problem = $._decode_explicit<OpBindingErrorParam_problem>(
                        () => _decode_OpBindingErrorParam_problem
                    )(_el);
                },
                bindingType: (_el: _Element): void => {
                    bindingType = $._decode_explicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                agreementProposal: (_el: _Element): void => {
                    agreementProposal = $._decode_explicit<_Element>(
                        () => $._decodeAny
                    )(_el);
                },
                retryAt: (_el: _Element): void => {
                    retryAt = $._decode_explicit<Time>(() => _decode_Time)(_el);
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
                _root_component_type_list_1_spec_for_OpBindingErrorParam,
                _extension_additions_list_spec_for_OpBindingErrorParam,
                _root_component_type_list_2_spec_for_OpBindingErrorParam,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new OpBindingErrorParam(
                problem,
                bindingType,
                agreementProposal,
                retryAt,
                _unrecognizedExtensionsList,
                securityParameters,
                performer,
                aliasDereferenced,
                notification
            );
        };
    }
    return _cached_decoder_for_OpBindingErrorParam(el);
}

let _cached_encoder_for_OpBindingErrorParam: $.ASN1Encoder<OpBindingErrorParam> | null = null;

/**
 * @summary Encodes a(n) OpBindingErrorParam into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OpBindingErrorParam, encoded as an ASN.1 Element.
 */
export function _encode_OpBindingErrorParam(
    value: OpBindingErrorParam,
    elGetter: $.ASN1Encoder<OpBindingErrorParam>
): _Element {
    if (!_cached_encoder_for_OpBindingErrorParam) {
        _cached_encoder_for_OpBindingErrorParam = function (
            value: OpBindingErrorParam        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                0,
                                () => _encode_OpBindingErrorParam_problem,
                                $.DER
                            )(value.problem, $.DER),
                            /* IF_ABSENT  */ value.bindingType === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeObjectIdentifier,
                                      $.DER
                                  )(value.bindingType, $.DER),
                            /* IF_ABSENT  */ value.agreementProposal ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => $._encodeAny,
                                      $.DER
                                  )(value.agreementProposal, $.DER),
                            /* IF_ABSENT  */ value.retryAt === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_Time,
                                      $.DER
                                  )(value.retryAt, $.DER),
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
                                OpBindingErrorParam._default_value_for_aliasDereferenced
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
    return _cached_encoder_for_OpBindingErrorParam(value, elGetter);
}


/* eslint-enable */
