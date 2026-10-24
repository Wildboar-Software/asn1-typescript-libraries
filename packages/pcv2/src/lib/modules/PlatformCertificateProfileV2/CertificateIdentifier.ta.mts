/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HashedCertificateIdentifier, _decode_HashedCertificateIdentifier, _encode_HashedCertificateIdentifier } from "../PlatformCertificateProfileV2/HashedCertificateIdentifier.ta.mjs";
import { IssuerSerial, _decode_IssuerSerial, _encode_IssuerSerial } from "@wildboar/x500/AttributeCertificateDefinitions";


/**
 * @summary CertificateIdentifier
 * @description
 *
 * Reference to another certificate, either by a hash of its signature or by
 * issuer and serial number (RFC 5755 `IssuerSerial`), or both. The profile
 * recommends this syntax where a verifier needs an interoperable certificate
 * pointer. Additional certificate-identifier traits may be defined by TCG.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.2.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateIdentifier ::= SEQUENCE {
 *     hashedCertIdentifier        [0] IMPLICIT HashedCertificateIdentifier OPTIONAL,
 *     genericCertIdentifier       [1] IMPLICIT IssuerSerial OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CertificateIdentifier {
    /**
     * @summary `hashedCertIdentifier`.
     * @description
     *
     * Hash of the referenced certificate's signature.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.2.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly hashedCertIdentifier: OPTIONAL<HashedCertificateIdentifier>;
    /**
     * @summary `genericCertIdentifier`.
     * @description
     *
     * Issuer distinguished name and serial number of the referenced
     * certificate, as RFC 5755 `IssuerSerial`.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.2 and §3.3.13.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly genericCertIdentifier: OPTIONAL<IssuerSerial>;

    constructor (
        hashedCertIdentifier?: OPTIONAL<HashedCertificateIdentifier>,
        genericCertIdentifier?: OPTIONAL<IssuerSerial>
    ) {
        this.hashedCertIdentifier = hashedCertIdentifier;
        this.genericCertIdentifier = genericCertIdentifier;
    }

    /**
     * @summary Restructures an object into a CertificateIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `CertificateIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateIdentifier`.
     * @returns {CertificateIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (CertificateIdentifier)]: (CertificateIdentifier)[_K] }): CertificateIdentifier {
        return new CertificateIdentifier(_o.hashedCertIdentifier, _o.genericCertIdentifier);
    }


}

/**
 * @summary The Leading Root Component Types of CertificateIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificateIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("hashedCertIdentifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("genericCertIdentifier", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CertificateIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificateIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertificateIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificateIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertificateIdentifier: $.ASN1Decoder<CertificateIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateIdentifier (el: _Element): CertificateIdentifier {
    if (!_cached_decoder_for_CertificateIdentifier) { _cached_decoder_for_CertificateIdentifier = function (el: _Element): CertificateIdentifier {
    let hashedCertIdentifier: OPTIONAL<HashedCertificateIdentifier>;
    let genericCertIdentifier: OPTIONAL<IssuerSerial>;
    const callbacks: $.DecodingMap = {
        "hashedCertIdentifier": (_el: _Element): void => { hashedCertIdentifier = $._decode_implicit<HashedCertificateIdentifier>(() => _decode_HashedCertificateIdentifier)(_el); },
        "genericCertIdentifier": (_el: _Element): void => { genericCertIdentifier = $._decode_implicit<IssuerSerial>(() => _decode_IssuerSerial)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CertificateIdentifier,
        _extension_additions_list_spec_for_CertificateIdentifier,
        _root_component_type_list_2_spec_for_CertificateIdentifier,
        undefined,
    );
    return new CertificateIdentifier(
        hashedCertIdentifier,
        genericCertIdentifier
    );
}; }
    return _cached_decoder_for_CertificateIdentifier(el);
}

let _cached_encoder_for_CertificateIdentifier: $.ASN1Encoder<CertificateIdentifier> | null = null;

/**
 * @summary Encodes a(n) CertificateIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateIdentifier (value: CertificateIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateIdentifier) { _cached_encoder_for_CertificateIdentifier = function (value: CertificateIdentifier): _Element {
    const _components: _Element[] = [];
    if (value.hashedCertIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_HashedCertificateIdentifier, $.BER)(value.hashedCertIdentifier, $.BER));
    }
    if (value.genericCertIdentifier !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IssuerSerial, $.BER)(value.genericCertIdentifier, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CertificateIdentifier(value, elGetter);
}


/* eslint-enable */
