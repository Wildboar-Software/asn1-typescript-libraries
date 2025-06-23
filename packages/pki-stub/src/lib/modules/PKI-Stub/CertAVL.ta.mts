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
} from "jsr:@wildboar/asn1@11";
import * as $ from "jsr:@wildboar/asn1@11/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../PKI-Stub/SIGNED.ta.mjs";
import {
    TBSCertAVL,
    _decode_TBSCertAVL,
    _encode_TBSCertAVL,
} from "../PKI-Stub/TBSCertAVL.ta.mjs";

/**
 * @summary CertAVL
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertAVL  ::=  SIGNED {TBSCertAVL}
 * ```
 */
export type CertAVL = SIGNED<TBSCertAVL>; // DefinedType

let _cached_decoder_for_CertAVL: $.ASN1Decoder<CertAVL> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertAVL
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertAVL} The decoded data structure.
 */
export function _decode_CertAVL(el: _Element): CertAVL {
    if (!_cached_decoder_for_CertAVL) {
        _cached_decoder_for_CertAVL =
            _get_decoder_for_SIGNED<TBSCertAVL>(_decode_TBSCertAVL);
    }
    return _cached_decoder_for_CertAVL(el);
}

let _cached_encoder_for_CertAVL: $.ASN1Encoder<CertAVL> | null = null;

/**
 * @summary Encodes a(n) CertAVL into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertAVL, encoded as an ASN.1 Element.
 */
export function _encode_CertAVL(
    value: CertAVL,
    elGetter: $.ASN1Encoder<CertAVL>
) {
    if (!_cached_encoder_for_CertAVL) {
        _cached_encoder_for_CertAVL =
            _get_encoder_for_SIGNED<TBSCertAVL>(_encode_TBSCertAVL);
    }
    return _cached_encoder_for_CertAVL(value, elGetter);
}


/* eslint-enable */
