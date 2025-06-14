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
import { applicationEntity } from '@wildboar/x500/src/lib/modules/SelectedObjectClasses/applicationEntity.oa.mjs';
import { sMASE } from '../RepertoireDirectoryASN1Module/sMASE.oa.mjs';
import { cMISE } from '../RepertoireDirectoryASN1Module/cMISE.oa.mjs';
import { CONTENT_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/CONTENT-RULE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION managementServiceElementsCR */
/**
 * @summary managementServiceElementsCR
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * managementServiceElementsCR CONTENT-RULE ::= {
 *   STRUCTURAL OBJECT-CLASS   applicationEntity.&id
 *   AUXILIARY OBJECT-CLASSES  {sMASE | cMISE}
 * }
 * ```
 *
 * @constant
 * @type {CONTENT_RULE}
 * @implements {CONTENT_RULE}
 */
export const managementServiceElementsCR: CONTENT_RULE = {
    class: 'CONTENT-RULE',
    decoderFor: {},
    encoderFor: {},
    '&structuralClass':
        applicationEntity[
            '&id'
        ] /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Auxiliaries': [sMASE, cMISE] /* OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION managementServiceElementsCR */

/* eslint-enable */
