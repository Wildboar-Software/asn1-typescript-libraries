/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ParticipantActionType
 * @description
 *
 * What a participant did in a CONF supplementary service, timestamped
 * by `changeTime` on `SupplService`. CREATE is the start of the
 * conference. QUIT with a participant count of zero is the end.
 * The charging information names the invited-into-conference action
 * INVITE_CONF. Obtained from the Participants-Action-Type AVP.
 *
 * 3GPP TS 32.275 V19.0.0 clause 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.5.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipantActionType  ::=  ENUMERATED {
 *    cREATE-CONF          ( 0 ),
 *    jOIN-CONF            ( 1 ),
 *    iNVITED-INTO-CONF    ( 2 ),
 *    qUIT-CONF            ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ParticipantActionType {
    cREATE_CONF = 0,
    jOIN_CONF = 1,
    iNVITED_INTO_CONF = 2,
    qUIT_CONF = 3,
}

/**
 * @summary ParticipantActionType
 * @description
 *
 * What a participant did in a CONF supplementary service, timestamped
 * by `changeTime` on `SupplService`. CREATE is the start of the
 * conference. QUIT with a participant count of zero is the end.
 * The charging information names the invited-into-conference action
 * INVITE_CONF. Obtained from the Participants-Action-Type AVP.
 *
 * 3GPP TS 32.275 V19.0.0 clause 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.5.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipantActionType  ::=  ENUMERATED {
 *    cREATE-CONF          ( 0 ),
 *    jOIN-CONF            ( 1 ),
 *    iNVITED-INTO-CONF    ( 2 ),
 *    qUIT-CONF            ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ParticipantActionType = _enum_for_ParticipantActionType;

/**
 * @summary ParticipantActionType
 * @description
 *
 * What a participant did in a CONF supplementary service, timestamped
 * by `changeTime` on `SupplService`. CREATE is the start of the
 * conference. QUIT with a participant count of zero is the end.
 * The charging information names the invited-into-conference action
 * INVITE_CONF. Obtained from the Participants-Action-Type AVP.
 *
 * 3GPP TS 32.275 V19.0.0 clause 6.3.1.2.
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.5.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParticipantActionType  ::=  ENUMERATED {
 *    cREATE-CONF          ( 0 ),
 *    jOIN-CONF            ( 1 ),
 *    iNVITED-INTO-CONF    ( 2 ),
 *    qUIT-CONF            ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ParticipantActionType: typeof _enum_for_ParticipantActionType = _enum_for_ParticipantActionType;

/**
 * @summary ParticipantActionType_cREATE_CONF
 * @description
 *
 * The user creates the conference. `changeTime` is the start time.
 * Offline charging sends Charging Data Request [Start] or [Event]
 * after the CONF AS allocates the conference URI. Online event
 * charging with unit reservation grants units for creation and
 * ends credit-control with [Terminate] on success. Online session
 * charging keeps the session open and continues with [Update].
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.2.2.1.11.1, 5.3.2.1.4.1 and
 * 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ParticipantActionType_cREATE_CONF: _enum_for_ParticipantActionType.cREATE_CONF = ParticipantActionType.cREATE_CONF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cREATE_CONF
 * @description
 *
 * The user creates the conference. See
 * {@link ParticipantActionType_cREATE_CONF}.
 *
 * @constant
 * @type {number}
 */
export
const cREATE_CONF: _enum_for_ParticipantActionType.cREATE_CONF = ParticipantActionType.cREATE_CONF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipantActionType_jOIN_CONF
 * @description
 *
 * A user joins an existing conference. Offline charging sends
 * Charging Data Request [Interim] or [Event]. Online session
 * charging sends Reserve Units [Update] when the new number of
 * participants is required for charging.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.2.2.1.11.2, 5.3.2.1.4.3 and
 * 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ParticipantActionType_jOIN_CONF: _enum_for_ParticipantActionType.jOIN_CONF = ParticipantActionType.jOIN_CONF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary jOIN_CONF
 * @description
 *
 * A user joins an existing conference. See
 * {@link ParticipantActionType_jOIN_CONF}.
 *
 * @constant
 * @type {number}
 */
export
const jOIN_CONF: _enum_for_ParticipantActionType.jOIN_CONF = ParticipantActionType.jOIN_CONF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipantActionType_iNVITED_INTO_CONF
 * @description
 *
 * A user is invited into an existing conference. TS 32.275 names
 * this action INVITE_CONF. Offline charging sends Charging Data
 * Request [Interim] or [Event] after the invited user answers.
 * Online session charging sends Reserve Units [Update] with the
 * new number of participants.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.2.2.1.11.3, 5.3.2.1.4.4 and
 * 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ParticipantActionType_iNVITED_INTO_CONF: _enum_for_ParticipantActionType.iNVITED_INTO_CONF = ParticipantActionType.iNVITED_INTO_CONF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iNVITED_INTO_CONF
 * @description
 *
 * A user is invited into an existing conference. See
 * {@link ParticipantActionType_iNVITED_INTO_CONF}.
 *
 * @constant
 * @type {number}
 */
export
const iNVITED_INTO_CONF: _enum_for_ParticipantActionType.iNVITED_INTO_CONF = ParticipantActionType.iNVITED_INTO_CONF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ParticipantActionType_qUIT_CONF
 * @description
 *
 * A user leaves the conference. If `numberOfParticipants` is 0,
 * `changeTime` is the end of the conference. Offline charging
 * sends [Interim] or [Event] while the conference continues, and
 * [Stop] or [Event] when the last online user leaves and the
 * conference terminates. Online session charging sends [Update]
 * if the conference continues and [Terminate] if this departure
 * ends it.
 *
 * 3GPP TS 32.275 V19.0.0 clauses 5.2.2.1.11.4, 5.3.2.1.4.5 and
 * 6.3.1.2.
 *
 * @constant
 * @type {number}
 */
export
const ParticipantActionType_qUIT_CONF: _enum_for_ParticipantActionType.qUIT_CONF = ParticipantActionType.qUIT_CONF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary qUIT_CONF
 * @description
 *
 * A user leaves the conference. See
 * {@link ParticipantActionType_qUIT_CONF}.
 *
 * @constant
 * @type {number}
 */
export
const qUIT_CONF: _enum_for_ParticipantActionType.qUIT_CONF = ParticipantActionType.qUIT_CONF; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ParticipantActionType: $.ASN1Decoder<ParticipantActionType> = $._decodeEnumerated;

export
const _encode_ParticipantActionType: $.ASN1Encoder<ParticipantActionType> = $._encodeEnumerated;

/* eslint-enable */
