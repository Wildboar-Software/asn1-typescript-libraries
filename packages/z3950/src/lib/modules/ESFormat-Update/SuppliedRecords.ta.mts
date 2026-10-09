/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SuppliedRecords_Item, _decode_SuppliedRecords_Item, _encode_SuppliedRecords_Item } from "../ESFormat-Update/SuppliedRecords-Item.ta.mjs";
// export { SuppliedRecords_Item, _decode_SuppliedRecords_Item, _encode_SuppliedRecords_Item } from "../ESFormat-Update/SuppliedRecords-Item.ta.mjs";


/**
 * @summary SuppliedRecords
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuppliedRecords  ::=  SEQUENCE OF SEQUENCE {
 *     recordId        [1] CHOICE {
 *         number [1] IMPLICIT INTEGER,
 *         string [2] IMPLICIT InternationalString,
 *         opaque [3] IMPLICIT OCTET STRING
 *     } OPTIONAL,
 *     supplementalId  [2] CHOICE {
 *         timeStamp       [1] IMPLICIT GeneralizedTime,
 *         versionNumber   [2] IMPLICIT InternationalString,
 *         previousVersion [3] IMPLICIT EXTERNAL
 *     } OPTIONAL,
 *     correlationInfo [3] IMPLICIT CorrelationInfo OPTIONAL,
 *     record          [4] IMPLICIT EXTERNAL
 * }
 * ```
 */
export
type SuppliedRecords = SuppliedRecords_Item[]; // SequenceOfType

let _cached_decoder_for_SuppliedRecords: $.ASN1Decoder<SuppliedRecords> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuppliedRecords
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuppliedRecords (el: _Element): SuppliedRecords {
    if (!_cached_decoder_for_SuppliedRecords) { _cached_decoder_for_SuppliedRecords = $._decodeSequenceOf<SuppliedRecords_Item>(() => _decode_SuppliedRecords_Item); }
    return _cached_decoder_for_SuppliedRecords(el);
}

let _cached_encoder_for_SuppliedRecords: $.ASN1Encoder<SuppliedRecords> | null = null;

/**
 * @summary Encodes a(n) SuppliedRecords into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuppliedRecords, encoded as an ASN.1 Element.
 */
export
function _encode_SuppliedRecords (value: SuppliedRecords, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuppliedRecords) { _cached_encoder_for_SuppliedRecords = $._encodeSequenceOf<SuppliedRecords_Item>(() => _encode_SuppliedRecords_Item, $.BER); }
    return _cached_encoder_for_SuppliedRecords(value, elGetter);
}


/* eslint-enable */
