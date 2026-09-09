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
import { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../Core-INAP-CS1-DataTypes/LegID.ta.mjs";


/**
 * @summary MoveLegArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MoveLegArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     legIDToMove                [0]    LegID,
 *     extensions                [2]    Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class MoveLegArg {
    constructor (
        /**
         * @summary `legIDToMove`.
         * @public
         * @readonly
         */
        readonly legIDToMove: LegID,
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
     * @summary Restructures an object into a MoveLegArg
     * @description
     * 
     * This takes an `object` and converts it to a `MoveLegArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MoveLegArg`.
     * @returns {MoveLegArg}
     */
    public static _from_object (_o: { [_K in keyof (MoveLegArg)]: (MoveLegArg)[_K] }): MoveLegArg {
        return new MoveLegArg(_o.legIDToMove, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MoveLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MoveLegArg: $.ComponentSpec[] = [
    new $.ComponentSpec("legIDToMove", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of MoveLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MoveLegArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MoveLegArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MoveLegArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MoveLegArg: $.ASN1Decoder<MoveLegArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MoveLegArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MoveLegArg (el: _Element): MoveLegArg {
    if (!_cached_decoder_for_MoveLegArg) { _cached_decoder_for_MoveLegArg = function (el: _Element): MoveLegArg {
    let legIDToMove!: LegID;
    let extensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "legIDToMove": (_el: _Element): void => { legIDToMove = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MoveLegArg,
        _extension_additions_list_spec_for_MoveLegArg,
        _root_component_type_list_2_spec_for_MoveLegArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MoveLegArg(
        legIDToMove,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MoveLegArg(el);
}

let _cached_encoder_for_MoveLegArg: $.ASN1Encoder<MoveLegArg> | null = null;

/**
 * @summary Encodes a(n) MoveLegArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MoveLegArg, encoded as an ASN.1 Element.
 */
export
function _encode_MoveLegArg (value: MoveLegArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MoveLegArg) { _cached_encoder_for_MoveLegArg = function (value: MoveLegArg, elGetter: $.ASN1Encoder<MoveLegArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_LegID, $.BER)(value.legIDToMove, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MoveLegArg(value, elGetter);
}


/* eslint-enable */
