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
import { AuthMethod, AuthMethod_secureMessaging /* IMPORTED_LONG_NAMED_BIT */, secureMessaging /* IMPORTED_SHORT_NAMED_BIT */, AuthMethod_extAuthentication /* IMPORTED_LONG_NAMED_BIT */, extAuthentication /* IMPORTED_SHORT_NAMED_BIT */, AuthMethod_userAuthentication /* IMPORTED_LONG_NAMED_BIT */, userAuthentication /* IMPORTED_SHORT_NAMED_BIT */, AuthMethod_always /* IMPORTED_LONG_NAMED_BIT */, always /* IMPORTED_SHORT_NAMED_BIT */, _decode_AuthMethod, _encode_AuthMethod } from "../CryptographicInformationFramework/AuthMethod.ta.mjs";
// export { AuthMethod, AuthMethod_secureMessaging /* IMPORTED_LONG_NAMED_BIT */, secureMessaging /* IMPORTED_SHORT_NAMED_BIT */, AuthMethod_extAuthentication /* IMPORTED_LONG_NAMED_BIT */, extAuthentication /* IMPORTED_SHORT_NAMED_BIT */, AuthMethod_userAuthentication /* IMPORTED_LONG_NAMED_BIT */, userAuthentication /* IMPORTED_SHORT_NAMED_BIT */, AuthMethod_always /* IMPORTED_LONG_NAMED_BIT */, always /* IMPORTED_SHORT_NAMED_BIT */, _decode_AuthMethod, _encode_AuthMethod } from "../CryptographicInformationFramework/AuthMethod.ta.mjs";


/**
 * @summary AuthReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthReference ::= SEQUENCE {
 *     authMethod      AuthMethod,
 *     seIdentifier    INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AuthReference {
    constructor (
        /**
         * @summary `authMethod`.
         * @public
         * @readonly
         */
        readonly authMethod: AuthMethod,
        /**
         * @summary `seIdentifier`.
         * @public
         * @readonly
         */
        readonly seIdentifier: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a AuthReference
     * @description
     * 
     * This takes an `object` and converts it to a `AuthReference`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthReference`.
     * @returns {AuthReference}
     */
    public static _from_object (_o: { [_K in keyof (AuthReference)]: (AuthReference)[_K] }): AuthReference {
        return new AuthReference(_o.authMethod, _o.seIdentifier);
    }


}

/**
 * @summary The Leading Root Component Types of AuthReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthReference: $.ComponentSpec[] = [
    new $.ComponentSpec("authMethod", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("seIdentifier", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of AuthReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthReference: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthReference: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthReference: $.ASN1Decoder<AuthReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthReference (el: _Element): AuthReference {
    if (!_cached_decoder_for_AuthReference) { _cached_decoder_for_AuthReference = function (el: _Element): AuthReference {
    let authMethod!: AuthMethod;
    let seIdentifier: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "authMethod": (_el: _Element): void => { authMethod = _decode_AuthMethod(_el); },
        "seIdentifier": (_el: _Element): void => { seIdentifier = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthReference,
        _extension_additions_list_spec_for_AuthReference,
        _root_component_type_list_2_spec_for_AuthReference,
        undefined,
    );
    return new AuthReference(
        authMethod,
        seIdentifier
    );
}; }
    return _cached_decoder_for_AuthReference(el);
}

let _cached_encoder_for_AuthReference: $.ASN1Encoder<AuthReference> | null = null;

/**
 * @summary Encodes a(n) AuthReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthReference, encoded as an ASN.1 Element.
 */
export
function _encode_AuthReference (value: AuthReference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthReference) { _cached_encoder_for_AuthReference = function (value: AuthReference, elGetter: $.ASN1Encoder<AuthReference>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AuthMethod(value.authMethod, $.BER),
            /* IF_ABSENT  */ ((value.seIdentifier === undefined) ? undefined : $._encodeInteger(value.seIdentifier, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthReference(value, elGetter);
}


/* eslint-enable */
