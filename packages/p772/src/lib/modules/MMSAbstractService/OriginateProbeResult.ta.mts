/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OriginateProbeResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginateProbeResult ::= SET {
 *   submission-identifier  [0]  ProbeSubmissionIdentifier,
 *   submission-time        [1]  ProbeSubmissionTime}
 * ```
 * 
 * @class
 */
export
class OriginateProbeResult {
    constructor (
        /**
         * @summary `submission_identifier`.
         * @public
         * @readonly
         */
        readonly submission_identifier: ProbeSubmissionIdentifier,
        /**
         * @summary `submission_time`.
         * @public
         * @readonly
         */
        readonly submission_time: ProbeSubmissionTime
    ) {}

    /**
     * @summary Restructures an object into a OriginateProbeResult
     * @description
     * 
     * This takes an `object` and converts it to a `OriginateProbeResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginateProbeResult`.
     * @returns {OriginateProbeResult}
     */
    public static _from_object (_o: { [_K in keyof (OriginateProbeResult)]: (OriginateProbeResult)[_K] }): OriginateProbeResult {
        return new OriginateProbeResult(_o.submission_identifier, _o.submission_time);
    }


}

/**
 * @summary The Leading Root Component Types of OriginateProbeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OriginateProbeResult: $.ComponentSpec[] = [
    /* FIXME: submission-identifier COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: submission-time COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of OriginateProbeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OriginateProbeResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OriginateProbeResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OriginateProbeResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OriginateProbeResult: $.ASN1Decoder<OriginateProbeResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginateProbeResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginateProbeResult (el: _Element): OriginateProbeResult {
    if (!_cached_decoder_for_OriginateProbeResult) { _cached_decoder_for_OriginateProbeResult = function (el: _Element): OriginateProbeResult {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let submission_identifier!: ProbeSubmissionIdentifier;
    let submission_time!: ProbeSubmissionTime;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "submission-identifier": (_el: _Element): void => { submission_identifier = $._decode_implicit<ProbeSubmissionIdentifier>(() => _decode_ProbeSubmissionIdentifier)(_el); },
        "submission-time": (_el: _Element): void => { submission_time = $._decode_implicit<ProbeSubmissionTime>(() => _decode_ProbeSubmissionTime)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OriginateProbeResult,
        _extension_additions_list_spec_for_OriginateProbeResult,
        _root_component_type_list_2_spec_for_OriginateProbeResult,
        undefined,
    );
    return new OriginateProbeResult( /* SET_CONSTRUCTOR_CALL */
        submission_identifier,
        submission_time
    );
}; }
    return _cached_decoder_for_OriginateProbeResult(el);
}

let _cached_encoder_for_OriginateProbeResult: $.ASN1Encoder<OriginateProbeResult> | null = null;

/**
 * @summary Encodes a(n) OriginateProbeResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginateProbeResult, encoded as an ASN.1 Element.
 */
export
function _encode_OriginateProbeResult (value: OriginateProbeResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginateProbeResult) { _cached_encoder_for_OriginateProbeResult = function (value: OriginateProbeResult, elGetter: $.ASN1Encoder<OriginateProbeResult>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ProbeSubmissionIdentifier, $.BER)(value.submission_identifier, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ProbeSubmissionTime, $.BER)(value.submission_time, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OriginateProbeResult(value, elGetter);
}


/* eslint-enable */
