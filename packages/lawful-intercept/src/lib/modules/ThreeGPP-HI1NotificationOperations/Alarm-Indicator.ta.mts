/* eslint-disable */
import {
    type OBJECT_IDENTIFIER,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
// export { CommunicationIdentifier, _decode_CommunicationIdentifier, _encode_CommunicationIdentifier } from "../HI2Operations/CommunicationIdentifier.ta.mjs";
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
import { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
// export { LawfulInterceptionIdentifier, _decode_LawfulInterceptionIdentifier, _encode_LawfulInterceptionIdentifier } from "../HI2Operations/LawfulInterceptionIdentifier.ta.mjs";
import { ThreeGPP_National_HI1_ASN1parameters, _decode_ThreeGPP_National_HI1_ASN1parameters, _encode_ThreeGPP_National_HI1_ASN1parameters } from "../ThreeGPP-HI1NotificationOperations/ThreeGPP-National-HI1-ASN1parameters.ta.mjs";
// export { ThreeGPP_National_HI1_ASN1parameters, _decode_ThreeGPP_National_HI1_ASN1parameters, _encode_ThreeGPP_National_HI1_ASN1parameters } from "../ThreeGPP-HI1NotificationOperations/ThreeGPP-National-HI1-ASN1parameters.ta.mjs";
import { Target_Information, _decode_Target_Information, _encode_Target_Information } from "../ThreeGPP-HI1NotificationOperations/Target-Information.ta.mjs";
// export { Target_Information, _decode_Target_Information, _encode_Target_Information } from "../ThreeGPP-HI1NotificationOperations/Target-Information.ta.mjs";
import { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";
// export { Network_Identifier, _decode_Network_Identifier, _encode_Network_Identifier } from "../HI2Operations/Network-Identifier.ta.mjs";


/**
 * @summary Alarm_Indicator
 * @description
 * 
 * Alarm indication toward the LEMF. Informative annex M lists alarm reporting,
 * in particular an O&M alarm, as for further study. The schema still defines a
 * free-format alarm string. 3GPP TS 33.108, annex M (informative).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Alarm-Indicator ::= SEQUENCE
 * {
 *     domainID                        [0] OBJECT IDENTIFIER OPTIONAL,
 *         -- Once using FTP delivery mechanism
 *     communicationIdentifier            [1] CommunicationIdentifier OPTIONAL,
 *         -- Only the NO/AP/SP Identifier is provided (the one provided with the
 *         -- Lawful authorization)
 *     timeStamp                        [2] TimeStamp,
 *         -- date and time of the report.
 *     alarm-information                [3] OCTET STRING (SIZE (1..256)),
 *         -- Provides information about alarms (free format).
 *         -- Until ASN.1 Release 16 version 0 (document version v16.3.0) the octet string
 *         -- was limited to a size of 25.
 *     lawfulInterceptionIdentifier    [4] LawfulInterceptionIdentifier OPTIONAL,
 *         -- This identifier is the LIID identity provided with the lawful authorization
 *         -- for each target in according to national law
 *     threeGPP-National-HI1-ASN1parameters        [5] ThreeGPP-National-HI1-ASN1parameters OPTIONAL,
 *     target-Information                [6] Target-Information OPTIONAL,
 *     network-Identifier                [7] Network-Identifier OPTIONAL,
 *     -- the NO/AP/SP Identifier,
 *         -- Same definition as annexes B3, B8, B9, B.11.1
 *     network-Element-Information        [8] OCTET STRING (SIZE (1..256)) OPTIONAL,
 *         -- This identifier may be a network element identifier such an IP address with its IP value,
 *         -- that may not work properly. To be defined between the CSP and the LEA.
 * ...}
 * ```
 * 
 * @class
 */
export
class Alarm_Indicator {
    /**
     * @summary `domainID`.
     * @description
     * 
     * Object identifier, included when FTP delivery is used. Which OID is
     * placed here is not stated. 3GPP TS 33.108, annex M (informative).
     * 
     * @public
     * @readonly
     */
    readonly domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `communicationIdentifier`.
     * @description
     * 
     * Only the operator / access-provider / service-provider identifier from
     * the lawful authorization. 3GPP TS 33.108, annex M (informative) and the
     * accompanying schema.
     * 
     * @public
     * @readonly
     */
    readonly communicationIdentifier: OPTIONAL<CommunicationIdentifier>;
    /**
     * @summary `timeStamp`.
     * @description
     * 
     * Date and time of the alarm report. 3GPP TS 33.108, annex M (informative).
     * 
     * @public
     * @readonly
     */
    readonly timeStamp: TimeStamp;
    /**
     * @summary `alarm_information`.
     * @description
     * 
     * Free-format alarm information, one to 256 octets. Until Release 16
     * version 0 (document v16.3.0) the schema limited the string to 25 octets.
     * No alarm layout is defined. Annex M (informative) says alarm details are
     * for further study. 3GPP TS 33.108, annex M.
     * 
     * @public
     * @readonly
     */
    readonly alarm_information: OCTET_STRING;
    /**
     * @summary `lawfulInterceptionIdentifier`.
     * @description
     * 
     * LIID from the lawful authorization for the target, according to national
     * law. Optional on an alarm. The informative annex recommends limiting
     * flows that contain target identities. 3GPP TS 33.108, annex M
     * (informative).
     * 
     * @public
     * @readonly
     */
    readonly lawfulInterceptionIdentifier: OPTIONAL<LawfulInterceptionIdentifier>;
    /**
     * @summary `threeGPP_National_HI1_ASN1parameters`.
     * @description
     * 
     * National HI1 parameters when national regulation requests them. Layout
     * not defined here. 3GPP TS 33.108, annex M (informative).
     * 
     * @public
     * @readonly
     */
    readonly threeGPP_National_HI1_ASN1parameters: OPTIONAL<ThreeGPP_National_HI1_ASN1parameters>;
    /**
     * @summary `target_Information`.
     * @description
     * 
     * Warrant and delivery details associated with the alarm. Optional. Target
     * identities remain limited under informative annex M. 3GPP TS 33.108,
     * annex M (informative).
     * 
     * @public
     * @readonly
     */
    readonly target_Information: OPTIONAL<Target_Information>;
    /**
     * @summary `network_Identifier`.
     * @description
     * 
     * Operator identifier of the network sending the alarm. Same notion as
     * annexes B.3, B.8, B.9, and B.11.1. 3GPP TS 33.108, annex M (informative).
     * 
     * @public
     * @readonly
     */
    readonly network_Identifier: OPTIONAL<Network_Identifier>;
    /**
     * @summary `network_Element_Information`.
     * @description
     * 
     * Network element that may not be working, for example an IP address
     * together with that address. One to 256 octets. The identifier is agreed
     * between the CSP and the LEA. No layout is defined. 3GPP TS 33.108, annex
     * M (informative) and the accompanying schema.
     * 
     * @public
     * @readonly
     */
    readonly network_Element_Information: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        domainID: OPTIONAL<OBJECT_IDENTIFIER>,
        communicationIdentifier: OPTIONAL<CommunicationIdentifier>,
        timeStamp: TimeStamp,
        alarm_information: OCTET_STRING,
        lawfulInterceptionIdentifier?: OPTIONAL<LawfulInterceptionIdentifier>,
        threeGPP_National_HI1_ASN1parameters?: OPTIONAL<ThreeGPP_National_HI1_ASN1parameters>,
        target_Information?: OPTIONAL<Target_Information>,
        network_Identifier?: OPTIONAL<Network_Identifier>,
        network_Element_Information?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.domainID = domainID;
        this.communicationIdentifier = communicationIdentifier;
        this.timeStamp = timeStamp;
        this.alarm_information = alarm_information;
        this.lawfulInterceptionIdentifier = lawfulInterceptionIdentifier;
        this.threeGPP_National_HI1_ASN1parameters = threeGPP_National_HI1_ASN1parameters;
        this.target_Information = target_Information;
        this.network_Identifier = network_Identifier;
        this.network_Element_Information = network_Element_Information;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Alarm_Indicator
     * @description
     * 
     * This takes an `object` and converts it to a `Alarm_Indicator`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Alarm_Indicator`.
     * @returns {Alarm_Indicator}
     */
    public static _from_object (_o: { [_K in keyof (Alarm_Indicator)]: (Alarm_Indicator)[_K] }): Alarm_Indicator {
        return new Alarm_Indicator(_o.domainID, _o.communicationIdentifier, _o.timeStamp, _o.alarm_information, _o.lawfulInterceptionIdentifier, _o.threeGPP_National_HI1_ASN1parameters, _o.target_Information, _o.network_Identifier, _o.network_Element_Information, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of Alarm_Indicator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Alarm_Indicator: $.ComponentSpec[] = [
    new $.ComponentSpec("domainID", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("communicationIdentifier", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeStamp", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("alarm-information", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("lawfulInterceptionIdentifier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("threeGPP-National-HI1-ASN1parameters", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("target-Information", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("network-Identifier", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("network-Element-Information", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of Alarm_Indicator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Alarm_Indicator: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Alarm_Indicator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Alarm_Indicator: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Alarm_Indicator: $.ASN1Decoder<Alarm_Indicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Alarm_Indicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Alarm_Indicator (el: _Element): Alarm_Indicator {
    if (!_cached_decoder_for_Alarm_Indicator) { _cached_decoder_for_Alarm_Indicator = function (el: _Element): Alarm_Indicator {
    let domainID: OPTIONAL<OBJECT_IDENTIFIER>;
    let communicationIdentifier: OPTIONAL<CommunicationIdentifier>;
    let timeStamp!: TimeStamp;
    let alarm_information!: OCTET_STRING;
    let lawfulInterceptionIdentifier: OPTIONAL<LawfulInterceptionIdentifier>;
    let threeGPP_National_HI1_ASN1parameters: OPTIONAL<ThreeGPP_National_HI1_ASN1parameters>;
    let target_Information: OPTIONAL<Target_Information>;
    let network_Identifier: OPTIONAL<Network_Identifier>;
    let network_Element_Information: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "domainID": (_el: _Element): void => { domainID = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "communicationIdentifier": (_el: _Element): void => { communicationIdentifier = $._decode_implicit<CommunicationIdentifier>(() => _decode_CommunicationIdentifier)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_explicit<TimeStamp>(() => _decode_TimeStamp)(_el); },
        "alarm-information": (_el: _Element): void => {
            alarm_information = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (alarm_information.length < 1 || alarm_information.length > 256) {
                throw new ASN1SizeError("Alarm_Indicator.alarm_information violates SIZE constraint");
            }
        },
        "lawfulInterceptionIdentifier": (_el: _Element): void => { lawfulInterceptionIdentifier = $._decode_implicit<LawfulInterceptionIdentifier>(() => _decode_LawfulInterceptionIdentifier)(_el); },
        "threeGPP-National-HI1-ASN1parameters": (_el: _Element): void => { threeGPP_National_HI1_ASN1parameters = $._decode_implicit<ThreeGPP_National_HI1_ASN1parameters>(() => _decode_ThreeGPP_National_HI1_ASN1parameters)(_el); },
        "target-Information": (_el: _Element): void => { target_Information = $._decode_implicit<Target_Information>(() => _decode_Target_Information)(_el); },
        "network-Identifier": (_el: _Element): void => { network_Identifier = $._decode_implicit<Network_Identifier>(() => _decode_Network_Identifier)(_el); },
        "network-Element-Information": (_el: _Element): void => {
            network_Element_Information = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (network_Element_Information.length < 1 || network_Element_Information.length > 256) {
                throw new ASN1SizeError("Alarm_Indicator.network_Element_Information violates SIZE constraint");
            }
        }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Alarm_Indicator,
        _extension_additions_list_spec_for_Alarm_Indicator,
        _root_component_type_list_2_spec_for_Alarm_Indicator,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Alarm_Indicator(
        domainID,
        communicationIdentifier,
        timeStamp,
        alarm_information,
        lawfulInterceptionIdentifier,
        threeGPP_National_HI1_ASN1parameters,
        target_Information,
        network_Identifier,
        network_Element_Information,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Alarm_Indicator(el);
}

let _cached_encoder_for_Alarm_Indicator: $.ASN1Encoder<Alarm_Indicator> | null = null;

/**
 * @summary Encodes a(n) Alarm_Indicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Alarm_Indicator, encoded as an ASN.1 Element.
 */
export
function _encode_Alarm_Indicator (value: Alarm_Indicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Alarm_Indicator) { _cached_encoder_for_Alarm_Indicator = function (value: Alarm_Indicator, elGetter: $.ASN1Encoder<Alarm_Indicator>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.domainID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.domainID, $.BER);
    }
    if (value.communicationIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CommunicationIdentifier, $.BER)(value.communicationIdentifier, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_TimeStamp, $.BER)(value.timeStamp, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.alarm_information, $.BER);
    if (value.lawfulInterceptionIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_LawfulInterceptionIdentifier, $.BER)(value.lawfulInterceptionIdentifier, $.BER);
    }
    if (value.threeGPP_National_HI1_ASN1parameters !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_ThreeGPP_National_HI1_ASN1parameters, $.BER)(value.threeGPP_National_HI1_ASN1parameters, $.BER);
    }
    if (value.target_Information !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Target_Information, $.BER)(value.target_Information, $.BER);
    }
    if (value.network_Identifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Network_Identifier, $.BER)(value.network_Identifier, $.BER);
    }
    if (value.network_Element_Information !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeOctetString, $.BER)(value.network_Element_Information, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Alarm_Indicator(value, elGetter);
}


/* eslint-enable */
