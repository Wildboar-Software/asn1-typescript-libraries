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
import { Header, _decode_Header, _encode_Header } from "../GDT/Header.ta.mjs";
// export { Header, _decode_Header, _encode_Header } from "../GDT/Header.ta.mjs";
import { Body, _decode_Body, _encode_Body } from "../GDT/Body.ta.mjs";
// export { Body, _decode_Body, _encode_Body } from "../GDT/Body.ta.mjs";


/**
 * @summary GDTMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GDTMessage ::= SEQUENCE {
 *     header  Header,
 *     body    Body OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class GDTMessage {
    constructor (
        /**
         * @summary `header`.
         * @public
         * @readonly
         */
        readonly header: Header,
        /**
         * @summary `body`.
         * @public
         * @readonly
         */
        readonly body: OPTIONAL<Body>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GDTMessage
     * @description
     * 
     * This takes an `object` and converts it to a `GDTMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GDTMessage`.
     * @returns {GDTMessage}
     */
    public static _from_object (_o: { [_K in keyof (GDTMessage)]: (GDTMessage)[_K] }): GDTMessage {
        return new GDTMessage(_o.header, _o.body, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GDTMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GDTMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("header", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("body", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3), $.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7), $.hasTag(_TagClass.context, 8), $.hasTag(_TagClass.context, 9), $.hasTag(_TagClass.context, 10), $.hasTag(_TagClass.context, 11), $.hasTag(_TagClass.context, 12), $.hasTag(_TagClass.context, 13), $.hasTag(_TagClass.context, 14)))
];

/**
 * @summary The Trailing Root Component Types of GDTMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GDTMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GDTMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GDTMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GDTMessage: $.ASN1Decoder<GDTMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GDTMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GDTMessage (el: _Element): GDTMessage {
    if (!_cached_decoder_for_GDTMessage) { _cached_decoder_for_GDTMessage = function (el: _Element): GDTMessage {
    let header!: Header;
    let body: OPTIONAL<Body>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "header": (_el: _Element): void => { header = _decode_Header(_el); },
        "body": (_el: _Element): void => { body = _decode_Body(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GDTMessage,
        _extension_additions_list_spec_for_GDTMessage,
        _root_component_type_list_2_spec_for_GDTMessage,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GDTMessage(
        header,
        body,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GDTMessage(el);
}

let _cached_encoder_for_GDTMessage: $.ASN1Encoder<GDTMessage> | null = null;

/**
 * @summary Encodes a(n) GDTMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GDTMessage, encoded as an ASN.1 Element.
 */
export
function _encode_GDTMessage (value: GDTMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GDTMessage) { _cached_encoder_for_GDTMessage = function (value: GDTMessage, elGetter: $.ASN1Encoder<GDTMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Header(value.header, $.BER),
            /* IF_ABSENT  */ ((value.body === undefined) ? undefined : _encode_Body(value.body, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GDTMessage(value, elGetter);
}


/* eslint-enable */
