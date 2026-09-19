/* eslint-disable */
import {
    BOOLEAN,
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


/**
 * @summary PTCPartyHold
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCPartyHold ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCSessionInfo                [3] PTCSessionInfo,
 *     pTCParticipants               [4] SEQUENCE OF PTCTargetInformation OPTIONAL,
 *     pTCHoldID                     [5] SEQUENCE OF PTCTargetInformation,
 *     pTCHoldRetrieveInd            [6] BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class PTCPartyHold {
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
         * @summary `pTCParticipants`.
         * @public
         * @readonly
         */
        readonly pTCParticipants: OPTIONAL<PTCTargetInformation[]>,
        /**
         * @summary `pTCHoldID`.
         * @public
         * @readonly
         */
        readonly pTCHoldID: PTCTargetInformation[],
        /**
         * @summary `pTCHoldRetrieveInd`.
         * @public
         * @readonly
         */
        readonly pTCHoldRetrieveInd: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a PTCPartyHold
     * @description
     * 
     * This takes an `object` and converts it to a `PTCPartyHold`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCPartyHold`.
     * @returns {PTCPartyHold}
     */
    public static _from_object (_o: { [_K in keyof (PTCPartyHold)]: (PTCPartyHold)[_K] }): PTCPartyHold {
        return new PTCPartyHold(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCSessionInfo, _o.pTCParticipants, _o.pTCHoldID, _o.pTCHoldRetrieveInd);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PTCPartyHold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCPartyHold: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCSessionInfo", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCParticipants", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCHoldID", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCHoldRetrieveInd", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PTCPartyHold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCPartyHold: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCPartyHold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCPartyHold: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCPartyHold: $.ASN1Decoder<PTCPartyHold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCPartyHold
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCPartyHold (el: _Element): PTCPartyHold {
    if (!_cached_decoder_for_PTCPartyHold) { _cached_decoder_for_PTCPartyHold = function (el: _Element): PTCPartyHold {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCSessionInfo!: PTCSessionInfo;
    let pTCParticipants: OPTIONAL<PTCTargetInformation[]>;
    let pTCHoldID!: PTCTargetInformation[];
    let pTCHoldRetrieveInd!: BOOLEAN;
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCParticipants": (_el: _Element): void => { pTCParticipants = $._decode_implicit<PTCTargetInformation[]>(() => $._decodeSequenceOf<PTCTargetInformation>(() => _decode_PTCTargetInformation))(_el); },
        "pTCHoldID": (_el: _Element): void => { pTCHoldID = $._decode_implicit<PTCTargetInformation[]>(() => $._decodeSequenceOf<PTCTargetInformation>(() => _decode_PTCTargetInformation))(_el); },
        "pTCHoldRetrieveInd": (_el: _Element): void => { pTCHoldRetrieveInd = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCPartyHold,
        _extension_additions_list_spec_for_PTCPartyHold,
        _root_component_type_list_2_spec_for_PTCPartyHold,
        undefined,
    );
    return new PTCPartyHold(
        pTCTargetInformation,
        pTCDirection,
        pTCSessionInfo,
        pTCParticipants,
        pTCHoldID,
        pTCHoldRetrieveInd
    );
}; }
    return _cached_decoder_for_PTCPartyHold(el);
}

let _cached_encoder_for_PTCPartyHold: $.ASN1Encoder<PTCPartyHold> | null = null;

/**
 * @summary Encodes a(n) PTCPartyHold into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCPartyHold, encoded as an ASN.1 Element.
 */
export
function _encode_PTCPartyHold (value: PTCPartyHold, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCPartyHold) { _cached_encoder_for_PTCPartyHold = function (value: PTCPartyHold, elGetter: $.ASN1Encoder<PTCPartyHold>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessionInfo, $.BER),
            /* IF_ABSENT  */ ((value.pTCParticipants === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<PTCTargetInformation>(() => _encode_PTCTargetInformation, $.BER), $.BER)(value.pTCParticipants, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<PTCTargetInformation>(() => _encode_PTCTargetInformation, $.BER), $.BER)(value.pTCHoldID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.pTCHoldRetrieveInd, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCPartyHold(value, elGetter);
}


/* eslint-enable */
