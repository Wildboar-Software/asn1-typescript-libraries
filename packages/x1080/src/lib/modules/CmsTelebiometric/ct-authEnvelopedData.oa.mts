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
    AuthEnvelopedData,
    _decode_AuthEnvelopedData,
    _encode_AuthEnvelopedData,
} from '../CmsTelebiometric/AuthEnvelopedData.ta.mjs';
import { id_ct_authEnvelopedData } from '../CmsTelebiometric/id-ct-authEnvelopedData.va.mjs';
import { CONTENT_TYPE } from '../CmsTelebiometric/CONTENT-TYPE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION ct_authEnvelopedData */
/**
 * @summary ct_authEnvelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-authEnvelopedData CONTENT-TYPE ::= {
 *                 AuthEnvelopedData
 *   IDENTIFIED BY id-ct-authEnvelopedData }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<AuthEnvelopedData>}
 * @implements {CONTENT_TYPE<AuthEnvelopedData>}
 */
export const ct_authEnvelopedData: CONTENT_TYPE<AuthEnvelopedData> = {
    class: 'CONTENT-TYPE',
    decoderFor: {
        '&Type': _decode_AuthEnvelopedData,
    },
    encoderFor: {
        '&Type': _encode_AuthEnvelopedData,
    },
    '&id': id_ct_authEnvelopedData /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ct_authEnvelopedData */

/* eslint-enable */
