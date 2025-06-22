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
import * as $ from "@wildboar/asn1/functional";
import {
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from "../PKI-Stub/SIGNED.ta.mjs";
import {
    TBSAttributeCertificate,
    _decode_TBSAttributeCertificate,
    _encode_TBSAttributeCertificate,
} from "../PKI-Stub/TBSAttributeCertificate.ta.mjs";

/**
 * @summary AttributeCertificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificate  ::=  SIGNED{TBSAttributeCertificate}
 * ```
 */
export type AttributeCertificate = SIGNED<TBSAttributeCertificate>; // DefinedType

let _cached_decoder_for_AttributeCertificate: $.ASN1Decoder<AttributeCertificate> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificate} The decoded data structure.
 */
export function _decode_AttributeCertificate(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificate) {
        _cached_decoder_for_AttributeCertificate =
            _get_decoder_for_SIGNED<TBSAttributeCertificate>(
                _decode_TBSAttributeCertificate
            );
    }
    return _cached_decoder_for_AttributeCertificate(el);
}

let _cached_encoder_for_AttributeCertificate: $.ASN1Encoder<AttributeCertificate> | null =
    null;

/**
 * @summary Encodes a(n) AttributeCertificate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificate, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificate(
    value: AttributeCertificate,
    elGetter: $.ASN1Encoder<AttributeCertificate>
) {
    if (!_cached_encoder_for_AttributeCertificate) {
        _cached_encoder_for_AttributeCertificate =
            _get_encoder_for_SIGNED<TBSAttributeCertificate>(
                _encode_TBSAttributeCertificate
            );
    }
    return _cached_encoder_for_AttributeCertificate(value, elGetter);
}


/* eslint-enable */
