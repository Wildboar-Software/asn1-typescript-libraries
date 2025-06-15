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
import { ERROR } from '../E-health-send-and-ack/ERROR.oca.mjs';
import { Simple_Messages } from '../E-health-send-and-ack/Simple-Messages.osa.mjs';
/* START_OF_SYMBOL_DEFINITION Simple_Message_Errors */
/**
 * @summary Simple_Message_Errors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Simple-Message-Errors ERROR ::= {Simple-Messages.&Errors}
 * ```
 *
 * @constant
 * @type {ERROR[]}
 *
 */
export const Simple_Message_Errors: ERROR[] = [
    ...Simple_Messages.flatMap((_o) => [..._o['&Errors']]),
];
/* END_OF_SYMBOL_DEFINITION Simple_Message_Errors */

/* eslint-enable */
