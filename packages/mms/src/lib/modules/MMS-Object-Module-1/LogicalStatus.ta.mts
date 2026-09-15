/* eslint-disable */
import {
    INTEGER,
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
 * @summary LogicalStatus
 * @description
 * 
 * VMD logical functionality visible to MMS.
 * state-changes-allowed = all supported services; no-state-changes-
 * allowed = inquiry/status services only; limited-services-permitted =
 * Abort, Conclude, Status, Identify; support-services-allowed = all
 * except Start/Stop/Reset/Resume/Kill and UnitControl start/stop.
 * ISO 9506-1:2003 §7.2.1.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogicalStatus  ::=  [0] IMPLICIT INTEGER {
 *     state-changes-allowed         (0),
 *     no-state-changes-allowed      (1),
 *     limited-services-permitted    (2),
 *     support-services-allowed      (3)
 * } (0..3)
 * ```
 */
export
type LogicalStatus = INTEGER;

/**
 * @summary LogicalStatus_state_changes_allowed
 * @description
 *
 * All MMS services this VMD supports may be performed. ISO 9506-1:2003
 * §7.2.1.9.1.
 *
 * @constant
 * @type {number}
 */
export
const LogicalStatus_state_changes_allowed: LogicalStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LogicalStatus_state_changes_allowed
 * @description
 *
 * All MMS services this VMD supports may be performed. ISO 9506-1:2003
 * §7.2.1.9.1.
 *
 * @constant
 * @type {number}
 */
export
const state_changes_allowed: LogicalStatus = LogicalStatus_state_changes_allowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LogicalStatus_no_state_changes_allowed
 * @description
 *
 * Only inquiry/status services (Get*, Report*, Read, Identify, Initiate,
 * Conclude, Abort, Cancel, Status, …). ISO 9506-1:2003 §7.2.1.9.2.
 *
 * @constant
 * @type {number}
 */
export
const LogicalStatus_no_state_changes_allowed: LogicalStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LogicalStatus_no_state_changes_allowed
 * @description
 *
 * Only inquiry/status services (Get*, Report*, Read, Identify, Initiate,
 * Conclude, Abort, Cancel, Status, …). ISO 9506-1:2003 §7.2.1.9.2.
 *
 * @constant
 * @type {number}
 */
export
const no_state_changes_allowed: LogicalStatus = LogicalStatus_no_state_changes_allowed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LogicalStatus_limited_services_permitted
 * @description
 *
 * Only Abort, Conclude, Status, and Identify. ISO 9506-1:2003 §7.2.1.9.3.
 *
 * @constant
 * @type {number}
 */
export
const LogicalStatus_limited_services_permitted: LogicalStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LogicalStatus_limited_services_permitted
 * @description
 *
 * Only Abort, Conclude, Status, and Identify. ISO 9506-1:2003 §7.2.1.9.3.
 *
 * @constant
 * @type {number}
 */
export
const limited_services_permitted: LogicalStatus = LogicalStatus_limited_services_permitted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LogicalStatus_support_services_allowed
 * @description
 *
 * All supported services except Start, Stop, Reset, Resume, Kill,
 * StartUnitControl, StopUnitControl. ISO 9506-1:2003 §7.2.1.9.4.
 *
 * @constant
 * @type {number}
 */
export
const LogicalStatus_support_services_allowed: LogicalStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LogicalStatus_support_services_allowed
 * @description
 *
 * All supported services except Start, Stop, Reset, Resume, Kill,
 * StartUnitControl, StopUnitControl. ISO 9506-1:2003 §7.2.1.9.4.
 *
 * @constant
 * @type {number}
 */
export
const support_services_allowed: LogicalStatus = LogicalStatus_support_services_allowed; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_LogicalStatus: $.ASN1Decoder<LogicalStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogicalStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogicalStatus (el: _Element): LogicalStatus {
    if (!_cached_decoder_for_LogicalStatus) { _cached_decoder_for_LogicalStatus = $._decode_implicit<LogicalStatus>(() => $._decodeInteger); }
    return _cached_decoder_for_LogicalStatus(el);
}

let _cached_encoder_for_LogicalStatus: $.ASN1Encoder<LogicalStatus> | null = null;

/**
 * @summary Encodes a(n) LogicalStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogicalStatus, encoded as an ASN.1 Element.
 */
export
function _encode_LogicalStatus (value: LogicalStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogicalStatus) { _cached_encoder_for_LogicalStatus = $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER); }
    return _cached_encoder_for_LogicalStatus(value, elGetter);
}


/* eslint-enable */
