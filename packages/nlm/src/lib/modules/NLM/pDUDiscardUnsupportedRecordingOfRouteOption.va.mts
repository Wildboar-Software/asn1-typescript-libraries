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
} from '@wildboar/asn1';
import { pDUDiscard } from '../NLM/pDUDiscard.va.mjs';

/**
 * @summary pDUDiscardUnsupportedRecordingOfRouteOption
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pDUDiscardUnsupportedRecordingOfRouteOption OBJECT IDENTIFIER ::= {pDUDiscard unsupportedRecordingOfRouteOption(180)}
 * ```
 *
 * @constant
 */
export const pDUDiscardUnsupportedRecordingOfRouteOption: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* unsupportedRecordingOfRouteOption */ 180],
    pDUDiscard
);

/* eslint-enable */
