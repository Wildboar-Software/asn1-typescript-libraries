/* eslint-disable */
import {
    BOOLEAN,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SortKey, _decode_SortKey, _encode_SortKey } from "../DirectoryAbstractService/SortKey.ta.mjs";
// export { SortKey, _decode_SortKey, _encode_SortKey } from "../DirectoryAbstractService/SortKey.ta.mjs";


/**
 * @summary PagedResultsRequest_newRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PagedResultsRequest-newRequest ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class PagedResultsRequest_newRequest {
    /**
     * @summary `pageSize`.
     * @public
     * @readonly
     */
    readonly pageSize: INTEGER;
    /**
     * @summary `sortKeys`.
     * @public
     * @readonly
     */
    readonly sortKeys: OPTIONAL<SortKey[]>;
    /**
     * @summary `reverse`.
     * @public
     * @readonly
     */
    readonly reverse: OPTIONAL<BOOLEAN>;
    /**
     * @summary `unmerged`.
     * @public
     * @readonly
     */
    readonly unmerged: OPTIONAL<BOOLEAN>;

    constructor (
        pageSize: INTEGER,
        sortKeys: OPTIONAL<SortKey[]>,
        reverse: OPTIONAL<BOOLEAN>,
        unmerged: OPTIONAL<BOOLEAN>
    ) {
        this.pageSize = pageSize;
        this.sortKeys = sortKeys;
        this.reverse = reverse;
        this.unmerged = unmerged;
    }

    /**
     * @summary Restructures an object into a PagedResultsRequest_newRequest
     * @description
     * 
     * This takes an `object` and converts it to a `PagedResultsRequest_newRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PagedResultsRequest_newRequest`.
     * @returns {PagedResultsRequest_newRequest}
     */
    public static _from_object (_o: { [_K in keyof (PagedResultsRequest_newRequest)]: (PagedResultsRequest_newRequest)[_K] }): PagedResultsRequest_newRequest {
        return new PagedResultsRequest_newRequest(_o.pageSize, _o.sortKeys, _o.reverse, _o.unmerged);
    }

    /**
     * @summary Getter that returns the default value for `reverse`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_reverse () { return false; }
    /**
     * @summary Getter that returns the default value for `unmerged`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_unmerged () { return false; }
}

/**
 * @summary The Leading Root Component Types of PagedResultsRequest_newRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PagedResultsRequest_newRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("pageSize", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("sortKeys", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("reverse", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("unmerged", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of PagedResultsRequest_newRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PagedResultsRequest_newRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PagedResultsRequest_newRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PagedResultsRequest_newRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PagedResultsRequest_newRequest: $.ASN1Decoder<PagedResultsRequest_newRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PagedResultsRequest_newRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PagedResultsRequest_newRequest (el: _Element): PagedResultsRequest_newRequest {
    if (!_cached_decoder_for_PagedResultsRequest_newRequest) { _cached_decoder_for_PagedResultsRequest_newRequest = function (el: _Element): PagedResultsRequest_newRequest {
    let pageSize!: INTEGER;
    let sortKeys: OPTIONAL<SortKey[]>;
    let reverse: OPTIONAL<BOOLEAN> = PagedResultsRequest_newRequest._default_value_for_reverse;
    let unmerged: OPTIONAL<BOOLEAN> = PagedResultsRequest_newRequest._default_value_for_unmerged;
    const callbacks: $.DecodingMap = {
        "pageSize": (_el: _Element): void => { pageSize = $._decodeInteger(_el); },
        "sortKeys": (_el: _Element): void => { sortKeys = $._decodeSequenceOf<SortKey>(() => _decode_SortKey)(_el); },
        "reverse": (_el: _Element): void => { reverse = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "unmerged": (_el: _Element): void => { unmerged = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PagedResultsRequest_newRequest,
        _extension_additions_list_spec_for_PagedResultsRequest_newRequest,
        _root_component_type_list_2_spec_for_PagedResultsRequest_newRequest,
        undefined,
    );
    return new PagedResultsRequest_newRequest(
        pageSize,
        sortKeys,
        reverse,
        unmerged
    );
}; }
    return _cached_decoder_for_PagedResultsRequest_newRequest(el);
}

let _cached_encoder_for_PagedResultsRequest_newRequest: $.ASN1Encoder<PagedResultsRequest_newRequest> | null = null;

/**
 * @summary Encodes a(n) PagedResultsRequest_newRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PagedResultsRequest_newRequest, encoded as an ASN.1 Element.
 */
export
function _encode_PagedResultsRequest_newRequest (value: PagedResultsRequest_newRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PagedResultsRequest_newRequest) { _cached_encoder_for_PagedResultsRequest_newRequest = function (value: PagedResultsRequest_newRequest, elGetter: $.ASN1Encoder<PagedResultsRequest_newRequest>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeInteger(value.pageSize, $.BER));
    if (value.sortKeys !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encodeSequenceOf<SortKey>(() => _encode_SortKey, $.BER)(value.sortKeys, $.BER));
    }
    if (value.reverse !== undefined && !$.deepEq(value.reverse, PagedResultsRequest_newRequest._default_value_for_reverse)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.reverse, $.BER));
    }
    if (value.unmerged !== undefined && !$.deepEq(value.unmerged, PagedResultsRequest_newRequest._default_value_for_unmerged)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.unmerged, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PagedResultsRequest_newRequest(value, elGetter);
}


/* eslint-enable */
