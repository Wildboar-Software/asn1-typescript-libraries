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
} from "../CMSSigncryption/CMSVersion.ta.mjs";
import {
    SignatureInformation,
    _decode_SignatureInformation,
    _encode_SignatureInformation,
} from "../CMSSigncryption/SignatureInformation.ta.mjs";
import {
    SigncryptedDataAlgorithmIdentifier,
    _decode_SigncryptedDataAlgorithmIdentifier,
    _encode_SigncryptedDataAlgorithmIdentifier,
} from "../CMSSigncryption/SigncryptedDataAlgorithmIdentifier.ta.mjs";
import {
    SigncrypterIDs,
    _decode_SigncrypterIDs,
    _encode_SigncrypterIDs,
} from "../CMSSigncryption/SigncrypterIDs.ta.mjs";
import {
    SigncryptionValue,
    _decode_SigncryptionValue,
    _encode_SigncryptionValue,
} from "../CMSSigncryption/SigncryptionValue.ta.mjs";
import {
    UnSigncryptedAttributes,
    _decode_UnSigncryptedAttributes,
    _encode_UnSigncryptedAttributes,
} from "../CMSSigncryption/UnSigncryptedAttributes.ta.mjs";

/**
 * @summary Signcrypter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Signcrypter ::= SEQUENCE {
 * version            CMSVersion,
 * side                SigncrypterIDs,
 * signcryptedDataAlgorithm    SigncryptedDataAlgorithmIdentifier,
 * signcryptionValue        SigncryptionValue,
 * signatureInformation    SignatureInformation OPTIONAL,
 * unsigncryptedAttributes    UnSigncryptedAttributes OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class Signcrypter {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `side`.
         * @public
         * @readonly
         */
        readonly side: SigncrypterIDs,
        /**
         * @summary `signcryptedDataAlgorithm`.
         * @public
         * @readonly
         */
        readonly signcryptedDataAlgorithm: SigncryptedDataAlgorithmIdentifier,
        /**
         * @summary `signcryptionValue`.
         * @public
         * @readonly
         */
        readonly signcryptionValue: SigncryptionValue,
        /**
         * @summary `signatureInformation`.
         * @public
         * @readonly
         */
        readonly signatureInformation: OPTIONAL<SignatureInformation>,
        /**
         * @summary `unsigncryptedAttributes`.
         * @public
         * @readonly
         */
        readonly unsigncryptedAttributes: OPTIONAL<UnSigncryptedAttributes>
    ) {}

    /**
     * @summary Restructures an object into a Signcrypter
     * @description
     *
     * This takes an `object` and converts it to a `Signcrypter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Signcrypter`.
     * @returns {Signcrypter}
     */
    public static _from_object(
        _o: { [_K in keyof Signcrypter]: Signcrypter[_K] }
    ): Signcrypter {
        return new Signcrypter(
            _o.version,
            _o.side,
            _o.signcryptedDataAlgorithm,
            _o.signcryptionValue,
            _o.signatureInformation,
            _o.unsigncryptedAttributes
        );
    }
}


/**
 * @summary The Leading Root Component Types of Signcrypter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Signcrypter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "side",
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "signcryptedDataAlgorithm",
        false,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "signcryptionValue",
        false,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "signatureInformation",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "unsigncryptedAttributes",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
];


/**
 * @summary The Trailing Root Component Types of Signcrypter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Signcrypter: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of Signcrypter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Signcrypter: $.ComponentSpec[] = [];


let _cached_decoder_for_Signcrypter: $.ASN1Decoder<Signcrypter> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Signcrypter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Signcrypter} The decoded data structure.
 */
export function _decode_Signcrypter(el: _Element) {
    if (!_cached_decoder_for_Signcrypter) {
        _cached_decoder_for_Signcrypter = function (el: _Element): Signcrypter {
            let version!: CMSVersion;
            let side!: SigncrypterIDs;
            let signcryptedDataAlgorithm!: SigncryptedDataAlgorithmIdentifier;
            let signcryptionValue!: SigncryptionValue;
            let signatureInformation: OPTIONAL<SignatureInformation>;
            let unsigncryptedAttributes: OPTIONAL<UnSigncryptedAttributes>;
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_CMSVersion(_el);
                },
                side: (_el: _Element): void => {
                    side = _decode_SigncrypterIDs(_el);
                },
                signcryptedDataAlgorithm: (_el: _Element): void => {
                    signcryptedDataAlgorithm = _decode_SigncryptedDataAlgorithmIdentifier(
                        _el
                    );
                },
                signcryptionValue: (_el: _Element): void => {
                    signcryptionValue = _decode_SigncryptionValue(_el);
                },
                signatureInformation: (_el: _Element): void => {
                    signatureInformation = _decode_SignatureInformation(_el);
                },
                unsigncryptedAttributes: (_el: _Element): void => {
                    unsigncryptedAttributes = _decode_UnSigncryptedAttributes(
                        _el
                    );
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Signcrypter,
                _extension_additions_list_spec_for_Signcrypter,
                _root_component_type_list_2_spec_for_Signcrypter,
                undefined
            );
            return new Signcrypter (
                version,
                side,
                signcryptedDataAlgorithm,
                signcryptionValue,
                signatureInformation,
                unsigncryptedAttributes
            );
        };
    }
    return _cached_decoder_for_Signcrypter(el);
}


let _cached_encoder_for_Signcrypter: $.ASN1Encoder<Signcrypter> | null = null;


/**
 * @summary Encodes a(n) Signcrypter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signcrypter, encoded as an ASN.1 Element.
 */
export function _encode_Signcrypter(
    value: Signcrypter,
    elGetter: $.ASN1Encoder<Signcrypter>
) {
    if (!_cached_encoder_for_Signcrypter) {
        _cached_encoder_for_Signcrypter = function (
            value: Signcrypter        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_SigncrypterIDs(
                            value.side,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_SigncryptedDataAlgorithmIdentifier(
                            value.signcryptedDataAlgorithm,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_SigncryptionValue(
                            value.signcryptionValue,
                            $.DER
                        ),
                        /* IF_ABSENT  */ value.signatureInformation ===
                        undefined
                            ? undefined
                            : _encode_SignatureInformation(
                                  value.signatureInformation,
                                  $.DER
                              ),
                        /* IF_ABSENT  */ value.unsigncryptedAttributes ===
                        undefined
                            ? undefined
                            : _encode_UnSigncryptedAttributes(
                                  value.unsigncryptedAttributes,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_Signcrypter(value, elGetter);
}


/* eslint-enable */
