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


/**
 * @summary PTCInstantPersonalAlert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCInstantPersonalAlert ::= SEQUENCE
 * {
 *     pTCTargetInformation          [1] PTCTargetInformation,
 *     pTCIPAPartyID                 [2] PTCTargetInformation,
 *     pTCIPADirection               [3] Direction
 * }
 * ```
 * 
 * @class
 */
export
class PTCInstantPersonalAlert {
    constructor (
        /**
         * @summary `pTCTargetInformation`.
         * @public
         * @readonly
         */
        readonly pTCTargetInformation: PTCTargetInformation,
        /**
         * @summary `pTCIPAPartyID`.
         * @public
         * @readonly
         */
        readonly pTCIPAPartyID: PTCTargetInformation,
        /**
         * @summary `pTCIPADirection`.
         * @public
         * @readonly
         */
        readonly pTCIPADirection: Direction
    ) {}

    /**
     * @summary Restructures an object into a PTCInstantPersonalAlert
     * @description
     * 
     * This takes an `object` and converts it to a `PTCInstantPersonalAlert`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PTCInstantPersonalAlert`.
     * @returns {PTCInstantPersonalAlert}
     */
    public static _from_object (_o: { [_K in keyof (PTCInstantPersonalAlert)]: (PTCInstantPersonalAlert)[_K] }): PTCInstantPersonalAlert {
        return new PTCInstantPersonalAlert(_o.pTCTargetInformation, _o.pTCIPAPartyID, _o.pTCIPADirection);
    }

        /**
         * @summary The enum used as the type of the component `pTCIPADirection`
         * @public
         * @static
         */

    public static _enum_for_pTCIPADirection = _enum_for_Direction;
}

/**
 * @summary The Leading Root Component Types of PTCInstantPersonalAlert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PTCInstantPersonalAlert: $.ComponentSpec[] = [
    new $.ComponentSpec("pTCTargetInformation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pTCIPAPartyID", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pTCIPADirection", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PTCInstantPersonalAlert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PTCInstantPersonalAlert: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PTCInstantPersonalAlert
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PTCInstantPersonalAlert: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PTCInstantPersonalAlert: $.ASN1Decoder<PTCInstantPersonalAlert> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PTCInstantPersonalAlert
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PTCInstantPersonalAlert (el: _Element): PTCInstantPersonalAlert {
    if (!_cached_decoder_for_PTCInstantPersonalAlert) { _cached_decoder_for_PTCInstantPersonalAlert = function (el: _Element): PTCInstantPersonalAlert {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("PTCInstantPersonalAlert contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "pTCTargetInformation";
    sequence[1].name = "pTCIPAPartyID";
    sequence[2].name = "pTCIPADirection";
    let pTCTargetInformation!: PTCTargetInformation;
    let pTCIPAPartyID!: PTCTargetInformation;
    let pTCIPADirection!: Direction;
    pTCTargetInformation = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(sequence[0]);
    pTCIPAPartyID = $._decode_implicit<PTCTargetInformation>(() => _decode_PTCTargetInformation)(sequence[1]);
    pTCIPADirection = $._decode_implicit<Direction>(() => _decode_Direction)(sequence[2]);
    return new PTCInstantPersonalAlert(
        pTCTargetInformation,
        pTCIPAPartyID,
        pTCIPADirection,

    );
}; }
    return _cached_decoder_for_PTCInstantPersonalAlert(el);
}

let _cached_encoder_for_PTCInstantPersonalAlert: $.ASN1Encoder<PTCInstantPersonalAlert> | null = null;

/**
 * @summary Encodes a(n) PTCInstantPersonalAlert into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PTCInstantPersonalAlert, encoded as an ASN.1 Element.
 */
export
function _encode_PTCInstantPersonalAlert (value: PTCInstantPersonalAlert, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PTCInstantPersonalAlert) { _cached_encoder_for_PTCInstantPersonalAlert = function (value: PTCInstantPersonalAlert, elGetter: $.ASN1Encoder<PTCInstantPersonalAlert>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PTCTargetInformation, $.BER)(value.pTCTargetInformation, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PTCTargetInformation, $.BER)(value.pTCIPAPartyID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Direction, $.BER)(value.pTCIPADirection, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PTCInstantPersonalAlert(value, elGetter);
}


/* eslint-enable */
