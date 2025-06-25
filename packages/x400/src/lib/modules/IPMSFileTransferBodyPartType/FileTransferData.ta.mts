/* eslint-disable */
import {
    EXTERNAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary FileTransferData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FileTransferData  ::=  SEQUENCE OF EXTERNAL
 * ```
 */
export type FileTransferData = EXTERNAL[]; // SequenceOfType

let _cached_decoder_for_FileTransferData: $.ASN1Decoder<FileTransferData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileTransferData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FileTransferData} The decoded data structure.
 */
export function _decode_FileTransferData(el: _Element): FileTransferData {
    if (!_cached_decoder_for_FileTransferData) {
        _cached_decoder_for_FileTransferData = $._decodeSequenceOf<EXTERNAL>(
            () => $._decodeExternal
        );
    }
    return _cached_decoder_for_FileTransferData(el);
}

let _cached_encoder_for_FileTransferData: $.ASN1Encoder<FileTransferData> | null = null;

/**
 * @summary Encodes a(n) FileTransferData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileTransferData, encoded as an ASN.1 Element.
 */
export function _encode_FileTransferData(
    value: FileTransferData,
    elGetter: $.ASN1Encoder<FileTransferData>
): _Element {
    if (!_cached_encoder_for_FileTransferData) {
        _cached_encoder_for_FileTransferData = $._encodeSequenceOf<EXTERNAL>(
            () => $._encodeExternal,
            $.BER
        );
    }
    return _cached_encoder_for_FileTransferData(value, elGetter);
}


/* eslint-enable */
