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
    MessageAdministrationPDUs88,
    _decode_MessageAdministrationPDUs88,
    _encode_MessageAdministrationPDUs88,
} from '../MTSAccessProtocol/MessageAdministrationPDUs88.ta.mjs';
import { id_as_mase_88 } from '../MHSProtocolObjectIdentifiers/id-as-mase-88.va.mjs';
/**
 * @summary message_administration_abstract_syntax_88
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-administration-abstract-syntax-88 ABSTRACT-SYNTAX ::= {
 *   MessageAdministrationPDUs88
 *   IDENTIFIED BY  id-as-mase-88
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MessageAdministrationPDUs88>}
 * @implements {ABSTRACT_SYNTAX<MessageAdministrationPDUs88>}
 */
export const message_administration_abstract_syntax_88: ABSTRACT_SYNTAX<MessageAdministrationPDUs88> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MessageAdministrationPDUs88,
    },
    encoderFor: {
        '&Type': _encode_MessageAdministrationPDUs88,
    },
    '&id': id_as_mase_88 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};

/* eslint-enable */
