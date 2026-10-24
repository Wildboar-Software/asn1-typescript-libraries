/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";


/**
 * @summary CommunicationIdentifier
 * @description
 * 
 * Communication identifier (CID). The relevant network element generates one
 * for each activity of a target identity. It distinguishes those activities and
 * correlates IRI records with each other and with CC at HI2 and HI3. Called
 * `callIdentifier` in ES 201 671 v1.1.1. It is the NID plus an optional CIN.
 * The same value is sent with the HI3 information and with each IRI of the same
 * intercepted call.
 *
 * Clause 6.2 and table A.3.1 allow the CID to be omitted for non-call-related
 * records such as SMS and subscriber-controlled input, where no CC correlation
 * is made. The ASN.1 still makes this component mandatory in `IRI-Parameters`
 * and makes the CIN optional inside it. GSM clause A.8.2 uses the intercepting
 * node id as the NID and the correlation number as the CIN. GPRS clause B.5.2
 * uses the same pair. If both parties of a packet communication are
 * intercepted, each party is a separate intercept activity.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.2, clause A.3.2.1, clause A.8.2,
 * clause B.5.2, clause D.5.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommunicationIdentifier ::= SEQUENCE
 * {
 *     communication-Identity-Number    [0] OCTET STRING (SIZE (1..8)) OPTIONAL,
 *         -- Temporary Identifier of an intercepted call to uniquely identify an intercepted call
 *         -- within the node. This parameter is mandatory if there is associated
 *         -- information sent over HI3interface (CClink, data,..) or when
 *         -- CommunicationIdentifier is used for IRI other than IRI-Report-record
 *         -- This parameter was called "call-Identity-Number" in V1.1.1 of ES 201 671 [i.5]
 *         -- The individual digits of the communication-Identity-Number shall be represented in
 *         -- ASCII format, e.g. "12345678" = 8 octets 0x31 0x32 0x33 0x34 0x35 0x36 0x37 0x38.
 *         -- For subaddress option only "0"..."9" shall be used.
 *     network-Identifier                [1] Network-Identifier,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class CommunicationIdentifier {
    /**
     * @summary `communication_Identity_Number`.
     * @description
     *
     * CIN. Temporary identifier of one intercepted communication inside the
     * network element. Mandatory for connection-oriented IRI, whenever HI3
     * information is associated (CC link, data, and similar), and when this
     * identifier is used for an IRI other than IRI-REPORT. Optional for
     * IRI-REPORT with no HI3. All results of one session in one network element
     * use the same CIN. Two sessions of one subject through the same element
     * use different CINs. Different target identities in the same communication
     * may share a CIN. Called `call-Identity-Number` in ES 201 671 v1.1.1.
     *
     * ASCII digits. "12345678" is the eight octets 0x31 through 0x38. Size 1 to
     * 8. For the subaddress option only `0` to `9` shall be used. Annex E
     * carries it in the Called Party Subaddress as decimal digits, recommended
     * minimum 6 and maximum 8, ended by a field separator. Under option B the
     * HI3 CIN is the CIN of the first call for which that CC link was set up.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.2.2, clause A.1.3, clause
     * D.5, annex E.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly communication_Identity_Number: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `network_Identifier`.
     * @description
     *
     * NID. Mandatory half of the CID. It should be internationally unique. The
     * operator identifier is mandatory. The network element identifier is
     * optional.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause 6.2.1, clause D.5.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly network_Identifier: Network_Identifier;
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
        communication_Identity_Number: OPTIONAL<OCTET_STRING>,
        network_Identifier: Network_Identifier,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.communication_Identity_Number = communication_Identity_Number;
        this.network_Identifier = network_Identifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CommunicationIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `CommunicationIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommunicationIdentifier`.
     * @returns {CommunicationIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (CommunicationIdentifier)]: (CommunicationIdentifier)[_K] }): CommunicationIdentifier {
        return new CommunicationIdentifier(_o.communication_Identity_Number, _o.network_Identifier, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CommunicationIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommunicationIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("communication-Identity-Number", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("network-Identifier", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CommunicationIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommunicationIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommunicationIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommunicationIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommunicationIdentifier: $.ASN1Decoder<CommunicationIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommunicationIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommunicationIdentifier (el: _Element): CommunicationIdentifier {
    if (!_cached_decoder_for_CommunicationIdentifier) { _cached_decoder_for_CommunicationIdentifier = function (el: _Element): CommunicationIdentifier {
    let communication_Identity_Number: OPTIONAL<OCTET_STRING>;
    let network_Identifier!: Network_Identifier;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "communication-Identity-Number": (_el: _Element): void => {
            communication_Identity_Number = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (communication_Identity_Number.length < 1 || communication_Identity_Number.length > 8) {
                throw new ASN1SizeError("CommunicationIdentifier.communication_Identity_Number violates SIZE constraint");
            }
        },
        "network-Identifier": (_el: _Element): void => { network_Identifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommunicationIdentifier,
        _extension_additions_list_spec_for_CommunicationIdentifier,
        _root_component_type_list_2_spec_for_CommunicationIdentifier,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommunicationIdentifier(
        communication_Identity_Number,
        network_Identifier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommunicationIdentifier(el);
}

let _cached_encoder_for_CommunicationIdentifier: $.ASN1Encoder<CommunicationIdentifier> | null = null;

/**
 * @summary Encodes a(n) CommunicationIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommunicationIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_CommunicationIdentifier (value: CommunicationIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommunicationIdentifier) { _cached_encoder_for_CommunicationIdentifier = function (value: CommunicationIdentifier, elGetter: $.ASN1Encoder<CommunicationIdentifier>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.communication_Identity_Number !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.communication_Identity_Number, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Network_Identifier, $.BER)(value.network_Identifier, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CommunicationIdentifier(value, elGetter);
}


/* eslint-enable */
