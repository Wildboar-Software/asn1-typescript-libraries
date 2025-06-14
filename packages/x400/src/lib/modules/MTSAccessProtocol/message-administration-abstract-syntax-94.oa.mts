/* eslint-disable */
import {
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
import {
    MessageAdministrationPDUs,
    _decode_MessageAdministrationPDUs,
    _encode_MessageAdministrationPDUs,
} from '../MTSAccessProtocol/MessageAdministrationPDUs.ta.mjs';
import { id_as_mase_94 } from '../MHSProtocolObjectIdentifiers/id-as-mase-94.va.mjs';
/* START_OF_SYMBOL_DEFINITION message_administration_abstract_syntax_94 */
/**
 * @summary message_administration_abstract_syntax_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-administration-abstract-syntax-94 ABSTRACT-SYNTAX ::= {
 *   MessageAdministrationPDUs
 *   IDENTIFIED BY  id-as-mase-94
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MessageAdministrationPDUs>}
 * @implements {ABSTRACT_SYNTAX<MessageAdministrationPDUs>}
 */
export const message_administration_abstract_syntax_94: ABSTRACT_SYNTAX<MessageAdministrationPDUs> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MessageAdministrationPDUs,
    },
    encoderFor: {
        '&Type': _encode_MessageAdministrationPDUs,
    },
    '&id': id_as_mase_94 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};
/* END_OF_SYMBOL_DEFINITION message_administration_abstract_syntax_94 */

/* eslint-enable */
