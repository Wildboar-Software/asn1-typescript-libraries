/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReferenceId, _decode_ReferenceId, _encode_ReferenceId } from "../Z39-50-APDU-2001/ReferenceId.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
import { DatabaseName, _decode_DatabaseName, _encode_DatabaseName } from "../Z39-50-APDU-2001/DatabaseName.ta.mjs";
import { ElementSetNames, _decode_ElementSetNames, _encode_ElementSetNames } from "../Z39-50-APDU-2001/ElementSetNames.ta.mjs";
import { Query, _decode_Query, _encode_Query } from "../Z39-50-APDU-2001/Query.ta.mjs";
import { OtherInformation, _decode_OtherInformation, _encode_OtherInformation } from "../Z39-50-APDU-2001/OtherInformation.ta.mjs";


/**
 * @summary SearchRequest
 * @description
 *
 * Client request of the Search service. Asks the server to apply a
 * query to one or more databases and to create a named result set.
 * The result set is an ordered list; positions begin at 1. Depending
 * on the small-set, medium-set, and large-set parameters, the
 * response may also return records (piggybacking). A Search response
 * is never segmented. §3.2.2.1, §3.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchRequest ::= SEQUENCE {
 *     referenceId                 ReferenceId OPTIONAL,
 *     smallSetUpperBound          [13] IMPLICIT INTEGER,
 *     largeSetLowerBound          [14] IMPLICIT INTEGER,
 *     mediumSetPresentNumber      [15] IMPLICIT INTEGER,
 *     replaceIndicator            [16] IMPLICIT BOOLEAN,
 *     resultSetName               [17] IMPLICIT InternationalString,
 *     databaseNames               [18] IMPLICIT SEQUENCE OF DatabaseName,
 *     smallSetElementSetNames     [100] ElementSetNames OPTIONAL,
 *     mediumSetElementSetNames    [101] ElementSetNames OPTIONAL,
 *     preferredRecordSyntax       [104] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     query                       [21] Query,
 * -- Following two parameters may be used only if version 3 is in force.
 *     additionalSearchInfo        [203] IMPLICIT OtherInformation OPTIONAL,
 *     otherInfo                   OtherInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SearchRequest {
    /**
     * @summary `referenceId`.
     * @description
     *
     * Client-assigned identifier of this Search operation. The same
     * value must appear on every message of the operation. Mandatory
     * when concurrent operations are in effect; optional when serial
     * operations are in effect (omission means null). Opaque octets.
     * §3.4, §3.5.
     *
     * @public
     * @readonly
     */
    readonly referenceId: OPTIONAL<ReferenceId>;
    /**
     * @summary `smallSetUpperBound`.
     * @description
     *
     * If the result count is not greater than this value, the result
     * set is a small-set and the server is to return response records
     * for every hit, subject to message size. May be zero. Must be
     * less than `largeSetLowerBound`. §3.2.2.1.6.
     *
     * @public
     * @readonly
     */
    readonly smallSetUpperBound: INTEGER;
    /**
     * @summary `largeSetLowerBound`.
     * @description
     *
     * If the result count is greater than or equal to this value, the
     * result set is a large-set and no response records are returned.
     * Must be greater than `smallSetUpperBound`. A medium-set is
     * possible only when this exceeds the small-set bound by at least
     * 2. Set this to 1 and `smallSetUpperBound` to 0 to request no
     * records regardless of the count. §3.2.2.1.6.
     *
     * @public
     * @readonly
     */
    readonly largeSetLowerBound: INTEGER;
    /**
     * @summary `mediumSetPresentNumber`.
     * @description
     *
     * When the result set is a medium-set (count greater than
     * `smallSetUpperBound` and less than `largeSetLowerBound`), the
     * maximum number of response records to return. Does not apply
     * when the two bounds differ by 1. §3.2.2.1.6.
     *
     * @public
     * @readonly
     */
    readonly mediumSetPresentNumber: INTEGER;
    /**
     * @summary `replaceIndicator`.
     * @description
     *
     * Applies when a result set of this name already exists. On:
     * after the query, that set is deleted and a new one of the same
     * name is created; if the search cannot be processed, the new set
     * is empty. Off: the search is not processed, the server returns
     * an error diagnostic, and the existing set is unchanged. Ignored
     * when no set of that name exists. Must be on when
     * `resultSetName` is `"default"`. The 2003 text states this as
     * 'on' and 'off' and does not map those words to boolean values.
     * §3.2.2.1.3.
     *
     * @public
     * @readonly
     */
    readonly replaceIndicator: BOOLEAN;
    /**
     * @summary `resultSetName`.
     * @description
     *
     * Name to give the result set so it can be referenced later in
     * this Z-association. Case-sensitive. `"default"` must be
     * supported, and then `replaceIndicator` must be on. Any other
     * name requires named result sets (option bit 14). If that name
     * does not exist, the server creates it and ignores
     * `replaceIndicator`; it stays empty when the query finds nothing.
     * §3.2.2.1.3.
     *
     * @public
     * @readonly
     */
    readonly resultSetName: InternationalString;
    /**
     * @summary `databaseNames`.
     * @description
     *
     * Databases to which the query applies. Names are
     * case-insensitive. There is no default database. Combinations
     * the server will accept are designated by Explain or outside the
     * standard. The server may reject a multi-database search with
     * diagnostic 111 or 23. §3.2.2.1.2.
     *
     * @public
     * @readonly
     */
    readonly databaseNames: DatabaseName[];
    /**
     * @summary `smallSetElementSetNames`.
     * @description
     *
     * Preferred composition of records when the result set is a
     * small-set. Comp-spec is not part of Search, so the default
     * schema applies and these names select elements. §3.2.2.1.4,
     * §3.6.2.
     *
     * @public
     * @readonly
     */
    readonly smallSetElementSetNames: OPTIONAL<ElementSetNames>;
    /**
     * @summary `mediumSetElementSetNames`.
     * @description
     *
     * Preferred composition of records when the result set is a
     * medium-set. The default schema applies. §3.2.2.1.4, §3.6.2.
     *
     * @public
     * @readonly
     */
    readonly mediumSetElementSetNames: OPTIONAL<ElementSetNames>;
    /**
     * @summary `preferredRecordSyntax`.
     * @description
     *
     * Object identifier of the abstract syntax requested for retrieval
     * records. When supplied, the server should not return records in
     * another syntax: a record that is unavailable in it gets a
     * surrogate diagnostic such as 238, and the server may fail the
     * request with 227, 239, or 1070. When omitted, the server may
     * choose a syntax per record, or fail with 1071 or 1069.
     * §3.2.2.1.5, §3.6.3.
     *
     * @public
     * @readonly
     */
    readonly preferredRecordSyntax: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `query`.
     * @description
     *
     * The query, whose alternative selects the type. Type-0 requires
     * agreement outside this standard. Type-1 is the RPN query (§3.7);
     * proximity and restriction are valid only when version 3 is in
     * force. Type-2 is ISO 8777. Type-100 is Common Command Language;
     * its syntax is not specified here. Type-101 is extended RPN;
     * proximity and restriction are valid for versions 2 and 3.
     * Type-102 is Ranked List, left for a later version. Type-104
     * identifies an externally defined query and is not a protocol
     * error only when option bit 19 was accepted. §3.2.2.1.1.
     *
     * @public
     * @readonly
     */
    readonly query: Query;
    /**
     * @summary `additionalSearchInfo`.
     * @description
     *
     * Version 3 only. On the request, the preferred format or content
     * of search by-product information. On the response, the server
     * may return intermediate result counts, why records were
     * returned, or whether an attribute was used. User information
     * format SearchResponse-1 is defined in Appendix USR.
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
        smallSetUpperBound: INTEGER,
        largeSetLowerBound: INTEGER,
        mediumSetPresentNumber: INTEGER,
        replaceIndicator: BOOLEAN,
        resultSetName: InternationalString,
        databaseNames: DatabaseName[],
        smallSetElementSetNames: OPTIONAL<ElementSetNames>,
        mediumSetElementSetNames: OPTIONAL<ElementSetNames>,
        preferredRecordSyntax: OPTIONAL<OBJECT_IDENTIFIER>,
        query: Query,
        additionalSearchInfo: OPTIONAL<OtherInformation>,
        otherInfo: OPTIONAL<OtherInformation>
    ) {
        this.referenceId = referenceId;
        this.smallSetUpperBound = smallSetUpperBound;
        this.largeSetLowerBound = largeSetLowerBound;
        this.mediumSetPresentNumber = mediumSetPresentNumber;
        this.replaceIndicator = replaceIndicator;
        this.resultSetName = resultSetName;
        this.databaseNames = databaseNames;
        this.smallSetElementSetNames = smallSetElementSetNames;
        this.mediumSetElementSetNames = mediumSetElementSetNames;
        this.preferredRecordSyntax = preferredRecordSyntax;
        this.query = query;
        this.additionalSearchInfo = additionalSearchInfo;
        this.otherInfo = otherInfo;
    }

    /**
     * @summary Restructures an object into a SearchRequest
     * @description
     * 
     * This takes an `object` and converts it to a `SearchRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchRequest`.
     * @returns {SearchRequest}
     */
    public static _from_object (_o: { [_K in keyof (SearchRequest)]: (SearchRequest)[_K] }): SearchRequest {
        return new SearchRequest(_o.referenceId, _o.smallSetUpperBound, _o.largeSetLowerBound, _o.mediumSetPresentNumber, _o.replaceIndicator, _o.resultSetName, _o.databaseNames, _o.smallSetElementSetNames, _o.mediumSetElementSetNames, _o.preferredRecordSyntax, _o.query, _o.additionalSearchInfo, _o.otherInfo);
    }


}

/**
 * @summary The Leading Root Component Types of SearchRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SearchRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("referenceId", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("smallSetUpperBound", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("largeSetLowerBound", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("mediumSetPresentNumber", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("replaceIndicator", false, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("resultSetName", false, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("databaseNames", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("smallSetElementSetNames", true, $.hasTag(_TagClass.context, 100)),
    new $.ComponentSpec("mediumSetElementSetNames", true, $.hasTag(_TagClass.context, 101)),
    new $.ComponentSpec("preferredRecordSyntax", true, $.hasTag(_TagClass.context, 104)),
    new $.ComponentSpec("query", false, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("additionalSearchInfo", true, $.hasTag(_TagClass.context, 203)),
    new $.ComponentSpec("otherInfo", true, $.hasTag(_TagClass.context, 201))
];

/**
 * @summary The Trailing Root Component Types of SearchRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SearchRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SearchRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SearchRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SearchRequest: $.ASN1Decoder<SearchRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchRequest (el: _Element): SearchRequest {
    if (!_cached_decoder_for_SearchRequest) { _cached_decoder_for_SearchRequest = function (el: _Element): SearchRequest {
    let referenceId: OPTIONAL<ReferenceId>;
    let smallSetUpperBound!: INTEGER;
    let largeSetLowerBound!: INTEGER;
    let mediumSetPresentNumber!: INTEGER;
    let replaceIndicator!: BOOLEAN;
    let resultSetName!: InternationalString;
    let databaseNames!: DatabaseName[];
    let smallSetElementSetNames: OPTIONAL<ElementSetNames>;
    let mediumSetElementSetNames: OPTIONAL<ElementSetNames>;
    let preferredRecordSyntax: OPTIONAL<OBJECT_IDENTIFIER>;
    let query!: Query;
    let additionalSearchInfo: OPTIONAL<OtherInformation>;
    let otherInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "referenceId": (_el: _Element): void => { referenceId = _decode_ReferenceId(_el); },
        "smallSetUpperBound": (_el: _Element): void => { smallSetUpperBound = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "largeSetLowerBound": (_el: _Element): void => { largeSetLowerBound = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "mediumSetPresentNumber": (_el: _Element): void => { mediumSetPresentNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "replaceIndicator": (_el: _Element): void => { replaceIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "resultSetName": (_el: _Element): void => { resultSetName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "databaseNames": (_el: _Element): void => { databaseNames = $._decode_implicit<DatabaseName[]>(() => $._decodeSequenceOf<DatabaseName>(() => _decode_DatabaseName))(_el); },
        "smallSetElementSetNames": (_el: _Element): void => { smallSetElementSetNames = $._decode_explicit<ElementSetNames>(() => _decode_ElementSetNames)(_el); },
        "mediumSetElementSetNames": (_el: _Element): void => { mediumSetElementSetNames = $._decode_explicit<ElementSetNames>(() => _decode_ElementSetNames)(_el); },
        "preferredRecordSyntax": (_el: _Element): void => { preferredRecordSyntax = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "query": (_el: _Element): void => { query = $._decode_explicit<Query>(() => _decode_Query)(_el); },
        "additionalSearchInfo": (_el: _Element): void => { additionalSearchInfo = $._decode_implicit<OtherInformation>(() => _decode_OtherInformation)(_el); },
        "otherInfo": (_el: _Element): void => { otherInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchRequest,
        _extension_additions_list_spec_for_SearchRequest,
        _root_component_type_list_2_spec_for_SearchRequest,
        undefined,
    );
    return new SearchRequest(
        referenceId,
        smallSetUpperBound,
        largeSetLowerBound,
        mediumSetPresentNumber,
        replaceIndicator,
        resultSetName,
        databaseNames,
        smallSetElementSetNames,
        mediumSetElementSetNames,
        preferredRecordSyntax,
        query,
        additionalSearchInfo,
        otherInfo
    );
}; }
    return _cached_decoder_for_SearchRequest(el);
}

let _cached_encoder_for_SearchRequest: $.ASN1Encoder<SearchRequest> | null = null;

/**
 * @summary Encodes a(n) SearchRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchRequest, encoded as an ASN.1 Element.
 */
export
function _encode_SearchRequest (value: SearchRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchRequest) { _cached_encoder_for_SearchRequest = function (value: SearchRequest, elGetter: $.ASN1Encoder<SearchRequest>): _Element {
    const _components: _Element[] = new Array(13);
    let _components_i = 0;
    if (value.referenceId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ReferenceId, $.BER)(value.referenceId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.smallSetUpperBound, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.largeSetLowerBound, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeInteger, $.BER)(value.mediumSetPresentNumber, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 16, () => $._encodeBoolean, $.BER)(value.replaceIndicator, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 17, () => _encode_InternationalString, $.BER)(value.resultSetName, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 18, () => $._encodeSequenceOf<DatabaseName>(() => _encode_DatabaseName, $.BER), $.BER)(value.databaseNames, $.BER);
    if (value.smallSetElementSetNames !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 100, () => _encode_ElementSetNames, $.BER)(value.smallSetElementSetNames, $.BER);
    }
    if (value.mediumSetElementSetNames !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 101, () => _encode_ElementSetNames, $.BER)(value.mediumSetElementSetNames, $.BER);
    }
    if (value.preferredRecordSyntax !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 104, () => $._encodeObjectIdentifier, $.BER)(value.preferredRecordSyntax, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 21, () => _encode_Query, $.BER)(value.query, $.BER);
    if (value.additionalSearchInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 203, () => _encode_OtherInformation, $.BER)(value.additionalSearchInfo, $.BER);
    }
    if (value.otherInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 201, () => _encode_OtherInformation, $.BER)(value.otherInfo, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SearchRequest(value, elGetter);
}


/* eslint-enable */
