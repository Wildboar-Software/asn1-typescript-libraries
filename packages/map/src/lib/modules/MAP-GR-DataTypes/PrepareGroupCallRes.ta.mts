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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary PrepareGroupCallRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareGroupCallRes ::= SEQUENCE {
 *     groupCallNumber    ISDN-AddressString,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class PrepareGroupCallRes {
    constructor (
        /**
         * @summary `groupCallNumber`.
         * @public
         * @readonly
         */
        readonly groupCallNumber: ISDN_AddressString,
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
     * @summary Restructures an object into a PrepareGroupCallRes
     * @description
     * 
     * This takes an `object` and converts it to a `PrepareGroupCallRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrepareGroupCallRes`.
     * @returns {PrepareGroupCallRes}
     */
    public static _from_object (_o: { [_K in keyof (PrepareGroupCallRes)]: (PrepareGroupCallRes)[_K] }): PrepareGroupCallRes {
        return new PrepareGroupCallRes(_o.groupCallNumber, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PrepareGroupCallRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrepareGroupCallRes: $.ComponentSpec[] = [
    new $.ComponentSpec("groupCallNumber", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PrepareGroupCallRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrepareGroupCallRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrepareGroupCallRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrepareGroupCallRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrepareGroupCallRes: $.ASN1Decoder<PrepareGroupCallRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrepareGroupCallRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrepareGroupCallRes (el: _Element): PrepareGroupCallRes {
    if (!_cached_decoder_for_PrepareGroupCallRes) { _cached_decoder_for_PrepareGroupCallRes = function (el: _Element): PrepareGroupCallRes {
    let groupCallNumber!: ISDN_AddressString;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "groupCallNumber": (_el: _Element): void => { groupCallNumber = _decode_ISDN_AddressString(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrepareGroupCallRes,
        _extension_additions_list_spec_for_PrepareGroupCallRes,
        _root_component_type_list_2_spec_for_PrepareGroupCallRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrepareGroupCallRes(
        groupCallNumber,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PrepareGroupCallRes(el);
}

let _cached_encoder_for_PrepareGroupCallRes: $.ASN1Encoder<PrepareGroupCallRes> | null = null;

/**
 * @summary Encodes a(n) PrepareGroupCallRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrepareGroupCallRes, encoded as an ASN.1 Element.
 */
export
function _encode_PrepareGroupCallRes (value: PrepareGroupCallRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrepareGroupCallRes) { _cached_encoder_for_PrepareGroupCallRes = function (value: PrepareGroupCallRes, elGetter: $.ASN1Encoder<PrepareGroupCallRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ISDN_AddressString(value.groupCallNumber, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrepareGroupCallRes(value, elGetter);
}


/* eslint-enable */
