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
import { originate_probe } from '../IPMSAbstractService/originate-probe.oa.mjs';
import { originate_ipm } from '../IPMSAbstractService/originate-ipm.oa.mjs';
import { originate_rn } from '../IPMSAbstractService/originate-rn.oa.mjs';
import { originate_on } from '../IPMSAbstractService/originate-on.oa.mjs';
import { id_pt_origination } from '../IPMSObjectIdentifiers/id-pt-origination.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
/**
 * @summary origination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * origination PORT ::= {
 *   CONSUMER INVOKES
 *     {originate-probe | originate-ipm | originate-rn | originate-on}
 *   ID                id-pt-origination
 * }
 * ```
 *
 * @constant
 * @type {PORT}
 * @implements {PORT}
 */
export const origination: PORT = {
    class: 'OPERATION-PACKAGE',
    decoderFor: {},
    encoderFor: {},
    '&Supplier': [
        originate_probe,
        originate_ipm,
        originate_rn,
        originate_on,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_origination /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
