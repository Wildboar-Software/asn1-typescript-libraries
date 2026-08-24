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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/**
 * @summary id_att_reporting_MTA_certificate
 * @description
 *
 * OBJECT IDENTIFIER `id_att_reporting_MTA_certificate`. This general-attribute contains
 * the reporting-MTA-certificate argument of the Report-delivery abstract-operation. It
 * contains the certificate of the MTA that generated the report. See ITU-T X.413 (1999),
 * §11.2.72.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-reporting-MTA-certificate ID ::= {id-att  36}
 * ```
 *
 * @constant
 */
export const id_att_reporting_MTA_certificate: ID = _OID.fromParts([36], id_att);

/* eslint-enable */
