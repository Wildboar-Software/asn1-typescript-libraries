/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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
import { AuthMethod, _decode_AuthMethod, _encode_AuthMethod } from "../CryptographicInformationFramework/AuthMethod.ta.mjs";


/**
 * @summary AuthReference
 * @description
 * 
 * Couples an authentication class to a Security Environment identifier (ISO/IEC
 * 7816-4). ISO/IEC 7816-15:2016 §8.2.8.
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
         * @description
         * Class of authentication (SM, external, user, or always). ISO/IEC
         * 7816-15:2016 §8.2.8.
         * @public
         * @readonly
         */
        readonly authMethod: AuthMethod,
        /**
         * @summary `seIdentifier`.
         * @description
         * Security Environment identifier. Clause 8.2.8 types this as
         * `Reference`; Annex A uses INTEGER. This module follows Annex A.
         * ISO/IEC 7816-15:2016 §8.2.8, Annex A.2.8.
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
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
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
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
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
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
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
    if (!_cached_encoder_for_AuthReference) { _cached_encoder_for_AuthReference = function (value: AuthReference): _Element {
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
