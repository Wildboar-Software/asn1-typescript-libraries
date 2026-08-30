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
import { GSN_Address, _decode_GSN_Address, _encode_GSN_Address } from "../MAP-CommonDataTypes/GSN-Address.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary NoteMsPresentForGprsArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NoteMsPresentForGprsArg ::= SEQUENCE {
 *     imsi    [0] IMSI,
 *     sgsn-Address    [1] GSN-Address,
 *     ggsn-Address    [2] GSN-Address    OPTIONAL,
 *     extensionContainer    [3] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class NoteMsPresentForGprsArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: IMSI,
        /**
         * @summary `sgsn_Address`.
         * @public
         * @readonly
         */
        readonly sgsn_Address: GSN_Address,
        /**
         * @summary `ggsn_Address`.
         * @public
         * @readonly
         */
        readonly ggsn_Address: OPTIONAL<GSN_Address>,
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
     * @summary Restructures an object into a NoteMsPresentForGprsArg
     * @description
     * 
     * This takes an `object` and converts it to a `NoteMsPresentForGprsArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NoteMsPresentForGprsArg`.
     * @returns {NoteMsPresentForGprsArg}
     */
    public static _from_object (_o: { [_K in keyof (NoteMsPresentForGprsArg)]: (NoteMsPresentForGprsArg)[_K] }): NoteMsPresentForGprsArg {
        return new NoteMsPresentForGprsArg(_o.imsi, _o.sgsn_Address, _o.ggsn_Address, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NoteMsPresentForGprsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NoteMsPresentForGprsArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sgsn-Address", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ggsn-Address", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NoteMsPresentForGprsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NoteMsPresentForGprsArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NoteMsPresentForGprsArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NoteMsPresentForGprsArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NoteMsPresentForGprsArg: $.ASN1Decoder<NoteMsPresentForGprsArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NoteMsPresentForGprsArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NoteMsPresentForGprsArg (el: _Element): NoteMsPresentForGprsArg {
    if (!_cached_decoder_for_NoteMsPresentForGprsArg) { _cached_decoder_for_NoteMsPresentForGprsArg = function (el: _Element): NoteMsPresentForGprsArg {
    let imsi!: IMSI;
    let sgsn_Address!: GSN_Address;
    let ggsn_Address: OPTIONAL<GSN_Address> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "sgsn-Address": (_el: _Element): void => { sgsn_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "ggsn-Address": (_el: _Element): void => { ggsn_Address = $._decode_implicit<GSN_Address>(() => _decode_GSN_Address)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NoteMsPresentForGprsArg,
        _extension_additions_list_spec_for_NoteMsPresentForGprsArg,
        _root_component_type_list_2_spec_for_NoteMsPresentForGprsArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NoteMsPresentForGprsArg(
        imsi,
        sgsn_Address,
        ggsn_Address,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NoteMsPresentForGprsArg(el);
}

let _cached_encoder_for_NoteMsPresentForGprsArg: $.ASN1Encoder<NoteMsPresentForGprsArg> | null = null;

/**
 * @summary Encodes a(n) NoteMsPresentForGprsArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NoteMsPresentForGprsArg, encoded as an ASN.1 Element.
 */
export
function _encode_NoteMsPresentForGprsArg (value: NoteMsPresentForGprsArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NoteMsPresentForGprsArg) { _cached_encoder_for_NoteMsPresentForGprsArg = function (value: NoteMsPresentForGprsArg, elGetter: $.ASN1Encoder<NoteMsPresentForGprsArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER)(value.imsi, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GSN_Address, $.BER)(value.sgsn_Address, $.BER),
            /* IF_ABSENT  */ ((value.ggsn_Address === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_GSN_Address, $.BER)(value.ggsn_Address, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NoteMsPresentForGprsArg(value, elGetter);
}


/* eslint-enable */
