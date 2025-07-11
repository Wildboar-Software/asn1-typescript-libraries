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
import { mts_bind } from '../MTSAbstractService/mts-bind.oa.mjs';
import { mts_unbind } from '../MTSAbstractService/mts-unbind.oa.mjs';
import { id_cp_mts_connect } from '../MTSObjectIdentifiers/id-cp-mts-connect.va.mjs';
import { type CONNECTION_PACKAGE } from '@wildboar/rose';
/**
 * @summary mts_connect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-connect CONNECTION-PACKAGE ::= {
 *   BIND    mts-bind
 *   UNBIND  mts-unbind
 *   ID      id-cp-mts-connect
 * }
 * ```
 *
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export const mts_connect: CONNECTION_PACKAGE = {
    class: 'CONNECTION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&bind': mts_bind /* OBJECT_FIELD_SETTING */,
    '&unbind': mts_unbind /* OBJECT_FIELD_SETTING */,
    '&id': id_cp_mts_connect /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&responderCanUnbind': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&unbindCanFail': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
