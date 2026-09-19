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
import { HorizontalSpeed, _decode_HorizontalSpeed, _encode_HorizontalSpeed } from "../TS33128Payloads/HorizontalSpeed.ta.mjs";
// export { HorizontalSpeed, _decode_HorizontalSpeed, _encode_HorizontalSpeed } from "../TS33128Payloads/HorizontalSpeed.ta.mjs";
import { Angle, _decode_Angle, _encode_Angle } from "../TS33128Payloads/Angle.ta.mjs";
// export { Angle, _decode_Angle, _encode_Angle } from "../TS33128Payloads/Angle.ta.mjs";


/**
 * @summary HorizontalVelocity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HorizontalVelocity ::= SEQUENCE
 * {
 *     hSpeed                              [1] HorizontalSpeed,
 *     bearing                             [2] Angle
 * }
 * ```
 * 
 * @class
 */
export
class HorizontalVelocity {
    constructor (
        /**
         * @summary `hSpeed`.
         * @public
         * @readonly
         */
        readonly hSpeed: HorizontalSpeed,
        /**
         * @summary `bearing`.
         * @public
         * @readonly
         */
        readonly bearing: Angle
    ) {}

    /**
     * @summary Restructures an object into a HorizontalVelocity
     * @description
     * 
     * This takes an `object` and converts it to a `HorizontalVelocity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HorizontalVelocity`.
     * @returns {HorizontalVelocity}
     */
    public static _from_object (_o: { [_K in keyof (HorizontalVelocity)]: (HorizontalVelocity)[_K] }): HorizontalVelocity {
        return new HorizontalVelocity(_o.hSpeed, _o.bearing);
    }


}

/**
 * @summary The Leading Root Component Types of HorizontalVelocity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HorizontalVelocity: $.ComponentSpec[] = [
    new $.ComponentSpec("hSpeed", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bearing", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of HorizontalVelocity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HorizontalVelocity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HorizontalVelocity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HorizontalVelocity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HorizontalVelocity: $.ASN1Decoder<HorizontalVelocity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HorizontalVelocity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HorizontalVelocity (el: _Element): HorizontalVelocity {
    if (!_cached_decoder_for_HorizontalVelocity) { _cached_decoder_for_HorizontalVelocity = function (el: _Element): HorizontalVelocity {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("HorizontalVelocity contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hSpeed";
    sequence[1].name = "bearing";
    let hSpeed!: HorizontalSpeed;
    let bearing!: Angle;
    hSpeed = $._decode_implicit<HorizontalSpeed>(() => _decode_HorizontalSpeed)(sequence[0]);
    bearing = $._decode_implicit<Angle>(() => _decode_Angle)(sequence[1]);
    return new HorizontalVelocity(
        hSpeed,
        bearing,

    );
}; }
    return _cached_decoder_for_HorizontalVelocity(el);
}

let _cached_encoder_for_HorizontalVelocity: $.ASN1Encoder<HorizontalVelocity> | null = null;

/**
 * @summary Encodes a(n) HorizontalVelocity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HorizontalVelocity, encoded as an ASN.1 Element.
 */
export
function _encode_HorizontalVelocity (value: HorizontalVelocity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HorizontalVelocity) { _cached_encoder_for_HorizontalVelocity = function (value: HorizontalVelocity, elGetter: $.ASN1Encoder<HorizontalVelocity>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_HorizontalSpeed, $.BER)(value.hSpeed, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Angle, $.BER)(value.bearing, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HorizontalVelocity(value, elGetter);
}


/* eslint-enable */
