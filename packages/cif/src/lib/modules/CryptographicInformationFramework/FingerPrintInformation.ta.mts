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
import { FingerPrintInformation_hand, _enum_for_FingerPrintInformation_hand, FingerPrintInformation_hand_left /* IMPORTED_LONG_ENUMERATION_ITEM */, left /* IMPORTED_SHORT_ENUMERATION_ITEM */, FingerPrintInformation_hand_right /* IMPORTED_LONG_ENUMERATION_ITEM */, right /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FingerPrintInformation_hand, _encode_FingerPrintInformation_hand } from "../CryptographicInformationFramework/FingerPrintInformation-hand.ta.mjs";
// export { FingerPrintInformation_hand, _enum_for_FingerPrintInformation_hand, FingerPrintInformation_hand_left /* IMPORTED_LONG_ENUMERATION_ITEM */, left /* IMPORTED_SHORT_ENUMERATION_ITEM */, FingerPrintInformation_hand_right /* IMPORTED_LONG_ENUMERATION_ITEM */, right /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FingerPrintInformation_hand, _encode_FingerPrintInformation_hand } from "../CryptographicInformationFramework/FingerPrintInformation-hand.ta.mjs";
import { FingerPrintInformation_finger, _enum_for_FingerPrintInformation_finger, FingerPrintInformation_finger_thumb /* IMPORTED_LONG_ENUMERATION_ITEM */, thumb /* IMPORTED_SHORT_ENUMERATION_ITEM */, FingerPrintInformation_finger_pointerFinger /* IMPORTED_LONG_ENUMERATION_ITEM */, pointerFinger /* IMPORTED_SHORT_ENUMERATION_ITEM */, FingerPrintInformation_finger_middleFinger /* IMPORTED_LONG_ENUMERATION_ITEM */, middleFinger /* IMPORTED_SHORT_ENUMERATION_ITEM */, FingerPrintInformation_finger_ringFinger /* IMPORTED_LONG_ENUMERATION_ITEM */, ringFinger /* IMPORTED_SHORT_ENUMERATION_ITEM */, FingerPrintInformation_finger_littleFinger /* IMPORTED_LONG_ENUMERATION_ITEM */, littleFinger /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FingerPrintInformation_finger, _encode_FingerPrintInformation_finger } from "../CryptographicInformationFramework/FingerPrintInformation-finger.ta.mjs";
// export { FingerPrintInformation_finger, _enum_for_FingerPrintInformation_finger, FingerPrintInformation_finger_thumb /* IMPORTED_LONG_ENUMERATION_ITEM */, thumb /* IMPORTED_SHORT_ENUMERATION_ITEM */, FingerPrintInformation_finger_pointerFinger /* IMPORTED_LONG_ENUMERATION_ITEM */, pointerFinger /* IMPORTED_SHORT_ENUMERATION_ITEM */, FingerPrintInformation_finger_middleFinger /* IMPORTED_LONG_ENUMERATION_ITEM */, middleFinger /* IMPORTED_SHORT_ENUMERATION_ITEM */, FingerPrintInformation_finger_ringFinger /* IMPORTED_LONG_ENUMERATION_ITEM */, ringFinger /* IMPORTED_SHORT_ENUMERATION_ITEM */, FingerPrintInformation_finger_littleFinger /* IMPORTED_LONG_ENUMERATION_ITEM */, littleFinger /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_FingerPrintInformation_finger, _encode_FingerPrintInformation_finger } from "../CryptographicInformationFramework/FingerPrintInformation-finger.ta.mjs";


/**
 * @summary FingerPrintInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FingerPrintInformation ::= SEQUENCE {
 *     hand    ENUMERATED {left, right},
 *     finger  ENUMERATED {thumb, pointerFinger, middleFinger, ringFinger, littleFinger}
 * }
 * ```
 * 
 * @class
 */
export
class FingerPrintInformation {
    constructor (
        /**
         * @summary `hand`.
         * @public
         * @readonly
         */
        readonly hand: FingerPrintInformation_hand,
        /**
         * @summary `finger`.
         * @public
         * @readonly
         */
        readonly finger: FingerPrintInformation_finger
    ) {}

    /**
     * @summary Restructures an object into a FingerPrintInformation
     * @description
     * 
     * This takes an `object` and converts it to a `FingerPrintInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FingerPrintInformation`.
     * @returns {FingerPrintInformation}
     */
    public static _from_object (_o: { [_K in keyof (FingerPrintInformation)]: (FingerPrintInformation)[_K] }): FingerPrintInformation {
        return new FingerPrintInformation(_o.hand, _o.finger);
    }

        /**
         * @summary The enum used as the type of the component `hand`
         * @public
         * @static
         */

    public static _enum_for_hand = _enum_for_FingerPrintInformation_hand;        /**
         * @summary The enum used as the type of the component `finger`
         * @public
         * @static
         */

    public static _enum_for_finger = _enum_for_FingerPrintInformation_finger;
}

/**
 * @summary The Leading Root Component Types of FingerPrintInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FingerPrintInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("hand", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("finger", false, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of FingerPrintInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FingerPrintInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FingerPrintInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FingerPrintInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FingerPrintInformation: $.ASN1Decoder<FingerPrintInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FingerPrintInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FingerPrintInformation (el: _Element): FingerPrintInformation {
    if (!_cached_decoder_for_FingerPrintInformation) { _cached_decoder_for_FingerPrintInformation = function (el: _Element): FingerPrintInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("FingerPrintInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hand";
    sequence[1].name = "finger";
    let hand!: FingerPrintInformation_hand;
    let finger!: FingerPrintInformation_finger;
    hand = _decode_FingerPrintInformation_hand(sequence[0]);
    finger = _decode_FingerPrintInformation_finger(sequence[1]);
    return new FingerPrintInformation(
        hand,
        finger,

    );
}; }
    return _cached_decoder_for_FingerPrintInformation(el);
}

let _cached_encoder_for_FingerPrintInformation: $.ASN1Encoder<FingerPrintInformation> | null = null;

/**
 * @summary Encodes a(n) FingerPrintInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FingerPrintInformation, encoded as an ASN.1 Element.
 */
export
function _encode_FingerPrintInformation (value: FingerPrintInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FingerPrintInformation) { _cached_encoder_for_FingerPrintInformation = function (value: FingerPrintInformation, elGetter: $.ASN1Encoder<FingerPrintInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_FingerPrintInformation_hand(value.hand, $.BER),
            /* REQUIRED   */ _encode_FingerPrintInformation_finger(value.finger, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FingerPrintInformation(value, elGetter);
}


/* eslint-enable */
