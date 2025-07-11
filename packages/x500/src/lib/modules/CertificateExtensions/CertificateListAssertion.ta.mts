/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta.mjs";
import {
    AuthorityKeyIdentifier,
    _decode_AuthorityKeyIdentifier,
    _encode_AuthorityKeyIdentifier,
} from "../CertificateExtensions/AuthorityKeyIdentifier.ta.mjs";
import {
    CRLNumber,
    _decode_CRLNumber,
    _encode_CRLNumber,
} from "../CertificateExtensions/CRLNumber.ta.mjs";
import {
    DistributionPointName,
    _decode_DistributionPointName,
    _encode_DistributionPointName,
} from "../CertificateExtensions/DistributionPointName.ta.mjs";
import {
    ReasonFlags,
    _decode_ReasonFlags,
    _encode_ReasonFlags,
} from "../CertificateExtensions/ReasonFlags.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary CertificateListAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateListAssertion ::= SEQUENCE {
 *   issuer                       Name                   OPTIONAL,
 *   minCRLNumber            [0]  CRLNumber              OPTIONAL,
 *   maxCRLNumber            [1]  CRLNumber              OPTIONAL,
 *   reasonFlags                  ReasonFlags            OPTIONAL,
 *   dateAndTime                  Time                   OPTIONAL,
 *   distributionPoint       [2]  DistributionPointName  OPTIONAL,
 *   authorityKeyIdentifier  [3]  AuthorityKeyIdentifier OPTIONAL,
 *   ... }
 * ```
 *
 */
export class CertificateListAssertion {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<Name>,
        /**
         * @summary `minCRLNumber`.
         * @public
         * @readonly
         */
        readonly minCRLNumber: OPTIONAL<CRLNumber>,
        /**
         * @summary `maxCRLNumber`.
         * @public
         * @readonly
         */
        readonly maxCRLNumber: OPTIONAL<CRLNumber>,
        /**
         * @summary `reasonFlags`.
         * @public
         * @readonly
         */
        readonly reasonFlags: OPTIONAL<ReasonFlags>,
        /**
         * @summary `dateAndTime`.
         * @public
         * @readonly
         */
        readonly dateAndTime: OPTIONAL<Time>,
        /**
         * @summary `distributionPoint`.
         * @public
         * @readonly
         */
        readonly distributionPoint: OPTIONAL<DistributionPointName>,
        /**
         * @summary `authorityKeyIdentifier`.
         * @public
         * @readonly
         */
        readonly authorityKeyIdentifier: OPTIONAL<AuthorityKeyIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificateListAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificateListAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateListAssertion`.
     * @returns {CertificateListAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificateListAssertion]: CertificateListAssertion[_K];
            }
        >
    ): CertificateListAssertion {
        return new CertificateListAssertion(
            _o.issuer,
            _o.minCRLNumber,
            _o.maxCRLNumber,
            _o.reasonFlags,
            _o.dateAndTime,
            _o.distributionPoint,
            _o.authorityKeyIdentifier,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertificateListAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateListAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'issuer',
        true,
        $.or($.hasTag(_TagClass.universal, 16))
    ),
    new $.ComponentSpec(
        "minCRLNumber",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "maxCRLNumber",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "reasonFlags",
        true,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        'dateAndTime',
        true,
        $.or(
            $.hasTag(_TagClass.universal, 23),
            $.hasTag(_TagClass.universal, 24)
        )
    ),
    new $.ComponentSpec(
        "distributionPoint",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "authorityKeyIdentifier",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertificateListAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateListAssertion: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertificateListAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateListAssertion: $.ComponentSpec[] = [];

let _cached_decoder_for_CertificateListAssertion: $.ASN1Decoder<CertificateListAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateListAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateListAssertion} The decoded data structure.
 */
export function _decode_CertificateListAssertion(el: _Element): CertificateListAssertion {
    if (!_cached_decoder_for_CertificateListAssertion) {
        _cached_decoder_for_CertificateListAssertion = function (
            el: _Element
        ): CertificateListAssertion {
            let issuer: OPTIONAL<Name>;
            let minCRLNumber: OPTIONAL<CRLNumber>;
            let maxCRLNumber: OPTIONAL<CRLNumber>;
            let reasonFlags: OPTIONAL<ReasonFlags>;
            let dateAndTime: OPTIONAL<Time>;
            let distributionPoint: OPTIONAL<DistributionPointName>;
            let authorityKeyIdentifier: OPTIONAL<AuthorityKeyIdentifier>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                issuer: (_el: _Element): void => {
                    issuer = _decode_Name(_el);
                },
                minCRLNumber: (_el: _Element): void => {
                    minCRLNumber = $._decode_implicit<CRLNumber>(
                        () => _decode_CRLNumber
                    )(_el);
                },
                maxCRLNumber: (_el: _Element): void => {
                    maxCRLNumber = $._decode_implicit<CRLNumber>(
                        () => _decode_CRLNumber
                    )(_el);
                },
                reasonFlags: (_el: _Element): void => {
                    reasonFlags = _decode_ReasonFlags(_el);
                },
                dateAndTime: (_el: _Element): void => {
                    dateAndTime = _decode_Time(_el);
                },
                distributionPoint: (_el: _Element): void => {
                    distributionPoint = $._decode_explicit<DistributionPointName>(
                        () => _decode_DistributionPointName
                    )(_el);
                },
                authorityKeyIdentifier: (_el: _Element): void => {
                    authorityKeyIdentifier = $._decode_implicit<AuthorityKeyIdentifier>(
                        () => _decode_AuthorityKeyIdentifier
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateListAssertion,
                _extension_additions_list_spec_for_CertificateListAssertion,
                _root_component_type_list_2_spec_for_CertificateListAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificateListAssertion(
                issuer,
                minCRLNumber,
                maxCRLNumber,
                reasonFlags,
                dateAndTime,
                distributionPoint,
                authorityKeyIdentifier,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificateListAssertion(el);
}

let _cached_encoder_for_CertificateListAssertion: $.ASN1Encoder<CertificateListAssertion> | null = null;

/**
 * @summary Encodes a(n) CertificateListAssertion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateListAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificateListAssertion(
    value: CertificateListAssertion,
    elGetter: $.ASN1Encoder<CertificateListAssertion>
): _Element {
    if (!_cached_encoder_for_CertificateListAssertion) {
        _cached_encoder_for_CertificateListAssertion = function (
            value: CertificateListAssertion        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : _encode_Name(value.issuer, $.DER),
                            /* IF_ABSENT  */ value.minCRLNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CRLNumber,
                                      $.DER
                                  )(value.minCRLNumber, $.DER),
                            /* IF_ABSENT  */ value.maxCRLNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_CRLNumber,
                                      $.DER
                                  )(value.maxCRLNumber, $.DER),
                            /* IF_ABSENT  */ value.reasonFlags === undefined
                                ? undefined
                                : _encode_ReasonFlags(value.reasonFlags, $.DER),
                            /* IF_ABSENT  */ value.dateAndTime === undefined
                                ? undefined
                                : _encode_Time(value.dateAndTime, $.DER),
                            /* IF_ABSENT  */ value.distributionPoint ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_DistributionPointName,
                                      $.DER
                                  )(value.distributionPoint, $.DER),
                            /* IF_ABSENT  */ value.authorityKeyIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AuthorityKeyIdentifier,
                                      $.DER
                                  )(value.authorityKeyIdentifier, $.DER),
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
    return _cached_encoder_for_CertificateListAssertion(value, elGetter);
}


/* eslint-enable */
