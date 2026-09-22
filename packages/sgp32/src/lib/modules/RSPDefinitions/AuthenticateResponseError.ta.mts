/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
import { AuthenticateErrorCode, _decode_AuthenticateErrorCode, _encode_AuthenticateErrorCode } from "../RSPDefinitions/AuthenticateErrorCode.ta.mjs";
// export { AuthenticateErrorCode, AuthenticateErrorCode_invalidCertificate /* IMPORTED_LONG_NAMED_INTEGER */, invalidCertificate /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateErrorCode_invalidSignature /* IMPORTED_LONG_NAMED_INTEGER */, invalidSignature /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateErrorCode_unsupportedCurve /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedCurve /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateErrorCode_noSessionContext /* IMPORTED_LONG_NAMED_INTEGER */, noSessionContext /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateErrorCode_invalidOid /* IMPORTED_LONG_NAMED_INTEGER */, invalidOid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateErrorCode_euiccChallengeMismatch /* IMPORTED_LONG_NAMED_INTEGER */, euiccChallengeMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateErrorCode_ciPKUnknown /* IMPORTED_LONG_NAMED_INTEGER */, ciPKUnknown /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateErrorCode_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AuthenticateErrorCode, _encode_AuthenticateErrorCode } from "../RSPDefinitions/AuthenticateErrorCode.ta.mjs";


/**
 * @summary AuthenticateResponseError
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateResponseError ::= SEQUENCE {
 *     transactionId [0] TransactionId,
 *     authenticateErrorCode AuthenticateErrorCode
 * }
 * ```
 * 
 * @class
 */
export
class AuthenticateResponseError {
    constructor (
        /**
         * @summary `transactionId`.
         * @public
         * @readonly
         */
        readonly transactionId: TransactionId,
        /**
         * @summary `authenticateErrorCode`.
         * @public
         * @readonly
         */
        readonly authenticateErrorCode: AuthenticateErrorCode
    ) {}

    /**
     * @summary Restructures an object into a AuthenticateResponseError
     * @description
     * 
     * This takes an `object` and converts it to a `AuthenticateResponseError`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticateResponseError`.
     * @returns {AuthenticateResponseError}
     */
    public static _from_object (_o: { [_K in keyof (AuthenticateResponseError)]: (AuthenticateResponseError)[_K] }): AuthenticateResponseError {
        return new AuthenticateResponseError(_o.transactionId, _o.authenticateErrorCode);
    }


}

/**
 * @summary The Leading Root Component Types of AuthenticateResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthenticateResponseError: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("authenticateErrorCode", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of AuthenticateResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthenticateResponseError: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthenticateResponseError
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthenticateResponseError: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthenticateResponseError: $.ASN1Decoder<AuthenticateResponseError> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateResponseError
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateResponseError (el: _Element): AuthenticateResponseError {
    if (!_cached_decoder_for_AuthenticateResponseError) { _cached_decoder_for_AuthenticateResponseError = function (el: _Element): AuthenticateResponseError {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AuthenticateResponseError contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionId";
    sequence[1].name = "authenticateErrorCode";
    let transactionId!: TransactionId;
    let authenticateErrorCode!: AuthenticateErrorCode;
    transactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(sequence[0]);
    authenticateErrorCode = _decode_AuthenticateErrorCode(sequence[1]);
    return new AuthenticateResponseError(
        transactionId,
        authenticateErrorCode,

    );
}; }
    return _cached_decoder_for_AuthenticateResponseError(el);
}

let _cached_encoder_for_AuthenticateResponseError: $.ASN1Encoder<AuthenticateResponseError> | null = null;

/**
 * @summary Encodes a(n) AuthenticateResponseError into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateResponseError, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateResponseError (value: AuthenticateResponseError, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateResponseError) { _cached_encoder_for_AuthenticateResponseError = function (value: AuthenticateResponseError, elGetter: $.ASN1Encoder<AuthenticateResponseError>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TransactionId, $.BER)(value.transactionId, $.BER),
            /* REQUIRED   */ _encode_AuthenticateErrorCode(value.authenticateErrorCode, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthenticateResponseError(value, elGetter);
}


/* eslint-enable */
