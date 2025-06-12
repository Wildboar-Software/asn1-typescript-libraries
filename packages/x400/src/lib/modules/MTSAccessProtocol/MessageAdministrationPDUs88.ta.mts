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
    ROS_SingleAS,
    _decode_ROS_SingleAS,
    _encode_ROS_SingleAS,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Useful-Definitions/ROS-SingleAS.ta.mjs';
export {
    ROS_SingleAS,
    _decode_ROS_SingleAS,
    _encode_ROS_SingleAS,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Useful-Definitions/ROS-SingleAS.ta.mjs';
import { administration_88 } from '../MTSAbstractService88/administration-88.oa.mjs';
export { administration_88 } from '../MTSAbstractService88/administration-88.oa.mjs';

/* START_OF_SYMBOL_DEFINITION MessageAdministrationPDUs88 */
/**
 * @summary MessageAdministrationPDUs88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageAdministrationPDUs88  ::=  ROS-SingleAS{{MTSInvokeIds}, administration-88}
 * ```
 */
export type MessageAdministrationPDUs88 = ROS_SingleAS; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageAdministrationPDUs88 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAdministrationPDUs88 */
let _cached_decoder_for_MessageAdministrationPDUs88: $.ASN1Decoder<MessageAdministrationPDUs88> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageAdministrationPDUs88 */

/* START_OF_SYMBOL_DEFINITION _decode_MessageAdministrationPDUs88 */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageAdministrationPDUs88
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageAdministrationPDUs88} The decoded data structure.
 */
export function _decode_MessageAdministrationPDUs88(el: _Element) {
    if (!_cached_decoder_for_MessageAdministrationPDUs88) {
        _cached_decoder_for_MessageAdministrationPDUs88 = _decode_ROS_SingleAS;
    }
    return _cached_decoder_for_MessageAdministrationPDUs88(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageAdministrationPDUs88 */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAdministrationPDUs88 */
let _cached_encoder_for_MessageAdministrationPDUs88: $.ASN1Encoder<MessageAdministrationPDUs88> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageAdministrationPDUs88 */

/* START_OF_SYMBOL_DEFINITION _encode_MessageAdministrationPDUs88 */
/**
 * @summary Encodes a(n) MessageAdministrationPDUs88 into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageAdministrationPDUs88, encoded as an ASN.1 Element.
 */
export function _encode_MessageAdministrationPDUs88(
    value: MessageAdministrationPDUs88,
    elGetter: $.ASN1Encoder<MessageAdministrationPDUs88>
) {
    if (!_cached_encoder_for_MessageAdministrationPDUs88) {
        _cached_encoder_for_MessageAdministrationPDUs88 = _encode_ROS_SingleAS;
    }
    return _cached_encoder_for_MessageAdministrationPDUs88(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageAdministrationPDUs88 */

/* eslint-enable */
