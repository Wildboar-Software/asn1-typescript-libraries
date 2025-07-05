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
} from '@wildboar/asn1';
import { ms_bind } from '../MSAbstractService/ms-bind.oa.mjs';
import { ms_unbind } from '../MSAbstractService/ms-unbind.oa.mjs';
import { id_cp_ms_connection } from '../MSObjectIdentifiers/id-cp-ms-connection.va.mjs';
import { type CONNECTION_PACKAGE } from '@wildboar/rose';
/**
 * @summary ms_connect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ms-connect CONNECTION-PACKAGE ::= {
 *   BIND    ms-bind
 *   UNBIND  ms-unbind
 *   ID      id-cp-ms-connection
 * }
 * ```
 *
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export const ms_connect: CONNECTION_PACKAGE = {
    class: 'CONNECTION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&bind': ms_bind /* OBJECT_FIELD_SETTING */,
    '&unbind': ms_unbind /* OBJECT_FIELD_SETTING */,
    '&id': id_cp_ms_connection /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&responderCanUnbind': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&unbindCanFail': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
