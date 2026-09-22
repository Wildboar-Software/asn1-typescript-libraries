/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { IpaEuiccDataErrorCode, _decode_IpaEuiccDataErrorCode, _encode_IpaEuiccDataErrorCode } from "../SGP32Definitions/IpaEuiccDataErrorCode.ta.mjs";
// export { IpaEuiccDataErrorCode, IpaEuiccDataErrorCode_incorrectTagList /* IMPORTED_LONG_NAMED_INTEGER */, incorrectTagList /* IMPORTED_SHORT_NAMED_INTEGER */, IpaEuiccDataErrorCode_euiccCiPKIdNotFound /* IMPORTED_LONG_NAMED_INTEGER */, euiccCiPKIdNotFound /* IMPORTED_SHORT_NAMED_INTEGER */, IpaEuiccDataErrorCode_ecallActive /* IMPORTED_LONG_NAMED_INTEGER */, ecallActive /* IMPORTED_SHORT_NAMED_INTEGER */, IpaEuiccDataErrorCode_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_IpaEuiccDataErrorCode, _encode_IpaEuiccDataErrorCode } from "../SGP32Definitions/IpaEuiccDataErrorCode.ta.mjs";


/**
 * @summary IpaEuiccDataResponseError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaEuiccDataResponseError ::= SEQUENCE {
 *     eimTransactionId [0] TransactionId OPTIONAL,
 *     ipaEuiccDataErrorCode IpaEuiccDataErrorCode
 * }
 * ```
 * 
 * @class
 */
export
class IpaEuiccDataResponseError {
    constructor (
        /**
         * @summary `eimTransactionId`.
         * @public
         * @readonly
         */
        readonly eimTransactionId: OPTIONAL<TransactionId>,
        /**
         * @summary `ipaEuiccDataErrorCode`.
         * @public
         * @readonly
         */
        readonly ipaEuiccDataErrorCode: IpaEuiccDataErrorCode
    ) {}

    /**
     * @summary Restructures an object into a IpaEuiccDataResponseError
     * @description
     * 
     * This takes an `object` and converts it to a `IpaEuiccDataResponseError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IpaEuiccDataResponseError`.
     * @returns {IpaEuiccDataResponseError}
     */
    public static _from_object (_o: { [_K in keyof (IpaEuiccDataResponseError)]: (IpaEuiccDataResponseError)[_K] }): IpaEuiccDataResponseError {
        return new IpaEuiccDataResponseError(_o.eimTransactionId, _o.ipaEuiccDataErrorCode);
    }


}

/**
 * @summary The Leading Root Component Types of IpaEuiccDataResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IpaEuiccDataResponseError: $.ComponentSpec[] = [
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ipaEuiccDataErrorCode", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of IpaEuiccDataResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IpaEuiccDataResponseError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IpaEuiccDataResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IpaEuiccDataResponseError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IpaEuiccDataResponseError: $.ASN1Decoder<IpaEuiccDataResponseError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaEuiccDataResponseError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaEuiccDataResponseError (el: _Element): IpaEuiccDataResponseError {
    if (!_cached_decoder_for_IpaEuiccDataResponseError) { _cached_decoder_for_IpaEuiccDataResponseError = function (el: _Element): IpaEuiccDataResponseError {
    let eimTransactionId: OPTIONAL<TransactionId>;
    let ipaEuiccDataErrorCode!: IpaEuiccDataErrorCode;
    const callbacks: $.DecodingMap = {
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); },
        "ipaEuiccDataErrorCode": (_el: _Element): void => { ipaEuiccDataErrorCode = _decode_IpaEuiccDataErrorCode(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IpaEuiccDataResponseError,
        _extension_additions_list_spec_for_IpaEuiccDataResponseError,
        _root_component_type_list_2_spec_for_IpaEuiccDataResponseError,
        undefined,
    );
    return new IpaEuiccDataResponseError(
        eimTransactionId,
        ipaEuiccDataErrorCode
    );
}; }
    return _cached_decoder_for_IpaEuiccDataResponseError(el);
}

let _cached_encoder_for_IpaEuiccDataResponseError: $.ASN1Encoder<IpaEuiccDataResponseError> | null = null;

/**
 * @summary Encodes a(n) IpaEuiccDataResponseError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaEuiccDataResponseError, encoded as an ASN.1 Element.
 */
export
function _encode_IpaEuiccDataResponseError (value: IpaEuiccDataResponseError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaEuiccDataResponseError) { _cached_encoder_for_IpaEuiccDataResponseError = function (value: IpaEuiccDataResponseError, elGetter: $.ASN1Encoder<IpaEuiccDataResponseError>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER)),
            /* REQUIRED   */ _encode_IpaEuiccDataErrorCode(value.ipaEuiccDataErrorCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IpaEuiccDataResponseError(value, elGetter);
}


/* eslint-enable */
