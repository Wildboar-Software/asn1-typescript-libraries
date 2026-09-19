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
import { PTCGroupAuthRule, _decode_PTCGroupAuthRule, _encode_PTCGroupAuthRule, _enum_for_PTCGroupAuthRule } from "../TS33128Payloads/PTCGroupAuthRule.ta.mjs";
// export { PTCGroupAuthRule, _enum_for_PTCGroupAuthRule, PTCGroupAuthRule_allowInitiatingPTCSession /* IMPORTED_LONG_ENUMERATION_ITEM */, allowInitiatingPTCSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_blockInitiatingPTCSession /* IMPORTED_LONG_ENUMERATION_ITEM */, blockInitiatingPTCSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_allowJoiningPTCSession /* IMPORTED_LONG_ENUMERATION_ITEM */, allowJoiningPTCSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_blockJoiningPTCSession /* IMPORTED_LONG_ENUMERATION_ITEM */, blockJoiningPTCSession /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_allowAddParticipants /* IMPORTED_LONG_ENUMERATION_ITEM */, allowAddParticipants /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_blockAddParticipants /* IMPORTED_LONG_ENUMERATION_ITEM */, blockAddParticipants /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_allowSubscriptionPTCSessionState /* IMPORTED_LONG_ENUMERATION_ITEM */, allowSubscriptionPTCSessionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_blockSubscriptionPTCSessionState /* IMPORTED_LONG_ENUMERATION_ITEM */, blockSubscriptionPTCSessionState /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_allowAnonymity /* IMPORTED_LONG_ENUMERATION_ITEM */, allowAnonymity /* IMPORTED_SHORT_ENUMERATION_ITEM */, PTCGroupAuthRule_forbidAnonymity /* IMPORTED_LONG_ENUMERATION_ITEM */, forbidAnonymity /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PTCGroupAuthRule, _encode_PTCGroupAuthRule } from "../TS33128Payloads/PTCGroupAuthRule.ta.mjs";


/**
 * @summary PTCGroupAdvertisement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCGroupAdvertisement ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCIDList                     [3] SEQUENCE OF PTCTargetInformation OPTIONAL,
 *     pTCGroupAuthRule              [4] PTCGroupAuthRule OPTIONAL,
 *     pTCGroupAdSender              [5] PTCTargetInformation,
 *     pTCGroupNickname              [6] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCGroupAdvertisement {
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
         * @summary `pTCIDList`.
         * @public
         * @readonly
         */
        readonly pTCIDList: OPTIONAL<PTCTargetInformation[]>,
        /**
         * @summary `pTCGroupAuthRule`.
         * @public
         * @readonly
         */
        readonly pTCGroupAuthRule: OPTIONAL<PTCGroupAuthRule>,
        /**
         * @summary `pTCGroupAdSender`.
         * @public
         * @readonly
         */
        readonly pTCGroupAdSender: PTCTargetInformation,
        /**
         * @summary `pTCGroupNickname`.
         * @public
         * @readonly
         */
        readonly pTCGroupNickname: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a PTCGroupAdvertisement
     * @description
     * 
     * This takes an `object` and converts it to a `PTCGroupAdvertisement`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCGroupAdvertisement`.
     * @returns {PTCGroupAdvertisement}
     */
    public static _from_object (_o: { [_K in keyof (PTCGroupAdvertisement)]: (PTCGroupAdvertisement)[_K] }): PTCGroupAdvertisement {
        return new PTCGroupAdvertisement(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCIDList, _o.pTCGroupAuthRule, _o.pTCGroupAdSender, _o.pTCGroupNickname);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;        /**
         * @summary The enum used as the type of the component `pTCGroupAuthRule`
         * @public
         * @static
         */

    public static _enum_for_pTCGroupAuthRule = _enum_for_PTCGroupAuthRule;
}

/**
 * @summary The Leading Root Component Types of PTCGroupAdvertisement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCGroupAdvertisement: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCIDList", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCGroupAuthRule", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCGroupAdSender", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("pTCGroupNickname", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of PTCGroupAdvertisement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCGroupAdvertisement: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCGroupAdvertisement
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCGroupAdvertisement: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCGroupAdvertisement: $.ASN1Decoder<PTCGroupAdvertisement> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCGroupAdvertisement
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCGroupAdvertisement (el: _Element): PTCGroupAdvertisement {
    if (!_cached_decoder_for_PTCGroupAdvertisement) { _cached_decoder_for_PTCGroupAdvertisement = function (el: _Element): PTCGroupAdvertisement {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCIDList: OPTIONAL<PTCTargetInformation[]>;
    let pTCGroupAuthRule: OPTIONAL<PTCGroupAuthRule>;
    let pTCGroupAdSender!: PTCTargetInformation;
    let pTCGroupNickname: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCIDList": (_el: _Element): void => { pTCIDList = $._decode_implicit<PTCTargetInformation[]>(() => $._decodeSequenceOf<PTCTargetInformation>(() => _decode_PTCTargetInformation))(_el); },
        "pTCGroupAuthRule": (_el: _Element): void => { pTCGroupAuthRule = $._decode_implicit<PTCGroupAuthRule>(() => _decode_PTCGroupAuthRule)(_el); },
        "pTCGroupAdSender": (_el: _Element): void => { pTCGroupAdSender = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCGroupNickname": (_el: _Element): void => { pTCGroupNickname = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCGroupAdvertisement,
        _extension_additions_list_spec_for_PTCGroupAdvertisement,
        _root_component_type_list_2_spec_for_PTCGroupAdvertisement,
        undefined,
    );
    return new PTCGroupAdvertisement(
        pTCTargetInformation,
        pTCDirection,
        pTCIDList,
        pTCGroupAuthRule,
        pTCGroupAdSender,
        pTCGroupNickname
    );
}; }
    return _cached_decoder_for_PTCGroupAdvertisement(el);
}

let _cached_encoder_for_PTCGroupAdvertisement: $.ASN1Encoder<PTCGroupAdvertisement> | null = null;

/**
 * @summary Encodes a(n) PTCGroupAdvertisement into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCGroupAdvertisement, encoded as an ASN.1 Element.
 */
export
function _encode_PTCGroupAdvertisement (value: PTCGroupAdvertisement, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCGroupAdvertisement) { _cached_encoder_for_PTCGroupAdvertisement = function (value: PTCGroupAdvertisement, elGetter: $.ASN1Encoder<PTCGroupAdvertisement>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER),
            /* IF_ABSENT  */ ((value.pTCIDList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<PTCTargetInformation>(() => _encode_PTCTargetInformation, $.BER), $.BER)(value.pTCIDList, $.BER)),
            /* IF_ABSENT  */ ((value.pTCGroupAuthRule === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_PTCGroupAuthRule, $.BER)(value.pTCGroupAuthRule, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_PTCTargetInformation, $.BER)(value.pTCGroupAdSender, $.BER),
            /* IF_ABSENT  */ ((value.pTCGroupNickname === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeUTF8String, $.BER)(value.pTCGroupNickname, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCGroupAdvertisement(value, elGetter);
}


/* eslint-enable */
