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
 * @summary UpdateLocationRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateLocationRes ::= SEQUENCE {
 *     hlr-Number    ISDN-AddressString,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     add-Capability    NULL    OPTIONAL,
 *     pagingArea-Capability    [0]NULL    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class UpdateLocationRes {
    constructor (
        /**
         * @summary `hlr_Number`.
         * @public
         * @readonly
         */
        readonly hlr_Number: ISDN_AddressString,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `add_Capability`.
         * @public
         * @readonly
         */
        readonly add_Capability: OPTIONAL<NULL>,
        /**
         * @summary `pagingArea_Capability`.
         * @public
         * @readonly
         */
        readonly pagingArea_Capability: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UpdateLocationRes
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateLocationRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateLocationRes`.
     * @returns {UpdateLocationRes}
     */
    public static _from_object (_o: { [_K in keyof (UpdateLocationRes)]: (UpdateLocationRes)[_K] }): UpdateLocationRes {
        return new UpdateLocationRes(_o.hlr_Number, _o.extensionContainer, _o.add_Capability, _o.pagingArea_Capability, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UpdateLocationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateLocationRes: $.ComponentSpec[] = [
    new $.ComponentSpec("hlr-Number", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of UpdateLocationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateLocationRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateLocationRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateLocationRes: $.ComponentSpec[] = [
    new $.ComponentSpec("add-Capability", true, $.hasTag(_TagClass.universal, 5), undefined, undefined),
    new $.ComponentSpec("pagingArea-Capability", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

let _cached_decoder_for_UpdateLocationRes: $.ASN1Decoder<UpdateLocationRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateLocationRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateLocationRes (el: _Element): UpdateLocationRes {
    if (!_cached_decoder_for_UpdateLocationRes) { _cached_decoder_for_UpdateLocationRes = function (el: _Element): UpdateLocationRes {
    let hlr_Number!: ISDN_AddressString;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let add_Capability: OPTIONAL<NULL>;
    let pagingArea_Capability: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "hlr-Number": (_el: _Element): void => { hlr_Number = _decode_ISDN_AddressString(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "add-Capability": (_el: _Element): void => { add_Capability = $._decodeNull(_el); },
        "pagingArea-Capability": (_el: _Element): void => { pagingArea_Capability = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UpdateLocationRes,
        _extension_additions_list_spec_for_UpdateLocationRes,
        _root_component_type_list_2_spec_for_UpdateLocationRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UpdateLocationRes(
        hlr_Number,
        extensionContainer,
        add_Capability,
        pagingArea_Capability,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UpdateLocationRes(el);
}

let _cached_encoder_for_UpdateLocationRes: $.ASN1Encoder<UpdateLocationRes> | null = null;

/**
 * @summary Encodes a(n) UpdateLocationRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateLocationRes, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateLocationRes (value: UpdateLocationRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateLocationRes) { _cached_encoder_for_UpdateLocationRes = function (value: UpdateLocationRes, elGetter: $.ASN1Encoder<UpdateLocationRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ISDN_AddressString(value.hlr_Number, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.add_Capability === undefined) ? undefined : $._encodeNull(value.add_Capability, $.BER)),
            /* IF_ABSENT  */ ((value.pagingArea_Capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.pagingArea_Capability, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateLocationRes(value, elGetter);
}


/* eslint-enable */
