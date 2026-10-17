/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../HI2Operations/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../HI2Operations/CallingPartyNumber.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../HI2Operations/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../HI2Operations/CalledPartyNumber.ta.mjs";
import { PartyInformation_partyIdentity_party_Validity, _decode_PartyInformation_partyIdentity_party_Validity, _encode_PartyInformation_partyIdentity_party_Validity, _enum_for_PartyInformation_partyIdentity_party_Validity } from "../HI2Operations/PartyInformation-partyIdentity-party-Validity.ta.mjs";
// export { PartyInformation_partyIdentity_party_Validity, _enum_for_PartyInformation_partyIdentity_party_Validity, PartyInformation_partyIdentity_party_Validity_trusted /* IMPORTED_LONG_ENUMERATION_ITEM */, trusted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartyInformation_partyIdentity_party_Validity_untrusted /* IMPORTED_LONG_ENUMERATION_ITEM */, untrusted /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartyInformation_partyIdentity_party_Validity_operator_added /* IMPORTED_LONG_ENUMERATION_ITEM */, operator_added /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PartyInformation_partyIdentity_party_Validity, _encode_PartyInformation_partyIdentity_party_Validity } from "../HI2Operations/PartyInformation-partyIdentity-party-Validity.ta.mjs";


/**
 * @summary PartyInformation_partyIdentity
 * @description
 * 
 * Identities of one party on an IRI record, taken from the signalling protocol
 * when they appear. An identical value need not be repeated. Formats follow
 * ISUP, DSS1, or MAP as named on each component. An alphanumeric identity is
 * allowed only when the underlying protocol marks the party identifier as
 * alphanumeric.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-partyIdentity ::= SEQUENCE {
 *     imei                [1] OCTET STRING (SIZE (8)) OPTIONAL,
 *     -- See MAP format TS GSM 09.02 [32]
 *     tei                    [2] OCTET STRING (SIZE (1..15)) OPTIONAL,
 *     -- ISDN-based Terminal Equipment Identity
 *     imsi                [3] OCTET STRING (SIZE (3..8)) OPTIONAL,
 *     -- See MAP format TS GSM 09.02 [32] International Mobile
 *     -- Station Identity E.212 number beginning with Mobile Country Code
 *     callingPartyNumber    [4] CallingPartyNumber OPTIONAL,
 *     -- The calling party format is used to transmit the identity of a calling party
 *     calledPartyNumber    [5] CalledPartyNumber OPTIONAL,
 *     -- The called party format is used to transmit the identity of a called party or
 *     -- a forwarded to party.
 *     msISDN                [6] OCTET STRING (SIZE (1..9)) OPTIONAL,
 *     -- MSISDN of the target, encoded in the same format as the AddressString
 *     -- parameters defined in MAP format TS GSM 09.02 [32]
 *     ...,
 *     e164-Format            [7] OCTET STRING (SIZE (1..25)) OPTIONAL,
 *     -- E164 address of the node in international format. Coded in the same format as
 *     -- the calling party number parameter of the ISUP (parameter part: EN 300 356 [5])
 *     sip-uri                [8] OCTET STRING OPTIONAL,
 *     -- Session Initiation Protocol - Uniform Resource Identifier. See RFC 3261 [59].
 *     -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     tel-url                [9] OCTET STRING OPTIONAL,
 *     -- See "URLs for Telephone Calls", RFC 3966 [68].
 *     -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     party-Validity        [10] ENUMERATED
 *     {
 *         trusted(0),
 *         -- The operator has assured the party identity
 *         untrusted(1),
 *         -- The operator does not assure the party identity
 *         operator-added(2),
 *         -- The party identity is added by the operator, e.g. the roaming number
 *         ...
 *     }
 *     OPTIONAL,
 *     alphanumeric    [11] UTF8String OPTIONAL
 *     -- see clause A.3.3 on usage of this parameter
 * }
 * ```
 * 
 * @class
 */
export
class PartyInformation_partyIdentity {
    /**
     * @summary `imei`.
     * @description
     *
     * IMEI of the target, MAP format (TS GSM 09.02), eight octets. For GSM it
     * is checked for each call over the radio interface. Interception based on
     * IMEI can delay the start of interception at the beginning of a call, and
     * non-call-related events cannot be intercepted that way.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause A.8.1, clause
     * A.8.4, clause B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly imei: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tei`.
     * @description
     *
     * ISDN-based terminal equipment identity, size 1 to 15. The module states
     * no further coding.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tei: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `imsi`.
     * @description
     *
     * IMSI of the target, MAP format (TS GSM 09.02). E.212 number beginning
     * with the Mobile Country Code. Size 3 to 8.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause A.8.4, clause
     * B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly imsi: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `callingPartyNumber`.
     * @description
     *
     * Calling-party format, used to transmit the identity of a calling party.
     * ISUP, DSS1, or MAP, as on that type.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.3.3, clause
     * D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `calledPartyNumber`.
     * @description
     *
     * Called-party format, used for a called party or a forwarded-to party. A
     * partial number is sent at IRI-BEGIN when that is all that is known. Table
     * A.8.2 uses this component for the other party's directory number on an
     * originating call and for the forwarded-to number.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.2.2, clause A.8.4, clause
     * D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `msISDN`.
     * @description
     *
     * MSISDN of the target, encoded as the MAP `AddressString` (TS GSM 09.02).
     * Size 1 to 9. GSM and GPRS tables map the observed MSISDN here.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause A.8.4, clause
     * B.5.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly msISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `e164_Format`.
     * @description
     *
     * E.164 address of the node in international format, coded as the ISUP
     * calling party number parameter (parameter part, EN 300 356). Size 1 to
     * 25.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly e164_Format: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sip_uri`.
     * @description
     *
     * SIP URI. See RFC 3261. The parameter is duplicated from 3GPP TS 33.108.
     * This document does not add a coding rule. Annex H identifies IMS
     * interception by the SIP URI.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5, annex H.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly sip_uri: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `tel_url`.
     * @description
     *
     * Telephone URL. See RFC 3966. The parameter is duplicated from 3GPP TS
     * 33.108. This document does not add a coding rule. Annex H identifies IMS
     * interception by the TEL URL.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5, annex H.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly tel_url: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `party_Validity`.
     * @description
     *
     * Whether the operator assures the party identity, does not assure it, or
     * added it, for example a roaming number. The module does not say when the
     * component has to be present.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly party_Validity: OPTIONAL<PartyInformation_partyIdentity_party_Validity>;
    /**
     * @summary `alphanumeric`.
     * @description
     *
     * Alphanumeric party identifier. Use it only when the underlying network
     * protocol identifies the party identifier as alphanumeric. In SMPP that
     * indication is the Type of Number parameter. In UCP it is the OTOA
     * parameter.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause A.3.3, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly alphanumeric: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * BER extension additions that were not recognized. Clause C.1.2.4 refers
     * unrecognized fields and parameters to annex G. The LEMF ignores an
     * unrecognized parameter name and continues the record; that case does not
     * by itself require an error, because the network may be using a newer
     * specification. An unrecognized or disallowed value is also ignored, and
     * the LEMF may raise an alarm. An undecodable ROSE record is rejected. The
     * module allows an `OperationErrors` value when an operation or a parameter
     * is misunderstood. Annex G does not name those error codes.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause C.1.2.4, annex G, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        imei: OPTIONAL<OCTET_STRING>,
        tei: OPTIONAL<OCTET_STRING>,
        imsi: OPTIONAL<OCTET_STRING>,
        callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        calledPartyNumber: OPTIONAL<CalledPartyNumber>,
        msISDN: OPTIONAL<OCTET_STRING>,
        e164_Format: OPTIONAL<OCTET_STRING>,
        sip_uri: OPTIONAL<OCTET_STRING>,
        tel_url: OPTIONAL<OCTET_STRING>,
        party_Validity: OPTIONAL<PartyInformation_partyIdentity_party_Validity>,
        alphanumeric: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.imei = imei;
        this.tei = tei;
        this.imsi = imsi;
        this.callingPartyNumber = callingPartyNumber;
        this.calledPartyNumber = calledPartyNumber;
        this.msISDN = msISDN;
        this.e164_Format = e164_Format;
        this.sip_uri = sip_uri;
        this.tel_url = tel_url;
        this.party_Validity = party_Validity;
        this.alphanumeric = alphanumeric;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PartyInformation_partyIdentity
     * @description
     * 
     * This takes an `object` and converts it to a `PartyInformation_partyIdentity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PartyInformation_partyIdentity`.
     * @returns {PartyInformation_partyIdentity}
     */
    public static _from_object (_o: { [_K in keyof (PartyInformation_partyIdentity)]: (PartyInformation_partyIdentity)[_K] }): PartyInformation_partyIdentity {
        return new PartyInformation_partyIdentity(_o.imei, _o.tei, _o.imsi, _o.callingPartyNumber, _o.calledPartyNumber, _o.msISDN, _o.e164_Format, _o.sip_uri, _o.tel_url, _o.party_Validity, _o.alphanumeric, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `party_Validity`
         * @description
         *
         * Operator assurance of the party identity: assured, not assured, or
         * added by the operator. The module does not say when the component is
         * required.
         *
         * ETSI TS 101 671 V3.15.1 (2018-06), clause D.5.
         * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
         *
         * @public
         * @static
         */

    public static _enum_for_party_Validity = _enum_for_PartyInformation_partyIdentity_party_Validity;
}

/**
 * @summary The Leading Root Component Types of PartyInformation_partyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PartyInformation_partyIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("imei", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tei", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("calledPartyNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("msISDN", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PartyInformation_partyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PartyInformation_partyIdentity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PartyInformation_partyIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PartyInformation_partyIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("e164-Format", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sip-uri", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("tel-url", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("party-Validity", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("alphanumeric", true, $.hasTag(_TagClass.context, 11))
];

let _cached_decoder_for_PartyInformation_partyIdentity: $.ASN1Decoder<PartyInformation_partyIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyInformation_partyIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyInformation_partyIdentity (el: _Element): PartyInformation_partyIdentity {
    if (!_cached_decoder_for_PartyInformation_partyIdentity) { _cached_decoder_for_PartyInformation_partyIdentity = function (el: _Element): PartyInformation_partyIdentity {
    let imei: OPTIONAL<OCTET_STRING>;
    let tei: OPTIONAL<OCTET_STRING>;
    let imsi: OPTIONAL<OCTET_STRING>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let calledPartyNumber: OPTIONAL<CalledPartyNumber>;
    let msISDN: OPTIONAL<OCTET_STRING>;
    let e164_Format: OPTIONAL<OCTET_STRING>;
    let sip_uri: OPTIONAL<OCTET_STRING>;
    let tel_url: OPTIONAL<OCTET_STRING>;
    let party_Validity: OPTIONAL<PartyInformation_partyIdentity_party_Validity>;
    let alphanumeric: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imei": (_el: _Element): void => {
            imei = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (imei.length < 8 || imei.length > 8) {
                throw new ASN1SizeError("PartyInformation_partyIdentity.imei violates SIZE constraint");
            }
        },
        "tei": (_el: _Element): void => {
            tei = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (tei.length < 1 || tei.length > 15) {
                throw new ASN1SizeError("PartyInformation_partyIdentity.tei violates SIZE constraint");
            }
        },
        "imsi": (_el: _Element): void => {
            imsi = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (imsi.length < 3 || imsi.length > 8) {
                throw new ASN1SizeError("PartyInformation_partyIdentity.imsi violates SIZE constraint");
            }
        },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_explicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "calledPartyNumber": (_el: _Element): void => { calledPartyNumber = $._decode_explicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "msISDN": (_el: _Element): void => {
            msISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (msISDN.length < 1 || msISDN.length > 9) {
                throw new ASN1SizeError("PartyInformation_partyIdentity.msISDN violates SIZE constraint");
            }
        },
        "e164-Format": (_el: _Element): void => {
            e164_Format = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (e164_Format.length < 1 || e164_Format.length > 25) {
                throw new ASN1SizeError("PartyInformation_partyIdentity.e164_Format violates SIZE constraint");
            }
        },
        "sip-uri": (_el: _Element): void => { sip_uri = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tel-url": (_el: _Element): void => { tel_url = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "party-Validity": (_el: _Element): void => { party_Validity = $._decode_implicit<PartyInformation_partyIdentity_party_Validity>(() => _decode_PartyInformation_partyIdentity_party_Validity)(_el); },
        "alphanumeric": (_el: _Element): void => { alphanumeric = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PartyInformation_partyIdentity,
        _extension_additions_list_spec_for_PartyInformation_partyIdentity,
        _root_component_type_list_2_spec_for_PartyInformation_partyIdentity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PartyInformation_partyIdentity(
        imei,
        tei,
        imsi,
        callingPartyNumber,
        calledPartyNumber,
        msISDN,
        e164_Format,
        sip_uri,
        tel_url,
        party_Validity,
        alphanumeric,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PartyInformation_partyIdentity(el);
}

let _cached_encoder_for_PartyInformation_partyIdentity: $.ASN1Encoder<PartyInformation_partyIdentity> | null = null;

/**
 * @summary Encodes a(n) PartyInformation_partyIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyInformation_partyIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_PartyInformation_partyIdentity (value: PartyInformation_partyIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyInformation_partyIdentity) { _cached_encoder_for_PartyInformation_partyIdentity = function (value: PartyInformation_partyIdentity, elGetter: $.ASN1Encoder<PartyInformation_partyIdentity>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.imei !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.imei, $.BER);
    }
    if (value.tei !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.tei, $.BER);
    }
    if (value.imsi !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.imsi, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.calledPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_CalledPartyNumber, $.BER)(value.calledPartyNumber, $.BER);
    }
    if (value.msISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.msISDN, $.BER);
    }
    if (value.e164_Format !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeOctetString, $.BER)(value.e164_Format, $.BER);
    }
    if (value.sip_uri !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.sip_uri, $.BER);
    }
    if (value.tel_url !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.tel_url, $.BER);
    }
    if (value.party_Validity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_PartyInformation_partyIdentity_party_Validity, $.BER)(value.party_Validity, $.BER);
    }
    if (value.alphanumeric !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => $._encodeUTF8String, $.BER)(value.alphanumeric, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PartyInformation_partyIdentity(value, elGetter);
}


/* eslint-enable */
