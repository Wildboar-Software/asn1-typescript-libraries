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
import { FEICOupdate_Item, _decode_FEICOupdate_Item, _encode_FEICOupdate_Item } from "../G/FEICOupdate-Item.ta.mjs";


/**
 * @summary FEICOupdate
 * @description
 *
 * Sequence of Field Entry Instruction Control Object record updates.
 * FEI syntax is in the register entry named by CO-type-identifier.
 * ISO/IEC 9040:1997 §3.3.60, §14.2 b; ISO/IEC 9041-1:1997 §12.2.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FEICOupdate  ::=  SEQUENCE OF SEQUENCE {
 *     index   [0] IMPLICIT INTEGER,
 *     content [1] IMPLICIT SET OF FEI
 * }
 * ```
 */
export
type FEICOupdate = FEICOupdate_Item[]; // SequenceOfType

let _cached_decoder_for_FEICOupdate: $.ASN1Decoder<FEICOupdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FEICOupdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FEICOupdate (el: _Element): FEICOupdate {
    if (!_cached_decoder_for_FEICOupdate) { _cached_decoder_for_FEICOupdate = $._decodeSequenceOf<FEICOupdate_Item>(() => _decode_FEICOupdate_Item); }
    return _cached_decoder_for_FEICOupdate(el);
}

let _cached_encoder_for_FEICOupdate: $.ASN1Encoder<FEICOupdate> | null = null;

/**
 * @summary Encodes a(n) FEICOupdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FEICOupdate, encoded as an ASN.1 Element.
 */
export
function _encode_FEICOupdate (value: FEICOupdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FEICOupdate) { _cached_encoder_for_FEICOupdate = $._encodeSequenceOf<FEICOupdate_Item>(() => _encode_FEICOupdate_Item, $.BER); }
    return _cached_encoder_for_FEICOupdate(value, elGetter);
}


/* eslint-enable */
