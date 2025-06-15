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
import { originate_probe } from '../EDIMSAbstractService/originate-probe.oa.mjs';
import { originate_edim } from '../EDIMSAbstractService/originate-edim.oa.mjs';
import { originate_edin } from '../EDIMSAbstractService/originate-edin.oa.mjs';
import { id_pt_origination } from '../EDIMSObjectIdentifiers/id-pt-origination.va.mjs';
import { PORT } from '../MTSAbstractService/PORT.oca.mjs';
/**
 * @summary origination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * origination PORT ::= {
 *   CONSUMER INVOKES  {originate-probe | originate-edim | originate-edin}
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
        originate_edim,
        originate_edin,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_pt_origination /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
