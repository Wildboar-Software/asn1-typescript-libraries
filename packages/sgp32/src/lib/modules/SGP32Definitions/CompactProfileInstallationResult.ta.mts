/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CompactProfileInstallationResultData, _decode_CompactProfileInstallationResultData, _encode_CompactProfileInstallationResultData } from "../SGP32Definitions/CompactProfileInstallationResultData.ta.mjs";
import { type EuiccSignPIR, _decode_EuiccSignPIR, _encode_EuiccSignPIR } from "@wildboar/sgp22/RSPDefinitions";


/**
 * @summary CompactProfileInstallationResult
 * @description
 *
 * Compact ProfileInstallationResult carried as a pending notification on
 * ESipa. An IPA with minimizeEsipaBytes should re-encode
 * ProfileInstallationResult into this form and keep euiccSignPIR unchanged.
 * Before ES9+'.HandleNotification, the eIM restores the full notification from
 * data it already holds, such as StoreMetadataRequest, serverSigned1, and the
 * server, SM-DP+, eUICC, and EUM certificates.
 *
 * For an indirect Profile download this notification is correlated to
 * ESipa.GetBoundProfilePackage by the SM-DP+ Transaction ID.
 *
 * SGP.32 v1.2, section 5.14.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CompactProfileInstallationResult ::= SEQUENCE {
 *     compactProfileInstallationResultData [0] CompactProfileInstallationResultData,
 *     euiccSignPIR EuiccSignPIR
 * }
 * ```
 * 
 * @class
 */
export
class CompactProfileInstallationResult {
    /**
     * @summary `compactProfileInstallationResultData`.
     * @description
     *
     * Reduced installation-result body: SM-DP+ Transaction ID, sequence number,
     * iccidPresent, and either a compact success or an ErrorResult.
     *
     * SGP.32 v1.2, section 5.14.7.
     * @public
     * @readonly
     */
    public readonly compactProfileInstallationResultData: CompactProfileInstallationResultData;
    /**
     * @summary `euiccSignPIR`.
     * @description
     *
     * eUICC signature of the Profile Installation Result, kept unchanged from the
     * full ProfileInstallationResult.
     *
     * SGP.32 v1.2, section 5.14.7.
     * @public
     * @readonly
     */
    public readonly euiccSignPIR: EuiccSignPIR;

    constructor (
        compactProfileInstallationResultData: CompactProfileInstallationResultData,
        euiccSignPIR: EuiccSignPIR
    ) {
        this.compactProfileInstallationResultData = compactProfileInstallationResultData;
        this.euiccSignPIR = euiccSignPIR;
    }

    /**
     * @summary Restructures an object into a CompactProfileInstallationResult
     * @description
     * 
     * This takes an `object` and converts it to a `CompactProfileInstallationResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CompactProfileInstallationResult`.
     * @returns {CompactProfileInstallationResult}
     */
    public static _from_object (_o: { [_K in keyof (CompactProfileInstallationResult)]: (CompactProfileInstallationResult)[_K] }): CompactProfileInstallationResult {
        return new CompactProfileInstallationResult(_o.compactProfileInstallationResultData, _o.euiccSignPIR);
    }


}

/**
 * @summary The Leading Root Component Types of CompactProfileInstallationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CompactProfileInstallationResult: $.ComponentSpec[] = [
    new $.ComponentSpec("compactProfileInstallationResultData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("euiccSignPIR", false, $.hasTag(_TagClass.application, 55))
];

/**
 * @summary The Trailing Root Component Types of CompactProfileInstallationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CompactProfileInstallationResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CompactProfileInstallationResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CompactProfileInstallationResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CompactProfileInstallationResult: $.ASN1Decoder<CompactProfileInstallationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CompactProfileInstallationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CompactProfileInstallationResult (el: _Element): CompactProfileInstallationResult {
    if (!_cached_decoder_for_CompactProfileInstallationResult) { _cached_decoder_for_CompactProfileInstallationResult = function (el: _Element): CompactProfileInstallationResult {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CompactProfileInstallationResult contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "compactProfileInstallationResultData";
    sequence[1].name = "euiccSignPIR";
    const compactProfileInstallationResultData: CompactProfileInstallationResultData = $._decode_implicit<CompactProfileInstallationResultData>(() => _decode_CompactProfileInstallationResultData)(sequence[0]);
    const euiccSignPIR: EuiccSignPIR = _decode_EuiccSignPIR(sequence[1]);
    return new CompactProfileInstallationResult(
        compactProfileInstallationResultData,
        euiccSignPIR,

    );
}; }
    return _cached_decoder_for_CompactProfileInstallationResult(el);
}

let _cached_encoder_for_CompactProfileInstallationResult: $.ASN1Encoder<CompactProfileInstallationResult> | null = null;

/**
 * @summary Encodes a(n) CompactProfileInstallationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CompactProfileInstallationResult, encoded as an ASN.1 Element.
 */
export
function _encode_CompactProfileInstallationResult (value: CompactProfileInstallationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CompactProfileInstallationResult) { _cached_encoder_for_CompactProfileInstallationResult = function (value: CompactProfileInstallationResult): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CompactProfileInstallationResultData, $.BER)(value.compactProfileInstallationResultData, $.BER),
            /* REQUIRED   */ _encode_EuiccSignPIR(value.euiccSignPIR, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CompactProfileInstallationResult(value, elGetter);
}


/* eslint-enable */
