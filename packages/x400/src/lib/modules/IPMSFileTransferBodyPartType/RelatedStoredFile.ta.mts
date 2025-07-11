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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    RelatedStoredFile_Item,
    _decode_RelatedStoredFile_Item,
    _encode_RelatedStoredFile_Item,
} from '../IPMSFileTransferBodyPartType/RelatedStoredFile-Item.ta.mjs';
/**
 * @summary RelatedStoredFile
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedStoredFile  ::=
 *   SET OF
 *     SEQUENCE {file-identifier  FileIdentifier,
 *               relationship
 *                 Relationship DEFAULT explicit-relationship:unspecified
 *     }
 * ```
 */
export type RelatedStoredFile = RelatedStoredFile_Item[]; // SetOfType

let _cached_decoder_for_RelatedStoredFile: $.ASN1Decoder<RelatedStoredFile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelatedStoredFile
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedStoredFile} The decoded data structure.
 */
export function _decode_RelatedStoredFile(el: _Element): RelatedStoredFile {
    if (!_cached_decoder_for_RelatedStoredFile) {
        _cached_decoder_for_RelatedStoredFile = $._decodeSetOf<RelatedStoredFile_Item>(
            () => _decode_RelatedStoredFile_Item
        );
    }
    return _cached_decoder_for_RelatedStoredFile(el);
}

let _cached_encoder_for_RelatedStoredFile: $.ASN1Encoder<RelatedStoredFile> | null = null;

/**
 * @summary Encodes a(n) RelatedStoredFile into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedStoredFile, encoded as an ASN.1 Element.
 */
export function _encode_RelatedStoredFile(
    value: RelatedStoredFile,
    elGetter: $.ASN1Encoder<RelatedStoredFile>
): _Element {
    if (!_cached_encoder_for_RelatedStoredFile) {
        _cached_encoder_for_RelatedStoredFile = $._encodeSetOf<RelatedStoredFile_Item>(
            () => _encode_RelatedStoredFile_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RelatedStoredFile(value, elGetter);
}


/* eslint-enable */
