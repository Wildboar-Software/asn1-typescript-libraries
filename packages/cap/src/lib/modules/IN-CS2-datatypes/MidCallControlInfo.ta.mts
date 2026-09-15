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
import { MidCallControlInfo_Item, _decode_MidCallControlInfo_Item, _encode_MidCallControlInfo_Item } from "../IN-CS2-datatypes/MidCallControlInfo-Item.ta.mjs";
// export { MidCallControlInfo_Item, _decode_MidCallControlInfo_Item, _encode_MidCallControlInfo_Item } from "../IN-CS2-datatypes/MidCallControlInfo-Item.ta.mjs";


/**
 * @summary MidCallControlInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MidCallControlInfo{PARAMETERS-BOUND:bound}  ::= 
 *   SEQUENCE
 *     SIZE (bound.&minMidCallControlInfoNum..
 *             bound.&maxMidCallControlInfoNum) OF
 *     SEQUENCE {midCallInfoType    [0]  MidCallInfoType{bound},
 *               midCallReportType
 *                 [1]  ENUMERATED {inMonitoringState(0), inAnyState(1)}
 *                   DEFAULT inMonitoringState}
 * ```
 */
export
type MidCallControlInfo = MidCallControlInfo_Item[]; // SequenceOfType

let _cached_decoder_for_MidCallControlInfo: $.ASN1Decoder<MidCallControlInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MidCallControlInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MidCallControlInfo (el: _Element): MidCallControlInfo {
    if (!_cached_decoder_for_MidCallControlInfo) { _cached_decoder_for_MidCallControlInfo = $._decodeSequenceOf<MidCallControlInfo_Item>(() => _decode_MidCallControlInfo_Item); }
    return _cached_decoder_for_MidCallControlInfo(el);
}

let _cached_encoder_for_MidCallControlInfo: $.ASN1Encoder<MidCallControlInfo> | null = null;

/**
 * @summary Encodes a(n) MidCallControlInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MidCallControlInfo, encoded as an ASN.1 Element.
 */
export
function _encode_MidCallControlInfo (value: MidCallControlInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MidCallControlInfo) { _cached_encoder_for_MidCallControlInfo = $._encodeSequenceOf<MidCallControlInfo_Item>(() => _encode_MidCallControlInfo_Item, $.BER); }
    return _cached_encoder_for_MidCallControlInfo(value, elGetter);
}


/* eslint-enable */
