/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyInformation_party_Qualifier, _decode_PartyInformation_party_Qualifier, _encode_PartyInformation_party_Qualifier, _enum_for_PartyInformation_party_Qualifier } from "../TETRA-HI2Operations/PartyInformation-party-Qualifier.ta.mjs";
// export { PartyInformation_party_Qualifier, _enum_for_PartyInformation_party_Qualifier, PartyInformation_party_Qualifier_originating_Party /* IMPORTED_LONG_ENUMERATION_ITEM */, originating_Party /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartyInformation_party_Qualifier_terminating_Party /* IMPORTED_LONG_ENUMERATION_ITEM */, terminating_Party /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartyInformation_party_Qualifier_forwarded_to_Party /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarded_to_Party /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartyInformation_party_Qualifier_gPRS_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, gPRS_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PartyInformation_party_Qualifier, _encode_PartyInformation_party_Qualifier } from "../TETRA-HI2Operations/PartyInformation-party-Qualifier.ta.mjs";
import { PartyInformation_partyIdentity, _decode_PartyInformation_partyIdentity, _encode_PartyInformation_partyIdentity } from "../TETRA-HI2Operations/PartyInformation-partyIdentity.ta.mjs";
// export { PartyInformation_partyIdentity, _decode_PartyInformation_partyIdentity, _encode_PartyInformation_partyIdentity } from "../TETRA-HI2Operations/PartyInformation-partyIdentity.ta.mjs";
import { Services_Information, _decode_Services_Information, _encode_Services_Information } from "../TETRA-HI2Operations/Services-Information.ta.mjs";
// export { Services_Information, _decode_Services_Information, _encode_Services_Information } from "../TETRA-HI2Operations/Services-Information.ta.mjs";
import { Supplementary_Services, _decode_Supplementary_Services, _encode_Supplementary_Services } from "../TETRA-HI2Operations/Supplementary-Services.ta.mjs";
// export { Supplementary_Services, _decode_Supplementary_Services, _encode_Supplementary_Services } from "../TETRA-HI2Operations/Supplementary-Services.ta.mjs";
import { Services_Data_Information, _decode_Services_Data_Information, _encode_Services_Data_Information } from "../TETRA-HI2Operations/Services-Data-Information.ta.mjs";
// export { Services_Data_Information, _decode_Services_Data_Information, _encode_Services_Data_Information } from "../TETRA-HI2Operations/Services-Data-Information.ta.mjs";


/**
 * @summary PartyInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation ::= SEQUENCE
 * {
 *     party-Qualifier                        [0] ENUMERATED
 *     {
 *         originating-Party(0),
 *             -- In this case, the partyInformation parameter provides the identities related to
 *             -- the originating party and all information provided by this party.
 *             -- This parameter provides also all the information concerning the redirecting
 *             -- party when a forwarded call reaches a target.
 *         terminating-Party(1),
 *             -- In this case, the partyInformation parameter provides the identities related to
 *             -- the terminating party and all information provided by this party.
 *         forwarded-to-Party(2),
 *             -- In this case, the partyInformation parameter provides the identities related to
 *             -- the forwarded to party and parties beyond this one and all information
 *             -- provided by this parties, including the call forwarding reason.
 *         gPRS-Target(3),
 *         ...
 *     },
 *     partyIdentity                         [1] SEQUENCE
 *     {
 *         imei                [1] OCTET STRING (SIZE (8)) OPTIONAL,
 *             -- See MAP format TS GSM 09.02 [32]
 *         tei                    [2] OCTET STRING (SIZE (1..15)) OPTIONAL,
 *             -- ISDN-based Terminal Equipment Identity
 *         imsi                [3] OCTET STRING (SIZE (3..8)) OPTIONAL,
 *             -- See MAP format TS GSM 09.02 [32] International Mobile
 *             -- Station Identity E.212 number beginning with Mobile Country Code
 *         callingPartyNumber    [4] CallingPartyNumber OPTIONAL,
 *             -- The calling party format is used to transmit the identity of a calling party
 *         calledPartyNumber    [5] CalledPartyNumber OPTIONAL,
 *             -- The called party format is used to transmit the identity of a called party or
 *             -- a forwarded to party.
 *         msISDN                [6] OCTET STRING (SIZE (1..9)) OPTIONAL,
 *             -- MSISDN of the target, encoded in the same format as the AddressString
 *             -- parameters defined in MAP format TS GSM 09.02 [32], clause 14.7.8.
 *         ...,
 *         e164-Format            [7] OCTET STRING (SIZE (1..25)) OPTIONAL,
 *             -- E164 address of the node in international format. Coded in the same format as
 *             -- the calling party number parameter of the ISUP (parameter part: EN 300 356 [5])
 *         sip-uri                [8] OCTET STRING OPTIONAL,
 *             -- Session Initiation Protocol - Uniform Resource Identifier. See RFC 3261 [59].
 *             -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *         tel-url                [9] OCTET STRING OPTIONAL
 *             -- See "URLs for Telephone Calls", RFC 3966 [68].
 *             -- This parameter is duplicated from 3GPP TS 33.108 [61].
 *     },
 *     services-Information                [2] Services-Information OPTIONAL,
 *             -- This parameter is used to transmit all the information concerning the
 *             -- complementary information associated to the basic call
 *     supplementary-Services-Information    [3] Supplementary-Services OPTIONAL,
 *             -- This parameter is used to transmit all the information concerning the
 *             -- activation/invocation of supplementary services during a call or out-of call not
 *             -- provided by the previous parameters.
 *     services-Data-Information            [4] Services-Data-Information OPTIONAL,
 *             -- This parameter is used to transmit all the information concerning the complementary
 *             -- information associated to the basic data call.
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
     * @public
     * @readonly
     */
    readonly party_Qualifier: PartyInformation_party_Qualifier;
    /**
     * @summary `partyIdentity`.
     * @public
     * @readonly
     */
    readonly partyIdentity: PartyInformation_partyIdentity;
    /**
     * @summary `services_Information`.
     * @public
     * @readonly
     */
    readonly services_Information: OPTIONAL<Services_Information>;
    /**
     * @summary `supplementary_Services_Information`.
     * @public
     * @readonly
     */
    readonly supplementary_Services_Information: OPTIONAL<Supplementary_Services>;
    /**
     * @summary `services_Data_Information`.
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
        services_Information: OPTIONAL<Services_Information>,
        supplementary_Services_Information: OPTIONAL<Supplementary_Services>,
        services_Data_Information: OPTIONAL<Services_Data_Information>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.party_Qualifier = party_Qualifier;
        this.partyIdentity = partyIdentity;
        this.services_Information = services_Information;
        this.supplementary_Services_Information = supplementary_Services_Information;
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
        return new PartyInformation(_o.party_Qualifier, _o.partyIdentity, _o.services_Information, _o.supplementary_Services_Information, _o.services_Data_Information, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("services-Information", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("supplementary-Services-Information", true, $.hasTag(_TagClass.context, 3)),
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
    let services_Information: OPTIONAL<Services_Information>;
    let supplementary_Services_Information: OPTIONAL<Supplementary_Services>;
    let services_Data_Information: OPTIONAL<Services_Data_Information>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "party-Qualifier": (_el: _Element): void => { party_Qualifier = $._decode_implicit<PartyInformation_party_Qualifier>(() => _decode_PartyInformation_party_Qualifier)(_el); },
        "partyIdentity": (_el: _Element): void => { partyIdentity = $._decode_implicit<PartyInformation_partyIdentity>(() => _decode_PartyInformation_partyIdentity)(_el); },
        "services-Information": (_el: _Element): void => { services_Information = $._decode_implicit<Services_Information>(() => _decode_Services_Information)(_el); },
        "supplementary-Services-Information": (_el: _Element): void => { supplementary_Services_Information = $._decode_implicit<Supplementary_Services>(() => _decode_Supplementary_Services)(_el); },
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
        services_Information,
        supplementary_Services_Information,
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
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PartyInformation_party_Qualifier, $.BER)(value.party_Qualifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PartyInformation_partyIdentity, $.BER)(value.partyIdentity, $.BER);
    if (value.services_Information !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Services_Information, $.BER)(value.services_Information, $.BER);
    }
    if (value.supplementary_Services_Information !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Supplementary_Services, $.BER)(value.supplementary_Services_Information, $.BER);
    }
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
