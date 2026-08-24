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
import { originate_probe } from '../EDIMSAbstractService/originate-probe.oa.mjs';
import { originate_edim } from '../EDIMSAbstractService/originate-edim.oa.mjs';
import { originate_edin } from '../EDIMSAbstractService/originate-edin.oa.mjs';
import { id_pt_origination } from '../EDIMSObjectIdentifiers/id-pt-origination.va.mjs';
import { type PORT } from '../MTSAbstractService/PORT.oca.mjs';
/**
 * @summary origination
 * @description
 *
 * Information object `origination`. A UA or AU shall be said to support upon origination
 * a particular Heading field, Heading extension, EDIM Body Part type or Extended Body
 * Part type if, and only if, it accepts, preserves, and emits, in full accord with this
 * Recommen- dation | International Standard, that particular Heading field or extension,
 * or EDIM Body Part type or Extended Body Part type, whenever a user calls upon it to
 * convey an EDIM… See ITU-T X.435 (1999), §21.1.
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
