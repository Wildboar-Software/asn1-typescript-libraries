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
import { AlarmStatus_Item, _decode_AlarmStatus_Item, _encode_AlarmStatus_Item } from "../Attribute-ASN1Module/AlarmStatus-Item.ta.mjs";
/**
 * @summary AlarmStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlarmStatus  ::= 
 *   SET OF
 *     INTEGER {underRepair(0), critical(1), major(2), minor(3),
 *              alarmOutstanding(4)}
 * ```
 */
export
type AlarmStatus = AlarmStatus_Item[]; // SetOfType

let _cached_decoder_for_AlarmStatus: $.ASN1Decoder<AlarmStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlarmStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlarmStatus} The decoded data structure.
 */
export
function _decode_AlarmStatus (el: _Element) {
    if (!_cached_decoder_for_AlarmStatus) { _cached_decoder_for_AlarmStatus = $._decodeSetOf<AlarmStatus_Item>(() => _decode_AlarmStatus_Item); }
    return _cached_decoder_for_AlarmStatus(el);
}

let _cached_encoder_for_AlarmStatus: $.ASN1Encoder<AlarmStatus> | null = null;

/**
 * @summary Encodes a(n) AlarmStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlarmStatus, encoded as an ASN.1 Element.
 */
export
function _encode_AlarmStatus (value: AlarmStatus, elGetter: $.ASN1Encoder<AlarmStatus>) {
    if (!_cached_encoder_for_AlarmStatus) { _cached_encoder_for_AlarmStatus = $._encodeSetOf<AlarmStatus_Item>(() => _encode_AlarmStatus_Item, $.BER); }
    return _cached_encoder_for_AlarmStatus(value, elGetter);
}


/* eslint-enable */
