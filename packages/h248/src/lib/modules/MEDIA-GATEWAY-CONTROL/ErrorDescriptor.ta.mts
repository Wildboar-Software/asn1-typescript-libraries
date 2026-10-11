/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ErrorCode, _decode_ErrorCode, _encode_ErrorCode } from "../MEDIA-GATEWAY-CONTROL/ErrorCode.ta.mjs";
import { ErrorText, _decode_ErrorText, _encode_ErrorText } from "../MEDIA-GATEWAY-CONTROL/ErrorText.ta.mjs";


/**
 * @summary ErrorDescriptor
 * @description
 * 
 * An error at the level where it belongs: message, transaction, action,
 * command, or descriptor (ITU-T Rec. H.248.1 (03/2013) clause 7.1.20).
 *
 * The code is an IANA-registered value. ITU-T H.248.8 lists them. The
 * descriptor is placed at the deepest level that still describes the failure
 * and that parsing of the request allows. It may describe a larger construct
 * than the one it sits in; error 422 ("Syntax Error in Action") can appear
 * inside a command. A Notify request may carry one, in particular error 518
 * ("Event buffer full").
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorDescriptor ::= SEQUENCE
 *     {
 *         errorCode        [0] ErrorCode,
 *         errorText        [1] ErrorText OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ErrorDescriptor {
    constructor (
        /**
         * @summary `errorCode`.
         * @description
         *
         * Registered error code, 0 to 65535. The meanings are in ITU-T H.248.8.
         * Clause 14.2 is the registration procedure. Codes this Recommendation
         * itself cites include 401 (Protocol Error), 403 (Syntax Error in
         * TransactionRequest), 406 (Version Not Supported), 410 (Incorrect
         * identifier), 411 (Unknown ContextID), 413 (Too many transactions),
         * 421 (Unknown or illegal combination of actions), 422 (Syntax Error in
         * Action), 431 (No TerminationID matched a wildcard), 435
         * (TerminationID is not in the specified context), 442 (Syntax Error in
         * Command), 444 (Unsupported or unknown descriptor), 457 (Missing
         * parameter in signal or event), 460 (Unable to set statistic on
         * stream), 471 (Implied Add for Multiplex failure), 501 (Not
         * implemented), 506 (Number of TransactionPendings exceeded), 510
         * (Insufficient resources), and 518 (Event buffer full).
         *
         * @public
         * @readonly
         */
        readonly errorCode: ErrorCode,
        /**
         * @summary `errorText`.
         * @description
         *
         * Optional human-readable explanation. For error 444 the text may be
         * the name of the descriptor the MG does not support, such as
         * "Topology" (clause 7.1.18.1).
         *
         * @public
         * @readonly
         */
        readonly errorText: OPTIONAL<ErrorText>
    ) {}

    /**
     * @summary Restructures an object into a ErrorDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `ErrorDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ErrorDescriptor`.
     * @returns {ErrorDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (ErrorDescriptor)]: (ErrorDescriptor)[_K] }): ErrorDescriptor {
        return new ErrorDescriptor(_o.errorCode, _o.errorText);
    }


}

/**
 * @summary The Leading Root Component Types of ErrorDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ErrorDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("errorCode", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("errorText", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ErrorDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ErrorDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ErrorDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ErrorDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ErrorDescriptor: $.ASN1Decoder<ErrorDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorDescriptor (el: _Element): ErrorDescriptor {
    if (!_cached_decoder_for_ErrorDescriptor) { _cached_decoder_for_ErrorDescriptor = function (el: _Element): ErrorDescriptor {
    let errorCode!: ErrorCode;
    let errorText: OPTIONAL<ErrorText>;
    const callbacks: $.DecodingMap = {
        "errorCode": (_el: _Element): void => { errorCode = $._decode_implicit<ErrorCode>(() => _decode_ErrorCode)(_el); },
        "errorText": (_el: _Element): void => { errorText = $._decode_implicit<ErrorText>(() => _decode_ErrorText)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ErrorDescriptor,
        _extension_additions_list_spec_for_ErrorDescriptor,
        _root_component_type_list_2_spec_for_ErrorDescriptor,
        undefined,
    );
    return new ErrorDescriptor(
        errorCode,
        errorText
    );
}; }
    return _cached_decoder_for_ErrorDescriptor(el);
}

let _cached_encoder_for_ErrorDescriptor: $.ASN1Encoder<ErrorDescriptor> | null = null;

/**
 * @summary Encodes a(n) ErrorDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorDescriptor (value: ErrorDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorDescriptor) { _cached_encoder_for_ErrorDescriptor = function (value: ErrorDescriptor, elGetter: $.ASN1Encoder<ErrorDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ErrorCode, $.BER)(value.errorCode, $.BER),
            /* IF_ABSENT  */ ((value.errorText === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ErrorText, $.BER)(value.errorText, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ErrorDescriptor(value, elGetter);
}


/* eslint-enable */
