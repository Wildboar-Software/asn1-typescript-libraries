/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { SearchResponse_resultSetStatus, _decode_SearchResponse_resultSetStatus, _encode_SearchResponse_resultSetStatus } from "../Z39-50-APDU-2001/SearchResponse-resultSetStatus.ta.mjs";
import { PresentStatus, _decode_PresentStatus, _encode_PresentStatus } from "../Z39-50-APDU-2001/PresentStatus.ta.mjs";
import { Records, _decode_Records, _encode_Records } from "../Z39-50-APDU-2001/Records.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary SearchResponse
 * @description
 *
 * Terminating response of a Search operation. Reports how many
 * records were identified and, when piggybacking applies, returns
 * response records. The search succeeds only if the server can
 * identify the records, report the count, and establish a result set,
 * including a count of zero. Exactly one of `resultSetStatus` and
 * `presentStatus` occurs: result-set status if and only if the search
 * failed, present status if and only if it succeeded. A Search
 * response is not segmented. §3.2.2.1, §3.2.2.1.11, §3.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchResponse ::= SEQUENCE {
 *     referenceId                 ReferenceId OPTIONAL,
 *     resultCount                 [23] IMPLICIT INTEGER,
 *     numberOfRecordsReturned     [24] IMPLICIT INTEGER,
 *     nextResultSetPosition       [25] IMPLICIT INTEGER,
 *     searchStatus                [22] IMPLICIT BOOLEAN,
 *     resultSetStatus             [26] IMPLICIT INTEGER{
 *         subset (1),
 *         interim (2),
 *         none    (3)
 *     } OPTIONAL,
 *     presentStatus               PresentStatus OPTIONAL,
 *     records                     Records OPTIONAL,
 *     -- Following two parameters may be used only if version 3 is in force.
 *     additionalSearchInfo        [203] IMPLICIT OtherInformation OPTIONAL,
 *     otherInfo                   OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SearchResponse {
    /**
     * @summary `referenceId`.
     * @description
     *
     * The reference-id from the Search request. Include the same value
     * when the request included one; omit it when the request omitted
     * it. §3.4.
     *
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `resultCount`.
     * @description
     *
     * Number of database records identified by the result set. Zero
     * when the set is empty. A negative value is a protocol violation.
     * When version 3 is in force the client may Close with reason
     * protocol error. §3.2.2.1.8.
     *
     * @public
     * @readonly
     */
    readonly resultCount: INTEGER;
    /**
     * @summary `numberOfRecordsReturned`.
     * @description
     *
     * Total records returned in this Search response, including
     * surrogate and non-surrogate diagnostics. §3.2.2.1.8.
     *
     * @public
     * @readonly
     */
    readonly numberOfRecordsReturned: INTEGER;
    /**
     * @summary `nextResultSetPosition`.
     * @description
     *
     * M+1, where M is the result-set position of the database record
     * for the last response record returned. Zero when M equals
     * `resultCount`. §3.2.2.1.9.
     *
     * @public
     * @readonly
     */
    readonly nextResultSetPosition: INTEGER;
    /**
     * @summary `searchStatus`.
     * @description
     *
     * Search-phase outcome. Success means the server identified which
     * records meet the query, reported the count, and established a
     * result set. A count of zero is success. Success does not mean
     * response records were returned. Failure means the search did not
     * complete: none of the expected response records are returned,
     * and at least one non-surrogate diagnostic is supplied (exactly
     * one when version 2 is in force). The 2003 ASN.1 does not state
     * which boolean value encodes success. §3.2.2.1.10, §3.2.2.1.11.
     *
     * @public
     * @readonly
     */
    readonly searchStatus: BOOLEAN;
    /**
     * @summary `resultSetStatus`.
     * @description
     *
     * Present if and only if `searchStatus` is failure. `subset`:
     * partial, valid results exist. `interim`: partial results exist,
     * not necessarily valid. `none`: no result set. The result set
     * exists when the value is subset or interim. §3.2.2.1.11.
     *
     * @public
     * @readonly
     */
    readonly resultSetStatus: OPTIONAL<SearchResponse_resultSetStatus>;
    /**
     * @summary `presentStatus`.
     * @description
     *
     * Present if and only if `searchStatus` is success. Reports the
     * retrieval phase: all expected records, a partial return, or
     * none. When the client asked for no records (small-set bound 0
     * and large-set bound 1), use success. Failure here requires at
     * least one non-surrogate diagnostic. §3.2.2.1.11.
     *
     * @public
     * @readonly
     */
    readonly presentStatus: OPTIONAL<PresentStatus>;
    /**
     * @summary `records`.
     * @description
     *
     * Response records in result-set order, or one or more
     * non-surrogate diagnostics explaining why the search or the
     * presentation cannot be done. Version 2: a single non-surrogate
     * diagnostic. Version 3: one or more. The database name must
     * accompany the first record and any record from a database
     * different from its predecessor. A server that does not
     * piggyback, when records were expected, should set search status
     * success, present status failure, and diagnostic 1005 or 1006.
     * §3.2.2.1.7.
     *
     * @public
     * @readonly
     */
    readonly records: OPTIONAL<Records>;
    /**
     * @summary `additionalSearchInfo`.
     * @description
     *
     * Version 3 only. By-product of the search, such as intermediate
     * result counts, why particular records were returned, or whether
     * an attribute was used. The request may have named the preferred
     * format. SearchResponse-1 is defined in Appendix USR.
     * §3.2.2.1.12.
     *
     * @public
     * @readonly
     */
    readonly additionalSearchInfo: OPTIONAL<OtherInformation>;
    /**
     * @summary `otherInfo`.
     * @description
     *
     * Additional information not specified by the standard. Version 3
     * only. §3.2.2.1.13.
     *
     * @public
     * @readonly
     */
    readonly otherInfo: OPTIONAL<OtherInformation>;

    constructor (
        referenceId: OPTIONAL<ReferenceId>,
        resultCount: INTEGER,
        numberOfRecordsReturned: INTEGER,
        nextResultSetPosition: INTEGER,
        searchStatus: BOOLEAN,
        resultSetStatus: OPTIONAL<SearchResponse_resultSetStatus>,
        presentStatus: OPTIONAL<PresentStatus>,
        records: OPTIONAL<Records>,
        additionalSearchInfo: OPTIONAL<OtherInformation>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.resultCount = resultCount;
        this.numberOfRecordsReturned = numberOfRecordsReturned;
        this.nextResultSetPosition = nextResultSetPosition;
        this.searchStatus = searchStatus;
        this.resultSetStatus = resultSetStatus;
        this.presentStatus = presentStatus;
        this.records = records;
        this.additionalSearchInfo = additionalSearchInfo;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a SearchResponse
     * @description
     * 
     * This takes an `object` and converts it to a `SearchResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchResponse`.
     * @returns {SearchResponse}
     */
    public static _from_object (_o: { [_K in keyof (SearchResponse)]: (SearchResponse)[_K] }): SearchResponse {
        return new SearchResponse(_o.referenceId, _o.resultCount, _o.numberOfRecordsReturned, _o.nextResultSetPosition, _o.searchStatus, _o.resultSetStatus, _o.presentStatus, _o.records, _o.additionalSearchInfo, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of SearchResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SearchResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("resultCount", false, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("numberOfRecordsReturned", false, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("nextResultSetPosition", false, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("searchStatus", false, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("resultSetStatus", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("presentStatus", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("records", true, $.or($.hasTag(_TagClass.context, 28), $.hasTag(_TagClass.context, 130), $.hasTag(_TagClass.context, 205))),
    new $.ComponentSpec("additionalSearchInfo", true, $.hasTag(_TagClass.context, 203)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of SearchResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SearchResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SearchResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SearchResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SearchResponse: $.ASN1Decoder<SearchResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchResponse (el: _Element): SearchResponse {
    if (!_cached_decoder_for_SearchResponse) { _cached_decoder_for_SearchResponse = function (el: _Element): SearchResponse {
    let referenceId: OPTIONAL<ReferenceId>;
    let resultCount!: INTEGER;
    let numberOfRecordsReturned!: INTEGER;
    let nextResultSetPosition!: INTEGER;
    let searchStatus!: BOOLEAN;
    let resultSetStatus: OPTIONAL<SearchResponse_resultSetStatus>;
    let presentStatus: OPTIONAL<PresentStatus>;
    let records: OPTIONAL<Records>;
    let additionalSearchInfo: OPTIONAL<OtherInformation>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "resultCount": (_el: _Element): void => { resultCount = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "numberOfRecordsReturned": (_el: _Element): void => { numberOfRecordsReturned = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "nextResultSetPosition": (_el: _Element): void => { nextResultSetPosition = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "searchStatus": (_el: _Element): void => { searchStatus = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "resultSetStatus": (_el: _Element): void => { resultSetStatus = $._decode_implicit<SearchResponse_resultSetStatus>(() => _decode_SearchResponse_resultSetStatus)(_el); },
        "presentStatus": (_el: _Element): void => { presentStatus = _decode_PresentStatus(_el); },
        "records": (_el: _Element): void => { records = _decode_Records(_el); },
        "additionalSearchInfo": (_el: _Element): void => { additionalSearchInfo = $._decode_implicit<OtherInformation>(() => _decode_OtherInformation)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchResponse,
        _extension_additions_list_spec_for_SearchResponse,
        _root_component_type_list_2_spec_for_SearchResponse,
        undefined,
    );
    return new SearchResponse(
        referenceId,
        resultCount,
        numberOfRecordsReturned,
        nextResultSetPosition,
        searchStatus,
        resultSetStatus,
        presentStatus,
        records,
        additionalSearchInfo,
        otherInfo
    );
}; }
    return _cached_decoder_for_SearchResponse(el);
}

let _cached_encoder_for_SearchResponse: $.ASN1Encoder<SearchResponse> | null = null;

/**
 * @summary Encodes a(n) SearchResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchResponse, encoded as an ASN.1 Element.
 */
export
function _encode_SearchResponse (value: SearchResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchResponse) { _cached_encoder_for_SearchResponse = function (value: SearchResponse, elGetter: $.ASN1Encoder<SearchResponse>): _Element {
    const _components: _Element[] = new Array(10);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 23, () => $._encodeInteger, $.BER)(value.resultCount, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 24, () => $._encodeInteger, $.BER)(value.numberOfRecordsReturned, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 25, () => $._encodeInteger, $.BER)(value.nextResultSetPosition, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 22, () => $._encodeBoolean, $.BER)(value.searchStatus, $.BER);
    if (value.resultSetStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 26, () => _encode_SearchResponse_resultSetStatus, $.BER)(value.resultSetStatus, $.BER);
    }
    if (value.presentStatus !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_PresentStatus, $.BER)(value.presentStatus, $.BER);
    }
    if (value.records !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_Records(value.records, $.BER);
    }
    if (value.additionalSearchInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 203, () => _encode_OtherInformation, $.BER)(value.additionalSearchInfo, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SearchResponse(value, elGetter);
}


/* eslint-enable */
