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
import { TOKEN } from '../MTSAbstractService/TOKEN.oca.mjs';
import { asymmetric_token } from '../MTSAbstractService/asymmetric-token.oa.mjs';
/* START_OF_SYMBOL_DEFINITION TokensTable */
/**
 * @summary TokensTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TokensTable TOKEN ::= {asymmetric-token, ...}
 * ```
 *
 * @constant
 * @type {TOKEN[]}
 *
 */
export const TokensTable: TOKEN[] = [asymmetric_token];
/* END_OF_SYMBOL_DEFINITION TokensTable */

/* eslint-enable */
