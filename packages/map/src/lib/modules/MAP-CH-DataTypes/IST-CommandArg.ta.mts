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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary IST_CommandArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IST-CommandArg ::= SEQUENCE{
 *     imsi    [0]    IMSI,
 *     extensionContainer    [1]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class IST_CommandArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IST_CommandArg
     * @description
     * 
     * This takes an `object` and converts it to a `IST_CommandArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IST_CommandArg`.
     * @returns {IST_CommandArg}
     */
    public static _from_object (_o: { [_K in keyof (IST_CommandArg)]: (IST_CommandArg)[_K] }): IST_CommandArg {
        return new IST_CommandArg(_o.imsi, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IST_CommandArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IST_CommandArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IST_CommandArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IST_CommandArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IST_CommandArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IST_CommandArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IST_CommandArg: $.ASN1Decoder<IST_CommandArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IST_CommandArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IST_CommandArg (el: _Element): IST_CommandArg {
    if (!_cached_decoder_for_IST_CommandArg) { _cached_decoder_for_IST_CommandArg = function (el: _Element): IST_CommandArg {
    let imsi!: IMSI;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IST_CommandArg,
        _extension_additions_list_spec_for_IST_CommandArg,
        _root_component_type_list_2_spec_for_IST_CommandArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IST_CommandArg(
        imsi,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IST_CommandArg(el);
}

let _cached_encoder_for_IST_CommandArg: $.ASN1Encoder<IST_CommandArg> | null = null;

/**
 * @summary Encodes a(n) IST_CommandArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IST_CommandArg, encoded as an ASN.1 Element.
 */
export
function _encode_IST_CommandArg (value: IST_CommandArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IST_CommandArg) { _cached_encoder_for_IST_CommandArg = function (value: IST_CommandArg, elGetter: $.ASN1Encoder<IST_CommandArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IST_CommandArg(value, elGetter);
}


/* eslint-enable */
