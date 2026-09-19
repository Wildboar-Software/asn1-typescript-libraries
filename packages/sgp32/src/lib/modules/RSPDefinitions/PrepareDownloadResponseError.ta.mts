/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { DownloadErrorCode, _decode_DownloadErrorCode, _encode_DownloadErrorCode } from "../RSPDefinitions/DownloadErrorCode.ta.mjs";
// export { DownloadErrorCode, DownloadErrorCode_invalidCertificate /* IMPORTED_LONG_NAMED_INTEGER */, invalidCertificate /* IMPORTED_SHORT_NAMED_INTEGER */, DownloadErrorCode_invalidSignature /* IMPORTED_LONG_NAMED_INTEGER */, invalidSignature /* IMPORTED_SHORT_NAMED_INTEGER */, DownloadErrorCode_unsupportedCurve /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedCurve /* IMPORTED_SHORT_NAMED_INTEGER */, DownloadErrorCode_noSessionContext /* IMPORTED_LONG_NAMED_INTEGER */, noSessionContext /* IMPORTED_SHORT_NAMED_INTEGER */, DownloadErrorCode_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, DownloadErrorCode_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_DownloadErrorCode, _encode_DownloadErrorCode } from "../RSPDefinitions/DownloadErrorCode.ta.mjs";


/**
 * @summary PrepareDownloadResponseError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareDownloadResponseError ::= SEQUENCE {
 *     transactionId [0] TransactionId,
 *     downloadErrorCode DownloadErrorCode
 * }
 * ```
 * 
 * @class
 */
export
class PrepareDownloadResponseError {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `downloadErrorCode`.
         * @public
         * @readonly
         */
        readonly downloadErrorCode: DownloadErrorCode
    ) {}

    /**
     * @summary Restructures an object into a PrepareDownloadResponseError
     * @description
     * 
     * This takes an `object` and converts it to a `PrepareDownloadResponseError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrepareDownloadResponseError`.
     * @returns {PrepareDownloadResponseError}
     */
    public static _from_object (_o: { [_K in keyof (PrepareDownloadResponseError)]: (PrepareDownloadResponseError)[_K] }): PrepareDownloadResponseError {
        return new PrepareDownloadResponseError(_o.transactionId, _o.downloadErrorCode);
    }


}

/**
 * @summary The Leading Root Component Types of PrepareDownloadResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrepareDownloadResponseError: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("downloadErrorCode", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of PrepareDownloadResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrepareDownloadResponseError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrepareDownloadResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrepareDownloadResponseError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrepareDownloadResponseError: $.ASN1Decoder<PrepareDownloadResponseError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrepareDownloadResponseError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrepareDownloadResponseError (el: _Element): PrepareDownloadResponseError {
    if (!_cached_decoder_for_PrepareDownloadResponseError) { _cached_decoder_for_PrepareDownloadResponseError = function (el: _Element): PrepareDownloadResponseError {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PrepareDownloadResponseError contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "downloadErrorCode";
    let transactionId!: TransactionId;
    let downloadErrorCode!: DownloadErrorCode;
    transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(sequence[0]);
    downloadErrorCode = _decode_DownloadErrorCode(sequence[1]);
    return new PrepareDownloadResponseError(
        transactionId,
        downloadErrorCode,

    );
}; }
    return _cached_decoder_for_PrepareDownloadResponseError(el);
}

let _cached_encoder_for_PrepareDownloadResponseError: $.ASN1Encoder<PrepareDownloadResponseError> | null = null;

/**
 * @summary Encodes a(n) PrepareDownloadResponseError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrepareDownloadResponseError, encoded as an ASN.1 Element.
 */
export
function _encode_PrepareDownloadResponseError (value: PrepareDownloadResponseError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrepareDownloadResponseError) { _cached_encoder_for_PrepareDownloadResponseError = function (value: PrepareDownloadResponseError, elGetter: $.ASN1Encoder<PrepareDownloadResponseError>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* REQUIRED   */ _encode_DownloadErrorCode(value.downloadErrorCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrepareDownloadResponseError(value, elGetter);
}


/* eslint-enable */
