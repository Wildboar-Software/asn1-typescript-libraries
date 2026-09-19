/* eslint-disable */
import {
    OPTIONAL,
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
import { PTCParticipantPresenceStatus, _decode_PTCParticipantPresenceStatus, _encode_PTCParticipantPresenceStatus } from "../TS33128Payloads/PTCParticipantPresenceStatus.ta.mjs";
// export { PTCParticipantPresenceStatus, _decode_PTCParticipantPresenceStatus, _encode_PTCParticipantPresenceStatus } from "../TS33128Payloads/PTCParticipantPresenceStatus.ta.mjs";


/**
 * @summary PTCPartyDrop
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPartyDrop ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCSessionInfo                [3] PTCSessionInfo,
 *     pTCPartyDrop                  [4] PTCTargetInformation,
 *     pTCParticipantPresenceStatus  [5] PTCParticipantPresenceStatus OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCPartyDrop {
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
         * @summary `pTCSessionInfo`.
         * @public
         * @readonly
         */
        readonly pTCSessionInfo: PTCSessionInfo,
        /**
         * @summary `pTCPartyDrop`.
         * @public
         * @readonly
         */
        readonly pTCPartyDrop: PTCTargetInformation,
        /**
         * @summary `pTCParticipantPresenceStatus`.
         * @public
         * @readonly
         */
        readonly pTCParticipantPresenceStatus: OPTIONAL<PTCParticipantPresenceStatus>
    ) {}

    /**
     * @summary Restructures an object into a PTCPartyDrop
     * @description
     * 
     * This takes an `object` and converts it to a `PTCPartyDrop`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCPartyDrop`.
     * @returns {PTCPartyDrop}
     */
    public static _from_object (_o: { [_K in keyof (PTCPartyDrop)]: (PTCPartyDrop)[_K] }): PTCPartyDrop {
        return new PTCPartyDrop(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCSessionInfo, _o.pTCPartyDrop, _o.pTCParticipantPresenceStatus);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PTCPartyDrop
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCPartyDrop: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCSessionInfo", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCPartyDrop", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCParticipantPresenceStatus", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of PTCPartyDrop
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCPartyDrop: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCPartyDrop
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCPartyDrop: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCPartyDrop: $.ASN1Decoder<PTCPartyDrop> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCPartyDrop
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCPartyDrop (el: _Element): PTCPartyDrop {
    if (!_cached_decoder_for_PTCPartyDrop) { _cached_decoder_for_PTCPartyDrop = function (el: _Element): PTCPartyDrop {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCSessionInfo!: PTCSessionInfo;
    let pTCPartyDrop!: PTCTargetInformation;
    let pTCParticipantPresenceStatus: OPTIONAL<PTCParticipantPresenceStatus>;
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCPartyDrop": (_el: _Element): void => { pTCPartyDrop = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCParticipantPresenceStatus": (_el: _Element): void => { pTCParticipantPresenceStatus = $._decode_implicit<PTCParticipantPresenceStatus>(() => _decode_PTCParticipantPresenceStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCPartyDrop,
        _extension_additions_list_spec_for_PTCPartyDrop,
        _root_component_type_list_2_spec_for_PTCPartyDrop,
        undefined,
    );
    return new PTCPartyDrop(
        pTCTargetInformation,
        pTCDirection,
        pTCSessionInfo,
        pTCPartyDrop,
        pTCParticipantPresenceStatus
    );
}; }
    return _cached_decoder_for_PTCPartyDrop(el);
}

let _cached_encoder_for_PTCPartyDrop: $.ASN1Encoder<PTCPartyDrop> | null = null;

/**
 * @summary Encodes a(n) PTCPartyDrop into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCPartyDrop, encoded as an ASN.1 Element.
 */
export
function _encode_PTCPartyDrop (value: PTCPartyDrop, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCPartyDrop) { _cached_encoder_for_PTCPartyDrop = function (value: PTCPartyDrop, elGetter: $.ASN1Encoder<PTCPartyDrop>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessionInfo, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PTCTargetInformation, $.BER)(value.pTCPartyDrop, $.BER),
            /* IF_ABSENT  */ ((value.pTCParticipantPresenceStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PTCParticipantPresenceStatus, $.BER)(value.pTCParticipantPresenceStatus, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCPartyDrop(value, elGetter);
}


/* eslint-enable */
