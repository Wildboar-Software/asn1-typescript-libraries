/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProfileInstallationResultData, _decode_ProfileInstallationResultData, _encode_ProfileInstallationResultData } from "@wildboar/sgp22/RSPDefinitions";
import { type EuiccSignPIR, _decode_EuiccSignPIR, _encode_EuiccSignPIR } from "@wildboar/sgp22/RSPDefinitions";


/**
 * @summary ProfileInstallationResult
 * @description
 * 
 * eUICC result of executing a Bound Profile Package. SGP.32 v1.2 section
 * 2.11.2.3 says this object is as defined in SGP.22. The following is from
 * SGP.22 v3.1 section 2.5.6, used for that deferral. The eUICC returns it
 * after the last TLV of the package, or immediately after the first TLV that
 * executed with an error. It may also be returned when installation is
 * interrupted. The eUICC keeps one or more results until the IPA deletes them
 * after successful delivery to the recipient. In SGP.32 the IPA places this
 * object in profileInstallationResult when ES10b.LoadBoundProfilePackage
 * succeeded. An IPA with minimizeEsipaBytes should re-encode it as
 * CompactProfileInstallationResult and keep euiccSignPIR unchanged. SGP.32
 * v1.2, sections 2.11.2.3 and 5.14.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProfileInstallationResult ::= [55] SEQUENCE { -- Tag 'BF37'
 *     profileInstallationResultData [39] ProfileInstallationResultData,
 *     euiccSignPIR EuiccSignPIR
 * }
 * ```
 * 
 * @class
 */
export
class ProfileInstallationResult {
    /**
     * @summary `profileInstallationResultData`.
     * @description
     * Signed installation report. From SGP.22 v3.1 section 2.5.6: notification
     * metadata (sequence number, profile management operation, recipient address,
     * and ICCID), the transaction identifier from Profile Download and
     * Installation, the final installation status, and the SM-DP+ OID from
     * CERT.DPpb.SIG. The notification address is the serverAddress from
     * ES10b.AuthenticateServer. ICCID is omitted when the error occurred before
     * the eUICC knew the ICCID. The signature covers this object, tag 'BF27'.
     * @public
     * @readonly
     */
    public readonly profileInstallationResultData: ProfileInstallationResultData;
    /**
     * @summary `euiccSignPIR`.
     * @description
     * eUICC signature over profileInstallationResultData (tag 'BF27'). From SGP.22
     * v3.1 section 2.5.6: computed as defined in SGP.22 section 2.6.9 using
     * SK.EUICC.SIG selected during Profile Download and Installation. SGP.32 v1.2
     * section 5.14.7 says an IPA with minimizeEsipaBytes keeps this signature
     * unchanged when re-encoding to the compact form.
     * @public
     * @readonly
     */
    public readonly euiccSignPIR: EuiccSignPIR;

    constructor (
        profileInstallationResultData: ProfileInstallationResultData,
        euiccSignPIR: EuiccSignPIR
    ) {
        this.profileInstallationResultData = profileInstallationResultData;
        this.euiccSignPIR = euiccSignPIR;
    }

    /**
     * @summary Restructures an object into a ProfileInstallationResult
     * @description
     * 
     * This takes an `object` and converts it to a `ProfileInstallationResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProfileInstallationResult`.
     * @returns {ProfileInstallationResult}
     */
    public static _from_object (_o: { [_K in keyof (ProfileInstallationResult)]: (ProfileInstallationResult)[_K] }): ProfileInstallationResult {
        return new ProfileInstallationResult(_o.profileInstallationResultData, _o.euiccSignPIR);
    }


}

/**
 * @summary The Leading Root Component Types of ProfileInstallationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProfileInstallationResult: $.ComponentSpec[] = [
    new $.ComponentSpec("profileInstallationResultData", false, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("euiccSignPIR", false, $.hasTag(_TagClass.application, 55))
];

/**
 * @summary The Trailing Root Component Types of ProfileInstallationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProfileInstallationResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProfileInstallationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProfileInstallationResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ProfileInstallationResult: $.ASN1Decoder<ProfileInstallationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProfileInstallationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProfileInstallationResult (el: _Element): ProfileInstallationResult {
    if (!_cached_decoder_for_ProfileInstallationResult) { _cached_decoder_for_ProfileInstallationResult = $._decode_implicit<ProfileInstallationResult>(() => function (el: _Element): ProfileInstallationResult {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ProfileInstallationResult contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "profileInstallationResultData";
    sequence[1].name = "euiccSignPIR";
    const profileInstallationResultData: ProfileInstallationResultData = $._decode_implicit<ProfileInstallationResultData>(() => _decode_ProfileInstallationResultData)(sequence[0]);
    const euiccSignPIR: EuiccSignPIR = _decode_EuiccSignPIR(sequence[1]);
    return new ProfileInstallationResult(
        profileInstallationResultData,
        euiccSignPIR,

    );
}); }
    return _cached_decoder_for_ProfileInstallationResult(el);
}

let _cached_encoder_for_ProfileInstallationResult: $.ASN1Encoder<ProfileInstallationResult> | null = null;

/**
 * @summary Encodes a(n) ProfileInstallationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProfileInstallationResult, encoded as an ASN.1 Element.
 */
export
function _encode_ProfileInstallationResult (value: ProfileInstallationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProfileInstallationResult) { _cached_encoder_for_ProfileInstallationResult = $._encode_implicit(_TagClass.context, 55, () => function (value: ProfileInstallationResult): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 39, () => _encode_ProfileInstallationResultData, $.BER)(value.profileInstallationResultData, $.BER),
            /* REQUIRED   */ _encode_EuiccSignPIR(value.euiccSignPIR, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ProfileInstallationResult(value, elGetter);
}


/* eslint-enable */
