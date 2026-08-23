/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../AuthenticationFramework/Certificate.ta.mjs";
import {
    CertificatePair,
    _decode_CertificatePair,
    _encode_CertificatePair,
} from "../AuthenticationFramework/CertificatePair.ta.mjs";
import type { PkiPath } from "./PkiPath.ta.mjs";

/**
 * @summary CertificationPath
 * @description
 *
 * `userCertificate` FIRST, then `theCACertificates` (SEQUENCE of
 * {@link CertificatePair}) toward the trust anchor — opposite of
 * {@link PkiPath} (trust anchor first). Deprecated for new applications;
 * prefer `PkiPath`. SIZE (1..MAX) on the CA sequence: omit it rather than
 * send empty (direct trust-anchor issuance).
 * 
 * To quote ITU-T Recommendation X.509 (2019), Section 7.7:
 * 
 * > The CertificationPath data type was defined at an early stage, before the
 * > concept of certification path was fully developed. The order of elements
 * > in a CertificationPath instance is the opposite of that of a certification
 * > path as it is defined now. [...] It is recommended that new applications
 * > use the PkiPath data type.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificationPath ::= SEQUENCE {
 *   userCertificate    Certificate,
 *   theCACertificates  SEQUENCE SIZE (1..MAX) OF CertificatePair OPTIONAL,
 *   ... }
 * ```
 *
 */
export class CertificationPath {
    constructor(
        /**
         * @summary `userCertificate`: the end-entity public-key certificate
         * @public
         * @readonly
         */
        readonly userCertificate: Certificate,
        /**
         * @summary `theCACertificates`: each CA up to and including the CA certified by the trust anchor
         * @description
         * 
         * This is not intended to contain the trust anchor itself, only the CA
         * certs leading up to it. If the end-entity public-key certificate has
         * been issued directly by the trust anchor, this component shall be
         * absent.
         * 
         * @public
         * @readonly
         */
        readonly theCACertificates?: OPTIONAL<CertificatePair[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificationPath
     * @description
     *
     * This takes an `object` and converts it to a `CertificationPath`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificationPath`.
     * @returns {CertificationPath}
     */
    public static _from_object(
        _o: { [_K in keyof CertificationPath]: CertificationPath[_K] }
    ): CertificationPath {
        return new CertificationPath(
            _o.userCertificate,
            _o.theCACertificates,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Obtain a `CertificationPath` from a `PkiPath`
     * @description
     * 
     * This function exists because it is easy to make mistakes in this
     * conversion. For one, the ordering of certificates is reversed between
     * this type and `PkiPath`. Second, it required a bit of research to
     * determine which field of `CertificatePair` each CA certificate should
     * occupy.
     * 
     * @param pkiPath The ordered array of public key certificates, where the
     *  subject of the first is the issuer of the second, and so on. This MAY
     *  or MAY NOT start with a root CA, but it MUST end with an end-entity
     *  certificate.
     * @returns The `CertificationPath`, or `null` if the `PkiPath` supplied
     *  was empty.
     * @function
     */
    public static fromPkiPath(pkiPath: PkiPath): CertificationPath | null {
        const ee_cert = pkiPath[pkiPath.length - 1];
        if (!ee_cert) {
            return null;
        }
        return new CertificationPath(
            ee_cert,
            pkiPath.slice(0, -1)
                .map((cert) => new CertificatePair(cert, undefined))
                .reverse(),
        );
    }

    /**
     * @summary Convert this `CertificationPath` into its `PkiPath` equivalent
     * @description
     * 
     * This function exists because it is easy to make mistakes in this
     * conversion. For one, the ordering of certificates is reversed between
     * this type and `PkiPath`. Second, it required a bit of research to
     * determine which field of `CertificatePair` each CA certificate should
     * occupy.
     * 
     * @returns The equivalent `PkiPath`
     * @function
     */
    public intoPkiPath(): PkiPath | null {
        const maybeIssuedToTheseCAs = this
            .theCACertificates
            ?.map((cp) => cp.issuedToThisCA)
            ?? [];
        const issuedToTheseCAs = maybeIssuedToTheseCAs
            .filter((cp): cp is Certificate => !!cp);
        if (issuedToTheseCAs.length !== maybeIssuedToTheseCAs.length) {
            // We filtered out a certificate pair, because it didn't have issuedToThisCA.
            return null;
        }
        return [
            ...issuedToTheseCAs.reverse(),
            this.userCertificate,
        ];
    }
}

/**
 * @summary The Leading Root Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificationPath: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "userCertificate",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "theCACertificates",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificationPath: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertificationPath
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificationPath: $.ComponentSpec[] = [];

let _cached_decoder_for_CertificationPath: $.ASN1Decoder<CertificationPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificationPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificationPath} The decoded data structure.
 */
export function _decode_CertificationPath(el: _Element): CertificationPath {
    if (!_cached_decoder_for_CertificationPath) {
        _cached_decoder_for_CertificationPath = function (
            el: _Element
        ): CertificationPath {
            let userCertificate!: Certificate;
            let theCACertificates: OPTIONAL<CertificatePair[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                userCertificate: (_el: _Element): void => {
                    userCertificate = _decode_Certificate(_el);
                },
                theCACertificates: (_el: _Element): void => {
                    theCACertificates = $._decodeSequenceOf<CertificatePair>(
                        () => _decode_CertificatePair
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CertificationPath,
                _extension_additions_list_spec_for_CertificationPath,
                _root_component_type_list_2_spec_for_CertificationPath,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CertificationPath(
                userCertificate,
                theCACertificates,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CertificationPath(el);
}

let _cached_encoder_for_CertificationPath: $.ASN1Encoder<CertificationPath> | null = null;

/**
 * @summary Encodes a(n) CertificationPath into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificationPath, encoded as an ASN.1 Element.
 */
export function _encode_CertificationPath(
    value: CertificationPath,
    elGetter: $.ASN1Encoder<CertificationPath>
): _Element {
    if (!_cached_encoder_for_CertificationPath) {
        _cached_encoder_for_CertificationPath = function (
            value: CertificationPath        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_Certificate(
                                value.userCertificate,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.theCACertificates ===
                            undefined
                                ? undefined
                                : $._encodeSequenceOf<CertificatePair>(
                                      () => _encode_CertificatePair,
                                      $.DER
                                  )(value.theCACertificates, $.DER),
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
    return _cached_encoder_for_CertificationPath(value, elGetter);
}


/* eslint-enable */
