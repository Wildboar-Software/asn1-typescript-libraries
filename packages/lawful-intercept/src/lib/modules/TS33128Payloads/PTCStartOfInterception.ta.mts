/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { Direction, _decode_Direction, _encode_Direction, _enum_for_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";
// export { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary PTCStartOfInterception
 * @description
 * 
 * The IRI-POI present in the PTC server shall generate an xIRI containing a
 * PTCStartOfInterception record when a PTC target or a PTC chat group as a
 * target has an active PTC session in progress. If multiple PTC Sessions are
 * active at the start of interception, a PTCStartOfInterception record is
 * generated for each active session. Accordingly, the IRI-POI in the PTC server
 * generates the xIRI when the following event is detected:
 *
 * - when the PTC server detects that LI is enabled on a PTC participant or a
 *   PTC chat group with an active PTC session.
 *
 * 3GPP TS 33.128, clause 7.5.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCStartOfInterception ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     preEstSessionID               [3] PTCSessionInfo OPTIONAL,
 *     pTCOriginatingID              [4] PTCTargetInformation,
 *     pTCSessionInfo                [5] PTCSessionInfo OPTIONAL,
 *     pTCHost                       [6] PTCTargetInformation OPTIONAL,
 *     pTCParticipants               [7] SEQUENCE OF PTCTargetInformation OPTIONAL,
 *     pTCMediaStreamAvail           [8] BOOLEAN OPTIONAL,
 *     pTCBearerCapability           [9] UTF8String OPTIONAL,
 *     location                      [10] Location OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCStartOfInterception {
    /**
     * @summary `pTCTargetInformation`.
     * @description
     *
     * Provide PTC target identity. At least one among IMPU, IMPI,
     * InstanceIdentifierURN and PTCChatGroupID shall be provided for
     * PTCTargetInformation.
     *
     * 3GPP TS 33.128, clause 7.5.2.6.
     *
     * @public
     * @readonly
     */
    readonly pTCTargetInformation: PTCTargetInformation;
    /**
     * @summary `pTCDirection`.
     * @description
     *
     * Indicates the direction of the session relative to the target: "toTarget"
     * or "fromTarget".
     *
     * 3GPP TS 33.128, clause 7.5.2.6.
     *
     * @public
     * @readonly
     */
    readonly pTCDirection: Direction;
    /**
     * @summary `preEstSessionID`.
     * @description
     *
     * Identifies the PTC Pre-Established Session Identity when available.
     *
     * 3GPP TS 33.128, clause 7.5.2.6.
     *
     * @public
     * @readonly
     */
    readonly preEstSessionID: OPTIONAL<PTCSessionInfo>;
    /**
     * @summary `pTCOriginatingID`.
     * @description
     *
     * Shall identify the originating party.
     *
     * 3GPP TS 33.128, clause 7.5.2.6.
     *
     * @public
     * @readonly
     */
    readonly pTCOriginatingID: PTCTargetInformation;
    /**
     * @summary `pTCSessionInfo`.
     * @description
     *
     * Shall provide PTC session information such as PTC Session URI and PTC
     * Session type (e.g. on-demand, pre-established, ad-hoc, pre-arranged,
     * group session) when available.
     *
     * 3GPP TS 33.128, clause 7.5.2.6.
     *
     * @public
     * @readonly
     */
    readonly pTCSessionInfo: OPTIONAL<PTCSessionInfo>;
    /**
     * @summary `pTCHost`.
     * @description
     *
     * Shall identify the PTC participant who has the authority to initiate and
     * administrate a PTC session, if known.
     *
     * 3GPP TS 33.128, clause 7.5.2.6.
     *
     * @public
     * @readonly
     */
    readonly pTCHost: OPTIONAL<PTCTargetInformation>;
    /**
     * @summary `pTCParticipants`.
     * @description
     *
     * Shall identify the individual PTC participants of the communication
     * session, when known.
     *
     * 3GPP TS 33.128, clause 7.5.2.6.
     *
     * @public
     * @readonly
     */
    readonly pTCParticipants: OPTIONAL<PTCTargetInformation[]>;
    /**
     * @summary `pTCMediaStreamAvail`.
     * @description
     *
     * Shall include this parameter to indicate if the PTC target is able/not
     * able to receive media streams immediately. True indicates available for
     * media, while false indicates not able to accept media.
     *
     * 3GPP TS 33.128, clause 7.5.2.6.
     *
     * @public
     * @readonly
     */
    readonly pTCMediaStreamAvail: OPTIONAL<BOOLEAN>;
    /**
     * @summary `pTCBearerCapability`.
     * @description
     *
     * Shall provide when known the media characteristics information elements
     * of the PTC session, encoded in SDP format as per RFC 4566 [43] clause 5.
     *
     * 3GPP TS 33.128, clause 7.5.2.6.
     *
     * @public
     * @readonly
     */
    readonly pTCBearerCapability: OPTIONAL<UTF8String>;
    /**
     * @summary `location`.
     * @description
     *
     * Shall include the PTC target’s location when reporting of the PTC
     * target’s location information is authorized and available.
     *
     * 3GPP TS 33.128, clause 7.5.2.6.
     *
     * @public
     * @readonly
     */
    readonly location: OPTIONAL<Location>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        pTCTargetInformation: PTCTargetInformation,
        pTCDirection: Direction,
        preEstSessionID: OPTIONAL<PTCSessionInfo>,
        pTCOriginatingID: PTCTargetInformation,
        pTCSessionInfo?: OPTIONAL<PTCSessionInfo>,
        pTCHost?: OPTIONAL<PTCTargetInformation>,
        pTCParticipants?: OPTIONAL<PTCTargetInformation[]>,
        pTCMediaStreamAvail?: OPTIONAL<BOOLEAN>,
        pTCBearerCapability?: OPTIONAL<UTF8String>,
        location?: OPTIONAL<Location>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.pTCTargetInformation = pTCTargetInformation;
        this.pTCDirection = pTCDirection;
        this.preEstSessionID = preEstSessionID;
        this.pTCOriginatingID = pTCOriginatingID;
        this.pTCSessionInfo = pTCSessionInfo;
        this.pTCHost = pTCHost;
        this.pTCParticipants = pTCParticipants;
        this.pTCMediaStreamAvail = pTCMediaStreamAvail;
        this.pTCBearerCapability = pTCBearerCapability;
        this.location = location;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PTCStartOfInterception
     * @description
     * 
     * This takes an `object` and converts it to a `PTCStartOfInterception`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCStartOfInterception`.
     * @returns {PTCStartOfInterception}
     */
    public static _from_object (_o: { [_K in keyof (PTCStartOfInterception)]: (PTCStartOfInterception)[_K] }): PTCStartOfInterception {
        return new PTCStartOfInterception(_o.pTCTargetInformation, _o.pTCDirection, _o.preEstSessionID, _o.pTCOriginatingID, _o.pTCSessionInfo, _o.pTCHost, _o.pTCParticipants, _o.pTCMediaStreamAvail, _o.pTCBearerCapability, _o.location, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PTCStartOfInterception
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCStartOfInterception: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("preEstSessionID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCOriginatingID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCSessionInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCHost", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pTCParticipants", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("pTCMediaStreamAvail", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("pTCBearerCapability", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of PTCStartOfInterception
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCStartOfInterception: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCStartOfInterception
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCStartOfInterception: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCStartOfInterception: $.ASN1Decoder<PTCStartOfInterception> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCStartOfInterception
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCStartOfInterception (el: _Element): PTCStartOfInterception {
    if (!_cached_decoder_for_PTCStartOfInterception) { _cached_decoder_for_PTCStartOfInterception = function (el: _Element): PTCStartOfInterception {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let preEstSessionID: OPTIONAL<PTCSessionInfo>;
    let pTCOriginatingID!: PTCTargetInformation;
    let pTCSessionInfo: OPTIONAL<PTCSessionInfo>;
    let pTCHost: OPTIONAL<PTCTargetInformation>;
    let pTCParticipants: OPTIONAL<PTCTargetInformation[]>;
    let pTCMediaStreamAvail: OPTIONAL<BOOLEAN>;
    let pTCBearerCapability: OPTIONAL<UTF8String>;
    let location: OPTIONAL<Location>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "preEstSessionID": (_el: _Element): void => { preEstSessionID = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCOriginatingID": (_el: _Element): void => { pTCOriginatingID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCHost": (_el: _Element): void => { pTCHost = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCParticipants": (_el: _Element): void => { pTCParticipants = $._decode_implicit<PTCTargetInformation[]>(() => $._decodeSequenceOf<PTCTargetInformation>(() => _decode_PTCTargetInformation))(_el); },
        "pTCMediaStreamAvail": (_el: _Element): void => { pTCMediaStreamAvail = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "pTCBearerCapability": (_el: _Element): void => { pTCBearerCapability = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCStartOfInterception,
        _extension_additions_list_spec_for_PTCStartOfInterception,
        _root_component_type_list_2_spec_for_PTCStartOfInterception,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PTCStartOfInterception(
        pTCTargetInformation,
        pTCDirection,
        preEstSessionID,
        pTCOriginatingID,
        pTCSessionInfo,
        pTCHost,
        pTCParticipants,
        pTCMediaStreamAvail,
        pTCBearerCapability,
        location,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PTCStartOfInterception(el);
}

let _cached_encoder_for_PTCStartOfInterception: $.ASN1Encoder<PTCStartOfInterception> | null = null;

/**
 * @summary Encodes a(n) PTCStartOfInterception into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCStartOfInterception, encoded as an ASN.1 Element.
 */
export
function _encode_PTCStartOfInterception (value: PTCStartOfInterception, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCStartOfInterception) { _cached_encoder_for_PTCStartOfInterception = function (value: PTCStartOfInterception, elGetter: $.ASN1Encoder<PTCStartOfInterception>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER);
    if (value.preEstSessionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_PTCSessionInfo, $.BER)(value.preEstSessionID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PTCTargetInformation, $.BER)(value.pTCOriginatingID, $.BER);
    if (value.pTCSessionInfo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessionInfo, $.BER);
    }
    if (value.pTCHost !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_PTCTargetInformation, $.BER)(value.pTCHost, $.BER);
    }
    if (value.pTCParticipants !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<PTCTargetInformation>(() => _encode_PTCTargetInformation, $.BER), $.BER)(value.pTCParticipants, $.BER);
    }
    if (value.pTCMediaStreamAvail !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.pTCMediaStreamAvail, $.BER);
    }
    if (value.pTCBearerCapability !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.pTCBearerCapability, $.BER);
    }
    if (value.location !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_Location, $.BER)(value.location, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PTCStartOfInterception(value, elGetter);
}


/* eslint-enable */
