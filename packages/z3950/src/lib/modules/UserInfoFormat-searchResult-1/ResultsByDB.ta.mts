/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ResultsByDB_Item, _decode_ResultsByDB_Item, _encode_ResultsByDB_Item } from "../UserInfoFormat-searchResult-1/ResultsByDB-Item.ta.mjs";
// export { ResultsByDB_Item, _decode_ResultsByDB_Item, _encode_ResultsByDB_Item } from "../UserInfoFormat-searchResult-1/ResultsByDB-Item.ta.mjs";


/**
 * @summary ResultsByDB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultsByDB  ::=  SEQUENCE OF SEQUENCE{
 *    databases       [1] CHOICE{
 *                           all   [1] IMPLICIT NULL,
 *                                        -- applies across all of the databases in
 *                                        -- Search PDU
 *                           list  [2] IMPLICIT SEQUENCE OF DatabaseName
 *                                        -- applies across all databases in this
 *                                        -- list
 *                              },
 *    count           [2] IMPLICIT INTEGER OPTIONAL,
 *                           -- Number of records for query component (and, as
 *                           -- above, if during search, via resource control,
 *                           -- number of records so far).
 *    resultSetName   [3] IMPLICIT InternationalString OPTIONAL
 *                           -- Target-assigned result set by which subQuery is
 *                           -- available. Should not be provided unless
 *                           -- processing for this query component is concluded
 *                           -- (i.e., when this report comes during search, via
 *                           -- resource control, as opposed to after search, via
 *                           -- additionalSearchInfo).
 *                      }
 * ```
 */
export
type ResultsByDB = ResultsByDB_Item[]; // SequenceOfType

let _cached_decoder_for_ResultsByDB: $.ASN1Decoder<ResultsByDB> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultsByDB
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResultsByDB (el: _Element): ResultsByDB {
    if (!_cached_decoder_for_ResultsByDB) { _cached_decoder_for_ResultsByDB = $._decodeSequenceOf<ResultsByDB_Item>(() => _decode_ResultsByDB_Item); }
    return _cached_decoder_for_ResultsByDB(el);
}

let _cached_encoder_for_ResultsByDB: $.ASN1Encoder<ResultsByDB> | null = null;

/**
 * @summary Encodes a(n) ResultsByDB into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultsByDB, encoded as an ASN.1 Element.
 */
export
function _encode_ResultsByDB (value: ResultsByDB, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResultsByDB) { _cached_encoder_for_ResultsByDB = $._encodeSequenceOf<ResultsByDB_Item>(() => _encode_ResultsByDB_Item, $.BER); }
    return _cached_encoder_for_ResultsByDB(value, elGetter);
}


/* eslint-enable */
