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
import { ControlStatus_Item, _decode_ControlStatus_Item, _encode_ControlStatus_Item } from "../Attribute-ASN1Module/ControlStatus-Item.ta.mjs";
/**
 * @summary ControlStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlStatus  ::= 
 *   SET OF
 *     INTEGER {subjectToTest(0), partOfServicesLocked(1), reservedForTest(2),
 *              suspended(3)}
 * ```
 */
export
type ControlStatus = ControlStatus_Item[]; // SetOfType

let _cached_decoder_for_ControlStatus: $.ASN1Decoder<ControlStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlStatus} The decoded data structure.
 */
export
function _decode_ControlStatus (el: _Element): ControlStatus {
    if (!_cached_decoder_for_ControlStatus) { _cached_decoder_for_ControlStatus = $._decodeSetOf<ControlStatus_Item>(() => _decode_ControlStatus_Item); }
    return _cached_decoder_for_ControlStatus(el);
}

let _cached_encoder_for_ControlStatus: $.ASN1Encoder<ControlStatus> | null = null;

/**
 * @summary Encodes a(n) ControlStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ControlStatus (value: ControlStatus, elGetter: $.ASN1Encoder<ControlStatus>): _Element {
    if (!_cached_encoder_for_ControlStatus) { _cached_encoder_for_ControlStatus = $._encodeSetOf<ControlStatus_Item>(() => _encode_ControlStatus_Item, $.BER); }
    return _cached_encoder_for_ControlStatus(value, elGetter);
}


/* eslint-enable */
