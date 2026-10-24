/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IpaEuiccDataRequest_searchCriteriaNotification, _decode_IpaEuiccDataRequest_searchCriteriaNotification, _encode_IpaEuiccDataRequest_searchCriteriaNotification } from "../SGP32Definitions/IpaEuiccDataRequest-searchCriteriaNotification.ta.mjs";
import { IpaEuiccDataRequest_searchCriteriaEuiccPackageResult, _decode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult, _encode_IpaEuiccDataRequest_searchCriteriaEuiccPackageResult } from "../SGP32Definitions/IpaEuiccDataRequest-searchCriteriaEuiccPackageResult.ta.mjs";
import { type TransactionId, _decode_TransactionId, _encode_TransactionId } from "@wildboar/sgp22/RSPDefinitions";


/**
 * @summary IpaEuiccDataRequest
 * @description
 * 
 * eIM request, carried in an eIM Package, for one or more IPA and eUICC data
 * items. The IPA SHALL support at least the association token and IPA
 * Capabilities. A requested item the IPA does not support is omitted from the
 * response. Any tag in `tagList` outside the defined set is ignored without
 * error. If the Emergency Profile is enabled, the IPA stops and returns
 * `ecallActive`.
 * 
 * The IPA obtains eUICC data with ES10b.GetEUICCInfo (section 5.9.2),
 * ES10b.GetCerts (section 5.9.10), ES10b.GetEID (section 5.9.19),
 * ES10b.RetrieveNotificationsList (section 5.9.11),
 * ES10a.GetEuiccConfiguredAddresses (section 5.8.1), and
 * ES10b.GetEimConfigurationData (section 5.9.18). SGP.32 v1.2, sections
 * 2.11.1.2 and 2.11.2.2.
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
    /**
     * @summary `tagList`.
     * @description
     * Tags of the items to return, concatenated. Defined tags are `'A0'`
     * (Notifications), `'81'` (default SM-DP+ address, as defined in SGP.22),
     * `'A2'` (eUICC Package Results), `'BF20'` (eUICCInfo1, section 5.9.2),
     * `'BF22'` (eUICCInfo2, section 5.9.2), `'83'` (Root SM-DS address, as defined
     * in SGP.22), `'84'` (association token, sections 2.11.1 and 5.9.18), `'A5'`
     * (EUM certificate, as defined in SGP.22), `'A6'` (eUICC certificate, as
     * defined in SGP.22), `'A8'` (IPA Capabilities, section 4.1), and `'A9'`
     * (Device Information, SGP.22 section 4.2). Any other tag is ignored
     * without error. SGP.32 v1.2, section 2.11.1.2.
     * @public
     * @readonly
     */
    public readonly tagList: OCTET_STRING;
    /**
     * @summary `euiccCiPKIdentifierToBeUsed`.
     * @description
     * Selects which EUM certificate and eUICC certificate to return when the eUICC
     * holds more than one. Absent: use the first entry of
     * `euiccCiPKIdListForSigning` in eUICCInfo1 or eUICCInfo2. Present: send the
     * full 20-byte CI Public Key Identifier to an IPA that lacks
     * `minimizeEsipaBytes`. To an IPA with that capability, send only enough
     * leading bytes for the IPA to uniquely match one identifier in that list.
     * SGP.32 v1.2, section 2.11.1.2.
     * @public
     * @readonly
     */
    public readonly euiccCiPKIdentifierToBeUsed?: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `searchCriteriaNotification`.
     * @description
     * Filters Notifications, and only when `tagList` contains `'A0'`. If `'A0'` is
     * absent, the IPA ignores this value. SGP.32 v1.2, section 2.11.1.2.
     * @public
     * @readonly
     */
    public readonly searchCriteriaNotification?: OPTIONAL<IpaEuiccDataRequest_searchCriteriaNotification>;
    /**
     * @summary `searchCriteriaEuiccPackageResult`.
     * @description
     * Filters eUICC Package Results, and only when `tagList` contains `'A2'`. If
     * `'A2'` is absent, the IPA ignores this value. SGP.32 v1.2, section 2.11.1.2.
     * @public
     * @readonly
     */
    public readonly searchCriteriaEuiccPackageResult?: OPTIONAL<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult>;
    /**
     * @summary `eimTransactionId`.
     * @description
     * Optional correlator supplied by the eIM. If it is present, the IPA returns
     * the same value in `IpaEuiccData` or `IpaEuiccDataResponseError`. SGP.32
     * v1.2, sections 2.11.1.2 and 2.11.2.2.
     * @public
     * @readonly
     */
    public readonly eimTransactionId?: OPTIONAL<TransactionId>;

    constructor (
        tagList: OCTET_STRING,
        euiccCiPKIdentifierToBeUsed?: OPTIONAL<OCTET_STRING>,
        searchCriteriaNotification?: OPTIONAL<IpaEuiccDataRequest_searchCriteriaNotification>,
        searchCriteriaEuiccPackageResult?: OPTIONAL<IpaEuiccDataRequest_searchCriteriaEuiccPackageResult>,
        eimTransactionId?: OPTIONAL<TransactionId>
    ) {
        this.tagList = tagList;
        this.euiccCiPKIdentifierToBeUsed = euiccCiPKIdentifierToBeUsed;
        this.searchCriteriaNotification = searchCriteriaNotification;
        this.searchCriteriaEuiccPackageResult = searchCriteriaEuiccPackageResult;
        this.eimTransactionId = eimTransactionId;
    }

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
    if (!_cached_encoder_for_IpaEuiccDataRequest) { _cached_encoder_for_IpaEuiccDataRequest = $._encode_implicit(_TagClass.context, 82, () => function (value: IpaEuiccDataRequest): _Element {
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
