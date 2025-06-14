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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { AE_title, _decode_AE_title, _encode_AE_title } from "@wildboar/acse/src/lib/modules/ACSE-1/AE-title.ta.mjs";
/* START_OF_SYMBOL_DEFINITION BackUpDestinationList */
/**
 * @summary BackUpDestinationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackUpDestinationList  ::=  SEQUENCE OF AE-title
 * ```
 */
export
type BackUpDestinationList = AE_title[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION BackUpDestinationList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BackUpDestinationList */
let _cached_decoder_for_BackUpDestinationList: $.ASN1Decoder<BackUpDestinationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BackUpDestinationList */

/* START_OF_SYMBOL_DEFINITION _decode_BackUpDestinationList */
/**
 * @summary Decodes an ASN.1 element into a(n) BackUpDestinationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackUpDestinationList} The decoded data structure.
 */
export
function _decode_BackUpDestinationList (el: _Element) {
    if (!_cached_decoder_for_BackUpDestinationList) { _cached_decoder_for_BackUpDestinationList = $._decodeSequenceOf<AE_title>(() => _decode_AE_title); }
    return _cached_decoder_for_BackUpDestinationList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BackUpDestinationList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BackUpDestinationList */
let _cached_encoder_for_BackUpDestinationList: $.ASN1Encoder<BackUpDestinationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BackUpDestinationList */

/* START_OF_SYMBOL_DEFINITION _encode_BackUpDestinationList */
/**
 * @summary Encodes a(n) BackUpDestinationList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackUpDestinationList, encoded as an ASN.1 Element.
 */
export
function _encode_BackUpDestinationList (value: BackUpDestinationList, elGetter: $.ASN1Encoder<BackUpDestinationList>) {
    if (!_cached_encoder_for_BackUpDestinationList) { _cached_encoder_for_BackUpDestinationList = $._encodeSequenceOf<AE_title>(() => _encode_AE_title, $.BER); }
    return _cached_encoder_for_BackUpDestinationList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BackUpDestinationList */

/* eslint-enable */
