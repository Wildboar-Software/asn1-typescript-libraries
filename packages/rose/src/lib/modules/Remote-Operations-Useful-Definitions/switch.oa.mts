/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import { OPERATION_PACKAGE } from '../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs';

/* START_OF_SYMBOL_DEFINITION switch */
/**
 * @summary switch
 * @description
 *
 * **This production was manually written in TypeScript.**
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * switch{OPERATION-PACKAGE:package, OBJECT IDENTIFIER:id} OPERATION-PACKAGE ::=
 * {
 *     OPERATIONS        {package.&Both}
 *     CONSUMER INVOKES  {package.&Consumer}
 *     SUPPLIER INVOKES  {package.&Supplier}
 *     ID                id
 * }
 * ```
 */
export
function switch_ (package_: OPERATION_PACKAGE, id: OBJECT_IDENTIFIER): OPERATION_PACKAGE {
    return {
        ...package_,
        "&id": id,
    };
}
/* END_OF_SYMBOL_DEFINITION switch */

/* eslint-enable */
