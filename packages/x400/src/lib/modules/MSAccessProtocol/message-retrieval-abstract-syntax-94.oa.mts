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
} from '@wildboar/asn1';
import {
    MessageRetrievalPDUs,
    _decode_MessageRetrievalPDUs,
    _encode_MessageRetrievalPDUs,
} from '../MSAccessProtocol/MessageRetrievalPDUs.ta.mjs';
import { id_as_mrse_94 } from '../MHSProtocolObjectIdentifiers/id-as-mrse-94.va.mjs';
/**
 * @summary message_retrieval_abstract_syntax_94
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-retrieval-abstract-syntax-94 ABSTRACT-SYNTAX ::= {
 *   MessageRetrievalPDUs
 *   IDENTIFIED BY  id-as-mrse-94
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MessageRetrievalPDUs>}
 * @implements {ABSTRACT_SYNTAX<MessageRetrievalPDUs>}
 */
export const message_retrieval_abstract_syntax_94: ABSTRACT_SYNTAX<MessageRetrievalPDUs> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MessageRetrievalPDUs,
    },
    encoderFor: {
        '&Type': _encode_MessageRetrievalPDUs,
    },
    '&id': id_as_mrse_94 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};

/* eslint-enable */
