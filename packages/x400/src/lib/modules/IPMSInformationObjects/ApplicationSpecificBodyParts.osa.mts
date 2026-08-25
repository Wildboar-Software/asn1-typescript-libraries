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
/**
 * @summary ApplicationSpecificBodyParts
 * @description
 *
 * Information object set `ApplicationSpecificBodyParts`. The IPM Body Part Table
 * information object set has as its members the types of body part that may appear in
 * the Body of an IPM:  The Standard Body Parts information object set has as
 * its members the types of body part defined in this Specification: StandardBodyParts
 *  See ITU-T X.420 (1999), §7.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ApplicationSpecificBodyParts EXTENDED-BODY-PART-TYPE ::= {--any body part defined in other Specifications, or for proprietary or private use
 *    ...}
 * ```
 *
 * @constant
 * @type {EXTENDED_BODY_PART_TYPE[]}
 *
 */
export const ApplicationSpecificBodyParts: EXTENDED_BODY_PART_TYPE[] = [];

/* eslint-enable */
