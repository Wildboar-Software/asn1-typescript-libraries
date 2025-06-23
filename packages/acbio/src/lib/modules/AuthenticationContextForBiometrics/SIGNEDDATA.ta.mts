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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CMSVersion.ta.mjs';
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta.mjs';
import {
    CertificateSet,
    _decode_CertificateSet,
    _encode_CertificateSet,
} from '../AuthenticationContextForBiometrics/CertificateSet.ta.mjs';
import {
    RevocationInfoChoices,
    _decode_RevocationInfoChoices,
    _encode_RevocationInfoChoices,
} from '../AuthenticationContextForBiometrics/RevocationInfoChoices.ta.mjs';
import {
    SignerInfos,
    _decode_SignerInfos,
    _encode_SignerInfos,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/SignerInfos.ta.mjs';


/**
 * @summary SIGNEDDATA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SIGNEDDATA { EncapsulatedContentInfo } ::= SEQUENCE {
 *     version             CMSVersion,
 *     digestAlgorithms    SET OF DigestAlgorithmIdentifier,
 *     encapContentInfo    EncapsulatedContentInfo,
 *     certificates        [0] IMPLICIT CertificateSet OPTIONAL,
 *     crls                [1] IMPLICIT RevocationInfoChoices OPTIONAL,
 *     signerInfos         SignerInfos }
 * ```
 *
 * @class
 */
export class SIGNEDDATA<EncapsulatedContentInfo> {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `digestAlgorithms`.
         * @public
         * @readonly
         */
        readonly digestAlgorithms: DigestAlgorithmIdentifier[],
        /**
         * @summary `encapContentInfo`.
         * @public
         * @readonly
         */
        readonly encapContentInfo: EncapsulatedContentInfo,
        /**
         * @summary `certificates`.
         * @public
         * @readonly
         */
        readonly certificates: OPTIONAL<CertificateSet>,
        /**
         * @summary `crls`.
         * @public
         * @readonly
         */
        readonly crls: OPTIONAL<RevocationInfoChoices>,
        /**
         * @summary `signerInfos`.
         * @public
         * @readonly
         */
        readonly signerInfos: SignerInfos
    ) {}

    /**
     * @summary Restructures an object into a SIGNEDDATA
     * @description
     *
     * This takes an `object` and converts it to a `SIGNEDDATA`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIGNEDDATA`.
     * @returns {SIGNEDDATA}
     */
    public static _from_object(
        _o: { [_K in keyof SIGNEDDATA<any>]: SIGNEDDATA<any>[_K] }
    ): SIGNEDDATA<any> {
        return new SIGNEDDATA(
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
 * @summary The Leading Root Component Types of SIGNEDDATA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SIGNEDDATA: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'version',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'digestAlgorithms',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        'encapContentInfo',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'certificates',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'crls',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'signerInfos',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of SIGNEDDATA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SIGNEDDATA: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SIGNEDDATA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SIGNEDDATA: $.ComponentSpec[] = [];




/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) SIGNEDDATA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_SIGNEDDATA<EncapsulatedContentInfo>(
    _decode_EncapsulatedContentInfo: $.ASN1Decoder<EncapsulatedContentInfo>
) {
    return function (el: _Element): SIGNEDDATA<EncapsulatedContentInfo> {
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
            _root_component_type_list_1_spec_for_SIGNEDDATA,
            _extension_additions_list_spec_for_SIGNEDDATA,
            _root_component_type_list_2_spec_for_SIGNEDDATA,
            undefined
        );
        return new SIGNEDDATA (
            version,
            digestAlgorithms,
            encapContentInfo,
            certificates,
            crls,
            signerInfos
        );
    };
}




/**
 * @summary Returns a function that will encode a(n) SIGNEDDATA into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) SIGNEDDATA as an ASN.1 element.
 */
export function _get_encoder_for_SIGNEDDATA<EncapsulatedContentInfo>(
    _encode_EncapsulatedContentInfo: $.ASN1Encoder<EncapsulatedContentInfo>
) {
    return function (
        value: SIGNEDDATA<EncapsulatedContentInfo>    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat([
                    /* REQUIRED   */ _encode_CMSVersion(value.version, $.BER),
                    /* REQUIRED   */ $._encodeSetOf<DigestAlgorithmIdentifier>(
                        () => _encode_DigestAlgorithmIdentifier,
                        $.BER
                    )(value.digestAlgorithms, $.BER),
                    /* REQUIRED   */ _encode_EncapsulatedContentInfo(
                        value.encapContentInfo,
                        $.BER
                    ),
                    /* IF_ABSENT  */ value.certificates === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              0,
                              () => _encode_CertificateSet,
                              $.BER
                          )(value.certificates, $.BER),
                    /* IF_ABSENT  */ value.crls === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              1,
                              () => _encode_RevocationInfoChoices,
                              $.BER
                          )(value.crls, $.BER),
                    /* REQUIRED   */ _encode_SignerInfos(
                        value.signerInfos,
                        $.BER
                    ),
                ])
                .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
        );
    };
}

/* eslint-enable */
