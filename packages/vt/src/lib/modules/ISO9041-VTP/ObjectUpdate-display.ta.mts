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
import { DOupdate, _decode_DOupdate, _encode_DOupdate } from "../ISO9041-VTP/DOupdate.ta.mjs";
// export { DOupdate, _decode_DOupdate, _encode_DOupdate } from "../ISO9041-VTP/DOupdate.ta.mjs";


/**
 * @summary ObjectUpdate_display
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectUpdate-display ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class ObjectUpdate_display {
    constructor (
        /**
         * @summary `doName`.
         * @public
         * @readonly
         */
        readonly doName: OPTIONAL<PrintableString>,
        /**
         * @summary `updates`.
         * @public
         * @readonly
         */
        readonly updates: DOupdate[]
    ) {}

    /**
     * @summary Restructures an object into a ObjectUpdate_display
     * @description
     * 
     * This takes an `object` and converts it to a `ObjectUpdate_display`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ObjectUpdate_display`.
     * @returns {ObjectUpdate_display}
     */
    public static _from_object (_o: { [_K in keyof (ObjectUpdate_display)]: (ObjectUpdate_display)[_K] }): ObjectUpdate_display {
        return new ObjectUpdate_display(_o.doName, _o.updates);
    }


}

/**
 * @summary The Leading Root Component Types of ObjectUpdate_display
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ObjectUpdate_display: $.ComponentSpec[] = [
    new $.ComponentSpec("doName", true, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("updates", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ObjectUpdate_display
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ObjectUpdate_display: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ObjectUpdate_display
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ObjectUpdate_display: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ObjectUpdate_display: $.ASN1Decoder<ObjectUpdate_display> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectUpdate_display
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectUpdate_display (el: _Element): ObjectUpdate_display {
    if (!_cached_decoder_for_ObjectUpdate_display) { _cached_decoder_for_ObjectUpdate_display = function (el: _Element): ObjectUpdate_display {
    let doName: OPTIONAL<PrintableString>;
    let updates!: DOupdate[];
    const callbacks: $.DecodingMap = {
        "doName": (_el: _Element): void => { doName = $._decodePrintableString(_el); },
        "updates": (_el: _Element): void => { updates = $._decodeSequenceOf<DOupdate>(() => _decode_DOupdate)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ObjectUpdate_display,
        _extension_additions_list_spec_for_ObjectUpdate_display,
        _root_component_type_list_2_spec_for_ObjectUpdate_display,
        undefined,
    );
    return new ObjectUpdate_display(
        doName,
        updates
    );
}; }
    return _cached_decoder_for_ObjectUpdate_display(el);
}

let _cached_encoder_for_ObjectUpdate_display: $.ASN1Encoder<ObjectUpdate_display> | null = null;

/**
 * @summary Encodes a(n) ObjectUpdate_display into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectUpdate_display, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectUpdate_display (value: ObjectUpdate_display, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectUpdate_display) { _cached_encoder_for_ObjectUpdate_display = function (value: ObjectUpdate_display, elGetter: $.ASN1Encoder<ObjectUpdate_display>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.doName === undefined) ? undefined : $._encodePrintableString(value.doName, $.BER)),
            /* REQUIRED   */ $._encodeSequenceOf<DOupdate>(() => _encode_DOupdate, $.BER)(value.updates, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ObjectUpdate_display(value, elGetter);
}


/* eslint-enable */
