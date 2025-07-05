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
import { type OPERATION_PACKAGE } from '../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs';
import { type OPERATION } from '../Remote-Operations-Information-Objects/OPERATION.oca.mjs';
import { Forward } from './Forward.osa.mjs';
import { Reverse } from './Reverse.osa.mjs';

/**
 * @summary ConsumerPerforms
 * @description
 *
 * **This production was manually written in TypeScript.**
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConsumerPerforms{OPERATION-PACKAGE:package} OPERATION ::= {Forward{{package.&Consumer}} | Forward{{package.&Both}} |
 *    Reverse{{package.&Supplier}} | Reverse{{package.&Both}}}
 * ```
 */
export
function ConsumerPerforms (package_: OPERATION_PACKAGE): OPERATION[] {
    return [
        ...Forward(package_['&Consumer'] ?? []),
        ...Forward(package_['&Both'] ?? []),
        ...Reverse(package_['&Supplier'] ?? []),
        ...Reverse(package_['&Both'] ?? []),
    ];
}

/* eslint-enable */
