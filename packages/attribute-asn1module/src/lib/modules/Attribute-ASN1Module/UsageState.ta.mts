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
 * @summary UsageState
 * @description
 *
 * Whether the resource is idle, serving users with spare capacity, or fully
 * occupied. MATCHES FOR EQUALITY. `{smi2AttributeID 39}`. ITU-T Rec. X.721
 * (02/92) §10.7.2.9; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageState  ::=  ENUMERATED {idle(0), active(1), busy(2)}
 * ```
 *
 * @enum {number}
 */
export
const _enum_for_UsageState = {
    idle: 0,
    active: 1,
    busy: 2,
} as const;

export
type _enum_for_UsageState = (typeof _enum_for_UsageState)[keyof typeof _enum_for_UsageState];

/**
 * @summary UsageState
 * @description
 *
 * Whether the resource is idle, serving users with spare capacity, or fully
 * occupied. MATCHES FOR EQUALITY. `{smi2AttributeID 39}`. ITU-T Rec. X.721
 * (02/92) §10.7.2.9; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageState  ::=  ENUMERATED {idle(0), active(1), busy(2)}
 * ```
 *
 * @enum {number}
 */
export
type UsageState = _enum_for_UsageState;

/**
 * @summary UsageState
 * @description
 *
 * Whether the resource is idle, serving users with spare capacity, or fully
 * occupied. MATCHES FOR EQUALITY. `{smi2AttributeID 39}`. ITU-T Rec. X.721
 * (02/92) §10.7.2.9; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsageState  ::=  ENUMERATED {idle(0), active(1), busy(2)}
 * ```
 *
 * @enum {number}
 */
export
const UsageState = _enum_for_UsageState;

/**
 * @summary UsageState_idle
 * @description
 *
 * Resource is not currently in use. ITU-T Rec. X.721 (02/92) §10.7.2.9; ITU-T
 * Rec. X.731 | ISO/IEC 10164-2 §7.1.3.
 *
 * @constant
 * @type {number}
 */
export
const UsageState_idle: UsageState = UsageState.idle; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary idle
 * @description
 *
 * Resource is not currently in use. ITU-T Rec. X.721 (02/92) §10.7.2.9; ITU-T
 * Rec. X.731 | ISO/IEC 10164-2 §7.1.3.
 *
 * @constant
 * @type {number}
 */
export
const idle: UsageState = UsageState.idle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UsageState_active
 * @description
 *
 * In use, with spare capacity for additional users. ITU-T Rec. X.721 (02/92)
 * §10.7.2.9; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.3.
 *
 * @constant
 * @type {number}
 */
export
const UsageState_active: UsageState = UsageState.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @description
 *
 * In use, with spare capacity for additional users. ITU-T Rec. X.721 (02/92)
 * §10.7.2.9; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.3.
 *
 * @constant
 * @type {number}
 */
export
const active: UsageState = UsageState.active; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UsageState_busy
 * @description
 *
 * In use, with no spare capacity for additional users. ITU-T Rec. X.721 (02/92)
 * §10.7.2.9; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.3.
 *
 * @constant
 * @type {number}
 */
export
const UsageState_busy: UsageState = UsageState.busy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary busy
 * @description
 *
 * In use, with no spare capacity for additional users. ITU-T Rec. X.721 (02/92)
 * §10.7.2.9; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.3.
 *
 * @constant
 * @type {number}
 */
export
const busy: UsageState = UsageState.busy; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_UsageState(el: _Element): UsageState {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case UsageState.idle: return UsageState.idle;
        case UsageState.active: return UsageState.active;
        case UsageState.busy: return UsageState.busy;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for UsageState.",
                el,
            );
    }
}


export const _encode_UsageState: $.ASN1Encoder<UsageState> = $._encodeEnumerated as $.ASN1Encoder<UsageState>;


/* eslint-enable */
