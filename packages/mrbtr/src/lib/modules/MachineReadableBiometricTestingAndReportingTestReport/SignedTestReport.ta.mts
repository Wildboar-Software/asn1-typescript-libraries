/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MRTDBTRVersion, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MRTDBTRVersion, _encode_MRTDBTRVersion } from "../MachineReadableBiometricTestingAndReportingTestReport/MRTDBTRVersion.ta.mjs";
// export { MRTDBTRVersion, MRTDBTRVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */, v0 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_MRTDBTRVersion, _encode_MRTDBTRVersion } from "../MachineReadableBiometricTestingAndReportingTestReport/MRTDBTRVersion.ta.mjs";
import { EncapsulatedContentInfoSignedTR, _decode_EncapsulatedContentInfoSignedTR, _encode_EncapsulatedContentInfoSignedTR } from "../MachineReadableBiometricTestingAndReportingTestReport/EncapsulatedContentInfoSignedTR.ta.mjs";
// export { EncapsulatedContentInfoSignedTR, _decode_EncapsulatedContentInfoSignedTR, _encode_EncapsulatedContentInfoSignedTR } from "../MachineReadableBiometricTestingAndReportingTestReport/EncapsulatedContentInfoSignedTR.ta.mjs";
import { DigestAlgorithmIdentifiers, _decode_DigestAlgorithmIdentifiers, _encode_DigestAlgorithmIdentifiers } from "../CryptographicMessageSyntax-2009/DigestAlgorithmIdentifiers.ta.mjs";
import { CertificateSet, _decode_CertificateSet, _encode_CertificateSet } from "../CryptographicMessageSyntax-2009/CertificateSet.ta.mjs";
// export { CertificateSet, _decode_CertificateSet, _encode_CertificateSet } from "../CryptographicMessageSyntax-2009/CertificateSet.ta.mjs";
import { RevocationInfoChoices, _decode_RevocationInfoChoices, _encode_RevocationInfoChoices } from "../CryptographicMessageSyntax-2009/RevocationInfoChoices.ta.mjs";
// export { RevocationInfoChoices, _decode_RevocationInfoChoices, _encode_RevocationInfoChoices } from "../CryptographicMessageSyntax-2009/RevocationInfoChoices.ta.mjs";
import { SignerInfos, _decode_SignerInfos, _encode_SignerInfos } from "../CryptographicMessageSyntax-2009/SignerInfos.ta.mjs";
// export { SignerInfos, _decode_SignerInfos, _encode_SignerInfos } from "../CryptographicMessageSyntax-2009/SignerInfos.ta.mjs";


/**
 * @summary SignedTestReport
 * @description
 *
 * Signed test report, also called a test certificate (Clause 6.6).
 * CMS fields follow RFC 3852; this document does not specify which
 * digest algorithms must be supported. Integrity of laboratory, date,
 * accreditation, manner of testing, and accuracy figures is the
 * purpose of the signature (Introduction).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignedTestReport ::= SEQUENCE {
 *     version             MRTDBTRVersion DEFAULT v0,
 *     digestAlgorithms    DigestAlgorithmIdentifiers,
 *     encapContentInfo    EncapsulatedContentInfoSignedTR,
 *     certificates        [0] IMPLICIT CertificateSet OPTIONAL,
 *     crls                [1] IMPLICIT RevocationInfoChoices OPTIONAL,
 *     signerInfos         SignerInfos
 * }
 * ```
 * 
 * @class
 */
export
class SignedTestReport {
    constructor (
        /**
         * @summary `version`.
         * @description
         *
         * Format version; defaults to `v0` (Clause 6.6).
         *
         * @public
         * @readonly
         */
        readonly version: OPTIONAL<MRTDBTRVersion>,
        /**
         * @summary `digestAlgorithms`.
         * @description
         *
         * Message-digest algorithm identifiers. Which algorithms to
         * support is not specified here; see RFC 3852 (Clause 6.6).
         *
         * @public
         * @readonly
         */
        readonly digestAlgorithms: DigestAlgorithmIdentifiers,
        /**
         * @summary `encapContentInfo`.
         * @description
         *
         * Encapsulated technology or scenario test report as an OCTET
         * STRING (Clause 6.6).
         *
         * @public
         * @readonly
         */
        readonly encapContentInfo: EncapsulatedContentInfoSignedTR,
        /**
         * @summary `certificates`.
         * @description
         *
         * Intended to contain certification paths from a recognized
         * root to all `signerInfos` signers. Correspondence is not
         * required; see RFC 3852 (Clause 6.6).
         *
         * @public
         * @readonly
         */
        readonly certificates: OPTIONAL<CertificateSet>,
        /**
         * @summary `crls`.
         * @description
         *
         * Revocation status information, intended to be sufficient to
         * decide whether `certificates` are valid; correspondence is
         * not required. See RFC 3852 (Clause 6.6).
         *
         * @public
         * @readonly
         */
        readonly crls: OPTIONAL<RevocationInfoChoices>,
        /**
         * @summary `signerInfos`.
         * @description
         *
         * Per-signer information. See RFC 3852 (Clause 6.6).
         *
         * @public
         * @readonly
         */
        readonly signerInfos: SignerInfos
    ) {}

    /**
     * @summary Restructures an object into a SignedTestReport
     * @description
     * 
     * This takes an `object` and converts it to a `SignedTestReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignedTestReport`.
     * @returns {SignedTestReport}
     */
    public static _from_object (_o: { [_K in keyof (SignedTestReport)]: (SignedTestReport)[_K] }): SignedTestReport {
        return new SignedTestReport(_o.version, _o.digestAlgorithms, _o.encapContentInfo, _o.certificates, _o.crls, _o.signerInfos);
    }

    /**
     * @summary Getter that returns the default value for `version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_version () { return v0; }
}

/**
 * @summary The Leading Root Component Types of SignedTestReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SignedTestReport: $.ComponentSpec[] = [
    new $.ComponentSpec("version", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("digestAlgorithms", false, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("encapContentInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("certificates", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("crls", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("signerInfos", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of SignedTestReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SignedTestReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SignedTestReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SignedTestReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SignedTestReport: $.ASN1Decoder<SignedTestReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignedTestReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignedTestReport (el: _Element): SignedTestReport {
    if (!_cached_decoder_for_SignedTestReport) { _cached_decoder_for_SignedTestReport = function (el: _Element): SignedTestReport {
    let version: OPTIONAL<MRTDBTRVersion> = SignedTestReport._default_value_for_version;
    let digestAlgorithms!: DigestAlgorithmIdentifiers;
    let encapContentInfo!: EncapsulatedContentInfoSignedTR;
    let certificates: OPTIONAL<CertificateSet>;
    let crls: OPTIONAL<RevocationInfoChoices>;
    let signerInfos!: SignerInfos;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_MRTDBTRVersion(_el); },
        "digestAlgorithms": (_el: _Element): void => { digestAlgorithms = _decode_DigestAlgorithmIdentifiers(_el); },
        "encapContentInfo": (_el: _Element): void => { encapContentInfo = _decode_EncapsulatedContentInfoSignedTR(_el); },
        "certificates": (_el: _Element): void => { certificates = $._decode_implicit<CertificateSet>(() => _decode_CertificateSet)(_el); },
        "crls": (_el: _Element): void => { crls = $._decode_implicit<RevocationInfoChoices>(() => _decode_RevocationInfoChoices)(_el); },
        "signerInfos": (_el: _Element): void => { signerInfos = _decode_SignerInfos(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SignedTestReport,
        _extension_additions_list_spec_for_SignedTestReport,
        _root_component_type_list_2_spec_for_SignedTestReport,
        undefined,
    );
    return new SignedTestReport(
        version,
        digestAlgorithms,
        encapContentInfo,
        certificates,
        crls,
        signerInfos
    );
}; }
    return _cached_decoder_for_SignedTestReport(el);
}

let _cached_encoder_for_SignedTestReport: $.ASN1Encoder<SignedTestReport> | null = null;

/**
 * @summary Encodes a(n) SignedTestReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedTestReport, encoded as an ASN.1 Element.
 */
export
function _encode_SignedTestReport (value: SignedTestReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignedTestReport) { _cached_encoder_for_SignedTestReport = function (value: SignedTestReport): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.version === undefined || $.deepEq(value.version, SignedTestReport._default_value_for_version) ? undefined : _encode_MRTDBTRVersion(value.version, $.BER)),
            /* REQUIRED   */ _encode_DigestAlgorithmIdentifiers(value.digestAlgorithms, $.BER),
            /* REQUIRED   */ _encode_EncapsulatedContentInfoSignedTR(value.encapContentInfo, $.BER),
            /* IF_ABSENT  */ ((value.certificates === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CertificateSet, $.BER)(value.certificates, $.BER)),
            /* IF_ABSENT  */ ((value.crls === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RevocationInfoChoices, $.BER)(value.crls, $.BER)),
            /* REQUIRED   */ _encode_SignerInfos(value.signerInfos, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SignedTestReport(value, elGetter);
}


/* eslint-enable */
