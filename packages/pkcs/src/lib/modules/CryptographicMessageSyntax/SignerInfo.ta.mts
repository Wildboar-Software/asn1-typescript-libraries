/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax/CMSVersion.ta.mjs";
import {
    DigestAlgorithmIdentifier,
    _decode_DigestAlgorithmIdentifier,
    _encode_DigestAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/DigestAlgorithmIdentifier.ta.mjs";
import {
    SignatureAlgorithmIdentifier,
    _decode_SignatureAlgorithmIdentifier,
    _encode_SignatureAlgorithmIdentifier,
} from "../CryptographicMessageSyntax/SignatureAlgorithmIdentifier.ta.mjs";
import {
    SignatureValue,
    _decode_SignatureValue,
    _encode_SignatureValue,
} from "../CryptographicMessageSyntax/SignatureValue.ta.mjs";
import {
    SignedAttributes,
    _decode_SignedAttributes,
    _encode_SignedAttributes,
} from "../CryptographicMessageSyntax/SignedAttributes.ta.mjs";
import {
    SignerIdentifier,
    _decode_SignerIdentifier,
    _encode_SignerIdentifier,
} from "../CryptographicMessageSyntax/SignerIdentifier.ta.mjs";
import {
    UnsignedAttributes,
    _decode_UnsignedAttributes,
    _encode_UnsignedAttributes,
} from "../CryptographicMessageSyntax/UnsignedAttributes.ta.mjs";

/**
 * @summary SignerInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignerInfo ::= SEQUENCE {
 *   version             CMSVersion,
 *   sid                 SignerIdentifier,
 *   digestAlgorithm     DigestAlgorithmIdentifier,
 *   signedAttrs         [0] IMPLICIT SignedAttributes OPTIONAL,
 *   signatureAlgorithm  SignatureAlgorithmIdentifier,
 *   signature           SignatureValue,
 *   unsignedAttrs       [1] IMPLICIT UnsignedAttributes OPTIONAL
 * }
 * ```
 *
 */
export class SignerInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `sid`.
         * @public
         * @readonly
         */
        readonly sid: SignerIdentifier,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        /**
         * @summary `signedAttrs`.
         * @public
         * @readonly
         */
        readonly signedAttrs: OPTIONAL<SignedAttributes>,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: SignatureAlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: SignatureValue,
        /**
         * @summary `unsignedAttrs`.
         * @public
         * @readonly
         */
        readonly unsignedAttrs: OPTIONAL<UnsignedAttributes>
    ) {}

    /**
     * @summary Restructures an object into a SignerInfo
     * @description
     *
     * This takes an `object` and converts it to a `SignerInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignerInfo`.
     * @returns {SignerInfo}
     */
    public static _from_object(
        _o: { [_K in keyof SignerInfo]: SignerInfo[_K] }
    ): SignerInfo {
        return new SignerInfo(
            _o.version,
            _o.sid,
            _o.digestAlgorithm,
            _o.signedAttrs,
            _o.signatureAlgorithm,
            _o.signature,
            _o.unsignedAttrs
        );
    }
}


/**
 * @summary The Leading Root Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SignerInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("sid", false, $.hasAnyTag),
    new $.ComponentSpec(
        "digestAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "signedAttrs",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "signatureAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "unsignedAttrs",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];


/**
 * @summary The Trailing Root Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SignerInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SignerInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SignerInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_SignerInfo: $.ASN1Decoder<SignerInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignerInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerInfo} The decoded data structure.
 */
export function _decode_SignerInfo(el: _Element): SignerInfo {
    if (!_cached_decoder_for_SignerInfo) {
        _cached_decoder_for_SignerInfo = function (el: _Element): SignerInfo {
            let version!: CMSVersion;
            let sid!: SignerIdentifier;
            let digestAlgorithm!: DigestAlgorithmIdentifier;
            let signedAttrs: OPTIONAL<SignedAttributes>;
            let signatureAlgorithm!: SignatureAlgorithmIdentifier;
            let signature!: SignatureValue;
            let unsignedAttrs: OPTIONAL<UnsignedAttributes>;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                sid: (_el: _Element): void => {
                    sid = _decode_SignerIdentifier(_el);
                },
                digestAlgorithm: (_el: _Element): void => {
                    digestAlgorithm = _decode_DigestAlgorithmIdentifier(_el);
                },
                signedAttrs: (_el: _Element): void => {
                    signedAttrs = $._decode_implicit<SignedAttributes>(
                        () => _decode_SignedAttributes
                    )(_el);
                },
                signatureAlgorithm: (_el: _Element): void => {
                    signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(
                        _el
                    );
                },
                signature: (_el: _Element): void => {
                    signature = _decode_SignatureValue(_el);
                },
                unsignedAttrs: (_el: _Element): void => {
                    unsignedAttrs = $._decode_implicit<UnsignedAttributes>(
                        () => _decode_UnsignedAttributes
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SignerInfo,
                _extension_additions_list_spec_for_SignerInfo,
                _root_component_type_list_2_spec_for_SignerInfo,
                undefined
            );
            return new SignerInfo(
                version,
                sid,
                digestAlgorithm,
                signedAttrs,
                signatureAlgorithm,
                signature,
                unsignedAttrs
            );
        };
    }
    return _cached_decoder_for_SignerInfo(el);
}


let _cached_encoder_for_SignerInfo: $.ASN1Encoder<SignerInfo> | null = null;


/**
 * @summary Encodes a(n) SignerInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerInfo, encoded as an ASN.1 Element.
 */
export function _encode_SignerInfo(
    value: SignerInfo,
    elGetter: $.ASN1Encoder<SignerInfo>
): _Element {
    if (!_cached_encoder_for_SignerInfo) {
        _cached_encoder_for_SignerInfo = function (
            value: SignerInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SignerIdentifier(
                            value.sid,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(
                            value.digestAlgorithm,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.signedAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_SignedAttributes,
                                  $.BER
                              )(value.signedAttrs, $.BER),
                        /* REQUIRED   */ _encode_SignatureAlgorithmIdentifier(
                            value.signatureAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_SignatureValue(
                            value.signature,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.unsignedAttrs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_UnsignedAttributes,
                                  $.BER
                              )(value.unsignedAttrs, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_SignerInfo(value, elGetter);
}


/* eslint-enable */
