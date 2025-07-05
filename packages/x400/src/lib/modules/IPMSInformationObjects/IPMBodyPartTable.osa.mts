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
import { type EXTENDED_BODY_PART_TYPE } from '../IPMSInformationObjects/EXTENDED-BODY-PART-TYPE.oca.mjs';
import { StandardBodyParts } from '../IPMSInformationObjects/StandardBodyParts.osa.mjs';
import { ApplicationSpecificBodyParts } from '../IPMSInformationObjects/ApplicationSpecificBodyParts.osa.mjs';
/**
 * @summary IPMBodyPartTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMBodyPartTable EXTENDED-BODY-PART-TYPE ::= {StandardBodyParts | ApplicationSpecificBodyParts}
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE[]}
 *
 */
export const IPMBodyPartTable: EXTENDED_BODY_PART_TYPE[] = [
    ...StandardBodyParts,
    ...ApplicationSpecificBodyParts,
];

/* eslint-enable */
