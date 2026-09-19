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
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";


/**
 * @summary PTCSessionAbandon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCSessionAbandon ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCSessionInfo                [3] PTCSessionInfo,
 *     location                      [4] Location OPTIONAL,
 *     pTCAbandonCause               [5] INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class PTCSessionAbandon {
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
         * @summary `location`.
         * @public
         * @readonly
         */
        readonly location: OPTIONAL<Location>,
        /**
         * @summary `pTCAbandonCause`.
         * @public
         * @readonly
         */
        readonly pTCAbandonCause: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a PTCSessionAbandon
     * @description
     * 
     * This takes an `object` and converts it to a `PTCSessionAbandon`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCSessionAbandon`.
     * @returns {PTCSessionAbandon}
     */
    public static _from_object (_o: { [_K in keyof (PTCSessionAbandon)]: (PTCSessionAbandon)[_K] }): PTCSessionAbandon {
        return new PTCSessionAbandon(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCSessionInfo, _o.location, _o.pTCAbandonCause);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PTCSessionAbandon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCSessionAbandon: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCSessionInfo", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("location", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCAbandonCause", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of PTCSessionAbandon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCSessionAbandon: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCSessionAbandon
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCSessionAbandon: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCSessionAbandon: $.ASN1Decoder<PTCSessionAbandon> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCSessionAbandon
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCSessionAbandon (el: _Element): PTCSessionAbandon {
    if (!_cached_decoder_for_PTCSessionAbandon) { _cached_decoder_for_PTCSessionAbandon = function (el: _Element): PTCSessionAbandon {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCSessionInfo!: PTCSessionInfo;
    let location: OPTIONAL<Location>;
    let pTCAbandonCause!: INTEGER;
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "pTCAbandonCause": (_el: _Element): void => { pTCAbandonCause = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCSessionAbandon,
        _extension_additions_list_spec_for_PTCSessionAbandon,
        _root_component_type_list_2_spec_for_PTCSessionAbandon,
        undefined,
    );
    return new PTCSessionAbandon(
        pTCTargetInformation,
        pTCDirection,
        pTCSessionInfo,
        location,
        pTCAbandonCause
    );
}; }
    return _cached_decoder_for_PTCSessionAbandon(el);
}

let _cached_encoder_for_PTCSessionAbandon: $.ASN1Encoder<PTCSessionAbandon> | null = null;

/**
 * @summary Encodes a(n) PTCSessionAbandon into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCSessionAbandon, encoded as an ASN.1 Element.
 */
export
function _encode_PTCSessionAbandon (value: PTCSessionAbandon, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCSessionAbandon) { _cached_encoder_for_PTCSessionAbandon = function (value: PTCSessionAbandon, elGetter: $.ASN1Encoder<PTCSessionAbandon>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessionInfo, $.BER),
            /* IF_ABSENT  */ ((value.location === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Location, $.BER)(value.location, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeInteger, $.BER)(value.pTCAbandonCause, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCSessionAbandon(value, elGetter);
}


/* eslint-enable */
