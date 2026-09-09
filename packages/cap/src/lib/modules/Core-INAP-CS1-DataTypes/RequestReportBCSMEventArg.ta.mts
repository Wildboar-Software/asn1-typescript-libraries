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
import { BCSMEvent, _decode_BCSMEvent, _encode_BCSMEvent } from "../Core-INAP-CS1-DataTypes/BCSMEvent.ta.mjs";
// export { BCSMEvent, _decode_BCSMEvent, _encode_BCSMEvent } from "../Core-INAP-CS1-DataTypes/BCSMEvent.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary RequestReportBCSMEventArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestReportBCSMEventArg ::= SEQUENCE {
 *      bcsmEvents     [0] SEQUENCE SIZE (1..numOfBCSMEvents) OF BCSMEvent,
 *      extensions     [2] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class RequestReportBCSMEventArg {
    constructor (
        /**
         * @summary `bcsmEvents`.
         * @public
         * @readonly
         */
        readonly bcsmEvents: BCSMEvent[],
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a RequestReportBCSMEventArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestReportBCSMEventArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestReportBCSMEventArg`.
     * @returns {RequestReportBCSMEventArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestReportBCSMEventArg)]: (RequestReportBCSMEventArg)[_K] }): RequestReportBCSMEventArg {
        return new RequestReportBCSMEventArg(_o.bcsmEvents, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of RequestReportBCSMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestReportBCSMEventArg: $.ComponentSpec[] = [
    new $.ComponentSpec("bcsmEvents", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of RequestReportBCSMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestReportBCSMEventArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestReportBCSMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestReportBCSMEventArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestReportBCSMEventArg: $.ASN1Decoder<RequestReportBCSMEventArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestReportBCSMEventArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestReportBCSMEventArg (el: _Element): RequestReportBCSMEventArg {
    if (!_cached_decoder_for_RequestReportBCSMEventArg) { _cached_decoder_for_RequestReportBCSMEventArg = function (el: _Element): RequestReportBCSMEventArg {
    let bcsmEvents!: BCSMEvent[];
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "bcsmEvents": (_el: _Element): void => { bcsmEvents = $._decode_implicit<BCSMEvent[]>(() => $._decodeSequenceOf<BCSMEvent>(() => _decode_BCSMEvent))(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestReportBCSMEventArg,
        _extension_additions_list_spec_for_RequestReportBCSMEventArg,
        _root_component_type_list_2_spec_for_RequestReportBCSMEventArg,
        undefined,
    );
    return new RequestReportBCSMEventArg(
        bcsmEvents,
        extensions
    );
}; }
    return _cached_decoder_for_RequestReportBCSMEventArg(el);
}

let _cached_encoder_for_RequestReportBCSMEventArg: $.ASN1Encoder<RequestReportBCSMEventArg> | null = null;

/**
 * @summary Encodes a(n) RequestReportBCSMEventArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestReportBCSMEventArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestReportBCSMEventArg (value: RequestReportBCSMEventArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestReportBCSMEventArg) { _cached_encoder_for_RequestReportBCSMEventArg = function (value: RequestReportBCSMEventArg, elGetter: $.ASN1Encoder<RequestReportBCSMEventArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<BCSMEvent>(() => _encode_BCSMEvent, $.BER), $.BER)(value.bcsmEvents, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RequestReportBCSMEventArg(value, elGetter);
}


/* eslint-enable */
