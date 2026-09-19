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
import { VerticalSpeed, _decode_VerticalSpeed, _encode_VerticalSpeed } from "../TS33128Payloads/VerticalSpeed.ta.mjs";
// export { VerticalSpeed, _decode_VerticalSpeed, _encode_VerticalSpeed } from "../TS33128Payloads/VerticalSpeed.ta.mjs";
import { VerticalDirection, _enum_for_VerticalDirection, VerticalDirection_upward /* IMPORTED_LONG_ENUMERATION_ITEM */, upward /* IMPORTED_SHORT_ENUMERATION_ITEM */, VerticalDirection_downward /* IMPORTED_LONG_ENUMERATION_ITEM */, downward /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VerticalDirection, _encode_VerticalDirection } from "../TS33128Payloads/VerticalDirection.ta.mjs";
// export { VerticalDirection, _enum_for_VerticalDirection, VerticalDirection_upward /* IMPORTED_LONG_ENUMERATION_ITEM */, upward /* IMPORTED_SHORT_ENUMERATION_ITEM */, VerticalDirection_downward /* IMPORTED_LONG_ENUMERATION_ITEM */, downward /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VerticalDirection, _encode_VerticalDirection } from "../TS33128Payloads/VerticalDirection.ta.mjs";


/**
 * @summary HorizontalWithVerticalVelocity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HorizontalWithVerticalVelocity ::= SEQUENCE
 * {
 *     hSpeed                              [1] HorizontalSpeed,
 *     bearing                             [2] Angle,
 *     vSpeed                              [3] VerticalSpeed,
 *     vDirection                          [4] VerticalDirection
 * }
 * ```
 * 
 * @class
 */
export
class HorizontalWithVerticalVelocity {
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
        readonly bearing: Angle,
        /**
         * @summary `vSpeed`.
         * @public
         * @readonly
         */
        readonly vSpeed: VerticalSpeed,
        /**
         * @summary `vDirection`.
         * @public
         * @readonly
         */
        readonly vDirection: VerticalDirection
    ) {}

    /**
     * @summary Restructures an object into a HorizontalWithVerticalVelocity
     * @description
     * 
     * This takes an `object` and converts it to a `HorizontalWithVerticalVelocity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HorizontalWithVerticalVelocity`.
     * @returns {HorizontalWithVerticalVelocity}
     */
    public static _from_object (_o: { [_K in keyof (HorizontalWithVerticalVelocity)]: (HorizontalWithVerticalVelocity)[_K] }): HorizontalWithVerticalVelocity {
        return new HorizontalWithVerticalVelocity(_o.hSpeed, _o.bearing, _o.vSpeed, _o.vDirection);
    }

        /**
         * @summary The enum used as the type of the component `vDirection`
         * @public
         * @static
         */

    public static _enum_for_vDirection = _enum_for_VerticalDirection;
}

/**
 * @summary The Leading Root Component Types of HorizontalWithVerticalVelocity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HorizontalWithVerticalVelocity: $.ComponentSpec[] = [
    new $.ComponentSpec("hSpeed", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bearing", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("vSpeed", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("vDirection", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of HorizontalWithVerticalVelocity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HorizontalWithVerticalVelocity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HorizontalWithVerticalVelocity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HorizontalWithVerticalVelocity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HorizontalWithVerticalVelocity: $.ASN1Decoder<HorizontalWithVerticalVelocity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HorizontalWithVerticalVelocity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HorizontalWithVerticalVelocity (el: _Element): HorizontalWithVerticalVelocity {
    if (!_cached_decoder_for_HorizontalWithVerticalVelocity) { _cached_decoder_for_HorizontalWithVerticalVelocity = function (el: _Element): HorizontalWithVerticalVelocity {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("HorizontalWithVerticalVelocity contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hSpeed";
    sequence[1].name = "bearing";
    sequence[2].name = "vSpeed";
    sequence[3].name = "vDirection";
    let hSpeed!: HorizontalSpeed;
    let bearing!: Angle;
    let vSpeed!: VerticalSpeed;
    let vDirection!: VerticalDirection;
    hSpeed = $._decode_implicit<HorizontalSpeed>(() => _decode_HorizontalSpeed)(sequence[0]);
    bearing = $._decode_implicit<Angle>(() => _decode_Angle)(sequence[1]);
    vSpeed = $._decode_implicit<VerticalSpeed>(() => _decode_VerticalSpeed)(sequence[2]);
    vDirection = $._decode_implicit<VerticalDirection>(() => _decode_VerticalDirection)(sequence[3]);
    return new HorizontalWithVerticalVelocity(
        hSpeed,
        bearing,
        vSpeed,
        vDirection,

    );
}; }
    return _cached_decoder_for_HorizontalWithVerticalVelocity(el);
}

let _cached_encoder_for_HorizontalWithVerticalVelocity: $.ASN1Encoder<HorizontalWithVerticalVelocity> | null = null;

/**
 * @summary Encodes a(n) HorizontalWithVerticalVelocity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HorizontalWithVerticalVelocity, encoded as an ASN.1 Element.
 */
export
function _encode_HorizontalWithVerticalVelocity (value: HorizontalWithVerticalVelocity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HorizontalWithVerticalVelocity) { _cached_encoder_for_HorizontalWithVerticalVelocity = function (value: HorizontalWithVerticalVelocity, elGetter: $.ASN1Encoder<HorizontalWithVerticalVelocity>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_HorizontalSpeed, $.BER)(value.hSpeed, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Angle, $.BER)(value.bearing, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_VerticalSpeed, $.BER)(value.vSpeed, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_VerticalDirection, $.BER)(value.vDirection, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HorizontalWithVerticalVelocity(value, elGetter);
}


/* eslint-enable */
