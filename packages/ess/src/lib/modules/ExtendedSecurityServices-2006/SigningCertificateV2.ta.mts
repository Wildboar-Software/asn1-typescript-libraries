/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ESSCertIDv2,
    _decode_ESSCertIDv2,
    _encode_ESSCertIDv2,
} from "../ExtendedSecurityServices-2006/ESSCertIDv2.ta.mjs";
import {
    PolicyInformation,
    _decode_PolicyInformation,
    _encode_PolicyInformation,
} from "@wildboar/x500/CertificateExtensions";

/**
 * @summary SigningCertificateV2
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigningCertificateV2 ::= SEQUENCE {
 *     certs        SEQUENCE OF ESSCertIDv2,
 *     policies     SEQUENCE OF PolicyInformation OPTIONAL
 * }
 * ```
 *
 */
export class SigningCertificateV2 {
    constructor(
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: ESSCertIDv2[],
        /**
         * @summary `policies`.
         * @public
         * @readonly
         */
        readonly policies: OPTIONAL<PolicyInformation[]>
    ) {}

    /**
     * @summary Restructures an object into a SigningCertificateV2
     * @description
     *
     * This takes an `object` and converts it to a `SigningCertificateV2`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SigningCertificateV2`.
     * @returns {SigningCertificateV2}
     */
    public static _from_object(
        _o: { [_K in keyof SigningCertificateV2]: SigningCertificateV2[_K] }
    ): SigningCertificateV2 {
        return new SigningCertificateV2(_o.certs, _o.policies);
    }
}


/**
 * @summary The Leading Root Component Types of SigningCertificateV2
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SigningCertificateV2: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "certs",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "policies",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of SigningCertificateV2
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SigningCertificateV2: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SigningCertificateV2
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SigningCertificateV2: $.ComponentSpec[] = [];


let _cached_decoder_for_SigningCertificateV2: $.ASN1Decoder<SigningCertificateV2> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SigningCertificateV2
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigningCertificateV2} The decoded data structure.
 */
export function _decode_SigningCertificateV2(el: _Element): SigningCertificateV2 {
    if (!_cached_decoder_for_SigningCertificateV2) {
        _cached_decoder_for_SigningCertificateV2 = function (
            el: _Element
        ): SigningCertificateV2 {
            let certs!: ESSCertIDv2[];
            let policies: OPTIONAL<PolicyInformation[]>;
            const callbacks: $.DecodingMap = {
                certs: (_el: _Element): void => {
                    certs = $._decodeSequenceOf<ESSCertIDv2>(
                        () => _decode_ESSCertIDv2
                    )(_el);
                },
                policies: (_el: _Element): void => {
                    policies = $._decodeSequenceOf<PolicyInformation>(
                        () => _decode_PolicyInformation
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SigningCertificateV2,
                _extension_additions_list_spec_for_SigningCertificateV2,
                _root_component_type_list_2_spec_for_SigningCertificateV2,
                undefined
            );
            return new SigningCertificateV2(
                certs,
                policies
            );
        };
    }
    return _cached_decoder_for_SigningCertificateV2(el);
}


let _cached_encoder_for_SigningCertificateV2: $.ASN1Encoder<SigningCertificateV2> | null = null;


/**
 * @summary Encodes a(n) SigningCertificateV2 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigningCertificateV2, encoded as an ASN.1 Element.
 */
export function _encode_SigningCertificateV2(
    value: SigningCertificateV2,
    elGetter: $.ASN1Encoder<SigningCertificateV2>
): _Element {
    if (!_cached_encoder_for_SigningCertificateV2) {
        _cached_encoder_for_SigningCertificateV2 = function (
            value: SigningCertificateV2        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeSequenceOf<ESSCertIDv2>(
                            () => _encode_ESSCertIDv2,
                            $.DER
                        )(value.certs, $.DER),
                        /* IF_ABSENT  */ value.policies === undefined
                            ? undefined
                            : $._encodeSequenceOf<PolicyInformation>(
                                  () => _encode_PolicyInformation,
                                  $.DER
                              )(value.policies, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SigningCertificateV2(value, elGetter);
}


/* eslint-enable */
