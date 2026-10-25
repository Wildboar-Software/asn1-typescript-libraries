/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EmConState
 * @description
 *
 * Believed EMCON (radio silence) state of an entry.
 * `enabled` (0), `receive-only` (1), electrical or
 * electronic silence (2), or `disabled` (3).
 *
 * {@link EmConCapability} records whether the entry can
 * enter this state. ACP 133 SUPP-1(A).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmConState  ::=  ENUMERATED { enabled(0), receive-only(1), electronic-silence(2), disabled(3) }
 * ```
 * 
 * @enum {number}
 */
export
const _enum_for_EmConState = {
    enabled: 0,
    receive_only: 1,
    electronic_silence: 2,
    disabled: 3,
} as const;

export
type _enum_for_EmConState =
    (typeof _enum_for_EmConState)[keyof typeof _enum_for_EmConState];

/**
 * @summary EmConState
 * @description
 *
 * Believed EMCON (radio silence) state of an entry.
 * `enabled` (0), `receive-only` (1), electrical or
 * electronic silence (2), or `disabled` (3).
 *
 * {@link EmConCapability} records whether the entry can
 * enter this state. ACP 133 SUPP-1(A).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmConState  ::=  ENUMERATED { enabled(0), receive-only(1), electronic-silence(2), disabled(3) }
 * ```
 * 
 * @enum {number}
 */
export
type EmConState = _enum_for_EmConState;

/**
 * @summary EmConState
 * @description
 *
 * Believed EMCON (radio silence) state of an entry.
 * `enabled` (0), `receive-only` (1), electrical or
 * electronic silence (2), or `disabled` (3).
 *
 * {@link EmConCapability} records whether the entry can
 * enter this state. ACP 133 SUPP-1(A).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmConState  ::=  ENUMERATED { enabled(0), receive-only(1), electronic-silence(2), disabled(3) }
 * ```
 * 
 * @enum {number}
 */
export
const EmConState = _enum_for_EmConState;

/**
 * Enabled.
 * @summary EmConState_enabled
 * @constant
 * @type {number}
 */
export
const EmConState_enabled = EmConState.enabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link EmConState_enabled}.
 * @summary enabled
 * @constant
 * @type {number}
 */
export
const enabled = EmConState.enabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Receive only.
 * @summary EmConState_receive_only
 * @constant
 * @type {number}
 */
export
const EmConState_receive_only = EmConState.receive_only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link EmConState_receive_only}.
 * @summary receive_only
 * @constant
 * @type {number}
 */
export
const receive_only = EmConState.receive_only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Electrical or electronic silence.
 * @summary EmConState_electronic_silence
 * @constant
 * @type {number}
 */
export
const EmConState_electronic_silence = EmConState.electronic_silence; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link EmConState_electronic_silence}.
 * @summary electronic_silence
 * @constant
 * @type {number}
 */
export
const electronic_silence = EmConState.electronic_silence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * Disabled.
 * @summary EmConState_disabled
 * @constant
 * @type {number}
 */
export
const EmConState_disabled = EmConState.disabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * Short name for {@link EmConState_disabled}.
 * @summary disabled
 * @constant
 * @type {number}
 */
export
const disabled = EmConState.disabled; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_EmConState: $.ASN1Decoder<EmConState> =
    $._decodeEnumerated as $.ASN1Decoder<EmConState>;
export const _encode_EmConState: $.ASN1Encoder<EmConState> =
    $._encodeEnumerated as $.ASN1Encoder<EmConState>;


/* eslint-enable */
