/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Presentation_requirements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Presentation-requirements  ::=  BIT STRING {context-management(0), restoration(1)
 * }
 * ```
 */
export type Presentation_requirements = BIT_STRING;


/**
 * @summary Presentation_requirements_context_management
 * @constant
 */
export const Presentation_requirements_context_management: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary context_management
 * @constant
 */
export const context_management: number = Presentation_requirements_context_management; /* SHORT_NAMED_BIT */


/**
 * @summary Presentation_requirements_restoration
 * @constant
 */
export const Presentation_requirements_restoration: number = 1; /* LONG_NAMED_BIT */


/**
 * @summary restoration
 * @constant
 */
export const restoration: number = Presentation_requirements_restoration; /* SHORT_NAMED_BIT */




export const _decode_Presentation_requirements = $._decodeBitString;




export const _encode_Presentation_requirements = $._encodeBitString;


/* eslint-enable */
