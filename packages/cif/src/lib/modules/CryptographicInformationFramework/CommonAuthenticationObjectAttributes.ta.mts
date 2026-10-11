/* eslint-disable */
import {
    OPTIONAL,
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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../CryptographicInformationFramework/Identifier.ta.mjs";
import { Reference, _decode_Reference, _encode_Reference } from "../CryptographicInformationFramework/Reference.ta.mjs";


/**
 * @summary CommonAuthenticationObjectAttributes
 * @description
 * 
 * `authId` shall be unique; private CIOs cross-reference it. ISO/IEC
 * 7816-15:2016 §8.2.18.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonAuthenticationObjectAttributes ::= SEQUENCE {
 *     authId          Identifier OPTIONAL,
 *     authReference   Reference OPTIONAL,
 *     seIdentifier    [0] Reference OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 * 
 * @class
 */
export
class CommonAuthenticationObjectAttributes {
    constructor (
        /**
         * @summary `authId`.
         * @description
         * Unique id used as `CommonObjectAttributes.authId` on protected CIOs.
         * ISO/IEC 7816-15:2016 §8.2.18.
         * @public
         * @readonly
         */
        readonly authId: OPTIONAL<Identifier>,
        /**
         * @summary `authReference`.
         * @description
         * ISO/IEC 7816-4 key-reference object for naming this authenticator in
         * Security Environments. ISO/IEC 7816-15:2016 §8.2.18.
         * @public
         * @readonly
         */
        readonly authReference: OPTIONAL<Reference>,
        /**
         * @summary `seIdentifier`.
         * @description
         * Security environment to which this authentication object belongs.
         * ISO/IEC 7816-15:2016 §8.2.18.
         * @public
         * @readonly
         */
        readonly seIdentifier: OPTIONAL<Reference>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CommonAuthenticationObjectAttributes
     * @description
     * 
     * This takes an `object` and converts it to a
     * `CommonAuthenticationObjectAttributes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonAuthenticationObjectAttributes`.
     * @returns {CommonAuthenticationObjectAttributes}
     */
    public static _from_object (_o: { [_K in keyof (CommonAuthenticationObjectAttributes)]: (CommonAuthenticationObjectAttributes)[_K] }): CommonAuthenticationObjectAttributes {
        return new CommonAuthenticationObjectAttributes(_o.authId, _o.authReference, _o.seIdentifier, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CommonAuthenticationObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonAuthenticationObjectAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("authId", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("authReference", true, $.or($.hasTag(_TagClass.universal, 2), $.hasTag(_TagClass.context, 1))),
    new $.ComponentSpec("seIdentifier", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CommonAuthenticationObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonAuthenticationObjectAttributes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonAuthenticationObjectAttributes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonAuthenticationObjectAttributes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonAuthenticationObjectAttributes: $.ASN1Decoder<CommonAuthenticationObjectAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonAuthenticationObjectAttributes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonAuthenticationObjectAttributes (el: _Element): CommonAuthenticationObjectAttributes {
    if (!_cached_decoder_for_CommonAuthenticationObjectAttributes) { _cached_decoder_for_CommonAuthenticationObjectAttributes = function (el: _Element): CommonAuthenticationObjectAttributes {
    let authId: OPTIONAL<Identifier>;
    let authReference: OPTIONAL<Reference>;
    let seIdentifier: OPTIONAL<Reference>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "authId": (_el: _Element): void => { authId = _decode_Identifier(_el); },
        "authReference": (_el: _Element): void => { authReference = _decode_Reference(_el); },
        "seIdentifier": (_el: _Element): void => { seIdentifier = $._decode_explicit<Reference>(() => _decode_Reference)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonAuthenticationObjectAttributes,
        _extension_additions_list_spec_for_CommonAuthenticationObjectAttributes,
        _root_component_type_list_2_spec_for_CommonAuthenticationObjectAttributes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CommonAuthenticationObjectAttributes(
        authId,
        authReference,
        seIdentifier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CommonAuthenticationObjectAttributes(el);
}

let _cached_encoder_for_CommonAuthenticationObjectAttributes: $.ASN1Encoder<CommonAuthenticationObjectAttributes> | null = null;

/**
 * @summary Encodes a(n) CommonAuthenticationObjectAttributes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonAuthenticationObjectAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_CommonAuthenticationObjectAttributes (value: CommonAuthenticationObjectAttributes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonAuthenticationObjectAttributes) { _cached_encoder_for_CommonAuthenticationObjectAttributes = function (value: CommonAuthenticationObjectAttributes): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.authId === undefined) ? undefined : _encode_Identifier(value.authId, $.BER)),
            /* IF_ABSENT  */ ((value.authReference === undefined) ? undefined : _encode_Reference(value.authReference, $.BER)),
            /* IF_ABSENT  */ ((value.seIdentifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_Reference, $.BER)(value.seIdentifier, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonAuthenticationObjectAttributes(value, elGetter);
}


/* eslint-enable */
