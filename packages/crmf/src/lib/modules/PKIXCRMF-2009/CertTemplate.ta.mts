/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Extensions.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "@wildboar/x500/src/lib/modules/InformationFramework/Name.ta.mjs";
import {
    SubjectPublicKeyInfo,
    _decode_SubjectPublicKeyInfo,
    _encode_SubjectPublicKeyInfo,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/UniqueIdentifier.ta.mjs";
import {
    Version,
    _decode_Version,
    _encode_Version,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/Version.ta.mjs";
import {
    OptionalValidity,
    _decode_OptionalValidity,
    _encode_OptionalValidity,
} from "../PKIXCRMF-2009/OptionalValidity.ta.mjs";


/**
 * @summary CertTemplate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertTemplate ::= SEQUENCE {
 *     version      [0] Version               OPTIONAL,
 *     serialNumber [1] INTEGER               OPTIONAL,
 *     signingAlg   [2] AlgorithmIdentifier{SIGNATURE-ALGORITHM,
 *                         {SignatureAlgorithms}}   OPTIONAL,
 *     issuer       [3] Name                  OPTIONAL,
 *     validity     [4] OptionalValidity      OPTIONAL,
 *     subject      [5] Name                  OPTIONAL,
 *     publicKey    [6] SubjectPublicKeyInfo  OPTIONAL,
 *     issuerUID    [7] UniqueIdentifier      OPTIONAL,
 *     subjectUID   [8] UniqueIdentifier      OPTIONAL,
 *     extensions   [9] Extensions{{CertExtensions}}  OPTIONAL }
 * ```
 *
 * @class
 */
export class CertTemplate {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<Version>,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `signingAlg`.
         * @public
         * @readonly
         */
        readonly signingAlg: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<Name>,
        /**
         * @summary `validity`.
         * @public
         * @readonly
         */
        readonly validity: OPTIONAL<OptionalValidity>,
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: OPTIONAL<Name>,
        /**
         * @summary `publicKey`.
         * @public
         * @readonly
         */
        readonly publicKey: OPTIONAL<SubjectPublicKeyInfo>,
        /**
         * @summary `issuerUID`.
         * @public
         * @readonly
         */
        readonly issuerUID: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary `subjectUID`.
         * @public
         * @readonly
         */
        readonly subjectUID: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a CertTemplate
     * @description
     *
     * This takes an `object` and converts it to a `CertTemplate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertTemplate`.
     * @returns {CertTemplate}
     */
    public static _from_object(
        _o: { [_K in keyof CertTemplate]: CertTemplate[_K] }
    ): CertTemplate {
        return new CertTemplate(
            _o.version,
            _o.serialNumber,
            _o.signingAlg,
            _o.issuer,
            _o.validity,
            _o.subject,
            _o.publicKey,
            _o.issuerUID,
            _o.subjectUID,
            _o.extensions
        );
    }
}


/**
 * @summary The Leading Root Component Types of CertTemplate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertTemplate: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "serialNumber",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "signingAlg",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "issuer",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "validity",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "subject",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        "publicKey",
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        "issuerUID",
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        "subjectUID",
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        "extensions",
        true,
        $.hasTag(_TagClass.context, 9)
    ),
];


/**
 * @summary The Trailing Root Component Types of CertTemplate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertTemplate: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CertTemplate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertTemplate: $.ComponentSpec[] = [];


let _cached_decoder_for_CertTemplate: $.ASN1Decoder<CertTemplate> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CertTemplate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertTemplate} The decoded data structure.
 */
export function _decode_CertTemplate(el: _Element) {
    if (!_cached_decoder_for_CertTemplate) {
        _cached_decoder_for_CertTemplate = function (
            el: _Element
        ): CertTemplate {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version: OPTIONAL<Version>;
            let serialNumber: OPTIONAL<INTEGER>;
            let signingAlg: OPTIONAL<AlgorithmIdentifier>;
            let issuer: OPTIONAL<Name>;
            let validity: OPTIONAL<OptionalValidity>;
            let subject: OPTIONAL<Name>;
            let publicKey: OPTIONAL<SubjectPublicKeyInfo>;
            let issuerUID: OPTIONAL<UniqueIdentifier>;
            let subjectUID: OPTIONAL<UniqueIdentifier>;
            let extensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = $._decode_implicit<Version>(
                        () => _decode_Version
                    )(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                signingAlg: (_el: _Element): void => {
                    signingAlg = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                validity: (_el: _Element): void => {
                    validity = $._decode_implicit<OptionalValidity>(
                        () => _decode_OptionalValidity
                    )(_el);
                },
                subject: (_el: _Element): void => {
                    subject = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                publicKey: (_el: _Element): void => {
                    publicKey = $._decode_implicit<SubjectPublicKeyInfo>(
                        () => _decode_SubjectPublicKeyInfo
                    )(_el);
                },
                issuerUID: (_el: _Element): void => {
                    issuerUID = $._decode_implicit<UniqueIdentifier>(
                        () => _decode_UniqueIdentifier
                    )(_el);
                },
                subjectUID: (_el: _Element): void => {
                    subjectUID = $._decode_implicit<UniqueIdentifier>(
                        () => _decode_UniqueIdentifier
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertTemplate,
                _extension_additions_list_spec_for_CertTemplate,
                _root_component_type_list_2_spec_for_CertTemplate,
                undefined
            );
            return new CertTemplate /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
                serialNumber,
                signingAlg,
                issuer,
                validity,
                subject,
                publicKey,
                issuerUID,
                subjectUID,
                extensions
            );
        };
    }
    return _cached_decoder_for_CertTemplate(el);
}


let _cached_encoder_for_CertTemplate: $.ASN1Encoder<CertTemplate> | null = null;


/**
 * @summary Encodes a(n) CertTemplate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertTemplate, encoded as an ASN.1 Element.
 */
export function _encode_CertTemplate(
    value: CertTemplate,
    elGetter: $.ASN1Encoder<CertTemplate>
) {
    if (!_cached_encoder_for_CertTemplate) {
        _cached_encoder_for_CertTemplate = function (
            value: CertTemplate        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.version === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Version,
                                  $.DER
                              )(value.version, $.DER),
                        /* IF_ABSENT  */ value.serialNumber === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.DER
                              )(value.serialNumber, $.DER),
                        /* IF_ABSENT  */ value.signingAlg === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_AlgorithmIdentifier,
                                  $.DER
                              )(value.signingAlg, $.DER),
                        /* IF_ABSENT  */ value.issuer === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Name,
                                  $.DER
                              )(value.issuer, $.DER),
                        /* IF_ABSENT  */ value.validity === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_OptionalValidity,
                                  $.DER
                              )(value.validity, $.DER),
                        /* IF_ABSENT  */ value.subject === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_Name,
                                  $.DER
                              )(value.subject, $.DER),
                        /* IF_ABSENT  */ value.publicKey === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_SubjectPublicKeyInfo,
                                  $.DER
                              )(value.publicKey, $.DER),
                        /* IF_ABSENT  */ value.issuerUID === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_UniqueIdentifier,
                                  $.DER
                              )(value.issuerUID, $.DER),
                        /* IF_ABSENT  */ value.subjectUID === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_UniqueIdentifier,
                                  $.DER
                              )(value.subjectUID, $.DER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_Extensions,
                                  $.DER
                              )(value.extensions, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_CertTemplate(value, elGetter);
}


/* eslint-enable */
