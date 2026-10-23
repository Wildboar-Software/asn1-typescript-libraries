/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyIdentity, _decode_PartyIdentity, _encode_PartyIdentity } from "../CONFHI2Operations/PartyIdentity.ta.mjs";
// export { PartyIdentity, _decode_PartyIdentity, _encode_PartyIdentity } from "../CONFHI2Operations/PartyIdentity.ta.mjs";
import { SupportedMedia, _decode_SupportedMedia, _encode_SupportedMedia } from "../CONFHI2Operations/SupportedMedia.ta.mjs";
// export { SupportedMedia, _decode_SupportedMedia, _encode_SupportedMedia } from "../CONFHI2Operations/SupportedMedia.ta.mjs";


/**
 * @summary ConfPartyInformation
 * @description
 * 
 * One conference party: identity and the bearers that party supports. Used for
 * conferees, waiting parties, the joining party, the leaving party, the party
 * changing a bearer, and parties affected by that change. 3GPP TS 33.108,
 * clause 11.5 and annex B.11.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfPartyInformation ::= SEQUENCE
 * {
 *         partyIdentity            [1] PartyIdentity OPTIONAL,
 * 
 *         supportedmedia            [2] SupportedMedia OPTIONAL,
 *             
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ConfPartyInformation {
    /**
     * @summary `partyIdentity`.
     * @description
     * 
     * Public and private IMS identities of this party. At least one when the
     * party is reported. 3GPP TS 33.108, clause 11.5, table 11.2.
     * 
     * @public
     * @readonly
     */
    readonly partyIdentity: OPTIONAL<PartyIdentity>;
    /**
     * @summary `supportedmedia`.
     * @description
     * 
     * Bearers for this party. On a successful join, all bearers the joining
     * party supports are required. On a successful leave, all bearers that
     * party supported are required. For each current conferee, the bearers
     * actively in use are conditional at a successful start and required when
     * interception starts on an active conference. 3GPP TS 33.108, clause 11.5,
     * tables 11.3 to 11.5 and 11.7.
     * 
     * @public
     * @readonly
     */
    readonly supportedmedia: OPTIONAL<SupportedMedia>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        partyIdentity?: OPTIONAL<PartyIdentity>,
        supportedmedia?: OPTIONAL<SupportedMedia>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.partyIdentity = partyIdentity;
        this.supportedmedia = supportedmedia;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ConfPartyInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ConfPartyInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConfPartyInformation`.
     * @returns {ConfPartyInformation}
     */
    public static _from_object (_o: { [_K in keyof (ConfPartyInformation)]: (ConfPartyInformation)[_K] }): ConfPartyInformation {
        return new ConfPartyInformation(_o.partyIdentity, _o.supportedmedia, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ConfPartyInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConfPartyInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("partyIdentity", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("supportedmedia", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ConfPartyInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConfPartyInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConfPartyInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConfPartyInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConfPartyInformation: $.ASN1Decoder<ConfPartyInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConfPartyInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConfPartyInformation (el: _Element): ConfPartyInformation {
    if (!_cached_decoder_for_ConfPartyInformation) { _cached_decoder_for_ConfPartyInformation = function (el: _Element): ConfPartyInformation {
    let partyIdentity: OPTIONAL<PartyIdentity>;
    let supportedmedia: OPTIONAL<SupportedMedia>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "partyIdentity": (_el: _Element): void => { partyIdentity = $._decode_implicit<PartyIdentity>(() => _decode_PartyIdentity)(_el); },
        "supportedmedia": (_el: _Element): void => { supportedmedia = $._decode_implicit<SupportedMedia>(() => _decode_SupportedMedia)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConfPartyInformation,
        _extension_additions_list_spec_for_ConfPartyInformation,
        _root_component_type_list_2_spec_for_ConfPartyInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ConfPartyInformation(
        partyIdentity,
        supportedmedia,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ConfPartyInformation(el);
}

let _cached_encoder_for_ConfPartyInformation: $.ASN1Encoder<ConfPartyInformation> | null = null;

/**
 * @summary Encodes a(n) ConfPartyInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConfPartyInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ConfPartyInformation (value: ConfPartyInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConfPartyInformation) { _cached_encoder_for_ConfPartyInformation = function (value: ConfPartyInformation, elGetter: $.ASN1Encoder<ConfPartyInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.partyIdentity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_PartyIdentity, $.BER)(value.partyIdentity, $.BER);
    }
    if (value.supportedmedia !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SupportedMedia, $.BER)(value.supportedmedia, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ConfPartyInformation(value, elGetter);
}


/* eslint-enable */
