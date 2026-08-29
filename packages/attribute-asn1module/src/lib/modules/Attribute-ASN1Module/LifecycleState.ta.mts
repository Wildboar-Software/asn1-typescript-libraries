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
 * @summary LifecycleState
 * @description
 *
 * Lifecycle of the resource: planned, installed, or pending removal. Added by
 * X.721 Amendment 1 (08/2001). MATCHES FOR EQUALITY. `{smi2AttributeID 105}`.
 * ITU-T Rec. X.721 (02/92) Amd.1 §10.7.2.y; ITU-T Rec. X.731 | ISO/IEC 10164-2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LifecycleState  ::=  ENUMERATED {planned(0), installed(1), pendingRemoval(2)}
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_LifecycleState {
    planned = 0,
    installed = 1,
    pendingRemoval = 2,
}

/**
 * @summary LifecycleState
 * @description
 *
 * Lifecycle of the resource: planned, installed, or pending removal. Added by
 * X.721 Amendment 1 (08/2001). MATCHES FOR EQUALITY. `{smi2AttributeID 105}`.
 * ITU-T Rec. X.721 (02/92) Amd.1 §10.7.2.y; ITU-T Rec. X.731 | ISO/IEC 10164-2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LifecycleState  ::=  ENUMERATED {planned(0), installed(1), pendingRemoval(2)}
 * ```
 *
 * @enum {number}
 */
export
type LifecycleState = _enum_for_LifecycleState;

/**
 * @summary LifecycleState
 * @description
 *
 * Lifecycle of the resource: planned, installed, or pending removal. Added by
 * X.721 Amendment 1 (08/2001). MATCHES FOR EQUALITY. `{smi2AttributeID 105}`.
 * ITU-T Rec. X.721 (02/92) Amd.1 §10.7.2.y; ITU-T Rec. X.731 | ISO/IEC 10164-2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LifecycleState  ::=  ENUMERATED {planned(0), installed(1), pendingRemoval(2)}
 * ```
 *
 * @enum {number}
 */
export
const LifecycleState = _enum_for_LifecycleState;

/**
 * @summary LifecycleState_planned
 * @description
 *
 * Resource is planned but not yet installed. ITU-T Rec. X.721 (02/92) Amd.1
 * §10.7.2.y.
 *
 * @constant
 * @type {number}
 */
export
const LifecycleState_planned: LifecycleState = LifecycleState.planned; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary planned
 * @description
 *
 * Resource is planned but not yet installed. ITU-T Rec. X.721 (02/92) Amd.1
 * §10.7.2.y.
 *
 * @constant
 * @type {number}
 */
export
const planned: LifecycleState = LifecycleState.planned; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LifecycleState_installed
 * @description
 *
 * Resource is installed. ITU-T Rec. X.721 (02/92) Amd.1 §10.7.2.y.
 *
 * @constant
 * @type {number}
 */
export
const LifecycleState_installed: LifecycleState = LifecycleState.installed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary installed
 * @description
 *
 * Resource is installed. ITU-T Rec. X.721 (02/92) Amd.1 §10.7.2.y.
 *
 * @constant
 * @type {number}
 */
export
const installed: LifecycleState = LifecycleState.installed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary LifecycleState_pendingRemoval
 * @description
 *
 * Resource is pending removal. ITU-T Rec. X.721 (02/92) Amd.1 §10.7.2.y.
 *
 * @constant
 * @type {number}
 */
export
const LifecycleState_pendingRemoval: LifecycleState = LifecycleState.pendingRemoval; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pendingRemoval
 * @description
 *
 * Resource is pending removal. ITU-T Rec. X.721 (02/92) Amd.1 §10.7.2.y.
 *
 * @constant
 * @type {number}
 */
export
const pendingRemoval: LifecycleState = LifecycleState.pendingRemoval; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_LifecycleState = $._decodeEnumerated;


export const _encode_LifecycleState = $._encodeEnumerated;


/* eslint-enable */
