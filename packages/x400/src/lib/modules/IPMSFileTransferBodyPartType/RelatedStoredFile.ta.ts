/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    RelatedStoredFile_Item,
    _decode_RelatedStoredFile_Item,
    _encode_RelatedStoredFile_Item,
} from '../IPMSFileTransferBodyPartType/RelatedStoredFile-Item.ta.js';
export {
    RelatedStoredFile_Item,
    _decode_RelatedStoredFile_Item,
    _encode_RelatedStoredFile_Item,
} from '../IPMSFileTransferBodyPartType/RelatedStoredFile-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION RelatedStoredFile */
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
/* END_OF_SYMBOL_DEFINITION RelatedStoredFile */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedStoredFile */
let _cached_decoder_for_RelatedStoredFile: $.ASN1Decoder<RelatedStoredFile> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedStoredFile */

/* START_OF_SYMBOL_DEFINITION _decode_RelatedStoredFile */
/**
 * @summary Decodes an ASN.1 element into a(n) RelatedStoredFile
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedStoredFile} The decoded data structure.
 */
export function _decode_RelatedStoredFile(el: _Element) {
    if (!_cached_decoder_for_RelatedStoredFile) {
        _cached_decoder_for_RelatedStoredFile = $._decodeSetOf<RelatedStoredFile_Item>(
            () => _decode_RelatedStoredFile_Item
        );
    }
    return _cached_decoder_for_RelatedStoredFile(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelatedStoredFile */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedStoredFile */
let _cached_encoder_for_RelatedStoredFile: $.ASN1Encoder<RelatedStoredFile> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedStoredFile */

/* START_OF_SYMBOL_DEFINITION _encode_RelatedStoredFile */
/**
 * @summary Encodes a(n) RelatedStoredFile into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedStoredFile, encoded as an ASN.1 Element.
 */
export function _encode_RelatedStoredFile(
    value: RelatedStoredFile,
    elGetter: $.ASN1Encoder<RelatedStoredFile>
) {
    if (!_cached_encoder_for_RelatedStoredFile) {
        _cached_encoder_for_RelatedStoredFile = $._encodeSetOf<RelatedStoredFile_Item>(
            () => _encode_RelatedStoredFile_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RelatedStoredFile(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelatedStoredFile */

/* eslint-enable */
