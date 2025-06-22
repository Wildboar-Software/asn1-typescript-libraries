/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    GeneralizedTime,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import {
    Time,
    _decode_Time,
    _encode_Time,
} from "../AuthenticationFramework/Time.ta.mjs";
import {
    AltNameType,
    _decode_AltNameType,
    _encode_AltNameType,
} from "../CertificateExtensions/AltNameType.ta.mjs";
import {
    AuthorityKeyIdentifier,
    _decode_AuthorityKeyIdentifier,
    _encode_AuthorityKeyIdentifier,
} from "../CertificateExtensions/AuthorityKeyIdentifier.ta.mjs";
import {
    CertPolicySet,
    _decode_CertPolicySet,
    _encode_CertPolicySet,
} from "../CertificateExtensions/CertPolicySet.ta.mjs";
import {
    KeyUsage,
    _decode_KeyUsage,
    _encode_KeyUsage,
} from "../CertificateExtensions/KeyUsage.ta.mjs";
import {
    NameConstraintsSyntax,
    _decode_NameConstraintsSyntax,
    _encode_NameConstraintsSyntax,
} from "../CertificateExtensions/NameConstraintsSyntax.ta.mjs";
import {
    SubjectKeyIdentifier,
    _decode_SubjectKeyIdentifier,
    _encode_SubjectKeyIdentifier,
} from "../CertificateExtensions/SubjectKeyIdentifier.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary CertificateAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateAssertion ::= SEQUENCE {
 *   serialNumber            [0]  CertificateSerialNumber OPTIONAL,
 *   issuer                  [1]  Name OPTIONAL,
 *   subjectKeyIdentifier    [2]  SubjectKeyIdentifier OPTIONAL,
 *   authorityKeyIdentifier  [3]  AuthorityKeyIdentifier OPTIONAL,
 *   certificateValid        [4]  Time OPTIONAL,
 *   privateKeyValid         [5]  GeneralizedTime OPTIONAL,
 *   subjectPublicKeyAlgID   [6]  OBJECT IDENTIFIER OPTIONAL,
 *   keyUsage                [7]  KeyUsage OPTIONAL,
 *   subjectAltName          [8]  AltNameType OPTIONAL,
 *   policy                  [9]  CertPolicySet OPTIONAL,
 *   pathToName              [10] Name OPTIONAL,
 *   subject                 [11] Name OPTIONAL,
 *   nameConstraints         [12] NameConstraintsSyntax OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class CertificateAssertion {
    constructor(
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OPTIONAL<CertificateSerialNumber>,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<Name>,
        /**
         * @summary `subjectKeyIdentifier`.
         * @public
         * @readonly
         */
        readonly subjectKeyIdentifier: OPTIONAL<SubjectKeyIdentifier>,
        /**
         * @summary `authorityKeyIdentifier`.
         * @public
         * @readonly
         */
        readonly authorityKeyIdentifier: OPTIONAL<AuthorityKeyIdentifier>,
        /**
         * @summary `certificateValid`.
         * @public
         * @readonly
         */
        readonly certificateValid: OPTIONAL<Time>,
        /**
         * @summary `privateKeyValid`.
         * @public
         * @readonly
         */
        readonly privateKeyValid: OPTIONAL<GeneralizedTime>,
        /**
         * @summary `subjectPublicKeyAlgID`.
         * @public
         * @readonly
         */
        readonly subjectPublicKeyAlgID: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `keyUsage`.
         * @public
         * @readonly
         */
        readonly keyUsage: OPTIONAL<KeyUsage>,
        /**
         * @summary `subjectAltName`.
         * @public
         * @readonly
         */
        readonly subjectAltName: OPTIONAL<AltNameType>,
        /**
         * @summary `policy`.
         * @public
         * @readonly
         */
        readonly policy: OPTIONAL<CertPolicySet>,
        /**
         * @summary `pathToName`.
         * @public
         * @readonly
         */
        readonly pathToName: OPTIONAL<Name>,
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: OPTIONAL<Name>,
        /**
         * @summary `nameConstraints`.
         * @public
         * @readonly
         */
        readonly nameConstraints: OPTIONAL<NameConstraintsSyntax>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificateAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificateAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateAssertion`.
     * @returns {CertificateAssertion}
     */
    public static _from_object(
        _o: { [_K in keyof CertificateAssertion]: CertificateAssertion[_K] }
    ): CertificateAssertion {
        return new CertificateAssertion(
            _o.serialNumber,
            _o.issuer,
            _o.subjectKeyIdentifier,
            _o.authorityKeyIdentifier,
            _o.certificateValid,
            _o.privateKeyValid,
            _o.subjectPublicKeyAlgID,
            _o.keyUsage,
            _o.subjectAltName,
            _o.policy,
            _o.pathToName,
            _o.subject,
            _o.nameConstraints,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serialNumber",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "issuer",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "subjectKeyIdentifier",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "authorityKeyIdentifier",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "certificateValid",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "privateKeyValid",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        "subjectPublicKeyAlgID",
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        "keyUsage",
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        "subjectAltName",
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        "policy",
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        "pathToName",
        true,
        $.hasTag(_TagClass.context, 10)
    ),
    new $.ComponentSpec(
        "subject",
        true,
        $.hasTag(_TagClass.context, 11)
    ),
    new $.ComponentSpec(
        "nameConstraints",
        true,
        $.hasTag(_TagClass.context, 12)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateAssertion: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertificateAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateAssertion: $.ComponentSpec[] = [];

let _cached_decoder_for_CertificateAssertion: $.ASN1Decoder<CertificateAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateAssertion} The decoded data structure.
 */
export function _decode_CertificateAssertion(el: _Element) {
    if (!_cached_decoder_for_CertificateAssertion) {
        _cached_decoder_for_CertificateAssertion = function (
            el: _Element
        ): CertificateAssertion {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let serialNumber: OPTIONAL<CertificateSerialNumber>;
            let issuer: OPTIONAL<Name>;
            let subjectKeyIdentifier: OPTIONAL<SubjectKeyIdentifier>;
            let authorityKeyIdentifier: OPTIONAL<AuthorityKeyIdentifier>;
            let certificateValid: OPTIONAL<Time>;
            let privateKeyValid: OPTIONAL<GeneralizedTime>;
            let subjectPublicKeyAlgID: OPTIONAL<OBJECT_IDENTIFIER>;
            let keyUsage: OPTIONAL<KeyUsage>;
            let subjectAltName: OPTIONAL<AltNameType>;
            let policy: OPTIONAL<CertPolicySet>;
            let pathToName: OPTIONAL<Name>;
            let subject: OPTIONAL<Name>;
            let nameConstraints: OPTIONAL<NameConstraintsSyntax>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                serialNumber: (_el: _Element): void => {
                    serialNumber = $._decode_implicit<CertificateSerialNumber>(
                        () => _decode_CertificateSerialNumber
                    )(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                subjectKeyIdentifier: (_el: _Element): void => {
                    subjectKeyIdentifier = $._decode_implicit<SubjectKeyIdentifier>(
                        () => _decode_SubjectKeyIdentifier
                    )(_el);
                },
                authorityKeyIdentifier: (_el: _Element): void => {
                    authorityKeyIdentifier = $._decode_implicit<AuthorityKeyIdentifier>(
                        () => _decode_AuthorityKeyIdentifier
                    )(_el);
                },
                certificateValid: (_el: _Element): void => {
                    certificateValid = $._decode_explicit<Time>(
                        () => _decode_Time
                    )(_el);
                },
                privateKeyValid: (_el: _Element): void => {
                    privateKeyValid = $._decode_implicit<GeneralizedTime>(
                        () => $._decodeGeneralizedTime
                    )(_el);
                },
                subjectPublicKeyAlgID: (_el: _Element): void => {
                    subjectPublicKeyAlgID = $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                keyUsage: (_el: _Element): void => {
                    keyUsage = $._decode_implicit<KeyUsage>(
                        () => _decode_KeyUsage
                    )(_el);
                },
                subjectAltName: (_el: _Element): void => {
                    subjectAltName = $._decode_explicit<AltNameType>(
                        () => _decode_AltNameType
                    )(_el);
                },
                policy: (_el: _Element): void => {
                    policy = $._decode_implicit<CertPolicySet>(
                        () => _decode_CertPolicySet
                    )(_el);
                },
                pathToName: (_el: _Element): void => {
                    pathToName = $._decode_explicit<Name>(() => _decode_Name)(
                        _el
                    );
                },
                subject: (_el: _Element): void => {
                    subject = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                nameConstraints: (_el: _Element): void => {
                    nameConstraints = $._decode_implicit<NameConstraintsSyntax>(
                        () => _decode_NameConstraintsSyntax
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificateAssertion,
                _extension_additions_list_spec_for_CertificateAssertion,
                _root_component_type_list_2_spec_for_CertificateAssertion,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificateAssertion(
                /* SEQUENCE_CONSTRUCTOR_CALL */ serialNumber,
                issuer,
                subjectKeyIdentifier,
                authorityKeyIdentifier,
                certificateValid,
                privateKeyValid,
                subjectPublicKeyAlgID,
                keyUsage,
                subjectAltName,
                policy,
                pathToName,
                subject,
                nameConstraints,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificateAssertion(el);
}

let _cached_encoder_for_CertificateAssertion: $.ASN1Encoder<CertificateAssertion> | null = null;

/**
 * @summary Encodes a(n) CertificateAssertion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificateAssertion(
    value: CertificateAssertion,
    elGetter: $.ASN1Encoder<CertificateAssertion>
) {
    if (!_cached_encoder_for_CertificateAssertion) {
        _cached_encoder_for_CertificateAssertion = function (
            value: CertificateAssertion        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.serialNumber === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_CertificateSerialNumber,
                                      $.DER
                                  )(value.serialNumber, $.DER),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Name,
                                      $.DER
                                  )(value.issuer, $.DER),
                            /* IF_ABSENT  */ value.subjectKeyIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_SubjectKeyIdentifier,
                                      $.DER
                                  )(value.subjectKeyIdentifier, $.DER),
                            /* IF_ABSENT  */ value.authorityKeyIdentifier ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_AuthorityKeyIdentifier,
                                      $.DER
                                  )(value.authorityKeyIdentifier, $.DER),
                            /* IF_ABSENT  */ value.certificateValid ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_Time,
                                      $.DER
                                  )(value.certificateValid, $.DER),
                            /* IF_ABSENT  */ value.privateKeyValid === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => $._encodeGeneralizedTime,
                                      $.DER
                                  )(value.privateKeyValid, $.DER),
                            /* IF_ABSENT  */ value.subjectPublicKeyAlgID ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      6,
                                      () => $._encodeObjectIdentifier,
                                      $.DER
                                  )(value.subjectPublicKeyAlgID, $.DER),
                            /* IF_ABSENT  */ value.keyUsage === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      7,
                                      () => _encode_KeyUsage,
                                      $.DER
                                  )(value.keyUsage, $.DER),
                            /* IF_ABSENT  */ value.subjectAltName === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      8,
                                      () => _encode_AltNameType,
                                      $.DER
                                  )(value.subjectAltName, $.DER),
                            /* IF_ABSENT  */ value.policy === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      9,
                                      () => _encode_CertPolicySet,
                                      $.DER
                                  )(value.policy, $.DER),
                            /* IF_ABSENT  */ value.pathToName === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      10,
                                      () => _encode_Name,
                                      $.DER
                                  )(value.pathToName, $.DER),
                            /* IF_ABSENT  */ value.subject === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      11,
                                      () => _encode_Name,
                                      $.DER
                                  )(value.subject, $.DER),
                            /* IF_ABSENT  */ value.nameConstraints === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      12,
                                      () => _encode_NameConstraintsSyntax,
                                      $.DER
                                  )(value.nameConstraints, $.DER),
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
    return _cached_encoder_for_CertificateAssertion(value, elGetter);
}


/* eslint-enable */
