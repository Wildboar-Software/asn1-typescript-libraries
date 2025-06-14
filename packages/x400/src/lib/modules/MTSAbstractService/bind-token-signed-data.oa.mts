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
    BindTokenSignedData,
    _decode_BindTokenSignedData,
    _encode_BindTokenSignedData,
} from '../MTSAbstractService/BindTokenSignedData.ta.mjs';
import { TOKEN_DATA } from '../MTSAbstractService/TOKEN-DATA.oca.mjs';
/* START_OF_SYMBOL_DEFINITION bind_token_signed_data */
/**
 * @summary bind_token_signed_data
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * bind-token-signed-data TOKEN-DATA ::= {BindTokenSignedData
 *                                        IDENTIFIED BY  1
 * }
 * ```
 *
 * @constant
 * @type {TOKEN_DATA<BindTokenSignedData>}
 * @implements {TOKEN_DATA<BindTokenSignedData>}
 */
export const bind_token_signed_data: TOKEN_DATA<BindTokenSignedData> = {
    class: 'TOKEN-DATA',
    decoderFor: {
        '&Type': _decode_BindTokenSignedData,
    },
    encoderFor: {
        '&Type': _encode_BindTokenSignedData,
    },
    '&id': 1 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION bind_token_signed_data */

/* eslint-enable */
