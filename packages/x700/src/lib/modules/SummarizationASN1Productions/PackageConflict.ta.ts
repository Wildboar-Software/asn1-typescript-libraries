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
import * as $ from 'asn1-ts/dist/node/functional';
import {
    PackageConflict_Item,
    _decode_PackageConflict_Item,
    _encode_PackageConflict_Item,
} from '../SummarizationASN1Productions/PackageConflict-Item.ta';
export {
    PackageConflict_Item,
    _decode_PackageConflict_Item,
    _encode_PackageConflict_Item,
} from '../SummarizationASN1Productions/PackageConflict-Item.ta';

/* START_OF_SYMBOL_DEFINITION PackageConflict */
/**
 * @summary PackageConflict
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PackageConflict  ::=
 *   SET OF
 *     CHOICE {conflictingPackagesPresent  [0]  Packages,
 *             packagesMissing             [1]  Packages}
 * ```
 */
export type PackageConflict = PackageConflict_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION PackageConflict */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PackageConflict */
let _cached_decoder_for_PackageConflict: $.ASN1Decoder<PackageConflict> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PackageConflict */

/* START_OF_SYMBOL_DEFINITION _decode_PackageConflict */
/**
 * @summary Decodes an ASN.1 element into a(n) PackageConflict
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PackageConflict} The decoded data structure.
 */
export function _decode_PackageConflict(el: _Element) {
    if (!_cached_decoder_for_PackageConflict) {
        _cached_decoder_for_PackageConflict = $._decodeSetOf<PackageConflict_Item>(
            () => _decode_PackageConflict_Item
        );
    }
    return _cached_decoder_for_PackageConflict(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PackageConflict */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PackageConflict */
let _cached_encoder_for_PackageConflict: $.ASN1Encoder<PackageConflict> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PackageConflict */

/* START_OF_SYMBOL_DEFINITION _encode_PackageConflict */
/**
 * @summary Encodes a(n) PackageConflict into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PackageConflict, encoded as an ASN.1 Element.
 */
export function _encode_PackageConflict(
    value: PackageConflict,
    elGetter: $.ASN1Encoder<PackageConflict>
) {
    if (!_cached_encoder_for_PackageConflict) {
        _cached_encoder_for_PackageConflict = $._encodeSetOf<PackageConflict_Item>(
            () => _encode_PackageConflict_Item,
            $.BER
        );
    }
    return _cached_encoder_for_PackageConflict(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PackageConflict */

/* eslint-enable */
