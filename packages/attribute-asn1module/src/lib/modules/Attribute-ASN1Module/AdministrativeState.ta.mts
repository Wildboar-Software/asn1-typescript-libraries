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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AdministrativeState
 * @description
 *
 * Manager's permission for the resource to provide service. Independent of
 * operational/usage state. MATCHES FOR EQUALITY. `{smi2AttributeID 31}`. ITU-T
 * Rec. X.721 (02/92) §10.7.2.1; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_AdministrativeState {
    locked = 0,
    unlocked = 1,
    shuttingDown = 2,
}

/**
 * @summary AdministrativeState
 * @description
 *
 * Manager's permission for the resource to provide service. Independent of
 * operational/usage state. MATCHES FOR EQUALITY. `{smi2AttributeID 31}`. ITU-T
 * Rec. X.721 (02/92) §10.7.2.1; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```
 *
 * @enum {number}
 */
export
type AdministrativeState = _enum_for_AdministrativeState;

/**
 * @summary AdministrativeState
 * @description
 *
 * Manager's permission for the resource to provide service. Independent of
 * operational/usage state. MATCHES FOR EQUALITY. `{smi2AttributeID 31}`. ITU-T
 * Rec. X.721 (02/92) §10.7.2.1; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AdministrativeState  ::=  ENUMERATED {locked(0), unlocked(1), shuttingDown(2)}
 * ```
 *
 * @enum {number}
 */
export
const AdministrativeState = _enum_for_AdministrativeState;

/**
 * @summary AdministrativeState_locked
 * @description
 *
 * Resource is administratively prohibited from performing services for users.
 * ITU-T Rec. X.721 (02/92) §10.7.2.1; ITU-T Rec. X.731 | ISO/IEC 10164-2
 * §7.1.1.
 *
 * @constant
 * @type {number}
 */
export
const AdministrativeState_locked: AdministrativeState = AdministrativeState.locked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locked
 * @description
 *
 * Resource is administratively prohibited from performing services for users.
 * ITU-T Rec. X.721 (02/92) §10.7.2.1; ITU-T Rec. X.731 | ISO/IEC 10164-2
 * §7.1.1.
 *
 * @constant
 * @type {number}
 */
export
const locked: AdministrativeState = AdministrativeState.locked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdministrativeState_unlocked
 * @description
 *
 * Resource is administratively permitted to perform services for users. ITU-T
 * Rec. X.721 (02/92) §10.7.2.1; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.1.
 *
 * @constant
 * @type {number}
 */
export
const AdministrativeState_unlocked: AdministrativeState = AdministrativeState.unlocked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unlocked
 * @description
 *
 * Resource is administratively permitted to perform services for users. ITU-T
 * Rec. X.721 (02/92) §10.7.2.1; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.1.
 *
 * @constant
 * @type {number}
 */
export
const unlocked: AdministrativeState = AdministrativeState.unlocked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdministrativeState_shuttingDown
 * @description
 *
 * Existing users may finish; new users are administratively refused. ITU-T Rec.
 * X.721 (02/92) §10.7.2.1; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.1.
 *
 * @constant
 * @type {number}
 */
export
const AdministrativeState_shuttingDown: AdministrativeState = AdministrativeState.shuttingDown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary shuttingDown
 * @description
 *
 * Existing users may finish; new users are administratively refused. ITU-T Rec.
 * X.721 (02/92) §10.7.2.1; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.1.
 *
 * @constant
 * @type {number}
 */
export
const shuttingDown: AdministrativeState = AdministrativeState.shuttingDown; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_AdministrativeState = $._decodeEnumerated;


export const _encode_AdministrativeState = $._encodeEnumerated;


/* eslint-enable */
