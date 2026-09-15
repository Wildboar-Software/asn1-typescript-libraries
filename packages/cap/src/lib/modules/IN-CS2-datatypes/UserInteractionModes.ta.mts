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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserInteractionModes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserInteractionModes  ::=  BIT STRING {voiceMessage(0), tone(1), display(2)}
 * ```
 */
export
type UserInteractionModes = BIT_STRING;

/**
 * @summary UserInteractionModes_voiceMessage
 * @constant
 */
export
const UserInteractionModes_voiceMessage: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary voiceMessage
 * @constant
 */
export
const voiceMessage: number = UserInteractionModes_voiceMessage; /* SHORT_NAMED_BIT */

/**
 * @summary UserInteractionModes_tone
 * @constant
 */
export
const UserInteractionModes_tone: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary tone
 * @constant
 */
export
const tone: number = UserInteractionModes_tone; /* SHORT_NAMED_BIT */

/**
 * @summary UserInteractionModes_display
 * @constant
 */
export
const UserInteractionModes_display: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary display
 * @constant
 */
export
const display: number = UserInteractionModes_display; /* SHORT_NAMED_BIT */
export const _decode_UserInteractionModes = $._decodeBitString;
export const _encode_UserInteractionModes = $._encodeBitString;


/* eslint-enable */
