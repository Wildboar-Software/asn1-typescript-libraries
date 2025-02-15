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
    BodyPartSignatureVerification_Item,
    _decode_BodyPartSignatureVerification_Item,
    _encode_BodyPartSignatureVerification_Item,
} from '../IPMSMessageStoreAttributes/BodyPartSignatureVerification-Item.ta';
export {
    BodyPartSignatureVerification_Item,
    _decode_BodyPartSignatureVerification_Item,
    _encode_BodyPartSignatureVerification_Item,
} from '../IPMSMessageStoreAttributes/BodyPartSignatureVerification-Item.ta';

/* START_OF_SYMBOL_DEFINITION BodyPartSignatureVerification */
/**
 * @summary BodyPartSignatureVerification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSignatureVerification  ::=
 *   SET OF
 *     SET {body-part-sequence-number  [0]  BodyPartNumber,
 *          body-part-signature        [1]  SignatureStatus}
 * ```
 */
export type BodyPartSignatureVerification = BodyPartSignatureVerification_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION BodyPartSignatureVerification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSignatureVerification */
let _cached_decoder_for_BodyPartSignatureVerification: $.ASN1Decoder<BodyPartSignatureVerification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSignatureVerification */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartSignatureVerification */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSignatureVerification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSignatureVerification} The decoded data structure.
 */
export function _decode_BodyPartSignatureVerification(el: _Element) {
    if (!_cached_decoder_for_BodyPartSignatureVerification) {
        _cached_decoder_for_BodyPartSignatureVerification = $._decodeSetOf<BodyPartSignatureVerification_Item>(
            () => _decode_BodyPartSignatureVerification_Item
        );
    }
    return _cached_decoder_for_BodyPartSignatureVerification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartSignatureVerification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSignatureVerification */
let _cached_encoder_for_BodyPartSignatureVerification: $.ASN1Encoder<BodyPartSignatureVerification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSignatureVerification */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartSignatureVerification */
/**
 * @summary Encodes a(n) BodyPartSignatureVerification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSignatureVerification, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSignatureVerification(
    value: BodyPartSignatureVerification,
    elGetter: $.ASN1Encoder<BodyPartSignatureVerification>
) {
    if (!_cached_encoder_for_BodyPartSignatureVerification) {
        _cached_encoder_for_BodyPartSignatureVerification = $._encodeSetOf<BodyPartSignatureVerification_Item>(
            () => _encode_BodyPartSignatureVerification_Item,
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartSignatureVerification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartSignatureVerification */

/* eslint-enable */
