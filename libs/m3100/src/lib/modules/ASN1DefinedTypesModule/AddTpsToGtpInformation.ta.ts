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
    AddTpsToGtpInformation_Item,
    _decode_AddTpsToGtpInformation_Item,
    _encode_AddTpsToGtpInformation_Item,
} from '../ASN1DefinedTypesModule/AddTpsToGtpInformation-Item.ta';
export {
    AddTpsToGtpInformation_Item,
    _decode_AddTpsToGtpInformation_Item,
    _encode_AddTpsToGtpInformation_Item,
} from '../ASN1DefinedTypesModule/AddTpsToGtpInformation-Item.ta';

/* START_OF_SYMBOL_DEFINITION AddTpsToGtpInformation */
/**
 * @summary AddTpsToGtpInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToGtpInformation  ::=
 *   SEQUENCE OF
 *     SEQUENCE {tpsAdded  SEQUENCE OF TerminationPointInformation,
 *               gtp       ObjectInstance OPTIONAL}
 * ```
 */
export type AddTpsToGtpInformation = AddTpsToGtpInformation_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AddTpsToGtpInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddTpsToGtpInformation */
let _cached_decoder_for_AddTpsToGtpInformation: $.ASN1Decoder<AddTpsToGtpInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddTpsToGtpInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AddTpsToGtpInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToGtpInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToGtpInformation} The decoded data structure.
 */
export function _decode_AddTpsToGtpInformation(el: _Element) {
    if (!_cached_decoder_for_AddTpsToGtpInformation) {
        _cached_decoder_for_AddTpsToGtpInformation = $._decodeSequenceOf<AddTpsToGtpInformation_Item>(
            () => _decode_AddTpsToGtpInformation_Item
        );
    }
    return _cached_decoder_for_AddTpsToGtpInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddTpsToGtpInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddTpsToGtpInformation */
let _cached_encoder_for_AddTpsToGtpInformation: $.ASN1Encoder<AddTpsToGtpInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddTpsToGtpInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AddTpsToGtpInformation */
/**
 * @summary Encodes a(n) AddTpsToGtpInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToGtpInformation, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToGtpInformation(
    value: AddTpsToGtpInformation,
    elGetter: $.ASN1Encoder<AddTpsToGtpInformation>
) {
    if (!_cached_encoder_for_AddTpsToGtpInformation) {
        _cached_encoder_for_AddTpsToGtpInformation = $._encodeSequenceOf<AddTpsToGtpInformation_Item>(
            () => _encode_AddTpsToGtpInformation_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AddTpsToGtpInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AddTpsToGtpInformation */

/* eslint-enable */
