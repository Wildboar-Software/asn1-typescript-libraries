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
 * @summary Protocol_version
 * @description
 *
 * Presentation protocol versions. CP lists versions the initiator
 * supports; CPA names the one selected (must be among those proposed);
 * CPR may list versions the responder supports (X.226 §6.2.2.2,
 * §6.2.3.2, §6.2.4.1, §6.2.6.4). This Recommendation is `version-1`.
 * Unnamed bits on CP are ignored (X.226 §8.5.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Protocol-version  ::=  BIT STRING {version-1(0)}
 * ```
 */
export type Protocol_version = BIT_STRING;


/**
 * @summary Protocol_version_version_1
 * @description
 *
 * Version defined by ITU-T Rec. X.226 (1994) | ISO/IEC 8823-1
 * (X.226 §6.2.2.2).
 *
 * @constant
 */
export const Protocol_version_version_1: number = 0; /* LONG_NAMED_BIT */


/**
 * @summary version_1
 * @constant
 */
export const version_1: number = Protocol_version_version_1; /* SHORT_NAMED_BIT */




export const _decode_Protocol_version = $._decodeBitString;




export const _encode_Protocol_version = $._encodeBitString;


/* eslint-enable */
