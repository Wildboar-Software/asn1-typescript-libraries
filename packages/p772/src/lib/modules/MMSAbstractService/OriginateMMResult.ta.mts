/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OriginateMMResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OriginateMMResult ::= SET {
 *   submission-identifier  [0]  MessageSubmissionIdentifier,
 *   submission-time        [1]  MessageSubmissionTime}
 * ```
 * 
 * @class
 */
export
class OriginateMMResult {
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
     * @summary Restructures an object into a OriginateMMResult
     * @description
     * 
     * This takes an `object` and converts it to a `OriginateMMResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OriginateMMResult`.
     * @returns {OriginateMMResult}
     */
    public static _from_object (_o: { [_K in keyof (OriginateMMResult)]: (OriginateMMResult)[_K] }): OriginateMMResult {
        return new OriginateMMResult(_o.submission_identifier, _o.submission_time);
    }


}

/**
 * @summary The Leading Root Component Types of OriginateMMResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OriginateMMResult: $.ComponentSpec[] = [
    /* FIXME: submission-identifier COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: submission-time COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of OriginateMMResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OriginateMMResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OriginateMMResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OriginateMMResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OriginateMMResult: $.ASN1Decoder<OriginateMMResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginateMMResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OriginateMMResult (el: _Element): OriginateMMResult {
    if (!_cached_decoder_for_OriginateMMResult) { _cached_decoder_for_OriginateMMResult = function (el: _Element): OriginateMMResult {
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
        _root_component_type_list_1_spec_for_OriginateMMResult,
        _extension_additions_list_spec_for_OriginateMMResult,
        _root_component_type_list_2_spec_for_OriginateMMResult,
        undefined,
    );
    return new OriginateMMResult( /* SET_CONSTRUCTOR_CALL */
        submission_identifier,
        submission_time
    );
}; }
    return _cached_decoder_for_OriginateMMResult(el);
}

let _cached_encoder_for_OriginateMMResult: $.ASN1Encoder<OriginateMMResult> | null = null;

/**
 * @summary Encodes a(n) OriginateMMResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginateMMResult, encoded as an ASN.1 Element.
 */
export
function _encode_OriginateMMResult (value: OriginateMMResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OriginateMMResult) { _cached_encoder_for_OriginateMMResult = function (value: OriginateMMResult, elGetter: $.ASN1Encoder<OriginateMMResult>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_MessageSubmissionIdentifier, $.BER)(value.submission_identifier, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MessageSubmissionTime, $.BER)(value.submission_time, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OriginateMMResult(value, elGetter);
}


/* eslint-enable */
