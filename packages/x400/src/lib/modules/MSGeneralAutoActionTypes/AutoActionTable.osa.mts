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
import { AUTO_ACTION } from '../MSAbstractService/AUTO-ACTION.oca.mjs';
import { GeneralAutoActions } from '../MSGeneralAutoActionTypes/GeneralAutoActions.osa.mjs';
import { ContentSpecificAutoActions } from '../MSGeneralAutoActionTypes/ContentSpecificAutoActions.osa.mjs';
/**
 * @summary AutoActionTable
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoActionTable AUTO-ACTION ::= {GeneralAutoActions | ContentSpecificAutoActions}
 * ```
 *
 * @constant
 * @type {AUTO_ACTION[]}
 *
 */
export const AutoActionTable: AUTO_ACTION[] = [
    ...GeneralAutoActions,
    ...ContentSpecificAutoActions,
];

/* eslint-enable */
