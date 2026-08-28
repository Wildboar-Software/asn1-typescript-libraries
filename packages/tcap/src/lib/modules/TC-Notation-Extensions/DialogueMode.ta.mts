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
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary DialogueMode
 * @description
 *
 * Selects Q.773 structured dialogue (AARQ/AARE/ABRT,
 * `dialogue-as-id`) or unstructured dialogue (AUDT,
 * `uniDialogue-as-id`). ITU-T Rec. Q.773 (06/97)
 * [§3.2](https://www.itu.int/rec/T-REC-Q.773-199706-I). This
 * enumeration itself is from Q.775, not Q.773.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DialogueMode  ::=  ENUMERATED {structured(1), unstructured(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DialogueMode {
    structured = 1,
    unstructured = 2,
}

/**
 * @summary DialogueMode
 * @description
 *
 * Selects Q.773 structured dialogue (AARQ/AARE/ABRT,
 * `dialogue-as-id`) or unstructured dialogue (AUDT,
 * `uniDialogue-as-id`). ITU-T Rec. Q.773 (06/97)
 * [§3.2](https://www.itu.int/rec/T-REC-Q.773-199706-I). This
 * enumeration itself is from Q.775, not Q.773.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DialogueMode  ::=  ENUMERATED {structured(1), unstructured(2)}
 * ```
 *
 * @enum {number}
 */
export type DialogueMode = _enum_for_DialogueMode;

/**
 * @summary DialogueMode
 * @description
 *
 * Selects Q.773 structured dialogue (AARQ/AARE/ABRT,
 * `dialogue-as-id`) or unstructured dialogue (AUDT,
 * `uniDialogue-as-id`). ITU-T Rec. Q.773 (06/97)
 * [§3.2](https://www.itu.int/rec/T-REC-Q.773-199706-I). This
 * enumeration itself is from Q.775, not Q.773.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DialogueMode  ::=  ENUMERATED {structured(1), unstructured(2)}
 * ```
 *
 * @enum {number}
 */
export const DialogueMode = _enum_for_DialogueMode;

/**
 * @summary DialogueMode_structured
 * @description
 *
 * Structured dialogue: Dialogue Portion uses `dialogue-as-id`
 * and `DialoguePDU` (Q.773 §3.2.1).
 *
 * @constant
 * @type {number}
 */
export const DialogueMode_structured: DialogueMode =
    DialogueMode.structured; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary structured
 * @constant
 * @type {number}
 */
export const structured: DialogueMode =
    DialogueMode.structured; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DialogueMode_unstructured
 * @description
 *
 * Unstructured dialogue: Dialogue Portion uses
 * `uniDialogue-as-id` and `UniDialoguePDU` (Q.773 §3.2.2).
 *
 * @constant
 * @type {number}
 */
export const DialogueMode_unstructured: DialogueMode =
    DialogueMode.unstructured; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unstructured
 * @constant
 * @type {number}
 */
export const unstructured: DialogueMode =
    DialogueMode.unstructured; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DialogueMode = $._decodeEnumerated;


export const _encode_DialogueMode = $._encodeEnumerated;


/* eslint-enable */
