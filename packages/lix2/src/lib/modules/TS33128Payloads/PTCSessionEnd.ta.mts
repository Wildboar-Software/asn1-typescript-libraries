/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
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
import { PTCSessionEndCause, _decode_PTCSessionEndCause, _encode_PTCSessionEndCause, _enum_for_PTCSessionEndCause } from "../TS33128Payloads/PTCSessionEndCause.ta.mjs";
// export { PTCSessionEndCause, _enum_for_PTCSessionEndCause, PTCSessionEndCause_initiaterLeavesSession /* IMPORTED_LONG_ENUMERATION_ITEM */, initiaterLeavesSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCSessionEndCause_definedParticipantLeaves /* IMPORTED_LONG_ENUMERATION_ITEM */, definedParticipantLeaves /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCSessionEndCause_numberOfParticipants /* IMPORTED_LONG_ENUMERATION_ITEM */, numberOfParticipants /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCSessionEndCause_sessionTimerExpired /* IMPORTED_LONG_ENUMERATION_ITEM */, sessionTimerExpired /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCSessionEndCause_pTCSpeechInactive /* IMPORTED_LONG_ENUMERATION_ITEM */, pTCSpeechInactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCSessionEndCause_allMediaTypesInactive /* IMPORTED_LONG_ENUMERATION_ITEM */, allMediaTypesInactive /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCSessionEndCause, _encode_PTCSessionEndCause } from "../TS33128Payloads/PTCSessionEndCause.ta.mjs";


/**
 * @summary PTCSessionEnd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionEnd ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCServerURI                  [3] UTF8String,
 *     pTCSessionInfo                [4] PTCSessionInfo,
 *     pTCParticipants               [5] SEQUENCE OF PTCTargetInformation OPTIONAL,
 *     location                      [6] Location OPTIONAL,
 *     pTCSessionEndCause            [7] PTCSessionEndCause
 * }
 * ```
 * 
 * @class
 */
export
class PTCSessionEnd {
    constructor (
        /**
         * @summary `pTCTargetInformation`.
         * @public
         * @readonly
         */
        readonly pTCTargetInformation: PTCTargetInformation,
        /**
         * @summary `pTCDirection`.
         * @public
         * @readonly
         */
        readonly pTCDirection: Direction,
        /**
         * @summary `pTCServerURI`.
         * @public
         * @readonly
         */
        readonly pTCServerURI: UTF8String,
        /**
         * @summary `pTCSessionInfo`.
         * @public
         * @readonly
         */
        readonly pTCSessionInfo: PTCSessionInfo,
        /**
         * @summary `pTCParticipants`.
         * @public
         * @readonly
         */
        readonly pTCParticipants: OPTIONAL<PTCTargetInformation[]>,
        /**
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `pTCSessionEndCause`.
         * @public
         * @readonly
         */
        readonly pTCSessionEndCause: PTCSessionEndCause
    ) {}

    /**
     * @summary Restructures an object into a PTCSessionEnd
     * @description
     * 
     * This takes an `object` and converts it to a `PTCSessionEnd`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCSessionEnd`.
     * @returns {PTCSessionEnd}
     */
    public static _from_object (_o: { [_K in keyof (PTCSessionEnd)]: (PTCSessionEnd)[_K] }): PTCSessionEnd {
        return new PTCSessionEnd(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCServerURI, _o.pTCSessionInfo, _o.pTCParticipants, _o.location, _o.pTCSessionEndCause);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;        /**
         * @summary The enum used as the type of the component `pTCSessionEndCause`
         * @public
         * @static
         */

    public static _enum_for_pTCSessionEndCause = _enum_for_PTCSessionEndCause;
}

/**
 * @summary The Leading Root Component Types of PTCSessionEnd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCSessionEnd: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCServerURI", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCSessionInfo", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCParticipants", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("pTCSessionEndCause", false, $.hasTag(_TagClass.context, 7))
];

/**
 * @summary The Trailing Root Component Types of PTCSessionEnd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCSessionEnd: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCSessionEnd
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCSessionEnd: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCSessionEnd: $.ASN1Decoder<PTCSessionEnd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCSessionEnd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCSessionEnd (el: _Element): PTCSessionEnd {
    if (!_cached_decoder_for_PTCSessionEnd) { _cached_decoder_for_PTCSessionEnd = function (el: _Element): PTCSessionEnd {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCServerURI!: UTF8String;
    let pTCSessionInfo!: PTCSessionInfo;
    let pTCParticipants: OPTIONAL<PTCTargetInformation[]>;
    let location: OPTIONAL<Location>;
    let pTCSessionEndCause!: PTCSessionEndCause;
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCServerURI": (_el: _Element): void => { pTCServerURI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCParticipants": (_el: _Element): void => { pTCParticipants = $._decode_implicit<PTCTargetInformation[]>(() => $._decodeSequenceOf<PTCTargetInformation>(() => _decode_PTCTargetInformation))(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "pTCSessionEndCause": (_el: _Element): void => { pTCSessionEndCause = $._decode_implicit<PTCSessionEndCause>(() => _decode_PTCSessionEndCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCSessionEnd,
        _extension_additions_list_spec_for_PTCSessionEnd,
        _root_component_type_list_2_spec_for_PTCSessionEnd,
        undefined,
    );
    return new PTCSessionEnd(
        pTCTargetInformation,
        pTCDirection,
        pTCServerURI,
        pTCSessionInfo,
        pTCParticipants,
        location,
        pTCSessionEndCause
    );
}; }
    return _cached_decoder_for_PTCSessionEnd(el);
}

let _cached_encoder_for_PTCSessionEnd: $.ASN1Encoder<PTCSessionEnd> | null = null;

/**
 * @summary Encodes a(n) PTCSessionEnd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCSessionEnd, encoded as an ASN.1 Element.
 */
export
function _encode_PTCSessionEnd (value: PTCSessionEnd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCSessionEnd) { _cached_encoder_for_PTCSessionEnd = function (value: PTCSessionEnd, elGetter: $.ASN1Encoder<PTCSessionEnd>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.pTCServerURI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessionInfo, $.BER),
            /* IF_ABSENT  */ ((value.pTCParticipants === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<PTCTargetInformation>(() => _encode_PTCTargetInformation, $.BER), $.BER)(value.pTCParticipants, $.BER)),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => _encode_PTCSessionEndCause, $.BER)(value.pTCSessionEndCause, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCSessionEnd(value, elGetter);
}


/* eslint-enable */
