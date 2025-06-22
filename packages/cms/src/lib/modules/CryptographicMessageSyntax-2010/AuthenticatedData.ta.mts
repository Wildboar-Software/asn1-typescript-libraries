/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AuthAttributes,
    _decode_AuthAttributes,
    _encode_AuthAttributes,
} from "../CryptographicMessageSyntax-2010/AuthAttributes.ta.mjs";
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
    MessageAuthenticationCode,
    _decode_MessageAuthenticationCode,
    _encode_MessageAuthenticationCode,
} from "../CryptographicMessageSyntax-2010/MessageAuthenticationCode.ta.mjs";
import {
    MessageAuthenticationCodeAlgorithm,
    _decode_MessageAuthenticationCodeAlgorithm,
    _encode_MessageAuthenticationCodeAlgorithm,
} from "../CryptographicMessageSyntax-2010/MessageAuthenticationCodeAlgorithm.ta.mjs";
import {
    OriginatorInfo,
    _decode_OriginatorInfo,
    _encode_OriginatorInfo,
} from "../CryptographicMessageSyntax-2010/OriginatorInfo.ta.mjs";
import {
    RecipientInfos,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
} from "../CryptographicMessageSyntax-2010/RecipientInfos.ta.mjs";
import {
    UnauthAttributes,
    _decode_UnauthAttributes,
    _encode_UnauthAttributes,
} from "../CryptographicMessageSyntax-2010/UnauthAttributes.ta.mjs";

/**
 * @summary AuthenticatedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticatedData ::= SEQUENCE {
 * version         CMSVersion,
 * originatorInfo     [0] IMPLICIT OriginatorInfo OPTIONAL,
 * recipientInfos     RecipientInfos,
 * macAlgorithm     MessageAuthenticationCodeAlgorithm,
 * digestAlgorithm     [1] DigestAlgorithmIdentifier OPTIONAL,
 * encapContentInfo     EncapsulatedContentInfo,
 * authAttrs         [2] IMPLICIT AuthAttributes OPTIONAL,
 * mac             MessageAuthenticationCode,
 * unauthAttrs     [3] IMPLICIT UnauthAttributes OPTIONAL }
 * ```
 *
 * @class
 */
export class AuthenticatedData {
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
     * @summary Restructures an object into a AuthenticatedData
     * @description
     *
     * This takes an `object` and converts it to a `AuthenticatedData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticatedData`.
     * @returns {AuthenticatedData}
     */
    public static _from_object(
        _o: { [_K in keyof AuthenticatedData]: AuthenticatedData[_K] }
    ): AuthenticatedData {
        return new AuthenticatedData(
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
 * @summary The Leading Root Component Types of AuthenticatedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthenticatedData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "originatorInfo",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "recipientInfos",
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        "macAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "digestAlgorithm",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "encapContentInfo",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "authAttrs",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "mac",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "unauthAttrs",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];


/**
 * @summary The Trailing Root Component Types of AuthenticatedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthenticatedData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AuthenticatedData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthenticatedData: $.ComponentSpec[] = [];


let _cached_decoder_for_AuthenticatedData: $.ASN1Decoder<AuthenticatedData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticatedData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticatedData} The decoded data structure.
 */
export function _decode_AuthenticatedData(el: _Element) {
    if (!_cached_decoder_for_AuthenticatedData) {
        _cached_decoder_for_AuthenticatedData = function (
            el: _Element
        ): AuthenticatedData {
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
                    macAlgorithm = _decode_MessageAuthenticationCodeAlgorithm(
                        _el
                    );
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
                _root_component_type_list_1_spec_for_AuthenticatedData,
                _extension_additions_list_spec_for_AuthenticatedData,
                _root_component_type_list_2_spec_for_AuthenticatedData,
                undefined
            );
            return new AuthenticatedData /* SEQUENCE_CONSTRUCTOR_CALL */(
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
    return _cached_decoder_for_AuthenticatedData(el);
}


let _cached_encoder_for_AuthenticatedData: $.ASN1Encoder<AuthenticatedData> | null = null;


/**
 * @summary Encodes a(n) AuthenticatedData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticatedData, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticatedData(
    value: AuthenticatedData,
    elGetter: $.ASN1Encoder<AuthenticatedData>
) {
    if (!_cached_encoder_for_AuthenticatedData) {
        _cached_encoder_for_AuthenticatedData = function (
            value: AuthenticatedData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.originatorInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_OriginatorInfo,
                                  $.DER
                              )(value.originatorInfo, $.DER),
                        /* REQUIRED   */ _encode_RecipientInfos(
                            value.recipientInfos,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_MessageAuthenticationCodeAlgorithm(
                            value.macAlgorithm,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.digestAlgorithm === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_DigestAlgorithmIdentifier,
                                  $.DER
                              )(value.digestAlgorithm, $.DER),
                        /* REQUIRED   */ _encode_EncapsulatedContentInfo(
                            value.encapContentInfo,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.authAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_AuthAttributes,
                                  $.DER
                              )(value.authAttrs, $.DER),
                        /* REQUIRED   */ _encode_MessageAuthenticationCode(
                            value.mac,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.unauthAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_UnauthAttributes,
                                  $.DER
                              )(value.unauthAttrs, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_AuthenticatedData(value, elGetter);
}


/* eslint-enable */
