/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { VoIPRoamingIndication, _decode_VoIPRoamingIndication, _encode_VoIPRoamingIndication, _enum_for_VoIPRoamingIndication } from "../TS33128Payloads/VoIPRoamingIndication.ta.mjs";
// export { VoIPRoamingIndication, _enum_for_VoIPRoamingIndication, VoIPRoamingIndication_roamingLBO /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingLBO /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoIPRoamingIndication_roamingS8HR /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingS8HR /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoIPRoamingIndication_roamingN9HR /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingN9HR /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VoIPRoamingIndication, _encode_VoIPRoamingIndication } from "../TS33128Payloads/VoIPRoamingIndication.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
// export { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
import { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";
// export { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";


/**
 * @summary StartOfInterceptionForActiveIMSSession
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StartOfInterceptionForActiveIMSSession ::= SEQUENCE
 * {
 *     originatingId              [1] SEQUENCE OF IMPU,
 *     terminatingId              [2] IMPU,
 *     sDPState                   [3] SEQUENCE OF OCTET STRING OPTIONAL,
 *     diversionIdentity          [4] IMPU OPTIONAL,
 *     voIPRoamingIndication      [5] VoIPRoamingIndication OPTIONAL,
 *     -- Tag [6] is not used.
 *     location                   [7] Location OPTIONAL,
 *     accessNetworkInformation   [8] SEQUENCE OF SIPAccessNetworkInformation OPTIONAL,
 *     cellularNetworkInformation [9] SEQUENCE OF SIPCellularNetworkInformation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class StartOfInterceptionForActiveIMSSession {
    constructor (
        /**
         * @summary `originatingId`.
         * @public
         * @readonly
         */
        readonly originatingId: IMPU[],
        /**
         * @summary `terminatingId`.
         * @public
         * @readonly
         */
        readonly terminatingId: IMPU,
        /**
         * @summary `sDPState`.
         * @public
         * @readonly
         */
        readonly sDPState: OPTIONAL<OCTET_STRING[]>,
        /**
         * @summary `diversionIdentity`.
         * @public
         * @readonly
         */
        readonly diversionIdentity: OPTIONAL<IMPU>,
        /**
         * @summary `voIPRoamingIndication`.
         * @public
         * @readonly
         */
        readonly voIPRoamingIndication: OPTIONAL<VoIPRoamingIndication>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `accessNetworkInformation`.
         * @public
         * @readonly
         */
        readonly accessNetworkInformation: OPTIONAL<SIPAccessNetworkInformation[]>,
        /**
         * @summary `cellularNetworkInformation`.
         * @public
         * @readonly
         */
        readonly cellularNetworkInformation: OPTIONAL<SIPCellularNetworkInformation[]>
    ) {}

    /**
     * @summary Restructures an object into a StartOfInterceptionForActiveIMSSession
     * @description
     * 
     * This takes an `object` and converts it to a `StartOfInterceptionForActiveIMSSession`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `StartOfInterceptionForActiveIMSSession`.
     * @returns {StartOfInterceptionForActiveIMSSession}
     */
    public static _from_object (_o: { [_K in keyof (StartOfInterceptionForActiveIMSSession)]: (StartOfInterceptionForActiveIMSSession)[_K] }): StartOfInterceptionForActiveIMSSession {
        return new StartOfInterceptionForActiveIMSSession(_o.originatingId, _o.terminatingId, _o.sDPState, _o.diversionIdentity, _o.voIPRoamingIndication, _o.location, _o.accessNetworkInformation, _o.cellularNetworkInformation);
    }

        /**
         * @summary The enum used as the type of the component `voIPRoamingIndication`
         * @public
         * @static
         */

    public static _enum_for_voIPRoamingIndication = _enum_for_VoIPRoamingIndication;
}

/**
 * @summary The Leading Root Component Types of StartOfInterceptionForActiveIMSSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_StartOfInterceptionForActiveIMSSession: $.ComponentSpec[] = [
    new $.ComponentSpec("originatingId", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("terminatingId", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sDPState", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("diversionIdentity", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("voIPRoamingIndication", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("accessNetworkInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of StartOfInterceptionForActiveIMSSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_StartOfInterceptionForActiveIMSSession: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of StartOfInterceptionForActiveIMSSession
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_StartOfInterceptionForActiveIMSSession: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_StartOfInterceptionForActiveIMSSession: $.ASN1Decoder<StartOfInterceptionForActiveIMSSession> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StartOfInterceptionForActiveIMSSession
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StartOfInterceptionForActiveIMSSession (el: _Element): StartOfInterceptionForActiveIMSSession {
    if (!_cached_decoder_for_StartOfInterceptionForActiveIMSSession) { _cached_decoder_for_StartOfInterceptionForActiveIMSSession = function (el: _Element): StartOfInterceptionForActiveIMSSession {
    let originatingId!: IMPU[];
    let terminatingId!: IMPU;
    let sDPState: OPTIONAL<OCTET_STRING[]>;
    let diversionIdentity: OPTIONAL<IMPU>;
    let voIPRoamingIndication: OPTIONAL<VoIPRoamingIndication>;
    let location: OPTIONAL<Location>;
    let accessNetworkInformation: OPTIONAL<SIPAccessNetworkInformation[]>;
    let cellularNetworkInformation: OPTIONAL<SIPCellularNetworkInformation[]>;
    const callbacks: $.DecodingMap = {
        "originatingId": (_el: _Element): void => { originatingId = $._decode_implicit<IMPU[]>(() => $._decodeSequenceOf<IMPU>(() => _decode_IMPU))(_el); },
        "terminatingId": (_el: _Element): void => { terminatingId = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "sDPState": (_el: _Element): void => { sDPState = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSequenceOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "diversionIdentity": (_el: _Element): void => { diversionIdentity = $._decode_explicit<IMPU>(() => _decode_IMPU)(_el); },
        "voIPRoamingIndication": (_el: _Element): void => { voIPRoamingIndication = $._decode_implicit<VoIPRoamingIndication>(() => _decode_VoIPRoamingIndication)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<SIPAccessNetworkInformation[]>(() => $._decodeSequenceOf<SIPAccessNetworkInformation>(() => _decode_SIPAccessNetworkInformation))(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<SIPCellularNetworkInformation[]>(() => $._decodeSequenceOf<SIPCellularNetworkInformation>(() => _decode_SIPCellularNetworkInformation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_StartOfInterceptionForActiveIMSSession,
        _extension_additions_list_spec_for_StartOfInterceptionForActiveIMSSession,
        _root_component_type_list_2_spec_for_StartOfInterceptionForActiveIMSSession,
        undefined,
    );
    return new StartOfInterceptionForActiveIMSSession(
        originatingId,
        terminatingId,
        sDPState,
        diversionIdentity,
        voIPRoamingIndication,
        location,
        accessNetworkInformation,
        cellularNetworkInformation
    );
}; }
    return _cached_decoder_for_StartOfInterceptionForActiveIMSSession(el);
}

let _cached_encoder_for_StartOfInterceptionForActiveIMSSession: $.ASN1Encoder<StartOfInterceptionForActiveIMSSession> | null = null;

/**
 * @summary Encodes a(n) StartOfInterceptionForActiveIMSSession into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StartOfInterceptionForActiveIMSSession, encoded as an ASN.1 Element.
 */
export
function _encode_StartOfInterceptionForActiveIMSSession (value: StartOfInterceptionForActiveIMSSession, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StartOfInterceptionForActiveIMSSession) { _cached_encoder_for_StartOfInterceptionForActiveIMSSession = function (value: StartOfInterceptionForActiveIMSSession, elGetter: $.ASN1Encoder<StartOfInterceptionForActiveIMSSession>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<IMPU>(() => _encode_IMPU, $.BER), $.BER)(value.originatingId, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IMPU, $.BER)(value.terminatingId, $.BER),
            /* IF_ABSENT  */ ((value.sDPState === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.sDPState, $.BER)),
            /* IF_ABSENT  */ ((value.diversionIdentity === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_IMPU, $.BER)(value.diversionIdentity, $.BER)),
            /* IF_ABSENT  */ ((value.voIPRoamingIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_VoIPRoamingIndication, $.BER)(value.voIPRoamingIndication, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.accessNetworkInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<SIPAccessNetworkInformation>(() => _encode_SIPAccessNetworkInformation, $.BER), $.BER)(value.accessNetworkInformation, $.BER)),
            /* IF_ABSENT  */ ((value.cellularNetworkInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<SIPCellularNetworkInformation>(() => _encode_SIPCellularNetworkInformation, $.BER), $.BER)(value.cellularNetworkInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_StartOfInterceptionForActiveIMSSession(value, elGetter);
}


/* eslint-enable */
