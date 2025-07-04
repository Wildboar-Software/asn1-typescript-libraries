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
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { probe } from '../Remote-Operations-Useful-Definitions/probe.oa.mjs';
import { acknowledge } from '../Remote-Operations-Useful-Definitions/acknowledge.oa.mjs';

/**
 * @summary ProbeAndAcknowledge
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProbeAndAcknowledge OPERATION ::= {probe | acknowledge}
 * ```
 *
 * @constant
 * @type {OPERATION[]}
 *
 */
export const ProbeAndAcknowledge: OPERATION[] = [probe, acknowledge];

/* eslint-enable */
