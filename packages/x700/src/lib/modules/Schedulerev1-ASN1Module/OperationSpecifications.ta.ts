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
    OperationSpecifications_Item,
    _decode_OperationSpecifications_Item,
    _encode_OperationSpecifications_Item,
} from '../Schedulerev1-ASN1Module/OperationSpecifications-Item.ta';
export {
    OperationSpecifications_Item,
    _decode_OperationSpecifications_Item,
    _encode_OperationSpecifications_Item,
} from '../Schedulerev1-ASN1Module/OperationSpecifications-Item.ta';

/* START_OF_SYMBOL_DEFINITION OperationSpecifications */
/**
 * @summary OperationSpecifications
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationSpecifications  ::=
 *   SET OF
 *     SEQUENCE {scheduledObjects     SET OF ObjectInstance,
 *               scheduledOperations
 *                 CHOICE {set     [0] IMPLICIT ModificationList,
 *                         action  [1] IMPLICIT ActionInfo,
 *                         get     [2] IMPLICIT GetArgument}}
 * ```
 */
export type OperationSpecifications = OperationSpecifications_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION OperationSpecifications */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationSpecifications */
let _cached_decoder_for_OperationSpecifications: $.ASN1Decoder<OperationSpecifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationSpecifications */

/* START_OF_SYMBOL_DEFINITION _decode_OperationSpecifications */
/**
 * @summary Decodes an ASN.1 element into a(n) OperationSpecifications
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationSpecifications} The decoded data structure.
 */
export function _decode_OperationSpecifications(el: _Element) {
    if (!_cached_decoder_for_OperationSpecifications) {
        _cached_decoder_for_OperationSpecifications = $._decodeSetOf<OperationSpecifications_Item>(
            () => _decode_OperationSpecifications_Item
        );
    }
    return _cached_decoder_for_OperationSpecifications(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OperationSpecifications */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationSpecifications */
let _cached_encoder_for_OperationSpecifications: $.ASN1Encoder<OperationSpecifications> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationSpecifications */

/* START_OF_SYMBOL_DEFINITION _encode_OperationSpecifications */
/**
 * @summary Encodes a(n) OperationSpecifications into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationSpecifications, encoded as an ASN.1 Element.
 */
export function _encode_OperationSpecifications(
    value: OperationSpecifications,
    elGetter: $.ASN1Encoder<OperationSpecifications>
) {
    if (!_cached_encoder_for_OperationSpecifications) {
        _cached_encoder_for_OperationSpecifications = $._encodeSetOf<OperationSpecifications_Item>(
            () => _encode_OperationSpecifications_Item,
            $.BER
        );
    }
    return _cached_encoder_for_OperationSpecifications(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OperationSpecifications */

/* eslint-enable */
