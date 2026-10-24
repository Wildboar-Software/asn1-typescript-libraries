/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CredentialType, _decode_CredentialType, _encode_CredentialType } from "../PlatformCertificateProfileV2/CredentialType.ta.mjs";


/**
 * @summary TCGCredentialType
 * @description
 *
 * Certificate type and encoding. Required. An attribute certificate carries
 * `tCGCredentialType` in `attributes`. A public-key certificate carries it in
 * `subjectDirectoryAttributes`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §3.3.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TCGCredentialType ::= SEQUENCE {
 *     certificateType CredentialType
 * }
 * ```
 * 
 * @class
 */
export
class TCGCredentialType {
    /**
     * @summary `certificateType`.
     * @description
     *
     * One of the six `CredentialType` identifiers: base attribute, base key,
     * additional attribute, additional key, delta attribute, or delta key.
     *
     * TCG Platform Certificate Profile, Version 2.1, §3.3.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly certificateType: CredentialType;

    constructor (
        certificateType: CredentialType
    ) {
        this.certificateType = certificateType;
    }

    /**
     * @summary Restructures an object into a TCGCredentialType
     * @description
     * 
     * This takes an `object` and converts it to a `TCGCredentialType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TCGCredentialType`.
     * @returns {TCGCredentialType}
     */
    public static _from_object (_o: { [_K in keyof (TCGCredentialType)]: (TCGCredentialType)[_K] }): TCGCredentialType {
        return new TCGCredentialType(_o.certificateType);
    }


}

/**
 * @summary The Leading Root Component Types of TCGCredentialType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TCGCredentialType: $.ComponentSpec[] = [
    new $.ComponentSpec("certificateType", false, $.hasTag(_TagClass.universal, 6))
];

/**
 * @summary The Trailing Root Component Types of TCGCredentialType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TCGCredentialType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TCGCredentialType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TCGCredentialType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TCGCredentialType: $.ASN1Decoder<TCGCredentialType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TCGCredentialType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TCGCredentialType (el: _Element): TCGCredentialType {
    if (!_cached_decoder_for_TCGCredentialType) { _cached_decoder_for_TCGCredentialType = function (el: _Element): TCGCredentialType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("TCGCredentialType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "certificateType";
    let certificateType!: CredentialType;
    certificateType = _decode_CredentialType(sequence[0]);
    return new TCGCredentialType(
        certificateType,

    );
}; }
    return _cached_decoder_for_TCGCredentialType(el);
}

let _cached_encoder_for_TCGCredentialType: $.ASN1Encoder<TCGCredentialType> | null = null;

/**
 * @summary Encodes a(n) TCGCredentialType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCGCredentialType, encoded as an ASN.1 Element.
 */
export
function _encode_TCGCredentialType (value: TCGCredentialType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TCGCredentialType) { _cached_encoder_for_TCGCredentialType = function (value: TCGCredentialType): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_CredentialType(value.certificateType, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_TCGCredentialType(value, elGetter);
}


/* eslint-enable */
