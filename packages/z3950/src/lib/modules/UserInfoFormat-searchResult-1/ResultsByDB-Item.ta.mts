/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ResultsByDB_Item_databases, _decode_ResultsByDB_Item_databases, _encode_ResultsByDB_Item_databases } from "../UserInfoFormat-searchResult-1/ResultsByDB-Item-databases.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary ResultsByDB_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultsByDB-Item ::= SEQUENCE {
 *     databases [1] CHOICE {
 *         all [1] IMPLICIT NULL,
 *         --Applies across all of the databases in Search APDU
 *         list [2] IMPLICIT SEQUENCE OF DatabaseName  --Applies across all databases in this list
 *     },
 *     count [2] IMPLICIT INTEGER OPTIONAL,
 *     --Number of records for query component
 *     --(and, as above, if during search, via resource control,
 *     -- number of records so far)
 *     resultSetName [3] IMPLICIT InternationalString OPTIONAL  --See comment 1.
 * }
 * ```
 * 
 * @class
 */
export
class ResultsByDB_Item {
    /**
     * @summary `databases`.
     * @public
     * @readonly
     */
    readonly databases: ResultsByDB_Item_databases;
    /**
     * @summary `count`.
     * @public
     * @readonly
     */
    readonly count: OPTIONAL<INTEGER>;
    /**
     * @summary `resultSetName`.
     * @public
     * @readonly
     */
    readonly resultSetName: OPTIONAL<InternationalString>;

    constructor (
        databases: ResultsByDB_Item_databases,
        count: OPTIONAL<INTEGER>,
        resultSetName: OPTIONAL<InternationalString>
    ) {
        this.databases = databases;
        this.count = count;
        this.resultSetName = resultSetName;
    }

    /**
     * @summary Restructures an object into a ResultsByDB_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ResultsByDB_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ResultsByDB_Item`.
     * @returns {ResultsByDB_Item}
     */
    public static _from_object (_o: { [_K in keyof (ResultsByDB_Item)]: (ResultsByDB_Item)[_K] }): ResultsByDB_Item {
        return new ResultsByDB_Item(_o.databases, _o.count, _o.resultSetName);
    }


}

/**
 * @summary The Leading Root Component Types of ResultsByDB_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ResultsByDB_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("databases", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("count", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("resultSetName", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ResultsByDB_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ResultsByDB_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ResultsByDB_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ResultsByDB_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ResultsByDB_Item: $.ASN1Decoder<ResultsByDB_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultsByDB_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResultsByDB_Item (el: _Element): ResultsByDB_Item {
    if (!_cached_decoder_for_ResultsByDB_Item) { _cached_decoder_for_ResultsByDB_Item = function (el: _Element): ResultsByDB_Item {
    let databases!: ResultsByDB_Item_databases;
    let count: OPTIONAL<INTEGER>;
    let resultSetName: OPTIONAL<InternationalString>;
    const callbacks: $.DecodingMap = {
        "databases": (_el: _Element): void => { databases = $._decode_explicit<ResultsByDB_Item_databases>(() => _decode_ResultsByDB_Item_databases)(_el); },
        "count": (_el: _Element): void => { count = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "resultSetName": (_el: _Element): void => { resultSetName = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ResultsByDB_Item,
        _extension_additions_list_spec_for_ResultsByDB_Item,
        _root_component_type_list_2_spec_for_ResultsByDB_Item,
        undefined,
    );
    return new ResultsByDB_Item(
        databases,
        count,
        resultSetName
    );
}; }
    return _cached_decoder_for_ResultsByDB_Item(el);
}

let _cached_encoder_for_ResultsByDB_Item: $.ASN1Encoder<ResultsByDB_Item> | null = null;

/**
 * @summary Encodes a(n) ResultsByDB_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultsByDB_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ResultsByDB_Item (value: ResultsByDB_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResultsByDB_Item) { _cached_encoder_for_ResultsByDB_Item = function (value: ResultsByDB_Item, elGetter: $.ASN1Encoder<ResultsByDB_Item>): _Element {
    const _components: _Element[] = new Array(3);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_ResultsByDB_Item_databases, $.BER)(value.databases, $.BER);
    if (value.count !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.count, $.BER);
    }
    if (value.resultSetName !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.resultSetName, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ResultsByDB_Item(value, elGetter);
}


/* eslint-enable */
