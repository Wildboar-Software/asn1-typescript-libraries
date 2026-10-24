/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EuiccPackageResultDataSigned, _decode_EuiccPackageResultDataSigned, _encode_EuiccPackageResultDataSigned } from "../SGP32Definitions/EuiccPackageResultDataSigned.ta.mjs";


/**
 * @summary EuiccPackageResultSigned
 * @description
 * 
 * Signed eUICC Package execution result, kept by the eUICC until the IPA
 * deletes it after the eIM has received it (SGP.32 v1.2, section 2.11.2.1).
 * Produced after signature, EID, and counter verification, including when
 * processingTerminated ends the command list early (section 5.9.1). The IPA
 * may read it again at any time before deletion.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackageResultSigned ::= SEQUENCE {
 *     euiccPackageResultDataSigned EuiccPackageResultDataSigned, 
 *     euiccSignEPR [APPLICATION 55] OCTET STRING -- Tag '5F37'
 * }
 * ```
 * 
 * @class
 */
export
class EuiccPackageResultSigned {
    /**
     * @summary `euiccPackageResultDataSigned`.
     * @description
     * Bytes covered by euiccSignEPR, together with the association token (SGP.32
     * v1.2, section 2.11.2.1). Holds the echoed eimId, counter, optional
     * transaction identifier, the sequence number, and one result per executed
     * command.
     * @public
     * @readonly
     */
    public readonly euiccPackageResultDataSigned: EuiccPackageResultDataSigned;
    /**
     * @summary `euiccSignEPR`.
     * @description
     * eUICC signature, tag '5F37', created with SK.EUICC.ECDSA over
     * euiccPackageResultDataSigned concatenated with the association token (SGP.32
     * v1.2, section 2.11.2.1). When no token is configured, the value zero is
     * used. If several signing keys exist, the key that chains to euiccCiPKId in
     * that eIM's configuration is used. The eIM verifies the signature with
     * PK.EUICC.ECDSA from CERT.EUICC.ECDSA and verifies that certificate (section
     * 5.14.6).
     * @public
     * @readonly
     */
    public readonly euiccSignEPR: OCTET_STRING;

    constructor (
        euiccPackageResultDataSigned: EuiccPackageResultDataSigned,
        euiccSignEPR: OCTET_STRING
    ) {
        this.euiccPackageResultDataSigned = euiccPackageResultDataSigned;
        this.euiccSignEPR = euiccSignEPR;
    }

    /**
     * @summary Restructures an object into a EuiccPackageResultSigned
     * @description
     * 
     * This takes an `object` and converts it to a `EuiccPackageResultSigned`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EuiccPackageResultSigned`.
     * @returns {EuiccPackageResultSigned}
     */
    public static _from_object (_o: { [_K in keyof (EuiccPackageResultSigned)]: (EuiccPackageResultSigned)[_K] }): EuiccPackageResultSigned {
        return new EuiccPackageResultSigned(_o.euiccPackageResultDataSigned, _o.euiccSignEPR);
    }


}

/**
 * @summary The Leading Root Component Types of EuiccPackageResultSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EuiccPackageResultSigned: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccPackageResultDataSigned", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("euiccSignEPR", false, $.hasTag(_TagClass.application, 55))
];

/**
 * @summary The Trailing Root Component Types of EuiccPackageResultSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EuiccPackageResultSigned: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EuiccPackageResultSigned
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EuiccPackageResultSigned: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EuiccPackageResultSigned: $.ASN1Decoder<EuiccPackageResultSigned> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackageResultSigned
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackageResultSigned (el: _Element): EuiccPackageResultSigned {
    if (!_cached_decoder_for_EuiccPackageResultSigned) { _cached_decoder_for_EuiccPackageResultSigned = function (el: _Element): EuiccPackageResultSigned {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EuiccPackageResultSigned contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccPackageResultDataSigned";
    sequence[1].name = "euiccSignEPR";
    const euiccPackageResultDataSigned: EuiccPackageResultDataSigned = _decode_EuiccPackageResultDataSigned(sequence[0]);
    const euiccSignEPR: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new EuiccPackageResultSigned(
        euiccPackageResultDataSigned,
        euiccSignEPR,

    );
}; }
    return _cached_decoder_for_EuiccPackageResultSigned(el);
}

let _cached_encoder_for_EuiccPackageResultSigned: $.ASN1Encoder<EuiccPackageResultSigned> | null = null;

/**
 * @summary Encodes a(n) EuiccPackageResultSigned into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackageResultSigned, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackageResultSigned (value: EuiccPackageResultSigned, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackageResultSigned) { _cached_encoder_for_EuiccPackageResultSigned = function (value: EuiccPackageResultSigned): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_EuiccPackageResultDataSigned(value.euiccPackageResultDataSigned, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 55, () => $._encodeOctetString, $.BER)(value.euiccSignEPR, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EuiccPackageResultSigned(value, elGetter);
}


/* eslint-enable */
