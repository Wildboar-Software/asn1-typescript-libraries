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
    BodyPartSignatures_Item,
    _decode_BodyPartSignatures_Item,
    _encode_BodyPartSignatures_Item,
} from '../IPMSHeadingExtensions/BodyPartSignatures-Item.ta';
export {
    BodyPartSignatures_Item,
    _decode_BodyPartSignatures_Item,
    _encode_BodyPartSignatures_Item,
} from '../IPMSHeadingExtensions/BodyPartSignatures-Item.ta';

/* START_OF_SYMBOL_DEFINITION BodyPartSignatures */
/**
 * @summary BodyPartSignatures
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSignatures  ::=
 *   SET OF
 *     SET {body-part-number                 BodyPartNumber,
 *          body-part-signature              BodyPartSignature,
 *          originator-certificate-selector  [1]  CertificateAssertion OPTIONAL,
 *          originator-certificates          [0]  ExtendedCertificates OPTIONAL,
 *          ...}
 * ```
 */
export type BodyPartSignatures = BodyPartSignatures_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION BodyPartSignatures */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSignatures */
let _cached_decoder_for_BodyPartSignatures: $.ASN1Decoder<BodyPartSignatures> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSignatures */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartSignatures */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSignatures
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSignatures} The decoded data structure.
 */
export function _decode_BodyPartSignatures(el: _Element) {
    if (!_cached_decoder_for_BodyPartSignatures) {
        _cached_decoder_for_BodyPartSignatures = $._decodeSetOf<BodyPartSignatures_Item>(
            () => _decode_BodyPartSignatures_Item
        );
    }
    return _cached_decoder_for_BodyPartSignatures(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartSignatures */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSignatures */
let _cached_encoder_for_BodyPartSignatures: $.ASN1Encoder<BodyPartSignatures> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSignatures */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartSignatures */
/**
 * @summary Encodes a(n) BodyPartSignatures into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSignatures, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSignatures(
    value: BodyPartSignatures,
    elGetter: $.ASN1Encoder<BodyPartSignatures>
) {
    if (!_cached_encoder_for_BodyPartSignatures) {
        _cached_encoder_for_BodyPartSignatures = $._encodeSetOf<BodyPartSignatures_Item>(
            () => _encode_BodyPartSignatures_Item,
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartSignatures(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartSignatures */

/* eslint-enable */
