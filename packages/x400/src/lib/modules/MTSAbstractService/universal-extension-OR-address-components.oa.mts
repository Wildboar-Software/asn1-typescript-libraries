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
    UniversalExtensionORAddressComponents,
    _decode_UniversalExtensionORAddressComponents,
    _encode_UniversalExtensionORAddressComponents,
} from '../MTSAbstractService/UniversalExtensionORAddressComponents.ta.mjs';
export {
    UniversalExtensionORAddressComponents,
    _decode_UniversalExtensionORAddressComponents,
    _encode_UniversalExtensionORAddressComponents,
} from '../MTSAbstractService/UniversalExtensionORAddressComponents.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
export { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';

/* START_OF_SYMBOL_DEFINITION universal_extension_OR_address_components */
/**
 * @summary universal_extension_OR_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-extension-OR-address-components EXTENSION-ATTRIBUTE ::= {
 *   UniversalExtensionORAddressComponents
 *   IDENTIFIED BY  31
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalExtensionORAddressComponents>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalExtensionORAddressComponents>}
 */
export const universal_extension_OR_address_components: EXTENSION_ATTRIBUTE<UniversalExtensionORAddressComponents> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalExtensionORAddressComponents,
    },
    encoderFor: {
        '&Type': _encode_UniversalExtensionORAddressComponents,
    },
    '&id': 31 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_extension_OR_address_components */

/* eslint-enable */
