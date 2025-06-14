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
import { OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { OPERATION_PACKAGE } from '../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs';
import { Forward } from './Forward.osa.mjs';
import { Reverse } from './Reverse.osa.mjs';

/* START_OF_SYMBOL_DEFINITION SupplierPerforms */
/**
 * @summary SupplierPerforms
 * @description
 *
 * **This production was manually written in TypeScript.**
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SupplierPerforms{OPERATION-PACKAGE:package} OPERATION ::= {Forward{{package.&Supplier}} | Forward{{package.&Both}} |
 *    Reverse{{package.&Consumer}} | Reverse{{package.&Both}}}
 * ```
 *
 * @type {OPERATION}
 */
export
function SupplierPerforms (package_: OPERATION_PACKAGE): OPERATION[] {
    return [
        ...Forward(package_['&Supplier'] ?? []),
        ...Forward(package_['&Both'] ?? []),
        ...Reverse(package_['&Consumer'] ?? []),
        ...Reverse(package_['&Both'] ?? []),
    ];
 }

/* eslint-enable */
