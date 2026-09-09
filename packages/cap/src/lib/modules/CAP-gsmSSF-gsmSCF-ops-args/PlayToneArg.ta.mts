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
import { Burst, _decode_Burst, _encode_Burst } from "../CAP-datatypes/Burst.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { type LegOrCallSegment, _decode_LegOrCallSegment, _encode_LegOrCallSegment } from "../CAP-datatypes/LegOrCallSegment.ta.mjs";



/**
 * @summary PlayToneArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PlayToneArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     legOrCallSegment            [0] LegOrCallSegment {bound},
 *     bursts                [1] Burst,
 *     extensions                [2] Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class PlayToneArg {
    constructor (
        /**
         * @summary `legOrCallSegment`.
         * @public
         * @readonly
         */
        readonly legOrCallSegment: LegOrCallSegment,
        /**
         * @summary `bursts`.
         * @public
         * @readonly
         */
        readonly bursts: Burst,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PlayToneArg
     * @description
     * 
     * This takes an `object` and converts it to a `PlayToneArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PlayToneArg`.
     * @returns {PlayToneArg}
     */
    public static _from_object (_o: { [_K in keyof (PlayToneArg)]: (PlayToneArg)[_K] }): PlayToneArg {
        return new PlayToneArg(_o.legOrCallSegment, _o.bursts, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PlayToneArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PlayToneArg: $.ComponentSpec[] = [
    new $.ComponentSpec("legOrCallSegment", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("bursts", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PlayToneArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PlayToneArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PlayToneArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PlayToneArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PlayToneArg: $.ASN1Decoder<PlayToneArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PlayToneArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PlayToneArg (el: _Element): PlayToneArg {
    if (!_cached_decoder_for_PlayToneArg) { _cached_decoder_for_PlayToneArg = function (el: _Element): PlayToneArg {
    let legOrCallSegment!: LegOrCallSegment;
    let bursts!: Burst;
    let extensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "legOrCallSegment": (_el: _Element): void => { legOrCallSegment = $._decode_implicit<LegOrCallSegment>(() => _decode_LegOrCallSegment)(_el); },
        "bursts": (_el: _Element): void => { bursts = $._decode_implicit<Burst>(() => _decode_Burst)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PlayToneArg,
        _extension_additions_list_spec_for_PlayToneArg,
        _root_component_type_list_2_spec_for_PlayToneArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PlayToneArg(
        legOrCallSegment,
        bursts,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PlayToneArg(el);
}

let _cached_encoder_for_PlayToneArg: $.ASN1Encoder<PlayToneArg> | null = null;

/**
 * @summary Encodes a(n) PlayToneArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PlayToneArg, encoded as an ASN.1 Element.
 */
export
function _encode_PlayToneArg (value: PlayToneArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PlayToneArg) { _cached_encoder_for_PlayToneArg = function (value: PlayToneArg, elGetter: $.ASN1Encoder<PlayToneArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_LegOrCallSegment, $.BER)(value.legOrCallSegment, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Burst, $.BER)(value.bursts, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PlayToneArg(value, elGetter);
}


/* eslint-enable */
