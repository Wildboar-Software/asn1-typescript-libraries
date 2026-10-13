/* eslint-disable */
import {
    GeneralizedTime,
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessEventType, _decode_AccessEventType, _encode_AccessEventType } from "../L2AccessPDU/AccessEventType.ta.mjs";
import { InternetAccessType, _decode_InternetAccessType, _encode_InternetAccessType } from "../L2AccessPDU/InternetAccessType.ta.mjs";
import { EndReason, _decode_EndReason, _encode_EndReason } from "../L2AccessPDU/EndReason.ta.mjs";
import { AuthenticationType, _decode_AuthenticationType, _encode_AuthenticationType } from "../L2AccessPDU/AuthenticationType.ta.mjs";


/**
 * @summary L2IRIContents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * L2IRIContents ::= SEQUENCE
 * {
 *     accessEventType             [0] AccessEventType,
 *     internetAccessType          [2] InternetAccessType OPTIONAL,
 *     targetNetworkID             [5] UTF8String (SIZE (1..128)) OPTIONAL,
 *         -- Target network ID (e.g. MAC address, PSTN number, additional information from
 *         -- network elements)
 *     targetCPEID                 [6] UTF8String (SIZE (1..128)) OPTIONAL,
 *         -- CPEID (e.g. Relay Agent info, computer name)
 *     targetLocation              [7] UTF8String (SIZE (1..64)) OPTIONAL,
 *         -- <for further study>
 *     nASPortNumber               [8] INTEGER (0..4294967295) OPTIONAL,
 *         -- The NAS port number used by the target
 *     callBackNumber              [9] UTF8String (SIZE (1..20)) OPTIONAL,
 *         -- The number used to call-back the target
 *     startTime                   [10] GeneralizedTime OPTIONAL,
 *         -- The start date-time of the session or lease
 *     endTime                     [11] GeneralizedTime OPTIONAL,
 *         -- The end date-time of the session or lease
 *     endReason                   [12] EndReason OPTIONAL,
 *         -- The reason for the session to end
 *     octetsReceived              [13] INTEGER (0..18446744073709551615) OPTIONAL,
 *         -- The number of octets the target received
 *     octetsTransmitted           [14] INTEGER (0..18446744073709551615) OPTIONAL,
 *         -- The number of octets the target transmitted
 *     rawAAAData                  [15] OCTET STRING OPTIONAL,
 *         -- Content of the raw AAA record
 *     ...,
 *     authenticationType          [16] AuthenticationType OPTIONAL
 *         -- Field used to identify the authentication type to assist with LEMF data validation
 * }
 * ```
 * 
 * @class
 */
export
class L2IRIContents {
    /**
     * @summary `accessEventType`.
     * @public
     * @readonly
     */
    readonly accessEventType: AccessEventType;
    /**
     * @summary `internetAccessType`.
     * @public
     * @readonly
     */
    readonly internetAccessType: OPTIONAL<InternetAccessType>;
    /**
     * @summary `targetNetworkID`.
     * @public
     * @readonly
     */
    readonly targetNetworkID: OPTIONAL<UTF8String>;
    /**
     * @summary `targetCPEID`.
     * @public
     * @readonly
     */
    readonly targetCPEID: OPTIONAL<UTF8String>;
    /**
     * @summary `targetLocation`.
     * @public
     * @readonly
     */
    readonly targetLocation: OPTIONAL<UTF8String>;
    /**
     * @summary `nASPortNumber`.
     * @public
     * @readonly
     */
    readonly nASPortNumber: OPTIONAL<INTEGER>;
    /**
     * @summary `callBackNumber`.
     * @public
     * @readonly
     */
    readonly callBackNumber: OPTIONAL<UTF8String>;
    /**
     * @summary `startTime`.
     * @public
     * @readonly
     */
    readonly startTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `endTime`.
     * @public
     * @readonly
     */
    readonly endTime: OPTIONAL<GeneralizedTime>;
    /**
     * @summary `endReason`.
     * @public
     * @readonly
     */
    readonly endReason: OPTIONAL<EndReason>;
    /**
     * @summary `octetsReceived`.
     * @public
     * @readonly
     */
    readonly octetsReceived: OPTIONAL<INTEGER>;
    /**
     * @summary `octetsTransmitted`.
     * @public
     * @readonly
     */
    readonly octetsTransmitted: OPTIONAL<INTEGER>;
    /**
     * @summary `rawAAAData`.
     * @public
     * @readonly
     */
    readonly rawAAAData: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `authenticationType`.
     * @public
     * @readonly
     */
    readonly authenticationType: OPTIONAL<AuthenticationType>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        accessEventType: AccessEventType,
        internetAccessType: OPTIONAL<InternetAccessType>,
        targetNetworkID: OPTIONAL<UTF8String>,
        targetCPEID: OPTIONAL<UTF8String>,
        targetLocation: OPTIONAL<UTF8String>,
        nASPortNumber: OPTIONAL<INTEGER>,
        callBackNumber: OPTIONAL<UTF8String>,
        startTime: OPTIONAL<GeneralizedTime>,
        endTime: OPTIONAL<GeneralizedTime>,
        endReason: OPTIONAL<EndReason>,
        octetsReceived: OPTIONAL<INTEGER>,
        octetsTransmitted: OPTIONAL<INTEGER>,
        rawAAAData: OPTIONAL<OCTET_STRING>,
        authenticationType: OPTIONAL<AuthenticationType>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.accessEventType = accessEventType;
        this.internetAccessType = internetAccessType;
        this.targetNetworkID = targetNetworkID;
        this.targetCPEID = targetCPEID;
        this.targetLocation = targetLocation;
        this.nASPortNumber = nASPortNumber;
        this.callBackNumber = callBackNumber;
        this.startTime = startTime;
        this.endTime = endTime;
        this.endReason = endReason;
        this.octetsReceived = octetsReceived;
        this.octetsTransmitted = octetsTransmitted;
        this.rawAAAData = rawAAAData;
        this.authenticationType = authenticationType;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a L2IRIContents
     * @description
     * 
     * This takes an `object` and converts it to a `L2IRIContents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `L2IRIContents`.
     * @returns {L2IRIContents}
     */
    public static _from_object (_o: { [_K in keyof (L2IRIContents)]: (L2IRIContents)[_K] }): L2IRIContents {
        return new L2IRIContents(_o.accessEventType, _o.internetAccessType, _o.targetNetworkID, _o.targetCPEID, _o.targetLocation, _o.nASPortNumber, _o.callBackNumber, _o.startTime, _o.endTime, _o.endReason, _o.octetsReceived, _o.octetsTransmitted, _o.rawAAAData, _o.authenticationType, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of L2IRIContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_L2IRIContents: $.ComponentSpec[] = [
    new $.ComponentSpec("accessEventType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("internetAccessType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("targetNetworkID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("targetCPEID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("targetLocation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("nASPortNumber", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("callBackNumber", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("endTime", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("endReason", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("octetsReceived", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("octetsTransmitted", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("rawAAAData", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of L2IRIContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_L2IRIContents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of L2IRIContents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_L2IRIContents: $.ComponentSpec[] = [
    new $.ComponentSpec("authenticationType", true, $.hasTag(_TagClass.context, 16))
];

let _cached_decoder_for_L2IRIContents: $.ASN1Decoder<L2IRIContents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) L2IRIContents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_L2IRIContents (el: _Element): L2IRIContents {
    if (!_cached_decoder_for_L2IRIContents) { _cached_decoder_for_L2IRIContents = function (el: _Element): L2IRIContents {
    let accessEventType!: AccessEventType;
    let internetAccessType: OPTIONAL<InternetAccessType>;
    let targetNetworkID: OPTIONAL<UTF8String>;
    let targetCPEID: OPTIONAL<UTF8String>;
    let targetLocation: OPTIONAL<UTF8String>;
    let nASPortNumber: OPTIONAL<INTEGER>;
    let callBackNumber: OPTIONAL<UTF8String>;
    let startTime: OPTIONAL<GeneralizedTime>;
    let endTime: OPTIONAL<GeneralizedTime>;
    let endReason: OPTIONAL<EndReason>;
    let octetsReceived: OPTIONAL<INTEGER>;
    let octetsTransmitted: OPTIONAL<INTEGER>;
    let rawAAAData: OPTIONAL<OCTET_STRING>;
    let authenticationType: OPTIONAL<AuthenticationType>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "accessEventType": (_el: _Element): void => { accessEventType = $._decode_implicit<AccessEventType>(() => _decode_AccessEventType)(_el); },
        "internetAccessType": (_el: _Element): void => { internetAccessType = $._decode_implicit<InternetAccessType>(() => _decode_InternetAccessType)(_el); },
        "targetNetworkID": (_el: _Element): void => {
            targetNetworkID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (targetNetworkID.length < 1 || targetNetworkID.length > 128) {
                throw new ASN1SizeError("L2IRIContents.targetNetworkID violates SIZE constraint");
            }
        },
        "targetCPEID": (_el: _Element): void => {
            targetCPEID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (targetCPEID.length < 1 || targetCPEID.length > 128) {
                throw new ASN1SizeError("L2IRIContents.targetCPEID violates SIZE constraint");
            }
        },
        "targetLocation": (_el: _Element): void => {
            targetLocation = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (targetLocation.length < 1 || targetLocation.length > 64) {
                throw new ASN1SizeError("L2IRIContents.targetLocation violates SIZE constraint");
            }
        },
        "nASPortNumber": (_el: _Element): void => {
            nASPortNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof nASPortNumber === "bigint" ? nASPortNumber : BigInt(nASPortNumber);
            if (_n < 0n || _n > 4294967295n) {
                throw new ASN1OverflowError("L2IRIContents.nASPortNumber violates INTEGER range");
            }
        },
        "callBackNumber": (_el: _Element): void => {
            callBackNumber = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el);
            if (callBackNumber.length < 1 || callBackNumber.length > 20) {
                throw new ASN1SizeError("L2IRIContents.callBackNumber violates SIZE constraint");
            }
        },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "endTime": (_el: _Element): void => { endTime = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); },
        "endReason": (_el: _Element): void => { endReason = $._decode_implicit<EndReason>(() => _decode_EndReason)(_el); },
        "octetsReceived": (_el: _Element): void => {
            octetsReceived = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof octetsReceived === "bigint" ? octetsReceived : BigInt(octetsReceived);
            if (_n < 0n || _n > 18446744073709551615n) {
                throw new ASN1OverflowError("L2IRIContents.octetsReceived violates INTEGER range");
            }
        },
        "octetsTransmitted": (_el: _Element): void => {
            octetsTransmitted = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el);
            const _n = typeof octetsTransmitted === "bigint" ? octetsTransmitted : BigInt(octetsTransmitted);
            if (_n < 0n || _n > 18446744073709551615n) {
                throw new ASN1OverflowError("L2IRIContents.octetsTransmitted violates INTEGER range");
            }
        },
        "rawAAAData": (_el: _Element): void => { rawAAAData = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "authenticationType": (_el: _Element): void => { authenticationType = $._decode_implicit<AuthenticationType>(() => _decode_AuthenticationType)(_el); },
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_L2IRIContents,
        _extension_additions_list_spec_for_L2IRIContents,
        _root_component_type_list_2_spec_for_L2IRIContents,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new L2IRIContents(
        accessEventType,
        internetAccessType,
        targetNetworkID,
        targetCPEID,
        targetLocation,
        nASPortNumber,
        callBackNumber,
        startTime,
        endTime,
        endReason,
        octetsReceived,
        octetsTransmitted,
        rawAAAData,
        authenticationType,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_L2IRIContents(el);
}

let _cached_encoder_for_L2IRIContents: $.ASN1Encoder<L2IRIContents> | null = null;

/**
 * @summary Encodes a(n) L2IRIContents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The L2IRIContents, encoded as an ASN.1 Element.
 */
export
function _encode_L2IRIContents (value: L2IRIContents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_L2IRIContents) { _cached_encoder_for_L2IRIContents = function (value: L2IRIContents, elGetter: $.ASN1Encoder<L2IRIContents>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(14 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED    */ $._encode_implicit(_TagClass.context, 0, () => _encode_AccessEventType, $.BER)(value.accessEventType, $.BER);
    if (value.internetAccessType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternetAccessType, $.BER)(value.internetAccessType, $.BER);
    }
    if (value.targetNetworkID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.targetNetworkID, $.BER);
    }
    if (value.targetCPEID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.targetCPEID, $.BER);
    }
    if (value.targetLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeUTF8String, $.BER)(value.targetLocation, $.BER);
    }
    if (value.nASPortNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.nASPortNumber, $.BER);
    }
    if (value.callBackNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.callBackNumber, $.BER);
    }
    if (value.startTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeGeneralizedTime, $.BER)(value.startTime, $.BER);
    }
    if (value.endTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeGeneralizedTime, $.BER)(value.endTime, $.BER);
    }
    if (value.endReason !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 12, () => _encode_EndReason, $.BER)(value.endReason, $.BER);
    }
    if (value.octetsReceived !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeInteger, $.BER)(value.octetsReceived, $.BER);
    }
    if (value.octetsTransmitted !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeInteger, $.BER)(value.octetsTransmitted, $.BER);
    }
    if (value.rawAAAData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 15, () => $._encodeOctetString, $.BER)(value.rawAAAData, $.BER);
    }
    if (value.authenticationType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT   */ $._encode_implicit(_TagClass.context, 16, () => _encode_AuthenticationType, $.BER)(value.authenticationType, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_L2IRIContents(value, elGetter);
}


/* eslint-enable */
