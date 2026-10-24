/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PartyInformation_party_Qualifier, _decode_PartyInformation_party_Qualifier, _encode_PartyInformation_party_Qualifier, _enum_for_PartyInformation_party_Qualifier } from "../MmsHI2Operations/PartyInformation-party-Qualifier.ta.mjs";
// export { PartyInformation_party_Qualifier, _enum_for_PartyInformation_party_Qualifier, PartyInformation_party_Qualifier_mMS_Target /* IMPORTED_LONG_ENUMERATION_ITEM */, mMS_Target /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PartyInformation_party_Qualifier, _encode_PartyInformation_party_Qualifier } from "../MmsHI2Operations/PartyInformation-party-Qualifier.ta.mjs";
import { PartyInformation_partyIdentity, _decode_PartyInformation_partyIdentity, _encode_PartyInformation_partyIdentity } from "../MmsHI2Operations/PartyInformation-partyIdentity.ta.mjs";
// export { PartyInformation_partyIdentity, _decode_PartyInformation_partyIdentity, _encode_PartyInformation_partyIdentity } from "../MmsHI2Operations/PartyInformation-partyIdentity.ta.mjs";


/**
 * @summary PartyInformation
 * @description
 * 
 * One party of the MMS event: role and identities. The event tables require at
 * least one observed identity.
 * 
 * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartyInformation ::= SEQUENCE
 * {
 *     party-Qualifier     [0]  ENUMERATED
 *     {
 *         mMS-Target(1),
 *         ...
 *     },
 *     partyIdentity         [1] SEQUENCE
 *     {
 *         mSISDN                    [1] OCTET STRING OPTIONAL,
 *             -- MSISDN, based on the value of
 *             -- global-phone-number found in the MMS (see OMA Multimedia Messaging
 *             -- Service Encapsulation Protocol [90]).
 *         mMSAddress                [2] OCTET STRING OPTIONAL,
 *             -- See clause 8 of OMA Multimedia Messaging Service Encapsulation Protocol [90]. It
 *             -- may be each value of a user defined identifier, that will be an external
 *             -- representation of an address processed by the MMS Proxy Relay.
 *         mMSAddressNonLocalID    [3] OCTET STRING OPTIONAL,
 *             -- see table 15.3.6.1.2: Mapping between Events information and IRI information
 *         e-Mail                    [4] OCTET STRING OPTIONAL,
 *             -- it is described in section 3.4 of IETF RFC 2822 [92], but excluding the obsolete
 *             -- definitions as indicated by the "obs-"prefix.(see clause 8 of Multimedia Messaging
 *             -- Service Encapsulation Protocol OMA-TS-MMS_ENC-V1_3-20110913-A [90].)
 *         e164-Format                [5] OCTET STRING (SIZE (1 .. 25)) OPTIONAL,
 *             -- E164 address but based on value of global-phone-number the found in the MMS.
 *         iPAddress                 [6] IPAddress OPTIONAL,
 *             -- IP Address may be an IPv4 or IPv6.
 *         alphanum-Shortcode         [8] OCTET STRING OPTIONAL,
 *             -- see clause 8 of OMA Multimedia Messaging Service Encapsulation Protocol [90].
 *         num-Shortcode            [9] OCTET STRING OPTIONAL,
 *             -- see clause 8 of OMA Multimedia Messaging Service Encapsulation Protocol [90].
 *         iMSI                    [10] OCTET STRING OPTIONAL,
 *         ...
 *     },
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
     * Role of this party. Annex B.15 names only the MMS target.
     * 
     * 3GPP TS 33.108, annex B.15.
     * @public
     * @readonly
     */
    readonly party_Qualifier: PartyInformation_party_Qualifier;
    /**
     * @summary `partyIdentity`.
     * @description
     * 
     * Identities of this party. Provide at least one of those the record lists,
     * and the others when available. The event tables also list IMEI and
     * IMPU/IMPI, which have no component here.
     * 
     * 3GPP TS 33.108, table 15.3.6.1.2 and annex B.15.
     * @public
     * @readonly
     */
    readonly partyIdentity: PartyInformation_partyIdentity;
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
        party_Qualifier: PartyInformation_party_Qualifier,
        partyIdentity: PartyInformation_partyIdentity,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.party_Qualifier = party_Qualifier;
        this.partyIdentity = partyIdentity;
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
        return new PartyInformation(_o.party_Qualifier, _o.partyIdentity, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("partyIdentity", false, $.hasTag(_TagClass.context, 1))
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
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PartyInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "party-Qualifier";
    sequence[1].name = "partyIdentity";
    let party_Qualifier!: PartyInformation_party_Qualifier;
    let partyIdentity!: PartyInformation_partyIdentity;
    party_Qualifier = $._decode_implicit<PartyInformation_party_Qualifier>(() => _decode_PartyInformation_party_Qualifier)(sequence[0]);
    partyIdentity = $._decode_implicit<PartyInformation_partyIdentity>(() => _decode_PartyInformation_partyIdentity)(sequence[1]);
    return new PartyInformation(
        party_Qualifier,
        partyIdentity,
        sequence.slice(2),
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
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PartyInformation_party_Qualifier, $.BER)(value.party_Qualifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PartyInformation_partyIdentity, $.BER)(value.partyIdentity, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PartyInformation(value, elGetter);
}


/* eslint-enable */
