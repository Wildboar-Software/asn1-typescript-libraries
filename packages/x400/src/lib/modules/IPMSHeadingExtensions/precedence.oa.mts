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
    Precedence,
    _decode_Precedence,
    _encode_Precedence,
} from '../IPMSHeadingExtensions/Precedence.ta.mjs';
import { id_rex_precedence } from '../IPMSObjectIdentifiers/id-rex-precedence.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION precedence */
/**
 * @summary precedence
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * precedence IPMS-EXTENSION ::= {
 *   VALUE          Precedence,
 *   IDENTIFIED BY  id-rex-precedence
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<Precedence>}
 * @implements {IPMS_EXTENSION<Precedence>}
 */
export const precedence: IPMS_EXTENSION<Precedence> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': _decode_Precedence,
    },
    encoderFor: {
        '&Type': _encode_Precedence,
    },
    '&id': id_rex_precedence /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION precedence */

/* eslint-enable */
