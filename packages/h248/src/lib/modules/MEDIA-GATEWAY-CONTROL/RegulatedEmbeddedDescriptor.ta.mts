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
import { SecondEventsDescriptor, _decode_SecondEventsDescriptor, _encode_SecondEventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SecondEventsDescriptor.ta.mjs";
// export { SecondEventsDescriptor, _decode_SecondEventsDescriptor, _encode_SecondEventsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SecondEventsDescriptor.ta.mjs";
import { SignalsDescriptor, _decode_SignalsDescriptor, _encode_SignalsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SignalsDescriptor.ta.mjs";
// export { SignalsDescriptor, _decode_SignalsDescriptor, _encode_SignalsDescriptor } from "../MEDIA-GATEWAY-CONTROL/SignalsDescriptor.ta.mjs";


/**
 * @summary RegulatedEmbeddedDescriptor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RegulatedEmbeddedDescriptor ::= SEQUENCE
 *     {
 *         secondEvent                [0] SecondEventsDescriptor OPTIONAL,
 *         signalsDescriptor        [1] SignalsDescriptor OPTIONAL,
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class RegulatedEmbeddedDescriptor {
    constructor (
        /**
         * @summary `secondEvent`.
         * @public
         * @readonly
         */
        readonly secondEvent: OPTIONAL<SecondEventsDescriptor>,
        /**
         * @summary `signalsDescriptor`.
         * @public
         * @readonly
         */
        readonly signalsDescriptor: OPTIONAL<SignalsDescriptor>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RegulatedEmbeddedDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `RegulatedEmbeddedDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegulatedEmbeddedDescriptor`.
     * @returns {RegulatedEmbeddedDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (RegulatedEmbeddedDescriptor)]: (RegulatedEmbeddedDescriptor)[_K] }): RegulatedEmbeddedDescriptor {
        return new RegulatedEmbeddedDescriptor(_o.secondEvent, _o.signalsDescriptor, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RegulatedEmbeddedDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RegulatedEmbeddedDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("secondEvent", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("signalsDescriptor", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of RegulatedEmbeddedDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RegulatedEmbeddedDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RegulatedEmbeddedDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RegulatedEmbeddedDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RegulatedEmbeddedDescriptor: $.ASN1Decoder<RegulatedEmbeddedDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RegulatedEmbeddedDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RegulatedEmbeddedDescriptor (el: _Element): RegulatedEmbeddedDescriptor {
    if (!_cached_decoder_for_RegulatedEmbeddedDescriptor) { _cached_decoder_for_RegulatedEmbeddedDescriptor = function (el: _Element): RegulatedEmbeddedDescriptor {
    let secondEvent: OPTIONAL<SecondEventsDescriptor>;
    let signalsDescriptor: OPTIONAL<SignalsDescriptor>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "secondEvent": (_el: _Element): void => { secondEvent = $._decode_implicit<SecondEventsDescriptor>(() => _decode_SecondEventsDescriptor)(_el); },
        "signalsDescriptor": (_el: _Element): void => { signalsDescriptor = $._decode_implicit<SignalsDescriptor>(() => _decode_SignalsDescriptor)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RegulatedEmbeddedDescriptor,
        _extension_additions_list_spec_for_RegulatedEmbeddedDescriptor,
        _root_component_type_list_2_spec_for_RegulatedEmbeddedDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RegulatedEmbeddedDescriptor(
        secondEvent,
        signalsDescriptor,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RegulatedEmbeddedDescriptor(el);
}

let _cached_encoder_for_RegulatedEmbeddedDescriptor: $.ASN1Encoder<RegulatedEmbeddedDescriptor> | null = null;

/**
 * @summary Encodes a(n) RegulatedEmbeddedDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegulatedEmbeddedDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_RegulatedEmbeddedDescriptor (value: RegulatedEmbeddedDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RegulatedEmbeddedDescriptor) { _cached_encoder_for_RegulatedEmbeddedDescriptor = function (value: RegulatedEmbeddedDescriptor, elGetter: $.ASN1Encoder<RegulatedEmbeddedDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.secondEvent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_SecondEventsDescriptor, $.BER)(value.secondEvent, $.BER)),
            /* IF_ABSENT  */ ((value.signalsDescriptor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SignalsDescriptor, $.BER)(value.signalsDescriptor, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RegulatedEmbeddedDescriptor(value, elGetter);
}


/* eslint-enable */
