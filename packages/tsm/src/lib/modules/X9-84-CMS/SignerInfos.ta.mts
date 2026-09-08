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
import { SignerInfo, _decode_SignerInfo, _encode_SignerInfo } from "../X9-84-CMS/SignerInfo.ta.mjs";



/**
 * @summary SignerInfos
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignerInfos  ::=  SET SIZE(1) OF SignerInfo
 * ```
 */
export
type SignerInfos = SignerInfo[]; // SetOfType

let _cached_decoder_for_SignerInfos: $.ASN1Decoder<SignerInfos> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignerInfos
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignerInfos (el: _Element): SignerInfos {
    if (!_cached_decoder_for_SignerInfos) { _cached_decoder_for_SignerInfos = $._decodeSetOf<SignerInfo>(() => _decode_SignerInfo); }
    const value = _cached_decoder_for_SignerInfos(el);
    if (value.length < 1 || value.length > 1 ) {
        throw new ASN1SizeError("SignerInfos violates SIZE constraint");
    }
    return value;
}

let _cached_encoder_for_SignerInfos: $.ASN1Encoder<SignerInfos> | null = null;

/**
 * @summary Encodes a(n) SignerInfos into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerInfos, encoded as an ASN.1 Element.
 */
export
function _encode_SignerInfos (value: SignerInfos, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignerInfos) { _cached_encoder_for_SignerInfos = $._encodeSetOf<SignerInfo>(() => _encode_SignerInfo, $.BER); }
    return _cached_encoder_for_SignerInfos(value, elGetter);
}


/* eslint-enable */
