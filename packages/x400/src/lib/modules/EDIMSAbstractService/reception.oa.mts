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
import { receive_report } from '../EDIMSAbstractService/receive-report.oa.mjs';
import { receive_edim } from '../EDIMSAbstractService/receive-edim.oa.mjs';
import { receive_edin } from '../EDIMSAbstractService/receive-edin.oa.mjs';
import { id_pt_reception } from '../EDIMSObjectIdentifiers/id-pt-reception.va.mjs';
import { type PORT } from '../MTSAbstractService/PORT.oca.mjs';
/**
 * @summary reception
 * @description
 *
 * Information object `reception`. A UA or AU shall be said to support upon origination a
 * particular Heading field, Heading extension, EDIM Body Part type or Extended Body Part
 * type if, and only if, it accepts, preserves, and emits, in full accord with this
 * Recommen- dation | International Standard, that particular Heading field or extension,
 * or EDIM Body Part type or Extended Body Part type, whenever a user calls upon it to
 * convey an EDIM… See ITU-T X.435 (1999), §21.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * reception PORT ::= {
 *   SUPPLIER INVOKES  {receive-report | receive-edim | receive-edin}
 *   ID                id-pt-reception
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const reception: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Consumer': [
        receive_report,
        receive_edim,
        receive_edin,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_reception /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
