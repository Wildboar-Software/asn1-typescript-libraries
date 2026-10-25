/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProcedureCancellationReason
 * @description
 *
 * Diagnostic for MAP-U-ABORT user reason Application procedure cancellation:
 * handover cancellation, radio channel release, network path release, call
 * release, associated procedure failure, tandem dialogue released, or remote
 * operations failure (3GPP TS 29.002 V19.1.0 clause 7.3.4, table 7.3/7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcedureCancellationReason  ::=  ENUMERATED {
 *     handoverCancellation  (0),
 *     radioChannelRelease  (1),
 *     networkPathRelease  (2),
 *     callRelease  (3),
 *     associatedProcedureFailure  (4),
 *     tandemDialogueRelease  (5),
 *     remoteOperationsFailure  (6)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProcedureCancellationReason {
    handoverCancellation = 0,
    radioChannelRelease = 1,
    networkPathRelease = 2,
    callRelease = 3,
    associatedProcedureFailure = 4,
    tandemDialogueRelease = 5,
    remoteOperationsFailure = 6,
}

/**
 * @summary ProcedureCancellationReason
 * @description
 *
 * Diagnostic for MAP-U-ABORT user reason Application procedure cancellation:
 * handover cancellation, radio channel release, network path release, call
 * release, associated procedure failure, tandem dialogue released, or remote
 * operations failure (3GPP TS 29.002 V19.1.0 clause 7.3.4, table 7.3/7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcedureCancellationReason  ::=  ENUMERATED {
 *     handoverCancellation  (0),
 *     radioChannelRelease  (1),
 *     networkPathRelease  (2),
 *     callRelease  (3),
 *     associatedProcedureFailure  (4),
 *     tandemDialogueRelease  (5),
 *     remoteOperationsFailure  (6)}
 * ```
 * 
 * @enum {number}
 */
export
type ProcedureCancellationReason = _enum_for_ProcedureCancellationReason;

/**
 * @summary ProcedureCancellationReason
 * @description
 *
 * Diagnostic for MAP-U-ABORT user reason Application procedure cancellation:
 * handover cancellation, radio channel release, network path release, call
 * release, associated procedure failure, tandem dialogue released, or remote
 * operations failure (3GPP TS 29.002 V19.1.0 clause 7.3.4, table 7.3/7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcedureCancellationReason  ::=  ENUMERATED {
 *     handoverCancellation  (0),
 *     radioChannelRelease  (1),
 *     networkPathRelease  (2),
 *     callRelease  (3),
 *     associatedProcedureFailure  (4),
 *     tandemDialogueRelease  (5),
 *     remoteOperationsFailure  (6)}
 * ```
 * 
 * @enum {number}
 */
export
const ProcedureCancellationReason: typeof _enum_for_ProcedureCancellationReason = _enum_for_ProcedureCancellationReason;

/**
 * @summary ProcedureCancellationReason_handoverCancellation
 * @description
 *
 * `handoverCancellation (0)` (3GPP TS 29.002 V19.1.0 clause 7.3.4, table
 * 7.3/7).
 *
 * @constant
 * @type {number}
 */
export
const ProcedureCancellationReason_handoverCancellation: _enum_for_ProcedureCancellationReason.handoverCancellation = ProcedureCancellationReason.handoverCancellation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handoverCancellation
 * @description
 *
 * `handoverCancellation (0)` of `ProcedureCancellationReason` (3GPP TS 29.002
 * V19.1.0 clause 7.3.4).
 *
 * @constant
 * @type {number}
 */
export
const handoverCancellation: _enum_for_ProcedureCancellationReason.handoverCancellation = ProcedureCancellationReason.handoverCancellation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcedureCancellationReason_radioChannelRelease
 * @description
 *
 * `radioChannelRelease (1)` (3GPP TS 29.002 V19.1.0 clause 7.3.4, table 7.3/7).
 *
 * @constant
 * @type {number}
 */
export
const ProcedureCancellationReason_radioChannelRelease: _enum_for_ProcedureCancellationReason.radioChannelRelease = ProcedureCancellationReason.radioChannelRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radioChannelRelease
 * @description
 *
 * `radioChannelRelease (1)` of `ProcedureCancellationReason` (3GPP TS 29.002
 * V19.1.0 clause 7.3.4).
 *
 * @constant
 * @type {number}
 */
export
const radioChannelRelease: _enum_for_ProcedureCancellationReason.radioChannelRelease = ProcedureCancellationReason.radioChannelRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcedureCancellationReason_networkPathRelease
 * @description
 *
 * `networkPathRelease (2)` (3GPP TS 29.002 V19.1.0 clause 7.3.4, table 7.3/7).
 *
 * @constant
 * @type {number}
 */
export
const ProcedureCancellationReason_networkPathRelease: _enum_for_ProcedureCancellationReason.networkPathRelease = ProcedureCancellationReason.networkPathRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary networkPathRelease
 * @description
 *
 * `networkPathRelease (2)` of `ProcedureCancellationReason` (3GPP TS 29.002
 * V19.1.0 clause 7.3.4).
 *
 * @constant
 * @type {number}
 */
export
const networkPathRelease: _enum_for_ProcedureCancellationReason.networkPathRelease = ProcedureCancellationReason.networkPathRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcedureCancellationReason_callRelease
 * @description
 *
 * `callRelease (3)` (3GPP TS 29.002 V19.1.0 clause 7.3.4, table 7.3/7).
 *
 * @constant
 * @type {number}
 */
export
const ProcedureCancellationReason_callRelease: _enum_for_ProcedureCancellationReason.callRelease = ProcedureCancellationReason.callRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callRelease
 * @description
 *
 * `callRelease (3)` of `ProcedureCancellationReason` (3GPP TS 29.002 V19.1.0
 * clause 7.3.4).
 *
 * @constant
 * @type {number}
 */
export
const callRelease: _enum_for_ProcedureCancellationReason.callRelease = ProcedureCancellationReason.callRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcedureCancellationReason_associatedProcedureFailure
 * @description
 *
 * `associatedProcedureFailure (4)` (3GPP TS 29.002 V19.1.0 clause 7.3.4, table
 * 7.3/7).
 *
 * @constant
 * @type {number}
 */
export
const ProcedureCancellationReason_associatedProcedureFailure: _enum_for_ProcedureCancellationReason.associatedProcedureFailure = ProcedureCancellationReason.associatedProcedureFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary associatedProcedureFailure
 * @description
 *
 * `associatedProcedureFailure (4)` of `ProcedureCancellationReason` (3GPP TS
 * 29.002 V19.1.0 clause 7.3.4).
 *
 * @constant
 * @type {number}
 */
export
const associatedProcedureFailure: _enum_for_ProcedureCancellationReason.associatedProcedureFailure = ProcedureCancellationReason.associatedProcedureFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcedureCancellationReason_tandemDialogueRelease
 * @description
 *
 * `tandemDialogueRelease (5)`: tandem dialogue released (3GPP TS 29.002 V19.1.0
 * clause 7.3.4, table 7.3/7).
 *
 * @constant
 * @type {number}
 */
export
const ProcedureCancellationReason_tandemDialogueRelease: _enum_for_ProcedureCancellationReason.tandemDialogueRelease = ProcedureCancellationReason.tandemDialogueRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tandemDialogueRelease
 * @description
 *
 * `tandemDialogueRelease (5)` of `ProcedureCancellationReason` (3GPP TS 29.002
 * V19.1.0 clause 7.3.4).
 *
 * @constant
 * @type {number}
 */
export
const tandemDialogueRelease: _enum_for_ProcedureCancellationReason.tandemDialogueRelease = ProcedureCancellationReason.tandemDialogueRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProcedureCancellationReason_remoteOperationsFailure
 * @description
 *
 * `remoteOperationsFailure (6)` (3GPP TS 29.002 V19.1.0 clause 7.3.4, table
 * 7.3/7).
 *
 * @constant
 * @type {number}
 */
export
const ProcedureCancellationReason_remoteOperationsFailure: _enum_for_ProcedureCancellationReason.remoteOperationsFailure = ProcedureCancellationReason.remoteOperationsFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remoteOperationsFailure
 * @description
 *
 * `remoteOperationsFailure (6)` of `ProcedureCancellationReason` (3GPP TS
 * 29.002 V19.1.0 clause 7.3.4).
 *
 * @constant
 * @type {number}
 */
export
const remoteOperationsFailure: _enum_for_ProcedureCancellationReason.remoteOperationsFailure = ProcedureCancellationReason.remoteOperationsFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ProcedureCancellationReason
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ProcedureCancellationReason: $.ASN1Decoder<number> = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ProcedureCancellationReason into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcedureCancellationReason, encoded as an ASN.1 Element.
 */
export const _encode_ProcedureCancellationReason: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
