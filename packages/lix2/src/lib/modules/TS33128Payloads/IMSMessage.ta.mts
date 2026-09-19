/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
// export { IMSPayload, _decode_IMSPayload, _encode_IMSPayload } from "../TS33128Payloads/IMSPayload.ta.mjs";
import { SessionDirection, _decode_SessionDirection, _encode_SessionDirection, _enum_for_SessionDirection } from "../TS33128Payloads/SessionDirection.ta.mjs";
// export { SessionDirection, _enum_for_SessionDirection, SessionDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, SessionDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, SessionDirection_combined /* IMPORTED_LONG_ENUMERATION_ITEM */, combined /* IMPORTED_SHORT_ENUMERATION_ITEM */, SessionDirection_indeterminate /* IMPORTED_LONG_ENUMERATION_ITEM */, indeterminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SessionDirection, _encode_SessionDirection } from "../TS33128Payloads/SessionDirection.ta.mjs";
import { VoIPRoamingIndication, _decode_VoIPRoamingIndication, _encode_VoIPRoamingIndication, _enum_for_VoIPRoamingIndication } from "../TS33128Payloads/VoIPRoamingIndication.ta.mjs";
// export { VoIPRoamingIndication, _enum_for_VoIPRoamingIndication, VoIPRoamingIndication_roamingLBO /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingLBO /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoIPRoamingIndication_roamingS8HR /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingS8HR /* IMPORTED_SHORT_ENUMERATION_ITEM */, VoIPRoamingIndication_roamingN9HR /* IMPORTED_LONG_ENUMERATION_ITEM */, roamingN9HR /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VoIPRoamingIndication, _encode_VoIPRoamingIndication } from "../TS33128Payloads/VoIPRoamingIndication.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
// export { SIPAccessNetworkInformation, _decode_SIPAccessNetworkInformation, _encode_SIPAccessNetworkInformation } from "../TS33128Payloads/SIPAccessNetworkInformation.ta.mjs";
import { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";
// export { SIPCellularNetworkInformation, _decode_SIPCellularNetworkInformation, _encode_SIPCellularNetworkInformation } from "../TS33128Payloads/SIPCellularNetworkInformation.ta.mjs";
import { NumberTranslation, _decode_NumberTranslation, _encode_NumberTranslation } from "../TS33128Payloads/NumberTranslation.ta.mjs";
// export { NumberTranslation, _decode_NumberTranslation, _encode_NumberTranslation } from "../TS33128Payloads/NumberTranslation.ta.mjs";


/**
 * @summary IMSMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSMessage ::= SEQUENCE
 * {
 *     payload                      [1] IMSPayload,
 *     sessionDirection             [2] SessionDirection,
 *     voIPRoamingIndication        [3] VoIPRoamingIndication OPTIONAL,
 *     -- Tag [4] is not used.
 *     -- Tag [5] is not used.
 *     location                     [6] Location OPTIONAL,
 *     accessNetworkInformation     [7] SEQUENCE OF SIPAccessNetworkInformation OPTIONAL,
 *     cellularNetworkInformation   [8] SEQUENCE OF SIPCellularNetworkInformation OPTIONAL,
 *     numberTranslationInformation [9] SEQUENCE OF NumberTranslation OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IMSMessage {
    constructor (
        /**
         * @summary `payload`.
         * @public
         * @readonly
         */
        readonly payload: IMSPayload,
        /**
         * @summary `sessionDirection`.
         * @public
         * @readonly
         */
        readonly sessionDirection: SessionDirection,
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
        readonly cellularNetworkInformation: OPTIONAL<SIPCellularNetworkInformation[]>,
        /**
         * @summary `numberTranslationInformation`.
         * @public
         * @readonly
         */
        readonly numberTranslationInformation: OPTIONAL<NumberTranslation[]>
    ) {}

    /**
     * @summary Restructures an object into a IMSMessage
     * @description
     * 
     * This takes an `object` and converts it to a `IMSMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IMSMessage`.
     * @returns {IMSMessage}
     */
    public static _from_object (_o: { [_K in keyof (IMSMessage)]: (IMSMessage)[_K] }): IMSMessage {
        return new IMSMessage(_o.payload, _o.sessionDirection, _o.voIPRoamingIndication, _o.location, _o.accessNetworkInformation, _o.cellularNetworkInformation, _o.numberTranslationInformation);
    }

        /**
         * @summary The enum used as the type of the component `sessionDirection`
         * @public
         * @static
         */

    public static _enum_for_sessionDirection = _enum_for_SessionDirection;        /**
         * @summary The enum used as the type of the component `voIPRoamingIndication`
         * @public
         * @static
         */

    public static _enum_for_voIPRoamingIndication = _enum_for_VoIPRoamingIndication;
}

/**
 * @summary The Leading Root Component Types of IMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IMSMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sessionDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("voIPRoamingIndication", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("accessNetworkInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("cellularNetworkInformation", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("numberTranslationInformation", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of IMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IMSMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IMSMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IMSMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IMSMessage: $.ASN1Decoder<IMSMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSMessage (el: _Element): IMSMessage {
    if (!_cached_decoder_for_IMSMessage) { _cached_decoder_for_IMSMessage = function (el: _Element): IMSMessage {
    let payload!: IMSPayload;
    let sessionDirection!: SessionDirection;
    let voIPRoamingIndication: OPTIONAL<VoIPRoamingIndication>;
    let location: OPTIONAL<Location>;
    let accessNetworkInformation: OPTIONAL<SIPAccessNetworkInformation[]>;
    let cellularNetworkInformation: OPTIONAL<SIPCellularNetworkInformation[]>;
    let numberTranslationInformation: OPTIONAL<NumberTranslation[]>;
    const callbacks: $.DecodingMap = {
        "payload": (_el: _Element): void => { payload = $._decode_explicit<IMSPayload>(() => _decode_IMSPayload)(_el); },
        "sessionDirection": (_el: _Element): void => { sessionDirection = $._decode_implicit<SessionDirection>(() => _decode_SessionDirection)(_el); },
        "voIPRoamingIndication": (_el: _Element): void => { voIPRoamingIndication = $._decode_implicit<VoIPRoamingIndication>(() => _decode_VoIPRoamingIndication)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "accessNetworkInformation": (_el: _Element): void => { accessNetworkInformation = $._decode_implicit<SIPAccessNetworkInformation[]>(() => $._decodeSequenceOf<SIPAccessNetworkInformation>(() => _decode_SIPAccessNetworkInformation))(_el); },
        "cellularNetworkInformation": (_el: _Element): void => { cellularNetworkInformation = $._decode_implicit<SIPCellularNetworkInformation[]>(() => $._decodeSequenceOf<SIPCellularNetworkInformation>(() => _decode_SIPCellularNetworkInformation))(_el); },
        "numberTranslationInformation": (_el: _Element): void => { numberTranslationInformation = $._decode_implicit<NumberTranslation[]>(() => $._decodeSequenceOf<NumberTranslation>(() => _decode_NumberTranslation))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IMSMessage,
        _extension_additions_list_spec_for_IMSMessage,
        _root_component_type_list_2_spec_for_IMSMessage,
        undefined,
    );
    return new IMSMessage(
        payload,
        sessionDirection,
        voIPRoamingIndication,
        location,
        accessNetworkInformation,
        cellularNetworkInformation,
        numberTranslationInformation
    );
}; }
    return _cached_decoder_for_IMSMessage(el);
}

let _cached_encoder_for_IMSMessage: $.ASN1Encoder<IMSMessage> | null = null;

/**
 * @summary Encodes a(n) IMSMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSMessage, encoded as an ASN.1 Element.
 */
export
function _encode_IMSMessage (value: IMSMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSMessage) { _cached_encoder_for_IMSMessage = function (value: IMSMessage, elGetter: $.ASN1Encoder<IMSMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IMSPayload, $.BER)(value.payload, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SessionDirection, $.BER)(value.sessionDirection, $.BER),
            /* IF_ABSENT  */ ((value.voIPRoamingIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_VoIPRoamingIndication, $.BER)(value.voIPRoamingIndication, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* IF_ABSENT  */ ((value.accessNetworkInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<SIPAccessNetworkInformation>(() => _encode_SIPAccessNetworkInformation, $.BER), $.BER)(value.accessNetworkInformation, $.BER)),
            /* IF_ABSENT  */ ((value.cellularNetworkInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<SIPCellularNetworkInformation>(() => _encode_SIPCellularNetworkInformation, $.BER), $.BER)(value.cellularNetworkInformation, $.BER)),
            /* IF_ABSENT  */ ((value.numberTranslationInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<NumberTranslation>(() => _encode_NumberTranslation, $.BER), $.BER)(value.numberTranslationInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IMSMessage(value, elGetter);
}


/* eslint-enable */
