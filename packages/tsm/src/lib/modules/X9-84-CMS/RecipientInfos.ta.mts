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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RecipientInfo, _decode_RecipientInfo, _encode_RecipientInfo } from "../X9-84-CMS/RecipientInfo.ta.mjs";



/**
 * @summary RecipientInfos
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecipientInfos  ::=  SET SIZE(1) OF RecipientInfo
 * ```
 */
export
type RecipientInfos = RecipientInfo[]; // SetOfType

let _cached_decoder_for_RecipientInfos: $.ASN1Decoder<RecipientInfos> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecipientInfos
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecipientInfos (el: _Element): RecipientInfos {
    if (!_cached_decoder_for_RecipientInfos) { _cached_decoder_for_RecipientInfos = $._decodeSetOf<RecipientInfo>(() => _decode_RecipientInfo); }
    const value = _cached_decoder_for_RecipientInfos(el);
    if (value.length < 1 || value.length > 1 ) {
        throw new ASN1SizeError("RecipientInfos violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_RecipientInfos: $.ASN1Encoder<RecipientInfos> | null = null;

/**
 * @summary Encodes a(n) RecipientInfos into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientInfos, encoded as an ASN.1 Element.
 */
export
function _encode_RecipientInfos (value: RecipientInfos, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecipientInfos) { _cached_encoder_for_RecipientInfos = $._encodeSetOf<RecipientInfo>(() => _encode_RecipientInfo, $.BER); }
    return _cached_encoder_for_RecipientInfos(value, elGetter);
}


/* eslint-enable */
