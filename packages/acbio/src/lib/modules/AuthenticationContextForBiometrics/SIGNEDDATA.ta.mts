/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    CMSVersion,
    CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v2 /* IMPORTED_LONG_NAMED_INTEGER */,
    v2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v3 /* IMPORTED_LONG_NAMED_INTEGER */,
    v3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v4 /* IMPORTED_LONG_NAMED_INTEGER */,
    v4 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v5 /* IMPORTED_LONG_NAMED_INTEGER */,
    v5 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CMSVersion.ta.mjs';
export {
    CMSVersion,
    CMSVersion_v0 /* IMPORTED_LONG_NAMED_INTEGER */,
    v0 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v2 /* IMPORTED_LONG_NAMED_INTEGER */,
    v2 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v3 /* IMPORTED_LONG_NAMED_INTEGER */,
    v3 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v4 /* IMPORTED_LONG_NAMED_INTEGER */,
    v4 /* IMPORTED_SHORT_NAMED_INTEGER */,
    CMSVersion_v5 /* IMPORTED_LONG_NAMED_INTEGER */,
    v5 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CMSVersion.ta.mjs';
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta.mjs';
export {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta.mjs';
import {
    CertificateSet,
    _decode_CertificateSet,
    _encode_CertificateSet,
} from '../AuthenticationContextForBiometrics/CertificateSet.ta.mjs';
export {
    CertificateSet,
    _decode_CertificateSet,
    _encode_CertificateSet,
} from '../AuthenticationContextForBiometrics/CertificateSet.ta.mjs';
import {
    RevocationInfoChoices,
    _decode_RevocationInfoChoices,
    _encode_RevocationInfoChoices,
} from '../AuthenticationContextForBiometrics/RevocationInfoChoices.ta.mjs';
export {
    RevocationInfoChoices,
    _decode_RevocationInfoChoices,
    _encode_RevocationInfoChoices,
} from '../AuthenticationContextForBiometrics/RevocationInfoChoices.ta.mjs';
import {
    SignerInfos,
    _decode_SignerInfos,
    _encode_SignerInfos,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/SignerInfos.ta.mjs';
export {
    SignerInfos,
    _decode_SignerInfos,
    _encode_SignerInfos,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/SignerInfos.ta.mjs';
import type {
    EncapsulatedContentInfo,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/EncapsulatedContentInfo.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SIGNEDDATA */
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
/* END_OF_SYMBOL_DEFINITION SIGNEDDATA */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SIGNEDDATA */
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
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'digestAlgorithms',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'encapContentInfo',
        false,
        $.hasAnyTag,
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'certificates',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'crls',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'signerInfos',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SIGNEDDATA */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SIGNEDDATA */
/**
 * @summary The Trailing Root Component Types of SIGNEDDATA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SIGNEDDATA: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SIGNEDDATA */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SIGNEDDATA */
/**
 * @summary The Extension Addition Component Types of SIGNEDDATA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SIGNEDDATA: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SIGNEDDATA */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SIGNEDDATA */
let _cached_decoder_for_SIGNEDDATA: $.ASN1Decoder<
    SIGNEDDATA<EncapsulatedContentInfo>
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SIGNEDDATA */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_SIGNEDDATA */
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
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let version!: CMSVersion;
        let digestAlgorithms!: DigestAlgorithmIdentifier[];
        let encapContentInfo!: EncapsulatedContentInfo;
        let certificates: OPTIONAL<CertificateSet>;
        let crls: OPTIONAL<RevocationInfoChoices>;
        let signerInfos!: SignerInfos;
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
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
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_SIGNEDDATA,
            _extension_additions_list_spec_for_SIGNEDDATA,
            _root_component_type_list_2_spec_for_SIGNEDDATA,
            undefined
        );
        return new SIGNEDDATA /* SEQUENCE_CONSTRUCTOR_CALL */(
            version,
            digestAlgorithms,
            encapContentInfo,
            certificates,
            crls,
            signerInfos
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_SIGNEDDATA */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SIGNEDDATA */
let _cached_encoder_for_SIGNEDDATA: $.ASN1Encoder<
    SIGNEDDATA<EncapsulatedContentInfo>
> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SIGNEDDATA */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_SIGNEDDATA */
/**
 * @summary Returns a function that will encode a(n) SIGNEDDATA into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) SIGNEDDATA as an ASN.1 element.
 */
export function _get_encoder_for_SIGNEDDATA<EncapsulatedContentInfo>(
    _encode_EncapsulatedContentInfo: $.ASN1Encoder<EncapsulatedContentInfo>
) {
    return function (
        value: SIGNEDDATA<EncapsulatedContentInfo>,
        elGetter: $.ASN1Encoder<SIGNEDDATA<EncapsulatedContentInfo>>
    ): _Element {
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
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_SIGNEDDATA */

/* eslint-enable */
