/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyInformation_party_Qualifier, _decode_PartyInformation_party_Qualifier, _encode_PartyInformation_party_Qualifier, _enum_for_PartyInformation_party_Qualifier } from "../UmtsHI2Operations/PartyInformation-party-Qualifier.ta.mjs";
// export { PartyInformation_party_Qualifier, _enum_for_PartyInformation_party_Qualifier, PartyInformation_party_Qualifier_gPRS_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRS_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PartyInformation_party_Qualifier, _encode_PartyInformation_party_Qualifier } from "../UmtsHI2Operations/PartyInformation-party-Qualifier.ta.mjs";
import { PartyInformation_partyIdentity, _decode_PartyInformation_partyIdentity, _encode_PartyInformation_partyIdentity } from "../UmtsHI2Operations/PartyInformation-partyIdentity.ta.mjs";
// export { PartyInformation_partyIdentity, _decode_PartyInformation_partyIdentity, _encode_PartyInformation_partyIdentity } from "../UmtsHI2Operations/PartyInformation-partyIdentity.ta.mjs";
import { Services_Data_Information, _decode_Services_Data_Information, _encode_Services_Data_Information } from "../UmtsHI2Operations/Services-Data-Information.ta.mjs";
// export { Services_Data_Information, _decode_Services_Data_Information, _encode_Services_Data_Information } from "../UmtsHI2Operations/Services-Data-Information.ta.mjs";


/**
 * @summary PartyInformation
 * @description
 * 
 * The concerned party: its role, its identities, and complementary data for the
 * packet call (annex B.3). The LEMF uses the identities to recognize the
 * target. At least one of MSISDN, IMSI, and IMEI is required on packet-domain
 * records when available; IMS records use SIP URI, TEL URI, and IMEI when
 * available.
 * 
 * 3GPP TS 33.108, clause 6.5, table 6.2, and clause 7.5; annex B.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation ::= SEQUENCE
 * {
 *     party-Qualifier     [0]  ENUMERATED
 *     {
 *         gPRS-Target(3),
 *         ...
 *     },
 *     partyIdentity         [1] SEQUENCE
 *     {
 *         imei                    [1] OCTET STRING (SIZE (8)) OPTIONAL,
 *             -- See MAP format [4]
 * 
 *         imsi                    [3] OCTET STRING (SIZE (3..8)) OPTIONAL,
 *             -- See MAP format [4] International Mobile
 *             -- Station Identity E.212 number beginning with Mobile Country Code
 * 
 *         msISDN                    [6] OCTET STRING (SIZE (1..9)) OPTIONAL,
 *             -- MSISDN of the target, encoded in the same format as the AddressString
 *             -- parameters defined in MAP format document TS 29.002 [4]
 * 
 *         e164-Format                [7] OCTET STRING    (SIZE (1 .. 25)) OPTIONAL,
 *             -- E164 address of the node in international format. Coded in the same format as
 *             -- the calling party number  parameter of the ISUP (parameter part:[29])
 * 
 *         sip-uri                    [8] OCTET STRING     type OPTIONAL,
 *             -- See [26]
 * 
 *         ...,
 *         tel-uri                    [9] OCTET STRING     type OPTIONAL,
 *             -- See [67]
 *         x-3GPP-Asserted-Identity [10] OCTET STRING     type OPTIONAL,
 *         -- X-3GPP-Asserted-Identity header (3GPP TS 24.109 [79]) of the target, used in
 *         -- some XCAP transactions. This information complement SIP URI or Tel URI of the target.
 *         xUI                        [11] OCTET STRING     OPTIONAL
 *         -- XCAP User Identifier (XUI)is a string, valid as a path element in an XCAP URI, that
 *         -- may be associated with each user served by a XCAP resource server. Defined in IETF
 *         -- RFC 4825[80]. This information may complement SIP URI or Tel URI of the target.
 * 
 *     },
 *     services-Data-Information     [4] Services-Data-Information OPTIONAL,
 *         -- This parameter is used to transmit all the information concerning the
 *         -- complementary information associated to the basic data call
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class PartyInformation {
    /**
     * @summary `party_Qualifier`.
     * @description
     * 
     * Role of this party. In this module the only named role is the GPRS
     * target, so the LEMF can attach the identities to the intercepted
     * subscriber. Annex B.3 describes the parameter as the concerned party and
     * the information that party provided.
     * 
     * 3GPP TS 33.108, table 6.2 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly party_Qualifier: PartyInformation_party_Qualifier;
    /**
     * @summary `partyIdentity`.
     * @description
     * 
     * Identities of the concerned party. Packet-domain records require at least
     * one of MSISDN, IMSI, and IMEI when available. IMS records carry SIP URI,
     * TEL URI, and IMEI when available. XCAP records may add the asserted
     * identity and the XCAP user identifier.
     * 
     * 3GPP TS 33.108, clause 6.5.1, clause 7.5, and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly partyIdentity: PartyInformation_partyIdentity;
    /**
     * @summary `services_Data_Information`.
     * @description
     * 
     * Complementary information for the basic packet-data call: the observed
     * PDP address, the access point name, and the PDP type (table 6.2).
     * 
     * 3GPP TS 33.108, table 6.2 and annex B.3.
     * 
     * @public
     * @readonly
     */
    readonly services_Data_Information: OPTIONAL<Services_Data_Information>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        party_Qualifier: PartyInformation_party_Qualifier,
        partyIdentity: PartyInformation_partyIdentity,
        services_Data_Information?: OPTIONAL<Services_Data_Information>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.party_Qualifier = party_Qualifier;
        this.partyIdentity = partyIdentity;
        this.services_Data_Information = services_Data_Information;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PartyInformation
     * @description
     * 
     * This takes an `object` and converts it to a `PartyInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PartyInformation`.
     * @returns {PartyInformation}
     */
    public static _from_object (_o: { [_K in keyof (PartyInformation)]: (PartyInformation)[_K] }): PartyInformation {
        return new PartyInformation(_o.party_Qualifier, _o.partyIdentity, _o.services_Data_Information, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `party_Qualifier`
         * @public
         * @static
         */

    public static _enum_for_party_Qualifier = _enum_for_PartyInformation_party_Qualifier;
}

/**
 * @summary The Leading Root Component Types of PartyInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PartyInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("party-Qualifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("partyIdentity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("services-Data-Information", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PartyInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PartyInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PartyInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PartyInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PartyInformation: $.ASN1Decoder<PartyInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartyInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartyInformation (el: _Element): PartyInformation {
    if (!_cached_decoder_for_PartyInformation) { _cached_decoder_for_PartyInformation = function (el: _Element): PartyInformation {
    let party_Qualifier!: PartyInformation_party_Qualifier;
    let partyIdentity!: PartyInformation_partyIdentity;
    let services_Data_Information: OPTIONAL<Services_Data_Information>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "party-Qualifier": (_el: _Element): void => { party_Qualifier = $._decode_implicit<PartyInformation_party_Qualifier>(() => _decode_PartyInformation_party_Qualifier)(_el); },
        "partyIdentity": (_el: _Element): void => { partyIdentity = $._decode_implicit<PartyInformation_partyIdentity>(() => _decode_PartyInformation_partyIdentity)(_el); },
        "services-Data-Information": (_el: _Element): void => { services_Data_Information = $._decode_implicit<Services_Data_Information>(() => _decode_Services_Data_Information)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PartyInformation,
        _extension_additions_list_spec_for_PartyInformation,
        _root_component_type_list_2_spec_for_PartyInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PartyInformation(
        party_Qualifier,
        partyIdentity,
        services_Data_Information,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PartyInformation(el);
}

let _cached_encoder_for_PartyInformation: $.ASN1Encoder<PartyInformation> | null = null;

/**
 * @summary Encodes a(n) PartyInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartyInformation, encoded as an ASN.1 Element.
 */
export
function _encode_PartyInformation (value: PartyInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartyInformation) { _cached_encoder_for_PartyInformation = function (value: PartyInformation, elGetter: $.ASN1Encoder<PartyInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PartyInformation_party_Qualifier, $.BER)(value.party_Qualifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PartyInformation_partyIdentity, $.BER)(value.partyIdentity, $.BER);
    if (value.services_Data_Information !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Services_Data_Information, $.BER)(value.services_Data_Information, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PartyInformation(value, elGetter);
}


/* eslint-enable */
