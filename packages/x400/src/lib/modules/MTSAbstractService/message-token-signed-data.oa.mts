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
    MessageTokenSignedData,
    _decode_MessageTokenSignedData,
    _encode_MessageTokenSignedData,
} from '../MTSAbstractService/MessageTokenSignedData.ta.mjs';
import { TOKEN_DATA } from '../MTSAbstractService/TOKEN-DATA.oca.mjs';
/* START_OF_SYMBOL_DEFINITION message_token_signed_data */
/**
 * @summary message_token_signed_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * message-token-signed-data TOKEN-DATA ::= {
 *   MessageTokenSignedData
 *   IDENTIFIED BY  2
 * }
 * ```
 *
 * @constant
 * @type {TOKEN_DATA<MessageTokenSignedData>}
 * @implements {TOKEN_DATA<MessageTokenSignedData>}
 */
export const message_token_signed_data: TOKEN_DATA<MessageTokenSignedData> = {
    class: 'TOKEN-DATA',
    decoderFor: {
        '&Type': _decode_MessageTokenSignedData,
    },
    encoderFor: {
        '&Type': _encode_MessageTokenSignedData,
    },
    '&id': 2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION message_token_signed_data */

/* eslint-enable */
