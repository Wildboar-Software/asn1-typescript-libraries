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
 * @summary OperationalState
 * @description
 *
 * Whether the resource is operable. Independent of administrative/usage state.
 * MATCHES FOR EQUALITY. `{smi2AttributeID 35}`. ITU-T Rec. X.721 (02/92)
 * §10.7.2.5; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationalState  ::=  ENUMERATED {disabled(0), enabled(1)}
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_OperationalState {
    disabled = 0,
    enabled = 1,
}

/**
 * @summary OperationalState
 * @description
 *
 * Whether the resource is operable. Independent of administrative/usage state.
 * MATCHES FOR EQUALITY. `{smi2AttributeID 35}`. ITU-T Rec. X.721 (02/92)
 * §10.7.2.5; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationalState  ::=  ENUMERATED {disabled(0), enabled(1)}
 * ```
 *
 * @enum {number}
 */
export
type OperationalState = _enum_for_OperationalState;

/**
 * @summary OperationalState
 * @description
 *
 * Whether the resource is operable. Independent of administrative/usage state.
 * MATCHES FOR EQUALITY. `{smi2AttributeID 35}`. ITU-T Rec. X.721 (02/92)
 * §10.7.2.5; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationalState  ::=  ENUMERATED {disabled(0), enabled(1)}
 * ```
 *
 * @enum {number}
 */
export
const OperationalState = _enum_for_OperationalState;

/**
 * @summary OperationalState_disabled
 * @description
 *
 * Resource is totally inoperable and cannot provide service. ITU-T Rec. X.721
 * (02/92) §10.7.2.5; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.2.
 *
 * @constant
 * @type {number}
 */
export
const OperationalState_disabled: OperationalState = OperationalState.disabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disabled
 * @description
 *
 * Resource is totally inoperable and cannot provide service. ITU-T Rec. X.721
 * (02/92) §10.7.2.5; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.2.
 *
 * @constant
 * @type {number}
 */
export
const disabled: OperationalState = OperationalState.disabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary OperationalState_enabled
 * @description
 *
 * Resource is partially or fully operable and available for use. ITU-T Rec.
 * X.721 (02/92) §10.7.2.5; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.2.
 *
 * @constant
 * @type {number}
 */
export
const OperationalState_enabled: OperationalState = OperationalState.enabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enabled
 * @description
 *
 * Resource is partially or fully operable and available for use. ITU-T Rec.
 * X.721 (02/92) §10.7.2.5; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.1.2.
 *
 * @constant
 * @type {number}
 */
export
const enabled: OperationalState = OperationalState.enabled; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_OperationalState = $._decodeEnumerated;


export const _encode_OperationalState = $._encodeEnumerated;


/* eslint-enable */
