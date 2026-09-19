/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProfileInstallationResultData, _decode_ProfileInstallationResultData, _encode_ProfileInstallationResultData } from "../RSPDefinitions/ProfileInstallationResultData.ta.mjs";
// export { ProfileInstallationResultData, _decode_ProfileInstallationResultData, _encode_ProfileInstallationResultData } from "../RSPDefinitions/ProfileInstallationResultData.ta.mjs";
import { EuiccSignPIR, _decode_EuiccSignPIR, _encode_EuiccSignPIR } from "../RSPDefinitions/EuiccSignPIR.ta.mjs";
// export { EuiccSignPIR, _decode_EuiccSignPIR, _encode_EuiccSignPIR } from "../RSPDefinitions/EuiccSignPIR.ta.mjs";


/**
 * @summary ProfileInstallationResult
 * @description
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
    constructor (
        /**
         * @summary `profileInstallationResultData`.
         * @public
         * @readonly
         */
        readonly profileInstallationResultData: ProfileInstallationResultData,
        /**
         * @summary `euiccSignPIR`.
         * @public
         * @readonly
         */
        readonly euiccSignPIR: EuiccSignPIR
    ) {}

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
    let profileInstallationResultData!: ProfileInstallationResultData;
    let euiccSignPIR!: EuiccSignPIR;
    profileInstallationResultData = $._decode_implicit<ProfileInstallationResultData>(() => _decode_ProfileInstallationResultData)(sequence[0]);
    euiccSignPIR = _decode_EuiccSignPIR(sequence[1]);
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
    if (!_cached_encoder_for_ProfileInstallationResult) { _cached_encoder_for_ProfileInstallationResult = $._encode_implicit(_TagClass.context, 55, () => function (value: ProfileInstallationResult, elGetter: $.ASN1Encoder<ProfileInstallationResult>): _Element {
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
