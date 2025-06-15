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
    MTS_APDU,
    _decode_MTS_APDU,
    _encode_MTS_APDU,
} from '../MTSTransferProtocol/MTS-APDU.ta.mjs';
import { id_as_mtse } from '../MHSProtocolObjectIdentifiers/id-as-mtse.va.mjs';
/**
 * @summary message_transfer_abstract_syntax
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-transfer-abstract-syntax ABSTRACT-SYNTAX ::= {
 *   MTS-APDU IDENTIFIED BY  id-as-mtse
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_SYNTAX<MTS_APDU>}
 * @implements {ABSTRACT_SYNTAX<MTS_APDU>}
 */
export const message_transfer_abstract_syntax: ABSTRACT_SYNTAX<MTS_APDU> = {
    class: 'ABSTRACT-SYNTAX',
    decoderFor: {
        '&Type': _decode_MTS_APDU,
    },
    encoderFor: {
        '&Type': _encode_MTS_APDU,
    },
    '&id': id_as_mtse /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&property': undefined,
};

/* eslint-enable */
