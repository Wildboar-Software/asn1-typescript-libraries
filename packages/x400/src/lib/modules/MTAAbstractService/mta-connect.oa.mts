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
import { mta_bind } from '../MTAAbstractService/mta-bind.oa.mjs';
import { mta_unbind } from '../MTAAbstractService/mta-unbind.oa.mjs';
import { id_cp_mta_connect } from '../MTSObjectIdentifiers/id-cp-mta-connect.va.mjs';
import { CONNECTION_PACKAGE } from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/CONNECTION-PACKAGE.oca.mjs';
/**
 * @summary mta_connect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mta-connect CONNECTION-PACKAGE ::= {
 *   BIND    mta-bind
 *   UNBIND  mta-unbind
 *   ID      id-cp-mta-connect
 * }
 * ```
 *
 * @constant
 * @type {CONNECTION_PACKAGE}
 * @implements {CONNECTION_PACKAGE}
 */
export const mta_connect: CONNECTION_PACKAGE = {
    class: 'CONNECTION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&bind': mta_bind /* OBJECT_FIELD_SETTING */,
    '&unbind': mta_unbind /* OBJECT_FIELD_SETTING */,
    '&id': id_cp_mta_connect /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&responderCanUnbind': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&unbindCanFail': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
