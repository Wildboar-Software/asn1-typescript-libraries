/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary MonitorStart
 * @description
 * Capability bitmap for the Monitor Start service (ECMA-269 C.3.2, ECMA-285
 * §9.10). Presence of this entry in `MonitoringServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorStart  ::=  BIT STRING
 * {     monitorObjectDevice             ( 0),     -- optional parameters
 *     monitorObjectCall             ( 1),     -- optional parameters
 *     requestedMonitorFilter             ( 2),     -- optional parameters
 *     monitorTypeCall             ( 3),     -- optional parameters
 *     monitorTypeDevice             ( 4),     -- optional parameters
 *     monitorMediaClassParameter         ( 5),     -- optional parameters
 *     monitorMediaClassAudio             ( 6),     -- optional parameters
 *     monitorMediaClassData             ( 7),     -- optional parameters
 *     monitorMediaClassImage             ( 8),     -- optional parameters
 *     monitorMediaClassVoice             ( 9),     -- optional parameters
 *     monitorMediaClassChat            (15),     -- optional parameters
 *     monitorMediaClassEmail            (16),     -- optional parameters
 *     monitorMediaClassMessage        (17),     -- optional parameters
 *     monitorMediaClassIM            (18),     -- optional parameters
 *     monitorMediaClassSMS            (19),     -- optional parameters
 *     monitorMediaClassMMS            (20),     -- optional parameters
 *     monitorExistingCallsInAck         (10),     -- optional parameters
 *     privateDataInAck             (11),     -- optional parameters
 *     callIDOnly                 (12),     -- miscellaneous characteristics
 *     swDomainDefaultForMonitorTypeIsDevice     (13),     -- miscellaneous characteristics
 *     acceptsMonitorStartWhileOOS         (14) }
 * ```
 */
export
type MonitorStart = BIT_STRING;

/**
 * @summary MonitorStart_monitorObjectDevice
 * @constant
 * @description
 * Bit set means the SF supports `monitorObject` value device (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorObjectDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary monitorObjectDevice
 * @constant
 * @description
 * Alias of `MonitorStart_monitorObjectDevice`.
 */
export
const monitorObjectDevice: number = MonitorStart_monitorObjectDevice; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorObjectCall
 * @constant
 * @description
 * Bit set means the SF supports `monitorObject` value call (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorObjectCall: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary monitorObjectCall
 * @constant
 * @description
 * Alias of `MonitorStart_monitorObjectCall`.
 */
export
const monitorObjectCall: number = MonitorStart_monitorObjectCall; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_requestedMonitorFilter
 * @constant
 * @description
 * Bit set means the SF supports the optional `requestedMonitorFilter` parameter
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_requestedMonitorFilter: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary requestedMonitorFilter
 * @constant
 * @description
 * Alias of `MonitorStart_requestedMonitorFilter`.
 */
export
const requestedMonitorFilter: number = MonitorStart_requestedMonitorFilter; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorTypeCall
 * @constant
 * @description
 * Bit set means the SF supports `monitorType` value call-type (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorTypeCall: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary monitorTypeCall
 * @constant
 * @description
 * Alias of `MonitorStart_monitorTypeCall`.
 */
export
const monitorTypeCall: number = MonitorStart_monitorTypeCall; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorTypeDevice
 * @constant
 * @description
 * Bit set means the SF supports `monitorType` value device-type (ECMA-269
 * C.3.2).
 */
export
const MonitorStart_monitorTypeDevice: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary monitorTypeDevice
 * @constant
 * @description
 * Alias of `MonitorStart_monitorTypeDevice`.
 */
export
const monitorTypeDevice: number = MonitorStart_monitorTypeDevice; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassParameter
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorMediaClassParameter: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassParameter
 * @constant
 * @description
 * Alias of `MonitorStart_monitorMediaClassParameter`.
 */
export
const monitorMediaClassParameter: number = MonitorStart_monitorMediaClassParameter; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassAudio
 * @constant
 * @description
 * Bit set means the SF supports `requestedMonitorMediaClass` value `audio`
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorMediaClassAudio: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassAudio
 * @constant
 * @description
 * Alias of `MonitorStart_monitorMediaClassAudio`.
 */
export
const monitorMediaClassAudio: number = MonitorStart_monitorMediaClassAudio; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassData
 * @constant
 * @description
 * Bit set means the SF supports `requestedMonitorMediaClass` value `data`
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorMediaClassData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassData
 * @constant
 * @description
 * Alias of `MonitorStart_monitorMediaClassData`.
 */
export
const monitorMediaClassData: number = MonitorStart_monitorMediaClassData; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassImage
 * @constant
 * @description
 * Bit set means the SF supports `requestedMonitorMediaClass` value `image`
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorMediaClassImage: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassImage
 * @constant
 * @description
 * Alias of `MonitorStart_monitorMediaClassImage`.
 */
export
const monitorMediaClassImage: number = MonitorStart_monitorMediaClassImage; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassVoice
 * @constant
 * @description
 * Bit set means the SF supports `requestedMonitorMediaClass` value `voice`
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorMediaClassVoice: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassVoice
 * @constant
 * @description
 * Alias of `MonitorStart_monitorMediaClassVoice`.
 */
export
const monitorMediaClassVoice: number = MonitorStart_monitorMediaClassVoice; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassChat
 * @constant
 * @description
 * Bit set means the SF supports `requestedMonitorMediaClass` value `chat`
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorMediaClassChat: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassChat
 * @constant
 * @description
 * Alias of `MonitorStart_monitorMediaClassChat`.
 */
export
const monitorMediaClassChat: number = MonitorStart_monitorMediaClassChat; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassEmail
 * @constant
 * @description
 * Bit set means the SF supports `requestedMonitorMediaClass` value `email`
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorMediaClassEmail: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassEmail
 * @constant
 * @description
 * Alias of `MonitorStart_monitorMediaClassEmail`.
 */
export
const monitorMediaClassEmail: number = MonitorStart_monitorMediaClassEmail; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassMessage
 * @constant
 * @description
 * Bit set means the SF supports `requestedMonitorMediaClass` value `message`
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorMediaClassMessage: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassMessage
 * @constant
 * @description
 * Alias of `MonitorStart_monitorMediaClassMessage`.
 */
export
const monitorMediaClassMessage: number = MonitorStart_monitorMediaClassMessage; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassIM
 * @constant
 * @description
 * Bit set means the SF supports `requestedMonitorMediaClass` value `im`
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorMediaClassIM: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassIM
 * @constant
 * @description
 * Alias of `MonitorStart_monitorMediaClassIM`.
 */
export
const monitorMediaClassIM: number = MonitorStart_monitorMediaClassIM; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassSMS
 * @constant
 * @description
 * Bit set means the SF supports `requestedMonitorMediaClass` value `sms`
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorMediaClassSMS: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassSMS
 * @constant
 * @description
 * Alias of `MonitorStart_monitorMediaClassSMS`.
 */
export
const monitorMediaClassSMS: number = MonitorStart_monitorMediaClassSMS; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorMediaClassMMS
 * @constant
 * @description
 * Bit set means the SF supports `requestedMonitorMediaClass` value `mms`
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorMediaClassMMS: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary monitorMediaClassMMS
 * @constant
 * @description
 * Alias of `MonitorStart_monitorMediaClassMMS`.
 */
export
const monitorMediaClassMMS: number = MonitorStart_monitorMediaClassMMS; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_monitorExistingCallsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `monitorExistingCalls` in the
 * acknowledgement (ECMA-269 C.3.2).
 */
export
const MonitorStart_monitorExistingCallsInAck: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary monitorExistingCallsInAck
 * @constant
 * @description
 * Alias of `MonitorStart_monitorExistingCallsInAck`.
 */
export
const monitorExistingCallsInAck: number = MonitorStart_monitorExistingCallsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_privateDataInAck: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `MonitorStart_privateDataInAck`.
 */
export
const privateDataInAck: number = MonitorStart_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_callIDOnly
 * @constant
 * @description
 * Bit set means the SF supports CallID-only ConnectionIDs for this service
 * (ECMA-269 C.3.2).
 */
export
const MonitorStart_callIDOnly: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary callIDOnly
 * @constant
 * @description
 * Alias of `MonitorStart_callIDOnly`.
 */
export
const callIDOnly: number = MonitorStart_callIDOnly; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_swDomainDefaultForMonitorTypeIsDevice
 * @constant
 * @description
 * Bit set means the SF supports SF default monitor-type is device-type (FALSE
 * means call-type) (ECMA-269 C.3.2).
 */
export
const MonitorStart_swDomainDefaultForMonitorTypeIsDevice: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary swDomainDefaultForMonitorTypeIsDevice
 * @constant
 * @description
 * Alias of `MonitorStart_swDomainDefaultForMonitorTypeIsDevice`.
 */
export
const swDomainDefaultForMonitorTypeIsDevice: number = MonitorStart_swDomainDefaultForMonitorTypeIsDevice; /* SHORT_NAMED_BIT */

/**
 * @summary MonitorStart_acceptsMonitorStartWhileOOS
 * @constant
 * @description
 * Bit set means the SF supports Monitor Start on a device that is out of
 * service (ECMA-269 C.3.2).
 */
export
const MonitorStart_acceptsMonitorStartWhileOOS: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary acceptsMonitorStartWhileOOS
 * @constant
 * @description
 * Alias of `MonitorStart_acceptsMonitorStartWhileOOS`.
 */
export
const acceptsMonitorStartWhileOOS: number = MonitorStart_acceptsMonitorStartWhileOOS; /* SHORT_NAMED_BIT */

let _cached_decoder_for_MonitorStart: $.ASN1Decoder<MonitorStart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorStart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorStart (el: _Element): MonitorStart {
    if (!_cached_decoder_for_MonitorStart) { _cached_decoder_for_MonitorStart = $._decodeBitString; }
    return _cached_decoder_for_MonitorStart(el);
}

let _cached_encoder_for_MonitorStart: $.ASN1Encoder<MonitorStart> | null = null;

/**
 * @summary Encodes a(n) MonitorStart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorStart, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorStart (value: MonitorStart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorStart) { _cached_encoder_for_MonitorStart = $._encodeBitString; }
    return _cached_encoder_for_MonitorStart(value, elGetter);
}


/* eslint-enable */
