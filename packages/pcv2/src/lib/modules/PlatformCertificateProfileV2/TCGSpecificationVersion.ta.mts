/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TCGSpecificationVersion
 * @description
 *
 * Major version, minor version, and revision of the platform certificate
 * profile the certificate claims. When this certificate references another, the
 * attribute equals that certificate's `tCGCredentialSpecification`. A delta
 * certificate uses the same value as its base certificate; a different profile
 * version is a new base or rebase certificate.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.6 and §2.1.4.3.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCGSpecificationVersion ::= SEQUENCE {
 *     majorVersion    INTEGER,
 *     minorVersion    INTEGER,
 *     revision        INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class TCGSpecificationVersion {
    /**
     * @summary `majorVersion`.
     * @description
     *
     * Major version of the platform certificate profile.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.6.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly majorVersion: INTEGER;
    /**
     * @summary `minorVersion`.
     * @description
     *
     * Minor version of the platform certificate profile.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.6.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly minorVersion: INTEGER;
    /**
     * @summary `revision`.
     * @description
     *
     * Revision of the platform certificate profile.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.6.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly revision: INTEGER;

    constructor (
        majorVersion: INTEGER,
        minorVersion: INTEGER,
        revision: INTEGER
    ) {
        this.majorVersion = majorVersion;
        this.minorVersion = minorVersion;
        this.revision = revision;
    }

    /**
     * @summary Restructures an object into a TCGSpecificationVersion
     * @description
     * 
     * This takes an `object` and converts it to a `TCGSpecificationVersion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TCGSpecificationVersion`.
     * @returns {TCGSpecificationVersion}
     */
    public static _from_object (_o: { [_K in keyof (TCGSpecificationVersion)]: (TCGSpecificationVersion)[_K] }): TCGSpecificationVersion {
        return new TCGSpecificationVersion(_o.majorVersion, _o.minorVersion, _o.revision);
    }


}

/**
 * @summary The Leading Root Component Types of TCGSpecificationVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TCGSpecificationVersion: $.ComponentSpec[] = [
    new $.ComponentSpec("majorVersion", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("minorVersion", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("revision", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of TCGSpecificationVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TCGSpecificationVersion: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TCGSpecificationVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TCGSpecificationVersion: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TCGSpecificationVersion: $.ASN1Decoder<TCGSpecificationVersion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TCGSpecificationVersion
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TCGSpecificationVersion (el: _Element): TCGSpecificationVersion {
    if (!_cached_decoder_for_TCGSpecificationVersion) { _cached_decoder_for_TCGSpecificationVersion = function (el: _Element): TCGSpecificationVersion {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TCGSpecificationVersion contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "majorVersion";
    sequence[1].name = "minorVersion";
    sequence[2].name = "revision";
    let majorVersion!: INTEGER;
    let minorVersion!: INTEGER;
    let revision!: INTEGER;
    majorVersion = $._decodeInteger(sequence[0]);
    minorVersion = $._decodeInteger(sequence[1]);
    revision = $._decodeInteger(sequence[2]);
    return new TCGSpecificationVersion(
        majorVersion,
        minorVersion,
        revision,

    );
}; }
    return _cached_decoder_for_TCGSpecificationVersion(el);
}

let _cached_encoder_for_TCGSpecificationVersion: $.ASN1Encoder<TCGSpecificationVersion> | null = null;

/**
 * @summary Encodes a(n) TCGSpecificationVersion into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCGSpecificationVersion, encoded as an ASN.1 Element.
 */
export
function _encode_TCGSpecificationVersion (value: TCGSpecificationVersion, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TCGSpecificationVersion) { _cached_encoder_for_TCGSpecificationVersion = function (value: TCGSpecificationVersion): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeInteger(value.majorVersion, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.minorVersion, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.revision, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_TCGSpecificationVersion(value, elGetter);
}


/* eslint-enable */
