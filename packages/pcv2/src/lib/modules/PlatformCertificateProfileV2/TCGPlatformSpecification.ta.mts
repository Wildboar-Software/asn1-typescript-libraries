/* eslint-disable */
import {
    ASN1SizeError,
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TCGSpecificationVersion, _decode_TCGSpecificationVersion, _encode_TCGSpecificationVersion } from "../PlatformCertificateProfileV2/TCGSpecificationVersion.ta.mjs";


/**
 * @summary TCGPlatformSpecification
 * @description
 *
 * Platform class and the version of the TCG platform-specific specification the
 * platform implements, for example the PC Client Platform Firmware Profile.
 * Required on a base certificate. Optional on a delta certificate. A delta
 * certificate's changes do not invalidate the platform-specification claim of
 * the base certificate (§2.2.3).
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.17 and §2.1.4.13.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCGPlatformSpecification ::= SEQUENCE {
 *     version         TCGSpecificationVersion,
 *     platformClass   OCTET STRING (SIZE(4))
 * }
 * ```
 * 
 * @class
 */
export
class TCGPlatformSpecification {
    /**
     * @summary `version`.
     * @description
     *
     * Major version, minor version, and revision of the platform-specific
     * specification.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.17.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly version: TCGSpecificationVersion;
    /**
     * @summary `platformClass`.
     * @description
     *
     * Four-byte platform class. Standardized values are in section 4, Platform
     * Class, of the Registry of Reserved TPM 2.0 Handles and Localities. This
     * profile cites that registry and does not list the values.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.17.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly platformClass: OCTET_STRING;

    constructor (
        version: TCGSpecificationVersion,
        platformClass: OCTET_STRING
    ) {
        this.version = version;
        this.platformClass = platformClass;
        if (platformClass.length !== 4) {
            throw new ASN1SizeError("TCGPlatformSpecification.platformClass violates SIZE (4)");
        }
    }

    /**
     * @summary Restructures an object into a TCGPlatformSpecification
     * @description
     * 
     * This takes an `object` and converts it to a `TCGPlatformSpecification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TCGPlatformSpecification`.
     * @returns {TCGPlatformSpecification}
     */
    public static _from_object (_o: { [_K in keyof (TCGPlatformSpecification)]: (TCGPlatformSpecification)[_K] }): TCGPlatformSpecification {
        return new TCGPlatformSpecification(_o.version, _o.platformClass);
    }


}

/**
 * @summary The Leading Root Component Types of TCGPlatformSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TCGPlatformSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("platformClass", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of TCGPlatformSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TCGPlatformSpecification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TCGPlatformSpecification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TCGPlatformSpecification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TCGPlatformSpecification: $.ASN1Decoder<TCGPlatformSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TCGPlatformSpecification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TCGPlatformSpecification (el: _Element): TCGPlatformSpecification {
    if (!_cached_decoder_for_TCGPlatformSpecification) { _cached_decoder_for_TCGPlatformSpecification = function (el: _Element): TCGPlatformSpecification {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TCGPlatformSpecification contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "version";
    sequence[1].name = "platformClass";
    let version!: TCGSpecificationVersion;
    let platformClass!: OCTET_STRING;
    version = _decode_TCGSpecificationVersion(sequence[0]);
    platformClass = $._decodeOctetString(sequence[1]);
    return new TCGPlatformSpecification(
        version,
        platformClass,

    );
}; }
    return _cached_decoder_for_TCGPlatformSpecification(el);
}

let _cached_encoder_for_TCGPlatformSpecification: $.ASN1Encoder<TCGPlatformSpecification> | null = null;

/**
 * @summary Encodes a(n) TCGPlatformSpecification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCGPlatformSpecification, encoded as an ASN.1 Element.
 */
export
function _encode_TCGPlatformSpecification (value: TCGPlatformSpecification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TCGPlatformSpecification) { _cached_encoder_for_TCGPlatformSpecification = function (value: TCGPlatformSpecification): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_TCGSpecificationVersion(value.version, $.BER),
        /* REQUIRED   */ $._encodeOctetString(value.platformClass, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_TCGPlatformSpecification(value, elGetter);
}


/* eslint-enable */
