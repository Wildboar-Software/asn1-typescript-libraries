/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";


/**
 * @summary PartyInformation_partyIdentity
 * @description
 * 
 * Identities of the MMS target. Provide at least one, and the others when
 * available (clause 15.3.6.2.2).
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation-partyIdentity ::= SEQUENCE {
 *     mSISDN                    [1] OCTET STRING OPTIONAL,
 *     -- MSISDN, based on the value of
 *     -- global-phone-number found in the MMS (see OMA Multimedia Messaging
 *     -- Service Encapsulation Protocol [90]).
 *     mMSAddress                [2] OCTET STRING OPTIONAL,
 *     -- See clause 8 of OMA Multimedia Messaging Service Encapsulation Protocol [90]. It
 *     -- may be each value of a user defined identifier, that will be an external
 *     -- representation of an address processed by the MMS Proxy Relay.
 *     mMSAddressNonLocalID    [3] OCTET STRING OPTIONAL,
 *     -- see table 15.3.6.1.2: Mapping between Events information and IRI information
 *     e-Mail                    [4] OCTET STRING OPTIONAL,
 *     -- it is described in section 3.4 of IETF RFC 2822 [92], but excluding the obsolete
 *     -- definitions as indicated by the "obs-"prefix.(see clause 8 of Multimedia Messaging
 *     -- Service Encapsulation Protocol OMA-TS-MMS_ENC-V1_3-20110913-A [90].)
 *     e164-Format                [5] OCTET STRING (SIZE (1 .. 25)) OPTIONAL,
 *     -- E164 address but based on value of global-phone-number the found in the MMS.
 *     iPAddress                 [6] IPAddress OPTIONAL,
 *     -- IP Address may be an IPv4 or IPv6.
 *     alphanum-Shortcode         [8] OCTET STRING OPTIONAL,
 *     -- see clause 8 of OMA Multimedia Messaging Service Encapsulation Protocol [90].
 *     num-Shortcode            [9] OCTET STRING OPTIONAL,
 *     -- see clause 8 of OMA Multimedia Messaging Service Encapsulation Protocol [90].
 *     iMSI                    [10] OCTET STRING OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PartyInformation_partyIdentity {
    /**
     * @summary `mSISDN`.
     * @description
     * 
     * MSISDN of the target, taken from the global-phone-number in the MMS (OMA
     * Multimedia Messaging Service Encapsulation Protocol).
     * 
     * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
     * @public
     * @readonly
     */
    readonly mSISDN: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mMSAddress`.
     * @description
     * 
     * Address the MMS Proxy-Relay processes, as an external representation of a
     * user-defined identifier. See clause 8 of the OMA encapsulation protocol
     * (annex B.15).
     * 
     * Table 15.3.6.1.2 describes Observed MMD Address as an address in that
     * protocol, and as the place a SIP URI is included. Clause 15.3 does not
     * name this component in that row.
     * @public
     * @readonly
     */
    readonly mMSAddress: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `mMSAddressNonLocalID`.
     * @description
     * 
     * Non-local target identity, when national regulation requires one. An
     * address as in the OMA encapsulation protocol: an E.164 number, an
     * alphanumeric or numeric short code, or an e-mail address as in RFC 2822
     * section 3.4, excluding obsolete forms marked "obs-". See clause 8 of that
     * OMA protocol.
     * 
     * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
     * @public
     * @readonly
     */
    readonly mMSAddressNonLocalID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `e_Mail`.
     * @description
     * 
     * E-mail address as in RFC 2822 section 3.4, excluding obsolete forms
     * marked "obs-", and clause 8 of the OMA encapsulation protocol (annex
     * B.15).
     * 
     * The non-local-identity row of table 15.3.6.1.2 also allows an e-mail
     * address of that form. Clause 15.3 does not say which component carries
     * it.
     * @public
     * @readonly
     */
    readonly e_Mail: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `e164_Format`.
     * @description
     * 
     * E.164 address taken from the global-phone-number in the MMS. The event
     * tables list observed E.164 number in the identity group. One to
     * twenty-five octets (annex B.15).
     * 
     * 3GPP TS 33.108, annex B.15.
     * @public
     * @readonly
     */
    readonly e164_Format: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPAddress`.
     * @description
     * 
     * IPv4 or IPv6 address of the target (table 15.3.6.1.2). Annex B.15 says
     * the address may be either.
     * 
     * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
     * @public
     * @readonly
     */
    readonly iPAddress: OPTIONAL<IPAddress>;
    /**
     * @summary `alphanum_Shortcode`.
     * @description
     * 
     * Alphanumeric short code, as in clause 8 of the OMA encapsulation
     * protocol. Table 15.3.6.1.2 lists observed short code as alphanumeric or
     * numeric and does not assign the two forms to separate components.
     * 
     * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
     * @public
     * @readonly
     */
    readonly alphanum_Shortcode: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `num_Shortcode`.
     * @description
     * 
     * Numeric short code, as in clause 8 of the OMA encapsulation protocol.
     * Table 15.3.6.1.2 lists one observed-shortcode row for both alphanumeric
     * and numeric forms.
     * 
     * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
     * @public
     * @readonly
     */
    readonly num_Shortcode: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iMSI`.
     * @description
     * 
     * IMSI of the target (table 15.3.6.1.2). Clause 15.3 does not further
     * define the encoding.
     * 
     * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
     * @public
     * @readonly
     */
    readonly iMSI: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of TS 33.108 does not define.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        mSISDN?: OPTIONAL<OCTET_STRING>,
        mMSAddress?: OPTIONAL<OCTET_STRING>,
        mMSAddressNonLocalID?: OPTIONAL<OCTET_STRING>,
        e_Mail?: OPTIONAL<OCTET_STRING>,
        e164_Format?: OPTIONAL<OCTET_STRING>,
        iPAddress?: OPTIONAL<IPAddress>,
        alphanum_Shortcode?: OPTIONAL<OCTET_STRING>,
        num_Shortcode?: OPTIONAL<OCTET_STRING>,
        iMSI?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.mSISDN = mSISDN;
        this.mMSAddress = mMSAddress;
        this.mMSAddressNonLocalID = mMSAddressNonLocalID;
        this.e_Mail = e_Mail;
        this.e164_Format = e164_Format;
        this.iPAddress = iPAddress;
        this.alphanum_Shortcode = alphanum_Shortcode;
        this.num_Shortcode = num_Shortcode;
        this.iMSI = iMSI;
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
        return new PartyInformation_partyIdentity(_o.mSISDN, _o.mMSAddress, _o.mMSAddressNonLocalID, _o.e_Mail, _o.e164_Format, _o.iPAddress, _o.alphanum_Shortcode, _o.num_Shortcode, _o.iMSI, _o._unrecognizedExtensionsList);
    }


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
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mMSAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("mMSAddressNonLocalID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("e-Mail", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("e164-Format", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("iPAddress", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("alphanum-Shortcode", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("num-Shortcode", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 10))
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
    let mSISDN: OPTIONAL<OCTET_STRING>;
    let mMSAddress: OPTIONAL<OCTET_STRING>;
    let mMSAddressNonLocalID: OPTIONAL<OCTET_STRING>;
    let e_Mail: OPTIONAL<OCTET_STRING>;
    let e164_Format: OPTIONAL<OCTET_STRING>;
    let iPAddress: OPTIONAL<IPAddress>;
    let alphanum_Shortcode: OPTIONAL<OCTET_STRING>;
    let num_Shortcode: OPTIONAL<OCTET_STRING>;
    let iMSI: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mMSAddress": (_el: _Element): void => { mMSAddress = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "mMSAddressNonLocalID": (_el: _Element): void => { mMSAddressNonLocalID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "e-Mail": (_el: _Element): void => { e_Mail = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "e164-Format": (_el: _Element): void => {
            e164_Format = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (e164_Format.length < 1 || e164_Format.length > 25) {
                throw new ASN1SizeError("PartyInformation_partyIdentity.e164_Format violates SIZE constraint");
            }
        },
        "iPAddress": (_el: _Element): void => { iPAddress = $._decode_implicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "alphanum-Shortcode": (_el: _Element): void => { alphanum_Shortcode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "num-Shortcode": (_el: _Element): void => { num_Shortcode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PartyInformation_partyIdentity,
        _extension_additions_list_spec_for_PartyInformation_partyIdentity,
        _root_component_type_list_2_spec_for_PartyInformation_partyIdentity,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PartyInformation_partyIdentity(
        mSISDN,
        mMSAddress,
        mMSAddressNonLocalID,
        e_Mail,
        e164_Format,
        iPAddress,
        alphanum_Shortcode,
        num_Shortcode,
        iMSI,
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
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.mSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.mSISDN, $.BER);
    }
    if (value.mMSAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.mMSAddress, $.BER);
    }
    if (value.mMSAddressNonLocalID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.mMSAddressNonLocalID, $.BER);
    }
    if (value.e_Mail !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.e_Mail, $.BER);
    }
    if (value.e164_Format !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.e164_Format, $.BER);
    }
    if (value.iPAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_IPAddress, $.BER)(value.iPAddress, $.BER);
    }
    if (value.alphanum_Shortcode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.alphanum_Shortcode, $.BER);
    }
    if (value.num_Shortcode !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeOctetString, $.BER)(value.num_Shortcode, $.BER);
    }
    if (value.iMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.iMSI, $.BER);
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
