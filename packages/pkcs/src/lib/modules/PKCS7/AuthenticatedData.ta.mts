/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Attributes,
    _decode_Attributes,
    _encode_Attributes,
} from "../PKCS7/Attributes.ta.mjs";
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "../PKCS7/ContentInfo.ta.mjs";
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../PKCS7/DigestAlgorithmIdentifier.ta.mjs";
import {
    MessageAuthenticationCode,
    _decode_MessageAuthenticationCode,
    _encode_MessageAuthenticationCode,
} from "../PKCS7/MessageAuthenticationCode.ta.mjs";
import {
    MessageAuthenticationCodeAlgorithmIdentifier,
    _decode_MessageAuthenticationCodeAlgorithmIdentifier,
    _encode_MessageAuthenticationCodeAlgorithmIdentifier,
} from "../PKCS7/MessageAuthenticationCodeAlgorithmIdentifier.ta.mjs";
import {
    OriginatorInfo,
    _decode_OriginatorInfo,
    _encode_OriginatorInfo,
} from "../PKCS7/OriginatorInfo.ta.mjs";
import {
    RecipientInfos,
    _decode_RecipientInfos,
    _encode_RecipientInfos,
} from "../PKCS7/RecipientInfos.ta.mjs";
import { Version, _decode_Version, _encode_Version } from "../PKCS7/Version.ta.mjs";

/**
 * @summary AuthenticatedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticatedData ::= SEQUENCE {
 *     version                    Version,
 *     originatorInfo             [0]  OriginatorInfo OPTIONAL,
 *     recipientInfos             RecipientInfos,
 *     macAlgorithm               MessageAuthenticationCodeAlgorithmIdentifier,
 *     digestAlgorithm            [1]  DigestAlgorithmIdentifier OPTIONAL,
 *     contentInfo                ContentInfo,
 *     authenticatedAttributes    [2]  Attributes OPTIONAL,
 *     messageAuthenticationCode  MessageAuthenticationCode,
 *     unauthenticatedAttributes  [3]  Attributes OPTIONAL
 * }
 * ```
 *
 */
export class AuthenticatedData {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: Version,
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
        readonly macAlgorithm: MessageAuthenticationCodeAlgorithmIdentifier,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: OPTIONAL<DigestAlgorithmIdentifier>,
        /**
         * @summary `contentInfo`.
         * @public
         * @readonly
         */
        readonly contentInfo: ContentInfo,
        /**
         * @summary `authenticatedAttributes`.
         * @public
         * @readonly
         */
        readonly authenticatedAttributes: OPTIONAL<Attributes>,
        /**
         * @summary `messageAuthenticationCode`.
         * @public
         * @readonly
         */
        readonly messageAuthenticationCode: MessageAuthenticationCode,
        /**
         * @summary `unauthenticatedAttributes`.
         * @public
         * @readonly
         */
        readonly unauthenticatedAttributes: OPTIONAL<Attributes>
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
            _o.contentInfo,
            _o.authenticatedAttributes,
            _o.messageAuthenticationCode,
            _o.unauthenticatedAttributes
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
        "contentInfo",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "authenticatedAttributes",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "messageAuthenticationCode",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "unauthenticatedAttributes",
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
export function _decode_AuthenticatedData(el: _Element): AuthenticatedData {
    if (!_cached_decoder_for_AuthenticatedData) {
        _cached_decoder_for_AuthenticatedData = function (
            el: _Element
        ): AuthenticatedData {
            let version!: Version;
            let originatorInfo: OPTIONAL<OriginatorInfo>;
            let recipientInfos!: RecipientInfos;
            let macAlgorithm!: MessageAuthenticationCodeAlgorithmIdentifier;
            let digestAlgorithm: OPTIONAL<DigestAlgorithmIdentifier>;
            let contentInfo!: ContentInfo;
            let authenticatedAttributes: OPTIONAL<Attributes>;
            let messageAuthenticationCode!: MessageAuthenticationCode;
            let unauthenticatedAttributes: OPTIONAL<Attributes>;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_Version(_el);
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
                    macAlgorithm = _decode_MessageAuthenticationCodeAlgorithmIdentifier(
                        _el
                    );
                },
                digestAlgorithm: (_el: _Element): void => {
                    digestAlgorithm = $._decode_implicit<DigestAlgorithmIdentifier>(
                        () => _decode_DigestAlgorithmIdentifier
                    )(_el);
                },
                contentInfo: (_el: _Element): void => {
                    contentInfo = _decode_ContentInfo(_el);
                },
                authenticatedAttributes: (_el: _Element): void => {
                    authenticatedAttributes = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
                messageAuthenticationCode: (_el: _Element): void => {
                    messageAuthenticationCode = _decode_MessageAuthenticationCode(
                        _el
                    );
                },
                unauthenticatedAttributes: (_el: _Element): void => {
                    unauthenticatedAttributes = $._decode_implicit<Attributes>(
                        () => _decode_Attributes
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthenticatedData,
                _extension_additions_list_spec_for_AuthenticatedData,
                _root_component_type_list_2_spec_for_AuthenticatedData,
                undefined
            );
            return new AuthenticatedData(
                version,
                originatorInfo,
                recipientInfos,
                macAlgorithm,
                digestAlgorithm,
                contentInfo,
                authenticatedAttributes,
                messageAuthenticationCode,
                unauthenticatedAttributes
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
): _Element {
    if (!_cached_encoder_for_AuthenticatedData) {
        _cached_encoder_for_AuthenticatedData = function (
            value: AuthenticatedData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Version(value.version, $.BER),
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
                        /* REQUIRED   */ _encode_MessageAuthenticationCodeAlgorithmIdentifier(
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
                        /* REQUIRED   */ _encode_ContentInfo(
                            value.contentInfo,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.authenticatedAttributes ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_Attributes,
                                  $.BER
                              )(value.authenticatedAttributes, $.BER),
                        /* REQUIRED   */ _encode_MessageAuthenticationCode(
                            value.messageAuthenticationCode,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.unauthenticatedAttributes ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_Attributes,
                                  $.BER
                              )(value.unauthenticatedAttributes, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AuthenticatedData(value, elGetter);
}


/* eslint-enable */
