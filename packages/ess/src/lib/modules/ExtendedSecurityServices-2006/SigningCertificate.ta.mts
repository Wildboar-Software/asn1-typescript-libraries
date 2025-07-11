/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ESSCertID,
    _decode_ESSCertID,
    _encode_ESSCertID,
} from "../ExtendedSecurityServices-2006/ESSCertID.ta.mjs";
import {
    PolicyInformation,
    _decode_PolicyInformation,
    _encode_PolicyInformation,
} from "@wildboar/x500/CertificateExtensions";

/**
 * @summary SigningCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SigningCertificate ::= SEQUENCE {
 *     certs        SEQUENCE OF ESSCertID,
 *     policies     SEQUENCE OF PolicyInformation OPTIONAL
 * }
 * ```
 *
 */
export class SigningCertificate {
    constructor(
        /**
         * @summary `certs`.
         * @public
         * @readonly
         */
        readonly certs: ESSCertID[],
        /**
         * @summary `policies`.
         * @public
         * @readonly
         */
        readonly policies: OPTIONAL<PolicyInformation[]>
    ) {}

    /**
     * @summary Restructures an object into a SigningCertificate
     * @description
     *
     * This takes an `object` and converts it to a `SigningCertificate`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SigningCertificate`.
     * @returns {SigningCertificate}
     */
    public static _from_object(
        _o: { [_K in keyof SigningCertificate]: SigningCertificate[_K] }
    ): SigningCertificate {
        return new SigningCertificate(_o.certs, _o.policies);
    }
}


/**
 * @summary The Leading Root Component Types of SigningCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SigningCertificate: $.ComponentSpec[] = [
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
 * @summary The Trailing Root Component Types of SigningCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SigningCertificate: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of SigningCertificate
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SigningCertificate: $.ComponentSpec[] = [];


let _cached_decoder_for_SigningCertificate: $.ASN1Decoder<SigningCertificate> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SigningCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SigningCertificate} The decoded data structure.
 */
export function _decode_SigningCertificate(el: _Element): SigningCertificate {
    if (!_cached_decoder_for_SigningCertificate) {
        _cached_decoder_for_SigningCertificate = function (
            el: _Element
        ): SigningCertificate {
            let certs!: ESSCertID[];
            let policies: OPTIONAL<PolicyInformation[]>;
            const callbacks: $.DecodingMap = {
                certs: (_el: _Element): void => {
                    certs = $._decodeSequenceOf<ESSCertID>(
                        () => _decode_ESSCertID
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
                _root_component_type_list_1_spec_for_SigningCertificate,
                _extension_additions_list_spec_for_SigningCertificate,
                _root_component_type_list_2_spec_for_SigningCertificate,
                undefined
            );
            return new SigningCertificate(
                certs,
                policies
            );
        };
    }
    return _cached_decoder_for_SigningCertificate(el);
}


let _cached_encoder_for_SigningCertificate: $.ASN1Encoder<SigningCertificate> | null = null;


/**
 * @summary Encodes a(n) SigningCertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SigningCertificate, encoded as an ASN.1 Element.
 */
export function _encode_SigningCertificate(
    value: SigningCertificate,
    elGetter: $.ASN1Encoder<SigningCertificate>
): _Element {
    if (!_cached_encoder_for_SigningCertificate) {
        _cached_encoder_for_SigningCertificate = function (
            value: SigningCertificate        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encodeSequenceOf<ESSCertID>(
                            () => _encode_ESSCertID,
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
    return _cached_encoder_for_SigningCertificate(value, elGetter);
}


/* eslint-enable */
