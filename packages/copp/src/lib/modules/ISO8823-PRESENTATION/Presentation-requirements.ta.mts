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
 * Optional presentation FUs (X.216 §8.2–8.3; X.226 §5.4, §6.2.2.10).
 * Kernel is always available and is not a bit. Selected FUs are those
 * required by both PS-users and supported by both PPMs (X.226 §6.2.6.3).
 * Restoration shall not be selected unless context-management is
 * selected; restoration is unavailable with session symmetric
 * synchronize (X.226 §5.4.3).
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
 * @description
 *
 * P-ALTER-CONTEXT (add/delete DCS members). Optional and negotiable
 * (X.226 §5.4.2; X.216 §6.8.1, §10.5).
 *
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
 * @description
 *
 * Restore DCS from syncpoints / activity boundaries. Requires
 * context-management. Applies when session activity management is
 * selected, or both (major or minor) synchronize and resynchronize
 * (X.226 §5.4.3; X.216 §6.8.2).
 *
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
