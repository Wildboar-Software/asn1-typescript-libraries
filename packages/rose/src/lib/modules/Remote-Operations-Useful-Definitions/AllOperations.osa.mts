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
import { OPERATION_PACKAGE } from '../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs';
import { ConsumerPerforms } from './ConsumerPerforms.osa.mjs';
import { SupplierPerforms } from './SupplierPerforms.osa.mjs';


/**
 * @summary AllOperations
 * @description
 *
 * **This production was manually written in TypeScript.**
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AllOperations{OPERATION-PACKAGE:package} OPERATION ::= {ConsumerPerforms{package} | SupplierPerforms{package}}
 * ```
 */
export
function AllOperations (package_: OPERATION_PACKAGE): OPERATION[] {
    return [
        ...ConsumerPerforms(package_),
        ...SupplierPerforms(package_),
    ];
}

/* eslint-enable */
