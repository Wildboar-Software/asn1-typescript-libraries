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
import { VarBind, _decode_VarBind, _encode_VarBind } from "../SNMPv2-PDU/VarBind.ta.mjs";
/**
 * @summary VarBindList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VarBindList  ::=  SEQUENCE (SIZE (0..max-bindings)) OF VarBind
 * ```
 */
export
type VarBindList = VarBind[]; // SequenceOfType

let _cached_decoder_for_VarBindList: $.ASN1Decoder<VarBindList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VarBindList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VarBindList} The decoded data structure.
 */
export
function _decode_VarBindList (el: _Element): VarBindList {
    if (!_cached_decoder_for_VarBindList) { _cached_decoder_for_VarBindList = $._decodeSequenceOf<VarBind>(() => _decode_VarBind); }
    return _cached_decoder_for_VarBindList(el);
}

let _cached_encoder_for_VarBindList: $.ASN1Encoder<VarBindList> | null = null;

/**
 * @summary Encodes a(n) VarBindList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VarBindList, encoded as an ASN.1 Element.
 */
export
function _encode_VarBindList (value: VarBindList, elGetter: $.ASN1Encoder<VarBindList>): _Element {
    if (!_cached_encoder_for_VarBindList) { _cached_encoder_for_VarBindList = $._encodeSequenceOf<VarBind>(() => _encode_VarBind, $.BER); }
    return _cached_encoder_for_VarBindList(value, elGetter);
}


/* eslint-enable */
