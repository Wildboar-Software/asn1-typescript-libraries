/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OriginateMRNResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginateMRNResult ::= SET {
 *   submission-identifier  [0]  MessageSubmissionIdentifier,
 *   submission-time        [1]  MessageSubmissionTime}
 * ```
 * 
 * @class
 */
export
class OriginateMRNResult {
    constructor (
        /**
         * @summary `submission_identifier`.
         * @public
         * @readonly
         */
        readonly submission_identifier: MessageSubmissionIdentifier,
        /**
         * @summary `submission_time`.
         * @public
         * @readonly
         */
        readonly submission_time: MessageSubmissionTime
    ) {}

    /**
     * @summary Restructures an object into a OriginateMRNResult
     * @description
     * 
     * This takes an `object` and converts it to a `OriginateMRNResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginateMRNResult`.
     * @returns {OriginateMRNResult}
     */
    public static _from_object (_o: { [_K in keyof (OriginateMRNResult)]: (OriginateMRNResult)[_K] }): OriginateMRNResult {
        return new OriginateMRNResult(_o.submission_identifier, _o.submission_time);
    }


}

/**
 * @summary The Leading Root Component Types of OriginateMRNResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OriginateMRNResult: $.ComponentSpec[] = [
    /* FIXME: submission-identifier COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: submission-time COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of OriginateMRNResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OriginateMRNResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OriginateMRNResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OriginateMRNResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OriginateMRNResult: $.ASN1Decoder<OriginateMRNResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginateMRNResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginateMRNResult (el: _Element): OriginateMRNResult {
    if (!_cached_decoder_for_OriginateMRNResult) { _cached_decoder_for_OriginateMRNResult = function (el: _Element): OriginateMRNResult {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let submission_identifier!: MessageSubmissionIdentifier;
    let submission_time!: MessageSubmissionTime;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "submission-identifier": (_el: _Element): void => { submission_identifier = $._decode_implicit<MessageSubmissionIdentifier>(() => _decode_MessageSubmissionIdentifier)(_el); },
        "submission-time": (_el: _Element): void => { submission_time = $._decode_implicit<MessageSubmissionTime>(() => _decode_MessageSubmissionTime)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OriginateMRNResult,
        _extension_additions_list_spec_for_OriginateMRNResult,
        _root_component_type_list_2_spec_for_OriginateMRNResult,
        undefined,
    );
    return new OriginateMRNResult( /* SET_CONSTRUCTOR_CALL */
        submission_identifier,
        submission_time
    );
}; }
    return _cached_decoder_for_OriginateMRNResult(el);
}

let _cached_encoder_for_OriginateMRNResult: $.ASN1Encoder<OriginateMRNResult> | null = null;

/**
 * @summary Encodes a(n) OriginateMRNResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginateMRNResult, encoded as an ASN.1 Element.
 */
export
function _encode_OriginateMRNResult (value: OriginateMRNResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginateMRNResult) { _cached_encoder_for_OriginateMRNResult = function (value: OriginateMRNResult, elGetter: $.ASN1Encoder<OriginateMRNResult>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MessageSubmissionIdentifier, $.BER)(value.submission_identifier, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MessageSubmissionTime, $.BER)(value.submission_time, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OriginateMRNResult(value, elGetter);
}


/* eslint-enable */
