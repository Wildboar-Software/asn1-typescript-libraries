/* eslint-disable */
import {
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
import { RIOupdate_Item, _decode_RIOupdate_Item, _encode_RIOupdate_Item } from "../G/RIOupdate-Item.ta.mjs";


/**
 * @summary RIOupdate
 * @description
 *
 * Sequence of Reference Information Object record operations:
 * eraseRIO / deleteRecord / createRecord. `updates` only for Create
 * Record; absent ⇒ empty record. ISO/IEC 9040:1997 §3.3.70; ISO/IEC
 * 9041-1:1997 §12.2.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIOupdate  ::=  SEQUENCE OF SEQUENCE {
 *     recordId    [0] IMPLICIT PrintableString OPTIONAL,
 *     operation   [1] IMPLICIT INTEGER {
 *         eraseRIO     (0),
 *         deleteRecord (1),
 *         createRecord (2)
 *     },
 *     updates     [2] IMPLICIT SEQUENCE OF ISO9041-VTP.ObjectUpdate OPTIONAL
 * }
 * ```
 */
export
type RIOupdate = RIOupdate_Item[]; // SequenceOfType

let _cached_decoder_for_RIOupdate: $.ASN1Decoder<RIOupdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RIOupdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RIOupdate (el: _Element): RIOupdate {
    if (!_cached_decoder_for_RIOupdate) { _cached_decoder_for_RIOupdate = $._decodeSequenceOf<RIOupdate_Item>(() => _decode_RIOupdate_Item); }
    return _cached_decoder_for_RIOupdate(el);
}

let _cached_encoder_for_RIOupdate: $.ASN1Encoder<RIOupdate> | null = null;

/**
 * @summary Encodes a(n) RIOupdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RIOupdate, encoded as an ASN.1 Element.
 */
export
function _encode_RIOupdate (value: RIOupdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RIOupdate) { _cached_encoder_for_RIOupdate = $._encodeSequenceOf<RIOupdate_Item>(() => _encode_RIOupdate_Item, $.BER); }
    return _cached_encoder_for_RIOupdate(value, elGetter);
}


/* eslint-enable */
