/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import {
    UniversalUniquePostalName,
    _decode_UniversalUniquePostalName,
    _encode_UniversalUniquePostalName,
} from '../MTSAbstractService/UniversalUniquePostalName.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION universal_unique_postal_name */
/**
 * @summary universal_unique_postal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-unique-postal-name EXTENSION-ATTRIBUTE ::= {
 *   UniversalUniquePostalName
 *   IDENTIFIED BY  39
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalUniquePostalName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalUniquePostalName>}
 */
export const universal_unique_postal_name: EXTENSION_ATTRIBUTE<UniversalUniquePostalName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalUniquePostalName,
    },
    encoderFor: {
        '&Type': _encode_UniversalUniquePostalName,
    },
    '&id': 39 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION universal_unique_postal_name */

/* eslint-enable */
