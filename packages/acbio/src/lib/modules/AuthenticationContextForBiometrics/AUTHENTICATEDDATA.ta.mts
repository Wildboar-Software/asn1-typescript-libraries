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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CMSVersion.ta.mjs';
import {
    OriginatorInfo,
    _decode_OriginatorInfo,
    _encode_OriginatorInfo,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/OriginatorInfo.ta.mjs';
import {
    RecipientInfos,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/RecipientInfos.ta.mjs';
import {
    MessageAuthenticationCodeAlgorithm,
    _decode_MessageAuthenticationCodeAlgorithm,
    _encode_MessageAuthenticationCodeAlgorithm,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/MessageAuthenticationCodeAlgorithm.ta.mjs';
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/DigestAlgorithmIdentifier.ta.mjs';
import {
    AuthAttributes,
    _decode_AuthAttributes,
    _encode_AuthAttributes,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/AuthAttributes.ta.mjs';
import {
    MessageAuthenticationCode,
    _decode_MessageAuthenticationCode,
    _encode_MessageAuthenticationCode,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/MessageAuthenticationCode.ta.mjs';
import {
    UnauthAttributes,
    _decode_UnauthAttributes,
    _encode_UnauthAttributes,
} from '@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/UnauthAttributes.ta.mjs';


/**
 * @summary AUTHENTICATEDDATA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AUTHENTICATEDDATA { EncapsulatedContentInfo } ::= SEQUENCE {
 *     version             CMSVersion,
 *     originatorInfo      [0] IMPLICIT OriginatorInfo OPTIONAL,
 *     recipientInfos      RecipientInfos,
 *     macAlgorithm        MessageAuthenticationCodeAlgorithm,
 *     digestAlgorithm     [1] DigestAlgorithmIdentifier OPTIONAL,
 *     encapContentInfo    EncapsulatedContentInfo,
 *     authAttrs           [2] IMPLICIT AuthAttributes OPTIONAL,
 *     mac                 MessageAuthenticationCode,
 *     unauthAttrs         [3] IMPLICIT UnauthAttributes OPTIONAL }
 * ```
 *
 * @class
 */
export class AUTHENTICATEDDATA<EncapsulatedContentInfo> {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `originatorInfo`.
         * @public
         * @readonly
         */
        readonly originatorInfo: OPTIONAL<OriginatorInfo>,
        /**
         * @summary `recipientInfos`.
         * @public
         * @readonly
         */
        readonly recipientInfos: RecipientInfos,
        /**
         * @summary `macAlgorithm`.
         * @public
         * @readonly
         */
        readonly macAlgorithm: MessageAuthenticationCodeAlgorithm,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: OPTIONAL<DigestAlgorithmIdentifier>,
        /**
         * @summary `encapContentInfo`.
         * @public
         * @readonly
         */
        readonly encapContentInfo: EncapsulatedContentInfo,
        /**
         * @summary `authAttrs`.
         * @public
         * @readonly
         */
        readonly authAttrs: OPTIONAL<AuthAttributes>,
        /**
         * @summary `mac`.
         * @public
         * @readonly
         */
        readonly mac: MessageAuthenticationCode,
        /**
         * @summary `unauthAttrs`.
         * @public
         * @readonly
         */
        readonly unauthAttrs: OPTIONAL<UnauthAttributes>
    ) {}

    /**
     * @summary Restructures an object into a AUTHENTICATEDDATA
     * @description
     *
     * This takes an `object` and converts it to a `AUTHENTICATEDDATA`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AUTHENTICATEDDATA`.
     * @returns {AUTHENTICATEDDATA}
     */
    public static _from_object(
        _o: { [_K in keyof AUTHENTICATEDDATA<any>]: AUTHENTICATEDDATA<any>[_K] }
    ): AUTHENTICATEDDATA<any> {
        return new AUTHENTICATEDDATA(
            _o.version,
            _o.originatorInfo,
            _o.recipientInfos,
            _o.macAlgorithm,
            _o.digestAlgorithm,
            _o.encapContentInfo,
            _o.authAttrs,
            _o.mac,
            _o.unauthAttrs
        );
    }
}


/**
 * @summary The Leading Root Component Types of AUTHENTICATEDDATA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AUTHENTICATEDDATA: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'version',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'originatorInfo',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'recipientInfos',
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    ,
    ,
    /* FIXME: macAlgorithm COULD_NOT_RESOLVE_TYPE_DEF */ /* FIXME: digestAlgorithm COULD_NOT_RESOLVE_TYPE_DEF */ new $.ComponentSpec(
        'encapContentInfo',
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        'authAttrs',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'mac',
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        'unauthAttrs',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];


/**
 * @summary The Trailing Root Component Types of AUTHENTICATEDDATA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AUTHENTICATEDDATA: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AUTHENTICATEDDATA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AUTHENTICATEDDATA: $.ComponentSpec[] = [];




/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) AUTHENTICATEDDATA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_AUTHENTICATEDDATA<EncapsulatedContentInfo>(
    _decode_EncapsulatedContentInfo: $.ASN1Decoder<EncapsulatedContentInfo>
) {
    return function (el: _Element): AUTHENTICATEDDATA<EncapsulatedContentInfo> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let version!: CMSVersion;
        let originatorInfo: OPTIONAL<OriginatorInfo>;
        let recipientInfos!: RecipientInfos;
        let macAlgorithm!: MessageAuthenticationCodeAlgorithm;
        let digestAlgorithm: OPTIONAL<DigestAlgorithmIdentifier>;
        let encapContentInfo!: EncapsulatedContentInfo;
        let authAttrs: OPTIONAL<AuthAttributes>;
        let mac!: MessageAuthenticationCode;
        let unauthAttrs: OPTIONAL<UnauthAttributes>;
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            version: (_el: _Element): void => {
                version = _decode_CMSVersion(_el);
            },
            originatorInfo: (_el: _Element): void => {
                originatorInfo = $._decode_implicit<OriginatorInfo>(
                    () => _decode_OriginatorInfo
                )(_el);
            },
            recipientInfos: (_el: _Element): void => {
                recipientInfos = _decode_RecipientInfos(_el);
            },
            macAlgorithm: (_el: _Element): void => {
                macAlgorithm = _decode_MessageAuthenticationCodeAlgorithm(_el);
            },
            digestAlgorithm: (_el: _Element): void => {
                digestAlgorithm = $._decode_implicit<DigestAlgorithmIdentifier>(
                    () => _decode_DigestAlgorithmIdentifier
                )(_el);
            },
            encapContentInfo: (_el: _Element): void => {
                encapContentInfo = _decode_EncapsulatedContentInfo(_el);
            },
            authAttrs: (_el: _Element): void => {
                authAttrs = $._decode_implicit<AuthAttributes>(
                    () => _decode_AuthAttributes
                )(_el);
            },
            mac: (_el: _Element): void => {
                mac = _decode_MessageAuthenticationCode(_el);
            },
            unauthAttrs: (_el: _Element): void => {
                unauthAttrs = $._decode_implicit<UnauthAttributes>(
                    () => _decode_UnauthAttributes
                )(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_AUTHENTICATEDDATA,
            _extension_additions_list_spec_for_AUTHENTICATEDDATA,
            _root_component_type_list_2_spec_for_AUTHENTICATEDDATA,
            undefined
        );
        return new AUTHENTICATEDDATA /* SEQUENCE_CONSTRUCTOR_CALL */(
            version,
            originatorInfo,
            recipientInfos,
            macAlgorithm,
            digestAlgorithm,
            encapContentInfo,
            authAttrs,
            mac,
            unauthAttrs
        );
    };
}




/**
 * @summary Returns a function that will encode a(n) AUTHENTICATEDDATA into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) AUTHENTICATEDDATA as an ASN.1 element.
 */
export function _get_encoder_for_AUTHENTICATEDDATA<EncapsulatedContentInfo>(
    _encode_EncapsulatedContentInfo: $.ASN1Encoder<EncapsulatedContentInfo>
) {
    return function (
        value: AUTHENTICATEDDATA<EncapsulatedContentInfo>    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat([
                    /* REQUIRED   */ _encode_CMSVersion(value.version, $.BER),
                    /* IF_ABSENT  */ value.originatorInfo === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              0,
                              () => _encode_OriginatorInfo,
                              $.BER
                          )(value.originatorInfo, $.BER),
                    /* REQUIRED   */ _encode_RecipientInfos(
                        value.recipientInfos,
                        $.BER
                    ),
                    /* REQUIRED   */ _encode_MessageAuthenticationCodeAlgorithm(
                        value.macAlgorithm,
                        $.BER
                    ),
                    /* IF_ABSENT  */ value.digestAlgorithm === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              1,
                              () => _encode_DigestAlgorithmIdentifier,
                              $.BER
                          )(value.digestAlgorithm, $.BER),
                    /* REQUIRED   */ _encode_EncapsulatedContentInfo(
                        value.encapContentInfo,
                        $.BER
                    ),
                    /* IF_ABSENT  */ value.authAttrs === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              2,
                              () => _encode_AuthAttributes,
                              $.BER
                          )(value.authAttrs, $.BER),
                    /* REQUIRED   */ _encode_MessageAuthenticationCode(
                        value.mac,
                        $.BER
                    ),
                    /* IF_ABSENT  */ value.unauthAttrs === undefined
                        ? undefined
                        : $._encode_implicit(
                              _TagClass.context,
                              3,
                              () => _encode_UnauthAttributes,
                              $.BER
                          )(value.unauthAttrs, $.BER),
                ])
                .filter((c: _Element | undefined): c is _Element => !!c),
            $.BER
        );
    };
}

/* eslint-enable */
