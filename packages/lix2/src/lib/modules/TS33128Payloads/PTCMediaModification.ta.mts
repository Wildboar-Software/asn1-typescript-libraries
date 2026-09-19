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
 * @summary PTCMediaModification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCMediaModification ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCDirection                  [2] Direction,
 *     pTCSessionInfo                [3] PTCSessionInfo,
 *     pTCMediaStreamAvail           [4] BOOLEAN OPTIONAL,
 *     pTCBearerCapability           [5] UTF8String
 * }
 * ```
 * 
 * @class
 */
export
class PTCMediaModification {
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
        readonly pTCBearerCapability: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a PTCMediaModification
     * @description
     * 
     * This takes an `object` and converts it to a `PTCMediaModification`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCMediaModification`.
     * @returns {PTCMediaModification}
     */
    public static _from_object (_o: { [_K in keyof (PTCMediaModification)]: (PTCMediaModification)[_K] }): PTCMediaModification {
        return new PTCMediaModification(_o.pTCTargetInformation, _o.pTCDirection, _o.pTCSessionInfo, _o.pTCMediaStreamAvail, _o.pTCBearerCapability);
    }

        /**
         * @summary The enum used as the type of the component `pTCDirection`
         * @public
         * @static
         */

    public static _enum_for_pTCDirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PTCMediaModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCMediaModification: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCDirection", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCSessionInfo", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("pTCMediaStreamAvail", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("pTCBearerCapability", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of PTCMediaModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCMediaModification: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCMediaModification
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCMediaModification: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCMediaModification: $.ASN1Decoder<PTCMediaModification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCMediaModification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCMediaModification (el: _Element): PTCMediaModification {
    if (!_cached_decoder_for_PTCMediaModification) { _cached_decoder_for_PTCMediaModification = function (el: _Element): PTCMediaModification {
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCDirection!: Direction;
    let pTCSessionInfo!: PTCSessionInfo;
    let pTCMediaStreamAvail: OPTIONAL<BOOLEAN>;
    let pTCBearerCapability!: UTF8String;
    const callbacks: $.DecodingMap = {
        "pTCTargetInformation": (_el: _Element): void => { pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(_el); },
        "pTCDirection": (_el: _Element): void => { pTCDirection = $._decode_implicit<Direction>(() => _decode_Direction)(_el); },
        "pTCSessionInfo": (_el: _Element): void => { pTCSessionInfo = $._decode_implicit<PTCSessionInfo>(() => _decode_PTCSessionInfo)(_el); },
        "pTCMediaStreamAvail": (_el: _Element): void => { pTCMediaStreamAvail = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "pTCBearerCapability": (_el: _Element): void => { pTCBearerCapability = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PTCMediaModification,
        _extension_additions_list_spec_for_PTCMediaModification,
        _root_component_type_list_2_spec_for_PTCMediaModification,
        undefined,
    );
    return new PTCMediaModification(
        pTCTargetInformation,
        pTCDirection,
        pTCSessionInfo,
        pTCMediaStreamAvail,
        pTCBearerCapability
    );
}; }
    return _cached_decoder_for_PTCMediaModification(el);
}

let _cached_encoder_for_PTCMediaModification: $.ASN1Encoder<PTCMediaModification> | null = null;

/**
 * @summary Encodes a(n) PTCMediaModification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCMediaModification, encoded as an ASN.1 Element.
 */
export
function _encode_PTCMediaModification (value: PTCMediaModification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCMediaModification) { _cached_encoder_for_PTCMediaModification = function (value: PTCMediaModification, elGetter: $.ASN1Encoder<PTCMediaModification>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Direction, $.BER)(value.pTCDirection, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_PTCSessionInfo, $.BER)(value.pTCSessionInfo, $.BER),
            /* IF_ABSENT  */ ((value.pTCMediaStreamAvail === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.pTCMediaStreamAvail, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => $._encodeUTF8String, $.BER)(value.pTCBearerCapability, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCMediaModification(value, elGetter);
}


/* eslint-enable */
