/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_BppCommandId, _encode_BppCommandId, BppCommandId } from "../RSPDefinitions/BppCommandId.ta.mjs";
// export { BppCommandId, BppCommandId_initialiseSecureChannel /* IMPORTED_LONG_NAMED_INTEGER */, initialiseSecureChannel /* IMPORTED_SHORT_NAMED_INTEGER */, BppCommandId_configureISDP /* IMPORTED_LONG_NAMED_INTEGER */, configureISDP /* IMPORTED_SHORT_NAMED_INTEGER */, BppCommandId_storeMetadata /* IMPORTED_LONG_NAMED_INTEGER */, storeMetadata /* IMPORTED_SHORT_NAMED_INTEGER */, BppCommandId_storeMetadata2 /* IMPORTED_LONG_NAMED_INTEGER */, storeMetadata2 /* IMPORTED_SHORT_NAMED_INTEGER */, BppCommandId_replaceSessionKeys /* IMPORTED_LONG_NAMED_INTEGER */, replaceSessionKeys /* IMPORTED_SHORT_NAMED_INTEGER */, BppCommandId_loadProfileElements /* IMPORTED_LONG_NAMED_INTEGER */, loadProfileElements /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_BppCommandId, _encode_BppCommandId } from "../RSPDefinitions/BppCommandId.ta.mjs";
import { _decode_ErrorReason, _encode_ErrorReason, ErrorReason } from "../RSPDefinitions/ErrorReason.ta.mjs";
// export { ErrorReason, ErrorReason_incorrectInputValues /* IMPORTED_LONG_NAMED_INTEGER */, incorrectInputValues /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_invalidSignature /* IMPORTED_LONG_NAMED_INTEGER */, invalidSignature /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_unsupportedCrtValues /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedCrtValues /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_unsupportedRemoteOperationType /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedRemoteOperationType /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_unsupportedProfileClass /* IMPORTED_LONG_NAMED_INTEGER */, unsupportedProfileClass /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_scp03tStructureError /* IMPORTED_LONG_NAMED_INTEGER */, scp03tStructureError /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_scp03tSecurityError /* IMPORTED_LONG_NAMED_INTEGER */, scp03tSecurityError /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_installFailedDueToIccidAlreadyExistsOnEuicc /* IMPORTED_LONG_NAMED_INTEGER */, installFailedDueToIccidAlreadyExistsOnEuicc /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_installFailedDueToInsufficientMemoryForProfile /* IMPORTED_LONG_NAMED_INTEGER */, installFailedDueToInsufficientMemoryForProfile /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_installFailedDueToInterruption /* IMPORTED_LONG_NAMED_INTEGER */, installFailedDueToInterruption /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_installFailedDueToPEProcessingError /* IMPORTED_LONG_NAMED_INTEGER */, installFailedDueToPEProcessingError /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_installFailedDueToDataMismatch /* IMPORTED_LONG_NAMED_INTEGER */, installFailedDueToDataMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_testProfileInstallFailedDueToInvalidNaaKey /* IMPORTED_LONG_NAMED_INTEGER */, testProfileInstallFailedDueToInvalidNaaKey /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_pprNotAllowed /* IMPORTED_LONG_NAMED_INTEGER */, pprNotAllowed /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_installFailedDueToInsufficientMinimumSecurityLevel /* IMPORTED_LONG_NAMED_INTEGER */, installFailedDueToInsufficientMinimumSecurityLevel /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_installFailedDueToServerAddressAbsentInEuiccAllowList /* IMPORTED_LONG_NAMED_INTEGER */, installFailedDueToServerAddressAbsentInEuiccAllowList /* IMPORTED_SHORT_NAMED_INTEGER */, ErrorReason_installFailedDueToUnknownError /* IMPORTED_LONG_NAMED_INTEGER */, installFailedDueToUnknownError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ErrorReason, _encode_ErrorReason } from "../RSPDefinitions/ErrorReason.ta.mjs";


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
    if (!_cached_encoder_for_ErrorResult) { _cached_encoder_for_ErrorResult = function (value: ErrorResult, elGetter: $.ASN1Encoder<ErrorResult>): _Element {
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
