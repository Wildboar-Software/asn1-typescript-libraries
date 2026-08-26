/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
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
 * @summary UsmSecurityParameters
 * @description
 *
 * User-based Security Model (USM) security parameters carried in the
 * SNMPv3 `msgSecurityParameters` OCTET STRING. That OCTET STRING's
 * value is the BER serialization of this SEQUENCE
 * ([RFC 3414 §2.4](https://datatracker.ietf.org/doc/html/rfc3414#section-2.4)).
 * The surrounding message format is defined by the version-specific
 * Message Processing Model (e.g. [RFC 3412](https://datatracker.ietf.org/doc/html/rfc3412)).
 *
 * The first four fields are global USM parameters (authoritative
 * engine identity and clocks, and the principal). The last two are
 * opaque to USM itself and are filled by the authentication and
 * privacy protocols selected for the user (`usmUserAuthProtocol` /
 * `usmUserPrivProtocol` in the `usmUserTable`).
 *
 * On receive, if `msgSecurityParameters` is not a BER OCTET STRING
 * whose contents decode as this SEQUENCE, `snmpInASNParseErrs` is
 * incremented and `parseError` is returned
 * ([RFC 3414 §3.2](https://datatracker.ietf.org/doc/html/rfc3414#section-3.2)
 * step 1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UsmSecurityParameters ::= SEQUENCE {
 *     -- global User-based security parameters
 *     msgAuthoritativeEngineID     OCTET STRING,
 *     msgAuthoritativeEngineBoots  INTEGER (0..2147483647),
 *     msgAuthoritativeEngineTime   INTEGER (0..2147483647),
 *     msgUserName                  OCTET STRING (SIZE(0..32)),
 *     -- authentication protocol specific parameters
 *     msgAuthenticationParameters  OCTET STRING,
 *     -- privacy protocol specific parameters
 *     msgPrivacyParameters         OCTET STRING }
 * ```
 *
 */
export
class UsmSecurityParameters {
    constructor (
        /**
         * @summary `msgAuthoritativeEngineID`.
         * @description
         *
         * `snmpEngineID` of the authoritative SNMP engine involved in
         * the exchange
         * ([RFC 3414 §2.4](https://datatracker.ietf.org/doc/html/rfc3414#section-2.4)).
         * In authenticated messages it defeats cross-engine replay
         * ([RFC 3414 §2.2.1](https://datatracker.ietf.org/doc/html/rfc3414#section-2.2.1)).
         *
         * For engineID discovery, a Request may use a zero-length
         * value with `noAuthNoPriv` and a zero-length `msgUserName`;
         * the Report reply carries the authoritative engine's ID here
         * ([RFC 3414 §4](https://datatracker.ietf.org/doc/html/rfc3414#section-4)).
         * An empty `securityEngineID` is likewise OK when preparing a
         * Request so the remote authoritative engine returns a Report
         * with the proper ID
         * ([RFC 3414 §3.1](https://datatracker.ietf.org/doc/html/rfc3414#section-3.1)
         * step 5).
         *
         * @public
         * @readonly
         */
        readonly msgAuthoritativeEngineID: OCTET_STRING,
        /**
         * @summary `msgAuthoritativeEngineBoots`.
         * @description
         *
         * `snmpEngineBoots` at the authoritative SNMP engine involved
         * in the exchange (range `0..2147483647`)
         * ([RFC 3414 §2.4](https://datatracker.ietf.org/doc/html/rfc3414#section-2.4)).
         * Together with `msgAuthoritativeEngineTime`, used in
         * authenticated messages to defeat replay of messages that
         * are no longer valid
         * ([RFC 3414 §2.2.2](https://datatracker.ietf.org/doc/html/rfc3414#section-2.2)).
         *
         * `snmpEngineBoots` counts reboots/re-initializations since
         * `snmpEngineID` was last configured. When local
         * `snmpEngineBoots` latches at `2147483647`, authenticated
         * messages always fail with `notInTimeWindow`. For time
         * synchronization after learning an engineID, an authenticated
         * discovery Request may set this field (and
         * `msgAuthoritativeEngineTime`) to zero
         * ([RFC 3414 §4](https://datatracker.ietf.org/doc/html/rfc3414#section-4)).
         *
         * @public
         * @readonly
         */
        readonly msgAuthoritativeEngineBoots: INTEGER,
        /**
         * @summary `msgAuthoritativeEngineTime`.
         * @description
         *
         * `snmpEngineTime` at the authoritative SNMP engine involved
         * in the exchange (range `0..2147483647`)
         * ([RFC 3414 §2.4](https://datatracker.ietf.org/doc/html/rfc3414#section-2.4)):
         * seconds since `snmpEngineBoots` was last incremented.
         *
         * Authenticated receive processing compares these clocks to
         * the local notion within the Time Window of **150 seconds**
         * for all users
         * ([RFC 3414 §2.2.3](https://datatracker.ietf.org/doc/html/rfc3414#section-2.2.3);
         * [§3.2](https://datatracker.ietf.org/doc/html/rfc3414#section-3.2)
         * step 7). Non-authoritative engines keep a loose sync of
         * boots/time (and `latestReceivedEngineTime`) per
         * authoritative `snmpEngineID`
         * ([RFC 3414 §2.3](https://datatracker.ietf.org/doc/html/rfc3414#section-2.3)).
         *
         * @public
         * @readonly
         */
        readonly msgAuthoritativeEngineTime: INTEGER,
        /**
         * @summary `msgUserName`.
         * @description
         *
         * User (principal) on whose behalf the message is exchanged
         * (`OCTET STRING (SIZE(0..32))`)
         * ([RFC 3414 §2.4](https://datatracker.ietf.org/doc/html/rfc3414#section-2.4)).
         * A zero-length value does not match any user, but is used for
         * `snmpEngineID` discovery
         * ([RFC 3414 §4](https://datatracker.ietf.org/doc/html/rfc3414#section-4)).
         * Authenticated discovery after the engineID is known requires
         * a valid (non-empty) user name. On receive, unknown users
         * increment `usmStatsUnknownUserNames`
         * ([RFC 3414 §3.2](https://datatracker.ietf.org/doc/html/rfc3414#section-3.2)
         * step 4).
         *
         * @public
         * @readonly
         */
        readonly msgUserName: OCTET_STRING,
        /**
         * @summary `msgAuthenticationParameters`.
         * @description
         *
         * Authentication-protocol-specific parameters, as defined by
         * the user's `usmUserAuthProtocol`
         * ([RFC 3414 §2.4](https://datatracker.ietf.org/doc/html/rfc3414#section-2.4)).
         * When the message is not authenticated, a zero-length OCTET
         * STRING is encoded here
         * ([RFC 3414 §3.1](https://datatracker.ietf.org/doc/html/rfc3414#section-3.1)
         * step 8b).
         *
         * For the HMAC-MD5-96 and HMAC-SHA-96 protocols defined in this
         * RFC, the value is the serialized OCTET STRING of the first
         * **12** octets of the HMAC output over `wholeMsg`
         * ([RFC 3414 §6.2.3](https://datatracker.ietf.org/doc/html/rfc3414#section-6.2.3),
         * [§7.2.3](https://datatracker.ietf.org/doc/html/rfc3414#section-7.2.3)).
         *
         * @public
         * @readonly
         */
        readonly msgAuthenticationParameters: OCTET_STRING,
        /**
         * @summary `msgPrivacyParameters`.
         * @description
         *
         * Privacy-protocol-specific parameters, as defined by the
         * user's `usmUserPrivProtocol`
         * ([RFC 3414 §2.4](https://datatracker.ietf.org/doc/html/rfc3414#section-2.4)).
         * When the message is not protected from disclosure, a
         * zero-length OCTET STRING is encoded here
         * ([RFC 3414 §3.1](https://datatracker.ietf.org/doc/html/rfc3414#section-3.1)
         * step 4b).
         *
         * For the CBC-DES privacy protocol in this RFC, the value is
         * the serialized OCTET STRING of the 8-octet "salt" used to
         * form the IV
         * ([RFC 3414 §8.2.3](https://datatracker.ietf.org/doc/html/rfc3414#section-8.2.3)).
         *
         * @public
         * @readonly
         */
        readonly msgPrivacyParameters: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a UsmSecurityParameters
     * @description
     * 
     * This takes an `object` and converts it to a `UsmSecurityParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UsmSecurityParameters`.
     * @returns {UsmSecurityParameters}
     */
    public static _from_object (_o: { [_K in keyof (UsmSecurityParameters)]: (UsmSecurityParameters)[_K] }): UsmSecurityParameters {
        return new UsmSecurityParameters(_o.msgAuthoritativeEngineID, _o.msgAuthoritativeEngineBoots, _o.msgAuthoritativeEngineTime, _o.msgUserName, _o.msgAuthenticationParameters, _o.msgPrivacyParameters);
    }


}


/**
 * @summary The Leading Root Component Types of UsmSecurityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UsmSecurityParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("msgAuthoritativeEngineID", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("msgAuthoritativeEngineBoots", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("msgAuthoritativeEngineTime", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("msgUserName", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("msgAuthenticationParameters", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("msgPrivacyParameters", false, $.hasTag(_TagClass.universal, 4))
];


/**
 * @summary The Trailing Root Component Types of UsmSecurityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UsmSecurityParameters: $.ComponentSpec[] = [
    
];


/**
 * @summary The Extension Addition Component Types of UsmSecurityParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UsmSecurityParameters: $.ComponentSpec[] = [
    
];


let _cached_decoder_for_UsmSecurityParameters: $.ASN1Decoder<UsmSecurityParameters> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) UsmSecurityParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {UsmSecurityParameters} The decoded data structure.
 */
export
function _decode_UsmSecurityParameters (el: _Element): UsmSecurityParameters {
    if (!_cached_decoder_for_UsmSecurityParameters) { _cached_decoder_for_UsmSecurityParameters = function (el: _Element): UsmSecurityParameters {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 6) {
        throw new _ConstructionError("UsmSecurityParameters contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "msgAuthoritativeEngineID";
    sequence[1].name = "msgAuthoritativeEngineBoots";
    sequence[2].name = "msgAuthoritativeEngineTime";
    sequence[3].name = "msgUserName";
    sequence[4].name = "msgAuthenticationParameters";
    sequence[5].name = "msgPrivacyParameters";
    let msgAuthoritativeEngineID!: OCTET_STRING;
    let msgAuthoritativeEngineBoots!: INTEGER;
    let msgAuthoritativeEngineTime!: INTEGER;
    let msgUserName!: OCTET_STRING;
    let msgAuthenticationParameters!: OCTET_STRING;
    let msgPrivacyParameters!: OCTET_STRING;
    msgAuthoritativeEngineID = $._decodeOctetString(sequence[0]);
    msgAuthoritativeEngineBoots = $._decodeInteger(sequence[1]);
    msgAuthoritativeEngineTime = $._decodeInteger(sequence[2]);
    msgUserName = $._decodeOctetString(sequence[3]);
    msgAuthenticationParameters = $._decodeOctetString(sequence[4]);
    msgPrivacyParameters = $._decodeOctetString(sequence[5]);
    return new UsmSecurityParameters(
        msgAuthoritativeEngineID,
        msgAuthoritativeEngineBoots,
        msgAuthoritativeEngineTime,
        msgUserName,
        msgAuthenticationParameters,
        msgPrivacyParameters,

    );
}; }
    return _cached_decoder_for_UsmSecurityParameters(el);
}


let _cached_encoder_for_UsmSecurityParameters: $.ASN1Encoder<UsmSecurityParameters> | null = null;


/**
 * @summary Encodes a(n) UsmSecurityParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UsmSecurityParameters, encoded as an ASN.1 Element.
 */
export
function _encode_UsmSecurityParameters (value: UsmSecurityParameters, elGetter: $.ASN1Encoder<UsmSecurityParameters>): _Element {
    if (!_cached_encoder_for_UsmSecurityParameters) { _cached_encoder_for_UsmSecurityParameters = function (value: UsmSecurityParameters): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.msgAuthoritativeEngineID, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.msgAuthoritativeEngineBoots, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.msgAuthoritativeEngineTime, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.msgUserName, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.msgAuthenticationParameters, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.msgPrivacyParameters, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UsmSecurityParameters(value, elGetter);
}


/* eslint-enable */
