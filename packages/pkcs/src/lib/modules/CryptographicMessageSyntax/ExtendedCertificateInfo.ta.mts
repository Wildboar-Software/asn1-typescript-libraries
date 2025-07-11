/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "@wildboar/x500/AuthenticationFramework";
import {
    CMSVersion,
    _decode_CMSVersion,
    _encode_CMSVersion,
} from "../CryptographicMessageSyntax/CMSVersion.ta.mjs";
import {
    UnauthAttributes,
    _decode_UnauthAttributes,
    _encode_UnauthAttributes,
} from "../CryptographicMessageSyntax/UnauthAttributes.ta.mjs";


/**
 * @summary ExtendedCertificateInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedCertificateInfo ::= SEQUENCE {
 *   version      CMSVersion,
 *   certificate  Certificate,
 *   attributes   UnauthAttributes
 * }
 * ```
 *
 */
export class ExtendedCertificateInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `certificate`.
         * @public
         * @readonly
         */
        readonly certificate: Certificate,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: UnauthAttributes
    ) {}

    /**
     * @summary Restructures an object into a ExtendedCertificateInfo
     * @description
     *
     * This takes an `object` and converts it to a `ExtendedCertificateInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedCertificateInfo`.
     * @returns {ExtendedCertificateInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof ExtendedCertificateInfo]: ExtendedCertificateInfo[_K];
        }
    ): ExtendedCertificateInfo {
        return new ExtendedCertificateInfo(
            _o.version,
            _o.certificate,
            _o.attributes
        );
    }
}


/**
 * @summary The Leading Root Component Types of ExtendedCertificateInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ExtendedCertificateInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "certificate",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "attributes",
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of ExtendedCertificateInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ExtendedCertificateInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ExtendedCertificateInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ExtendedCertificateInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_ExtendedCertificateInfo: $.ASN1Decoder<ExtendedCertificateInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedCertificateInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedCertificateInfo} The decoded data structure.
 */
export function _decode_ExtendedCertificateInfo(el: _Element): ExtendedCertificateInfo {
    if (!_cached_decoder_for_ExtendedCertificateInfo) {
        _cached_decoder_for_ExtendedCertificateInfo = function (
            el: _Element
        ): ExtendedCertificateInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    "ExtendedCertificateInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "version";
            sequence[1].name = "certificate";
            sequence[2].name = "attributes";
            let version!: CMSVersion;
            let certificate!: Certificate;
            let attributes!: UnauthAttributes;
            version = _decode_CMSVersion(sequence[0]);
            certificate = _decode_Certificate(sequence[1]);
            attributes = _decode_UnauthAttributes(sequence[2]);
            return new ExtendedCertificateInfo(
                version,
                certificate,
                attributes
            );
        };
    }
    return _cached_decoder_for_ExtendedCertificateInfo(el);
}


let _cached_encoder_for_ExtendedCertificateInfo: $.ASN1Encoder<ExtendedCertificateInfo> | null = null;


/**
 * @summary Encodes a(n) ExtendedCertificateInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedCertificateInfo, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedCertificateInfo(
    value: ExtendedCertificateInfo,
    elGetter: $.ASN1Encoder<ExtendedCertificateInfo>
): _Element {
    if (!_cached_encoder_for_ExtendedCertificateInfo) {
        _cached_encoder_for_ExtendedCertificateInfo = function (
            value: ExtendedCertificateInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CMSVersion(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_Certificate(
                            value.certificate,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_UnauthAttributes(
                            value.attributes,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_ExtendedCertificateInfo(value, elGetter);
}


/* eslint-enable */
