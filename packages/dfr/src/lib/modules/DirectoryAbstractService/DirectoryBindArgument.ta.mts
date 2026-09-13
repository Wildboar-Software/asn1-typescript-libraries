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
import { Credentials, _decode_Credentials, _encode_Credentials } from "../DirectoryAbstractService/Credentials.ta.mjs";
// export { Credentials, _decode_Credentials, _encode_Credentials } from "../DirectoryAbstractService/Credentials.ta.mjs";
import { Versions, Versions_v1 /* IMPORTED_LONG_NAMED_BIT */, v1 /* IMPORTED_SHORT_NAMED_BIT */, Versions_v2 /* IMPORTED_LONG_NAMED_BIT */, v2 /* IMPORTED_SHORT_NAMED_BIT */, _decode_Versions, _encode_Versions } from "../DirectoryAbstractService/Versions.ta.mjs";
// export { Versions, Versions_v1 /* IMPORTED_LONG_NAMED_BIT */, v1 /* IMPORTED_SHORT_NAMED_BIT */, Versions_v2 /* IMPORTED_LONG_NAMED_BIT */, v2 /* IMPORTED_SHORT_NAMED_BIT */, _decode_Versions, _encode_Versions } from "../DirectoryAbstractService/Versions.ta.mjs";


/**
 * @summary DirectoryBindArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DirectoryBindArgument ::= SET {
 *   credentials  [0]  Credentials OPTIONAL,
 *   versions     [1]  Versions DEFAULT {v1},
 *   ... }
 * ```
 * 
 * @class
 */
export
class DirectoryBindArgument {
    constructor (
        /**
         * @summary `credentials`.
         * @public
         * @readonly
         */
        readonly credentials: OPTIONAL<Credentials>,
        /**
         * @summary `versions`.
         * @public
         * @readonly
         */
        readonly versions: OPTIONAL<Versions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DirectoryBindArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DirectoryBindArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DirectoryBindArgument`.
     * @returns {DirectoryBindArgument}
     */
    public static _from_object (_o: { [_K in keyof (DirectoryBindArgument)]: (DirectoryBindArgument)[_K] }): DirectoryBindArgument {
        return new DirectoryBindArgument(_o.credentials, _o.versions, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `versions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_versions () { return (() => { const _ret = new Uint8ClampedArray(1); _ret[Versions_v1] = TRUE_BIT;return _ret; })(); }
}

/**
 * @summary The Leading Root Component Types of DirectoryBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DirectoryBindArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("credentials", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("versions", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DirectoryBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DirectoryBindArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DirectoryBindArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DirectoryBindArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DirectoryBindArgument: $.ASN1Decoder<DirectoryBindArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryBindArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DirectoryBindArgument (el: _Element): DirectoryBindArgument {
    if (!_cached_decoder_for_DirectoryBindArgument) { _cached_decoder_for_DirectoryBindArgument = function (el: _Element): DirectoryBindArgument {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let credentials: OPTIONAL<Credentials>;
    let versions: OPTIONAL<Versions> = DirectoryBindArgument._default_value_for_versions;
    let _unrecognizedExtensionsList: _Element[] = [];
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "credentials": (_el: _Element): void => { credentials = $._decode_explicit<Credentials>(() => _decode_Credentials)(_el); },
        "versions": (_el: _Element): void => { versions = $._decode_explicit<Versions>(() => _decode_Versions)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_DirectoryBindArgument,
        _extension_additions_list_spec_for_DirectoryBindArgument,
        _root_component_type_list_2_spec_for_DirectoryBindArgument,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); } ,
    );
    return new DirectoryBindArgument( /* SET_CONSTRUCTOR_CALL */
        credentials,
        versions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DirectoryBindArgument(el);
}

let _cached_encoder_for_DirectoryBindArgument: $.ASN1Encoder<DirectoryBindArgument> | null = null;

/**
 * @summary Encodes a(n) DirectoryBindArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryBindArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DirectoryBindArgument (value: DirectoryBindArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DirectoryBindArgument) { _cached_encoder_for_DirectoryBindArgument = function (value: DirectoryBindArgument, elGetter: $.ASN1Encoder<DirectoryBindArgument>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.credentials === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Credentials, $.BER)(value.credentials, $.BER)),
            /* IF_DEFAULT */ (value.versions === undefined || $.deepEq(value.versions, DirectoryBindArgument._default_value_for_versions) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_Versions, $.BER)(value.versions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DirectoryBindArgument(value, elGetter);
}


/* eslint-enable */
