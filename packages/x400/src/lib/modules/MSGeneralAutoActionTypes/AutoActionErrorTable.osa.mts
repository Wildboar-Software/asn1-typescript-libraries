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
import { type AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';
import { GeneralAutoActionErrors } from '../MSGeneralAutoActionTypes/GeneralAutoActionErrors.osa.mjs';
import { ContentSpecificAutoActionErrors } from '../MSGeneralAutoActionTypes/ContentSpecificAutoActionErrors.osa.mjs';
/**
 * @summary AutoActionErrorTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionErrorTable AUTO-ACTION-ERROR ::= {GeneralAutoActionErrors | ContentSpecificAutoActionErrors}
 * ```
 *
 * @constant
 * @type {AUTO_ACTION_ERROR[]}
 *
 */
export const AutoActionErrorTable: AUTO_ACTION_ERROR[] = [
    ...GeneralAutoActionErrors,
    ...ContentSpecificAutoActionErrors,
];

/* eslint-enable */
