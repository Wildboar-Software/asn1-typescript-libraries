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
} from '../CmsTelebiometric/CMSVersion.ta.mjs';
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/AuthenticationFramework';
import {
    EncapsulatedContentInfo,
    _decode_EncapsulatedContentInfo,
    _encode_EncapsulatedContentInfo,
} from '../CmsTelebiometric/EncapsulatedContentInfo.ta.mjs';
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from '@wildboar/x500/AuthenticationFramework';
import {
    SignerInfos,
    _decode_SignerInfos,
    _encode_SignerInfos,
} from '../CmsTelebiometric/SignerInfos.ta.mjs';

/**
 * @summary SignedData
 * @description
 *
 * Signed CMS content. One hash, one signer. `crls` shall be
 * absent (not used). When encryption is required, the encapsulated
 * content is `envelopedData`.
 * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2.
 * https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignedData ::= SEQUENCE  {
 *   version               CMSVersion (v3),
 *   digestAlgorithms      SET (SIZE (1)) OF AlgorithmIdentifier
 *                           {{Teleb-Hash-Algorithms}},
 *   encapContentInfo      EncapsulatedContentInfo,
 *   certificates     [0]  IMPLICIT SET (SIZE (1..MAX)) OF Certificate OPTIONAL,
 * --crls             [1]  IMPLICIT RevocationInfoChoices OPTIONAL,
 *   signerInfos           SignerInfos,
 *   ... }
 * ```
 *
 */
export class SignedData {
    constructor(
        /**
         * @summary `version`.
         * @description
         *
         * Always `v3` (RFC 5652 clause 5.1).
         * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2.
         *
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `digestAlgorithms`.
         * @description
         *
         * Exactly one hash (`SIZE (1)`). Multiple signatures are not
         * used. Algorithms from `Teleb-Hash-Algorithms` (extensible;
         * this profile does not mandate a hash).
         * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2.
         *
         * @public
         * @readonly
         */
        readonly digestAlgorithms: AlgorithmIdentifier[],
        /**
         * @summary `encapContentInfo`.
         * @description
         *
         * Encapsulated content. Type is `id-envelopedData` if
         * encryption is required, else a telebiometrics content type.
         * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2.
         *
         * @public
         * @readonly
         */
        readonly encapContentInfo: EncapsulatedContentInfo,
        /**
         * @summary `certificates`.
         * @description
         *
         * PKCs sufficient to establish a single `PkiPath` (X.509).
         * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2.
         *
         * @public
         * @readonly
         */
        readonly certificates: OPTIONAL<Certificate[]>,
        /**
         * @summary `signerInfos`.
         * @description
         *
         * Exactly one signer (`SIZE (1)`).
         * ITU-T Rec. X.1080.0 (2017) Cor.1 Annex B.2.
         *
         * @public
         * @readonly
         */
        readonly signerInfos: SignerInfos,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
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
            _o.signerInfos,
            _o._unrecognizedExtensionsList
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
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'certificates',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'signerInfos',
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
            let digestAlgorithms!: AlgorithmIdentifier[];
            let encapContentInfo!: EncapsulatedContentInfo;
            let certificates: OPTIONAL<Certificate[]>;
            let signerInfos!: SignerInfos;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                digestAlgorithms: (_el: _Element): void => {
                    digestAlgorithms = $._decodeSetOf<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                encapContentInfo: (_el: _Element): void => {
                    encapContentInfo = _decode_EncapsulatedContentInfo(_el);
                },
                certificates: (_el: _Element): void => {
                    certificates = $._decode_implicit<Certificate[]>(() =>
                        $._decodeSetOf<Certificate>(() => _decode_Certificate)
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
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new SignedData (
                version,
                digestAlgorithms,
                encapContentInfo,
                certificates,
                signerInfos,
                _unrecognizedExtensionsList
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
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CMSVersion(
                                value.version,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<AlgorithmIdentifier>(
                                () => _encode_AlgorithmIdentifier,
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
                                      () =>
                                          $._encodeSetOf<Certificate>(
                                              () => _encode_Certificate,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.certificates, $.BER),
                            /* REQUIRED   */ _encode_SignerInfos(
                                value.signerInfos,
                                $.BER
                            ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignedData(value, elGetter);
}


/* eslint-enable */
