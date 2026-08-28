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
import { type OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { type OPERATION_PACKAGE } from '../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs';
import { Forward } from './Forward.osa.mjs';
import { Reverse } from './Reverse.osa.mjs';


/**
 * @summary SupplierPerforms
 * @description
 *
 * Operations the **supplier** of `package` must be able to perform: forward of `&Supplier` and `&Both`, plus reverse of `&Consumer` and `&Both` (ITU-T Rec. X.880 (07/94) §10.9). Usable only if the `Forward`/`Reverse` linkage-depth assumptions hold.
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
