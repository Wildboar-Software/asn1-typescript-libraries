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
    UniversalUnformattedPostalAddress,
    _decode_UniversalUnformattedPostalAddress,
    _encode_UniversalUnformattedPostalAddress,
} from '../MTSAbstractService/UniversalUnformattedPostalAddress.ta';
export {
    UniversalUnformattedPostalAddress,
    _decode_UniversalUnformattedPostalAddress,
    _encode_UniversalUnformattedPostalAddress,
} from '../MTSAbstractService/UniversalUnformattedPostalAddress.ta';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca';
export { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca';

/* START_OF_SYMBOL_DEFINITION universal_unformatted_postal_address */
/**
 * @summary universal_unformatted_postal_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-unformatted-postal-address EXTENSION-ATTRIBUTE ::= {
 *   UniversalUnformattedPostalAddress
 *   IDENTIFIED BY  35
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalUnformattedPostalAddress>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalUnformattedPostalAddress>}
 */
export const universal_unformatted_postal_address: EXTENSION_ATTRIBUTE<UniversalUnformattedPostalAddress> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalUnformattedPostalAddress,
    },
    encoderFor: {
        '&Type': _encode_UniversalUnformattedPostalAddress,
    },
    '&id': 35 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_unformatted_postal_address */

/* eslint-enable */
