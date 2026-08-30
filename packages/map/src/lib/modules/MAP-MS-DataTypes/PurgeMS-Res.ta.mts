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


/**
 * @summary PurgeMS_Res
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PurgeMS-Res ::= SEQUENCE {
 *     freezeTMSI    [0]    NULL    OPTIONAL,
 *     freezeP-TMSI    [1]    NULL    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     freezeM-TMSI    [2]    NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PurgeMS_Res {
    constructor (
        /**
         * @summary `freezeTMSI`.
         * @public
         * @readonly
         */
        readonly freezeTMSI: OPTIONAL<NULL>,
        /**
         * @summary `freezeP_TMSI`.
         * @public
         * @readonly
         */
        readonly freezeP_TMSI: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `freezeM_TMSI`.
         * @public
         * @readonly
         */
        readonly freezeM_TMSI: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PurgeMS_Res
     * @description
     * 
     * This takes an `object` and converts it to a `PurgeMS_Res`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PurgeMS_Res`.
     * @returns {PurgeMS_Res}
     */
    public static _from_object (_o: { [_K in keyof (PurgeMS_Res)]: (PurgeMS_Res)[_K] }): PurgeMS_Res {
        return new PurgeMS_Res(_o.freezeTMSI, _o.freezeP_TMSI, _o.extensionContainer, _o.freezeM_TMSI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PurgeMS_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PurgeMS_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("freezeTMSI", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("freezeP-TMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of PurgeMS_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PurgeMS_Res: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PurgeMS_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PurgeMS_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("freezeM-TMSI", true, $.hasTag(_TagClass.context, 2))
];

let _cached_decoder_for_PurgeMS_Res: $.ASN1Decoder<PurgeMS_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PurgeMS_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PurgeMS_Res (el: _Element): PurgeMS_Res {
    if (!_cached_decoder_for_PurgeMS_Res) { _cached_decoder_for_PurgeMS_Res = function (el: _Element): PurgeMS_Res {
    let freezeTMSI: OPTIONAL<NULL> = undefined;
    let freezeP_TMSI: OPTIONAL<NULL> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let freezeM_TMSI: OPTIONAL<NULL> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "freezeTMSI": (_el: _Element): void => { freezeTMSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "freezeP-TMSI": (_el: _Element): void => { freezeP_TMSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "freezeM-TMSI": (_el: _Element): void => { freezeM_TMSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PurgeMS_Res,
        _extension_additions_list_spec_for_PurgeMS_Res,
        _root_component_type_list_2_spec_for_PurgeMS_Res,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PurgeMS_Res(
        freezeTMSI,
        freezeP_TMSI,
        extensionContainer,
        freezeM_TMSI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PurgeMS_Res(el);
}

let _cached_encoder_for_PurgeMS_Res: $.ASN1Encoder<PurgeMS_Res> | null = null;

/**
 * @summary Encodes a(n) PurgeMS_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PurgeMS_Res, encoded as an ASN.1 Element.
 */
export
function _encode_PurgeMS_Res (value: PurgeMS_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PurgeMS_Res) { _cached_encoder_for_PurgeMS_Res = function (value: PurgeMS_Res, elGetter: $.ASN1Encoder<PurgeMS_Res>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.freezeTMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.freezeTMSI, $.BER)),
            /* IF_ABSENT  */ ((value.freezeP_TMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.freezeP_TMSI, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.freezeM_TMSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.freezeM_TMSI, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PurgeMS_Res(value, elGetter);
}


/* eslint-enable */
