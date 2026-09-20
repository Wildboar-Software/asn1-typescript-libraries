/* eslint-disable */
import {
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { COupdate_objectUpdate_multiElement_Item_update_booleanUpdate, _decode_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate, _encode_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate } from "../G/COupdate-objectUpdate-multiElement-Item-update-booleanUpdate.ta.mjs";


/**
 * @summary COupdate_objectUpdate_multiElement_Item_update
 * @description
 *
 * Per-element update of a structured parametric CO.
 * `characterUpdate` [0], `booleanUpdate` [1] (same mask rule as
 * `COupdate.booleanUpdate`), `symbolicUpdate` [2], `integerUpdate`
 * [3], `bitStringUpdate` [4]. ISO/IEC 9041-1:1997 §12.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * COupdate-objectUpdate-multiElement-Item-update ::= CHOICE {
 *     characterUpdate [0] IMPLICIT OCTET STRING,
 *     booleanUpdate   [1] IMPLICIT SEQUENCE {
 *         values  [0] IMPLICIT BIT STRING,
 *         mask    [1] IMPLICIT BIT STRING OPTIONAL
 *     }, -- See note under mask in G.COUpdate
 *     symbolicUpdate  [2] IMPLICIT INTEGER,
 *     integerUpdate   [3] IMPLICIT INTEGER,
 *     bitStringUpdate [4] IMPLICIT BIT STRING
 * }
 * ```
 */
export
type COupdate_objectUpdate_multiElement_Item_update =
    { characterUpdate: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { booleanUpdate: COupdate_objectUpdate_multiElement_Item_update_booleanUpdate } /* CHOICE_ALT_ROOT */
    | { symbolicUpdate: INTEGER } /* CHOICE_ALT_ROOT */
    | { integerUpdate: INTEGER } /* CHOICE_ALT_ROOT */
    | { bitStringUpdate: BIT_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_COupdate_objectUpdate_multiElement_Item_update: $.ASN1Decoder<COupdate_objectUpdate_multiElement_Item_update> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) COupdate_objectUpdate_multiElement_Item_update
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_COupdate_objectUpdate_multiElement_Item_update (el: _Element): COupdate_objectUpdate_multiElement_Item_update {
    if (!_cached_decoder_for_COupdate_objectUpdate_multiElement_Item_update) { _cached_decoder_for_COupdate_objectUpdate_multiElement_Item_update = $._decode_inextensible_choice<COupdate_objectUpdate_multiElement_Item_update>({
    "CONTEXT 0": [ "characterUpdate", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 1": [ "booleanUpdate", $._decode_implicit<COupdate_objectUpdate_multiElement_Item_update_booleanUpdate>(() => _decode_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate) ],
    "CONTEXT 2": [ "symbolicUpdate", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 3": [ "integerUpdate", $._decode_implicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 4": [ "bitStringUpdate", $._decode_implicit<BIT_STRING>(() => $._decodeBitString) ]
}); }
    return _cached_decoder_for_COupdate_objectUpdate_multiElement_Item_update(el);
}

let _cached_encoder_for_COupdate_objectUpdate_multiElement_Item_update: $.ASN1Encoder<COupdate_objectUpdate_multiElement_Item_update> | null = null;

/**
 * @summary Encodes a(n) COupdate_objectUpdate_multiElement_Item_update into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The COupdate_objectUpdate_multiElement_Item_update, encoded as an ASN.1 Element.
 */
export
function _encode_COupdate_objectUpdate_multiElement_Item_update (value: COupdate_objectUpdate_multiElement_Item_update, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_COupdate_objectUpdate_multiElement_Item_update) { _cached_encoder_for_COupdate_objectUpdate_multiElement_Item_update = $._encode_choice<COupdate_objectUpdate_multiElement_Item_update>({
    "characterUpdate": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
    "booleanUpdate": $._encode_implicit(_TagClass.context, 1, () => _encode_COupdate_objectUpdate_multiElement_Item_update_booleanUpdate, $.BER),
    "symbolicUpdate": $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER),
    "integerUpdate": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
    "bitStringUpdate": $._encode_implicit(_TagClass.context, 4, () => $._encodeBitString, $.BER),
}, $.BER); }
    return _cached_encoder_for_COupdate_objectUpdate_multiElement_Item_update(value, elGetter);
}


/* eslint-enable */
