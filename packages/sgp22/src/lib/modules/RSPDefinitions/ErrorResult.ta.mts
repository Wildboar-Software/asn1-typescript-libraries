/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_BppCommandId, _encode_BppCommandId, BppCommandId } from "../RSPDefinitions/BppCommandId.ta.mjs";
import { _decode_ErrorReason, _encode_ErrorReason, ErrorReason } from "../RSPDefinitions/ErrorReason.ta.mjs";


/**
 * @summary ErrorResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorResult ::= SEQUENCE {
 *     bppCommandId BppCommandId,
 *     errorReason ErrorReason,
 *     simaResponse OCTET STRING OPTIONAL -- contains (multiple) 'EUICCResponse' as defined in [5]
 * }
 * ```
 * 
 * @class
 */
export
class ErrorResult {
    constructor (
        /**
         * @summary `bppCommandId`.
         * @public
         * @readonly
         */
        readonly bppCommandId: BppCommandId,
        /**
         * @summary `errorReason`.
         * @public
         * @readonly
         */
        readonly errorReason: ErrorReason,
        /**
         * @summary `simaResponse`.
         * @public
         * @readonly
         */
        readonly simaResponse: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a ErrorResult
     * @description
     * 
     * This takes an `object` and converts it to a `ErrorResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ErrorResult`.
     * @returns {ErrorResult}
     */
    public static _from_object (_o: { [_K in keyof (ErrorResult)]: (ErrorResult)[_K] }): ErrorResult {
        return new ErrorResult(_o.bppCommandId, _o.errorReason, _o.simaResponse);
    }


}

/**
 * @summary The Leading Root Component Types of ErrorResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ErrorResult: $.ComponentSpec[] = [
    new $.ComponentSpec("bppCommandId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("errorReason", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("simaResponse", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ErrorResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ErrorResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ErrorResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ErrorResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ErrorResult: $.ASN1Decoder<ErrorResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorResult (el: _Element): ErrorResult {
    if (!_cached_decoder_for_ErrorResult) { _cached_decoder_for_ErrorResult = function (el: _Element): ErrorResult {
    let bppCommandId!: BppCommandId;
    let errorReason!: ErrorReason;
    let simaResponse: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "bppCommandId": (_el: _Element): void => { bppCommandId = _decode_BppCommandId(_el); },
        "errorReason": (_el: _Element): void => { errorReason = _decode_ErrorReason(_el); },
        "simaResponse": (_el: _Element): void => { simaResponse = $._decodeOctetString(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ErrorResult,
        _extension_additions_list_spec_for_ErrorResult,
        _root_component_type_list_2_spec_for_ErrorResult,
        undefined,
    );
    return new ErrorResult(
        bppCommandId,
        errorReason,
        simaResponse
    );
}; }
    return _cached_decoder_for_ErrorResult(el);
}

let _cached_encoder_for_ErrorResult: $.ASN1Encoder<ErrorResult> | null = null;

/**
 * @summary Encodes a(n) ErrorResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorResult, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorResult (value: ErrorResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorResult) { _cached_encoder_for_ErrorResult = function (value: ErrorResult): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_BppCommandId(value.bppCommandId, $.BER),
            /* REQUIRED   */ _encode_ErrorReason(value.errorReason, $.BER),
            /* IF_ABSENT  */ ((value.simaResponse === undefined) ? undefined : $._encodeOctetString(value.simaResponse, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ErrorResult(value, elGetter);
}


/* eslint-enable */
