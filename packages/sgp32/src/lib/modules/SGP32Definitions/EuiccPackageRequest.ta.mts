/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EuiccPackageSigned, _decode_EuiccPackageSigned, _encode_EuiccPackageSigned } from "../SGP32Definitions/EuiccPackageSigned.ta.mjs";


/**
 * @summary EuiccPackageRequest
 * @description
 * 
 * Signed eUICC Package, one of the four eIM Package request bodies (SGP.32
 * v1.2, sections 2.11.1 and 2.11.1.1). Tag 'BF51'. It is the command data of
 * ES10b.LoadEuiccPackage (section 5.9.1).
 *
 * The eIM signs euiccPackageSigned concatenated with the association token
 * from this eIM's configuration. When no token is configured, the signature
 * input uses the associationToken data object with value zero, encoded '84 01
 * 00'. The eUICC checks that signature with the stored eIM public key, then
 * checks the EID and that counterValue is strictly greater than the stored
 * counter.
 *
 * While the Emergency Profile is enabled, the eUICC rejects this request with
 * ecallActive (section 2.11.2.1). A non-resumable interruption, such as power
 * loss, reverts every change from this command, including the stored counter,
 * and discards any partial result; the IPA may submit the same package again
 * (section 5.9.1).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageRequest ::= [81] SEQUENCE { -- Tag ' BF51', #SupportedForPsmoV1.0.0#
 *     euiccPackageSigned EuiccPackageSigned,
 *     eimSignature [APPLICATION 55] OCTET STRING -- Tag '5F37'
 * }
 * ```
 * 
 * @class
 */
export
class EuiccPackageRequest {
    /**
     * @summary `euiccPackageSigned`.
     * @description
     * The bytes the eIM signs, concatenated with the association token, and the
     * bytes the eUICC verifies (SGP.32 v1.2, sections 2.11.1.1 and 5.9.1).
     * Contains the issuing eimId, the target EID, the replay counter, an optional
     * transaction identifier, and either PSMOs or eCOs.
     * @public
     * @readonly
     */
    public readonly euiccPackageSigned: EuiccPackageSigned;
    /**
     * @summary `eimSignature`.
     * @description
     * eIM signature, tag '5F37', over euiccPackageSigned concatenated with the
     * associationToken data object (SGP.32 v1.2, section 2.11.1.1). When no token
     * is configured, that object is the value zero, '84 01 00'. An invalid
     * signature produces euiccPackageErrorUnsigned and, when a token is
     * configured, includes that token (section 5.9.1).
     * @public
     * @readonly
     */
    public readonly eimSignature: OCTET_STRING;

    constructor (
        euiccPackageSigned: EuiccPackageSigned,
        eimSignature: OCTET_STRING
    ) {
        this.euiccPackageSigned = euiccPackageSigned;
        this.eimSignature = eimSignature;
    }

    /**
     * @summary Restructures an object into a EuiccPackageRequest
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccPackageRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccPackageRequest`.
     * @returns {EuiccPackageRequest}
     */
    public static _from_object (_o: { [_K in keyof (EuiccPackageRequest)]: (EuiccPackageRequest)[_K] }): EuiccPackageRequest {
        return new EuiccPackageRequest(_o.euiccPackageSigned, _o.eimSignature);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccPackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccPackageRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccPackageSigned", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("eimSignature", false, $.hasTag(_TagClass.application, 55))
];

/**
 * @summary The Trailing Root Component Types of EuiccPackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccPackageRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccPackageRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccPackageRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccPackageRequest: $.ASN1Decoder<EuiccPackageRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageRequest (el: _Element): EuiccPackageRequest {
    if (!_cached_decoder_for_EuiccPackageRequest) { _cached_decoder_for_EuiccPackageRequest = $._decode_implicit<EuiccPackageRequest>(() => function (el: _Element): EuiccPackageRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EuiccPackageRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccPackageSigned";
    sequence[1].name = "eimSignature";
    const euiccPackageSigned: EuiccPackageSigned = _decode_EuiccPackageSigned(sequence[0]);
    const eimSignature: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new EuiccPackageRequest(
        euiccPackageSigned,
        eimSignature,

    );
}); }
    return _cached_decoder_for_EuiccPackageRequest(el);
}

let _cached_encoder_for_EuiccPackageRequest: $.ASN1Encoder<EuiccPackageRequest> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageRequest, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageRequest (value: EuiccPackageRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageRequest) { _cached_encoder_for_EuiccPackageRequest = $._encode_implicit(_TagClass.context, 81, () => function (value: EuiccPackageRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EuiccPackageSigned(value.euiccPackageSigned, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.eimSignature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EuiccPackageRequest(value, elGetter);
}


/* eslint-enable */
