/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ErrorCode, _decode_ErrorCode, _encode_ErrorCode } from "../MEDIA-GATEWAY-CONTROL/ErrorCode.ta.mjs";
// export { ErrorCode, _decode_ErrorCode, _encode_ErrorCode } from "../MEDIA-GATEWAY-CONTROL/ErrorCode.ta.mjs";
import { ErrorText, _decode_ErrorText, _encode_ErrorText } from "../MEDIA-GATEWAY-CONTROL/ErrorText.ta.mjs";
// export { ErrorText, _decode_ErrorText, _encode_ErrorText } from "../MEDIA-GATEWAY-CONTROL/ErrorText.ta.mjs";


/**
 * @summary ErrorDescriptor
 * @description
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
         * @public
         * @readonly
         */
        readonly errorCode: ErrorCode,
        /**
         * @summary `errorText`.
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
