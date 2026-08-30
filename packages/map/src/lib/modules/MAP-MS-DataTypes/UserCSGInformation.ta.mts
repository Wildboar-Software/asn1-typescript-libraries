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
import { CSG_Id, _decode_CSG_Id, _encode_CSG_Id } from "../MAP-MS-DataTypes/CSG-Id.ta.mjs";
// export { CSG_Id, _decode_CSG_Id, _encode_CSG_Id } from "../MAP-MS-DataTypes/CSG-Id.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary UserCSGInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserCSGInformation ::= SEQUENCE {
 *     csg-Id    [0] CSG-Id,
 *     extensionContainer    [1] ExtensionContainer    OPTIONAL,
 *     ...,
 *     accessMode    [2] OCTET STRING (SIZE(1))    OPTIONAL,
 *     cmi    [3] OCTET STRING (SIZE(1))    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class UserCSGInformation {
    constructor (
        /**
         * @summary `csg_Id`.
         * @public
         * @readonly
         */
        readonly csg_Id: CSG_Id,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `accessMode`.
         * @public
         * @readonly
         */
        readonly accessMode: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `cmi`.
         * @public
         * @readonly
         */
        readonly cmi: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a UserCSGInformation
     * @description
     * 
     * This takes an `object` and converts it to a `UserCSGInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserCSGInformation`.
     * @returns {UserCSGInformation}
     */
    public static _from_object (_o: { [_K in keyof (UserCSGInformation)]: (UserCSGInformation)[_K] }): UserCSGInformation {
        return new UserCSGInformation(_o.csg_Id, _o.extensionContainer, _o.accessMode, _o.cmi, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of UserCSGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UserCSGInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("csg-Id", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of UserCSGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UserCSGInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UserCSGInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UserCSGInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("accessMode", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("cmi", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

let _cached_decoder_for_UserCSGInformation: $.ASN1Decoder<UserCSGInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserCSGInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserCSGInformation (el: _Element): UserCSGInformation {
    if (!_cached_decoder_for_UserCSGInformation) { _cached_decoder_for_UserCSGInformation = function (el: _Element): UserCSGInformation {
    let csg_Id!: CSG_Id;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let accessMode: OPTIONAL<OCTET_STRING>;
    let cmi: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "csg-Id": (_el: _Element): void => { csg_Id = $._decode_implicit<CSG_Id>(() => _decode_CSG_Id)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "accessMode": (_el: _Element): void => { accessMode = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "cmi": (_el: _Element): void => { cmi = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UserCSGInformation,
        _extension_additions_list_spec_for_UserCSGInformation,
        _root_component_type_list_2_spec_for_UserCSGInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UserCSGInformation(
        csg_Id,
        extensionContainer,
        accessMode,
        cmi,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_UserCSGInformation(el);
}

let _cached_encoder_for_UserCSGInformation: $.ASN1Encoder<UserCSGInformation> | null = null;

/**
 * @summary Encodes a(n) UserCSGInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserCSGInformation, encoded as an ASN.1 Element.
 */
export
function _encode_UserCSGInformation (value: UserCSGInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserCSGInformation) { _cached_encoder_for_UserCSGInformation = function (value: UserCSGInformation, elGetter: $.ASN1Encoder<UserCSGInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CSG_Id, $.BER)(value.csg_Id, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.accessMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.accessMode, $.BER)),
            /* IF_ABSENT  */ ((value.cmi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.cmi, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UserCSGInformation(value, elGetter);
}


/* eslint-enable */
