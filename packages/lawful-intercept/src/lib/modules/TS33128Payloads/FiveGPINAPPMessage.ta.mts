/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PINEIdentities, _decode_PINEIdentities, _encode_PINEIdentities } from "../TS33128Payloads/PINEIdentities.ta.mjs";
// export { PINEIdentities, _decode_PINEIdentities, _encode_PINEIdentities } from "../TS33128Payloads/PINEIdentities.ta.mjs";
import { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
// export { MACAddress, _decode_MACAddress, _encode_MACAddress } from "../TS33128Payloads/MACAddress.ta.mjs";
import { PINID, _decode_PINID, _encode_PINID } from "../TS33128Payloads/PINID.ta.mjs";
// export { PINID, _decode_PINID, _encode_PINID } from "../TS33128Payloads/PINID.ta.mjs";
import { PINServerID, _decode_PINServerID, _encode_PINServerID } from "../TS33128Payloads/PINServerID.ta.mjs";
// export { PINServerID, _decode_PINServerID, _encode_PINServerID } from "../TS33128Payloads/PINServerID.ta.mjs";
import { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";
// export { XMLType, _decode_XMLType, _encode_XMLType } from "../TS33128Payloads/XMLType.ta.mjs";


/**
 * @summary FiveGPINAPPMessage
 * @description
 * 
 * The IRI-POI in the 5G PIN Server shall generate an xIRI containing a
 * FiveGPINAPPMessage record when the IRI-POI present in the 5G PIN Server
 * detects that the 5G PIN Server interacts using the PINAPP protocol with a PIN
 * client for PIN application layer procedures (see clause 5.1 of TS 24.583
 * [142]). PIN client is deployed in PIN Element (PINE, PEGC, PEMC). The IRI-POI
 * present in the 5G PIN Server shall generate the xIRI for the following
 * events:
 *
 * - 5G PIN Server exchanges PINAPP protocol messages with a target PIN client
 *   relating to PIN application layer procedures.
 *
 * - 5G PIN Server exchanges PINAPP protocol messages with any PIN client of a
 *   target PIN relating to PIN application layer procedures.
 *
 * Table 7.18.3-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.18.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGPINAPPMessage ::= SEQUENCE
 * {
 *     pINEIdentities            [1] PINEIdentities,
 *     mACAddress                [2] MACAddress OPTIONAL,
 *     pINID                     [3] PINID OPTIONAL,
 *     pINServerID               [4] PINServerID,
 *     pINAPPMessage             [5] XMLType
 * }
 * ```
 * 
 * @class
 */
export
class FiveGPINAPPMessage {
    /**
     * @summary `pINEIdentities`.
     * @description
     *
     * Identities of the target PIN client.
     *
     * 3GPP TS 33.128, clause 7.18.2.2.
     *
     * @public
     * @readonly
     */
    readonly pINEIdentities: PINEIdentities;
    /**
     * @summary `mACAddress`.
     * @description
     *
     * Identifies the MAC address of the PIN client, if available.
     *
     * 3GPP TS 33.128, clause 7.18.2.2.
     *
     * @public
     * @readonly
     */
    readonly mACAddress: OPTIONAL<MACAddress>;
    /**
     * @summary `pINID`.
     * @description
     *
     * Identifies the PIN, if available.
     *
     * 3GPP TS 33.128, clause 7.18.2.2.
     *
     * @public
     * @readonly
     */
    readonly pINID: OPTIONAL<PINID>;
    /**
     * @summary `pINServerID`.
     * @description
     *
     * Identifies the 5G PIN Server.
     *
     * 3GPP TS 33.128, clause 7.18.2.2.
     *
     * @public
     * @readonly
     */
    readonly pINServerID: PINServerID;
    /**
     * @summary `pINAPPMessage`.
     * @description
     *
     * Contains the PINAPP protocol message encoded as a "pinapp-info" XML
     * structure according to TS 24.583 [142] clause 6.2.4. The
     * XMLType.namespace for this parameter shall be set to the namespace of the
     * root element of the XML document, e.g. "urn:3GPP:ns:pinapp:2023".
     *
     * 3GPP TS 33.128, clause 7.18.2.2.
     *
     * @public
     * @readonly
     */
    readonly pINAPPMessage: XMLType;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pINEIdentities: PINEIdentities,
        mACAddress: OPTIONAL<MACAddress>,
        pINID: OPTIONAL<PINID>,
        pINServerID: PINServerID,
        pINAPPMessage: XMLType,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pINEIdentities = pINEIdentities;
        this.mACAddress = mACAddress;
        this.pINID = pINID;
        this.pINServerID = pINServerID;
        this.pINAPPMessage = pINAPPMessage;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a FiveGPINAPPMessage
     * @description
     * 
     * This takes an `object` and converts it to a `FiveGPINAPPMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FiveGPINAPPMessage`.
     * @returns {FiveGPINAPPMessage}
     */
    public static _from_object (_o: { [_K in keyof (FiveGPINAPPMessage)]: (FiveGPINAPPMessage)[_K] }): FiveGPINAPPMessage {
        return new FiveGPINAPPMessage(_o.pINEIdentities, _o.mACAddress, _o.pINID, _o.pINServerID, _o.pINAPPMessage, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of FiveGPINAPPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FiveGPINAPPMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("pINEIdentities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mACAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pINID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pINServerID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pINAPPMessage", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of FiveGPINAPPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FiveGPINAPPMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FiveGPINAPPMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FiveGPINAPPMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FiveGPINAPPMessage: $.ASN1Decoder<FiveGPINAPPMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGPINAPPMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGPINAPPMessage (el: _Element): FiveGPINAPPMessage {
    if (!_cached_decoder_for_FiveGPINAPPMessage) { _cached_decoder_for_FiveGPINAPPMessage = function (el: _Element): FiveGPINAPPMessage {
    let pINEIdentities!: PINEIdentities;
    let mACAddress: OPTIONAL<MACAddress>;
    let pINID: OPTIONAL<PINID>;
    let pINServerID!: PINServerID;
    let pINAPPMessage!: XMLType;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pINEIdentities": (_el: _Element): void => { pINEIdentities = $._decode_implicit<PINEIdentities>(() => _decode_PINEIdentities)(_el); },
        "mACAddress": (_el: _Element): void => { mACAddress = $._decode_implicit<MACAddress>(() => _decode_MACAddress)(_el); },
        "pINID": (_el: _Element): void => { pINID = $._decode_implicit<PINID>(() => _decode_PINID)(_el); },
        "pINServerID": (_el: _Element): void => { pINServerID = $._decode_implicit<PINServerID>(() => _decode_PINServerID)(_el); },
        "pINAPPMessage": (_el: _Element): void => { pINAPPMessage = $._decode_implicit<XMLType>(() => _decode_XMLType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FiveGPINAPPMessage,
        _extension_additions_list_spec_for_FiveGPINAPPMessage,
        _root_component_type_list_2_spec_for_FiveGPINAPPMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new FiveGPINAPPMessage(
        pINEIdentities,
        mACAddress,
        pINID,
        pINServerID,
        pINAPPMessage,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_FiveGPINAPPMessage(el);
}

let _cached_encoder_for_FiveGPINAPPMessage: $.ASN1Encoder<FiveGPINAPPMessage> | null = null;

/**
 * @summary Encodes a(n) FiveGPINAPPMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGPINAPPMessage, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGPINAPPMessage (value: FiveGPINAPPMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGPINAPPMessage) { _cached_encoder_for_FiveGPINAPPMessage = function (value: FiveGPINAPPMessage, elGetter: $.ASN1Encoder<FiveGPINAPPMessage>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PINEIdentities, $.BER)(value.pINEIdentities, $.BER);
    if (value.mACAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MACAddress, $.BER)(value.mACAddress, $.BER);
    }
    if (value.pINID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_PINID, $.BER)(value.pINID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PINServerID, $.BER)(value.pINServerID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_XMLType, $.BER)(value.pINAPPMessage, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_FiveGPINAPPMessage(value, elGetter);
}


/* eslint-enable */
