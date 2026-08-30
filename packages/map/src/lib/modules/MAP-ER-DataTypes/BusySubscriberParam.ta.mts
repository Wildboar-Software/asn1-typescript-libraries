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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary BusySubscriberParam
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BusySubscriberParam ::= SEQUENCE {
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     ccbs-Possible    [0] NULL    OPTIONAL,
 *     ccbs-Busy    [1] NULL    OPTIONAL}
 * ```
 * 
 * @class
 */
export
class BusySubscriberParam {
    constructor (
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `ccbs_Possible`.
         * @public
         * @readonly
         */
        readonly ccbs_Possible: OPTIONAL<NULL>,
        /**
         * @summary `ccbs_Busy`.
         * @public
         * @readonly
         */
        readonly ccbs_Busy: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BusySubscriberParam
     * @description
     * 
     * This takes an `object` and converts it to a `BusySubscriberParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BusySubscriberParam`.
     * @returns {BusySubscriberParam}
     */
    public static _from_object (_o: { [_K in keyof (BusySubscriberParam)]: (BusySubscriberParam)[_K] }): BusySubscriberParam {
        return new BusySubscriberParam(_o.extensionContainer, _o.ccbs_Possible, _o.ccbs_Busy, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of BusySubscriberParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BusySubscriberParam: $.ComponentSpec[] = [
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of BusySubscriberParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BusySubscriberParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BusySubscriberParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BusySubscriberParam: $.ComponentSpec[] = [
    new $.ComponentSpec("ccbs-Possible", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("ccbs-Busy", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

let _cached_decoder_for_BusySubscriberParam: $.ASN1Decoder<BusySubscriberParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BusySubscriberParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BusySubscriberParam (el: _Element): BusySubscriberParam {
    if (!_cached_decoder_for_BusySubscriberParam) { _cached_decoder_for_BusySubscriberParam = function (el: _Element): BusySubscriberParam {
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let ccbs_Possible: OPTIONAL<NULL>;
    let ccbs_Busy: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "ccbs-Possible": (_el: _Element): void => { ccbs_Possible = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ccbs-Busy": (_el: _Element): void => { ccbs_Busy = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BusySubscriberParam,
        _extension_additions_list_spec_for_BusySubscriberParam,
        _root_component_type_list_2_spec_for_BusySubscriberParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new BusySubscriberParam(
        extensionContainer,
        ccbs_Possible,
        ccbs_Busy,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_BusySubscriberParam(el);
}

let _cached_encoder_for_BusySubscriberParam: $.ASN1Encoder<BusySubscriberParam> | null = null;

/**
 * @summary Encodes a(n) BusySubscriberParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BusySubscriberParam, encoded as an ASN.1 Element.
 */
export
function _encode_BusySubscriberParam (value: BusySubscriberParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BusySubscriberParam) { _cached_encoder_for_BusySubscriberParam = function (value: BusySubscriberParam, elGetter: $.ASN1Encoder<BusySubscriberParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.ccbs_Possible === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.ccbs_Possible, $.BER)),
            /* IF_ABSENT  */ ((value.ccbs_Busy === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.ccbs_Busy, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BusySubscriberParam(value, elGetter);
}


/* eslint-enable */
