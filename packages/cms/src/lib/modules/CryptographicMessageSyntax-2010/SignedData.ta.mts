/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateSet,
    _decode_CertificateSet,
    _encode_CertificateSet,
} from "../CryptographicMessageSyntax-2010/CertificateSet.ta.mjs";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax-2010/CMSVersion.ta.mjs";
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta.mjs";
import {
    EncapsulatedContentInfo,
    _decode_EncapsulatedContentInfo,
    _encode_EncapsulatedContentInfo,
} from "../CryptographicMessageSyntax-2010/EncapsulatedContentInfo.ta.mjs";
import {
    RevocationInfoChoices,
    _decode_RevocationInfoChoices,
    _encode_RevocationInfoChoices,
} from "../CryptographicMessageSyntax-2010/RevocationInfoChoices.ta.mjs";
import {
    SignerInfos,
    _decode_SignerInfos,
    _encode_SignerInfos,
} from "../CryptographicMessageSyntax-2010/SignerInfos.ta.mjs";

/**
 * @summary SignedData
 * @description
 *
 * Signed-data content type: content of any type with zero or more signatures
 * ([RFC 5652 §5](https://datatracker.ietf.org/doc/html/rfc5652#section-5),
 * [§5.1](https://datatracker.ietf.org/doc/html/rfc5652#section-5.1)).
 * Provides message authentication, integrity, and (with certificates)
 * non-repudiation of origin. Any number of signers in parallel is allowed;
 * detached signatures omit `eContent`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedData ::= SEQUENCE {
 * version        CMSVersion,
 * digestAlgorithms    SET OF DigestAlgorithmIdentifier,
 * encapContentInfo    EncapsulatedContentInfo,
 * certificates     [0] IMPLICIT CertificateSet OPTIONAL,
 * crls             [1] IMPLICIT RevocationInfoChoices OPTIONAL,
 * signerInfos     SignerInfos }
 * ```
 *
 */
export class SignedData {
    constructor(
        /**
         * @summary `version`.
         * @description
         *
         * Syntax version. MUST be assigned from certificates, `eContentType`, and
         * `SignerInfo` versions per [RFC 5652 §5.1](https://datatracker.ietf.org/doc/html/rfc5652#section-5.1)
         * (1, 3, 4, or 5).
         *
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `digestAlgorithms`.
         * @description
         *
         * Collection of digest algorithm identifiers used by one or more signers
         * (MAY be empty). Intended to list all digests for one-pass verification
         * ([RFC 5652 §5.1](https://datatracker.ietf.org/doc/html/rfc5652#section-5.1)).
         *
         * @public
         * @readonly
         */
        readonly digestAlgorithms: DigestAlgorithmIdentifier[],
        /**
         * @summary `encapContentInfo`.
         * @description
         *
         * Signed content: content-type OID plus optional content octets
         * ([RFC 5652 §5.1](https://datatracker.ietf.org/doc/html/rfc5652#section-5.1),
         * [§5.2](https://datatracker.ietf.org/doc/html/rfc5652#section-5.2)).
         *
         * @public
         * @readonly
         */
        readonly encapContentInfo: EncapsulatedContentInfo,
        /**
         * @summary `certificates`.
         * @description
         *
         * Optional certificates sufficient for paths from a recognized root to
         * the signers; may be more or fewer than needed. Signer's certificate MAY
         * be included. Version 1 attribute certificates are strongly discouraged
         * ([RFC 5652 §5.1](https://datatracker.ietf.org/doc/html/rfc5652#section-5.1)).
         *
         * @public
         * @readonly
         */
        readonly certificates: OPTIONAL<CertificateSet>,
        /**
         * @summary `crls`.
         * @description
         *
         * Optional revocation information (typically CRLs) for certificates in
         * `certificates`; correspondence is not required
         * ([RFC 5652 §5.1](https://datatracker.ietf.org/doc/html/rfc5652#section-5.1)).
         *
         * @public
         * @readonly
         */
        readonly crls: OPTIONAL<RevocationInfoChoices>,
        /**
         * @summary `signerInfos`.
         * @description
         *
         * Per-signer information; MAY be empty. Each signer may use a different
         * signature technique. Implementations MUST handle unimplemented
         * `SignerInfo` versions and signature algorithms gracefully
         * ([RFC 5652 §5.1](https://datatracker.ietf.org/doc/html/rfc5652#section-5.1)).
         *
         * @public
         * @readonly
         */
        readonly signerInfos: SignerInfos
    ) {}

    /**
     * @summary Restructures an object into a SignedData
     * @description
     *
     * This takes an `object` and converts it to a `SignedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignedData`.
     * @returns {SignedData}
     */
    public static _from_object(
        _o: { [_K in keyof SignedData]: SignedData[_K] }
    ): SignedData {
        return new SignedData(
            _o.version,
            _o.digestAlgorithms,
            _o.encapContentInfo,
            _o.certificates,
            _o.crls,
            _o.signerInfos
        );
    }
}


/**
 * @summary The Leading Root Component Types of SignedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "digestAlgorithms",
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        "encapContentInfo",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "certificates",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "crls",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "signerInfos",
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of SignedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignedData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SignedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignedData: $.ComponentSpec[] = [];


let _cached_decoder_for_SignedData: $.ASN1Decoder<SignedData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignedData} The decoded data structure.
 */
export function _decode_SignedData(el: _Element): SignedData {
    if (!_cached_decoder_for_SignedData) {
        _cached_decoder_for_SignedData = function (el: _Element): SignedData {
            let version!: CMSVersion;
            let digestAlgorithms!: DigestAlgorithmIdentifier[];
            let encapContentInfo!: EncapsulatedContentInfo;
            let certificates: OPTIONAL<CertificateSet>;
            let crls: OPTIONAL<RevocationInfoChoices>;
            let signerInfos!: SignerInfos;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                digestAlgorithms: (_el: _Element): void => {
                    digestAlgorithms = $._decodeSetOf<DigestAlgorithmIdentifier>(
                        () => _decode_DigestAlgorithmIdentifier
                    )(_el);
                },
                encapContentInfo: (_el: _Element): void => {
                    encapContentInfo = _decode_EncapsulatedContentInfo(_el);
                },
                certificates: (_el: _Element): void => {
                    certificates = $._decode_implicit<CertificateSet>(
                        () => _decode_CertificateSet
                    )(_el);
                },
                crls: (_el: _Element): void => {
                    crls = $._decode_implicit<RevocationInfoChoices>(
                        () => _decode_RevocationInfoChoices
                    )(_el);
                },
                signerInfos: (_el: _Element): void => {
                    signerInfos = _decode_SignerInfos(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignedData,
                _extension_additions_list_spec_for_SignedData,
                _root_component_type_list_2_spec_for_SignedData,
                undefined
            );
            return new SignedData (
                version,
                digestAlgorithms,
                encapContentInfo,
                certificates,
                crls,
                signerInfos
            );
        };
    }
    return _cached_decoder_for_SignedData(el);
}


let _cached_encoder_for_SignedData: $.ASN1Encoder<SignedData> | null = null;


/**
 * @summary Encodes a(n) SignedData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedData, encoded as an ASN.1 Element.
 */
export function _encode_SignedData(
    value: SignedData,
    elGetter: $.ASN1Encoder<SignedData>
): _Element {
    if (!_cached_encoder_for_SignedData) {
        _cached_encoder_for_SignedData = function (
            value: SignedData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeSetOf<DigestAlgorithmIdentifier>(
                            () => _encode_DigestAlgorithmIdentifier,
                            $.DER
                        )(value.digestAlgorithms, $.DER),
                        /* REQUIRED   */ _encode_EncapsulatedContentInfo(
                            value.encapContentInfo,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.certificates === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_CertificateSet,
                                  $.DER
                              )(value.certificates, $.DER),
                        /* IF_ABSENT  */ value.crls === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_RevocationInfoChoices,
                                  $.DER
                              )(value.crls, $.DER),
                        /* REQUIRED   */ _encode_SignerInfos(
                            value.signerInfos,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SignedData(value, elGetter);
}


/* eslint-enable */
