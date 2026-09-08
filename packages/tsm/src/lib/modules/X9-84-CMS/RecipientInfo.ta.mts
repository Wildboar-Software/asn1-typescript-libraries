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
import { KeyTransRecipientInfo, _decode_KeyTransRecipientInfo, _encode_KeyTransRecipientInfo } from "../X9-84-CMS/KeyTransRecipientInfo.ta.mjs";



/**
 * @summary RecipientInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecipientInfo  ::=  CHOICE {
 *    ktri  KeyTransRecipientInfo
 * }
 * ```
 */
export
type RecipientInfo =
    { ktri: KeyTransRecipientInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RecipientInfo: $.ASN1Decoder<RecipientInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecipientInfo (el: _Element): RecipientInfo {
    if (!_cached_decoder_for_RecipientInfo) { _cached_decoder_for_RecipientInfo = $._decode_inextensible_choice<RecipientInfo>({
    "UNIVERSAL 16": [ "ktri", _decode_KeyTransRecipientInfo ]
}); }
    return _cached_decoder_for_RecipientInfo(el);
}

let _cached_encoder_for_RecipientInfo: $.ASN1Encoder<RecipientInfo> | null = null;

/**
 * @summary Encodes a(n) RecipientInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RecipientInfo (value: RecipientInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecipientInfo) { _cached_encoder_for_RecipientInfo = $._encode_choice<RecipientInfo>({
    "ktri": _encode_KeyTransRecipientInfo,
}, $.BER); }
    return _cached_encoder_for_RecipientInfo(value, elGetter);
}


/* eslint-enable */
