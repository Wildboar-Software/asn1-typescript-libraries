/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    BaseRevocationInfo,
    _decode_BaseRevocationInfo,
    _encode_BaseRevocationInfo,
} from "../CertificateExtensions/BaseRevocationInfo.ta.mjs";
import {
    DistributionPointName,
    _decode_DistributionPointName,
    _encode_DistributionPointName,
} from "../CertificateExtensions/DistributionPointName.ta.mjs";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "../CertificateExtensions/GeneralName.ta.mjs";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../CertificateExtensions/GeneralNames.ta.mjs";
import {
    NumberRange,
    _decode_NumberRange,
    _encode_NumberRange,
} from "../CertificateExtensions/NumberRange.ta.mjs";
import {
    OnlyCertificateTypes,
    _decode_OnlyCertificateTypes,
    _encode_OnlyCertificateTypes,
} from "../CertificateExtensions/OnlyCertificateTypes.ta.mjs";
import {
    ReasonFlags,
    _decode_ReasonFlags,
    _encode_ReasonFlags,
} from "../CertificateExtensions/ReasonFlags.ta.mjs";
/**
 * @summary PerAuthorityScope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerAuthorityScope ::= SEQUENCE {
 *   authorityName       [0]  GeneralName OPTIONAL,
 *   distributionPoint   [1]  DistributionPointName OPTIONAL,
 *   onlyContains        [2]  OnlyCertificateTypes OPTIONAL,
 *   onlySomeReasons     [4]  ReasonFlags OPTIONAL,
 *   serialNumberRange   [5]  NumberRange OPTIONAL,
 *   subjectKeyIdRange   [6]  NumberRange OPTIONAL,
 *   nameSubtrees        [7]  GeneralNames OPTIONAL,
 *   baseRevocationInfo  [9]  BaseRevocationInfo OPTIONAL,
 *   ... }
 * ```
 *
 */
export class PerAuthorityScope {
    constructor(
        /**
         * @summary `authorityName`.
         * @public
         * @readonly
         */
        readonly authorityName: OPTIONAL<GeneralName>,
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `onlyContains`.
         * @public
         * @readonly
         */
        readonly onlyContains: OPTIONAL<OnlyCertificateTypes>,
        /**
         * @summary `onlySomeReasons`.
         * @public
         * @readonly
         */
        readonly onlySomeReasons: OPTIONAL<ReasonFlags>,
        /**
         * @summary `serialNumberRange`.
         * @public
         * @readonly
         */
        readonly serialNumberRange: OPTIONAL<NumberRange>,
        /**
         * @summary `subjectKeyIdRange`.
         * @public
         * @readonly
         */
        readonly subjectKeyIdRange: OPTIONAL<NumberRange>,
        /**
         * @summary `nameSubtrees`.
         * @public
         * @readonly
         */
        readonly nameSubtrees: OPTIONAL<GeneralNames>,
        /**
         * @summary `baseRevocationInfo`.
         * @public
         * @readonly
         */
        readonly baseRevocationInfo: OPTIONAL<BaseRevocationInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PerAuthorityScope
     * @description
     *
     * This takes an `object` and converts it to a `PerAuthorityScope`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PerAuthorityScope`.
     * @returns {PerAuthorityScope}
     */
    public static _from_object(
        _o: { [_K in keyof PerAuthorityScope]: PerAuthorityScope[_K] }
    ): PerAuthorityScope {
        return new PerAuthorityScope(
            _o.authorityName,
            _o.distributionPoint,
            _o.onlyContains,
            _o.onlySomeReasons,
            _o.serialNumberRange,
            _o.subjectKeyIdRange,
            _o.nameSubtrees,
            _o.baseRevocationInfo,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of PerAuthorityScope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PerAuthorityScope: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "authorityName",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "onlyContains",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "onlySomeReasons",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "serialNumberRange",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        "subjectKeyIdRange",
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        "nameSubtrees",
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        "baseRevocationInfo",
        true,
        $.hasTag(_TagClass.context, 9)
    ),
];

/**
 * @summary The Trailing Root Component Types of PerAuthorityScope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PerAuthorityScope: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of PerAuthorityScope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PerAuthorityScope: $.ComponentSpec[] = [];

let _cached_decoder_for_PerAuthorityScope: $.ASN1Decoder<PerAuthorityScope> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PerAuthorityScope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PerAuthorityScope} The decoded data structure.
 */
export function _decode_PerAuthorityScope(el: _Element): PerAuthorityScope {
    if (!_cached_decoder_for_PerAuthorityScope) {
        _cached_decoder_for_PerAuthorityScope = function (
            el: _Element
        ): PerAuthorityScope {
            let authorityName: OPTIONAL<GeneralName>;
            let distributionPoint: OPTIONAL<DistributionPointName>;
            let onlyContains: OPTIONAL<OnlyCertificateTypes>;
            let onlySomeReasons: OPTIONAL<ReasonFlags>;
            let serialNumberRange: OPTIONAL<NumberRange>;
            let subjectKeyIdRange: OPTIONAL<NumberRange>;
            let nameSubtrees: OPTIONAL<GeneralNames>;
            let baseRevocationInfo: OPTIONAL<BaseRevocationInfo>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                authorityName: (_el: _Element): void => {
                    authorityName = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = $._decode_explicit<DistributionPointName>(
                        () => _decode_DistributionPointName
                    )(_el);
                },
                onlyContains: (_el: _Element): void => {
                    onlyContains = $._decode_implicit<OnlyCertificateTypes>(
                        () => _decode_OnlyCertificateTypes
                    )(_el);
                },
                onlySomeReasons: (_el: _Element): void => {
                    onlySomeReasons = $._decode_implicit<ReasonFlags>(
                        () => _decode_ReasonFlags
                    )(_el);
                },
                serialNumberRange: (_el: _Element): void => {
                    serialNumberRange = $._decode_implicit<NumberRange>(
                        () => _decode_NumberRange
                    )(_el);
                },
                subjectKeyIdRange: (_el: _Element): void => {
                    subjectKeyIdRange = $._decode_implicit<NumberRange>(
                        () => _decode_NumberRange
                    )(_el);
                },
                nameSubtrees: (_el: _Element): void => {
                    nameSubtrees = $._decode_implicit<GeneralNames>(
                        () => _decode_GeneralNames
                    )(_el);
                },
                baseRevocationInfo: (_el: _Element): void => {
                    baseRevocationInfo = $._decode_implicit<BaseRevocationInfo>(
                        () => _decode_BaseRevocationInfo
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PerAuthorityScope,
                _extension_additions_list_spec_for_PerAuthorityScope,
                _root_component_type_list_2_spec_for_PerAuthorityScope,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new PerAuthorityScope(
                authorityName,
                distributionPoint,
                onlyContains,
                onlySomeReasons,
                serialNumberRange,
                subjectKeyIdRange,
                nameSubtrees,
                baseRevocationInfo,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_PerAuthorityScope(el);
}

let _cached_encoder_for_PerAuthorityScope: $.ASN1Encoder<PerAuthorityScope> | null = null;

/**
 * @summary Encodes a(n) PerAuthorityScope into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PerAuthorityScope, encoded as an ASN.1 Element.
 */
export function _encode_PerAuthorityScope(
    value: PerAuthorityScope,
    elGetter: $.ASN1Encoder<PerAuthorityScope>
): _Element {
    if (!_cached_encoder_for_PerAuthorityScope) {
        _cached_encoder_for_PerAuthorityScope = function (
            value: PerAuthorityScope        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.authorityName === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_GeneralName,
                                      $.DER
                                  )(value.authorityName, $.DER),
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DistributionPointName,
                                      $.DER
                                  )(value.distributionPoint, $.DER),
                            /* IF_ABSENT  */ value.onlyContains === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_OnlyCertificateTypes,
                                      $.DER
                                  )(value.onlyContains, $.DER),
                            /* IF_ABSENT  */ value.onlySomeReasons === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_ReasonFlags,
                                      $.DER
                                  )(value.onlySomeReasons, $.DER),
                            /* IF_ABSENT  */ value.serialNumberRange ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_NumberRange,
                                      $.DER
                                  )(value.serialNumberRange, $.DER),
                            /* IF_ABSENT  */ value.subjectKeyIdRange ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      6,
                                      () => _encode_NumberRange,
                                      $.DER
                                  )(value.subjectKeyIdRange, $.DER),
                            /* IF_ABSENT  */ value.nameSubtrees === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_GeneralNames,
                                      $.DER
                                  )(value.nameSubtrees, $.DER),
                            /* IF_ABSENT  */ value.baseRevocationInfo ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_BaseRevocationInfo,
                                      $.DER
                                  )(value.baseRevocationInfo, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_PerAuthorityScope(value, elGetter);
}


/* eslint-enable */
