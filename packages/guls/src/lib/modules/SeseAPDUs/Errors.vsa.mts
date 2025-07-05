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
import { type SE_ERROR } from '../Notation/SE-ERROR.oca.mjs';
import { type SECURITY_EXCHANGE } from '../Notation/SECURITY-EXCHANGE.oca.mjs';

/**
 * @summary Errors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Errors{SECURITY-EXCHANGE:ValidSEs} SE-ERROR ::= {ValidSEs.&SE-Items.&Errors}
 * ```
 *
 * @type {SE_ERROR}
 */
export
function Errors (ValidSEs: SECURITY_EXCHANGE[]): SE_ERROR[] {
    return ValidSEs
        .flatMap((vse: SECURITY_EXCHANGE) => (vse["&SE-Items"] ?? [])
            .flatMap((sei) => sei["&Errors"] ?? []));
}

/* eslint-enable */
