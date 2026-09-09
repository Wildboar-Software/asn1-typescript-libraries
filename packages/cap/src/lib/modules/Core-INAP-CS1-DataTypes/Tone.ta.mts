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
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../Core-INAP-CS1-DataTypes/Integer4.ta.mjs";


/**
 * @summary Tone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Tone ::= SEQUENCE {
 *      toneID     [0] Integer4,
 *      duration     [1] Integer4     OPTIONAL
 *      }
 * ```
 * 
 * @class
 */
export
class Tone {
    constructor (
        /**
         * @summary `toneID`.
         * @public
         * @readonly
         */
        readonly toneID: Integer4,
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: OPTIONAL<Integer4>
    ) {}

    /**
     * @summary Restructures an object into a Tone
     * @description
     * 
     * This takes an `object` and converts it to a `Tone`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Tone`.
     * @returns {Tone}
     */
    public static _from_object (_o: { [_K in keyof (Tone)]: (Tone)[_K] }): Tone {
        return new Tone(_o.toneID, _o.duration);
    }


}

/**
 * @summary The Leading Root Component Types of Tone
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Tone: $.ComponentSpec[] = [
    new $.ComponentSpec("toneID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of Tone
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Tone: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Tone
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Tone: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Tone: $.ASN1Decoder<Tone> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Tone
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Tone (el: _Element): Tone {
    if (!_cached_decoder_for_Tone) { _cached_decoder_for_Tone = function (el: _Element): Tone {
    let toneID!: Integer4;
    let duration: OPTIONAL<Integer4>;
    const callbacks: $.DecodingMap = {
        "toneID": (_el: _Element): void => { toneID = $._decode_implicit<Integer4>(() => _decode_Integer4)(_el); },
        "duration": (_el: _Element): void => { duration = $._decode_implicit<Integer4>(() => _decode_Integer4)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Tone,
        _extension_additions_list_spec_for_Tone,
        _root_component_type_list_2_spec_for_Tone,
        undefined,
    );
    return new Tone(
        toneID,
        duration
    );
}; }
    return _cached_decoder_for_Tone(el);
}

let _cached_encoder_for_Tone: $.ASN1Encoder<Tone> | null = null;

/**
 * @summary Encodes a(n) Tone into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Tone, encoded as an ASN.1 Element.
 */
export
function _encode_Tone (value: Tone, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Tone) { _cached_encoder_for_Tone = function (value: Tone, elGetter: $.ASN1Encoder<Tone>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Integer4, $.BER)(value.toneID, $.BER),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Integer4, $.BER)(value.duration, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Tone(value, elGetter);
}


/* eslint-enable */
