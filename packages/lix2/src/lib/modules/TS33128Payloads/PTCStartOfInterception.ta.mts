/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
// export { PTCTargetInformation, _decode_PTCTargetInformation, _encode_PTCTargetInformation } from "../TS33128Payloads/PTCTargetInformation.ta.mjs";
import { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
// export { Direction, _enum_for_Direction, Direction_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, Direction_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Direction, _encode_Direction } from "../TS33128Payloads/Direction.ta.mjs";
import { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";
// export { PTCSessionInfo, _decode_PTCSessionInfo, _encode_PTCSessionInfo } from "../TS33128Payloads/PTCSessionInfo.ta.mjs";


/**
 * @summary PTCStartOfInterception
 * @description
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
 *     pTCBearerCapability           [9] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PTCStartOfInterception {
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
         * @summary `preEstSessionID`.
         * @public
         * @readonly
         */
        readonly preEstSessionID: OPTIONAL<PTCSessionInfo>,
        /**
         * @summary `pTCOriginatingID`.
         * @public
         * @readonly
         */
        readonly pTCOriginatingID: PTCTargetInformation,
        /**
         * @summary `pTCSessionInfo`.
         * @public
         * @readonly
         */
        readonly pTCSessionInfo: OPTIONAL<PTCSessionInfo>,
        /**
         * @summary `pTCHost`.
         * @public
         * @readonly
         */
        readonly pTCHost: OPTIONAL<PTCTargetInformation>,
        /**
         * @summary `pTCParticipants`.
         * @public
         * @readonly
         */
        readonly pTCParticipants: OPTIONAL<PTCTargetInformation[]>,
        /**
         * @summary `pTCMediaStreamAvail`.
         * @public
         * @readonly
         */
        readonly pTCMediaStreamAvail: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pTCBearerCapability`.
         * @public
         * @readonly
         */
        readonly pTCBearerCapability: OPTIONAL<UTF8String>
    ) {}

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
        return new PTCStartOfInterception(_o.pTCTargetInformation, _o.pTCDirection, _o.preEstSessionID, _o.pTCOriginatingID, _o.pTCSessionInfo, _o.pTCHost, _o.pTCParticipants, _o.pTCMediaStreamAvail, _o.pTCBearerCapability);
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
    new $.ComponentSpec("pTCBearerCapability", true, $.hasTag(_TagClass.context, 9))
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
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "preEstSessionID": (_el: _Element): void => { preEstSessionID = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCOriginatingID": (_el: _Element): void => { pTCOriginatingID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCHost": (_el: _Element): void => { pTCHost = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCParticipants": (_el: _Element): void => { pTCParticipants = $._decode_implicit<PTCTargetInformation[]>(() => $._decodeSequenceOf<PTCTargetInformation>(() => _decode_PTCTargetInformation))(_el); },
        "pTCMediaStreamAvail": (_el: _Element): void => { pTCMediaStreamAvail = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "pTCBearerCapability": (_el: _Element): void => { pTCBearerCapability = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCStartOfInterception,
        _extension_additions_list_spec_for_PTCStartOfInterception,
        _root_component_type_list_2_spec_for_PTCStartOfInterception,
        undefined,
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
        pTCBearerCapability
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
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER),
            /* IF_ABSENT  */ ((value.preEstSessionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PTCSessionInfo, $.BER)(value.preEstSessionID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_PTCTargetInformation, $.BER)(value.pTCOriginatingID, $.BER),
            /* IF_ABSENT  */ ((value.pTCSessionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.pTCHost === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_PTCTargetInformation, $.BER)(value.pTCHost, $.BER)),
            /* IF_ABSENT  */ ((value.pTCParticipants === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<PTCTargetInformation>(() => _encode_PTCTargetInformation, $.BER), $.BER)(value.pTCParticipants, $.BER)),
            /* IF_ABSENT  */ ((value.pTCMediaStreamAvail === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeBoolean, $.BER)(value.pTCMediaStreamAvail, $.BER)),
            /* IF_ABSENT  */ ((value.pTCBearerCapability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeUTF8String, $.BER)(value.pTCBearerCapability, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCStartOfInterception(value, elGetter);
}


/* eslint-enable */
