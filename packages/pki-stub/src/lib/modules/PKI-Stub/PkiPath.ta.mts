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
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "../PKI-Stub/Certificate.ta.mjs";

/**
 * @summary PkiPath
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PkiPath  ::=  SEQUENCE SIZE (1..MAX) OF Certificate
 * ```
 */
export type PkiPath = Certificate[]; // SequenceOfType

let _cached_decoder_for_PkiPath: $.ASN1Decoder<PkiPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PkiPath
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PkiPath} The decoded data structure.
 */
export function _decode_PkiPath(el: _Element): PkiPath {
    if (!_cached_decoder_for_PkiPath) {
        _cached_decoder_for_PkiPath = $._decodeSequenceOf<Certificate>(
            () => _decode_Certificate
        );
    }
    return _cached_decoder_for_PkiPath(el);
}

let _cached_encoder_for_PkiPath: $.ASN1Encoder<PkiPath> | null = null;

/**
 * @summary Encodes a(n) PkiPath into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PkiPath, encoded as an ASN.1 Element.
 */
export function _encode_PkiPath(value: PkiPath, elGetter: $.ASN1Encoder<PkiPath>): _Element) {
    if (!_cached_encoder_for_PkiPath) {
        _cached_encoder_for_PkiPath = $._encodeSequenceOf<Certificate>(
            () => _encode_Certificate,
            $.BER
        );
    }
    return _cached_encoder_for_PkiPath(value, elGetter);
}


/* eslint-enable */
