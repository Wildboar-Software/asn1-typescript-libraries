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
import { DigitMapName, _decode_DigitMapName, _encode_DigitMapName } from "../MEDIA-GATEWAY-CONTROL/DigitMapName.ta.mjs";
// export { DigitMapName, _decode_DigitMapName, _encode_DigitMapName } from "../MEDIA-GATEWAY-CONTROL/DigitMapName.ta.mjs";
import { DigitMapValue, _decode_DigitMapValue, _encode_DigitMapValue } from "../MEDIA-GATEWAY-CONTROL/DigitMapValue.ta.mjs";
// export { DigitMapValue, _decode_DigitMapValue, _encode_DigitMapValue } from "../MEDIA-GATEWAY-CONTROL/DigitMapValue.ta.mjs";


/**
 * @summary DigitMapDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitMapDescriptor ::= SEQUENCE
 *     {
 *         digitMapName            [0] DigitMapName OPTIONAL,
 *         digitMapValue            [1] DigitMapValue OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class DigitMapDescriptor {
    constructor (
        /**
         * @summary `digitMapName`.
         * @public
         * @readonly
         */
        readonly digitMapName: OPTIONAL<DigitMapName>,
        /**
         * @summary `digitMapValue`.
         * @public
         * @readonly
         */
        readonly digitMapValue: OPTIONAL<DigitMapValue>
    ) {}

    /**
     * @summary Restructures an object into a DigitMapDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `DigitMapDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DigitMapDescriptor`.
     * @returns {DigitMapDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (DigitMapDescriptor)]: (DigitMapDescriptor)[_K] }): DigitMapDescriptor {
        return new DigitMapDescriptor(_o.digitMapName, _o.digitMapValue);
    }


}

/**
 * @summary The Leading Root Component Types of DigitMapDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DigitMapDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("digitMapName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("digitMapValue", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DigitMapDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DigitMapDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DigitMapDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DigitMapDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DigitMapDescriptor: $.ASN1Decoder<DigitMapDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigitMapDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigitMapDescriptor (el: _Element): DigitMapDescriptor {
    if (!_cached_decoder_for_DigitMapDescriptor) { _cached_decoder_for_DigitMapDescriptor = function (el: _Element): DigitMapDescriptor {
    let digitMapName: OPTIONAL<DigitMapName>;
    let digitMapValue: OPTIONAL<DigitMapValue>;
    const callbacks: $.DecodingMap = {
        "digitMapName": (_el: _Element): void => { digitMapName = $._decode_implicit<DigitMapName>(() => _decode_DigitMapName)(_el); },
        "digitMapValue": (_el: _Element): void => { digitMapValue = $._decode_implicit<DigitMapValue>(() => _decode_DigitMapValue)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DigitMapDescriptor,
        _extension_additions_list_spec_for_DigitMapDescriptor,
        _root_component_type_list_2_spec_for_DigitMapDescriptor,
        undefined,
    );
    return new DigitMapDescriptor(
        digitMapName,
        digitMapValue
    );
}; }
    return _cached_decoder_for_DigitMapDescriptor(el);
}

let _cached_encoder_for_DigitMapDescriptor: $.ASN1Encoder<DigitMapDescriptor> | null = null;

/**
 * @summary Encodes a(n) DigitMapDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitMapDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_DigitMapDescriptor (value: DigitMapDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigitMapDescriptor) { _cached_encoder_for_DigitMapDescriptor = function (value: DigitMapDescriptor, elGetter: $.ASN1Encoder<DigitMapDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.digitMapName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DigitMapName, $.BER)(value.digitMapName, $.BER)),
            /* IF_ABSENT  */ ((value.digitMapValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DigitMapValue, $.BER)(value.digitMapValue, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DigitMapDescriptor(value, elGetter);
}


/* eslint-enable */
