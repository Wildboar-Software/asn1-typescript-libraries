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
    ScheduledManagedObjectsList_Item,
    _decode_ScheduledManagedObjectsList_Item,
    _encode_ScheduledManagedObjectsList_Item,
} from '../Schedulerev1-ASN1Module/ScheduledManagedObjectsList-Item.ta.mjs';
export {
    ScheduledManagedObjectsList_Item,
    _decode_ScheduledManagedObjectsList_Item,
    _encode_ScheduledManagedObjectsList_Item,
} from '../Schedulerev1-ASN1Module/ScheduledManagedObjectsList-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ScheduledManagedObjectsList */
/**
 * @summary ScheduledManagedObjectsList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScheduledManagedObjectsList  ::=
 *   SET OF
 *     SEQUENCE {objectInstance  ObjectInstance,
 *               activity        AttributeId OPTIONAL}
 * ```
 */
export type ScheduledManagedObjectsList = ScheduledManagedObjectsList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ScheduledManagedObjectsList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ScheduledManagedObjectsList */
let _cached_decoder_for_ScheduledManagedObjectsList: $.ASN1Decoder<ScheduledManagedObjectsList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ScheduledManagedObjectsList */

/* START_OF_SYMBOL_DEFINITION _decode_ScheduledManagedObjectsList */
/**
 * @summary Decodes an ASN.1 element into a(n) ScheduledManagedObjectsList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScheduledManagedObjectsList} The decoded data structure.
 */
export function _decode_ScheduledManagedObjectsList(el: _Element) {
    if (!_cached_decoder_for_ScheduledManagedObjectsList) {
        _cached_decoder_for_ScheduledManagedObjectsList = $._decodeSetOf<ScheduledManagedObjectsList_Item>(
            () => _decode_ScheduledManagedObjectsList_Item
        );
    }
    return _cached_decoder_for_ScheduledManagedObjectsList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ScheduledManagedObjectsList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ScheduledManagedObjectsList */
let _cached_encoder_for_ScheduledManagedObjectsList: $.ASN1Encoder<ScheduledManagedObjectsList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ScheduledManagedObjectsList */

/* START_OF_SYMBOL_DEFINITION _encode_ScheduledManagedObjectsList */
/**
 * @summary Encodes a(n) ScheduledManagedObjectsList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScheduledManagedObjectsList, encoded as an ASN.1 Element.
 */
export function _encode_ScheduledManagedObjectsList(
    value: ScheduledManagedObjectsList,
    elGetter: $.ASN1Encoder<ScheduledManagedObjectsList>
) {
    if (!_cached_encoder_for_ScheduledManagedObjectsList) {
        _cached_encoder_for_ScheduledManagedObjectsList = $._encodeSetOf<ScheduledManagedObjectsList_Item>(
            () => _encode_ScheduledManagedObjectsList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ScheduledManagedObjectsList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ScheduledManagedObjectsList */

/* eslint-enable */
