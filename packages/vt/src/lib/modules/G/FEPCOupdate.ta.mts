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
import { FEPCOupdate_Item, _decode_FEPCOupdate_Item, _encode_FEPCOupdate_Item } from "../G/FEPCOupdate-Item.ta.mjs";
// export { FEPCOupdate_Item, _decode_FEPCOupdate_Item, _encode_FEPCOupdate_Item } from "../G/FEPCOupdate-Item.ta.mjs";


/**
 * @summary FEPCOupdate
 * @description
 *
 * Sequence of Field Entry Pilot Control Object record updates. Each
 * record is event + conditions + reactions. Syntax of FEE/FEC/FER
 * comes from the FEPCO's CO-type-identifier register entry. ISO/IEC
 * 9040:1997 §3.3.61, §14.2 c; ISO/IEC 9041-1:1997 §12.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FEPCOupdate  ::=  SEQUENCE OF SEQUENCE {
 *     index     [0] IMPLICIT INTEGER,
 *     event     [1] FEE,
 *     condition [2] IMPLICIT SET OF FEC,
 *     reactions [3] IMPLICIT SEQUENCE OF FER
 * }
 * ```
 */
export
type FEPCOupdate = FEPCOupdate_Item[]; // SequenceOfType

let _cached_decoder_for_FEPCOupdate: $.ASN1Decoder<FEPCOupdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FEPCOupdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FEPCOupdate (el: _Element): FEPCOupdate {
    if (!_cached_decoder_for_FEPCOupdate) { _cached_decoder_for_FEPCOupdate = $._decodeSequenceOf<FEPCOupdate_Item>(() => _decode_FEPCOupdate_Item); }
    return _cached_decoder_for_FEPCOupdate(el);
}

let _cached_encoder_for_FEPCOupdate: $.ASN1Encoder<FEPCOupdate> | null = null;

/**
 * @summary Encodes a(n) FEPCOupdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FEPCOupdate, encoded as an ASN.1 Element.
 */
export
function _encode_FEPCOupdate (value: FEPCOupdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FEPCOupdate) { _cached_encoder_for_FEPCOupdate = $._encodeSequenceOf<FEPCOupdate_Item>(() => _encode_FEPCOupdate_Item, $.BER); }
    return _cached_encoder_for_FEPCOupdate(value, elGetter);
}


/* eslint-enable */
