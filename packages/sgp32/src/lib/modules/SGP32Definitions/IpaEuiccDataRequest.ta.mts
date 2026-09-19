/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IpaEuiccDataRequest_searchCriteriaNotification, _decode_IpaEuiccDataRequest_searchCriteriaNotification, _encode_IpaEuiccDataRequest_searchCriteriaNotification } from "../SGP32Definitions/IpaEuiccDataRequest-searchCriteriaNotification.ta.mjs";
// export { IpaEuiccDataRequest_searchCriteriaNotification, _decode_IpaEuiccDataRequest_searchCriteriaNotification, _encode_IpaEuiccDataRequest_searchCriteriaNotification } from "../SGP32Definitions/IpaEuiccDataRequest-searchCriteriaNotification.ta.mjs";
import { IpaEuiccDataRequest_searchCriteriaEuiccPackageResult, _decode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult, _encode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult } from "../SGP32Definitions/IpaEuiccDataRequest-searchCriteriaEuiccPackageResult.ta.mjs";
// export { IpaEuiccDataRequest_searchCriteriaEuiccPackageResult, _decode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult, _encode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult } from "../SGP32Definitions/IpaEuiccDataRequest-searchCriteriaEuiccPackageResult.ta.mjs";
import { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";
// export { TransactionId, _decode_TransactionId, _encode_TransactionId } from "../RSPDefinitions/TransactionId.ta.mjs";


/**
 * @summary IpaEuiccDataRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaEuiccDataRequest ::= [82] SEQUENCE { -- Tag BF52
 *     tagList    [APPLICATION 28] OCTET STRING, -- Tag '5C'
 *     euiccCiPKIdentifierToBeUsed OCTET STRING OPTIONAL, -- CI Public Key Identifier (possibly truncated) supported on the eUICC for signature creation
 *     searchCriteriaNotification [1] CHOICE {
 *         seqNumber [0] INTEGER,
 *         profileManagementOperation [1] NotificationEvent
 *     } OPTIONAL,
 *     searchCriteriaEuiccPackageResult [2] CHOICE {
 *         seqNumber [0] INTEGER 
 *     } OPTIONAL,
 *     eimTransactionId [3] TransactionId OPTIONAL -- Tag '83'
 * }
 * ```
 * 
 * @class
 */
export
class IpaEuiccDataRequest {
    constructor (
        /**
         * @summary `tagList`.
         * @public
         * @readonly
         */
        readonly tagList: OCTET_STRING,
        /**
         * @summary `euiccCiPKIdentifierToBeUsed`.
         * @public
         * @readonly
         */
        readonly euiccCiPKIdentifierToBeUsed: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `searchCriteriaNotification`.
         * @public
         * @readonly
         */
        readonly searchCriteriaNotification: OPTIONAL<IpaEuiccDataRequest_searchCriteriaNotification>,
        /**
         * @summary `searchCriteriaEuiccPackageResult`.
         * @public
         * @readonly
         */
        readonly searchCriteriaEuiccPackageResult: OPTIONAL<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult>,
        /**
         * @summary `eimTransactionId`.
         * @public
         * @readonly
         */
        readonly eimTransactionId: OPTIONAL<TransactionId>
    ) {}

    /**
     * @summary Restructures an object into a IpaEuiccDataRequest
     * @description
     * 
     * This takes an `object` and converts it to a `IpaEuiccDataRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IpaEuiccDataRequest`.
     * @returns {IpaEuiccDataRequest}
     */
    public static _from_object (_o: { [_K in keyof (IpaEuiccDataRequest)]: (IpaEuiccDataRequest)[_K] }): IpaEuiccDataRequest {
        return new IpaEuiccDataRequest(_o.tagList, _o.euiccCiPKIdentifierToBeUsed, _o.searchCriteriaNotification, _o.searchCriteriaEuiccPackageResult, _o.eimTransactionId);
    }


}

/**
 * @summary The Leading Root Component Types of IpaEuiccDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IpaEuiccDataRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("tagList", false, $.hasTag(_TagClass.application, 28)),
    new $.ComponentSpec("euiccCiPKIdentifierToBeUsed", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("searchCriteriaNotification", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("searchCriteriaEuiccPackageResult", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("eimTransactionId", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IpaEuiccDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IpaEuiccDataRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IpaEuiccDataRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IpaEuiccDataRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IpaEuiccDataRequest: $.ASN1Decoder<IpaEuiccDataRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaEuiccDataRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaEuiccDataRequest (el: _Element): IpaEuiccDataRequest {
    if (!_cached_decoder_for_IpaEuiccDataRequest) { _cached_decoder_for_IpaEuiccDataRequest = $._decode_implicit<IpaEuiccDataRequest>(() => function (el: _Element): IpaEuiccDataRequest {
    let tagList!: OCTET_STRING;
    let euiccCiPKIdentifierToBeUsed: OPTIONAL<OCTET_STRING>;
    let searchCriteriaNotification: OPTIONAL<IpaEuiccDataRequest_searchCriteriaNotification>;
    let searchCriteriaEuiccPackageResult: OPTIONAL<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult>;
    let eimTransactionId: OPTIONAL<TransactionId>;
    const callbacks: $.DecodingMap = {
        "tagList": (_el: _Element): void => { tagList = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "euiccCiPKIdentifierToBeUsed": (_el: _Element): void => { euiccCiPKIdentifierToBeUsed = $._decodeOctetString(_el); },
        "searchCriteriaNotification": (_el: _Element): void => { searchCriteriaNotification = $._decode_explicit<IpaEuiccDataRequest_searchCriteriaNotification>(() => _decode_IpaEuiccDataRequest_searchCriteriaNotification)(_el); },
        "searchCriteriaEuiccPackageResult": (_el: _Element): void => { searchCriteriaEuiccPackageResult = $._decode_explicit<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult>(() => _decode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult)(_el); },
        "eimTransactionId": (_el: _Element): void => { eimTransactionId = $._decode_implicit<TransactionId>(() => _decode_TransactionId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IpaEuiccDataRequest,
        _extension_additions_list_spec_for_IpaEuiccDataRequest,
        _root_component_type_list_2_spec_for_IpaEuiccDataRequest,
        undefined,
    );
    return new IpaEuiccDataRequest(
        tagList,
        euiccCiPKIdentifierToBeUsed,
        searchCriteriaNotification,
        searchCriteriaEuiccPackageResult,
        eimTransactionId
    );
}); }
    return _cached_decoder_for_IpaEuiccDataRequest(el);
}

let _cached_encoder_for_IpaEuiccDataRequest: $.ASN1Encoder<IpaEuiccDataRequest> | null = null;

/**
 * @summary Encodes a(n) IpaEuiccDataRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaEuiccDataRequest, encoded as an ASN.1 Element.
 */
export
function _encode_IpaEuiccDataRequest (value: IpaEuiccDataRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaEuiccDataRequest) { _cached_encoder_for_IpaEuiccDataRequest = $._encode_implicit(_TagClass.context, 82, () => function (value: IpaEuiccDataRequest, elGetter: $.ASN1Encoder<IpaEuiccDataRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.application, 28, () => $._encodeOctetString, $.BER)(value.tagList, $.BER),
            /* IF_ABSENT  */ ((value.euiccCiPKIdentifierToBeUsed === undefined) ? undefined : $._encodeOctetString(value.euiccCiPKIdentifierToBeUsed, $.BER)),
            /* IF_ABSENT  */ ((value.searchCriteriaNotification === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_IpaEuiccDataRequest_searchCriteriaNotification, $.BER)(value.searchCriteriaNotification, $.BER)),
            /* IF_ABSENT  */ ((value.searchCriteriaEuiccPackageResult === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult, $.BER)(value.searchCriteriaEuiccPackageResult, $.BER)),
            /* IF_ABSENT  */ ((value.eimTransactionId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TransactionId, $.BER)(value.eimTransactionId, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_IpaEuiccDataRequest(value, elGetter);
}


/* eslint-enable */
