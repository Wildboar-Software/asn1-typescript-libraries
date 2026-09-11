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
import { CMSVersion, _decode_CMSVersion, _encode_CMSVersion } from "../X9-84-CMS/CMSVersion.ta.mjs";

import { DigestAlgorithmIdentifiers, _decode_DigestAlgorithmIdentifiers, _encode_DigestAlgorithmIdentifiers } from "../X9-84-CMS/DigestAlgorithmIdentifiers.ta.mjs";

import { EncapsulatedContentInfo, _decode_EncapsulatedContentInfo, _encode_EncapsulatedContentInfo } from "../X9-84-CMS/EncapsulatedContentInfo.ta.mjs";

import { CertificateSet, _decode_CertificateSet, _encode_CertificateSet } from "../X9-84-CMS/CertificateSet.ta.mjs";

import { CertificateRevocationLists, _decode_CertificateRevocationLists, _encode_CertificateRevocationLists } from "../X9-84-CMS/CertificateRevocationLists.ta.mjs";

import { SignerInfos, _decode_SignerInfos, _encode_SignerInfos } from "../X9-84-CMS/SignerInfos.ta.mjs";



/**
 * @summary SignedData
 * @description
 *
 * CMS signed data (ANSI X9.84). TSM uses this as `digitalSignature` (and
 * related fields) to assure integrity of client, TTP, or verifier
 * biometric processing. Structure is X9.84 CMS, not defined by X.1084.
 * ITU-T Rec. X.1084 (05/2008) §11, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignedData ::= SEQUENCE {
 *    version           CMSVersion,
 *    digestAlgorithms  DigestAlgorithmIdentifiers,
 *    encapContentInfo  EncapsulatedContentInfo,
 *    certificates      [0] CertificateSet  OPTIONAL,
 *    crls              [1] CertificateRevocationLists  OPTIONAL,
 *    signerInfos       SignerInfos
 * }
 * ```
 * 
 * @class
 */
export
class SignedData {
    constructor (
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
        readonly digestAlgorithms: DigestAlgorithmIdentifiers,
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
        readonly crls: OPTIONAL<CertificateRevocationLists>,
        /**
         * @summary `signerInfos`.
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
    public static _from_object (_o: { [_K in keyof (SignedData)]: (SignedData)[_K] }): SignedData {
        return new SignedData(_o.version, _o.digestAlgorithms, _o.encapContentInfo, _o.certificates, _o.crls, _o.signerInfos);
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
export
const _root_component_type_list_1_spec_for_SignedData: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("digestAlgorithms", false, $.hasTag(_TagClass.universal, 17)),
    new $.ComponentSpec("encapContentInfo", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("certificates", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("crls", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("signerInfos", false, $.hasTag(_TagClass.universal, 17))
];

/**
 * @summary The Trailing Root Component Types of SignedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SignedData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SignedData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SignedData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SignedData: $.ASN1Decoder<SignedData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignedData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignedData (el: _Element): SignedData {
    if (!_cached_decoder_for_SignedData) { _cached_decoder_for_SignedData = function (el: _Element): SignedData {
    let version!: CMSVersion;
    let digestAlgorithms!: DigestAlgorithmIdentifiers;
    let encapContentInfo!: EncapsulatedContentInfo;
    let certificates: OPTIONAL<CertificateSet>;
    let crls: OPTIONAL<CertificateRevocationLists>;
    let signerInfos!: SignerInfos;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_CMSVersion(_el); },
        "digestAlgorithms": (_el: _Element): void => { digestAlgorithms = _decode_DigestAlgorithmIdentifiers(_el); },
        "encapContentInfo": (_el: _Element): void => { encapContentInfo = _decode_EncapsulatedContentInfo(_el); },
        "certificates": (_el: _Element): void => { certificates = $._decode_implicit<CertificateSet>(() => _decode_CertificateSet)(_el); },
        "crls": (_el: _Element): void => { crls = $._decode_implicit<CertificateRevocationLists>(() => _decode_CertificateRevocationLists)(_el); },
        "signerInfos": (_el: _Element): void => { signerInfos = _decode_SignerInfos(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SignedData,
        _extension_additions_list_spec_for_SignedData,
        _root_component_type_list_2_spec_for_SignedData,
        undefined,
    );
    return new SignedData(
        version,
        digestAlgorithms,
        encapContentInfo,
        certificates,
        crls,
        signerInfos
    );
}; }
    return _cached_decoder_for_SignedData(el);
}

let _cached_encoder_for_SignedData: $.ASN1Encoder<SignedData> | null = null;

/**
 * @summary Encodes a(n) SignedData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignedData, encoded as an ASN.1 Element.
 */
export
function _encode_SignedData (value: SignedData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignedData) { _cached_encoder_for_SignedData = function (value: SignedData): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_DigestAlgorithmIdentifiers(value.digestAlgorithms, $.BER),
            /* REQUIRED   */ _encode_EncapsulatedContentInfo(value.encapContentInfo, $.BER),
            /* IF_ABSENT  */ ((value.certificates === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CertificateSet, $.BER)(value.certificates, $.BER)),
            /* IF_ABSENT  */ ((value.crls === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CertificateRevocationLists, $.BER)(value.crls, $.BER)),
            /* REQUIRED   */ _encode_SignerInfos(value.signerInfos, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SignedData(value, elGetter);
}


/* eslint-enable */
