/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResultsByDB_Item_databases
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResultsByDB-Item-databases ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ResultsByDB_Item_databases =
    { all: NULL } /* CHOICE_ALT_ROOT */
    | { list: DatabaseName[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ResultsByDB_Item_databases: $.ASN1Decoder<ResultsByDB_Item_databases> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResultsByDB_Item_databases
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResultsByDB_Item_databases (el: _Element): ResultsByDB_Item_databases {
    if (!_cached_decoder_for_ResultsByDB_Item_databases) { _cached_decoder_for_ResultsByDB_Item_databases = $._decode_inextensible_choice<ResultsByDB_Item_databases>({
    "CONTEXT 1": [ "all", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "list", $._decode_implicit<DatabaseName[]>(() => $._decodeSequenceOf<DatabaseName>(() => _decode_DatabaseName)) ]
}); }
    return _cached_decoder_for_ResultsByDB_Item_databases(el);
}

let _cached_encoder_for_ResultsByDB_Item_databases: $.ASN1Encoder<ResultsByDB_Item_databases> | null = null;

/**
 * @summary Encodes a(n) ResultsByDB_Item_databases into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResultsByDB_Item_databases, encoded as an ASN.1 Element.
 */
export
function _encode_ResultsByDB_Item_databases (value: ResultsByDB_Item_databases, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResultsByDB_Item_databases) { _cached_encoder_for_ResultsByDB_Item_databases = $._encode_choice<ResultsByDB_Item_databases>({
    "all": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "list": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<DatabaseName>(() => _encode_DatabaseName, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ResultsByDB_Item_databases(value, elGetter);
}


/* eslint-enable */
