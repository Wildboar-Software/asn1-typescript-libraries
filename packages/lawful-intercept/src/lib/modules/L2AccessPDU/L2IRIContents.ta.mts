/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary L2IRIContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * L2IRIContents ::= SEQUENCE
 * {
 *     accessEventType             [0] AccessEventType,
 *     internetAccessType          [2] InternetAccessType OPTIONAL,
 *     targetNetworkID             [5] UTF8String (SIZE (1..128)) OPTIONAL,
 *         -- Target network ID (e.g. MAC address, PSTN number, additional information from
 *         -- network elements)
 *     targetCPEID                 [6] UTF8String (SIZE (1..128)) OPTIONAL,
 *         -- CPEID (e.g. Relay Agent info, computer name)
 *     targetLocation              [7] UTF8String (SIZE (1..64))OPTIONAL,
 *         -- <for further study>
 *     nASPortNumber               [8] INTEGER (0..4294967295) OPTIONAL,
 *         -- The NAS port number used by the target
 *     callBackNumber              [9] UTF8String (SIZE (1..20)) OPTIONAL,
 *         -- The number used to call-back the target
 *     startTime                   [10] GeneralizedTime OPTIONAL,
 *         -- The start date-time of the session or lease
 *     endTime                     [11] GeneralizedTime OPTIONAL,
 *             -- The end date-time of the session or lease
 *     endReason                   [12] EndReason OPTIONAL,
 *         -- The reason for the session to end
 *     octetsReceived              [13]    INTEGER (0..18446744073709551615) OPTIONAL,
 *         -- The number of octets the target received
 *     octetsTransmitted           [14]    INTEGER (0..18446744073709551615) OPTIONAL,
 *         -- The number of octets the target transmitted
 *     rawAAAData                  [15]    OCTET STRING OPTIONAL,
 *         -- Content of the raw AAA record
 *     ...,
 *     authenticationType          [16] AuthenticationType OPTIONAL
 *         -- Field used to identify the authentication type to assist with LEMF data validation
 * }
 * 
 * AccessEventType         ::= ENUMERATED
 * {
 *     accessAttempt(0),
 *         -- A target requests access to the IAS
 *     accessAccept(1),
 *         -- IAS access is granted to the target, the session begins
 *     accessReject(2),
 *         -- IAS access is refused to the target
 *     accessFailed(3),
 *         -- The accessAttempt timed-out or failed otherwise
 *     sessionStart(4),
 *         -- A target starts using the IAS; not in use anymore from version 4(4).
 *     sessionEnd(5),
 *         -- A target stops using the IAS; not in use anymore from version 4(4).
 *     interimUpdate(6),
 *         -- Intermediate status report on service status or usage
 *     unknown(7),
 *     ...,
 *     startOfInterceptionWithSessionActive(8),
 *         -- LI is started on a target who already has an active session
 *     accessEnd(9),
 *         -- A target stops using the IAS, the session ends.
 *     endOfInterceptionWithSessionActive(10),
 *         -- LI is ended on a target who still has an active session
 *     startOfInterceptionWithoutNetworkSession(11),
 *         -- Start of LI session without a network session
 *     endOfInterceptionWithoutNetworkSession(12),
 *         -- End of LI session without a network session
 *     sessionExpired(13)
 *         -- LI session terminated due to expiry by MF
 * }
 * 
 * InternetAccessType      ::= ENUMERATED
 * {
 *     undefined(0),
 *     dialUp(1),
 *         -- IAS via DialUp access
 *     xDSL(2),
 *         -- IAS via DSL access
 *     cableModem(3),
 *         -- IAS via Cable access
 *     lAN(4),
 *         -- IAS via LAN access
 *     ...,
 *     wirelessLAN(5),
 *         -- IAS via Wireless LAN access
 *     fTTx(6),
 *         -- IAS via Fiber access
 *     wIMAX-HIPERMAN(7),
 *         -- IAS via WIMAX/HIPERMAN (fixed access)
 *     satellite(8)
 *         -- IAS via Satellite access
 *         -- (when it is not covered by any 3GPP or ETSI mobile Lawful Interception specifications)
 * }
 * 
 * EndReason           ::= ENUMERATED
 * {
 *     undefined(0),
 *     regularLogoff(1),
 *         -- The target logged off
 *     connectionLoss(2),
 *         -- The connection was lost
 *     connectionTimeout(3),
 *         -- The connection timed-out
 *     leaseExpired(4),
 *         -- The DHCP lease expired
 *     ...
 * }
 * 
 * AuthenticationType ::= ENUMERATED
 * {
 *     unknown(0),
 *         -- AAA function for the target service is unknown
 *     static(1),
 *         -- The target service is assigned a static IP address & no AAA expected
 *     radiusAAA(2),
 *         -- AAA function for the target service is provided by RADIUS
 *     dhcpAAA(3),
 *         -- AAA function for the target service is provided by DHCP
 *     diameterAAA(4),
 *         -- AAA function for the target service is provided by DIAMETER
 *     ...
 * }
 * 
 * 
 * -- =====================================================
 * -- Intercept-related information for IRI-Only intercepts
 * -- =====================================================
 * 
 * L2IRIOnly       ::= SEQUENCE
 * {
 *     l2IRIOnlyObjId                  [0] RELATIVE-OID,
 *     l2protocolInformation       [2] L2ProtocolInformation,
 *     l2AggregatedNbrOfPackets    [3] INTEGER OPTIONAL,
 *     l2AggregatedNbrOfBytes      [4] INTEGER OPTIONAL,
 *     ...
 * }
 * 
 * L2ProtocolInformation       ::= ENUMERATED
 * {
 *     l2ProtocolL2tp(1),
 *         -- The L2TP protocol is used
 *     l2ProtocolL2f(2),
 *         -- The L2F protocol is used
 *     l2ProtocolPptp(3),
 *         -- The PPTP protocol is used
 *     l2ProtocolPpp(4),
 *         -- The PPP protocol is used
 *     ethernetProtocol(5),
 *         -- The ethernet protocol is used
 *     undefined(6),
 *     ...,
 *     l2ProtocolATM2684(7),
 *         -- The protocol RFC 2684, method "LLC Encapsulation for Bridged Protocols" [16] is used
 *     l2ProtocolFR2427(8)
 *         -- The protocol RFC2427 "Multiprotocol Interconnect over Frame Relay" [18] is used
 * }
 * 
 * END -- end of L2AccessPDU
 * ```
 * 
 * @class
 */
export
class L2IRIContents {
    /**
     * @summary `accessEventType`.
     * @public
     * @readonly
     */
    readonly accessEventType: AccessEventType;
    /**
     * @summary `internetAccessType`.
     * @public
     * @readonly
     */
    readonly internetAccessType: OPTIONAL<InternetAccessType>;
    /**
     * @summary `targetNetworkID`.
     * @public
     * @readonly
     */
    readonly targetNetworkID: OPTIONAL<UTF8String>;
    /**
     * @summary `targetCPEID`.
     * @public
     * @readonly
     */
    readonly targetCPEID: OPTIONAL<UTF8String>;
    /**
     * @summary `targetLocation`.
     * @public
     * @readonly
     */
    readonly targetLocation: UTF8String;

    constructor (
        accessEventType: AccessEventType,
        internetAccessType: OPTIONAL<InternetAccessType>,
        targetNetworkID: OPTIONAL<UTF8String>,
        targetCPEID: OPTIONAL<UTF8String>,
        targetLocation: UTF8String
    ) {
        this.accessEventType = accessEventType;
        this.internetAccessType = internetAccessType;
        this.targetNetworkID = targetNetworkID;
        this.targetCPEID = targetCPEID;
        this.targetLocation = targetLocation;
    }

    /**
     * @summary Restructures an object into a L2IRIContents
     * @description
     * 
     * This takes an `object` and converts it to a `L2IRIContents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `L2IRIContents`.
     * @returns {L2IRIContents}
     */
    public static _from_object (_o: { [_K in keyof (L2IRIContents)]: (L2IRIContents)[_K] }): L2IRIContents {
        return new L2IRIContents(_o.accessEventType, _o.internetAccessType, _o.targetNetworkID, _o.targetCPEID, _o.targetLocation);
    }


}

/**
 * @summary The Leading Root Component Types of L2IRIContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_L2IRIContents: $.ComponentSpec[] = [
    /* FIXME: accessEventType COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: internetAccessType COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("targetNetworkID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("targetCPEID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("targetLocation", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of L2IRIContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_L2IRIContents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of L2IRIContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_L2IRIContents: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_L2IRIContents: $.ASN1Decoder<L2IRIContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) L2IRIContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_L2IRIContents (el: _Element): L2IRIContents {
    if (!_cached_decoder_for_L2IRIContents) { _cached_decoder_for_L2IRIContents = function (el: _Element): L2IRIContents {
    let accessEventType!: AccessEventType;
    let internetAccessType: OPTIONAL<InternetAccessType>;
    let targetNetworkID: OPTIONAL<UTF8String>;
    let targetCPEID: OPTIONAL<UTF8String>;
    let targetLocation!: UTF8String;
    const callbacks: $.DecodingMap = {
        "accessEventType": (_el: _Element): void => { accessEventType = $._decode_implicit<AccessEventType>(() => _decode_AccessEventType)(_el); },
        "internetAccessType": (_el: _Element): void => { internetAccessType = $._decode_implicit<InternetAccessType>(() => _decode_InternetAccessType)(_el); },
        "targetNetworkID": (_el: _Element): void => { targetNetworkID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "targetCPEID": (_el: _Element): void => { targetCPEID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "targetLocation": (_el: _Element): void => { targetLocation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_L2IRIContents,
        _extension_additions_list_spec_for_L2IRIContents,
        _root_component_type_list_2_spec_for_L2IRIContents,
        undefined,
    );
    return new L2IRIContents(
        accessEventType,
        internetAccessType,
        targetNetworkID,
        targetCPEID,
        targetLocation
    );
}; }
    return _cached_decoder_for_L2IRIContents(el);
}

let _cached_encoder_for_L2IRIContents: $.ASN1Encoder<L2IRIContents> | null = null;

/**
 * @summary Encodes a(n) L2IRIContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The L2IRIContents, encoded as an ASN.1 Element.
 */
export
function _encode_L2IRIContents (value: L2IRIContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_L2IRIContents) { _cached_encoder_for_L2IRIContents = function (value: L2IRIContents, elGetter: $.ASN1Encoder<L2IRIContents>): _Element {
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AccessEventType, $.BER)(value.accessEventType, $.BER);
    if (value.internetAccessType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternetAccessType, $.BER)(value.internetAccessType, $.BER);
    }
    if (value.targetNetworkID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.targetNetworkID, $.BER);
    }
    if (value.targetCPEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.targetCPEID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.targetLocation, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_L2IRIContents(value, elGetter);
}


/* eslint-enable */
